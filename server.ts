import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { connectDB, getIsMongoConnected } from './config/db.js';
import apiRouter from './routes/api.js';
import Upload from './models/Upload.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProd = process.env.NODE_ENV === 'production';
const PORT = 3000; // Strictly hardcoded to 3000 as required by the platform

async function startServer() {
  const app = express();
  app.use(express.json());

  // Connect to the Database (MongoDB or local file fallback)
  await connectDB();

  // Serve uploaded files statically
  const uploadsPath = path.resolve(__dirname, 'uploads');
  
  // Custom middleware to restore missing/deleted files from MongoDB
  app.get('/uploads/:filename', async (req, res, next) => {
    try {
      const filename = req.params.filename;
      const localPath = path.join(uploadsPath, filename);

      // If file exists on local disk, serve it directly
      if (fs.existsSync(localPath)) {
        return res.sendFile(localPath);
      }

      // Try to restore from MongoDB if connected
      if (getIsMongoConnected()) {
        const fileDoc = await Upload.findOne({ filename });
        if (fileDoc) {
          // Ensure uploads directory exists
          if (!fs.existsSync(uploadsPath)) {
            fs.mkdirSync(uploadsPath, { recursive: true });
          }
          // Recreate the file locally
          const buffer = Buffer.from(fileDoc.data, 'base64');
          fs.writeFileSync(localPath, buffer);
          console.log(`🔄 [Restore] Successfully restored missing file ${filename} from MongoDB.`);
          return res.sendFile(localPath);
        }
      }
    } catch (err) {
      console.error('Error in uploads restoration middleware:', err);
    }
    next();
  });

  app.use('/uploads', express.static(uploadsPath));

  // Initialize Gemini Client
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }

  // Gemini proxy endpoint for personalized supplications
  app.post('/api/gemini/generate', async (req, res) => {
    try {
      const { prompt, systemInstruction } = req.body;
      if (!ai) {
        return res.status(500).json({ error: 'Gemini API key is not configured.' });
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: prompt,
        config: {
          systemInstruction: systemInstruction || 'You are an authentic Islamic scholar guiding Hajj pilgrims.',
          temperature: 0.7,
        },
      });

      res.json({ text: response.text });
    } catch (err: any) {
      console.error('Gemini API Error:', err);
      res.status(500).json({ error: err.message || 'Failed to generate supplication.' });
    }
  });

  // Mount other backend API routes
  app.use('/api', apiRouter);

  // Client Static Files / Vite Dev Middleware integration
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server running in ${isProd ? 'production' : 'development'} mode on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});

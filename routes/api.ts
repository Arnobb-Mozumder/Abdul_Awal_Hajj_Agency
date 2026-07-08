import { Router } from 'express';
import fs from 'fs';
import { getConfig, updateConfig } from '../controllers/configController.js';
import { getPackages, createPackage, updatePackage, deletePackage } from '../controllers/packageController.js';
import { getInquiries, createInquiry, updateInquiry, deleteInquiry } from '../controllers/inquiryController.js';
import { login } from '../controllers/authController.js';
import { upload } from '../middleware/upload.js';
import Upload from '../models/Upload.js';
import { getIsMongoConnected } from '../config/db.js';

const router = Router();

// Auth Route
router.post('/auth/login', login);

// Config Routes
router.get('/config', getConfig);
router.put('/config', updateConfig);

// Package Routes
router.get('/packages', getPackages);
router.post('/packages', createPackage);
router.put('/packages/:id', updatePackage);
router.delete('/packages/:id', deletePackage);

// Inquiry Routes
router.get('/inquiries', getInquiries);
router.post('/inquiries', createInquiry);
router.put('/inquiries/:id', updateInquiry);
router.delete('/inquiries/:id', deleteInquiry);

// File Upload Route
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }
    const filename = req.file.filename;
    const fileUrl = `/uploads/${filename}`;

    // If MongoDB is connected, save the file to the database for persistence
    if (getIsMongoConnected()) {
      try {
        const filePath = req.file.path;
        const fileData = fs.readFileSync(filePath);
        const base64Data = fileData.toString('base64');
        
        // Use findOneAndUpdate to replace existing if filename somehow collides, or simply create
        await Upload.findOneAndUpdate(
          { filename: filename },
          { contentType: req.file.mimetype, data: base64Data },
          { upsert: true, new: true }
        );
        console.log(`💾 [Database] Successfully persisted ${filename} to MongoDB.`);
      } catch (dbErr) {
        console.error('❌ Failed to save uploaded file to MongoDB:', dbErr);
      }
    }

    return res.json({
      success: true,
      message: 'File uploaded successfully',
      fileUrl: fileUrl,
      filename: filename
    });
  } catch (err: any) {
    console.error('File upload error:', err);
    return res.status(500).json({ error: 'Failed to upload file.' });
  }
});

export default router;

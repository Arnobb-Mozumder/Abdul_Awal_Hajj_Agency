import { Router } from 'express';
import { getConfig, updateConfig } from '../controllers/configController.js';
import { getPackages, createPackage, updatePackage, deletePackage } from '../controllers/packageController.js';
import { getInquiries, createInquiry, updateInquiry, deleteInquiry } from '../controllers/inquiryController.js';
import { login } from '../controllers/authController.js';
import { upload } from '../middleware/upload.js';

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
router.post('/upload', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }
    // Return relative url or file info
    const fileUrl = `/uploads/${req.file.filename}`;
    return res.json({
      success: true,
      message: 'File uploaded successfully',
      fileUrl: fileUrl,
      filename: req.file.filename
    });
  } catch (err: any) {
    console.error('File upload error:', err);
    return res.status(500).json({ error: 'Failed to upload file.' });
  }
});

export default router;

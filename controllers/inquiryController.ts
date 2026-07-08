import { Request, Response } from 'express';
import Inquiry from '../models/Inquiry.js';
import { localDb } from '../database/localDb.js';
import { getIsMongoConnected } from '../config/db.js';

export const getInquiries = async (req: Request, res: Response) => {
  try {
    if (getIsMongoConnected()) {
      const inquiries = await Inquiry.find().sort({ createdAt: -1 });
      return res.json(inquiries);
    } else {
      const inquiries = localDb.getInquiries();
      // Sort in reverse order (newest first)
      const sorted = [...inquiries].reverse();
      return res.json(sorted);
    }
  } catch (err: any) {
    console.error('Error fetching inquiries:', err);
    return res.status(500).json({ error: 'Failed to retrieve inquiries.' });
  }
};

export const createInquiry = async (req: Request, res: Response) => {
  try {
    const inquiryData = req.body;
    if (!inquiryData.id) {
      inquiryData.id = 'inq_' + Date.now();
    }
    if (!inquiryData.date) {
      inquiryData.date = new Date().toLocaleDateString('bn-BD', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }

    if (getIsMongoConnected()) {
      const newInquiry = await Inquiry.create(inquiryData);
      return res.status(201).json(newInquiry);
    } else {
      const inquiries = localDb.getInquiries();
      inquiries.push(inquiryData);
      localDb.saveInquiries(inquiries);
      return res.status(201).json(inquiryData);
    }
  } catch (err: any) {
    console.error('Error creating inquiry:', err);
    return res.status(500).json({ error: 'Failed to submit your inquiry.' });
  }
};

export const updateInquiry = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (getIsMongoConnected()) {
      const updatedInq = await Inquiry.findOneAndUpdate({ id }, updateData, { new: true });
      if (!updatedInq) {
        return res.status(404).json({ error: 'Inquiry not found' });
      }
      return res.json(updatedInq);
    } else {
      const inquiries = localDb.getInquiries();
      const idx = inquiries.findIndex((inq: any) => inq.id === id);
      if (idx === -1) {
        return res.status(404).json({ error: 'Inquiry not found' });
      }
      inquiries[idx] = { ...inquiries[idx], ...updateData };
      localDb.saveInquiries(inquiries);
      return res.json(inquiries[idx]);
    }
  } catch (err: any) {
    console.error('Error updating inquiry:', err);
    return res.status(500).json({ error: 'Failed to update inquiry.' });
  }
};

export const deleteInquiry = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (getIsMongoConnected()) {
      const deletedInq = await Inquiry.findOneAndDelete({ id });
      if (!deletedInq) {
        return res.status(404).json({ error: 'Inquiry not found' });
      }
      return res.json({ message: 'Inquiry deleted successfully', id });
    } else {
      const inquiries = localDb.getInquiries();
      const filtered = inquiries.filter((inq: any) => inq.id !== id);
      if (inquiries.length === filtered.length) {
        return res.status(404).json({ error: 'Inquiry not found' });
      }
      localDb.saveInquiries(filtered);
      return res.json({ message: 'Inquiry deleted successfully', id });
    }
  } catch (err: any) {
    console.error('Error deleting inquiry:', err);
    return res.status(500).json({ error: 'Failed to delete inquiry.' });
  }
};

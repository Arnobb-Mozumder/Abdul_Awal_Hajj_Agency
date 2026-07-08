import { Request, Response } from 'express';
import Package from '../models/Package.js';
import { localDb } from '../database/localDb.js';
import { getIsMongoConnected } from '../config/db.js';

export const getPackages = async (req: Request, res: Response) => {
  try {
    if (getIsMongoConnected()) {
      let packages = await Package.find();
      if (packages.length === 0) {
        // Seed initial packages into MongoDB
        const defaultPkgs = localDb.getPackages();
        packages = await Package.insertMany(defaultPkgs);
      }
      return res.json(packages);
    } else {
      const packages = localDb.getPackages();
      return res.json(packages);
    }
  } catch (err: any) {
    console.error('Error fetching packages:', err);
    return res.status(500).json({ error: 'Failed to retrieve packages.' });
  }
};

export const createPackage = async (req: Request, res: Response) => {
  try {
    const pkgData = req.body;
    // Generate a unique client-side ID if not provided
    if (!pkgData.id) {
      pkgData.id = 'pkg_' + Date.now();
    }

    if (getIsMongoConnected()) {
      const newPkg = await Package.create(pkgData);
      return res.status(201).json(newPkg);
    } else {
      const packages = localDb.getPackages();
      packages.push(pkgData);
      localDb.savePackages(packages);
      return res.status(201).json(pkgData);
    }
  } catch (err: any) {
    console.error('Error creating package:', err);
    return res.status(500).json({ error: 'Failed to create package.' });
  }
};

export const updatePackage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (getIsMongoConnected()) {
      const updatedPkg = await Package.findOneAndUpdate({ id }, updateData, { new: true });
      if (!updatedPkg) {
        return res.status(404).json({ error: 'Package not found' });
      }
      return res.json(updatedPkg);
    } else {
      const packages = localDb.getPackages();
      const idx = packages.findIndex((p: any) => p.id === id);
      if (idx === -1) {
        return res.status(404).json({ error: 'Package not found' });
      }
      packages[idx] = { ...packages[idx], ...updateData };
      localDb.savePackages(packages);
      return res.json(packages[idx]);
    }
  } catch (err: any) {
    console.error('Error updating package:', err);
    return res.status(500).json({ error: 'Failed to update package.' });
  }
};

export const deletePackage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (getIsMongoConnected()) {
      const deletedPkg = await Package.findOneAndDelete({ id });
      if (!deletedPkg) {
        return res.status(404).json({ error: 'Package not found' });
      }
      return res.json({ message: 'Package deleted successfully', id });
    } else {
      const packages = localDb.getPackages();
      const filtered = packages.filter((p: any) => p.id !== id);
      if (packages.length === filtered.length) {
        return res.status(404).json({ error: 'Package not found' });
      }
      localDb.savePackages(filtered);
      return res.json({ message: 'Package deleted successfully', id });
    }
  } catch (err: any) {
    console.error('Error deleting package:', err);
    return res.status(500).json({ error: 'Failed to delete package.' });
  }
};

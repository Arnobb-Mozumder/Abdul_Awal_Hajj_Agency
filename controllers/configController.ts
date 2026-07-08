import { Request, Response } from 'express';
import Config from '../models/Config.js';
import { localDb } from '../database/localDb.js';
import { getIsMongoConnected } from '../config/db.js';

export const getConfig = async (req: Request, res: Response) => {
  try {
    if (getIsMongoConnected()) {
      let config = await Config.findOne();
      if (!config) {
        // Seed initial default config if MongoDB is empty
        const defaultData = localDb.getConfig();
        config = await Config.create(defaultData);
      }
      // Merge with localDb.getConfig() to ensure any newly added default values are present
      const defaultData = localDb.getConfig();
      const mergedConfig = { ...defaultData, ...(config.toObject ? config.toObject() : config) };
      return res.json(mergedConfig);
    } else {
      // Local fallback
      const config = localDb.getConfig();
      return res.json(config);
    }
  } catch (err: any) {
    console.error('Error fetching config:', err);
    return res.status(500).json({ error: 'Failed to retrieve site configuration.' });
  }
};

export const updateConfig = async (req: Request, res: Response) => {
  try {
    const updatedData = req.body;
    
    if (getIsMongoConnected()) {
      let config = await Config.findOne();
      if (config) {
        Object.assign(config, updatedData);
        await config.save();
      } else {
        config = await Config.create(updatedData);
      }
      return res.json(config);
    } else {
      // Local fallback
      const config = localDb.saveConfig(updatedData);
      return res.json(config);
    }
  } catch (err: any) {
    console.error('Error updating config:', err);
    return res.status(500).json({ error: 'Failed to update site configuration.' });
  }
};

import { Request, Response } from 'express';

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const envUsername = process.env.ADMIN_USERNAME || 'admin';
    const envPassword = process.env.ADMIN_PASSWORD || 'admin123';

    if (username === envUsername && password === envPassword) {
      return res.json({
        success: true,
        message: 'Logged in successfully',
        token: 'token_' + Date.now() // Simple session token
      });
    } else {
      return res.status(401).json({
        success: false,
        error: 'ভুল ব্যবহারকারীর নাম অথবা পাসওয়ার্ড!'
      });
    }
  } catch (err: any) {
    console.error('Login error:', err);
    return res.status(500).json({ error: 'Failed to process login.' });
  }
};

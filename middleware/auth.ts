import { Request, Response, NextFunction } from 'express';

export const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ error: 'Unauthorized: No token provided.' });
  }

  const token = authHeader.split(' ')[1];
  
  if (!token || !token.startsWith('token_')) {
    return res.status(401).json({ error: 'Unauthorized: Invalid token.' });
  }

  // Token is valid for this session
  next();
};

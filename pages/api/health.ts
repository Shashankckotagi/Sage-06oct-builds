import type { NextApiRequest, NextApiResponse } from 'next';

interface HealthResponse {
  status: 'ok' | 'error';
  timestamp: string;
  uptime: number;
  environment: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<HealthResponse>) {
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  
  return res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'production',
  });
}

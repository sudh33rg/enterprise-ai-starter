import { NextFunction, Request, Response } from 'express';

const PII_REGEX = /\b(\d{12,16}|\d{3}-\d{2}-\d{4})\b/g;

export function safetyMiddleware(req: Request, _res: Response, next: NextFunction) {
  if (typeof (req as any).body?.messages === 'object') {
    (req as any).body.messages = (req as any).body.messages.map((m: any) => {
      if (m?.content && typeof m.content === 'string') {
        m.content = m.content.replace(PII_REGEX, '[REDACTED]');
      }
      return m;
    });
  }
  const tenant = (req as any).body?.tenantId ?? 'default';
  const allowedModels: Record<string, string[]> = { default: ['gpt-4o-mini','claude-3-haiku','gemini-1.5-pro'] };
  if ((req as any).body?.model && !allowedModels[tenant]?.includes((req as any).body.model)) {
    throw new Error(`Model ${(req as any).body.model} not allowed for tenant ${tenant}`);
  }
  next();
}

import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AiService } from './ai.service.js';
import crypto from 'node:crypto';

@Controller('ai')
export class AiController {
  constructor(private readonly svc: AiService) {}

  @Post('chat')
  async chat(
    @Body() body: {
      provider?: 'openai' | 'anthropic' | 'gemini';
      model?: string;
      messages: any[];
      tools?: string[];
      structured?: 'triage' | null;
      tenantId?: string;
    },
    @Res() res: Response,
  ) {
    const traceId = crypto.randomUUID();
    await this.svc.streamChat({
      provider: body.provider ?? 'openai',
      model: body.model ?? 'gpt-4o-mini',
      messages: body.messages,
      tools: body.tools ?? [],
      structured: body.structured ?? null,
      tenantId: body.tenantId ?? 'default',
      traceId,
      res,
    });
  }
}

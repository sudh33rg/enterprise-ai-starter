import { Injectable } from '@nestjs/common';
import { streamText, convertToCoreMessages } from 'ai';
import { providers, ProviderKey } from './providers.js';
import { toolMap } from './tools.js';
import { triageSchema } from './schemas.js';

@Injectable()
export class AiService {
  async streamChat(opts: {
    provider: ProviderKey;
    model: string;
    messages: any[];
    tools?: string[];
    structured?: 'triage' | null;
    traceId: string;
    tenantId: string;
    res: import('express').Response;
  }) {
    const { provider, model, messages, tools = [], structured, res, traceId, tenantId } = opts;

    const p = providers[provider];
    const modelInstance = p(model);

    const declaredTools = tools
      .map(name => toolMap[name])
      .filter(Boolean)
      .map(t => ({
        type: 'function' as const,
        name: t.name,
        description: t.description,
        parameters: t.parameters,
        execute: async (args: any) => t.execute(args, { tenantId, traceId }),
      }));

    const core = convertToCoreMessages(messages);

    const response = await streamText({
      model: modelInstance,
      messages: core,
      tools: declaredTools,
      ...(structured === 'triage' ? { output: { schema: triageSchema } } : {}),
    });

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache, no-transform');
    res.setHeader('Connection', 'keep-alive');

    for await (const delta of response.stream) {
      res.write(`data: ${JSON.stringify(delta)}\n\n`);
    }
    res.end();
  }
}

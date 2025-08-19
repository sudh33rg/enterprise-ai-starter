import type { JSONSchema7 } from 'json-schema';

type Tool = {
  name: string;
  description: string;
  parameters: JSONSchema7;
  execute: (input: any, ctx: { tenantId: string; traceId: string }) => Promise<any>;
};

export const tools: Tool[] = [
  {
    name: 'searchTickets',
    description: 'Full-text search support tickets',
    parameters: { $id: 'searchTickets', type: 'object', properties: { query: { type: 'string' }, limit: { type: 'integer', minimum: 1, maximum: 20, default: 5 } }, required: ['query'], additionalProperties: false },
    async execute(input, ctx) {
      const { query, limit = 5 } = input;
      return [{ id: 'TCK-123', title: `Result for ${query}`, score: 0.92 }].slice(0, limit);
    },
  },
];

export const toolMap = Object.fromEntries(tools.map(t => [t.name, t] as const));

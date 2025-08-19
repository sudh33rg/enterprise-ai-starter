import { z } from 'zod';

export const triageSchema = z.object({
  priority: z.enum(['low','medium','high']),
  rationale: z.string().min(5),
});
export type Triage = z.infer<typeof triageSchema>;

export const searchTicketsJsonSchema = {
  type: 'object',
  properties: {
    query: { type: 'string' },
    limit: { type: 'integer', minimum: 1, maximum: 20, default: 5 },
  },
  required: ['query'],
  additionalProperties: false,
} as const;

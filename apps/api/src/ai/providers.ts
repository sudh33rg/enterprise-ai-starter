import { createOpenAI } from '@ai-sdk/openai';
import { createAnthropic } from '@ai-sdk/anthropic';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

export const providers = {
  openai: createOpenAI({ apiKey: process.env.OPENAI_API_KEY! }),
  anthropic: createAnthropic({ apiKey: process.env.ANTHROPIC_API_KEY! }),
  gemini: createGoogleGenerativeAI({ apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY! }),
};

export type ProviderKey = keyof typeof providers;

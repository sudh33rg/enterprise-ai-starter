# Enterprise AI Starter (NestJS + React + Vercel AI SDK)

This is a **portable starter** for an enterprise-grade AI app:
- **NestJS** API with **Vercel AI SDK** streaming, **JSON Schema tools**, **structured outputs**, and **observability**.
- **React (Vite)** web app with a minimal chat UI.
- **Prisma + Postgres** ready (with message store).
- Security middleware for **PII scrubbing** and **model allow-lists**.

## Quickstart

```bash
npm i
# API
cd apps/api && cp .env.example .env && npm i && npm run dev
# WEB
cd ../web && npm i && npm run dev
```

Open http://localhost:5173 and set WEB to call API at http://localhost:3001 (see Vite proxy).

# Inventory API

A small Express + TypeScript inventory service. PostgreSQL stores products and Prisma manages schema migrations.

## Local commands
- Install: `npm install`
- Build: `npm run build`
- Test: `npm test`
- Start: `npm start`
- Apply migrations: `npm run db:migrate`

The API listens on `PORT` (default 3000). Configure `DATABASE_URL` and `JWT_SECRET` using `.env.example`.

# START Hack Vienna

Marketing site for **START Hack Vienna '26** — a 24-hour hackathon at HOIV.
Single-page Next.js 16 app, server-rendered, statically deployed.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript strict
- Tailwind CSS v4 (CSS-first config in `globals.css`)
- shadcn/ui primitives on top of `@base-ui/react`
- `next/font/local` for self-hosted fonts
- ESLint flat config · Prettier · Husky · lint-staged
- Deploys with `output: "standalone"` (Vercel or Docker)

## Setup

```bash
nvm use            # Node 24
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Script                 | What it does                                         |
| ---------------------- | ---------------------------------------------------- |
| `npm run dev`          | Next dev server with HMR                             |
| `npm run build`        | Production build                                     |
| `npm run start`        | Serve the production build                           |
| `npm run lint`         | ESLint                                               |
| `npm run lint:fix`     | ESLint with autofix                                  |
| `npm run typecheck`    | `tsc --noEmit`                                       |
| `npm run format`       | Prettier write                                       |
| `npm run format:check` | Prettier check                                       |
| `npm run check`        | lint + typecheck + format:check + build (used by CI) |
| `npm run bot:ingest`   | Rebuild the Qdrant knowledge collection              |
| `npm run bot:dev`      | Run the Discord RAG bot locally                      |
| `npm run bot:test`     | Run bot unit tests                                   |

A pre-commit hook runs `lint-staged` to format and lint staged files.

## Discord RAG bot

The Discord bot is a separate Node worker under `src/bot/`; it does not add API routes or runtime fetching to the marketing site.

1. Copy `.env.example` to `.env.local` and fill `DISCORD_TOKEN`, `GEMINI_API_KEY`, and Qdrant settings.
2. Start local Qdrant with `docker compose --profile bot up qdrant`.
3. Run `npm run bot:ingest` to index `knowledge/*.md` plus the site content from `src/features/marketing/content.ts`.
4. Run `npm run bot:dev` to start the worker.

The bot only responds when directly mentioned, ignores non-questions, and allows each Discord user one accepted question every five minutes.

## Structure

```
src/
  app/
    layout.tsx          # root layout, fonts, metadata
    page.tsx            # composes the marketing sections
    globals.css         # Tailwind v4 tokens + base styles
  components/
    ui/button.tsx       # shadcn primitive (Base UI)
  features/
    marketing/
      config.ts         # APPLY_URL + nav links
      icons.tsx         # extracted SVG icon components
      sections/         # one file per landing-page section
  lib/
    utils.ts            # cn()
public/
  fonts/                # self-hosted Suisse Intl, Iowan Old, Heming Variable
  images/               # SVG illustrations + photos
```

## Conventions

- **Server components by default.** Add `"use client"` only when a section needs state, effects, or browser APIs (currently: `site-header`, `case-tabs`, `faq`).
- File names are kebab-case; React components are PascalCase; utilities are camelCase.
- Imports use the `@/*` alias and are auto-sorted by `eslint-plugin-simple-import-sort`.
- Tailwind classes are auto-ordered by `prettier-plugin-tailwindcss`.
- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/).

## Deployment

The build emits a standalone Next.js server (`next.config.ts` sets `output: "standalone"`). Deploy directly to Vercel, or use the included `Dockerfile` / `docker-compose.yml`.

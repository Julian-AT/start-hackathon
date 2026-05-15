# Agent rules

Marketing site for START Hack Vienna '26. Single Next.js 16 App Router project, server-rendered, statically deployed. No auth, no CMS, no API routes.

## Stack

- Next.js 16 (App Router), React 19, TypeScript strict
- Tailwind CSS v4 (CSS-first config in `src/app/globals.css`)
- shadcn/ui primitives on top of `@base-ui/react`
- Typography via the [`geist`](https://www.npmjs.com/package/geist) package (`GeistSans` / `GeistMono` from `next/font` wrappers bundled with the npm package), variables applied on `<html>` in `src/app/layout.tsx`

This is **not** the Next.js you might know — APIs and conventions have changed. When in doubt, read the relevant guide in `node_modules/next/dist/docs/` before writing code.

## Structure

```
src/
  app/                              # routes, layout, metadata
  components/ui/                    # shadcn primitives
  features/marketing/
    config.ts                       # APPLY_URL + nav links (single source)
    icons.tsx                       # extracted SVG icon components
    sections/                       # one file per landing section
  lib/utils.ts                      # cn()
public/                             # fonts + images
```

Don't create `services/`, `providers/`, `hooks/`, or `types/` until something actually needs them. Don't introduce auth, a CMS, or runtime data fetching libraries.

## Conventions

- Server components by default. Reach for `"use client"` only when a section needs state, effects, or browser APIs.
- Kebab-case file names; PascalCase component names; camelCase utilities.
- Use the `@/*` alias for cross-directory imports; relative paths within a feature are fine.
- Tailwind utility classes only, no inline `style` except for dynamic values that can't be expressed in classes.
- No `console.log` in committed code (`console.warn` and `console.error` are allowed).
- Prefer deletion over abstraction. Don't speculate on future needs.

## Workflow

1. `npm run dev` — work locally.
2. Make small, focused commits using [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `chore:`, `refactor:`, `style:`, `docs:`, `perf:`, `ci:`).
3. The pre-commit hook formats and lints staged files.
4. `npm run check` must pass before opening a PR (lint + typecheck + format:check + build). CI runs the same command on `main`.

## Learned User Preferences

- Prefer **Geist Sans** (and Geist Mono for monospace) via the **`geist`** npm package unless the brief explicitly asks for a different family.

## Learned Workspace Facts

- `layout.tsx` applies **`GeistSans.variable`** and **`GeistMono.variable`** on `<html>`, exposing **`--font-geist-sans`** and **`--font-geist-mono`**. In **`@theme`**, wire **`--font-sans` / `--font-mono`** to those vars — never redefine `--font-geist-sans` as `var(--font-geist-sans)` (same self-referential pitfall as with any next/font `variable`).

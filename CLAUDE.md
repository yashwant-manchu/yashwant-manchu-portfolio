# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Yashwant Manchu, built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 3, and Framer Motion. Single-page layout composed of section components, plus one API route that emails contact-form submissions via Gmail SMTP (nodemailer).

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # next lint (eslint.config.mjs: next/core-web-vitals + next/typescript)
```

There is no test suite configured in this repo.

## Environment variables

The `/api/contact` route (`src/app/api/contact/route.ts`) requires `EMAIL_USER` and `EMAIL_PASS` (a Gmail account + app password) to send mail via `nodemailer.createTransport({ service: 'gmail' })`. Without them the route returns a 500. `.env*` files are gitignored — never commit credentials.

## Architecture

- **Path alias**: `@/*` maps to `src/*` (see `tsconfig.json`).
- **Entry point**: `src/app/page.tsx` is a client component (`'use client'`) that simply composes section components in order: `CustomCursor`, `Navigation`, `HeroSection`, `AboutSection`, `ExperienceSection`, `SkillsSection`, `ContactSection`, `Footer`. `ProjectsSection` exists in `src/components/sections/` but is intentionally not rendered (commented out in `page.tsx`) — leave it that way unless asked to restore it.
- **Fonts**: loaded exclusively via `next/font/google` in `src/app/layout.tsx` (Syne → `--font-syne` for headings, Outfit → `--font-outfit` for body, JetBrains Mono → `--font-mono`). Do not add `@import url(...)` font imports in `globals.css` — a comment there explicitly warns against it since Next's font optimization already self-hosts them.
- **Theming**: `src/components/providers/ThemeProvider.tsx` implements light/dark mode via a React context (`useTheme`), toggling the `dark` class on `<html>` and persisting to `localStorage`. Actual color values are CSS custom properties defined in `src/app/globals.css` under `:root` (light) and `.dark` (dark) — component styles reference `var(--bg-primary)`, `var(--text-primary)`, `var(--accent)`, `--pill-*`, `--glass-*`, `--shadow-*`, etc. rather than hardcoded Tailwind color classes, so theme edits generally belong in `globals.css`, not in the `tailwind.config.ts` palette (which defines a separate, currently-unused `primary`/`secondary`/`accent` color scale).
- **Custom cursor**: `globals.css` sets `cursor: none !important` globally so `src/components/ui/CustomCursor.tsx` can render a fully custom cursor; keep that in mind if native cursors ever need to show through.
- **Sections vs. layout**: `src/components/sections/*` holds the page's content blocks (one per landing-page section); `src/components/layout/*` holds cross-page chrome (`Navigation`, `Footer`).
- **Contact flow**: `ContactSection` posts to `/api/contact`, which validates input, sends a formatted HTML email via nodemailer, and returns JSON success/error responses.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

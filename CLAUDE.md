# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # local dev server (next dev) at http://localhost:3000
npm run build    # production build (next build)
npm run start    # serve the production build
npm run lint     # next lint (ESLint)
npx tsc --noEmit # typecheck — there is no test suite; this is the verification gate
```

There are no tests. After editing, run `npx tsc --noEmit` to verify changes compile (the config is `strict: true`, `noEmit: true`).

## What this is

A single-page marketing/positioning site for Hopperlace (hopperlace.ai), built on **Next.js 15 App Router + React 19 + Tailwind CSS v4 + TypeScript**. There is no backend, no database, no dynamic data — every route is statically rendered.

## Architecture

- **The entire landing page lives in `src/app/page.tsx`.** It is composed of small per-section function components (`Hero`, `StatStrip`, `Problem`, `HowItWorks`, `WhyTrust`, `WhoItsFor`, `Research`, `Team`, `BiggerPicture`, `Contact`, `Footer`) defined in that one file and assembled in the `Home` component. Sections carry visible numbering (01–07); keep that numbering consistent when adding/removing sections.
- **Repeated content is data-driven within `page.tsx`** — `stats`, `mechanics`, `validation`, `audiences`, `papers`, and `team` are arrays mapped into markup. Edit the array, not the JSX, to change list content or ordering.
- **`src/app/layout.tsx`** holds all SEO metadata (`title`, `description`, OpenGraph, Twitter, canonical) via Next's `metadata` export. The page `<title>`/`og:title`/`twitter:title` are three separate fields that must be kept identical.
- **`src/components/NavInner.tsx`** is the only `"use client"` component (mobile menu toggle state). Everything else is a Server Component.

## Content lives in three parallel surfaces — keep them in sync

When changing site copy or positioning, the same message usually appears in **all three** places, and they must be updated together:

1. **`src/app/page.tsx`** — the rendered, human-facing copy.
2. **JSON-LD structured data** — the `jsonLd` object at the top of `src/app/page.tsx` (`Organization`, `WebSite`, `ScholarlyArticle` schema.org entities). Feeds search engines.
3. **`public/llms.txt`** — a plain-text mirror of the site's positioning, team, research, and contact info, structured for LLMs.

The site tagline/positioning also appears in `layout.tsx` metadata (point 3 above). A repositioning change touches `page.tsx` (visible + JSON-LD), `layout.tsx` (metadata), and `public/llms.txt`. `public/robots.txt` and `src/app/sitemap.ts` are static and rarely need changes.

## Design system

The visual system is defined as Tailwind v4 CSS-first theme tokens in the `@theme` block of `src/app/globals.css` — there is no `tailwind.config.js`. Custom color tokens (`navy`, `navy-light`, `teal`, `teal-light`, `offwhite`, `warm-gray`, `terracotta`, `amber`, `text`, `text-muted`) and the `DM Sans` font are declared there and consumed as utility classes (`text-navy`, `bg-warm-gray`, `text-text-muted`, etc.). Add new colors to `@theme`, not inline. The aesthetic is editorial-scientific: understated, precise copy — avoid hype/superlatives.

## Conventions

- Import alias `@/*` maps to `src/*` (e.g. `@/components/NavInner`).
- Use HTML entities for apostrophes/quotes/dashes in JSX text (`&rsquo;`, `&ldquo;`, `&mdash;`) — existing copy does this throughout.

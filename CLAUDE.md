# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # local dev server (next dev) at http://localhost:3000
npm run build    # production build (next build)
npm run start    # serve the production build
npx tsc --noEmit # typecheck — there is no test suite; this is the verification gate
```

There are no tests, and ESLint is not configured (`npm run lint` will try to scaffold it interactively — don't). After editing, run `npx tsc --noEmit` to verify changes compile (the config is `strict: true`, `noEmit: true`).

## What this is

A single-page marketing/positioning site for Hopperlace (hopperlace.ai), built on **Next.js 15 App Router + React 19 + Tailwind CSS v4 + TypeScript**. There is no backend, no database, no dynamic data, and **no client-side JavaScript** — every component is a Server Component and every route is statically rendered.

## Architecture

- **The entire landing page lives in `src/app/page.tsx`.** It is composed of small per-section function components (`Header`, `Hero`, `Problem`, `Services`, `Method`, `Benchmarks`, `Grounding`, `FooterCta`) defined in that one file and assembled in the `Home` component. Sections carry visible numbering (01–06); keep that numbering consistent when adding/removing sections.
- **Repeated content is data-driven within `page.tsx`** — `navLinks`, `services`, `criteria`, and `benchmarkPoints` are arrays mapped into markup. Edit the array, not the JSX, to change list content or ordering. Entries whose copy contains entities/markup hold JSX fragments, not strings.
- **`src/lib/links.ts`** holds the mailto CTA hrefs (`CONSULTATION_HREF`, `DEMO_HREF`, `MAIL_HREF`, `EMAIL`). Every CTA points at one of these — change them there, not at the call sites. They may be swapped for scheduling links later.
- **`src/app/opengraph-image.tsx`** generates the 1200×630 link-preview card at build time via `next/og`; `twitter-image.tsx` re-exports it. Satori needs font *data*, not the Google Fonts stylesheet the page uses at runtime, so Source Serif 4 (400/600) and IBM Plex Mono (500) are committed as static TTFs in `src/app/fonts/` and read with `fs`. That directory exists solely for the OG image — the site itself loads fonts from Google.
- **`src/app/layout.tsx`** holds all SEO metadata (`title`, `description`, OpenGraph, Twitter, canonical) via Next's `metadata` export, plus the Google Fonts links. The page `<title>`/`og:title`/`twitter:title` all read from one `title` const — keep it that way.

## Content lives in three parallel surfaces — keep them in sync

When changing site copy or positioning, the same message usually appears in **all three** places, and they must be updated together:

1. **`src/app/page.tsx`** — the rendered, human-facing copy.
2. **JSON-LD structured data** — the `jsonLd` object at the top of `src/app/page.tsx` (`Organization` with `makesOffer` service entries, `WebSite`, `ScholarlyArticle` schema.org entities). Feeds search engines.
3. **`public/llms.txt`** — a plain-text mirror of the site's positioning, services, method, research, and contact info, structured for LLMs.

The site tagline/positioning also appears in `layout.tsx` metadata. A repositioning change touches `page.tsx` (visible + JSON-LD), `layout.tsx` (metadata), and `public/llms.txt`. `public/robots.txt` and `src/app/sitemap.ts` are static and rarely need changes.

## Design system

The visual system is defined as Tailwind v4 CSS-first theme tokens in the `@theme` block of `src/app/globals.css` — there is no `tailwind.config.js`. The aesthetic is editorial-scientific: rules instead of cards, square corners, no shadows, no animation, understated and precise copy — avoid hype/superlatives.

- **Colors:** `paper` (page), `tint` (the one tinted section, Benchmarks), `ink` (structural rules + dark footer), `body`, `muted`, `rule` (light inner rules), `dark-rule` / `dark-muted` (inside the dark footer), `accent` (labels, eyebrow, primary CTA, inline links). Add new colors to `@theme`, not inline.
- **Type:** `font-serif` = Source Serif 4 (headings), `font-sans` = IBM Plex Sans (body/UI), `font-mono` = IBM Plex Mono (section labels and markers). Sizes come straight from the design and are written as arbitrary values (`text-[62px]`, `text-[16.5px]`) rather than the Tailwind scale — match the handoff, don't round to the nearest step.
- **Layout:** full-width sections separated by 1px `ink` rules, page gutter 48px on desktop / 24px on mobile via the shared `gutter` const in `page.tsx`. There is no centered max-width container; grid lines run edge to edge.
- **Responsive:** a single custom breakpoint, `wide` (820px), declared as `--breakpoint-wide` in `@theme`. Below it, every multi-column grid stacks and the vertical rules become horizontal ones; the middle nav is hidden and the hero H1 drops to 40px. Use `wide:` — don't reach for `sm:`/`md:`/`lg:`.

Base element styles (`html`, `body`, `a`) in `globals.css` **must stay inside `@layer base`**. Unlayered CSS beats every Tailwind utility regardless of specificity, so an unlayered `a { color: inherit }` silently overrides `text-paper`/`text-ink` on button links.

## Conventions

- Import alias `@/*` maps to `src/*` (e.g. `@/lib/links`).
- Use HTML entities for apostrophes/quotes/dashes in JSX text (`&rsquo;`, `&ldquo;`, `&mdash;`) — existing copy does this throughout.
- Copy uses British spelling (`organisations`, `behaviour`).

## Design handoff

`design_handoff_hopperlace_landing/` holds the source design: `README.md` (spec — tokens, per-section measurements, responsive rules) and `Hopperlace Site.dc.html` (an HTML prototype with all styles inline; ignore its `<x-dc>` / `support.js` scaffolding). The current page is a high-fidelity build of that spec — consult it before changing spacing or type.

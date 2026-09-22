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

A two-page marketing/positioning site for Hopperlace (hopperlace.ai), built on **Next.js 15 App Router + React 19 + Tailwind CSS v4 + TypeScript**. There is no backend, no database, no dynamic data, and **no client-side JavaScript** — every component is a Server Component and every route is statically rendered.

The homepage leads with the product direction: Hopperlace compares AI tools on what they can do, what they're like to use, and how they fit your values. **ValueCompass (valuecompass.ai) is the values-focused product available today; the broader testing and comparison work is in development** — the copy is careful about that line, so keep current features and planned work clearly separated. Services are a secondary page reached from a modest invitation on the homepage.

## Architecture

- **Each route's page lives entirely in its own file** — `src/app/page.tsx` (`/`) and `src/app/services/page.tsx` (`/services`). Both are composed of small per-section function components defined in that one file and assembled in the default export. Sections carry visible numbering (01–04 on each page); keep that numbering consistent when adding/removing sections.
- **Header and footer are deliberately not shared.** The two pages' chrome differs (nav items, the homepage's "Try ValueCompass" button, padding, alignment, footer links), so each page owns its own `Header` and `Footer`. Don't factor them into a shared component without a reason — the duplication is ~30 lines and keeps each page readable end to end.
- **Repeated content is data-driven within each page file** — `navLinks`, `measures`, `questions` on the homepage; `navLinks`, `stages`, `exampleQuestions` on services. Edit the array, not the JSX, to change list content or ordering. Entries whose copy contains entities/markup hold JSX fragments, not strings.
- **`src/lib/links.ts`** holds outbound destinations and the mailto CTA hrefs (`VALUECOMPASS_URL`, `BUILDWITHWHY_URL`, `EVIDENCE_SYNTHESIS_URL`, `DECISION_HREF`, `MAIL_HREF`, `EMAIL`). Every CTA points at one of these — change them there, not at the call sites.
- **Screenshot paths live in the `shots` const** at the top of `src/app/page.tsx`. The files themselves are in `public/assets/`; see the handoff README for what each one is.
- **Images go through `next/image`** with their true intrinsic `width`/`height` and a `sizes` hint. The source PNGs are large (up to 630 KB); the optimizer serves them as ~40 KB WebP. The hero visual is `priority`; everything else stays lazy, which also means the CSS-hidden alternate preview in the ValueCompass section is never downloaded.
- **`src/app/opengraph-image.tsx`** generates the 1200×630 link-preview card at build time via `next/og`; `twitter-image.tsx` re-exports it. Satori needs font *data*, not the Google Fonts stylesheet the page uses at runtime, so Source Serif 4 (400/600) and IBM Plex Mono (500) are committed as static TTFs in `src/app/fonts/` and read with `fs`. That directory exists solely for the OG image — the site itself loads fonts from Google. Satori also can't read the Tailwind theme, so that file repeats the palette as consts; keep them in step with `@theme`.
- **`src/app/layout.tsx`** holds the homepage's SEO metadata (`title`, `description`, OpenGraph, Twitter, canonical) via Next's `metadata` export, plus the Google Fonts links. The services page exports its own `metadata`. The page `<title>`/`og:title`/`twitter:title` all read from one `title` const per file — keep it that way.

## Content lives in three parallel surfaces — keep them in sync

When changing site copy or positioning, the same message usually appears in **all three** places, and they must be updated together:

1. **`src/app/page.tsx` / `src/app/services/page.tsx`** — the rendered, human-facing copy.
2. **JSON-LD structured data** — the `jsonLd` object at the top of `src/app/page.tsx` (`Organization` with a `makesOffer` service entry, `WebApplication` for ValueCompass, `WebSite`, `WebPage`, `ScholarlyArticle` schema.org entities). Feeds search engines.
3. **`public/llms.txt`** — a plain-text mirror of the site's positioning, product, plans, founder and services, structured for LLMs.

The site tagline/positioning also appears in `layout.tsx` metadata. A repositioning change touches both page files (visible + JSON-LD), `layout.tsx` (metadata), and `public/llms.txt`. Adding a route also means `src/app/sitemap.ts`. `public/robots.txt` is static and rarely needs changes.

## Design system

The visual system is defined as Tailwind v4 CSS-first theme tokens in the `@theme` block of `src/app/globals.css` — there is no `tailwind.config.js`. The aesthetic is editorial-scientific: rules instead of cards, square corners, no shadows, no animation, understated and precise copy — avoid hype/superlatives.

- **Colors:** `paper` (page), `tint` (recessed bands — the hero visual, the ValueCompass preview panel, the whole "What we're building" section, services' "What you get"), `panel` (the raised cards that sit on `tint` or `paper`), `ink` (structural rules and dark buttons), `body`, `muted`, `rule` (light inner rules), `accent` (labels, eyebrow, primary CTA, inline links), `amber` (the one "In development" label — its only job is to read differently from `accent`), `shot` (the backdrop behind product screenshots, matching ValueCompass' own canvas). Add new colors to `@theme`, not inline.
- **Type:** `font-serif` = Source Serif 4 (headings), `font-sans` = IBM Plex Sans (body/UI), `font-mono` = IBM Plex Mono (section labels and markers). Sizes come straight from the design and are written as arbitrary values (`text-[19px]`, `text-[clamp(28px,3vw,38px)]`) rather than the Tailwind scale — match the handoff, don't round to the nearest step.
- **Layout:** full-width sections separated by 1px `ink` rules. There is no centered max-width container; grid lines run edge to edge. The page gutter is fluid and differs per page — `clamp(20px,3.5vw,48px)` on the homepage, `clamp(20px,4vw,56px)` on services. Each page sets it as `--g` on its wrapper div and its section components share a `gutter` const; use those rather than writing the clamp again.
- **Line-height:** `globals.css` resets `body { line-height: normal }`, because the handoff leaves labels, buttons and nav links at `normal` and Tailwind preflight's `1.5` would add several px to each. **Every element that needs a line-height therefore carries one explicitly** (`leading-[1.6]`, `leading-[1.2]`…). If new text looks cramped, add the leading — don't remove the reset.
- **Responsive:** three breakpoints, each owned by the grids it controls, declared in `@theme`. They are not a scale, so don't reach for `sm:`/`md:`/`lg:`:
  - `vc` (761px) — the ValueCompass card's 2fr/3fr split, and the swap between the two-card preview and the Claude-only crop.
  - `split` (800px) — the two- and three-column bands on both pages.
  - `hero` (861px) — the homepage hero's two columns.

  Below each, the band stacks and its vertical rule becomes a horizontal one (`border-t border-ink split:border-t-0 split:border-l`). Several grids still use `repeat(auto-fit, minmax(min(100%, Npx), 1fr))` straight from the handoff — that's fine for grids whose children have their own borders and gaps; use a named breakpoint when a rule has to flip.

Base element styles (`html`, `body`, `a`) in `globals.css` **must stay inside `@layer base`**. Unlayered CSS beats every Tailwind utility regardless of specificity, so an unlayered `a { color: inherit }` silently overrides `text-paper`/`text-ink` on button links. Tailwind preflight also makes links inherit `text-decoration`, so underlines are opt-in: add `underline underline-offset-2` where the design shows one.

## Conventions

- Import alias `@/*` maps to `src/*` (e.g. `@/lib/links`).
- Use HTML entities for apostrophes/quotes/dashes in JSX text (`&rsquo;`, `&ldquo;`, `&mdash;`) — existing copy does this throughout.
- Copy uses US spelling (`organizations`, `behavior`, `recognize`).
- **The site copy is approved, sentence by sentence.** It went through several rounds of the founder's own editing, and specific phrasings were asked for by name. Don't rewrite it as a side effect of a layout change, don't add explanatory sentences that restate the heading above them, and keep the claims honest: ValueCompass exists, the testing lab does not yet, the five comparison points are planned dimensions rather than results, and missing research is not a negative finding.

## Design handoff

`design_handoff_hopperlace_product/` holds the source design for the current site: `README.md` (spec — how to translate the prototypes, known deviations, asset map, claims to preserve) and the two `.dc.html` prototypes with all styles inline. Consult it before changing spacing or type. Ignore the `<x-dc>` / `support.js` scaffolding in the HTML.

`design_handoff_hopperlace_landing/` is the **superseded** handoff for the earlier AI-stack-consulting landing page. It is kept for reference only — nothing in the repo is built from it any more.

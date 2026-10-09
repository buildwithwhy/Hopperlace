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

A two-page marketing/positioning site for Hopperlace (hopperlace.ai), built on **Next.js 15 App Router + React 19 + Tailwind CSS v4 + TypeScript**. There is no backend, no database, no dynamic data, and **one small client component** — `src/components/ProjectTabs.tsx`, the services page's project-type switcher. Everything else is a Server Component and every route is statically rendered. Keep it that way: don't add `"use client"` elsewhere without a reason.

The homepage leads with Hopperlace's independent, hands-on testing of AI tools, and presents ValueCompass as the second part of the same decision: research on the companies behind those tools. **ValueCompass (valuecompass.ai) is available today; the tool testing is in development** — the copy is careful about that line, so keep current features and planned work clearly separated. Services are a secondary page reached from a modest invitation on the homepage.

## Architecture

- **Each route's page lives entirely in its own file** — `src/app/page.tsx` (`/`) and `src/app/services/page.tsx` (`/services`). Both are composed of small per-section function components defined in that one file and assembled in the default export. Sections carry visible numbering (01–03 on the homepage, 01–05 on services); keep that numbering consistent when adding/removing sections.
- **Header and footer are shared** (`src/components/SiteHeader.tsx`, `SiteFooter.tsx`), as in the v3 handoff. `SiteHeader` takes `current="home" | "services"`: on the homepage its section links are in-page, elsewhere they point to `/#…`, and "Services" is marked current. It also renders the skip link.
- **`src/lib/dimensions.ts`** defines the six testing dimensions (Functionality & reliability … Cost) once. The homepage's six questions, its example scenario's proposed checks and the services "Each option is compared on" list each pair them with their own copy via `withDimensions({...})`, which enforces one entry per dimension and the shared order/numbering.
- **`src/lib/ui.ts`** holds the class strings both pages share (`frame`, `label`, `sectionHeading`, `lead`, `marker`, `cardTitle`, `primaryButton`, `largeButton`, `proseLink`). Use them rather than re-typing the values.
- **Project types** on services are three tabs (`#choose`, `#develop`, `#improve` — the homepage links to these hashes). `ProjectTabs` reads the hash on load, scrolls to `#projects`, and supports arrow/Home/End keys. Panels are server-rendered and passed in as props; without JS the first one shows.
- **Repeated content is data-driven within each page file** — `questions`, `howWeTest`, `outcomes`, `scenarioChecks`, `projectTypes` on the homepage; `projects`, `comparedOn`, `evidenceKinds`, `pastWork`, `exampleFlow`, `certifications`, `principles` on services; nav and footer links in their components. Edit the array, not the JSX, to change list content or ordering. Entries whose copy contains entities/markup hold JSX fragments, not strings.
- **`src/lib/links.ts`** holds outbound destinations and the mailto CTA hrefs (`VALUECOMPASS_URL`, `BUILDWITHWHY_URL`, `EVIDENCE_SYNTHESIS_URL`, `MAIL_HREF`, `EMAIL`). Every CTA points at one of these — change them there, not at the call sites.
- **Screenshot paths live in the `shots` const** at the top of `src/app/page.tsx`. The files themselves are in `public/assets/`; see the handoff README for what each one is.
- **Images go through `next/image`** with their true intrinsic `width`/`height` and a `sizes` hint. The source PNGs are large (up to 630 KB); the optimizer serves them as ~40 KB WebP. Images stay lazy, which also means the CSS-hidden alternate preview in the ValueCompass section is never downloaded.
- **`src/app/opengraph-image.tsx`** generates the 1200×630 link-preview card at build time via `next/og`; `twitter-image.tsx` re-exports it. Satori needs font *data*, not the Google Fonts stylesheet the page uses at runtime, so Source Serif 4 (400/600) and IBM Plex Mono (500) are committed as static TTFs in `src/app/fonts/` and read with `fs`. That directory exists solely for the OG image — the site itself loads fonts from Google. Satori also can't read the Tailwind theme, so that file repeats the palette as consts; keep them in step with `@theme`.
- **`src/app/layout.tsx`** holds the homepage's SEO metadata (`title`, `description`, OpenGraph, Twitter, canonical) via Next's `metadata` export, plus the Google Fonts links. The services page exports its own `metadata`. The page `<title>`/`og:title`/`twitter:title` all read from one `title` const per file — keep it that way.

## Content lives in three parallel surfaces — keep them in sync

When changing site copy or positioning, the same message usually appears in **all three** places, and they must be updated together:

1. **`src/app/page.tsx` / `src/app/services/page.tsx`** — the rendered, human-facing copy.
2. **JSON-LD structured data** — the `jsonLd` object at the top of `src/app/page.tsx` (`Organization` with a `makesOffer` service entry, `WebApplication` for ValueCompass, `WebSite`, `WebPage`, `ScholarlyArticle` schema.org entities). Feeds search engines.
3. **`public/llms.txt`** — a plain-text mirror of the site's positioning, product, plans, founder and services, structured for LLMs.

The site tagline/positioning also appears in `layout.tsx` metadata. A repositioning change touches both page files (visible + JSON-LD), `layout.tsx` (metadata), and `public/llms.txt`. Adding a route also means `src/app/sitemap.ts`. `public/robots.txt` is static and rarely needs changes.

## Design system

The visual system is defined as Tailwind v4 CSS-first theme tokens in the `@theme` block of `src/app/globals.css` — there is no `tailwind.config.js`. The aesthetic is editorial: warm paper, restrained color, generous spacing, no shadows, no animation, understated and precise copy — avoid hype/superlatives.

- **Colors:** warm paper, forest green, sage and beige. `paper` (page), `panel` (raised cards on `sage`), `sage` (section bands), `selected` (selected tab, "You receive" boxes, hover on light cards), `beige` (credentials panel), `heading`, `body`, `muted`, `primary` / `primary-hover` / `on-primary` (filled buttons, the contact band), `live` ("Available now"), `dev` ("In development" and the dashed border around the planned test scenario — its only job is to read differently from green), `rule` / `rule-strong`, `shot` (the backdrop behind product screenshots). Add new colors to `@theme`, not inline.
- **Type:** `font-serif` = Source Serif 4 (headings), `font-sans` = IBM Plex Sans (body/UI), `font-mono` = IBM Plex Mono (section labels and markers). Sizes come straight from the design and are written as arbitrary values (`text-[19px]`, `text-[clamp(28px,3vw,38px)]`) rather than the Tailwind scale — match the handoff, don't round to the nearest step.
- **Layout:** every band is full-width (sage, paper or primary) with its content in a centered column: `frame` = `mx-auto max-w-[var(--max)] px-[var(--gutter)]`. `--max`, `--gutter`, `--section-y` and `--header-h` are plain custom properties on `:root` in `globals.css`; `html` has `scroll-padding-top` from `--header-h` so anchors land below the sticky header. Corners use `rounded-card` (4px), buttons and status pills `rounded-full`.
- **Italic:** the services page sets its three buyer quotes in Source Serif 4 italic, so the Google Fonts link in `layout.tsx` requests the italic 400 face. Nothing else uses it.
- **Base text:** `body` is 17px / 1.65 in `globals.css`, as in the handoff. Smaller text (cards, lists, captions) sets its own size and leading.
- **Responsive:** one named breakpoint, `vc` (761px, from the handoff's 760px media queries): the header's compact row (Founder link and CTA hidden, nav scrolls), the swap between the two ValueCompass previews, and the project tabs going from one column to three. Everything else uses `repeat(auto-fit, minmax(min(100%, Npx), 1fr))` grids straight from the handoff. Don't reach for `sm:`/`md:`/`lg:`.

Base element styles (`html`, `body`, `a`) in `globals.css` **must stay inside `@layer base`**. Unlayered CSS beats every Tailwind utility regardless of specificity, so an unlayered `a { color: inherit }` would silently override `text-on-primary`/`text-heading` on button links. Tailwind preflight also makes links inherit `text-decoration`, so underlines are opt-in: use `proseLink` or add `underline decoration-1 underline-offset-[3px]` where the design shows one.

## Conventions

- Import alias `@/*` maps to `src/*` (e.g. `@/lib/links`).
- Use HTML entities for apostrophes/quotes/dashes in JSX text (`&rsquo;`, `&ldquo;`, `&mdash;`) — existing copy does this throughout.
- Copy uses US spelling (`organizations`, `behavior`, `recognize`).
- **Past roles stay labelled as past roles.** The services page's "Selected experience from previous roles" cards (Enjoy, Beamery) describe work before Hopperlace and carry "Not Hopperlace client projects." Keep that label wherever they appear, including `llms.txt`. The services bio's third paragraph ("She now builds independently through Hopperlace…") was kept from the earlier version at the founder's request — don't swap in the v3 handoff's rewrite.
- **The site copy is approved, sentence by sentence, and comes verbatim from the handoff.** It went through several rounds of the founder's own editing, and specific phrasings were asked for by name. Don't rewrite it as a side effect of a layout change, don't add explanatory sentences that restate the heading above them, and keep the claims honest: ValueCompass exists, the tool testing does not yet, the example scenario's proposed checks and "How we'll test" are plans rather than results, and missing research is not a negative finding.

## Design handoff

`design_handoff_hopperlace_v3/` holds the source design for the current site: the `.dc.html` prototypes with all styles inline, the shared `hopperlace.css` tokens, and a README listing the known deviations. Consult it before changing spacing or type. Ignore the `<x-dc>` scaffolding in the HTML.

`design_handoff_hopperlace_homepage_v2/` and `design_handoff_hopperlace_landing/` are **superseded** handoffs, kept for reference only — nothing in the repo is built from them any more.

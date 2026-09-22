# Handoff: Hopperlace product site

## Overview

The source design for the **current** site: a homepage that leads with the
product direction (compare AI tools on capability, experience and values) and a
separate services page. It replaces the earlier consulting landing page, whose
handoff is archived in `design_handoff_hopperlace_landing/`.

Two files, both exported from Claude Design:

| File | Builds |
| --- | --- |
| `Hopperlace Homepage.dc.html` | `src/app/page.tsx` (`/`) |
| `Services.dc.html` | `src/app/services/page.tsx` (`/services`) |

The homepage is the consolidated concept: "Direction B" (decision workspace)
as the base, with "Direction A"'s five concrete comparison points in section 02.
The intermediate directions were exploratory and are not in this repo.

## About the design files

These are **design references written in HTML** — prototypes showing intended
look and behavior, not production code to copy. The markup is wrapped in a
custom `<x-dc>` element with a `support.js` runtime; **ignore that scaffolding
entirely**. All styles are inline `style=""` attributes, so the design reads
directly off the elements.

## Fidelity

**High-fidelity.** Colors, typography, spacing and copy are final — the copy
went through several rounds of the founder's own editing, so treat every
sentence as approved and don't reword it while changing layout.

## Translating the prototype

Three things need converting rather than copying:

1. **Container queries → media queries.** The prototypes set
   `container-type: inline-size` on a single root `<div>` and size everything in
   `cqw`. That root is full-width, so its inline size is the viewport width:
   `3.5cqw` becomes `3.5vw`, and `@container (max-width: 860px)` becomes the
   `hero` breakpoint. See the `@theme` block in `globals.css` for all three.
2. **`font:` shorthand resets line-height to `normal`.** Most of the prototype's
   labels, buttons and nav links rely on that. Tailwind preflight sets
   `line-height: 1.5` on `html`, which would add a few px to each of them, so
   `globals.css` resets `body { line-height: normal }` and every element that
   needs a line-height carries one explicitly.
3. **Page gutter.** The homepage runs `clamp(20px,3.5vw,48px)`, the services
   page `clamp(20px,4vw,56px)`. Each page sets its own `--g` on a wrapper and
   the section components share a `gutter` const.

## Known deviations from the prototypes

Both are places where the prototype's `auto-fit` grids produce a stray rule at
intermediate widths. The desktop and mobile renderings — the two the founder
reviewed — are unchanged.

- **Homepage, "What we're building".** The prototype keeps `border-left` on the
  right-hand panel after the grid has stacked, leaving a vertical rule down the
  left edge on narrow screens. The build flips it to a top rule below the
  `split` breakpoint, matching the rest of the site.
- **Services, "How it works" and "Questions / What you get".** Same fix: the
  prototype's `border-right` rules survive stacking. The build uses explicit
  columns at `split` and flips the rules to horizontal below it.

## Assets

The ValueCompass captures and the founder portrait live in `public/assets/`.
They are real screenshots of valuecompass.ai taken 22 Sep 2026 — do not
substitute mock-ups, and do not edit the text inside them.

| File | Used as |
| --- | --- |
| `vc-hero-priorities-v3.png` | Hero visual (crop: the question header and the two ticked preferences) |
| `vc-cards-crop.png` | ValueCompass section preview, desktop (both option cards) |
| `vc-card-claude.png` | ValueCompass section preview, below the `vc` breakpoint (Claude card only, so the "What we could not check" note stays readable) |
| `vc-01-choosing-priorities.png` | Full capture, linked from the hero |
| `vc-02-seeing-the-advice.png` | Full capture, linked as "summary of what was found" |
| `vc-03-evidence-on-the-cards.png` | Full capture, linked as "evidence on the cards" and from the preview |
| `yuyu-shen.jpg` | Founder portrait, 112px square |

Every preview links out to its full capture so the detail is reachable at a
readable size; keep that when changing the previews.

## Claims to preserve

The copy is deliberately careful about what exists and what doesn't. When
editing:

- ValueCompass is **available now**; the testing and comparison work is **in
  development**, and carries exactly one "In development" label.
- The five comparison points are **planned evaluation dimensions**, not
  published results. No metrics, scores or charts.
- Missing research is not a negative finding — "what we haven't established"
  is not the same as a company having disclosed nothing.
- Founder credentials are confirmed as written: nearly a decade, ICML 2026
  Technical AI Governance workshop **acceptance**, CCA-F and CCA-P. Past
  employment must never read as Hopperlace client results.
- No "best AI" claims, no values reduced to a single ethical score.

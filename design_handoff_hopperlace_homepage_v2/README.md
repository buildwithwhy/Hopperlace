# Handoff: Hopperlace homepage v2

## Overview

The source design for the **current** site. v2 re-centres the homepage on the
testing and comparison work, with ValueCompass as the part you can use today:

| File | Builds |
| --- | --- |
| `Hopperlace Homepage v2.dc.html` | `src/app/page.tsx` (`/`) |
| `Services.dc.html` | `src/app/services/page.tsx` (`/services`) |
| `screenshots/` | Reference renders of the example test scenario, open, on a narrow screen |

Page order: hero with "Two parts of one decision" (tool testing, ValueCompass)
→ 01 Tool testing, with an expandable example scenario → 02 ValueCompass → 03
Founder → services invitation. v1's separate "What we're building" and
"Approach" sections are gone; their content is folded into the hero cards and
section 01. The services page only changed its nav: "What we're building"
became "Testing" (`/#testing`).

It supersedes the v1 product handoff (in git history) and the original
consulting landing page (`design_handoff_hopperlace_landing/`, kept for
reference).

## About the design files

These are **design references written in HTML** — prototypes showing intended
look and behavior, not production code to copy. The markup is wrapped in a
custom `<x-dc>` element with a `support.js` runtime; **ignore that scaffolding
entirely**. All styles are inline `style=""` attributes, so the design reads
directly off the elements.

## Fidelity

**High-fidelity.** Colors, typography, spacing and copy are final. Use the copy
verbatim.

## Translating the prototype

1. **Container queries → media queries.** The prototype sizes everything in
   `cqw` against a full-width root, so `3.5cqw` becomes `3.5vw`, and the two
   container queries become the `hero` (901px) and `vc` (761px) breakpoints.
2. **`font:` shorthand resets line-height to `normal`.** `globals.css` resets
   `body { line-height: normal }` to match; every element that needs a
   line-height carries one explicitly.
3. **The example scenario is a native `<details>`.** It opens and closes with no
   JavaScript. The prototype hides the disclosure marker by making `<summary>`
   `display: flex`; Safari still draws it, so the build also hides
   `::-webkit-details-marker`.

## Known deviations from the prototype

- **"What we'll record / What you'll get".** The prototype keeps `border-left`
  on the right-hand column after its `auto-fit` grid stacks, leaving a stray
  vertical rule on narrow screens. The build flips it to a top rule below the
  `split` breakpoint, like every other band on the site.
- **Founder bio.** The prototype predates the founder's Evidence Synthesis AI
  sentence. The build keeps it, just before the research credential, as
  confirmed on 22 Sep 2026.

## Assets

Real screenshots of valuecompass.ai, 22 Sep 2026, in `public/assets/`. Don't
substitute mock-ups or edit the text inside them.

| File | Used as |
| --- | --- |
| `vc-cards-crop.png` | ValueCompass preview, desktop (both option cards) |
| `vc-card-claude.png` | ValueCompass preview below `vc` (Claude card only, so "What we could not check" stays readable) |
| `vc-01-choosing-priorities.png` | Full capture: "choosing priorities" |
| `vc-02-seeing-the-advice.png` | Full capture: "summary of what was found" |
| `vc-03-evidence-on-the-cards.png` | Full capture: "evidence on the cards", and the preview's link |
| `yuyu-shen.jpg` | Founder portrait, 112px square |

v1's hero crop (`vc-hero-priorities-v3.png`) is no longer used and was removed.

## Claims to preserve

- ValueCompass is **live**; tool testing is **in development**. The page labels
  each once, in the hero cards and the section eyebrows.
- The example scenario, "What we'll record" and "What you'll get" describe
  **planned** testing. No results, scores or metrics.
- Missing research is not a negative finding.
- Founder credentials as written: nearly a decade, ICML 2026 Technical AI
  Governance workshop **acceptance**, CCA-F and CCA-P. Past employment must
  never read as Hopperlace client results.

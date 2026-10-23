# Hopperlace handoff v3 — shared design system

Source design for the current site, exported from Claude Design ("Hopperlace services page update", Oct 2026; refreshed 9 Oct with the six-dimension testing framework, and 23 Oct with the services rework: "How we work", "Define and test an AI opportunity" in place of "Develop and test an AI idea", expandable project cards, and a separate Evaluation section).

- `Home.dc.html` → `src/app/page.tsx`
- `Services.dc.html` → `src/app/services/page.tsx` (+ `src/components/ProjectTabs.tsx`)
- `SiteHeader.dc.html` / `SiteFooter.dc.html` → `src/components/SiteHeader.tsx` / `SiteFooter.tsx`
- `hopperlace.css` → `@theme` and `:root` in `src/app/globals.css`

Styles are inline; ignore the `<x-dc>` / `support.js` scaffolding (not committed). Assets are the ones already in `public/assets/`.

Known deviations, by decision of the founder:
- Services bio, third paragraph: the live wording ("She now builds independently through Hopperlace…") was kept instead of the handoff's rewrite.
- The project cards' JS media queries (861px for three across; 600px/1024px for the "How we work" stages) are CSS viewport variants (`min-[861px]:` etc.); the component only checks the 861px query on click.
- The draft-plan illustration in the services example drops its box shadow — the site uses none — and the chevrons don't animate.
- Numbered dimension items (scenario checks, services "compared on") add `align-content: start`, so a one-line title doesn't open a gap above its description when a neighbour's title wraps.

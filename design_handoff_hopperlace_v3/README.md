# Hopperlace handoff v3 — shared design system

Source design for the current site, exported from Claude Design ("Hopperlace services page update", Oct 2026).

- `Home.dc.html` → `src/app/page.tsx`
- `Services.dc.html` → `src/app/services/page.tsx` (+ `src/components/ProjectTabs.tsx`)
- `SiteHeader.dc.html` / `SiteFooter.dc.html` → `src/components/SiteHeader.tsx` / `SiteFooter.tsx`
- `hopperlace.css` → `@theme` and `:root` in `src/app/globals.css`

Styles are inline; ignore the `<x-dc>` / `support.js` scaffolding (not committed). Assets are the ones already in `public/assets/`.

Known deviations, by decision of the founder:
- Services bio, third paragraph: the live wording ("She now builds independently through Hopperlace…") was kept instead of the handoff's rewrite.
- The tab switcher's 760px container query is approximated with the `vc` viewport breakpoint.

# Handoff: Hopperlace Landing Page

## Overview
Landing page for hopperlace.ai. The company pivoted to **AI stack evaluation & curation** plus **AI architecture support**. The page communicates a measured, rigorous, evaluator's tone: editorial layout, restrained palette, no hype language, no testimonials, no metrics.

## About the Design Files
The file in this bundle (`Hopperlace Site.dc.html`) is a **design reference created in HTML** — a prototype showing intended look and behavior, not production code to copy directly. The task is to **recreate this design in the target codebase's environment** (React, Astro, plain HTML/CSS, etc.) using its established patterns — or, if no environment exists yet, choose the most appropriate stack for a simple static marketing site (plain HTML/CSS or Astro are good fits; this page needs no client-side JS).

Note on the source file format: the HTML file wraps the markup in a custom `<x-dc>` element with a `support.js` runtime — **ignore that scaffolding entirely**. Everything you need is the markup inside it; all styles are inline `style=""` attributes, so the design can be read directly from the elements.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and copy are final. Recreate pixel-perfectly (extract the inline styles into proper CSS classes/tokens as suits the codebase).

## Page Structure (single page, top to bottom)
All sections are full-width, separated by `1px solid #16181A` horizontal rules. Max content is laid out with `48px` horizontal page padding (no centered max-width container — the grid lines run edge to edge).

### 1. Header (sticky)
- Sticky top, background `#F6F7F7`, bottom border `1px #16181A`, padding `22px 48px`, z-index above content.
- Grid: `1fr auto auto`, gap `40px`, vertically centered.
- Left: wordmark "Hopperlace" — Source Serif 4, 600, 18px, letter-spacing .01em.
- Middle: nav links "The problem / Services / Method / Benchmarks / Grounding" — IBM Plex Sans 500 13px, color `#4C5257`, no underline; anchor-scroll to sections (sections have `scroll-margin-top: 70px` to clear the sticky header).
- Right: button "Book a consultation" — `mailto:hello@hopperlace.ai?subject=Consultation`, background `#16181A`, text `#F6F7F7`, IBM Plex Sans 500 13px, padding `10px 20px`, **no border-radius** (all buttons on the page are square).

### 2. Hero
- Padding `88px 48px 72px`, bottom border 1px `#16181A`.
- Eyebrow: "AI STACK EVALUATION & CURATION · AI ARCHITECTURE SUPPORT · INDEPENDENT BENCHMARKS" — IBM Plex Mono 500 12px, letter-spacing .14em, uppercase, color accent blue.
- H1 (max-width 880px): "Most AI stacks were never evaluated." then line break, "Yours can be." — Source Serif 4, 400, 62px/1.08, letter-spacing −.015em. Second line colored `#767D83`.
- Below, a 2-col grid (gap 48px, items aligned to bottom):
  - Left: lede paragraph (max-width 520px, IBM Plex Sans 400 18px/1.65, `#4C5257`): "Hopperlace helps organisations choose and run the right AI stack — models and tools evaluated against your actual tasks, your risk profile, and the trustworthiness of the makers behind them. Then we help you put it together properly."
  - Right (aligned to end): primary button "Book a consultation" (background accent blue, text `#F6F7F7`, 500 15px, padding `16px 30px`) + secondary button "The benchmark platform ↓" (anchor link to `#benchmarks`, 1px `#16181A` border, text `#16181A`, padding `15px 30px`).

### 3. Section 01 / The problem (`#problem`)
- 2-col grid, columns divided by 1px `#16181A` vertical rule; bottom border 1px `#16181A`. Each cell padding `56px 48px`.
- Left cell: section label "01 / THE PROBLEM" (IBM Plex Mono 500 12px, letter-spacing .12em, accent blue) then H2 "Hype, defaults, and vendor claims don’t lead to the best AI stacks." — Source Serif 4 400 32px/1.25, letter-spacing −.01em.
- Right cell (content bottom-aligned): body copy IBM Plex Sans 400 17px/1.65 `#4C5257`: "The explosion of AI models and tools has outrun anyone's ability to evaluate them — so most AI stacks get chosen by chance and marketing. An evaluation asks hard questions: does this work on your tasks, within your risk profile, and can your team use it effectively?"

### 4. Sections 02 + 03 / Services (`#services`)
- Same 2-col grid with center vertical rule and bottom border. Each cell padding `56px 48px`.
- Left cell — label "02 / AI STACK EVALUATION & CURATION"; H3 "One discipline: evaluate, then curate." (Source Serif 4 500 24px/1.3); body (IBM Plex Sans 400 16px/1.65 `#4C5257`): "Most stacks grew by accretion — tools adopted over the years with no coherent strategy. We look at what you have against what you actually need: does each piece fit, is there something better, and what has to change. No stack yet? We start from your tasks and curate one. Either way, every recommendation rests on evaluation, not vendor claims."
- Right cell — label "03 / AI ARCHITECTURE SUPPORT"; H3 "Put together to work as a whole."; body: "Choosing right is half the work. We help with the other half — architecture, integration, and the handoffs between models, tools, and people — so the stack works as a system, not a pile of subscriptions."

### 5. Section 04 / Method (`#method`)
- Full-width block, padding `56px 48px`, bottom border 1px `#16181A`.
- Label "04 / METHOD"; H2 "What every candidate is evaluated against." (32px serif, max-width 640px).
- Below: 3-col grid, top border 1px `#16181A`, columns separated by 1px `#CFD3D6` (lighter) vertical rules. Column padding `28px 32px` (first col: no left padding; last col: no right padding).
- Each column: roman numeral marker ("i." / "ii." / "iii.", IBM Plex Mono 400 14px `#767D83`), H3 (Source Serif 4 500 19px/1.35), body (IBM Plex Sans 400 15px/1.6 `#4C5257`):
  1. **Task-specific capability** — "Performance measured on the work you actually do — not someone else's benchmark or a leaderboard average."
  2. **Trust & reliability** — "Consistent behaviour under pressure. Systems that know their limits and hand off well — from makers with a record worth trusting."
  3. **User experience** — "A stack your people will actually use well — clear, low-friction, and honest about what it's doing."

### 6. Section 05 / Product — Benchmarks (`#benchmarks`)
- Background `#ECEEF0` (slightly darker tint — the only tinted light section; signals "product" vs the service sections), bottom border 1px `#16181A`.
- 2-col grid, right column separated by a 1px `#16181A` vertical rule. Both cells padding `64px 48px`.
- Left cell:
  - Label "05 / PRODUCT — IN DEVELOPMENT" (same mono label style, accent blue).
  - H2 "Independent benchmarks, as a platform." (Source Serif 4 400 32px/1.25, max-width 520px).
  - Body (IBM Plex Sans 400 16.5px/1.65 `#4C5257`, max-width 520px): "We're building the benchmarks we wished existed: independent, task-grounded evaluations of AI models *and* tools — run by evaluators with no stake in the outcome. What our practice learns by hand, the platform will make repeatable." ("and" is italic.)
  - CTA row (flex, gap 14px, centered): button "Book a demo" — `mailto:hello@hopperlace.ai?subject=Benchmark platform demo`, background `#16181A`, text `#F6F7F7`, 500 14px, padding `13px 24px` — plus muted note "Early access, rolling out gradually." (13.5px `#767D83`).
- Right cell (content vertically centered): three rows, divided by 1px `#CFD3D6` rules, each a `24px 1fr` grid (gap 16px, padding `18px 0`) with a mono "→" marker (`#767D83`) and a 15px/1.55 body where the lead phrase is 600-weight `#16181A`:
  1. **AI models and tools alike.** "Not just abstract model charts — how the tools and systems built around them perform in real environments."
  2. **Task-grounded.** "Scored against real work, using the same criteria as our evaluations: capability, trust & reliability, user experience."
  3. **Independent.** "No placement fees, no vendor sponsorship of results."

### 7. Section 06 / Grounding (`#grounding`)
- Padding `64px 48px`, bottom border 1px `#16181A`. Grid `220px 1fr`, gap 48px.
- Left: label "06 / GROUNDING".
- Right (max-width 680px, 32px vertical gap):
  - Lead statement, Source Serif 4 400 22px/1.55 `#16181A`: "Our method comes from published research. The founder's work on deference-aware evaluation was accepted at ICML's Technical AI Governance workshop, 2026."
  - Two equal columns (flex, gap 48px, IBM Plex Sans 400 15px/1.6 `#4C5257`):
    - "**Yuyu Shen** — Founder. Statistically trained data scientist turned product manager, with more than a decade building and evaluating AI systems and products in fintech, employment, supply chain, and consumer banking. CCA-F certified (Certified Claude Architect – Foundational)." (name in 600 weight, `#16181A`)
    - "Hopperlace is a product company that starts with service. We also build [Evidence Synthesis AI](https://www.evidencesynthesisai.com/), an AI screening product for systematic review and pharmacovigilance." (link colored accent blue)

### 8. Footer CTA (dark)
- Background `#16181A`, text `#F6F7F7`, padding `72px 48px`.
- Grid `1fr auto`, gap 48px, vertically centered: H2 "Get your stack evaluated before it gets expensive." (Source Serif 4 400 42px/1.15, letter-spacing −.01em, max-width 640px) + inverted button "Book a consultation" (background `#F6F7F7`, text `#16181A`, 500 16px, padding `18px 34px`).
- Footer row below (margin-top 64px, top border 1px `#3A3F44`, padding-top 20px, flex space-between, IBM Plex Sans 400 13px `#8B9298`): "© 2026 Hopperlace" and a `mailto:hello@hopperlace.ai` link.

## Interactions & Behavior
- Nav links smooth-scroll to anchored sections (`scroll-behavior: smooth` on html; `scroll-margin-top: 70px` on targets).
- All CTAs are mailto links: `mailto:hello@hopperlace.ai?subject=Consultation` (consultation), `mailto:hello@hopperlace.ai?subject=Benchmark platform demo` (demo), or plain `mailto:hello@hopperlace.ai`. May be swapped for scheduling links later — keep them as shared constants.
- Link/button hover: opacity ~0.82 (subtle; no color shifts, no underline changes).
- No animations, no client-side state. Fully static.
- Responsive: the prototype is desktop-only (designed at ~1080–1440px). For implementation: collapse 2-col grids and the method 3-col grid to single column below ~820px; hero H1 down to ~40px; hide or collapse middle nav on mobile; keep the vertical rules only on desktop (they become horizontal dividers when stacked).

## Design Tokens
- **Colors:** background `#F6F7F7`; ink `#16181A`; body text `#4C5257`; muted `#767D83`; light rule `#CFD3D6`; dark-section rule `#3A3F44`; dark-section muted text `#8B9298`; accent blue `oklch(0.45 0.09 250)` (≈ `#33608F`) — used for section labels, eyebrow, primary CTA background, inline links.
- **Borders:** structural rules 1px solid `#16181A`; inner/secondary rules 1px `#CFD3D6`.
- **Radius:** 0 everywhere (square buttons).
- **Shadows:** none.
- **Type:** headlines Source Serif 4 (weights 400–600, negative letter-spacing on large sizes); UI/body IBM Plex Sans (400/500/600); labels/markers IBM Plex Mono (400/500, letter-spacing .12–.14em, uppercase for labels). Google Fonts. Scale: 62 (h1), 42 (footer h2), 32 (section h2), 24 (service h3), 22 (grounding lead), 19 (method h3), 18/17/16/15 (body), 13 (nav/footer), 12 (labels).
- **Spacing:** page gutter 48px; section padding 56–88px vertical; grid gaps 40–48px.

## Assets
None. No images, no icons — typography and rules only.

## Files
- `Hopperlace Site.dc.html` — the full design (read the markup inside `<x-dc>`; all styles inline).

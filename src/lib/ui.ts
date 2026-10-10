/**
 * Class strings shared by both pages. Colors come from the v3 handoff; the
 * typography follows the original editorial site — serif headings and card
 * titles, compact sans body, letter-spaced mono labels. Change them here to
 * restyle every instance.
 */

/** Centered column with the fluid page gutter; every band uses it. */
export const frame = "mx-auto max-w-[var(--max)] px-[var(--gutter)]";

/* Mono label type without a color, for call sites that need their own
   (Tailwind won't resolve two text colors on one element). */
export const labelType =
  "font-mono text-[12px] font-medium tracking-[0.12em] uppercase";
export const smallLabelType =
  "font-mono text-[11px] font-medium tracking-[0.12em] uppercase";

/** Section eyebrows and numbers ("02 / Tool testing"), in the accent color. */
export const label = `${labelType} text-primary`;

/** Secondary mono labels: list headings, captions, card kickers. */
export const smallLabel = `${smallLabelType} text-muted`;

export const sectionHeading =
  "font-serif text-[clamp(28px,3vw,38px)] leading-[1.2] font-normal tracking-[-0.015em] text-heading text-pretty";

/** Introductory paragraph under a heading. */
export const lead =
  "text-[clamp(16px,1.4vw,19px)] leading-[1.6] text-body text-pretty";

/** Mono step and list numbers (1, 01, i.). */
export const marker = "font-mono text-[13px] font-medium text-muted";

/** Card and panel titles. */
export const cardTitle =
  "font-serif text-[clamp(19px,1.7vw,22px)] leading-[1.3] font-medium text-heading text-pretty";

/** Titles of items in lists and step rows. */
export const itemTitle =
  "font-serif text-[18px] leading-[1.3] font-medium text-heading";

/** Body copy inside cards and lists. */
export const cardText = "text-[15px] leading-[1.55] text-pretty";

/* No display or self-alignment here: the header hides its copy below `vc`
   (a shared `inline-flex` would beat `hidden`) and centers it in its row,
   while buttons in a column need `self-start`. Call sites add both. */
export const primaryButton =
  "items-center rounded-full bg-primary font-medium text-on-primary no-underline hover:bg-primary-hover";

/** The larger button size used for each section's main action. */
export const largeButton = "inline-flex min-h-12 px-6 text-[15px]";

export const proseLink =
  "text-primary underline decoration-1 underline-offset-[3px] hover:text-heading";

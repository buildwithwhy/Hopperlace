/**
 * Class strings shared by both pages. The values come straight from the
 * design handoff; change them here to restyle every instance.
 */

/** Centered column with the fluid page gutter; every band uses it. */
export const frame = "mx-auto max-w-[var(--max)] px-[var(--gutter)]";

/** Small mono labels: eyebrows, section numbers, list headings. */
export const label =
  "font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-muted";

export const sectionHeading =
  "font-serif text-[clamp(28px,2.8vw,38px)] leading-[1.18] font-normal tracking-[-0.015em] text-heading text-balance";

/** Introductory paragraph under a heading. */
export const lead =
  "text-[clamp(17px,1.4vw,19px)] leading-[1.6] text-heading text-pretty";

/** Mono step and list numbers (1, 01, i.). */
export const marker =
  "font-mono text-[13px] font-medium tracking-[0.04em] text-primary";

/** Card titles in IBM Plex Sans. */
export const cardTitle = "text-[21px] leading-[1.3] font-semibold text-heading";

/* No display utility here: the header hides its copy below `vc`, and a shared
   `inline-flex` would beat `hidden`. Call sites add `inline-flex`. */
export const primaryButton =
  "items-center self-start rounded-full bg-primary font-medium text-on-primary no-underline hover:bg-primary-hover";

/** The large button size used for each section's main action. */
export const largeButton = "inline-flex min-h-[52px] px-7 text-[17px]";

export const proseLink =
  "text-primary underline decoration-1 underline-offset-[3px] hover:text-heading";

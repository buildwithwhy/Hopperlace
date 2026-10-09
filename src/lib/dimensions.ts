/**
 * The six dimensions every tool comparison asks about, in display order.
 * They appear on the homepage (the six questions and the example scenario's
 * proposed checks) and on services ("Each option is compared on"), each with
 * its own wording — rename a dimension here, not at the call sites.
 */
export const DIMENSIONS = [
  { id: "functionality", name: "Functionality & reliability" },
  { id: "effort", name: "User effort & expertise" },
  { id: "oversight", name: "Oversight & control" },
  { id: "maintainability", name: "Maintainability" },
  { id: "portability", name: "Portability & dependencies" },
  { id: "cost", name: "Cost" },
] as const;

export type DimensionId = (typeof DIMENSIONS)[number]["id"];

/** Pairs each dimension with page-specific copy, keeping the shared order. */
export function withDimensions<T>(copy: Record<DimensionId, T>) {
  return DIMENSIONS.map((d, i) => ({
    ...d,
    number: String(i + 1).padStart(2, "0"),
    body: copy[d.id],
  }));
}

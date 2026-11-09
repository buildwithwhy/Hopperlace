/* The Hopperlace symbol: navy uprights and crossbar with a coral chevron and
   dot. Decorative wherever it sits beside the wordmark, so it is hidden from
   assistive technology. `src/app/icon.svg` is the same drawing. */
export function HopperlaceMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 411 514"
      aria-hidden="true"
      focusable="false"
      className={`block w-auto flex-none ${className ?? ""}`}
    >
      <g transform="translate(-394 -343)">
        <rect className="fill-navy" x="394" y="343" width="100.5" height="514" rx="32" />
        <rect className="fill-navy" x="705" y="343" width="100.5" height="514" rx="32" />
        <path className="fill-navy" d="M493 557 L600 636.5 L706 557 L706 654 L493 654 Z" />
        <path className="fill-coral" d="M512.5 548 L687.5 548 L600 614 Z" />
        <circle className="fill-coral" cx="600" cy="779.5" r="11.2" />
      </g>
    </svg>
  );
}

"use client";

import { useEffect, useRef } from "react";

/* The compact header's menu, below the `vc` breakpoint. It is a native
   <details>, so it opens and closes without JavaScript; the script only
   closes it after a link is chosen, on Escape, and when the viewport widens
   past `vc` (where the full nav takes over). The panel's links are
   server-rendered and passed in as children. It drops below the sticky
   header, which is its containing block, and overlays the page. */
export function SiteMenu({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 761px)");
    const close = () => {
      if (wide.matches && ref.current) ref.current.open = false;
    };
    wide.addEventListener("change", close);
    return () => wide.removeEventListener("change", close);
  }, []);

  const close = (refocus: boolean) => {
    const details = ref.current;
    if (!details?.open) return;
    details.open = false;
    if (refocus) details.querySelector("summary")?.focus();
  };

  return (
    <details
      ref={ref}
      className="group ml-auto flex-none vc:hidden"
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("a")) close(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") close(true);
      }}
    >
      <summary className="inline-flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-full border border-rule-strong px-4 text-[13px] font-medium text-heading [&::-webkit-details-marker]:hidden">
        <span className="group-open:hidden">Menu</span>
        <span className="hidden group-open:inline">
          Close <span aria-hidden="true">✕</span>
        </span>
      </summary>
      <div className="absolute inset-x-0 top-full border-y border-rule bg-paper">
        {children}
      </div>
    </details>
  );
}

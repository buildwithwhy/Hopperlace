"use client";

import { cardTitle, smallLabelType } from "@/lib/ui";
import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";

export type ProjectTab = {
  /** Also the URL hash that opens this card, e.g. `/services#improve`. */
  id: string;
  /** Older hashes that should still open this card. */
  aliases?: string[];
  kicker: string;
  marker: string;
  heading: string;
  summary: string;
  /** Server-rendered panel content. */
  panel: ReactNode;
};

/* From the handoff: three cards in a row from here up, one column below. */
const WIDE = "(min-width: 861px)";

/* The only client JavaScript on the site: selectable project cards with the
   scope underneath. In three columns one card is always selected and its
   panel spans the row below; in one column each card toggles its own panel,
   which follows it. Server-rendered with the first card open, so the page
   still reads correctly before (or without) hydration. */
export function ProjectTabs({ tabs }: { tabs: ProjectTab[] }) {
  const [selected, setSelected] = useState<string | null>(tabs[0].id);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Open the card named in the URL hash (links from the homepage), and keep
  // following the hash if it changes while the page is open.
  useEffect(() => {
    const fromHash = () => {
      const hash = window.location.hash.slice(1);
      const tab = tabs.find(
        (t) => t.id === hash || t.aliases?.includes(hash),
      );
      if (!tab) return;
      setSelected(tab.id);
      document.getElementById("projects")?.scrollIntoView();
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);

    // Widening after every card was closed: select the first again.
    const wide = window.matchMedia(WIDE);
    const onWide = () => {
      if (wide.matches) setSelected((id) => id ?? tabs[0].id);
    };
    wide.addEventListener("change", onWide);

    return () => {
      window.removeEventListener("hashchange", fromHash);
      wide.removeEventListener("change", onWide);
    };
  }, [tabs]);

  const pick = (id: string) => {
    if (window.matchMedia(WIDE).matches) {
      setSelected(id);
      return;
    }
    if (selected === id) {
      setSelected(null);
      return;
    }
    setSelected(id);
    // A longer panel above may just have closed; bring the card back into
    // view if it moved out of the upper part of the screen.
    requestAnimationFrame(() => {
      const el = buttonRefs.current[id];
      if (!el) return;
      const headerH =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-h",
          ),
        ) || 72;
      const top = el.getBoundingClientRect().top;
      if (top < headerH + 8 || top > window.innerHeight * 0.6) {
        el.scrollIntoView();
      }
    });
  };

  return (
    <div className="grid grid-flow-row-dense grid-cols-1 gap-3 min-[861px]:grid-cols-3">
      {tabs.map((tab) => {
        const on = tab.id === selected;
        return (
          <Fragment key={tab.id}>
            <button
              ref={(el) => {
                buttonRefs.current[tab.id] = el;
              }}
              type="button"
              id={`tab-${tab.id}`}
              aria-expanded={on}
              aria-controls={`panel-${tab.id}`}
              onClick={() => pick(tab.id)}
              className={`flex cursor-pointer flex-col gap-2.5 rounded-card border border-t-[3px] p-[clamp(20px,2.4vw,26px)] text-left hover:border-rule-strong hover:border-t-primary ${
                on
                  ? "border-rule-strong border-t-primary bg-selected"
                  : "border-rule border-t-rule bg-paper"
              }`}
            >
              <span
                className={`${smallLabelType} flex justify-between gap-3 text-muted`}
              >
                <span>{tab.kicker}</span>
                <span aria-hidden="true">{tab.marker}</span>
              </span>
              <span className={cardTitle}>{tab.heading}</span>
              <span className="flex-1 text-[15px] leading-[1.55] text-pretty">
                {tab.summary}
              </span>
              <span className="mt-2 flex items-center gap-2.5 text-[14px] font-medium text-primary">
                <span
                  aria-hidden="true"
                  className={`grid size-[26px] place-items-center rounded-full border text-[13px] leading-none ${
                    on
                      ? "border-primary bg-primary text-on-primary"
                      : "border-rule-strong"
                  }`}
                >
                  <span className="min-[861px]:hidden">{on ? "−" : "+"}</span>
                  <span className="hidden min-[861px]:inline">↓</span>
                </span>
                <span className="min-[861px]:hidden">
                  {on ? "Hide scope" : "View scope"}
                </span>
                <span className="hidden min-[861px]:inline">
                  {on ? "Selected · scope below" : "View scope"}
                </span>
              </span>
            </button>
            <div
              role="region"
              id={`panel-${tab.id}`}
              aria-labelledby={`tab-${tab.id}`}
              hidden={!on}
              className="col-span-full rounded-card bg-paper p-[clamp(22px,4.5vw,52px)]"
            >
              {tab.panel}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

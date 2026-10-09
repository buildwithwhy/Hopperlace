"use client";

import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";

export type ProjectTab = {
  /** Also the URL hash that opens this tab, e.g. `/services#improve`. */
  id: string;
  kicker: string;
  marker: string;
  heading: string;
  summary: string;
  /** Server-rendered panel content. */
  panel: ReactNode;
};

/* The only client JavaScript on the site: selectable project cards with the
   detailed scope underneath. Server-rendered with the first tab open, so the
   page still reads correctly before (or without) hydration. */
export function ProjectTabs({ tabs }: { tabs: ProjectTab[] }) {
  const [selected, setSelected] = useState(tabs[0].id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Open the tab named in the URL hash (links from the homepage), and keep
  // following the hash if it changes while the page is open.
  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.slice(1);
      if (!tabs.some((tab) => tab.id === id)) return;
      setSelected(id);
      document.getElementById("projects")?.scrollIntoView();
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [tabs]);

  const select = (id: string, focus = false) => {
    setSelected(id);
    if (focus) tabRefs.current[id]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const i = tabs.findIndex((tab) => tab.id === selected);
    const n = tabs.length;
    const next = {
      ArrowRight: (i + 1) % n,
      ArrowDown: (i + 1) % n,
      ArrowLeft: (i + n - 1) % n,
      ArrowUp: (i + n - 1) % n,
      Home: 0,
      End: n - 1,
    }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    select(tabs[next].id, true);
  };

  return (
    <>
      <div
        role="tablist"
        aria-label="Project types"
        onKeyDown={onKeyDown}
        className="grid grid-cols-1 gap-3 vc:grid-cols-3"
      >
        {tabs.map((tab) => {
          const on = tab.id === selected;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[tab.id] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={on}
              aria-controls={`panel-${tab.id}`}
              tabIndex={on ? 0 : -1}
              onClick={() => select(tab.id)}
              className={`flex cursor-pointer flex-col gap-3 rounded-card border border-t-[3px] px-[clamp(20px,2.4vw,28px)] pt-[clamp(20px,2.4vw,28px)] pb-[clamp(22px,2.6vw,30px)] text-left ${
                on
                  ? "border-rule-strong border-t-primary bg-selected"
                  : "border-transparent bg-paper"
              }`}
            >
              <span className="flex justify-between gap-3 font-mono text-[12px] font-medium tracking-[0.1em] text-muted uppercase">
                <span>{tab.kicker}</span>
                <span aria-hidden="true">{tab.marker}</span>
              </span>
              <span className="text-[clamp(19px,1.6vw,22px)] leading-[1.3] font-semibold text-heading">
                {tab.heading}
              </span>
              <span className="text-[16px] leading-[1.55]">{tab.summary}</span>
            </button>
          );
        })}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          tabIndex={0}
          hidden={tab.id !== selected}
          className="mt-3 rounded-card bg-paper p-[clamp(28px,5vw,64px)]"
        >
          {tab.panel}
        </div>
      ))}
    </>
  );
}

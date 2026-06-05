"use client";

import { useState } from "react";

const links = [
  { href: "#product", label: "Product" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#research", label: "Research" },
  { href: "#team", label: "Team" },
];

const ctaHref =
  "mailto:hello@hopperlace.ai?subject=Evidence%20Synthesis%20pilot";

export default function NavInner() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-offwhite/90 backdrop-blur-sm border-b border-warm-gray/50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-navy font-semibold text-lg tracking-tight">
          Hopperlace
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-8 text-sm text-text-muted">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-navy transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center bg-navy text-offwhite px-4 py-2 rounded-lg text-sm font-medium hover:bg-navy-light transition-colors"
          >
            Start a pilot
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden flex flex-col gap-1.5 p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-navy transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-navy transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-navy transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden bg-offwhite/95 backdrop-blur-sm border-b border-warm-gray/50 px-6 pb-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-text-muted hover:text-navy transition-colors border-b border-warm-gray/30 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href={ctaHref}
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center bg-navy text-offwhite px-4 py-2 rounded-lg text-sm font-medium hover:bg-navy-light transition-colors"
          >
            Start a pilot
          </a>
        </div>
      )}
    </nav>
  );
}

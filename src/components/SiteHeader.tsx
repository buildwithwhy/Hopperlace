import { VALUECOMPASS_URL } from "@/lib/links";
import { frame, primaryButton } from "@/lib/ui";

type Page = "home" | "services";

/* Skip link plus the sticky header shared by both pages. On the homepage the
   section links stay in-page; elsewhere they point back to `/`. */
export function SiteHeader({ current }: { current: Page }) {
  const home = current === "home";
  const base = home ? "" : "/";

  /* `wideOnly` links drop out of the compact header below the `vc`
     breakpoint; the homepage's own sections still cover them. */
  const navLinks = [
    { href: `${base}#testing`, label: "Testing" },
    { href: `${base}#valuecompass`, label: "ValueCompass" },
    { href: `${base}#founder`, label: "Founder", wideOnly: true },
    { href: "/services", label: "Services", current: current === "services" },
  ];

  return (
    <>
      <a
        href="#main"
        className="absolute top-2 -left-[9999px] z-20 bg-primary px-4 py-2.5 text-on-primary focus:left-2"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-10 border-b border-rule bg-paper">
        <div
          className={`${frame} box-border flex h-[var(--header-h)] flex-nowrap items-center gap-3.5 vc:gap-x-7`}
        >
          <a
            href={home ? "#top" : "/"}
            className="flex-none py-1.5 font-serif text-[19px] leading-none font-semibold tracking-[0.005em] whitespace-nowrap text-heading no-underline vc:flex-[1_0_auto] vc:text-[21px]"
          >
            Hopperlace
          </a>
          {/* On narrow screens the row scrolls sideways and fades at the edge. */}
          <nav
            aria-label="Primary"
            className="flex min-w-0 flex-[0_1_auto] flex-nowrap items-center gap-x-3.5 overflow-x-auto text-[14px] font-medium whitespace-nowrap [mask-image:linear-gradient(90deg,#000_calc(100%-16px),transparent)] [scrollbar-width:none] vc:gap-x-[22px] vc:text-[15px] vc:[mask-image:none]"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={link.current ? "page" : undefined}
                className={`py-3 hover:text-heading ${
                  link.current
                    ? "text-heading underline decoration-1 underline-offset-[6px]"
                    : "text-body no-underline"
                } ${link.wideOnly ? "hidden vc:inline" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={VALUECOMPASS_URL}
            className={`${primaryButton} hidden min-h-11 flex-none px-5 text-[15px] whitespace-nowrap vc:inline-flex`}
          >
            Try ValueCompass ↗
          </a>
        </div>
      </header>
    </>
  );
}

import { HopperlaceMark } from "@/components/HopperlaceMark";
import { SiteMenu } from "@/components/SiteMenu";
import { VALUECOMPASS_URL } from "@/lib/links";
import { cardButton, frame, primaryButton } from "@/lib/ui";

type Page = "home" | "products" | "services";

/* Skip link plus the sticky header shared by every page. On the homepage the
   section links stay in-page; elsewhere they point back to `/`. From the
   `vc` breakpoint the nav sits in the header row; below it, the row keeps
   only the logo and a Menu button that opens the same links. */
export function SiteHeader({ current }: { current: Page }) {
  const home = current === "home";
  const base = home ? "" : "/";

  /* `page` links go to another route; the compact menu marks them with an
     arrow unless they are the current page. */
  const navLinks = [
    {
      href: "/products",
      label: "Products",
      page: true,
      current: current === "products",
    },
    { href: `${base}#valuecompass`, label: "ValueCompass" },
    { href: `${base}#testing`, label: "Testing" },
    { href: `${base}#founder`, label: "Founder" },
    {
      href: "/services",
      label: "Services",
      page: true,
      current: current === "services",
    },
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
            aria-label="Hopperlace home"
            className="inline-flex flex-none items-center gap-2.5 py-1.5 font-serif text-[18px] leading-none font-semibold tracking-[0.01em] whitespace-nowrap text-heading no-underline vc:flex-[1_0_auto] vc:text-[19px]"
          >
            <HopperlaceMark className="h-6 vc:h-7" />
            <span>Hopperlace</span>
          </a>
          <nav
            aria-label="Primary"
            className="hidden min-w-0 flex-[0_1_auto] flex-nowrap items-center gap-x-[22px] overflow-x-auto text-[13px] font-medium whitespace-nowrap [scrollbar-width:none] vc:flex"
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
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={VALUECOMPASS_URL}
            className={`${primaryButton} hidden min-h-10 flex-none px-[18px] text-[13px] whitespace-nowrap vc:inline-flex`}
          >
            Try ValueCompass ↗
          </a>
          <SiteMenu>
            <nav
              aria-label="Primary"
              className={`${frame} flex flex-col pt-1 pb-5`}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={link.current ? "page" : undefined}
                  className={`flex justify-between border-b border-rule py-[13px] text-[15px] font-medium ${
                    link.current
                      ? "text-heading underline decoration-1 underline-offset-[6px]"
                      : "text-body no-underline"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.page && !link.current && (
                    <span
                      aria-hidden="true"
                      className="font-mono text-[13px] text-primary"
                    >
                      →
                    </span>
                  )}
                </a>
              ))}
              <a
                href={VALUECOMPASS_URL}
                className={`${primaryButton} ${cardButton} mt-[18px] self-start`}
              >
                Try ValueCompass ↗
              </a>
            </nav>
          </SiteMenu>
        </div>
      </header>
    </>
  );
}

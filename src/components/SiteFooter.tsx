import {
  BUILDWITHWHY_URL,
  EMAIL,
  MAIL_HREF,
  VALUECOMPASS_URL,
} from "@/lib/links";
import { frame } from "@/lib/ui";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: VALUECOMPASS_URL, label: "valuecompass.ai" },
  { href: BUILDWITHWHY_URL, label: "buildwithwhy.com" },
  { href: MAIL_HREF, label: EMAIL },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-rule">
      <div
        className={`${frame} flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4 pt-8 pb-10 text-[14px] leading-[1.5] text-muted`}
      >
        <div className="flex flex-col gap-1">
          <span className="font-serif text-[18px] leading-[1.2] font-semibold text-heading">
            Hopperlace
          </span>
          <span>
            &copy; 2026 Hopperlace &middot; Independent. No placement fees, no
            sponsored results.
          </span>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-1">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-1.5 text-body underline decoration-1 underline-offset-[3px] hover:text-heading"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { DECISION_HREF, EMAIL, MAIL_HREF, VALUECOMPASS_URL } from "@/lib/links";

const title = "Services — Hopperlace";

const description =
  "Hopperlace works with teams to understand a workflow, compare options and test promising approaches. You get findings and a recommendation to help you decide what to use, what to build, or what to investigate next.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://hopperlace.ai/services",
    siteName: "Hopperlace",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: "https://hopperlace.ai/services" },
};

/* ─── Shared layout & type primitives ───
   The services page runs a slightly wider gutter than the homepage. */

const gutter = "px-[clamp(20px,4vw,56px)]";
const label = "font-mono text-[12px] font-medium tracking-[0.12em] text-accent";

/* ─── Content ─── */

const navLinks = [
  { href: VALUECOMPASS_URL, label: "ValueCompass ↗", current: false },
  { href: "/#lab", label: "What we’re building", current: false },
  { href: "/services", label: "Services", current: true },
];

const stages = [
  {
    marker: "i.",
    heading: "Understand",
    body: (
      <>
        Establish how the workflow operates today and what a better outcome
        would mean for your customers or business.
      </>
    ),
  },
  {
    marker: "ii.",
    heading: "Compare and test",
    body: (
      <>
        Test promising approaches on your tasks, building a prototype where
        useful.
      </>
    ),
  },
  {
    marker: "iii.",
    heading: "Explain and recommend",
    body: <>Present the findings, trade-offs and recommended next steps.</>,
  },
];

const exampleQuestions = [
  "“Which of these AI tools should our team use for this work?”",
  "“Is this model good enough for our use case, and how would we know?”",
  "“Should we build this ourselves, buy it, or wait?”",
  "“A vendor is claiming this works. Can we check before we sign?”",
];

export default function Services() {
  return (
    <div className="[--g:clamp(20px,4vw,56px)]">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <QuestionsAndOutcome />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ─── Header (sticky) ─── */

function Header() {
  return (
    <header
      className={`${gutter} sticky top-0 z-10 flex flex-wrap items-baseline gap-x-8 gap-y-3 border-b border-ink bg-paper py-5`}
    >
      <a
        href="/"
        className="flex-1 font-serif text-[19px] font-semibold tracking-[0.01em] whitespace-nowrap text-ink no-underline"
      >
        Hopperlace
      </a>
      <nav
        aria-label="Primary"
        className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-medium"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            aria-current={link.current ? "page" : undefined}
            className={
              link.current
                ? "border-b border-ink text-ink no-underline"
                : "text-body no-underline"
            }
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

/* ─── Hero ─── */

function Hero() {
  return (
    <section
      aria-labelledby="services-title"
      className={`${gutter} border-b border-ink pt-[clamp(56px,8vw,104px)] pb-[clamp(40px,6vw,72px)]`}
    >
      <p className={`${label} mb-7 tracking-[0.14em] uppercase`}>Services</p>
      <h1
        id="services-title"
        className="mb-7 max-w-[20ch] font-serif text-[clamp(36px,5.2vw,66px)] leading-[1.06] font-normal tracking-[-0.02em] text-pretty"
      >
        Need help choosing an AI tool or testing an idea?
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-end gap-x-[var(--g)] gap-y-8">
        <p className="max-w-[56ch] text-[clamp(17px,1.5vw,20px)] leading-[1.6] text-body text-pretty">
          Hopperlace works with teams to understand a workflow, compare options
          and test promising approaches. You get findings and a recommendation
          to help you decide what to use, what to build, or what to investigate
          next.
        </p>
        <div className="flex flex-wrap items-center gap-3 justify-self-start">
          <a
            href={DECISION_HREF}
            className="bg-accent px-[26px] py-[15px] text-[15px] font-medium text-paper no-underline"
          >
            Email {EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── 01 / How it works ─── */

function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-title"
      className={`${gutter} border-b border-ink py-[clamp(40px,5vw,64px)]`}
    >
      <h2 id="how-it-works-title" className="sr-only">
        How it works
      </h2>
      <p className={`${label} mb-3.5`}>01 / HOW IT WORKS</p>
      <div className="mt-[26px] grid border-t border-ink split:grid-cols-3">
        {stages.map((stage, i) => (
          <div
            key={stage.marker}
            className={`py-7 ${
              i === 0
                ? "split:pr-8"
                : i === stages.length - 1
                  ? "split:pl-8"
                  : "split:px-8"
            } ${
              i < stages.length - 1
                ? "border-b border-rule split:border-r split:border-b-0"
                : ""
            }`}
          >
            <p className="mb-3 font-mono text-[14px] text-muted">
              {stage.marker}
            </p>
            <h3 className="mb-2.5 font-serif text-[21px] leading-[1.3] font-medium">
              {stage.heading}
            </h3>
            <p className="text-[15px] leading-[1.6] text-body text-pretty">
              {stage.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── 02 / Questions this suits + 03 / What you get ─── */

function QuestionsAndOutcome() {
  return (
    <section className="grid border-b border-ink split:grid-cols-2">
      <div
        className={`${gutter} border-b border-ink py-[clamp(40px,5vw,64px)] split:border-r split:border-b-0`}
      >
        <p className={`${label} mb-5`}>02 / QUESTIONS THIS SUITS</p>
        <h2 className="sr-only">Questions this suits</h2>
        <div className="border-t border-ink">
          {exampleQuestions.map((question) => (
            <p
              key={question}
              className="border-b border-rule py-3.5 text-[16px] leading-[1.55] text-body"
            >
              {question}
            </p>
          ))}
        </div>
      </div>
      <div
        className={`${gutter} bg-tint py-[clamp(40px,5vw,64px)]`}
      >
        <p className={`${label} mb-5`}>03 / WHAT YOU GET</p>
        <h2 className="sr-only">What you get</h2>
        <p className="mb-4 text-[17px] leading-[1.6] text-body text-pretty">
          Projects end with findings, a recommendation and any agreed prototype
          or evaluation materials. Implementation and ongoing delivery remain
          with your team.
        </p>
        <p className="text-[15px] leading-[1.6] text-body text-pretty">
          You can reuse the evaluation tasks and criteria when your needs or the
          available tools change.
        </p>
      </div>
    </section>
  );
}

/* ─── 04 / Founder ─── */

function Founder() {
  return (
    <section
      aria-labelledby="founder-title"
      className={`${gutter} grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-x-[var(--g)] gap-y-6 border-b border-ink py-[clamp(40px,5vw,64px)]`}
    >
      <h2 id="founder-title" className="sr-only">
        Founder
      </h2>
      <p className={label}>04 / FOUNDER</p>
      <div className="col-span-2 grid max-w-[680px] gap-3.5">
        <p className="font-serif text-[17px] leading-[1.55] font-normal text-pretty">
          Hopperlace was founded by Yuyu Shen, a statistically trained data
          scientist turned product manager with nearly a decade building and
          evaluating AI systems.
        </p>
        <p className="text-[15px] leading-[1.6] text-body">
          <a href="/#founder" className="underline underline-offset-2">
            Full bio on the homepage →
          </a>
        </p>
      </div>
    </section>
  );
}

/* ─── Contact ─── */

function Contact() {
  return (
    <section
      aria-labelledby="contact-title"
      className={`${gutter} grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-center gap-x-[var(--g)] gap-y-6 border-b border-ink py-[clamp(48px,6vw,80px)]`}
    >
      <div>
        <h2
          id="contact-title"
          className="mb-2.5 max-w-[22ch] font-serif text-[clamp(28px,3.2vw,42px)] leading-[1.15] font-normal tracking-[-0.015em] text-pretty"
        >
          Tell us about the decision.
        </h2>
        <p className="max-w-[52ch] text-[16px] leading-[1.6] text-body text-pretty">
          A few sentences on what you&rsquo;re trying to do and what
          you&rsquo;re choosing between is plenty to start.
        </p>
      </div>
      <a
        href={DECISION_HREF}
        className="justify-self-start bg-ink px-[30px] py-[17px] text-[16px] font-medium text-paper no-underline"
      >
        Email {EMAIL}
      </a>
    </section>
  );
}

/* ─── Footer ─── */

function Footer() {
  return (
    <footer
      className={`${gutter} flex flex-wrap justify-between gap-x-8 gap-y-3 pt-8 pb-10 text-[13px] leading-[1.5] text-muted`}
    >
      <span>
        &copy; 2026 Hopperlace &middot; Independent. No placement fees, no
        sponsored results.
      </span>
      <div className="flex flex-wrap gap-5">
        <a href="/" className="text-muted underline underline-offset-2">
          Home
        </a>
        <a href={MAIL_HREF} className="text-muted underline underline-offset-2">
          {EMAIL}
        </a>
      </div>
    </footer>
  );
}

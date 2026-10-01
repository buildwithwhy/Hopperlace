import Image from "next/image";
import {
  BUILDWITHWHY_URL,
  EMAIL,
  EVIDENCE_SYNTHESIS_URL,
  MAIL_HREF,
  VALUECOMPASS_URL,
} from "@/lib/links";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://hopperlace.ai/#organization",
      name: "Hopperlace",
      url: "https://hopperlace.ai",
      slogan: "Choose AI for what you want to do — and what matters to you.",
      knowsAbout: [
        "AI tool comparison",
        "Independent AI testing",
        "AI app builders",
        "Values-based AI choice",
        "AI evaluation",
        "Deference-aware evaluation",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: EMAIL,
        availableLanguage: "English",
      },
      description:
        "Hopperlace helps you choose AI tools and systems that fit your tasks, preferences and values, with evidence you can understand and inspect. ValueCompass, available today, adds research on the companies behind those tools: their ownership, dependencies and policies. Hopperlace is also developing independent, hands-on comparisons of the tools themselves, starting with AI app builders.",
      email: EMAIL,
      founder: {
        "@type": "Person",
        name: "Yuyu Shen",
        jobTitle: "Founder",
      },
      sameAs: [VALUECOMPASS_URL, BUILDWITHWHY_URL, EVIDENCE_SYNTHESIS_URL],
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Develop and test an AI idea",
            description:
              "Work out what it should do, build it, and see whether it delivers. You receive a working prototype, findings from testing, and a practical recommendation for what to develop next.",
            url: "https://hopperlace.ai/services#develop",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Improve an existing AI experience",
            description:
              "Find what is holding it back for real users, and test the changes. You receive a diagnosis supported by real examples, tested changes where agreed, and evidence of their effect.",
            url: "https://hopperlace.ai/services#improve",
          },
        },
      ],
    },
    {
      "@type": "WebApplication",
      "@id": "https://valuecompass.ai/#app",
      name: "ValueCompass",
      url: VALUECOMPASS_URL,
      applicationCategory: "BrowserApplication",
      operatingSystem: "Web",
      publisher: { "@id": "https://hopperlace.ai/#organization" },
      description:
        "ValueCompass helps you examine the companies behind AI products and compare options against your values. Explore ownership, control, dependencies and documented policies, with sources and clear gaps in the research.",
    },
    {
      "@type": "WebSite",
      "@id": "https://hopperlace.ai/#website",
      name: "Hopperlace",
      url: "https://hopperlace.ai",
      inLanguage: "en",
      publisher: { "@id": "https://hopperlace.ai/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": "https://hopperlace.ai/#webpage",
      url: "https://hopperlace.ai",
      name: "Hopperlace — AI tool comparison & values-based choice",
      inLanguage: "en",
      isPartOf: { "@id": "https://hopperlace.ai/#website" },
      about: { "@id": "https://hopperlace.ai/#organization" },
      significantLink: "https://hopperlace.ai/llms.txt",
    },
    {
      "@type": "ScholarlyArticle",
      "@id": "https://osf.io/a69yh/#article",
      name: "Deference-Aware Evaluation for Human-in-the-Loop AI Systems",
      author: { "@type": "Person", name: "Yuyu Shen" },
      datePublished: "2026",
      url: "https://osf.io/a69yh/",
      identifier: {
        "@type": "PropertyValue",
        propertyID: "DOI",
        value: "10.17605/OSF.IO/A69YH",
      },
      description:
        "A framework for evaluating AI systems on their capacity to recognize the limits of their own competence and defer when appropriate, alongside standard accuracy. Accepted at the Technical AI Governance workshop, ICML 2026.",
    },
  ],
};

/* ─── Shared layout & type primitives ─── */

/* Centered column with the fluid page gutter; every band uses it. */
const frame = "mx-auto max-w-[var(--max)] px-[var(--gutter)]";
const label =
  "font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-muted";
const sectionHeading =
  "font-serif text-[clamp(28px,2.8vw,38px)] leading-[1.18] font-normal tracking-[-0.015em] text-heading text-balance";
const lead = "text-[clamp(17px,1.4vw,19px)] leading-[1.6] text-heading text-pretty";
/* No display utility here: the header hides its copy below `vc`, and a shared
   `inline-flex` would beat `hidden`. Call sites add `inline-flex`. */
const primaryButton =
  "items-center self-start rounded-full bg-primary font-medium text-on-primary no-underline hover:bg-primary-hover";
const proseLink =
  "text-primary underline decoration-1 underline-offset-[3px] hover:text-heading";

/* ─── Assets ───
   Real captures of valuecompass.ai supplied by the founder, 22 Sep 2026. The
   `*-crop` files are crops prepared for on-page use; the numbered files are
   the full captures the preview and caption link out to. */

const shots = {
  cardsCrop: "/assets/vc-cards-crop.png",
  claudeCard: "/assets/vc-card-claude.png",
  fullPriorities: "/assets/vc-01-choosing-priorities.png",
  fullAdvice: "/assets/vc-02-seeing-the-advice.png",
  fullEvidence: "/assets/vc-03-evidence-on-the-cards.png",
} as const;

/* ─── Content ─── */

/* `wideOnly` links drop out of the compact header below the `vc` breakpoint;
   the homepage's own sections still cover them. */
const navLinks = [
  { href: "#testing", label: "Testing" },
  { href: "#valuecompass", label: "ValueCompass" },
  { href: "#founder", label: "Founder", wideOnly: true },
  { href: "/services", label: "Services" },
];

const scenarioScope = [
  {
    heading: "Functional reliability",
    body: "Booking and cancellation flows, including attempts to reserve the same slot.",
  },
  {
    heading: "Maintainability",
    body: "Introducing a new requirement and checking that existing functionality still works.",
  },
  {
    heading: "User effort",
    body: "Time, correction attempts and technical assistance needed to complete the task.",
  },
  {
    heading: "Portability",
    body: "Exporting the project and assessing what is required to run it with another provider.",
  },
];

const recorded = [
  {
    heading: "Does it work?",
    body: "Whether the output does what the task asked.",
  },
  {
    heading: "Fixes",
    body: "What errors occur, and how many attempts it takes to resolve them.",
  },
  { heading: "Time", body: "From the initial instructions to a usable result." },
  {
    heading: "Cost",
    body: "What it costs to complete the task, including retries.",
  },
  {
    heading: "Assistance",
    body: "The guidance and technical knowledge needed to reach a useful result.",
  },
];

const outcomes = [
  "Options worth trying for your kind of task.",
  "The circumstances in which each tool struggles.",
  "The effort and expertise you should expect to contribute.",
  "The evidence behind the advice, including example outputs.",
  "The trade-offs that could change the recommendation.",
];

const projectTypes = [
  { href: "/services#choose", label: "Choose an AI approach" },
  { href: "/services#develop", label: "Develop and test an AI idea" },
  { href: "/services#improve", label: "Improve an existing AI experience" },
];

export default function Home() {
  return (
    /* Links here carry their own hover colors, so opt out of the base
       layer's hover opacity. */
    <div
      id="top"
      className="text-[17px] leading-[1.65] text-body [&_a:hover]:opacity-100"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main"
        className="absolute top-2 -left-[9999px] z-20 bg-primary px-4 py-2.5 text-on-primary focus:left-2"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Testing />
        <ValueCompass />
        <Founder />
        <ServicesInvitation />
      </main>
      <Footer />
    </div>
  );
}

/* ─── Header (sticky) ─── */

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-rule bg-paper">
      <div
        className={`${frame} box-border flex h-[var(--header-h)] flex-nowrap items-center gap-3.5 vc:gap-x-7`}
      >
        <a
          href="#top"
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
              className={`py-3 text-body no-underline hover:text-heading ${link.wideOnly ? "hidden vc:inline" : ""}`}
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
  );
}

/* ─── Hero ─── */

function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className={`${frame} grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-x-[clamp(40px,6vw,96px)] gap-y-12 pt-[clamp(56px,8vw,112px)] pb-[clamp(56px,8vw,96px)]`}
    >
      <div className="flex min-w-0 flex-col gap-[22px]">
        <p className={label}>
          Independent testing &middot; Comparison &middot; Informed choice
        </p>
        <h1
          id="hero-title"
          className="max-w-[18ch] font-serif text-[clamp(36px,4.6vw,64px)] leading-[1.1] font-normal tracking-[-0.02em] text-heading text-balance"
        >
          Choose AI for what you want to do &mdash; and what matters to you.
        </h1>
        <p className={`${lead} max-w-[52ch]`}>
          Hopperlace helps you choose AI tools and systems that fit your tasks,
          preferences and values, with evidence you can understand and inspect.
        </p>
        <p className="max-w-[52ch] text-pretty">
          ValueCompass, which you can use today, adds research on the companies
          behind those tools: their ownership, dependencies and policies.
          We&rsquo;re also developing independent, hands-on comparisons of the
          tools themselves, starting with AI app builders.
        </p>
      </div>
      <div className="flex min-w-0 flex-col gap-3 rounded-card bg-sage p-[clamp(20px,2.6vw,32px)]">
        <p className={`${label} mb-1`}>Two parts of one decision</p>
        <PartCard
          name="ValueCompass"
          status={<LiveStatus />}
          heading="Who is behind it, and does that fit your values?"
          body="Compare AI options on ownership, control and documented commitments, against the priorities you choose."
          action={
            <a
              href={VALUECOMPASS_URL}
              className={`${primaryButton} mt-1 inline-flex min-h-11 px-5 text-[15px]`}
            >
              Try ValueCompass ↗
            </a>
          }
        />
        <PartCard
          name="Tool testing"
          status={<DevStatus />}
          heading="Can it do your task, and what will it take?"
          body="Find out which tools suit a particular task, and what effort, expertise and compromises each one involves."
          action={
            <a
              href="#testing"
              className="mt-1 inline-flex min-h-11 items-center self-start rounded-full border border-primary px-5 text-[15px] font-medium text-primary no-underline hover:bg-selected hover:text-heading"
            >
              Explore our testing approach ↓
            </a>
          }
        />
        <p className="mt-1 text-[15px] leading-[1.55] text-pretty">
          The aim is to bring these comparisons together with ValueCompass, so
          you can consider practical fit and values in the same decision.
        </p>
      </div>
    </section>
  );
}

function PartCard({
  name,
  status,
  heading,
  body,
  action,
}: {
  name: string;
  status: React.ReactNode;
  heading: string;
  body: string;
  action: React.ReactNode;
}) {
  return (
    <article className="flex flex-col gap-2.5 rounded-card bg-panel px-6 pt-[22px] pb-6">
      <div className="flex flex-wrap justify-between gap-3 font-mono text-[12px] font-medium tracking-[0.1em] uppercase">
        <span className="text-heading">{name}</span>
        {status}
      </div>
      <h2 className="text-[21px] leading-[1.3] font-semibold text-heading text-pretty">
        {heading}
      </h2>
      <p className="text-[16px] leading-[1.55] text-pretty">{body}</p>
      {action}
    </article>
  );
}

function LiveStatus() {
  return (
    <span className="inline-flex items-center gap-2 text-live">
      <span aria-hidden="true" className="size-2 rounded-full bg-live" />
      Available now
    </span>
  );
}

function DevStatus() {
  return (
    <span className="inline-flex items-center gap-2 text-dev">
      <span
        aria-hidden="true"
        className="box-border size-2 rounded-full border-[1.5px] border-dev"
      />
      In development
    </span>
  );
}

/* ─── 01 / Tool testing ─── */

function Testing() {
  return (
    <section id="testing" aria-labelledby="testing-title" className="bg-sage">
      <div className={`${frame} py-[var(--section-y)]`}>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-x-[clamp(40px,6vw,96px)] gap-y-10">
          <div className="flex min-w-0 flex-col gap-5">
            <p className={`${label} flex flex-wrap items-center gap-x-3.5 gap-y-2`}>
              <span>01 / Tool testing</span>
              <span className="rounded-full border border-dev px-[11px] py-[3px] text-dev">
                In development
              </span>
            </p>
            <h2 id="testing-title" className={sectionHeading}>
              See how AI tools perform on the work you need done.
            </h2>
            <p className="max-w-[54ch] text-pretty">
              Our comparisons are meant to show which tools fit your work and
              circumstances, and what you&rsquo;d be taking on with each.
            </p>
            <p className="max-w-[54ch] text-pretty">
              To get there, several tools receive comparable tasks, each task is
              run more than once, and we check the outputs independently rather
              than relying on what the tool reports.
            </p>
            <p className="max-w-[54ch] text-[16px] text-muted">
              Our first comparisons will focus on AI app builders.
            </p>
          </div>
          <Scenario />
        </div>
        <div className="mt-[clamp(48px,6vw,80px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-x-[clamp(40px,6vw,96px)] gap-y-10">
          <div className="min-w-0">
            <h3 className={`${label} mb-3 text-heading`}>
              What we&rsquo;ll record
            </h3>
            <dl className="border-t border-rule-strong">
              {recorded.map((item) => (
                <div
                  key={item.heading}
                  className="grid grid-cols-[minmax(110px,150px)_minmax(0,1fr)] gap-4 border-b border-rule py-3.5 text-[16px] leading-[1.55]"
                >
                  <dt className="font-semibold text-heading">{item.heading}</dt>
                  <dd>{item.body}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="min-w-0">
            <h3 className={`${label} mb-3 text-heading`}>
              What you&rsquo;ll get
            </h3>
            <ul className="border-t border-rule-strong">
              {outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="grid grid-cols-[24px_minmax(0,1fr)] gap-3 border-b border-rule py-3.5 text-[16px] leading-[1.55]"
                >
                  <span aria-hidden="true" className="text-primary">
                    →
                  </span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Native <details>, so the disclosure works without client JavaScript. */
function Scenario() {
  return (
    <details className="group min-w-0 rounded-card border border-dashed border-dev bg-panel">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
        <span className="flex flex-col gap-1">
          <span className="font-mono text-[12px] font-medium tracking-[0.1em] text-dev uppercase">
            Example test scenario &middot; planned
          </span>
          <span className="text-[19px] leading-[1.3] font-semibold text-heading">
            Building and maintaining a booking app
          </span>
        </span>
        <span
          aria-hidden="true"
          className="grid size-9 flex-none place-items-center rounded-full border border-rule-strong text-[15px] text-heading group-open:rotate-180"
        >
          ↓
        </span>
      </summary>
      <div className="flex flex-col gap-5 px-6 pb-6">
        <div className="border-t border-rule pt-[18px]">
          <p className={`${label} mb-1.5`}>Decision</p>
          <p className="font-serif text-[19px] leading-[1.4] text-heading text-pretty">
            Which AI app builder suits a small-business owner with limited
            technical experience?
          </p>
        </div>
        <div>
          <p className={`${label} mb-1`}>Evaluation scope</p>
          <ul className="border-b border-rule">
            {scenarioScope.map((item) => (
              <li
                key={item.heading}
                className="flex flex-col gap-0.5 border-t border-rule py-3 text-[16px] leading-[1.55]"
              >
                <strong className="font-semibold text-heading">
                  {item.heading}
                </strong>
                <span>{item.body}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className={`${label} mb-1.5`}>Intended outcome</p>
          <p className="text-[16px] leading-[1.55] text-pretty">
            A comparison of which tools suit this user, where specialist help is
            needed, and the trade-offs involved.
          </p>
        </div>
      </div>
    </details>
  );
}

/* ─── 02 / ValueCompass ─── */

function ValueCompass() {
  return (
    <section
      id="valuecompass"
      aria-labelledby="valuecompass-title"
      className={`${frame} py-[var(--section-y)]`}
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <p className={`${label} flex flex-wrap items-center gap-x-3.5 gap-y-2`}>
          <span>02 / ValueCompass</span>
          <span className="rounded-full bg-live px-[11px] py-[3px] text-on-primary">
            Available now
          </span>
        </p>
        <p className="text-[15px] text-muted">
          Opens valuecompass.ai. No account needed.
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] items-center gap-x-[clamp(40px,6vw,88px)] gap-y-10">
        <div className="flex min-w-0 flex-col gap-5">
          <h2 id="valuecompass-title" className={sectionHeading}>
            Explore the values behind your AI choices.
          </h2>
          <p className={lead}>
            Who benefits from the money you spend on AI? What commitments do
            providers make to the people affected by their technology?
          </p>
          <p className="text-pretty">
            ValueCompass helps you examine the companies behind AI products and
            compare options against your values. Explore ownership, control,
            dependencies and documented policies, with sources and clear gaps in
            the research.
          </p>
          <a
            href={VALUECOMPASS_URL}
            className={`${primaryButton} mt-2 inline-flex min-h-[52px] px-7 text-[17px]`}
          >
            Try ValueCompass ↗
          </a>
        </div>
        <figure className="flex min-w-0 flex-col gap-3 rounded-card bg-sage p-[clamp(14px,2vw,24px)]">
          <a
            href={shots.fullEvidence}
            target="_blank"
            rel="noopener"
            className="relative block overflow-hidden rounded-card border border-rule bg-shot no-underline"
          >
            <Image
              src={shots.cardsCrop}
              alt="ValueCompass option cards showing who gets paid and what each runs on, documented alignment on nonprofit control with source links, and a separate ‘What we could not check’ note on the economic-stake question"
              width={1998}
              height={1590}
              sizes="(min-width: 761px) 50vw, 100vw"
              className="hidden h-auto max-h-[440px] w-full object-contain object-top vc:block"
            />
            <Image
              src={shots.claudeCard}
              alt="ValueCompass option card for Claude: who gets paid and what it runs on, documented alignment on nonprofit control, and a separate ‘What we could not check’ note on the economic-stake question"
              width={1000}
              height={1590}
              sizes="100vw"
              className="block h-auto max-h-[440px] w-full object-contain object-top vc:hidden"
            />
            <span className="absolute right-3 bottom-3 inline-flex min-h-9 items-center rounded-full bg-heading px-3.5 text-[14px] font-medium text-on-primary">
              View example ↗
            </span>
          </a>
          <figcaption className="flex flex-col gap-1.5">
            <p className="text-[15px] leading-[1.55] text-pretty">
              An example comparing nonprofit control and financial interests.
              Confirmed findings and unanswered questions appear separately.
            </p>
            <p className="text-[14px] leading-[1.55] text-muted">
              Full captures:{" "}
              <CaptureLink href={shots.fullPriorities}>
                choosing priorities
              </CaptureLink>{" "}
              &middot;{" "}
              <CaptureLink href={shots.fullAdvice}>
                summary of what was found
              </CaptureLink>{" "}
              &middot;{" "}
              <CaptureLink href={shots.fullEvidence}>
                evidence on the cards
              </CaptureLink>
              .
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function CaptureLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="text-muted underline decoration-1 underline-offset-[3px] hover:text-heading"
    >
      {children}
    </a>
  );
}

/* ─── 03 / Founder ─── */

function Founder() {
  return (
    <section
      id="founder"
      aria-labelledby="founder-title"
      className="border-t border-rule"
    >
      <div
        className={`${frame} flex flex-wrap items-start gap-x-[clamp(40px,6vw,88px)] gap-y-8 py-[var(--section-y)]`}
      >
        <div className="flex flex-[1_1_220px] flex-col gap-6">
          <p className={label}>03 / Founder</p>
          <Image
            src="/assets/yuyu-shen.jpg"
            alt="Yuyu Shen"
            width={480}
            height={480}
            sizes="200px"
            className="block aspect-square w-[clamp(140px,16vw,200px)] rounded-card bg-sage object-cover"
          />
        </div>
        <div className="flex max-w-[64ch] min-w-0 flex-[3_1_440px] flex-col gap-5">
          <h2
            id="founder-title"
            className="font-serif text-[clamp(28px,2.8vw,38px)] leading-[1.18] font-normal text-heading"
          >
            Yuyu Shen
          </h2>
          <p className={lead}>
            Hopperlace was founded by Yuyu Shen, a statistically trained data
            scientist turned product manager with nearly a decade building and
            evaluating AI systems, including taking AI products from zero to
            one.
          </p>
          <p className="text-pretty">
            She also built{" "}
            <a href={EVIDENCE_SYNTHESIS_URL} className={proseLink}>
              Evidence Synthesis AI
            </a>
            , which helps research teams use AI to screen studies for systematic
            reviews. Her research on deference-aware evaluation was accepted at
            the ICML 2026 Technical AI Governance workshop. She holds CCA-F and
            CCA-P certifications and writes about technology, agency and better
            decisions at{" "}
            <a href={BUILDWITHWHY_URL} className={proseLink}>
              buildwithwhy.com
            </a>
            .
          </p>
          <a
            href="/services#yuyu"
            className="self-start py-1.5 text-[16px] font-medium text-primary underline decoration-1 underline-offset-[3px] hover:text-heading"
          >
            Full background and credentials →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Services invitation ─── */

function ServicesInvitation() {
  return (
    <section aria-labelledby="services-title" className="bg-sage">
      <div
        className={`${frame} flex flex-col gap-[clamp(28px,4vw,40px)] py-[clamp(56px,7vw,96px)]`}
      >
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-end gap-x-[clamp(40px,6vw,88px)] gap-y-5">
          <div className="flex flex-col gap-3.5">
            <p className={label}>Services</p>
            <h2 id="services-title" className={sectionHeading}>
              Have a specific AI decision to make?
            </h2>
          </div>
          <div className="flex flex-col items-start gap-5">
            <p className="max-w-[48ch] text-pretty">
              Hopperlace works with teams to compare options, test promising
              approaches and recommend what to use, build or investigate next.
            </p>
            <a
              href="/services"
              className={`${primaryButton} inline-flex min-h-[52px] px-7 text-[17px]`}
            >
              Services →
            </a>
          </div>
        </div>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-3">
          {projectTypes.map((type) => (
            <li key={type.href}>
              <a
                href={type.href}
                className="box-border flex min-h-[72px] items-center justify-between gap-4 rounded-card bg-panel px-[22px] py-4 text-[18px] leading-[1.15] font-semibold text-heading no-underline hover:bg-selected"
              >
                <span>{type.label}</span>
                <span aria-hidden="true" className="text-[16px] text-primary">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─── Footer ─── */

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: VALUECOMPASS_URL, label: "valuecompass.ai" },
  { href: BUILDWITHWHY_URL, label: "buildwithwhy.com" },
  { href: MAIL_HREF, label: EMAIL },
];

function Footer() {
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

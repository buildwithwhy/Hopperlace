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
        "Hopperlace is developing independent, hands-on comparisons of AI tools: testing them on the same tasks, checking their outputs, and recording the effort needed to get a usable result. ValueCompass, available today, adds research on the companies behind those tools: their ownership, dependencies and policies.",
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
            name: "AI decision support",
            description:
              "Hopperlace works with teams to understand a workflow, compare options and test promising approaches. Engagements end with findings and a recommendation to help a team decide what to use, what to build, or what to investigate next.",
            url: "https://hopperlace.ai/services",
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

const gutter = "px-[clamp(20px,3.5vw,48px)]";
const label = "font-mono text-[12px] font-medium tracking-[0.12em] text-accent";
const smallLabel =
  "font-mono text-[11px] font-medium tracking-[0.12em] text-muted";

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

const navLinks = [
  { href: "#testing", label: "Testing" },
  { href: "#valuecompass", label: "ValueCompass" },
  { href: "#founder", label: "Founder" },
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

export default function Home() {
  return (
    <div className="[--g:clamp(20px,3.5vw,48px)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
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
    <header
      className={`${gutter} sticky top-0 z-10 flex flex-wrap items-center gap-x-7 gap-y-2.5 border-b border-ink bg-paper py-4`}
    >
      <a
        href="#top"
        className="flex-1 font-serif text-[19px] font-semibold tracking-[0.01em] whitespace-nowrap text-ink no-underline"
      >
        Hopperlace
      </a>
      <nav
        aria-label="Primary"
        className="flex flex-wrap gap-x-[22px] gap-y-1.5 text-[13px] font-medium"
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="text-body no-underline">
            {link.label}
          </a>
        ))}
      </nav>
      <a
        href={VALUECOMPASS_URL}
        className="bg-ink px-4 py-[9px] text-[13px] font-medium whitespace-nowrap text-paper no-underline"
      >
        Try ValueCompass ↗
      </a>
    </header>
  );
}

/* ─── Hero ─── */

function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="grid grid-cols-[minmax(0,1fr)] border-b border-ink hero:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
    >
      <div
        className={`${gutter} grid min-w-0 content-center pt-[clamp(44px,5.5vw,80px)] pb-[clamp(36px,4.5vw,56px)]`}
      >
        <p className={`${label} mb-[22px] tracking-[0.14em] uppercase`}>
          Independent testing &middot; Comparison &middot; Informed choice
        </p>
        <h1
          id="hero-title"
          className="mb-6 max-w-[16ch] font-serif text-[clamp(36px,4.4vw,58px)] leading-[1.06] font-normal tracking-[-0.02em] text-pretty"
        >
          Choose AI for what you want to do &mdash; and what matters to you.
        </h1>
        <p className="mb-3.5 max-w-[52ch] text-[clamp(16px,1.4vw,19px)] leading-[1.6] text-body text-pretty">
          We&rsquo;re developing independent, hands-on comparisons of AI tools:
          testing them on the same tasks, checking their outputs, and recording
          the effort needed to get a usable result.
        </p>
        <p className="max-w-[52ch] text-[clamp(16px,1.4vw,19px)] leading-[1.6] text-body text-pretty">
          ValueCompass, which you can use today, adds research on the companies
          behind those tools: their ownership, dependencies and policies.
        </p>
      </div>
      <div
        className={`${gutter} grid min-w-0 content-center gap-3 border-t border-ink bg-tint py-[clamp(24px,3vw,40px)] hero:border-t-0 hero:border-l`}
      >
        <p className={smallLabel}>TWO PARTS OF ONE DECISION</p>
        <PartCard
          name="TOOL TESTING"
          status={<span className="text-amber">IN DEVELOPMENT</span>}
          heading="Can it do your task, and what will it take?"
          body="Find out which tools suit a particular task, and what effort, expertise and compromises each one involves."
          action={
            <a
              href="#testing"
              className="inline-block border border-ink px-[18px] py-[11px] text-[14px] font-medium text-ink no-underline"
            >
              Explore our testing approach ↓
            </a>
          }
        />
        <PartCard
          name="VALUECOMPASS"
          status={<span className="text-accent">● LIVE</span>}
          heading="Who is behind it, and does that fit your values?"
          body="Compare AI options on ownership, control and documented commitments, against the priorities you choose."
          action={
            <a
              href={VALUECOMPASS_URL}
              className="inline-block bg-accent px-[18px] py-3 text-[14px] font-medium text-paper no-underline"
            >
              Try ValueCompass ↗
            </a>
          }
        />
        <p className="mt-0.5 text-[13px] leading-[1.5] text-body text-pretty">
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
    <article className="min-w-0 border border-ink bg-panel">
      <div className="flex justify-between gap-3 border-b border-rule px-[18px] py-2.5 font-mono text-[11px] font-medium tracking-[0.1em]">
        <span>{name}</span>
        {status}
      </div>
      <div className="px-[18px] pt-4 pb-[18px]">
        <h2 className="mb-2 font-serif text-[clamp(19px,1.7vw,22px)] leading-[1.3] font-medium text-pretty">
          {heading}
        </h2>
        <p className="mb-4 text-[14.5px] leading-[1.55] text-body text-pretty">
          {body}
        </p>
        {action}
      </div>
    </article>
  );
}

/* ─── 01 / Tool testing ─── */

function Testing() {
  return (
    <section
      id="testing"
      aria-labelledby="testing-title"
      className="scroll-mt-[60px] border-b border-ink"
    >
      <div className={`${gutter} border-b border-ink py-[clamp(40px,5vw,64px)]`}>
        <p className="mb-5 font-mono text-[12px] font-medium tracking-[0.12em] text-amber">
          01 / TOOL TESTING &mdash; IN DEVELOPMENT
        </p>
        <h2
          id="testing-title"
          className="mb-4 max-w-[22ch] font-serif text-[clamp(28px,3vw,38px)] leading-[1.2] font-normal tracking-[-0.015em] text-pretty"
        >
          See how AI tools perform on the work you need done.
        </h2>
        <p className="mb-3.5 max-w-[54ch] text-[16px] leading-[1.65] text-body text-pretty">
          Our comparisons are meant to show which tools fit your work and
          circumstances, and what you&rsquo;d be taking on with each.
        </p>
        <p className="mb-3.5 max-w-[54ch] text-[16px] leading-[1.65] text-body text-pretty">
          To get there, several tools receive comparable tasks, each task is run
          more than once, and we check the outputs independently rather than
          relying on what the tool reports.
        </p>
        <p className="max-w-[54ch] text-[15px] leading-[1.6] text-muted">
          Our first comparisons will focus on AI app builders.
        </p>
        <Scenario />
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))]">
        <div className={`${gutter} min-w-0 py-[clamp(32px,4vw,48px)]`}>
          <h3 className={`${smallLabel} mb-3`}>WHAT WE&rsquo;LL RECORD</h3>
          <dl className="border-t border-ink">
            {recorded.map((item) => (
              <div
                key={item.heading}
                className="grid grid-cols-[minmax(110px,150px)_minmax(0,1fr)] gap-3.5 border-b border-rule py-3 text-[15px] leading-[1.5] text-body"
              >
                <dt className="font-semibold text-ink">{item.heading}</dt>
                <dd>{item.body}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div
          className={`${gutter} min-w-0 border-t border-ink py-[clamp(32px,4vw,48px)] split:border-t-0 split:border-l`}
        >
          <h3 className={`${smallLabel} mb-3`}>WHAT YOU&rsquo;LL GET</h3>
          <ul className="border-t border-ink">
            {outcomes.map((outcome) => (
              <li
                key={outcome}
                className="grid grid-cols-[20px_minmax(0,1fr)] gap-3 border-b border-rule py-3 text-[15px] leading-[1.5] text-body"
              >
                <span aria-hidden="true" className="font-mono text-[13px] text-muted">
                  →
                </span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* Native <details>, so the disclosure works without client JavaScript. */
function Scenario() {
  return (
    <details className="mt-6 min-w-0 max-w-[54ch] border border-dashed border-amber bg-panel">
      <summary className="box-border flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 px-[18px] py-3.5 [&::-webkit-details-marker]:hidden">
        <span className="text-[14px] leading-[1.4] font-semibold text-ink">
          Example test scenario:{" "}
          <span className="font-normal">Building and maintaining a booking app</span>
        </span>
        <span aria-hidden="true" className="font-mono text-[13px] text-muted">
          ↓
        </span>
      </summary>
      <div className="grid gap-3.5 px-[18px] pb-[18px]">
        <div className="grid gap-1">
          <p className="font-mono text-[11px] font-medium tracking-[0.1em] text-muted">
            DECISION
          </p>
          <p className="font-serif text-[16px] leading-[1.45] text-ink text-pretty">
            Which AI app builder suits a small-business owner with limited
            technical experience?
          </p>
        </div>
        <div className="grid gap-1">
          <p className="font-mono text-[11px] font-medium tracking-[0.1em] text-muted">
            EVALUATION SCOPE
          </p>
          <ul className="border-b border-rule">
            {scenarioScope.map((item) => (
              <li
                key={item.heading}
                className="grid gap-0.5 border-t border-rule py-[9px]"
              >
                <strong className="text-[14px] leading-[1.4] font-semibold text-ink">
                  {item.heading}
                </strong>
                <span className="text-[14px] leading-[1.55] text-body text-pretty">
                  {item.body}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-1">
          <p className="font-mono text-[11px] font-medium tracking-[0.1em] text-muted">
            INTENDED OUTCOME
          </p>
          <p className="text-[14.5px] leading-[1.55] text-body text-pretty">
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
      className="scroll-mt-[60px] border-b border-ink"
    >
      <div
        className={`${gutter} flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pt-7`}
      >
        <p className={label}>02 / VALUECOMPASS &mdash; AVAILABLE NOW</p>
        <p className="text-[13px] text-muted">
          Opens valuecompass.ai. No account needed.
        </p>
      </div>
      <div className={`${gutter} pt-5 pb-[clamp(32px,4vw,48px)]`}>
        <article className="grid min-w-0 grid-cols-[minmax(0,1fr)] border border-ink bg-panel vc:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="grid min-w-0 content-center px-[clamp(18px,2.5vw,32px)] py-[clamp(24px,3vw,36px)]">
            <h2
              id="valuecompass-title"
              className="mb-3.5 font-serif text-[clamp(24px,2.4vw,30px)] leading-[1.2] font-normal tracking-[-0.015em] text-pretty"
            >
              Explore the values behind your AI choices.
            </h2>
            <p className="mb-3 text-[15px] leading-[1.6] text-body text-pretty">
              Who benefits from the money you spend on AI? What commitments do
              providers make to the people affected by their technology?
            </p>
            <p className="mb-[22px] text-[15px] leading-[1.6] text-body text-pretty">
              ValueCompass helps you examine the companies behind AI products
              and compare options against your values. Explore ownership,
              control, dependencies and documented policies, with sources and
              clear gaps in the research.
            </p>
            <a
              href={VALUECOMPASS_URL}
              className="justify-self-start bg-accent px-5 py-3 text-[14px] font-medium text-paper no-underline"
            >
              Try ValueCompass ↗
            </a>
          </div>
          <div className="grid min-w-0 content-center gap-2.5 border-t border-rule bg-tint p-[clamp(16px,2vw,24px)] vc:border-t-0 vc:border-l">
            <a
              href={shots.fullEvidence}
              target="_blank"
              rel="noopener"
              className="relative block min-w-0 border border-rule bg-shot text-ink no-underline"
            >
              <Image
                src={shots.cardsCrop}
                alt="ValueCompass option cards for ChatGPT and Claude. Each shows who gets paid and what it runs on, documented alignment on nonprofit control with source links, and for Claude a separate ‘What we could not check’ note on the economic-stake question"
                width={1998}
                height={1590}
                sizes="(min-width: 761px) 60vw, 100vw"
                className="hidden h-auto max-h-[420px] w-full object-contain object-top vc:block"
              />
              <Image
                src={shots.claudeCard}
                alt="ValueCompass option card for Claude: who gets paid and what it runs on, documented alignment on nonprofit control, and a separate ‘What we could not check’ note on the economic-stake question"
                width={1000}
                height={1590}
                sizes="100vw"
                className="block h-auto w-full vc:hidden"
              />
              <span className="absolute right-2.5 bottom-2.5 inline-flex min-h-8 items-center gap-1.5 bg-ink px-3 py-[7px] text-[12px] font-medium text-paper">
                View example ↗
              </span>
            </a>
            <p className="text-[13px] leading-[1.5] text-body">
              An example comparing nonprofit control and financial interests.
              Confirmed findings and unanswered questions appear separately.
            </p>
            <p className="text-[12px] leading-[1.5] text-muted">
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
          </div>
        </article>
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
      className="text-muted underline underline-offset-2"
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
      className={`${gutter} grid scroll-mt-[60px] grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-x-[var(--g)] gap-y-6 border-b border-ink py-[clamp(40px,5vw,64px)]`}
    >
      <h2 id="founder-title" className="sr-only">
        Founder
      </h2>
      <div>
        <p className={`${label} mb-5`}>03 / FOUNDER</p>
        <Image
          src="/assets/yuyu-shen.jpg"
          alt="Yuyu Shen"
          width={480}
          height={480}
          sizes="112px"
          className="block size-28 border border-ink object-cover"
        />
      </div>
      <div className="col-span-2 grid max-w-[680px] gap-[18px]">
        <p className="font-serif text-[clamp(19px,1.9vw,23px)] leading-[1.5] font-normal text-pretty">
          Hopperlace was founded by{" "}
          <strong className="font-semibold">Yuyu Shen</strong>, a statistically
          trained data scientist turned product manager with nearly a decade
          building and evaluating AI systems, including taking AI products from
          zero to one.
        </p>
        <p className="text-[15px] leading-[1.6] text-body text-pretty">
          She also built{" "}
          <a
            href={EVIDENCE_SYNTHESIS_URL}
            className="text-accent underline underline-offset-2"
          >
            Evidence Synthesis AI
          </a>
          , which helps research teams use AI to screen studies for systematic
          reviews. Her research on deference-aware evaluation was accepted at
          the ICML 2026 Technical AI Governance workshop. She holds CCA-F and
          CCA-P certifications and writes about technology, agency and better
          decisions at{" "}
          <a
            href={BUILDWITHWHY_URL}
            className="text-accent underline underline-offset-2"
          >
            buildwithwhy.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}

/* ─── Services invitation ─── */

function ServicesInvitation() {
  return (
    <section
      aria-labelledby="services-invitation-title"
      className={`${gutter} grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-center gap-x-[var(--g)] gap-y-5 border-b border-ink py-[clamp(28px,4vw,44px)]`}
    >
      <div>
        <h2
          id="services-invitation-title"
          className="mb-1.5 font-serif text-[clamp(22px,2.4vw,28px)] leading-[1.3] font-normal tracking-[-0.01em]"
        >
          Have a specific AI decision to make?
        </h2>
        <p className="text-[15px] leading-[1.55] text-body">
          Hopperlace works with teams to compare options, test promising
          approaches and recommend what to use, build or investigate next.
        </p>
      </div>
      <a
        href="/services"
        className="justify-self-start border border-ink px-6 py-3.5 text-[15px] font-medium text-ink no-underline"
      >
        Services →
      </a>
    </section>
  );
}

/* ─── Footer ─── */

function Footer() {
  return (
    <footer
      className={`${gutter} flex flex-wrap justify-between gap-x-8 gap-y-3 pt-7 pb-10 text-[13px] leading-[1.5] text-muted`}
    >
      <span>
        &copy; 2026 Hopperlace &middot; Independent. No placement fees, no
        sponsored results.
      </span>
      <div className="flex flex-wrap gap-5">
        <a
          href={VALUECOMPASS_URL}
          className="text-muted underline underline-offset-2"
        >
          valuecompass.ai
        </a>
        <a
          href={BUILDWITHWHY_URL}
          className="text-muted underline underline-offset-2"
        >
          buildwithwhy.com
        </a>
        <a href={MAIL_HREF} className="text-muted underline underline-offset-2">
          {EMAIL}
        </a>
      </div>
    </footer>
  );
}

import { CONSULTATION_HREF, DEMO_HREF, EMAIL, MAIL_HREF } from "@/lib/links";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://hopperlace.ai/#organization",
      name: "Hopperlace",
      url: "https://hopperlace.ai",
      slogan: "Most AI stacks were never evaluated. Yours can be.",
      knowsAbout: [
        "AI stack evaluation",
        "AI tool curation",
        "AI architecture",
        "Independent AI benchmarks",
        "Deference-aware evaluation",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: EMAIL,
        availableLanguage: "English",
      },
      description:
        "Hopperlace helps organisations choose and run the right AI stack — models and tools evaluated against their actual tasks, their risk profile, and the trustworthiness of the makers behind them — and supports the architecture that puts the stack together.",
      email: EMAIL,
      founder: {
        "@type": "Person",
        name: "Yuyu Shen",
        jobTitle: "Founder",
      },
      sameAs: ["https://www.evidencesynthesisai.com/"],
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI stack evaluation & curation",
            description:
              "Evaluation of an existing AI stack against what an organisation actually needs, or curation of a new one from its tasks. Every recommendation rests on evaluation, not vendor claims.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI architecture support",
            description:
              "Architecture, integration, and the handoffs between models, tools, and people — so the stack works as a system rather than a pile of subscriptions.",
          },
        },
      ],
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
      name: "Hopperlace — AI stack evaluation & curation",
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
        "A framework for evaluating AI systems on their capacity to recognise the limits of their own competence and defer when appropriate, alongside standard accuracy. Accepted at the Technical AI Governance workshop, ICML 2026. The method underpins Hopperlace's evaluation practice.",
    },
  ],
};

/* ─── Shared layout & type primitives ─── */

const gutter = "px-6 wide:px-12";
const label = "font-mono text-[12px] font-medium tracking-[0.12em] text-accent";

/* ─── Content ─── */

const navLinks = [
  { href: "#problem", label: "The problem" },
  { href: "#services", label: "Services" },
  { href: "#method", label: "Method" },
  { href: "#benchmarks", label: "Benchmarks" },
  { href: "#grounding", label: "Grounding" },
];

const services = [
  {
    label: "02 / AI STACK EVALUATION & CURATION",
    heading: "One discipline: evaluate, then curate.",
    body: (
      <>
        Most stacks grew by accretion &mdash; tools adopted over the years with
        no coherent strategy. We look at what you have against what you actually
        need: does each piece fit, is there something better, and what has to
        change. No stack yet? We start from your tasks and curate one. Either
        way, every recommendation rests on evaluation, not vendor claims.
      </>
    ),
  },
  {
    label: "03 / AI ARCHITECTURE SUPPORT",
    heading: "Put together to work as a whole.",
    body: (
      <>
        Choosing right is half the work. We help with the other half &mdash;
        architecture, integration, and the handoffs between models, tools, and
        people &mdash; so the stack works as a system, not a pile of
        subscriptions.
      </>
    ),
  },
];

const criteria = [
  {
    marker: "i.",
    heading: "Task-specific capability",
    body: (
      <>
        Performance measured on the work you actually do &mdash; not someone
        else&rsquo;s benchmark or a leaderboard average.
      </>
    ),
  },
  {
    marker: "ii.",
    heading: "Trust & reliability",
    body: (
      <>
        Consistent behaviour under pressure. Systems that know their limits and
        hand off well &mdash; from makers with a record worth trusting.
      </>
    ),
  },
  {
    marker: "iii.",
    heading: "User experience",
    body: (
      <>
        A stack your people will actually use well &mdash; clear, low-friction,
        and honest about what it&rsquo;s doing.
      </>
    ),
  },
];

const benchmarkPoints = [
  {
    lead: "AI models and tools alike.",
    body: (
      <>
        Not just abstract model charts &mdash; how the tools and systems built
        around them perform in real environments.
      </>
    ),
  },
  {
    lead: "Task-grounded.",
    body: (
      <>
        Scored against real work, using the same criteria as our evaluations:
        capability, trust &amp; reliability, user experience.
      </>
    ),
  },
  {
    lead: "Independent.",
    body: <>No placement fees, no vendor sponsorship of results.</>,
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Method />
        <Benchmarks />
        <Grounding />
      </main>
      <FooterCta />
    </>
  );
}

/* ─── Header (sticky) ─── */

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-ink bg-paper">
      <div
        className={`${gutter} grid grid-cols-[1fr_auto] items-center gap-6 py-[22px] wide:grid-cols-[1fr_auto_auto] wide:gap-10`}
      >
        <div className="font-serif text-[18px] font-semibold tracking-[0.01em]">
          Hopperlace
        </div>
        <nav
          aria-label="Primary"
          className="hidden gap-7 text-[13px] font-medium text-body wide:flex"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="no-underline">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={CONSULTATION_HREF}
          className="bg-ink px-5 py-2.5 text-[13px] font-medium whitespace-nowrap text-paper no-underline"
        >
          Book a consultation
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
      className={`${gutter} border-b border-ink pt-16 pb-12 wide:pt-22 wide:pb-18`}
    >
      <p className={`${label} mb-6 tracking-[0.14em] uppercase`}>
        AI stack evaluation &amp; curation &middot; AI architecture support
        &middot; independent benchmarks
      </p>
      <h1 id="hero-title" className="mb-9 max-w-[880px] font-serif text-[40px] leading-[1.08] font-normal tracking-[-0.015em] text-pretty wide:text-[62px]">
        Most AI stacks were never evaluated.
        <br />
        <span className="text-muted">Yours can be.</span>
      </h1>
      <div className="grid gap-10 wide:grid-cols-2 wide:items-end wide:gap-12">
        <p className="max-w-[520px] text-[18px] leading-[1.65] text-body text-pretty">
          Hopperlace helps organisations choose and run the right AI stack
          &mdash; models and tools evaluated against your actual tasks, your
          risk profile, and the trustworthiness of the makers behind them. Then
          we help you put it together properly.
        </p>
        <div className="flex flex-wrap items-center gap-3.5 wide:justify-self-end">
          <a
            href={CONSULTATION_HREF}
            className="bg-accent px-[30px] py-4 text-[15px] font-medium text-paper no-underline"
          >
            Book a consultation
          </a>
          <a
            href="#benchmarks"
            className="border border-ink px-[30px] py-[15px] text-[15px] font-medium text-ink no-underline"
          >
            The benchmark platform ↓
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── 01 / The problem ─── */

function Problem() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-title"
      className="grid scroll-mt-[70px] border-b border-ink wide:grid-cols-2"
    >
      <div
        className={`${gutter} border-b border-ink py-14 wide:border-r wide:border-b-0`}
      >
        <p className={`${label} mb-5`}>01 / THE PROBLEM</p>
        <h2 id="problem-title" className="font-serif text-[32px] leading-[1.25] font-normal tracking-[-0.01em] text-pretty">
          Hype, defaults, and vendor claims don&rsquo;t lead to the best AI
          stacks.
        </h2>
      </div>
      <div className={`${gutter} flex items-end py-14`}>
        <p className="text-[17px] leading-[1.65] text-body text-pretty">
          The explosion of AI models and tools has outrun anyone&rsquo;s ability
          to evaluate them &mdash; so most AI stacks get chosen by chance and
          marketing. An evaluation asks hard questions: does this work on your
          tasks, within your risk profile, and can your team use it effectively?
        </p>
      </div>
    </section>
  );
}

/* ─── 02 + 03 / Services ─── */

function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="grid scroll-mt-[70px] border-b border-ink wide:grid-cols-2"
    >
      <h2 id="services-title" className="sr-only">
        Services
      </h2>
      {services.map((service, i) => (
        <div
          key={service.label}
          className={`${gutter} py-14 ${
            i === 0
              ? "border-b border-ink wide:border-r wide:border-b-0"
              : ""
          }`}
        >
          <p className={`${label} mb-5`}>{service.label}</p>
          <h3 className="mb-4 font-serif text-[24px] leading-[1.3] font-medium">
            {service.heading}
          </h3>
          <p className="text-[16px] leading-[1.65] text-body text-pretty">
            {service.body}
          </p>
        </div>
      ))}
    </section>
  );
}

/* ─── 04 / Method ─── */

function Method() {
  return (
    <section
      id="method"
      aria-labelledby="method-title"
      className={`${gutter} scroll-mt-[70px] border-b border-ink py-14`}
    >
      <p className={`${label} mb-3`}>04 / METHOD</p>
      <h2 id="method-title" className="mb-10 max-w-[640px] font-serif text-[32px] leading-[1.25] font-normal tracking-[-0.01em] text-pretty">
        What every candidate is evaluated against.
      </h2>
      <div className="grid border-t border-ink wide:grid-cols-3">
        {criteria.map((item, i) => (
          <div
            key={item.marker}
            className={`py-7 ${
              i === 0
                ? "wide:pr-8"
                : i === criteria.length - 1
                  ? "wide:pl-8"
                  : "wide:px-8"
            } ${
              i < criteria.length - 1
                ? "border-b border-rule wide:border-r wide:border-b-0"
                : ""
            }`}
          >
            <p className="mb-3 font-mono text-[14px] text-muted">
              {item.marker}
            </p>
            <h3 className="mb-2.5 font-serif text-[19px] leading-[1.35] font-medium">
              {item.heading}
            </h3>
            <p className="text-[15px] leading-[1.6] text-body text-pretty">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── 05 / Product — Benchmarks ─── */

function Benchmarks() {
  return (
    <section
      id="benchmarks"
      aria-labelledby="benchmarks-title"
      className="grid scroll-mt-[70px] border-b border-ink bg-tint wide:grid-cols-2"
    >
      <div className={`${gutter} border-b border-ink py-16 wide:border-b-0`}>
        <p className={`${label} mb-5`}>05 / PRODUCT &mdash; IN DEVELOPMENT</p>
        <h2
          id="benchmarks-title"
          className="mb-[18px] max-w-[520px] font-serif text-[32px] leading-[1.25] font-normal tracking-[-0.01em] text-pretty">
          Independent benchmarks, as a platform.
        </h2>
        <p className="mb-7 max-w-[520px] text-[16.5px] leading-[1.65] text-body text-pretty">
          We&rsquo;re building the benchmarks we wished existed: independent,
          task-grounded evaluations of AI models <em>and</em> tools &mdash; run
          by evaluators with no stake in the outcome. What our practice learns
          by hand, the platform will make repeatable.
        </p>
        <div className="flex flex-wrap items-center gap-3.5">
          <a
            href={DEMO_HREF}
            className="bg-ink px-6 py-[13px] text-[14px] font-medium text-paper no-underline"
          >
            Book a demo
          </a>
          <span className="text-[13.5px] text-muted">
            Early access, rolling out gradually.
          </span>
        </div>
      </div>
      <div
        className={`${gutter} grid content-center py-16 wide:border-l wide:border-ink`}
      >
        {benchmarkPoints.map((point, i) => (
          <div
            key={point.lead}
            className={`grid grid-cols-[24px_1fr] gap-4 py-[18px] ${
              i < benchmarkPoints.length - 1 ? "border-b border-rule" : ""
            }`}
          >
            <span className="font-mono text-[13px] text-muted">→</span>
            <p className="text-[15px] leading-[1.55] text-body text-pretty">
              <strong className="font-semibold text-ink">{point.lead}</strong>{" "}
              {point.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── 06 / Grounding ─── */

function Grounding() {
  return (
    <section
      id="grounding"
      aria-labelledby="grounding-title"
      className={`${gutter} grid scroll-mt-[70px] gap-6 border-b border-ink py-16 wide:grid-cols-[220px_1fr] wide:gap-12`}
    >
      <h2 id="grounding-title" className="sr-only">
        Grounding
      </h2>
      <p className={label}>06 / GROUNDING</p>
      <div className="grid max-w-[680px] gap-8">
        <p className="font-serif text-[22px] leading-[1.55] font-normal text-ink text-pretty">
          Our method comes from published research. The founder&rsquo;s work on
          deference-aware evaluation was accepted at ICML&rsquo;s Technical AI
          Governance workshop, 2026.
        </p>
        <div className="grid gap-8 text-[15px] leading-[1.6] text-body wide:grid-cols-2 wide:gap-12">
          <p>
            <strong className="font-semibold text-ink">Yuyu Shen</strong>{" "}
            &mdash; Founder. Statistically trained data scientist turned product
            manager, with more than a decade building and evaluating AI systems
            and products in fintech, employment, supply chain, and consumer
            banking. CCA-F certified (Certified Claude Architect &ndash;
            Foundational).
          </p>
          <p>
            Hopperlace is a product company that starts with service. We also
            build{" "}
            <a
              href="https://www.evidencesynthesisai.com/"
              className="text-accent underline underline-offset-2"
            >
              Evidence Synthesis AI
            </a>
            , an AI screening product for systematic review and
            pharmacovigilance.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer CTA (dark) ─── */

function FooterCta() {
  return (
    <footer
      aria-labelledby="cta-title"
      className={`${gutter} bg-ink py-18 text-paper`}
    >
      <div className="grid items-center gap-8 wide:grid-cols-[1fr_auto] wide:gap-12">
        <h2 id="cta-title" className="max-w-[640px] font-serif text-[42px] leading-[1.15] font-normal tracking-[-0.01em] text-pretty">
          Get your stack evaluated before it gets expensive.
        </h2>
        <a
          href={CONSULTATION_HREF}
          className="justify-self-start bg-paper px-[34px] py-[18px] text-[16px] font-medium text-ink no-underline"
        >
          Book a consultation
        </a>
      </div>
      <div className="mt-16 flex justify-between gap-6 border-t border-dark-rule pt-5 text-[13px] text-dark-muted">
        <span>&copy; 2026 Hopperlace</span>
        <a href={MAIL_HREF} className="text-dark-muted underline underline-offset-2">
          {EMAIL}
        </a>
      </div>
    </footer>
  );
}

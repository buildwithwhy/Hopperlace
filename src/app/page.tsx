import Image from "next/image";
import {
  BUILDWITHWHY_URL,
  EMAIL,
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
        "Hopperlace is building a better way to compare what AI tools can do, what they are like to use, and how they fit your values. ValueCompass, its values-based comparison product, is available today; repeatable testing of AI tools on real tasks is in development.",
      email: EMAIL,
      founder: {
        "@type": "Person",
        name: "Yuyu Shen",
        jobTitle: "Founder",
      },
      sameAs: [VALUECOMPASS_URL, BUILDWITHWHY_URL],
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
        "Choose the priorities that matter to you and compare AI options against them. ValueCompass examines the companies behind AI products — ownership, control and documented commitments — with sources behind the findings and clear gaps in the research.",
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

/* ─── Assets ───
   Real captures of valuecompass.ai supplied by the founder, 22 Sep 2026. The
   `*-crop` / `*-v3` files are crops prepared for on-page use; the numbered
   files are the full captures every preview links out to. */

const shots = {
  heroCrop: "/assets/vc-hero-priorities-v3.png",
  cardsCrop: "/assets/vc-cards-crop.png",
  claudeCard: "/assets/vc-card-claude.png",
  fullPriorities: "/assets/vc-01-choosing-priorities.png",
  fullAdvice: "/assets/vc-02-seeing-the-advice.png",
  fullEvidence: "/assets/vc-03-evidence-on-the-cards.png",
} as const;

/* ─── Content ─── */

const navLinks = [
  { href: "#valuecompass", label: "ValueCompass" },
  { href: "#lab", label: "What we’re building" },
  { href: "#approach", label: "Approach" },
  { href: "/services", label: "Services" },
];

const measures = [
  {
    label: "RESULTS",
    heading: "Does it work?",
    body: <>Does the output do what the task asked?</>,
  },
  {
    label: "FIXES",
    heading: "What needs fixing?",
    body: (
      <>What errors occur, and how many attempts does it take to resolve them?</>
    ),
  },
  {
    label: "TIME",
    heading: "How long does it take?",
    body: <>Time from the initial instructions to a usable result.</>,
  },
  {
    label: "COST",
    heading: "What does it cost?",
    body: <>The cost of completing the task, including retries.</>,
  },
  {
    label: "ASSISTANCE",
    heading: "How much help does it need?",
    body: (
      <>The guidance and technical knowledge needed to reach a useful result.</>
    ),
  },
];

const questions = [
  {
    label: "TASK",
    heading: "Can it do the task?",
    body: <>A tool&rsquo;s strengths need to match the work you want to do.</>,
  },
  {
    label: "EXPERIENCE",
    heading: "What is it like to use?",
    body: (
      <>
        The setup and effort involved need to suit your skills and how you work.
      </>
    ),
  },
  {
    label: "VALUES",
    heading: "Does it fit what matters to you?",
    body: (
      <>
        Your choice also supports the companies behind the tools, with their
        ownership, practices and commitments.
      </>
    ),
  },
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
        <ValueCompass />
        <Lab />
        <Approach />
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
      className="grid grid-cols-[minmax(0,1fr)] border-b border-ink hero:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
    >
      <div
        className={`${gutter} min-w-0 pt-[clamp(48px,6vw,88px)] pb-[clamp(40px,5vw,64px)]`}
      >
        <p className={`${label} mb-6 tracking-[0.14em] uppercase`}>
          Independent testing &middot; Comparison &middot; Informed choice
        </p>
        <h1
          id="hero-title"
          className="mb-6 max-w-[16ch] font-serif text-[clamp(36px,4.4vw,58px)] leading-[1.06] font-normal tracking-[-0.02em] text-pretty"
        >
          Choose AI for what you want to do &mdash; and what matters to you.
        </h1>
        <p className="mb-3.5 max-w-[50ch] text-[clamp(16px,1.4vw,19px)] leading-[1.6] text-body text-pretty">
          We&rsquo;re building Hopperlace to help you compare what AI tools can
          do, what they&rsquo;re like to use, and how they fit your values.
        </p>
        <p className="mb-7 max-w-[50ch] text-[clamp(16px,1.4vw,19px)] leading-[1.6] text-body text-pretty">
          Explore the values side today with ValueCompass. Comparisons of tool
          capabilities and experience are in development.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={VALUECOMPASS_URL}
            className="bg-accent px-[26px] py-[15px] text-[15px] font-medium text-paper no-underline"
          >
            Try ValueCompass ↗
          </a>
          <a
            href="#lab"
            className="border border-ink px-[26px] py-3.5 text-[15px] font-medium text-ink no-underline"
          >
            What we&rsquo;re building ↓
          </a>
        </div>
      </div>
      <div className="grid min-w-0 content-center border-t border-ink bg-tint px-[clamp(16px,2.5vw,36px)] py-[clamp(20px,3vw,36px)] hero:border-t-0 hero:border-l">
        <div className="min-w-0 border border-ink bg-panel">
          <div className="flex justify-between gap-3 border-b border-ink px-4 py-2.5 font-mono text-[11px] font-medium tracking-[0.1em]">
            <span>VALUECOMPASS &middot; VALUES-BASED COMPARISON</span>
            <span className="text-accent">● LIVE</span>
          </div>
          <a
            href={shots.fullPriorities}
            target="_blank"
            rel="noopener"
            title="Open the full capture"
            className="block min-w-0 bg-shot"
          >
            <Image
              src={shots.heroCrop}
              alt="ValueCompass: the question “Who am I empowering with this choice?” with two preferences ticked — a foundation or non-profit holds control of the company, and a public-purpose body has a documented economic stake or revenue share"
              width={1960}
              height={665}
              priority
              sizes="(min-width: 861px) 50vw, 100vw"
              className="block h-auto w-full"
            />
          </a>
        </div>
        <p className="mt-2.5 text-[12px] leading-[1.5] text-muted">
          Choosing priorities on valuecompass.ai, 22 Sep 2026.{" "}
          <a
            href={shots.fullPriorities}
            target="_blank"
            rel="noopener"
            className="text-muted underline underline-offset-2"
          >
            Open the full capture
          </a>
          .
        </p>
      </div>
    </section>
  );
}

/* ─── 01 / ValueCompass ─── */

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
        <p className={label}>01 / VALUECOMPASS</p>
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
              control and documented commitments, with sources and clear gaps in
              the research.
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
                className="hidden h-auto max-h-[440px] w-full object-contain object-top vc:block"
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
              Two of thirteen options shown; one on small screens. Full captures:{" "}
              <a
                href={shots.fullAdvice}
                target="_blank"
                rel="noopener"
                className="text-muted underline underline-offset-2"
              >
                summary of what was found
              </a>{" "}
              &middot;{" "}
              <a
                href={shots.fullEvidence}
                target="_blank"
                rel="noopener"
                className="text-muted underline underline-offset-2"
              >
                evidence on the cards
              </a>
              .
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

/* ─── 02 / What we're building ─── */

function Lab() {
  return (
    <section
      id="lab"
      aria-labelledby="lab-title"
      className="scroll-mt-[60px] border-b border-ink bg-tint"
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))]">
        <div className={`${gutter} py-[clamp(40px,5vw,64px)]`}>
          <p className="mb-5 font-mono text-[12px] font-medium tracking-[0.12em] text-amber">
            02 / WHAT WE&rsquo;RE BUILDING &mdash; IN DEVELOPMENT
          </p>
          <h2
            id="lab-title"
            className="mb-4 max-w-[22ch] font-serif text-[clamp(28px,3vw,38px)] leading-[1.2] font-normal tracking-[-0.015em] text-pretty"
          >
            Repeatable tests of AI tools on real tasks.
          </h2>
          <p className="mb-3.5 max-w-[54ch] text-[16px] leading-[1.65] text-body text-pretty">
            We&rsquo;re developing repeatable tests of AI tools, starting with
            AI app builders. Each comparison will use the same tasks across
            several tools, with multiple runs to examine how results vary.
            We&rsquo;ll combine automated tests with hands-on review to examine
            both the output and the experience of using each tool.
          </p>
          <p className="max-w-[54ch] text-[16px] leading-[1.65] text-body text-pretty">
            The aim is to bring these comparisons together with ValueCompass, so
            you can consider practical fit and values in the same decision.
          </p>
        </div>
        <div
          className={`${gutter} grid min-w-0 content-center gap-2.5 border-t border-ink py-[clamp(28px,4vw,48px)] split:border-t-0 split:border-l`}
        >
          <p className="font-mono text-[11px] font-medium tracking-[0.12em] text-muted">
            WHAT EACH COMPARISON WILL EXAMINE
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-2.5">
            {measures.map((measure) => (
              <div
                key={measure.label}
                className="min-w-0 border border-ink bg-panel px-[18px] py-4"
              >
                <p className="mb-2 font-mono text-[11px] font-medium tracking-[0.1em] text-muted">
                  {measure.label}
                </p>
                <h3 className="mb-1.5 font-serif text-[18px] leading-[1.3] font-medium">
                  {measure.heading}
                </h3>
                <p className="text-[14px] leading-[1.5] text-body text-pretty">
                  {measure.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 03 / How we approach a choice ─── */

function Approach() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-title"
      className={`${gutter} scroll-mt-[60px] border-b border-ink py-[clamp(40px,5vw,64px)]`}
    >
      <p className={`${label} mb-3.5`}>03 / HOW WE APPROACH A CHOICE</p>
      <h2
        id="approach-title"
        className="mb-9 max-w-[26ch] font-serif text-[clamp(28px,3vw,38px)] leading-[1.2] font-normal tracking-[-0.015em] text-pretty"
      >
        Three questions worth asking of any AI tool.
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-4">
        {questions.map((question) => (
          <div
            key={question.label}
            className="border border-ink bg-panel px-5 py-[22px]"
          >
            <p className="mb-3.5 font-mono text-[11px] font-medium tracking-[0.1em] text-muted">
              {question.label}
            </p>
            <h3 className="mb-2.5 font-serif text-[21px] leading-[1.3] font-medium">
              {question.heading}
            </h3>
            <p className="text-[15px] leading-[1.6] text-body text-pretty">
              {question.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── 04 / Founder ─── */

function Founder() {
  return (
    <section
      id="founder"
      aria-labelledby="founder-title"
      className={`${gutter} grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-x-[var(--g)] gap-y-6 border-b border-ink py-[clamp(40px,5vw,64px)]`}
    >
      <h2 id="founder-title" className="sr-only">
        Founder
      </h2>
      <div>
        <p className={`${label} mb-5`}>04 / FOUNDER</p>
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
          Her research on deference-aware evaluation was accepted at the ICML
          2026 Technical AI Governance workshop. She holds CCA-F and CCA-P
          certifications and writes about technology, agency and better
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

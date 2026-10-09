import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  BUILDWITHWHY_URL,
  EMAIL,
  EVIDENCE_SYNTHESIS_URL,
  VALUECOMPASS_URL,
} from "@/lib/links";
import { withDimensions } from "@/lib/dimensions";
import {
  cardText,
  cardTitle,
  frame,
  itemTitle,
  label,
  labelType,
  largeButton,
  lead,
  marker,
  primaryButton,
  proseLink,
  sectionHeading,
  smallLabel,
  smallLabelType,
} from "@/lib/ui";

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
        "Hopperlace helps you choose AI tools and systems that fit your tasks, preferences and values, with evidence you can understand and inspect. ValueCompass, available today, adds research on the companies behind those tools: their ownership, dependencies and policies. Hopperlace is also developing independent, hands-on comparisons of the tools themselves.",
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
            name: "Choose an AI approach",
            description:
              "Decide which provider, tool or system design to use, based on evidence tested on your cases. You receive a comparison of the shortlisted options on your own cases, a recommended approach and system design, and integration prototypes where agreed.",
            url: "https://hopperlace.ai/services#choose",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Develop and test an AI idea",
            description:
              "Work out what it should do, build a working version, and see whether it delivers. You receive a working prototype, findings from testing, and a practical recommendation for what to develop next.",
            url: "https://hopperlace.ai/services#develop",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Improve an existing AI experience",
            description:
              "Find what is holding it back for real users, then test and make the changes. You receive a diagnosis supported by real examples, a check on whether your metrics reflect useful outcomes, tested or implemented changes where agreed, and evidence of their effect.",
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

/* The six questions, as the homepage asks them of every tool. */
const questions = withDimensions({
  functionality:
    "Does it accomplish your task to the quality you need? How consistently does it work across different cases and repeated attempts, and where does it fail?",
  effort:
    "How much setup, guidance, checking and correction does it require? What can you manage yourself, and where is specialist help needed?",
  oversight:
    "Can you understand and check what it has done, approve consequential actions, intervene when needed, and recover from mistakes?",
  maintainability:
    "Can you adapt it as your needs change, diagnose problems and make improvements without breaking what already works?",
  portability:
    "What are you committing to? Can you move your data, work or setup elsewhere, and what would switching actually involve?",
  cost: "What does a useful result cost—including subscriptions, usage, retries and the human time involved?",
});

const howWeTest = [
  {
    heading: "Representative tasks, repeated",
    body: "Each tool gets comparable tasks that reflect real use, and each task is run more than once.",
  },
  {
    heading: "Independent checks",
    body: "We check the outputs ourselves rather than relying on what the tool reports.",
  },
  {
    heading: "Successes, failures and repairs",
    body: "What worked, what broke, and how many attempts it took to fix.",
  },
  {
    heading: "Money and time, kept apart",
    body: "Monetary cost is recorded separately from the time and human assistance a result required.",
  },
  {
    heading: "Inspectable evidence",
    body: "Example outputs and the limits of each test are published alongside the advice.",
  },
];

const outcomes = [
  "Options suited to your kind of task.",
  "The trade-offs that could change the recommendation.",
  "The evidence behind the advice, so you can check it.",
];

/* The example scenario's proposed checks — plans, not findings. */
const scenarioChecks = withDimensions({
  functionality:
    "Booking and cancellation flows, including conflicting attempts to reserve the same slot.",
  effort: "Time, correction attempts and technical help needed.",
  oversight:
    "Whether users can see what will change, test before publishing, approve consequential changes and restore an earlier working version.",
  maintainability:
    "Introducing a new requirement and checking that existing functionality still works.",
  portability:
    "Exporting the project and data, identifying required services, and assessing what moving elsewhere involves.",
  cost: "Tool charges and retries, with development and review time recorded separately.",
});

const projectTypes = [
  { href: "/services#choose", label: "Choose an AI approach" },
  { href: "/services#develop", label: "Develop and test an AI idea" },
  { href: "/services#improve", label: "Improve an existing AI experience" },
];

export default function Home() {
  return (
    <div id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader current="home" />
      <main id="main">
        <Hero />
        <ValueCompass />
        <Testing />
        <Founder />
        <ServicesInvitation />
      </main>
      <SiteFooter />
    </div>
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
          className="max-w-[17ch] font-serif text-[clamp(36px,4.6vw,60px)] leading-[1.06] font-normal tracking-[-0.02em] text-heading text-pretty"
        >
          Choose AI for what you want to do &mdash; and what matters to you.
        </h1>
        <p className={`${lead} max-w-[52ch]`}>
          Hopperlace helps you choose AI tools and systems that fit your tasks,
          preferences and values, with evidence you can understand and inspect.
        </p>
        <p className={`${lead} max-w-[52ch]`}>
          ValueCompass, which you can use today, adds research on the companies
          behind those tools: their ownership, dependencies and policies.
          We&rsquo;re also developing independent, hands-on comparisons of the
          tools themselves.
        </p>
      </div>
      <div className="flex min-w-0 flex-col gap-3 rounded-card bg-sage p-[clamp(20px,2.6vw,32px)]">
        <p className={`${smallLabel} mb-1`}>Two parts of one decision</p>
        <PartCard
          name="ValueCompass"
          status={<LiveStatus />}
          heading="Who is behind it, and does that fit your values?"
          body="Compare AI options on ownership, control and documented commitments, against the priorities you choose."
          action={
            <a
              href={VALUECOMPASS_URL}
              className={`${primaryButton} mt-1 inline-flex min-h-11 self-start px-5 text-[14px]`}
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
              className="mt-1 inline-flex min-h-11 items-center self-start rounded-full border border-primary px-5 text-[14px] font-medium text-primary no-underline hover:bg-selected hover:text-heading"
            >
              Explore our testing approach ↓
            </a>
          }
        />
        <p className="mt-1 text-[14px] leading-[1.55] text-pretty">
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
      <div className={`${smallLabelType} flex flex-wrap justify-between gap-3`}>
        <span className="text-heading">{name}</span>
        {status}
      </div>
      <h2 className={cardTitle}>{heading}</h2>
      <p className={cardText}>{body}</p>
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

/* ─── 02 / Tool testing ─── */

function Testing() {
  return (
    <section id="testing" aria-labelledby="testing-title" className="bg-sage">
      <div
        className={`${frame} flex flex-col gap-[clamp(40px,5vw,64px)] py-[var(--section-y)]`}
      >
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-end gap-x-[clamp(40px,6vw,96px)] gap-y-5">
          <div className="flex min-w-0 flex-col gap-[18px]">
            <p
              className={`${label} flex flex-wrap items-center gap-x-3.5 gap-y-2`}
            >
              <span>02 / Tool testing</span>
              <span className="rounded-full border border-dev px-[11px] py-[3px] text-dev">
                In development
              </span>
            </p>
            <h2 id="testing-title" className={sectionHeading}>
              What makes an AI tool a good fit?
            </h2>
          </div>
          <p className={`${lead} max-w-[54ch]`}>
            Our comparisons will examine how well an option works for your task,
            what it asks of you, and the trade-offs involved in choosing it.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <ol
            aria-label="Six questions we ask of every tool"
            className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-3"
          >
            {questions.map((q) => (
              <li
                key={q.id}
                className="grid grid-cols-[36px_minmax(0,1fr)] content-start gap-x-3.5 gap-y-1 rounded-card border-t-2 border-primary bg-panel px-6 pt-[22px] pb-6"
              >
                <span className={`${marker} leading-[1.7]`}>{q.number}</span>
                <h3 className={`${itemTitle} text-[clamp(18px,1.6vw,20px)]`}>
                  {q.name}
                </h3>
                <p className={`${cardText} col-start-2`}>{q.body}</p>
              </li>
            ))}
          </ol>
          <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-card border border-rule-strong px-6 py-[18px] text-[15px] leading-[1.6]">
            <span className="text-pretty">
              Alongside these practical questions, ValueCompass helps you
              examine the ownership, relationships and documented practices
              behind your choices.
            </span>
            <a
              href="#valuecompass"
              className={`${proseLink} font-medium whitespace-nowrap`}
            >
              ValueCompass &middot; available now ↑
            </a>
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] items-start gap-x-[clamp(40px,6vw,96px)] gap-y-10">
          <div className="flex min-w-0 flex-col gap-3.5">
            <h3 className={smallLabel}>How we&rsquo;ll test</h3>
            <dl className="border-t border-rule-strong">
              {howWeTest.map((item) => (
                <div
                  key={item.heading}
                  className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-x-5 gap-y-0.5 border-b border-rule py-3 text-[15px] leading-[1.5]"
                >
                  <dt className="font-semibold text-heading">{item.heading}</dt>
                  <dd className="text-pretty">{item.body}</dd>
                </div>
              ))}
            </dl>
            <p className="text-[14px] leading-[1.6] text-muted text-pretty">
              The specific tests depend on the task and the category of tool.
              The six dimensions are common questions, not an identical
              checklist or a universal score applied to every product.
            </p>
          </div>
          <div className="flex min-w-0 flex-col gap-3.5">
            <h3 className={smallLabel}>What you&rsquo;ll get</h3>
            <ul className="border-t border-rule-strong">
              {outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="grid grid-cols-[20px_minmax(0,1fr)] gap-3 border-b border-rule py-3 text-[15px] leading-[1.5]"
                >
                  <span
                    aria-hidden="true"
                    className="font-mono text-[13px] text-muted"
                  >
                    →
                  </span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-rule-strong pt-[clamp(32px,4vw,48px)]">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] items-end gap-x-[clamp(40px,6vw,96px)] gap-y-3">
            <div className="flex flex-col gap-2.5">
              <p className={`${labelType} text-dev`}>First planned category</p>
              <h3 className="font-serif text-[clamp(24px,2.2vw,30px)] leading-[1.2] font-normal text-heading">
                AI app builders
              </h3>
            </div>
            <p className="max-w-[54ch] text-[16px] leading-[1.65] text-pretty">
              Our first comparisons will apply the framework to tools that build
              apps from natural-language instructions. The example below shows
              how each dimension becomes a concrete check.
            </p>
          </div>
          <Scenario />
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
          <span className={`${smallLabelType} text-dev`}>
            Example test scenario &middot; planned
          </span>
          <span className={cardTitle}>
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
      <div className="flex flex-col gap-[22px] px-6 pb-6">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] gap-x-12 gap-y-4 border-t border-rule pt-[18px]">
          <div>
            <p className={`${smallLabel} mb-1.5`}>Decision</p>
            <p className="font-serif text-[19px] leading-[1.4] text-heading text-pretty">
              Which AI app builder suits a small-business owner with limited
              technical experience?
            </p>
          </div>
          <div>
            <p className={`${smallLabel} mb-1.5`}>Intended outcome</p>
            <p className={cardText}>
              A comparison of which tools suit this user, where specialist help
              is needed, and the trade-offs involved.
            </p>
          </div>
        </div>
        <div>
          <p
            className={`${smallLabel} mb-1 flex flex-wrap justify-between gap-x-4 gap-y-1`}
          >
            <span>Proposed checks</span>
            <span className="text-dev">
              Not findings &middot; no results yet
            </span>
          </p>
          <ol className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] gap-x-12">
            {scenarioChecks.map((check) => (
              <li
                key={check.id}
                className="grid grid-cols-[36px_minmax(0,1fr)] content-start gap-x-3.5 gap-y-0.5 border-t border-rule py-[13px]"
              >
                <span className={`${marker} leading-[1.55]`}>
                  {check.number}
                </span>
                <strong className="text-[15px] leading-[1.45] font-semibold text-heading">
                  {check.name}
                </strong>
                <span className={`${cardText} col-start-2`}>{check.body}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </details>
  );
}

/* ─── 01 / ValueCompass ─── */

function ValueCompass() {
  return (
    <section
      id="valuecompass"
      aria-labelledby="valuecompass-title"
      className="border-t border-rule"
    >
      <div className={`${frame} py-[var(--section-y)]`}>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <p
            className={`${label} flex flex-wrap items-center gap-x-3.5 gap-y-2`}
          >
            <span>01 / ValueCompass</span>
            <span className="rounded-full bg-live px-[11px] py-[3px] text-on-primary">
              Available now
            </span>
          </p>
          <p className="text-[13px] text-muted">
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
              ValueCompass helps you examine the companies behind AI products
              and compare options against your values. Explore ownership,
              control, dependencies and documented policies, with sources and
              clear gaps in the research.
            </p>
            <a
              href={VALUECOMPASS_URL}
              className={`${primaryButton} ${largeButton} mt-2 self-start`}
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
              <span className="absolute right-3 bottom-3 inline-flex min-h-8 items-center rounded-full bg-heading px-3 text-[12px] font-medium text-on-primary">
                View example ↗
              </span>
            </a>
            <figcaption className="flex flex-col gap-1.5">
              <p className="text-[13px] leading-[1.5] text-pretty">
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
            </figcaption>
          </figure>
        </div>
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
          <h2 id="founder-title" className={sectionHeading}>
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
            className="self-start py-1.5 text-[15px] font-medium text-primary underline decoration-1 underline-offset-[3px] hover:text-heading"
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
            <a href="/services" className={`${primaryButton} ${largeButton}`}>
              Services →
            </a>
          </div>
        </div>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-3">
          {projectTypes.map((type) => (
            <li key={type.href}>
              <a
                href={type.href}
                className={`${cardTitle} box-border flex min-h-[72px] items-center justify-between gap-4 rounded-card bg-panel px-[22px] py-4 no-underline hover:bg-selected`}
              >
                <span>{type.label}</span>
                <span
                  aria-hidden="true"
                  className="font-mono text-[14px] text-primary"
                >
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

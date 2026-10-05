import type { Metadata } from "next";
import Image from "next/image";
import { ProjectTabs, type ProjectTab } from "@/components/ProjectTabs";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  BUILDWITHWHY_URL,
  EMAIL,
  EVIDENCE_SYNTHESIS_URL,
  MAIL_HREF,
  VALUECOMPASS_URL,
} from "@/lib/links";
import {
  cardTitle,
  frame,
  label,
  largeButton,
  lead,
  primaryButton,
  proseLink,
  sectionHeading,
} from "@/lib/ui";

const title = "Services — Hopperlace";

const description =
  "Hopperlace helps teams choose an AI approach, turn ideas into working prototypes, and improve products and workflows that aren’t delivering what users need.";

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

/* ─── Local primitives ─── */

/** Mono label used as a heading inside panels and cards. */
const listHeading =
  "font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-heading";
const marker =
  "font-mono text-[13px] font-medium tracking-[0.04em] text-primary";

/* ─── Content ─── */

/* The three project types. `id` doubles as the URL hash the homepage links
   to (/services#choose etc.). Entries whose copy has entities hold JSX. */
const projects = [
  {
    id: "choose",
    kicker: "A provider or tool decision",
    marker: "A",
    heading: "Choose an AI approach",
    summary:
      "Decide which provider, tool or system design to use, based on evidence tested on your cases.",
    quote: (
      <>
        &ldquo;There are several providers, tools and ways to build this. We
        need to know which will work for us, what it will cost, and what
        we&rsquo;d be committing to.&rdquo;
      </>
    ),
    receive:
      "A comparison of the shortlisted options on your own cases, a recommended approach and system design, and integration prototypes where agreed.",
    steps: [
      <>
        Define the task, constraints and what a useful result looks like for
        your users.
      </>,
      <>
        Shortlist providers, models and tools, and weigh building, buying or
        combining them.
      </>,
      <>
        Outline candidate system designs: where information comes from, where
        people review, and what depends on what.
      </>,
      <>
        Test the shortlisted options in practice, on cases that reflect real
        use, more than once.
      </>,
      <>
        Build integration prototypes where a comparison on paper can&rsquo;t
        answer the question.
      </>,
      <>
        Recommend an approach, with the trade-offs that could change the
        recommendation.
      </>,
    ],
  },
  {
    id: "develop",
    kicker: "A new idea",
    marker: "B",
    heading: "Develop and test an AI idea",
    summary:
      "Work out what it should do, build a working version, and see whether it delivers.",
    quote: (
      <>
        &ldquo;We see an opportunity for AI in our product or workflow, but need
        to work out what it should do and whether it can deliver.&rdquo;
      </>
    ),
    receive:
      "A working prototype, findings from testing, and a practical recommendation for what to develop next.",
    steps: [
      <>Understand the user&rsquo;s task and how it is done today.</>,
      <>Define what a useful result would look like.</>,
      <>
        Explore suitable tools, models and system designs, including whether to
        build or buy.
      </>,
      <>Build a focused, working prototype.</>,
      <>Test it on cases that reflect real use.</>,
      <>
        Explain what works, what remains uncertain, and the next development
        step.
      </>,
    ],
  },
  {
    id: "improve",
    kicker: "An existing feature",
    marker: "C",
    heading: "Improve an existing AI experience",
    summary:
      "Find what is holding it back for real users, then test and make the changes.",
    quote: (
      <>
        &ldquo;The demo looks promising, and the dashboard looks fine, but real
        users still struggle, correct the output, or redo the work.&rdquo;
      </>
    ),
    receive:
      "A diagnosis supported by real examples, a check on whether your metrics reflect useful outcomes, tested or implemented changes where agreed, and evidence of their effect.",
    steps: [
      <>Review real examples and where users run into trouble.</>,
      <>
        Check whether current metrics represent useful outcomes, including
        failures they don&rsquo;t show and work quietly passed back to users.
      </>,
      <>Agree what success should mean for the people using it.</>,
      <>
        Trace the problem across model behavior, the information the system has,
        the workflow and the interface.
      </>,
      <>Prototype or implement selected improvements.</>,
      <>Compare results before and after on the same set of cases.</>,
      <>Hand over test cases your team can rerun, and clear next steps.</>,
    ],
  },
];

/* "Choose an AI approach" only: what each option is compared on, and the
   four kinds of evidence a recommendation keeps apart. */
const comparedOn = [
  {
    heading: "Functionality",
    body: "Whether it does the task, on your cases.",
  },
  {
    heading: "Cost",
    body: "Usage and licensing, plus retries and review time.",
  },
  { heading: "Effort", body: "Setup, integration and upkeep for your team." },
  {
    heading: "Failures",
    body: "How it goes wrong, how often, and how visibly.",
  },
  {
    heading: "Dependencies",
    body: "Lock-in, data handling, and what moving away would take.",
  },
];

const evidenceKinds = [
  {
    heading: "Published terms and documentation",
    body: "Pricing, limits and policies as the provider publishes them.",
  },
  {
    heading: "Provider claims",
    body: "What providers say about capability and accuracy.",
  },
  {
    heading: "Our test results",
    body: "What we observed running each option on your cases.",
  },
  {
    heading: "Our conclusions",
    body: "What we infer from the evidence, marked as judgment.",
  },
];

/* Past roles, before Hopperlace. The section says so on the page; keep it
   that way — none of this may read as Hopperlace client work. */
const pastWork = [
  {
    company: "Enjoy Technology",
    heading: "Last Mile Smart Routing",
    tagline:
      "Built the technical proof of concept, then turned it into a product",
    did: "Personally built a Python proof-of-concept algorithm for adaptive delivery coverage, then led the work into product development.",
    ledTo: "The feature increased visits per vehicle by 8–13%.",
  },
  {
    company: "Beamery",
    heading: "Dynamic Job Architecture",
    tagline: "Spotted a new product opportunity and secured pilot customers",
    did: "As hiring slowed, identified an opportunity to adapt Beamery’s existing AI capabilities into Dynamic Job Architecture. She persuaded leadership to explore the area, secured support for a team and found willing pilot customers.",
    ledTo:
      "The work extended Beamery’s capabilities toward defining roles and skills for internal mobility and workforce planning.",
  },
  {
    company: "Cleo",
    heading: "Improving the data behind an AI financial assistant",
    tagline: "Evaluated and improved an AI system already in use",
    did: "Led the evaluation strategy for transaction enrichment, working with modeling and data-science teams to prioritize what to measure and improve. As the PM leading bank connections and transaction data, she also owned data-purchasing decisions, the Plaid relationship and evaluation of alternative providers.",
    ledTo: "Transaction-enrichment accuracy increased from 56% to 89%.",
  },
];

const exampleFlow = [
  {
    heading: "Understand the task",
    body: "Which documents customers start with, what the plan needs to help them decide, and what a good plan looks like to them.",
  },
  {
    heading: "Prototype the experience",
    body: "A working version that reads a realistic set of documents and drafts a plan customers can review and edit.",
  },
  {
    heading: "Test the plans",
    body: "Run it on representative document sets and check each plan: is it accurate, complete, and something a customer could act on?",
  },
  {
    heading: "Find the review points",
    body: "Where plans tend to need correcting, and where a person should check before anything is acted on.",
  },
  {
    heading: "Recommend the next step",
    body: "What to build next, what to change, and which questions to answer before offering it more widely.",
  },
];

const certifications = [
  { code: "CCA-P", name: "Claude Certified Architect — Professional" },
  { code: "CCA-F", name: "Claude Certified Architect — Foundations" },
];

const principles = [
  {
    marker: "i.",
    heading: "Agreed before we start",
    body: "Scope, inputs, deliverables, timing and fee are agreed before work begins, around the question the project needs to answer.",
  },
  {
    marker: "ii.",
    heading: "Hands-on work",
    body: "Research, prototyping, testing and selected implementation, in whatever mix the question calls for.",
  },
  {
    marker: "iii.",
    heading: "A clear handoff",
    body: "Prototypes, tests and findings are handed over so your team can carry on. Projects can stand alone or be followed by a small advisory engagement.",
  },
];

const RESEARCH_URL = "https://doi.org/10.17605/OSF.IO/A69YH";

export default function Services() {
  return (
    <>
      <SiteHeader current="services" />
      <main id="main">
        <Hero />
        <Projects />
        <Experience />
        <Example />
        <Founder />
        <HowProjectsWork />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

/* ─── Hero ─── */

function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className={`${frame} pt-[clamp(56px,9vw,120px)] pb-[clamp(56px,8vw,104px)]`}
    >
      <p className={`${label} mb-6`}>Services</p>
      <h1
        id="hero-title"
        className="max-w-[20ch] font-serif text-[clamp(36px,4.6vw,64px)] leading-[1.1] font-normal tracking-[-0.02em] text-heading text-balance"
      >
        Develop, test and improve AI products and features.
      </h1>
      <div className="mt-[clamp(40px,5vw,64px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-start gap-x-[clamp(40px,7vw,112px)] gap-y-12">
        <div className="flex max-w-[60ch] flex-col gap-5">
          <p className={lead}>
            Hopperlace helps teams choose an AI approach, turn ideas into
            working prototypes, and improve products and workflows that
            aren&rsquo;t delivering what users need.
          </p>
          <p className="text-pretty">
            We combine technical research, product judgment and hands-on testing
            to help you decide what to use, what to build and what to change
            next.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href={MAIL_HREF} className={`${primaryButton} ${largeButton}`}>
              Discuss your project
            </a>
            <a href={MAIL_HREF} className={`${proseLink} py-2 text-[16px]`}>
              {EMAIL}
            </a>
          </div>
        </div>
        <aside
          aria-label="About Yuyu Shen"
          className="grid grid-cols-[88px_1fr] items-start gap-5 border-t border-rule-strong pt-7"
        >
          <Image
            src="/assets/yuyu-shen.jpg"
            alt=""
            width={480}
            height={480}
            sizes="88px"
            className="size-[88px] rounded-full bg-sage object-cover"
          />
          <div className="flex flex-col gap-2.5">
            <p className={label}>You&rsquo;ll work with</p>
            <p className={cardTitle}>Yuyu Shen, founder</p>
            <p className="text-[16px] leading-[1.6] text-pretty">
              A statistically trained data scientist turned product leader, with
              nearly a decade building and evaluating AI systems &mdash;
              previously at Meta, Walmart, Beamery and Cleo. Claude Certified
              Architect, Professional and Foundations.
            </p>
            <a
              href="#yuyu"
              className={`${proseLink} self-start py-1 text-[15px] font-medium`}
            >
              Full background ↓
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ─── 01 / Three kinds of project ─── */

function Projects() {
  const tabs: ProjectTab[] = projects.map((project) => ({
    id: project.id,
    kicker: project.kicker,
    marker: project.marker,
    heading: project.heading,
    summary: project.summary,
    panel: <ProjectPanel project={project} />,
  }));

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="bg-sage py-[var(--section-y)]"
    >
      <div className={frame}>
        <div className="mb-[clamp(32px,4vw,48px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-end gap-x-16 gap-y-5">
          <div>
            <p className={`${label} mb-4`}>01 / Three kinds of project</p>
            <h2 id="projects-title" className={sectionHeading}>
              Start from the question you need answered.
            </h2>
          </div>
          <p className="max-w-[52ch] text-pretty">
            Each project is hands-on. Prototyping and selected implementation
            are part of the work wherever they answer the question better than a
            document can.
          </p>
        </div>
        <ProjectTabs tabs={tabs} />
      </div>
    </section>
  );
}

function ProjectPanel({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="flex flex-col gap-[clamp(40px,5vw,56px)]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-x-[clamp(40px,6vw,88px)] gap-y-10">
        <div className="flex flex-col gap-7">
          <p className={label}>
            {project.marker} / {project.heading}
          </p>
          <blockquote className="font-serif text-[clamp(20px,1.8vw,24px)] leading-[1.4] font-normal text-heading italic text-pretty">
            {project.quote}
          </blockquote>
          <div className="rounded-card bg-selected px-[26px] py-6">
            <h3 className={`${listHeading} mb-2.5`}>You receive</h3>
            <p className="text-pretty">{project.receive}</p>
          </div>
        </div>
        <div>
          <h3 className={`${listHeading} mb-2`}>The work can include</h3>
          <ol className="border-b border-rule">
            {project.steps.map((step, i) => (
              <li
                key={i}
                className="grid grid-cols-[36px_1fr] gap-3 border-t border-rule py-3.5"
              >
                <span className={marker}>{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      {project.id === "choose" && <ChooseEvidence />}
    </div>
  );
}

function ChooseEvidence() {
  return (
    <>
      <div>
        <h3 className={`${listHeading} mb-5`}>Each option is compared on</h3>
        <dl className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,190px),1fr))] border-t border-rule-strong">
          {comparedOn.map((item) => (
            <div
              key={item.heading}
              className="border-b border-rule py-[18px] pr-5"
            >
              <dt className="mb-1.5 text-[18px] leading-[1.35] font-semibold text-heading">
                {item.heading}
              </dt>
              <dd className="text-[16px] leading-[1.55]">{item.body}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="flex flex-col gap-5 rounded-card bg-selected p-[clamp(22px,3vw,32px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] items-start gap-x-12 gap-y-3">
          <h3 className={`${listHeading} pt-1`}>How we treat evidence</h3>
          <p className="max-w-[62ch] text-pretty">
            We distinguish published terms and documentation, provider claims,
            our own test results, and the conclusions we draw from them.
            Recommendations make clear what the evidence supports, what remains
            uncertain, and which trade-offs could change the decision.
          </p>
        </div>
        <ol className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-x-6">
          {evidenceKinds.map((kind, i) => (
            <li
              key={kind.heading}
              className="flex flex-col gap-1 border-t border-rule-strong py-3.5"
            >
              <span className="font-mono text-[12px] font-medium tracking-[0.04em] text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[16px] leading-[1.4] font-semibold text-heading">
                {kind.heading}
              </span>
              <span className="text-[15px] leading-[1.5]">{kind.body}</span>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

/* ─── 02 / Experience from previous roles ─── */

function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title">
      <div className={`${frame} py-[var(--section-y)]`}>
        <div className="mb-[clamp(36px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-end gap-x-16 gap-y-5">
          <div>
            <p className={`${label} mb-4`}>
              02 / Experience from previous roles
            </p>
            <h2 id="experience-title" className={sectionHeading}>
              Work Yuyu led before Hopperlace.
            </h2>
          </div>
          <p className="max-w-[48ch] text-pretty">
            Selected examples from Yuyu&rsquo;s previous roles, not Hopperlace
            client projects.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-3">
          {pastWork.map((work) => (
            <article
              key={work.company}
              className="flex flex-col gap-5 rounded-card bg-sage px-[30px] py-8"
            >
              <div>
                <p className={`${label} mb-2.5`}>{work.company}</p>
                <h3 className={cardTitle}>{work.heading}</h3>
                <p className="mt-2.5 text-[15px] leading-[1.5] font-medium text-primary text-pretty">
                  {work.tagline}
                </p>
              </div>
              <div>
                <h4 className={`${listHeading} mb-1.5`}>What Yuyu did</h4>
                <p className="text-[16px] leading-[1.6] text-pretty">
                  {work.did}
                </p>
              </div>
              <div className="mt-auto border-t border-rule pt-4">
                <h4 className={`${listHeading} mb-1.5`}>What it led to</h4>
                <p className="text-[16px] leading-[1.6] text-pretty">
                  {work.ledTo}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 03 / What a project can look like ─── */

function Example() {
  return (
    <section aria-labelledby="example-title" className="border-t border-rule">
      <div className={`${frame} py-[var(--section-y)]`}>
        <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-3">
          <p className={label}>03 / What a project can look like</p>
          <p
            className={`${listHeading} rounded-full border border-rule-strong px-3 py-1`}
          >
            Illustrative example &middot; not a client project
          </p>
        </div>
        <h2
          id="example-title"
          className={`${sectionHeading} mb-[clamp(36px,5vw,56px)] max-w-[30ch]`}
        >
          A team wants to help customers turn a collection of documents into an
          actionable plan.
        </h2>
        <ol className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-x-7">
          {exampleFlow.map((step, i) => (
            <li
              key={step.heading}
              className="flex flex-col gap-2.5 border-t-2 border-primary pt-[22px] pb-7"
            >
              <span className={marker}>{i + 1}</span>
              <h3 className="text-[18px] font-semibold text-heading">
                {step.heading}
              </h3>
              <p className="text-[16px] leading-[1.6] text-pretty">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─── 04 / Who you'll be working with ─── */

function Founder() {
  return (
    <section id="yuyu" aria-labelledby="yuyu-title" className="bg-sage">
      <div className={`${frame} py-[var(--section-y)]`}>
        <p className={`${label} mb-[clamp(28px,4vw,48px)]`}>
          04 / Who you&rsquo;ll be working with
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-start gap-x-[clamp(40px,6vw,88px)] gap-y-10">
          <div className="flex max-w-[420px] flex-col gap-6">
            <Image
              src="/assets/yuyu-shen.jpg"
              alt="Portrait of Yuyu Shen"
              width={480}
              height={480}
              sizes="(min-width: 761px) 420px, 100vw"
              className="block aspect-[4/5] w-full rounded-card bg-selected object-cover"
            />
            <div className="rounded-card bg-beige px-[26px] pt-[26px] pb-7">
              <h3 className={`${listHeading} mb-4`}>
                Certifications &middot; Anthropic
              </h3>
              <ul>
                {certifications.map((cert, i) => (
                  <li
                    key={cert.code}
                    className={`flex flex-col gap-0.5 border-t border-rule-strong pt-3.5 ${
                      i < certifications.length - 1 ? "pb-3.5" : ""
                    }`}
                  >
                    <span className="text-[19px] leading-[1.3] font-semibold text-heading">
                      {cert.name}
                    </span>
                    <span className="text-[14px] font-semibold tracking-[0.08em] text-muted">
                      {cert.code}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex max-w-[64ch] flex-col gap-[22px]">
            <div>
              <h2
                id="yuyu-title"
                className="font-serif text-[clamp(30px,3vw,40px)] leading-[1.1] font-normal tracking-[-0.02em] text-heading"
              >
                Yuyu Shen
              </h2>
              <p className={`${label} mt-3.5`}>Founder, Hopperlace</p>
            </div>
            <p className="text-pretty">
              Yuyu is a statistically trained data scientist turned product
              leader, with nearly a decade building and evaluating AI systems,
              including taking AI products from zero to one.
            </p>
            <p className="text-pretty">
              Her work has always sat between the technical and the commercial.
              She builds models and prototypes herself, then turns what they
              show into product decisions, keeping both tied to what customers
              actually need. That combination is what she brings to a project:
              judgment about what is worth building, the ability to build and
              measure it, and attention to how people will really use it.
            </p>
            {/* Kept from the live site at the founder's request, in place of
                the handoff's rewrite. */}
            <p className="text-pretty">
              She now builds independently through Hopperlace. That includes{" "}
              <a href={VALUECOMPASS_URL} className={proseLink}>
                ValueCompass
              </a>
              , for comparing AI options against your values, and{" "}
              <a href={EVIDENCE_SYNTHESIS_URL} className={proseLink}>
                Evidence Synthesis AI
              </a>
              , which helps research teams use AI to screen studies for
              systematic reviews. Alongside building, she researches how AI
              systems should be evaluated and writes about technology, agency
              and better decisions.
            </p>
            <div className="mt-3 grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-x-8">
              <FounderFact heading="Research">
                <p className="mb-1.5 text-[18px] leading-[1.35] font-semibold">
                  <a
                    href={RESEARCH_URL}
                    className="text-heading underline decoration-1 underline-offset-[3px]"
                  >
                    Deference-aware evaluation ↗
                  </a>
                </p>
                <p className="text-[16px] leading-[1.55]">
                  Paper accepted at the ICML 2026 Technical AI Governance
                  workshop.
                </p>
              </FounderFact>
              <FounderFact heading="Writing">
                <p className="mb-1.5 text-[18px] leading-[1.35] font-semibold">
                  <a
                    href={BUILDWITHWHY_URL}
                    className="text-heading underline decoration-1 underline-offset-[3px]"
                  >
                    Build With Why ↗
                  </a>
                </p>
                <p className="text-[16px] leading-[1.55]">
                  Essays on technology, agency and better decisions.
                </p>
              </FounderFact>
              <FounderFact heading="Products">
                <ul className="flex flex-col gap-1.5 text-[16px]">
                  <li>
                    <a href={VALUECOMPASS_URL} className={proseLink}>
                      ValueCompass ↗
                    </a>
                  </li>
                  <li>
                    <a href={EVIDENCE_SYNTHESIS_URL} className={proseLink}>
                      Evidence Synthesis AI ↗
                    </a>
                  </li>
                </ul>
              </FounderFact>
              <FounderFact heading="Previously">
                <p className="text-[16px] leading-[1.55]">
                  Meta &middot; Walmart &middot; Beamery &middot; Cleo
                </p>
              </FounderFact>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FounderFact({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-rule-strong py-5">
      <h3 className={`${listHeading} mb-2`}>{heading}</h3>
      {children}
    </div>
  );
}

/* ─── 05 / How projects work (+ Why Hopperlace) ─── */

function HowProjectsWork() {
  return (
    <section
      aria-labelledby="engage-title"
      className={`${frame} py-[var(--section-y)]`}
    >
      <p className={`${label} mb-4`}>05 / How projects work</p>
      <h2
        id="engage-title"
        className={`${sectionHeading} mb-[clamp(36px,5vw,56px)] max-w-[28ch]`}
      >
        Start with one provider decision, prototype or workflow.
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-x-8">
        {principles.map((item) => (
          <div
            key={item.marker}
            className="flex flex-col gap-2.5 border-t border-rule-strong pt-6 pb-8"
          >
            <span className={marker}>{item.marker}</span>
            <h3 className={cardTitle}>{item.heading}</h3>
            <p className="text-pretty">{item.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-[clamp(28px,4vw,40px)] border-t border-rule pt-6">
        <h3 className={`${listHeading} mb-2.5`}>What the work draws on</h3>
        <p className="max-w-[90ch] text-[16px] text-pretty">
          Customer and workflow discovery &middot; AI product and interaction
          design &middot; provider, tool, model and build-versus-buy decisions
          &middot; system architecture, including where people stay involved
          &middot; functional prototyping and selected implementation &middot;
          designing tests and interpreting the results
        </p>
      </div>
      <div className="mt-[clamp(40px,5vw,64px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-x-16 gap-y-4 rounded-card bg-sage px-[clamp(24px,4vw,40px)] py-8">
        <div>
          <p className={`${label} mb-2.5`}>Why Hopperlace</p>
          <p className="font-serif text-[clamp(22px,2vw,26px)] leading-[1.3] font-normal text-heading">
            The same questions behind our product work.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <p className="text-[16px] leading-[1.6] text-pretty">
            Client projects and Hopperlace&rsquo;s public tool testing, now in
            development, start from the same questions: what an AI system
            actually accomplishes, where it struggles, and what makes it right
            for a particular task and person. Client work stays confidential.
          </p>
          <a
            href="/#testing"
            className={`${proseLink} self-start text-[15px] font-medium`}
          >
            How we&rsquo;re approaching tool testing →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */

function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-primary text-on-primary"
    >
      <div
        className={`${frame} grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-end gap-x-16 gap-y-8 py-[clamp(64px,9vw,112px)]`}
      >
        <h2
          id="contact-title"
          className="font-serif text-[clamp(30px,3.2vw,42px)] leading-[1.15] font-normal tracking-[-0.02em] text-balance"
        >
          Tell us what you&rsquo;re working on.
        </h2>
        <div className="flex flex-col gap-6">
          <p className="text-pretty">
            A few sentences is plenty: what you want to choose, build or
            improve, what is uncertain or not working yet, and any timing that
            matters.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={MAIL_HREF}
              className={`${largeButton} items-center rounded-full bg-paper font-medium text-heading no-underline hover:bg-selected`}
            >
              Discuss your project
            </a>
            <a
              href={MAIL_HREF}
              className="py-2 text-[16px] underline decoration-1 underline-offset-[3px]"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

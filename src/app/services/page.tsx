import type { Metadata } from "next";
import Image from "next/image";
import { ProjectTabs, type ProjectTab } from "@/components/ProjectTabs";
import { withDimensions } from "@/lib/dimensions";
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

const title = "Services — Hopperlace";

const description =
  "Hopperlace helps teams clarify what they need to achieve, translate that into a product or system, and evaluate whether it delivers the intended results.";

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
const listHeading = `${smallLabelType} text-heading`;

/* ─── Content ─── */

/* The four stages every project follows, whichever type it is. */
const stages = [
  {
    heading: "Define success",
    body: "Agree the intended outcomes, meaningful measures and baseline.",
  },
  {
    heading: "Design the system",
    body: "Shape the product, workflow and roles for AI and people.",
  },
  {
    heading: "Build and test",
    body: "Prototype the critical parts and test realistic cases.",
  },
  {
    heading: "Evaluate and decide",
    body: "Assess results against the agreed measures and recommend next steps.",
  },
];

/* The three project types. `id` doubles as the URL hash the homepage links
   to (/services#define etc.); `aliases` keeps older links working. Entries
   whose copy has entities or markup hold JSX. */
const projects = [
  {
    id: "define",
    aliases: ["develop"],
    kicker: "A goal or problem",
    marker: "A",
    heading: "Define and test an AI opportunity",
    summary:
      "Arrive with a business goal or user problem. Work out where AI could help, what to build, and whether it’s worthwhile.",
    quote: (
      <>
        &ldquo;We have a problem to solve or an opportunity to pursue. Where
        could AI help, what should we build, and how will we know whether it is
        worthwhile?&rdquo;
      </>
    ),
    receive: [
      <>
        <strong className="font-semibold text-heading">
          Outcome and product brief
        </strong>
        : what success means, for whom, and what the product needs to do.
      </>,
      <>
        <strong className="font-semibold text-heading">
          Workflow and system design
        </strong>
        : how it should work, what AI does, and where people stay involved.
      </>,
      <>
        <strong className="font-semibold text-heading">Evaluation plan</strong>:
        a baseline, success measures, and how they&rsquo;ll be checked.
      </>,
      <>
        <strong className="font-semibold text-heading">
          Prototype and findings
        </strong>
        : a working version tested on realistic cases, where appropriate.
      </>,
    ],
    steps: [
      <>
        Clarify the business objective, users&rsquo; needs and how the work is
        done today.
      </>,
      <>
        Define what success means, choose meaningful measures, establish a
        baseline and agree important constraints.
      </>,
      <>
        Design the experience, workflow and system, including where AI is
        appropriate and where people remain involved.
      </>,
      <>Build and test a focused prototype against those criteria, where useful.</>,
      <>Recommend what to develop, change or investigate next.</>,
    ],
  },
  {
    id: "choose",
    kicker: "A provider or tool decision",
    marker: "B",
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
    receive: [
      <>A comparison of the shortlisted options on your own cases.</>,
      <>A recommended approach and system design.</>,
      <>Integration prototypes, where agreed.</>,
    ],
    steps: [
      <>
        Define the task, constraints and what a useful result looks like.
      </>,
      <>
        Shortlist providers, tools and system designs, including whether to
        build, buy or combine.
      </>,
      <>
        Test the shortlist on your cases, more than once, with integration
        prototypes where a paper comparison can&rsquo;t answer the question.
      </>,
      <>
        Compare options across the{" "}
        <a href="#evaluation" className={proseLink}>
          six evaluation dimensions
        </a>
        .
      </>,
      <>Recommend an approach, with the trade-offs that could change it.</>,
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
    receive: [
      <>A diagnosis supported by real examples.</>,
      <>A check on whether your metrics reflect useful outcomes.</>,
      <>Tested or implemented changes, where agreed.</>,
      <>Evidence of their effect.</>,
    ],
    steps: [
      <>
        Review real examples, and agree what success should mean for the people
        using it.
      </>,
      <>
        Check whether current metrics reflect useful outcomes, including hidden
        failures and work passed back to users.
      </>,
      <>
        Trace the problem across model behavior, the information available, the
        workflow and the interface.
      </>,
      <>
        Prototype or implement selected improvements, and compare before and
        after on the same cases.
      </>,
      <>Hand over test cases your team can rerun, and clear next steps.</>,
    ],
  },
];

/* "Choose an AI approach" only: the four kinds of evidence a recommendation
   keeps apart. */
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
    company: "Beamery",
    heading: "Defining a new product opportunity",
    facts: [
      {
        term: "Context",
        body: "Hiring had slowed, while Beamery’s offering had focused mainly on recruitment.",
      },
      {
        term: "Yuyu’s contribution",
        body: "Recognized that existing AI capabilities could also help companies define roles and skills, opening opportunities in internal mobility and workforce planning. Persuaded leadership to explore the direction, secured support for a team and found willing pilot customers.",
      },
    ],
    outcome: {
      term: "Progress",
      figure: "A new product direction",
      caption: "Dynamic Job Architecture, with willing pilot customers.",
    },
  },
  {
    company: "Enjoy Technology",
    heading: "Turning an objective into a working system",
    facts: [
      {
        term: "Objective",
        body: "Improve delivery productivity by adapting coverage to changing demand and available delivery capacity.",
      },
      {
        term: "Yuyu’s contribution",
        body: "Personally built a Python proof-of-concept algorithm for adaptive delivery coverage, then led it into product development as Last Mile Smart Routing.",
      },
    ],
    outcome: {
      term: "Result",
      figure: "+8–13%",
      caption: "visits per vehicle from Last Mile Smart Routing.",
    },
  },
  {
    company: "Cleo",
    heading: "Evaluation that guides improvement",
    facts: [
      {
        term: "Objective",
        body: "Improve the quality of transaction data used by Cleo’s AI financial assistant.",
      },
      {
        term: "Yuyu’s contribution",
        body: "Led the evaluation strategy for transaction enrichment, working with modeling and data-science teams to prioritize what to measure and improve. As PM for bank connections and transaction data, also owned data-purchasing decisions, the Plaid relationship and evaluation of alternative providers.",
      },
    ],
    outcome: {
      term: "Result",
      figure: "56% → 89%",
      caption: "transaction-enrichment accuracy.",
    },
  },
];

/* 04 / Evaluation: the two questions, what useful measurement involves, and
   the six dimensions assessed across the experience and system. */
const evaluationQuestions = [
  {
    heading: "Does it do the job reliably?",
    body: "Whether the system performs its intended tasks well and consistently, across realistic cases and repeated attempts.",
    evidence: "Evidence from repeated, representative tests",
    evidenceColor: "text-primary",
  },
  {
    heading: "Does that produce the outcome?",
    body: "Whether those tasks contribute to the outcomes that matter to users and the business.",
    evidence: "Evidence from real use",
    evidenceColor: "text-dev",
  },
];

const measurement = [
  {
    heading: "Choosing the right metrics",
    body: "Measures that reflect the intended outcome, agreed before testing.",
  },
  {
    heading: "Spotting misleading proxies",
    body: "Numbers that can improve while users are no better off.",
  },
  {
    heading: "Counting checking and correction",
    body: "The human time spent verifying, fixing or redoing the output.",
  },
  {
    heading: "Interpreting the results",
    body: "What the evidence supports, and what remains uncertain.",
  },
];

const assessed = withDimensions({
  functionality:
    "Whether it does the task on your cases, how consistently across repeated runs, and where it fails.",
  effort:
    "The setup, integration, checking and correction your team would take on.",
  oversight:
    "Whether your team can inspect outputs, approve consequential actions, intervene and recover from errors.",
  maintainability:
    "How readily it adapts as requirements change, without breaking what already works.",
  portability:
    "Lock-in, data handling, required services, and what switching would involve.",
  cost: "Usage and licensing, retries, and the staff time spent reviewing and correcting.",
});

/* 05 / The illustrative example: objective → product/system → evaluation,
   then a mock of the draft plan the product would produce. */
const exampleFlow: {
  heading: string;
  objective?: string;
  items?: string[];
}[] = [
  {
    heading: "Objective",
    objective:
      "Reduce planning effort while preserving important client requirements.",
  },
  {
    heading: "Product / system",
    items: [
      "Drafts a project scope and task plan from the documents.",
      "Links important details back to their sources.",
      "Flags missing information.",
      "A person reviews and approves the plan.",
    ],
  },
  {
    heading: "Evaluation",
    items: [
      "Missed requirements.",
      "Unsupported commitments.",
      "Whether people can use the plan.",
      "Total planning effort, including review and correction, compared with the existing process.",
    ],
  },
];

const draftPlan = [
  { item: "Homepage and three service pages", source: "Client brief, §2" },
  { item: "Two rounds of copy revisions", source: "Meeting notes, 3 Oct" },
  { item: "Launch before the spring campaign", source: "Meeting notes, 3 Oct" },
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
    body: "Discovery, system design, prototyping, evaluation and selected implementation, in whatever mix the question calls for.",
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
        <Method />
        <Projects />
        <Experience />
        <Evaluation />
        <Example />
        <Founder />
        <WorkingTogether />
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
        className="max-w-[20ch] font-serif text-[clamp(36px,4.6vw,60px)] leading-[1.06] font-normal tracking-[-0.02em] text-heading text-balance"
      >
        Turn business goals into useful AI products.
      </h1>
      <div className="mt-[clamp(40px,5vw,64px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-start gap-x-[clamp(40px,7vw,112px)] gap-y-12">
        <div className="flex max-w-[60ch] flex-col gap-5">
          <p className={lead}>
            Hopperlace helps teams clarify what they need to achieve, translate
            that into a product or system, and evaluate whether it delivers the
            intended results.
          </p>
          <p className="text-pretty">
            We combine product discovery, system design, hands-on prototyping
            and meaningful measurement to help you decide what to build, how it
            should work and what to improve.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href={MAIL_HREF} className={`${primaryButton} ${largeButton}`}>
              Discuss your project
            </a>
            <a href={MAIL_HREF} className={`${proseLink} py-2 text-[14px]`}>
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
            <p className={smallLabel}>You&rsquo;ll work with</p>
            <p className={cardTitle}>Yuyu Shen, founder</p>
            <p className={cardText}>
              Data science and product analytics at Meta, AI product leadership
              at Walmart and Beamery, and independent research on AI
              evaluation. That combination lets her connect business
              objectives, product decisions, technical design and measurement
              in a single project.
            </p>
            <ul className="flex flex-col gap-1.5 border-t border-rule pt-3">
              <li className="text-[14px] leading-[1.45] text-heading">
                <span className="font-semibold">
                  Claude Certified Architect
                </span>{" "}
                &middot; Professional &amp; Foundations
              </li>
              <li className="text-[14px] leading-[1.45] text-heading">
                Paper accepted at the ICML 2026 Technical AI Governance workshop
              </li>
            </ul>
            <a
              href="#yuyu"
              className={`${proseLink} self-start py-1 text-[14px] font-medium`}
            >
              Full background ↓
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ─── 01 / How we work ─── */

function Method() {
  return (
    <section id="method" aria-labelledby="method-title">
      <div className={`${frame} pb-[var(--section-y)]`}>
        <div className="flex flex-col gap-[clamp(28px,3.5vw,40px)] border-t border-rule-strong pt-[clamp(40px,5vw,64px)]">
          <div className="flex flex-col gap-3.5">
            <p className={label}>01 / How we work</p>
            <h2 id="method-title" className={sectionHeading}>
              One method, whichever project you choose.
            </h2>
          </div>
          {/* Four, two or one across, never three over one. */}
          <ol className="grid grid-cols-1 gap-x-8 gap-y-7 min-[600px]:grid-cols-2 min-[1024px]:grid-cols-4">
            {stages.map((stage, i) => (
              <li key={stage.heading} className="flex flex-col gap-2">
                <span className={marker}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={cardTitle}>{stage.heading}</h3>
                <p className={cardText}>{stage.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ─── 02 / Three kinds of project ─── */

function Projects() {
  const tabs: ProjectTab[] = projects.map((project) => ({
    id: project.id,
    aliases: project.aliases,
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
        <div className="mb-[clamp(28px,3.5vw,40px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-end gap-x-16 gap-y-3.5">
          <div className="flex flex-col gap-3.5">
            <p className={label}>02 / Three kinds of project</p>
            <h2 id="projects-title" className={sectionHeading}>
              Choose where to start.
            </h2>
          </div>
          <p className="max-w-[48ch] text-pretty">
            Pick the situation closest to yours to see what the project covers
            and what you receive.
          </p>
        </div>
        <ProjectTabs tabs={tabs} />
      </div>
    </section>
  );
}

function ProjectPanel({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="flex flex-col gap-[clamp(24px,3vw,36px)]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-start gap-x-[clamp(40px,6vw,88px)] gap-y-7">
        <blockquote className="max-w-[34ch] font-serif text-[clamp(18px,1.6vw,21px)] leading-[1.45] font-normal text-body italic text-pretty">
          {project.quote}
        </blockquote>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className={itemTitle}>You receive</h3>
            <span className="text-[14px] text-muted">
              Scope agreed for each project
            </span>
          </div>
          <ul className="flex flex-col gap-2.5">
            {project.receive.map((item, i) => (
              <li
                key={i}
                className="grid grid-cols-[18px_minmax(0,1fr)] gap-2.5 text-[15px] leading-[1.55]"
              >
                <span aria-hidden="true" className="font-semibold text-primary">
                  ✓
                </span>
                <span className="text-pretty">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Disclosure
        heading="The work, step by step"
        count={`${project.steps.length} steps`}
      >
        <ol className="flex max-w-[72ch] flex-col gap-3">
          {project.steps.map((step, i) => (
            <li
              key={i}
              className="grid grid-cols-[28px_minmax(0,1fr)] gap-2.5 text-[15px] leading-[1.55]"
            >
              <span className={`${marker} leading-[1.7]`}>{i + 1}</span>
              <span className="text-pretty">{step}</span>
            </li>
          ))}
        </ol>
      </Disclosure>
      {project.id === "choose" && (
        <Disclosure
          heading="How we treat evidence"
          count={`${evidenceKinds.length} kinds`}
        >
          <p className="mb-4 max-w-[72ch] text-[15px] leading-[1.6] text-pretty">
            We distinguish published terms and documentation, provider claims,
            our own test results, and the conclusions we draw from them.
            Recommendations make clear what the evidence supports, what remains
            uncertain, and which trade-offs could change the decision.
          </p>
          <dl className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-x-7 gap-y-3.5">
            {evidenceKinds.map((kind) => (
              <div key={kind.heading}>
                <dt className="text-[15px] leading-[1.4] font-semibold text-heading">
                  {kind.heading}
                </dt>
                <dd className="text-[14px] leading-[1.5]">{kind.body}</dd>
              </div>
            ))}
          </dl>
        </Disclosure>
      )}
    </div>
  );
}

/* Native <details>, so the disclosure works without client JavaScript. */
function Disclosure({
  heading,
  count,
  children,
}: {
  heading: string;
  count: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group border-t border-rule">
      <summary className="flex min-h-11 cursor-pointer list-none items-center gap-3.5 pt-4 pb-1 [&::-webkit-details-marker]:hidden">
        <span className="font-medium text-heading">{heading}</span>
        <span className="text-[14px] text-muted">{count}</span>
        <span
          aria-hidden="true"
          className="ml-auto grid size-[30px] flex-none place-items-center rounded-full border border-rule-strong text-[13px] text-heading group-open:rotate-180"
        >
          ↓
        </span>
      </summary>
      <div className="pt-3.5 pb-1.5">{children}</div>
    </details>
  );
}

/* ─── 03 / Experience from previous roles ─── */

function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title">
      <div className={`${frame} py-[var(--section-y)]`}>
        <div className="mb-[clamp(36px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-end gap-x-16 gap-y-5">
          <div>
            <p className={`${label} mb-4`}>
              03 / Experience from previous roles
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
        {/* Three across once the column is 760px wide, otherwise one. */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(clamp(calc((100%_-_24px)_/_3),(760px_-_100%)_*_999,100%),1fr))] gap-3">
          {pastWork.map((work) => (
            <article
              key={work.company}
              className="flex flex-col gap-5 rounded-card bg-sage p-[clamp(20px,2.4vw,32px)]"
            >
              <div>
                <p className={`${smallLabel} mb-2.5`}>{work.company}</p>
                <h3 className={`${cardTitle} text-balance`}>{work.heading}</h3>
              </div>
              <dl className="flex flex-1 flex-col gap-4">
                {work.facts.map((fact) => (
                  <div key={fact.term}>
                    <dt className={`${listHeading} mb-1.5`}>{fact.term}</dt>
                    <dd className={cardText}>{fact.body}</dd>
                  </div>
                ))}
                <div className="mt-auto border-t border-rule-strong pt-4">
                  <dt className={`${listHeading} mb-1.5`}>
                    {work.outcome.term}
                  </dt>
                  <dd className="flex flex-col gap-1">
                    <span className="font-serif text-[clamp(24px,2.2vw,28px)] leading-[1.15] font-normal text-heading">
                      {work.outcome.figure}
                    </span>
                    <span className="text-[14px] leading-[1.5] text-pretty">
                      {work.outcome.caption}
                    </span>
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 04 / Evaluation ─── */

function Evaluation() {
  return (
    <section
      id="evaluation"
      aria-labelledby="evaluation-title"
      className="border-t border-rule"
    >
      <div
        className={`${frame} flex flex-col gap-[clamp(36px,4.5vw,56px)] py-[var(--section-y)]`}
      >
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-end gap-x-16 gap-y-5">
          <div>
            <p className={`${label} mb-4`}>04 / Evaluation</p>
            <h2 id="evaluation-title" className={sectionHeading}>
              Measure whether it works, and whether it matters.
            </h2>
          </div>
          <p className="max-w-[52ch] text-pretty">
            Evaluation covers the whole experience and system, not only the
            model. It answers two different questions, and a higher task score
            alone doesn&rsquo;t establish business impact.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-3">
          {evaluationQuestions.map((question, i) => (
            <div
              key={question.heading}
              className="flex flex-col gap-3 rounded-card bg-sage p-[clamp(22px,2.6vw,30px)]"
            >
              <span className={marker}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={cardTitle}>{question.heading}</h3>
              <p className={cardText}>{question.body}</p>
              <p
                className={`${labelType} mt-auto border-t border-rule-strong pt-3.5 ${question.evidenceColor}`}
              >
                {question.evidence}
              </p>
            </div>
          ))}
        </div>
        <div>
          <h3 className={`${listHeading} mb-3`}>Useful measurement involves</h3>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,230px),1fr))] gap-x-7">
            {measurement.map((item) => (
              <li
                key={item.heading}
                className="flex flex-col gap-1 border-t border-rule-strong py-4"
              >
                <span className={`${itemTitle} text-[17px]`}>
                  {item.heading}
                </span>
                <span className={cardText}>{item.body}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={`${listHeading} mb-5`}>
            Across the experience and system, we assess
          </h3>
          <dl className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-x-8 border-t border-rule-strong">
            {assessed.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[32px_minmax(0,1fr)] content-start gap-x-3 gap-y-1 border-b border-rule py-[18px]"
              >
                <span aria-hidden="true" className={`${marker} leading-[1.7]`}>
                  {item.number}
                </span>
                <dt className={itemTitle}>{item.name}</dt>
                <dd className={`${cardText} col-start-2`}>{item.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ─── 05 / What a project can look like ─── */

function Example() {
  return (
    <section aria-labelledby="example-title">
      <div
        className={`${frame} flex flex-col gap-[clamp(28px,4vw,44px)] py-[var(--section-y)]`}
      >
        <div className="flex flex-col gap-[18px]">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <p className={label}>05 / What a project can look like</p>
            <p
              className={`${listHeading} rounded-full border border-rule-strong px-3 py-1`}
            >
              Illustrative example &middot; not a client project
            </p>
          </div>
          <h2 id="example-title" className={`${sectionHeading} max-w-[30ch]`}>
            A small business wants to turn client briefs and meeting notes into
            useful project plans.
          </h2>
        </div>
        <ol className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-3">
          {exampleFlow.map((step, i) => (
            <li
              key={step.heading}
              className="flex flex-col gap-3.5 rounded-card border-t-[3px] border-primary bg-sage p-[clamp(20px,2.4vw,28px)]"
            >
              <span
                className={`${labelType} flex items-center gap-2.5 text-heading`}
              >
                <span className={marker}>{String(i + 1).padStart(2, "0")}</span>
                <span>{step.heading}</span>
                {i < exampleFlow.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="ml-auto font-sans text-[16px] text-primary"
                  >
                    →
                  </span>
                )}
              </span>
              {step.objective && (
                <p className="font-serif text-[clamp(20px,1.8vw,23px)] leading-[1.35] font-normal text-heading text-pretty">
                  {step.objective}
                </p>
              )}
              {step.items && (
                <ul>
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className="grid grid-cols-[16px_minmax(0,1fr)] gap-2 border-t border-rule-strong py-[9px] text-[15px] leading-[1.5]"
                    >
                      <span aria-hidden="true" className="text-primary">
                        &middot;
                      </span>
                      <span className="text-pretty">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-center gap-x-[clamp(32px,5vw,72px)] gap-y-6">
          <DraftPlan />
          <div className="flex max-w-[46ch] flex-col gap-2.5">
            <p className={smallLabel}>Illustrative product behavior</p>
            <p className="text-pretty">
              Each commitment in the draft points to where it came from. Gaps
              are flagged rather than filled in, and nothing is shared until a
              person approves it. Those same behaviors are what the evaluation
              checks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* A static mock of the example product's output, not a real interface. */
function DraftPlan() {
  const sourceTag =
    "rounded-full border border-rule-strong px-[9px] py-0.5 font-mono text-[11px] font-medium tracking-[0.04em] whitespace-nowrap text-primary";
  return (
    <figure
      aria-label="Illustration of a draft plan awaiting review"
      className="rounded-card border border-rule-strong bg-panel px-[22px] pt-5 pb-[22px]"
    >
      <div className="mb-1.5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <span className="font-semibold text-heading">
          Draft plan &middot; Website refresh
        </span>
        <span
          className={`${smallLabelType} rounded-full border border-dev px-2.5 py-[3px] text-dev`}
        >
          Awaiting review
        </span>
      </div>
      <ul>
        {draftPlan.map((row) => (
          <li
            key={row.item}
            className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-t border-rule py-[11px]"
          >
            <span className="text-[15px] leading-[1.45] text-heading">
              {row.item}
            </span>
            <span className={sourceTag}>↳ {row.source}</span>
          </li>
        ))}
        <li className="mt-1.5 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 rounded-card border border-dashed border-dev px-3 py-[11px]">
          <span className="text-[15px] leading-[1.45] text-heading">
            <strong className="font-semibold">Missing:</strong> who signs off
            the final copy?
          </span>
          <span className="font-mono text-[11px] font-medium tracking-[0.04em] text-dev">
            Not in brief or notes
          </span>
        </li>
      </ul>
      <div aria-hidden="true" className="mt-4 flex gap-2.5">
        <span className="inline-flex min-h-9 items-center rounded-full bg-primary px-4 text-[14px] font-medium text-on-primary">
          Approve plan
        </span>
        <span className="inline-flex min-h-9 items-center rounded-full border border-rule-strong px-4 text-[14px] font-medium text-heading">
          Edit
        </span>
      </div>
    </figure>
  );
}

/* ─── 06 / Who you'll be working with ─── */

function Founder() {
  return (
    <section id="yuyu" aria-labelledby="yuyu-title" className="bg-sage">
      <div className={`${frame} py-[var(--section-y)]`}>
        <p className={`${label} mb-[clamp(28px,4vw,48px)]`}>
          06 / Who you&rsquo;ll be working with
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
                    <span className={`${itemTitle} text-[19px]`}>
                      {cert.name}
                    </span>
                    <span className="font-mono text-[12px] font-medium tracking-[0.08em] text-muted">
                      {cert.code}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex max-w-[64ch] flex-col gap-[22px]">
            <div>
              <h2 id="yuyu-title" className={sectionHeading}>
                Yuyu Shen
              </h2>
              <p className={`${smallLabel} mt-2`}>Founder, Hopperlace</p>
            </div>
            <p className={lead}>
              Yuyu is a statistically trained data scientist turned product
              leader, with nearly a decade building and evaluating AI systems,
              including taking AI products from zero to one.
            </p>
            <p className="text-pretty">
              Her career spans data science and product analytics at Meta, AI
              product leadership at Walmart and Beamery, and independent
              research on AI evaluation. Her work has always sat between the
              technical and the commercial: she builds models and prototypes
              herself, then turns what they show into product decisions tied to
              what customers actually need. That is what she brings to a
              project: judgment about what is worth building, the ability to
              build and measure it, and attention to how people will really use
              it.
            </p>
            <p className="text-pretty">
              She founded Hopperlace to help people choose AI tools and systems
              that fit their tasks, preferences and values.{" "}
              <a href={VALUECOMPASS_URL} className={proseLink}>
                ValueCompass
              </a>{" "}
              is available today, with independent tool comparisons in
              development. She has also built{" "}
              <a href={EVIDENCE_SYNTHESIS_URL} className={proseLink}>
                Evidence Synthesis AI
              </a>
              , which helps research teams use AI to screen studies for
              systematic reviews. Alongside building, she researches AI
              evaluation and writes about technology, agency and better
              decisions.
            </p>
            <div className="mt-3 grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-x-8">
              <FounderFact heading="Research">
                <p className={`${itemTitle} mb-1.5`}>
                  <a
                    href={RESEARCH_URL}
                    className="text-heading underline decoration-1 underline-offset-[3px]"
                  >
                    Deference-aware evaluation ↗
                  </a>
                </p>
                <p className={cardText}>
                  Paper accepted at the ICML 2026 Technical AI Governance
                  workshop.
                </p>
              </FounderFact>
              <FounderFact heading="Writing">
                <p className={`${itemTitle} mb-1.5`}>
                  <a
                    href={BUILDWITHWHY_URL}
                    className="text-heading underline decoration-1 underline-offset-[3px]"
                  >
                    Build With Why ↗
                  </a>
                </p>
                <p className={cardText}>
                  Essays on technology, agency and better decisions.
                </p>
              </FounderFact>
              <FounderFact heading="Products">
                <ul className="flex flex-col gap-1.5 text-[15px]">
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
                <p className={cardText}>
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

/* ─── 07 / Working together (+ Why Hopperlace) ─── */

function WorkingTogether() {
  return (
    <section
      aria-labelledby="engage-title"
      className={`${frame} py-[var(--section-y)]`}
    >
      <p className={`${label} mb-4`}>07 / Working together</p>
      <h2 id="engage-title" className={`${sectionHeading} mb-4 max-w-[28ch]`}>
        Start with one objective, decision, prototype or workflow.
      </h2>
      <p className="mb-[clamp(32px,4vw,48px)] max-w-[60ch] text-pretty">
        Each project is built around a concrete decision, a tested direction or
        a working artifact your team can use.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-x-8">
        {principles.map((item) => (
          <div
            key={item.marker}
            className="flex flex-col gap-2.5 border-t border-rule-strong pt-6 pb-8"
          >
            <span className={marker}>{item.marker}</span>
            <h3 className={cardTitle}>{item.heading}</h3>
            <p className={cardText}>{item.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-[clamp(40px,5vw,64px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-x-16 gap-y-4 rounded-card bg-sage px-[clamp(24px,4vw,40px)] py-8">
        <div>
          <p className={`${label} mb-2.5`}>Why Hopperlace</p>
          <p className="font-serif text-[clamp(22px,2vw,26px)] leading-[1.3] font-normal text-heading">
            The same questions behind our product work.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <p className="text-[15px] leading-[1.65] text-pretty">
            Client projects and Hopperlace&rsquo;s public tool testing, now in
            development, start from the same questions: what an AI system
            actually accomplishes, what makes it useful for a particular task
            and person, and how people can make better choices about it. Client
            work stays confidential.
          </p>
          <a
            href="/#testing"
            className={`${proseLink} self-start text-[14px] font-medium`}
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
          className="font-serif text-[clamp(32px,3.8vw,48px)] leading-[1.1] font-normal tracking-[-0.015em] text-pretty"
        >
          Tell us what you&rsquo;re working on.
        </h2>
        <div className="flex flex-col gap-6">
          <p className="text-pretty">
            A few sentences is plenty: an objective or problem you want to
            clarify, or something you&rsquo;re choosing, building or improving.
            Add what&rsquo;s uncertain and any timing that matters.
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

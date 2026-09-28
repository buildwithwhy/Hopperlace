import type { Metadata } from "next";
import Image from "next/image";
import {
  BUILDWITHWHY_URL,
  EMAIL,
  EVIDENCE_SYNTHESIS_URL,
  MAIL_HREF,
  VALUECOMPASS_URL,
} from "@/lib/links";

const title = "Services — Hopperlace";

const description =
  "Hopperlace helps teams turn promising ideas into working prototypes, find out what is holding existing AI experiences back, and use evidence to decide what to build or change next.";

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
const smallLabel =
  "font-mono text-[11px] font-medium tracking-[0.12em] text-muted";

/* ─── Content ─── */

const navLinks = [
  { href: VALUECOMPASS_URL, label: "ValueCompass ↗", current: false },
  { href: "/#testing", label: "Testing", current: false },
  { href: "/services", label: "Services", current: true },
];

const offers = [
  {
    id: "develop",
    kicker: "A NEW IDEA",
    label: "01 / A NEW IDEA",
    heading: "Develop and test an AI idea",
    summary:
      "Work out what it should do, build it, and see whether it delivers.",
    quote:
      "“We see an opportunity for AI in our product or workflow, but need to work out what it should do and whether it can deliver.”",
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
    receive:
      "A working prototype, findings from testing, and a practical recommendation for what to develop next.",
  },
  {
    id: "improve",
    kicker: "AN EXISTING FEATURE",
    label: "02 / AN EXISTING FEATURE",
    heading: "Improve an existing AI experience",
    summary:
      "Find what is holding it back for real users, and test the changes.",
    quote:
      "“The demo looks promising, but real users still struggle, correct the output, or redo the work.”",
    steps: [
      <>Review real examples and where users run into trouble.</>,
      <>Agree what success should mean for the people using it.</>,
      <>
        Trace the problem across model behavior, the information the system
        has, the workflow and the interface.
      </>,
      <>Prototype or implement selected improvements.</>,
      <>Compare results before and after on the same set of cases.</>,
      <>Hand over test cases your team can rerun, and clear next steps.</>,
    ],
    receive:
      "A diagnosis supported by real examples, tested changes where agreed, and evidence of their effect.",
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

const principles = [
  {
    marker: "i.",
    heading: "An agreed question",
    body: (
      <>
        Each project starts with the question it needs to answer, a scope, and
        the outputs you&rsquo;ll receive.
      </>
    ),
  },
  {
    marker: "ii.",
    heading: "Hands-on work",
    body: (
      <>
        Discovery, prototyping, testing and selected implementation, in
        whatever mix the question calls for.
      </>
    ),
  },
  {
    marker: "iii.",
    heading: "A clear handoff",
    body: (
      <>
        Prototype, tests and findings are handed over so your team can continue
        the development.
      </>
    ),
  },
];

const certifications = [
  { code: "CCA-F", name: "Certified Claude Architect – Foundational" },
  { code: "CCA-P", name: "Certified Claude Architect – Professional" },
];

/* Past roles, before Hopperlace. The section says so on the page; keep it
   that way — none of this may read as Hopperlace client work. */
const pastWork = [
  {
    company: "ENJOY TECHNOLOGY",
    heading: "Last Mile Smart Routing",
    did: "Personally built a Python proof-of-concept algorithm for adaptive delivery coverage, then led the work into product development.",
    ledTo:
      "The feature, Last Mile Smart Routing, increased visits per vehicle by 8–13%.",
  },
  {
    company: "BEAMERY",
    heading: "Dynamic Job Architecture",
    did: "As hiring slowed, identified an opportunity to adapt Beamery’s existing AI capabilities into Dynamic Job Architecture. She persuaded leadership to explore the area, secured support for a team and found willing pilot customers.",
    ledTo:
      "The work extended Beamery’s capabilities toward defining roles and skills for internal mobility and workforce planning.",
  },
];

export default function Services() {
  return (
    <div className="[--g:clamp(20px,4vw,56px)]">
      <Header />
      <main>
        <Hero />
        <Offers />
        <Example />
        <HowProjectsWork />
        <WhoYoullWorkWith />
        <WhyHopperlace />
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
      className="grid grid-cols-[minmax(0,1fr)] border-b border-ink hero:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]"
    >
      <div
        className={`${gutter} min-w-0 pt-[clamp(52px,7vw,100px)] pb-[clamp(40px,5vw,64px)]`}
      >
        <p className={`${label} mb-[26px] tracking-[0.14em] uppercase`}>
          Services
        </p>
        <h1
          id="services-title"
          className="mb-[26px] max-w-[15ch] font-serif text-[clamp(36px,5vw,64px)] leading-[1.05] font-normal tracking-[-0.02em] text-pretty"
        >
          Develop, test and improve AI products and features.
        </h1>
        <p className="mb-[30px] max-w-[54ch] text-[clamp(17px,1.5vw,20px)] leading-[1.6] text-body text-pretty">
          Hopperlace helps teams turn promising ideas into working prototypes,
          find out what is holding existing AI experiences back, and use
          evidence to decide what to build or change next.
        </p>
        <div className="flex flex-wrap items-center gap-x-[18px] gap-y-3">
          <a
            href={MAIL_HREF}
            className="bg-accent px-[26px] py-[15px] text-[15px] font-medium text-paper no-underline"
          >
            Discuss your project
          </a>
          <span className="text-[14px] text-muted">{EMAIL}</span>
        </div>
      </div>
      <div
        className={`${gutter} grid min-w-0 content-center gap-3 border-t border-ink bg-tint py-[clamp(28px,4vw,56px)] hero:border-t-0 hero:border-l`}
      >
        <p className={smallLabel}>TWO KINDS OF PROJECT</p>
        {offers.map((offer) => (
          <a
            key={offer.id}
            href={`#${offer.id}`}
            className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-4 gap-y-1.5 border border-ink bg-panel px-5 py-[18px] text-ink no-underline"
          >
            <span className="font-mono text-[11px] font-medium tracking-[0.1em] text-accent">
              {offer.kicker}
            </span>
            <span
              aria-hidden="true"
              className="row-span-3 font-mono text-[16px] text-muted"
            >
              ↓
            </span>
            <span className="font-serif text-[20px] leading-[1.3] font-medium">
              {offer.heading}
            </span>
            <span className="text-[14.5px] leading-[1.5] text-body">
              {offer.summary}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ─── 01 + 02 / The two offers ─── */

function Offers() {
  return (
    <section className="grid grid-cols-[minmax(0,1fr)] border-b border-ink vc:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      {offers.map((offer, i) => (
        <article
          key={offer.id}
          id={offer.id}
          aria-labelledby={`${offer.id}-title`}
          className={`${gutter} grid min-w-0 scroll-mt-16 grid-rows-[auto_auto_auto_1fr_auto] py-[clamp(40px,5vw,64px)] ${
            i > 0 ? "border-t border-ink vc:border-t-0 vc:border-l" : ""
          }`}
        >
          <p className={`${label} mb-4`}>{offer.label}</p>
          <h2
            id={`${offer.id}-title`}
            className="mb-[18px] font-serif text-[clamp(28px,3vw,38px)] leading-[1.15] font-normal tracking-[-0.015em] text-pretty"
          >
            {offer.heading}
          </h2>
          <p className="mb-[30px] max-w-[40ch] font-serif text-[clamp(18px,1.6vw,21px)] leading-[1.45] text-body italic text-pretty">
            {offer.quote}
          </p>
          <div>
            <h3 className={`${smallLabel} mb-2.5`}>THE WORK CAN INCLUDE</h3>
            <ol className="mb-7 border-t border-ink">
              {offer.steps.map((step, n) => (
                <li
                  key={n}
                  className="grid grid-cols-[28px_minmax(0,1fr)] gap-2.5 border-b border-rule py-[11px] text-[15px] leading-[1.5] text-body"
                >
                  <span className="font-mono text-[13px] text-muted">
                    {n + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <span />
          <div className="border border-rule bg-tint px-5 py-[18px]">
            <h3 className="mb-1.5 font-mono text-[11px] font-medium tracking-[0.12em] text-ink">
              YOU RECEIVE
            </h3>
            <p className="text-[15.5px] leading-[1.55] text-ink text-pretty">
              {offer.receive}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}

/* ─── 03 / What a project can look like ─── */

function Example() {
  return (
    <section
      aria-labelledby="example-title"
      className={`${gutter} border-b border-ink bg-tint py-[clamp(40px,5vw,64px)]`}
    >
      <p className={`${label} mb-6`}>03 / WHAT A PROJECT CAN LOOK LIKE</p>
      <div className="border border-dashed border-amber bg-panel">
        <div className="grid gap-2 border-b border-rule px-[clamp(18px,2.5vw,28px)] py-[clamp(20px,2.5vw,28px)]">
          <p className="font-mono text-[11px] font-medium tracking-[0.12em] text-amber">
            ILLUSTRATIVE EXAMPLE
          </p>
          <h2
            id="example-title"
            className="max-w-[34ch] font-serif text-[clamp(22px,2.4vw,30px)] leading-[1.3] font-normal tracking-[-0.01em] text-pretty"
          >
            A team wants to help customers turn a collection of documents into
            an actionable plan.
          </h2>
        </div>
        <ol className="grid grid-cols-[minmax(0,1fr)] hero:grid-cols-5">
          {exampleFlow.map((step, i) => (
            <li
              key={step.heading}
              className={`grid min-w-0 content-start gap-2 px-[clamp(16px,1.8vw,24px)] pt-5 pb-6 ${
                i > 0 ? "border-t border-rule hero:border-t-0 hero:border-l" : ""
              }`}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[12px] font-medium text-muted">
                  {i + 1}
                </span>
                {i < exampleFlow.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="inline-block rotate-90 font-mono text-[14px] text-muted hero:rotate-0"
                  >
                    →
                  </span>
                )}
              </div>
              <h3 className="font-serif text-[18px] leading-[1.3] font-medium">
                {step.heading}
              </h3>
              <p className="text-[14px] leading-[1.55] text-body text-pretty">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─── 04 / How projects work ─── */

function HowProjectsWork() {
  return (
    <section
      aria-labelledby="how-title"
      className={`${gutter} border-b border-ink py-[clamp(40px,5vw,64px)]`}
    >
      <p className={`${label} mb-3.5`}>04 / HOW PROJECTS WORK</p>
      <h2
        id="how-title"
        className="mb-8 max-w-[28ch] font-serif text-[clamp(26px,2.8vw,34px)] leading-[1.2] font-normal tracking-[-0.015em] text-pretty"
      >
        Focused, hands-on, and set up for your team to carry on.
      </h2>
      <div className="grid border-t border-ink split:grid-cols-3">
        {principles.map((item, i) => (
          <div
            key={item.marker}
            className={`border-b border-rule py-6 ${
              i === 0
                ? "split:pr-7"
                : i === principles.length - 1
                  ? "split:border-l split:pl-7"
                  : "split:border-l split:px-7"
            }`}
          >
            <p className="mb-2.5 font-mono text-[14px] text-muted">
              {item.marker}
            </p>
            <h3 className="mb-2 font-serif text-[20px] leading-[1.3] font-medium">
              {item.heading}
            </h3>
            <p className="text-[15px] leading-[1.6] text-body text-pretty">
              {item.body}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-7 grid items-baseline gap-x-8 gap-y-3 split:grid-cols-4">
        <h3 className={smallLabel}>WHAT THE WORK DRAWS ON</h3>
        <p className="text-[15px] leading-[1.7] text-body text-pretty split:col-span-3">
          Customer and workflow discovery &middot; AI product and interaction
          design &middot; tool, model and build-versus-buy decisions &middot;
          system architecture, including where people stay involved &middot;
          functional prototyping and selected implementation &middot; designing
          tests and interpreting the results
        </p>
      </div>
    </section>
  );
}

/* ─── 05 / Who you'll be working with ─── */

function WhoYoullWorkWith() {
  return (
    <section
      id="experience"
      aria-labelledby="founder-name"
      className={`${gutter} scroll-mt-16 border-b border-ink py-[clamp(40px,5vw,64px)]`}
    >
      <p className={`${label} mb-7`}>05 / WHO YOU&rsquo;LL BE WORKING WITH</p>
      <div className="mb-10 grid grid-cols-[minmax(0,1fr)] items-start gap-x-[clamp(28px,4vw,64px)] gap-y-7 vc:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div className="grid min-w-0 content-start gap-4">
          <Image
            src="/assets/yuyu-shen.jpg"
            alt="Portrait of Yuyu Shen"
            width={480}
            height={480}
            sizes="220px"
            className="block aspect-square h-auto w-full max-w-[220px] border border-ink object-cover"
          />
          <div>
            <h2
              id="founder-name"
              className="mb-1 font-serif text-[clamp(28px,3vw,36px)] leading-[1.15] font-normal tracking-[-0.015em]"
            >
              Yuyu Shen
            </h2>
            <p className="font-mono text-[12px] font-medium tracking-[0.1em] text-muted">
              FOUNDER, HOPPERLACE
            </p>
          </div>
        </div>
        <div className="grid min-w-0 max-w-[64ch] gap-4">
          <p className="font-serif text-[clamp(19px,1.9vw,23px)] leading-[1.5] text-pretty">
            Yuyu is a statistically trained data scientist turned product
            leader, with nearly a decade building and evaluating AI systems,
            including taking AI products from zero to one.
          </p>
          <p className="text-[16px] leading-[1.65] text-body text-pretty">
            Her work has always sat between the technical and the commercial.
            She builds models and prototypes herself, then turns what they show
            into product decisions, keeping both tied to what customers actually
            need. That combination is what she brings to a project: judgment
            about what is worth building, the ability to build and measure it,
            and attention to how people will really use it.
          </p>
          <p className="text-[16px] leading-[1.65] text-body text-pretty">
            She now builds independently through Hopperlace. That includes{" "}
            <a
              href={VALUECOMPASS_URL}
              className="text-accent underline underline-offset-2"
            >
              ValueCompass
            </a>
            , for comparing AI options against your values, and{" "}
            <a
              href={EVIDENCE_SYNTHESIS_URL}
              className="text-accent underline underline-offset-2"
            >
              Evidence Synthesis AI
            </a>
            , which helps research teams use AI to screen studies for systematic
            reviews. Alongside building, she researches how AI systems should be
            evaluated and writes about technology, agency and better decisions.
          </p>
        </div>
      </div>

      <div className="mb-11 grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-x-7 gap-y-5">
        <div className="grid min-w-0 content-start gap-1.5 border-t border-ink pt-3.5">
          <h3 className={smallLabel}>RESEARCH</h3>
          <p className="font-serif text-[18px] leading-[1.3] font-medium">
            Deference-aware evaluation
          </p>
          <p className="text-[14px] leading-[1.55] text-body">
            Paper accepted at the ICML 2026 Technical AI Governance workshop.
          </p>
        </div>
        <div className="grid min-w-0 content-start gap-1.5 border-t border-ink pt-3.5">
          <h3 className={smallLabel}>CERTIFICATIONS</h3>
          <div className="grid gap-2">
            {certifications.map((cert) => (
              <div
                key={cert.code}
                className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3"
              >
                <span className="border border-ink px-2.5 py-[5px] font-mono text-[14px] font-medium tracking-[0.04em]">
                  {cert.code}
                </span>
                <span className="text-[14px] leading-[1.4] text-ink">
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid min-w-0 content-start gap-1.5 border-t border-ink pt-3.5">
          <h3 className={smallLabel}>WRITING</h3>
          <p className="font-serif text-[18px] leading-[1.3] font-medium">
            <a
              href={BUILDWITHWHY_URL}
              className="text-ink underline underline-offset-[3px]"
            >
              Build With Why ↗
            </a>
          </p>
          <p className="text-[14px] leading-[1.55] text-body">
            Essays on technology, agency and better decisions.
          </p>
        </div>
      </div>

      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1.5">
        <h3 className={smallLabel}>SELECTED EXPERIENCE FROM PREVIOUS ROLES</h3>
        <p className="text-[13px] text-muted">Not Hopperlace client projects.</p>
      </div>
      <div className="grid grid-cols-[minmax(0,1fr)] gap-4 vc:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        {pastWork.map((work) => (
          <article
            key={work.company}
            className="min-w-0 border border-ink bg-panel"
          >
            <div className="border-b border-rule px-5 py-3 font-mono text-[11px] font-medium tracking-[0.1em]">
              {work.company}
            </div>
            <div className="grid gap-4 px-5 pt-5 pb-[22px]">
              <h4 className="font-serif text-[22px] leading-[1.25] font-medium">
                {work.heading}
              </h4>
              <div className="grid gap-1">
                <p className="font-mono text-[11px] font-medium tracking-[0.1em] text-muted">
                  WHAT YUYU DID
                </p>
                <p className="text-[15px] leading-[1.6] text-body text-pretty">
                  {work.did}
                </p>
              </div>
              <div className="grid gap-1 border-t border-rule pt-3.5">
                <p className="font-mono text-[11px] font-medium tracking-[0.1em] text-muted">
                  WHAT IT LED TO
                </p>
                <p className="text-[15px] leading-[1.6] text-ink text-pretty">
                  {work.ledTo}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─── 06 / Why Hopperlace ─── */

function WhyHopperlace() {
  return (
    <section
      aria-labelledby="why-title"
      className={`${gutter} grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-start gap-x-[var(--g)] gap-y-5 border-b border-ink py-[clamp(36px,4.5vw,56px)]`}
    >
      <div>
        <p className={`${label} mb-3.5`}>06 / WHY HOPPERLACE</p>
        <h2
          id="why-title"
          className="max-w-[24ch] font-serif text-[clamp(22px,2.4vw,28px)] leading-[1.3] font-normal tracking-[-0.01em] text-pretty"
        >
          The same questions behind our product work.
        </h2>
      </div>
      <div className="grid max-w-[60ch] gap-3">
        <p className="text-[16px] leading-[1.65] text-body text-pretty">
          Client projects and Hopperlace&rsquo;s public tool testing, now in
          development, start from the same questions: what an AI system actually
          accomplishes, where it struggles, and what makes it right for a
          particular task and person. Client work stays confidential.
        </p>
        <a
          href="/#testing"
          className="justify-self-start text-[14px] font-medium text-accent underline underline-offset-2"
        >
          How we&rsquo;re approaching tool testing →
        </a>
      </div>
    </section>
  );
}

/* ─── Contact (dark) ─── */

function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className={`${gutter} bg-ink py-[clamp(56px,7vw,96px)] text-paper`}
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-end gap-x-[var(--g)] gap-y-8">
        <div>
          <h2
            id="contact-title"
            className="mb-4 max-w-[18ch] font-serif text-[clamp(32px,3.8vw,48px)] leading-[1.1] font-normal tracking-[-0.015em] text-pretty"
          >
            Tell us what you&rsquo;re working on.
          </h2>
          <p className="max-w-[50ch] text-[17px] leading-[1.6] text-on-ink text-pretty">
            A few sentences is plenty: what you want to build or improve, what
            is uncertain or not working yet, and any timing that matters.
          </p>
        </div>
        <div className="grid justify-items-start gap-3">
          <a
            href={MAIL_HREF}
            className="bg-paper px-[30px] py-[17px] text-[16px] font-medium text-ink no-underline"
          >
            Discuss your project
          </a>
          <span className="text-[14px] text-on-ink-muted">
            or email{" "}
            <a
              href={MAIL_HREF}
              className="text-paper underline underline-offset-2"
            >
              {EMAIL}
            </a>
          </span>
        </div>
      </div>
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
        <a
          href={VALUECOMPASS_URL}
          className="text-muted underline underline-offset-2"
        >
          valuecompass.ai
        </a>
        <a href={MAIL_HREF} className="text-muted underline underline-offset-2">
          {EMAIL}
        </a>
      </div>
    </footer>
  );
}

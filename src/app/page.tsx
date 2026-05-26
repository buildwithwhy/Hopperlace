import NavInner from "@/components/NavInner";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Hopperlace",
      url: "https://hopperlace.ai",
      description:
        "Evaluation and orchestration infrastructure for AI systems that know when to hand off, design the handoff well, and keep their behaviour consistent with their stated values.",
      email: "hello@hopperlace.ai",
      founder: {
        "@type": "Person",
        name: "Yuyu Shen",
      },
      sameAs: ["https://www.evidencesynthesisai.com/"],
    },
    {
      "@type": "WebSite",
      name: "Hopperlace",
      url: "https://hopperlace.ai",
    },
    {
      "@type": "ScholarlyArticle",
      name: "Deference-Aware Evaluation for Human-in-the-Loop AI Systems",
      author: { "@type": "Organization", name: "Hopperlace Research" },
      datePublished: "2026-03",
      url: "https://osf.io/a69yh/files/vj95h",
      identifier: {
        "@type": "PropertyValue",
        propertyID: "DOI",
        value: "10.17605/OSF.IO/A69YH",
      },
      description:
        "A framework for evaluating AI systems on their capacity to recognise the limits of their own competence and defer when appropriate, alongside standard accuracy. The paper identifies two failure modes that conventional metrics conflate, penalised conservatism and genuine confident errors, and introduces deference-aware metrics that distinguish them. The framework is validated across nine frontier models and 258 systematic review studies.",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Nav />
        <Hero />
        <WhatWeBuild />
        <FirstApplication />
        <Research />
        <Team />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

/* ─── Navigation ─── */

function Nav() {
  return <NavInner />;
}


/* ─── Hero ─── */

function Hero() {
  return (
    <section className="pt-36 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-semibold text-navy leading-tight tracking-tight">
          AI that hands off well.
          <br />
          <span className="text-teal-light">Trustworthy by design.</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-text-muted leading-relaxed max-w-2xl">
          Any system that puts AI in the loop has to get three things right:
          knowing when to hand off, handing off well, and keeping its stated
          values consistent with its behaviour. Hopperlace builds the
          evaluation and orchestration infrastructure that makes this possible.
        </p>
        <p className="mt-5 text-lg sm:text-xl text-text-muted leading-relaxed max-w-2xl">
          Our focus right now is high-stakes domains like evidence synthesis,
          clinical decision support, and legal reasoning, where overconfident
          AI carries the most immediate cost. As AI systems become more
          capable and autonomous, they hand off more often, to other agents as
          much as to people, which is why the handoff problem matters as much
          for advanced AI as for systems in production today.
        </p>
      </div>
    </section>
  );
}

/* ─── The Architecture ─── */

const layers = [
  {
    number: 1,
    layer: "Knowledge & Evaluation Layer",
    product: "Evidence Synthesis",
    status: "Early pilots",
    href: "https://www.evidencesynthesisai.com/",
    description:
      "This layer evaluates whether AI systems recognise the limits of their own competence and defer when they should. Most accuracy metrics penalise hesitation, which is the wrong incentive when overconfidence carries real cost. Deference-aware evaluation credits considered deferral as correct and separates it from genuine confident errors. The methodology generalises to clinical triage, legal discovery, content moderation, and scientific review. The first live application is systematic review screening.",
  },
  {
    number: 2,
    layer: "Routing & Orchestration Layer",
    product: "LetsBegin",
    status: "In Development",
    description: (
      <>
        The handoff is where most AI workflows succeed or break. In
        multi-agent systems, breakdowns in coordination between agents
        account for{" "}
        <a
          href="https://arxiv.org/abs/2503.13657"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 decoration-teal-light/60 hover:text-navy hover:decoration-teal-light transition-colors"
        >
          roughly a third of observed failures
        </a>
        . This layer sequences decisions, surfaces one task at a time, and
        routes based on confidence and complexity, so whoever receives the
        task has the context, timing, and format they need to act on it. The
        same design applies when the recipient is another agent or a tool,
        not just a human.
      </>
    ),
  },
  {
    number: 3,
    layer: "Trust & Governance Layer",
    product: "Value Compass",
    status: "In Development",
    description:
      "Trust in an AI system comes from seeing how it behaves, measured against the values it claims. This layer makes the gap between stated values and observed behaviour visible, so users and organisations can match tools to situations and calibrate their expectations accordingly. It applies wherever AI selection and trust have real consequences.",
  },
];

function WhatWeBuild() {
  return (
    <section id="products" className="pt-8 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-medium text-terracotta uppercase tracking-widest">
          The architecture
        </h2>
        <div className="mt-14 flex flex-col">
          {layers.map((layer, i) => (
            <div key={layer.product}>
              {/* Connector */}
              {i > 0 && (
                <div className="flex items-center py-4 pl-5">
                  <div className="w-px h-10 bg-teal-light/30" />
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="ml-[-6px] mt-10 text-teal-light/50"
                  >
                    <path
                      d="M6 0v10M2 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
              {/* Layer card */}
              <div className="border border-warm-gray rounded-xl p-7 hover:border-teal-light/40 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium text-teal-light uppercase tracking-widest">
                      Layer {layer.number}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-navy">
                      {layer.layer}
                    </h3>
                    <p className="mt-0.5 text-sm text-text-muted">
                      {layer.product}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-amber bg-amber/10 px-2.5 py-1 rounded-full shrink-0">
                    {layer.status}
                  </span>
                </div>
                <p className="mt-4 text-sm text-text-muted leading-relaxed">
                  {layer.description}
                </p>
                {layer.href && (
                  <a
                    href={layer.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-teal-light hover:text-navy transition-colors"
                  >
                    Learn more
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="mt-px"
                    >
                      <path
                        d="M5 3h8v8m0-8L5 11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Our First Application ─── */

function FirstApplication() {
  return (
    <section className="py-20 px-6 bg-warm-gray/30 border-y border-warm-gray/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-medium text-terracotta uppercase tracking-widest">
          Our first application
        </h2>
        <p className="mt-3 text-2xl sm:text-3xl font-semibold text-navy tracking-tight">
          Deference-aware evaluation for systematic review
        </p>
        <p className="mt-8 text-text-muted leading-relaxed">
          Systematic reviews sit at the top of the evidence hierarchy, and
          each one is a major undertaking. Nearly 80 are published every day,
          the average review takes more than a year from registration to
          publication, and title and abstract screening is the single largest
          time sink in that process.
        </p>
        <p className="mt-6 text-text-muted leading-relaxed">
          We chose screening deliberately. Within the systematic review
          workflow, it&rsquo;s the sub-task where deference-aware evaluation
          pays off most, because an overconfident screener corrupts every
          downstream step of the review while an overly cautious one wipes out
          the time savings that justify using AI at all. Screening sits between
          those failure modes, which makes it the right test case for whether
          the evaluation layer works in production.
        </p>
        <p className="mt-6 text-text-muted leading-relaxed">
          Research on AI screening confirms the risk is real. Accuracy that
          holds up on one review can{" "}
          <a
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12012331/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 decoration-teal-light/60 hover:text-navy hover:decoration-teal-light transition-colors"
          >
            drop sharply on the next
          </a>
          , which is why screening needs an evaluation layer that knows when
          its own judgments can be trusted.
        </p>
        <p className="mt-6 text-text-muted leading-relaxed">
          Evidence Synthesis AI handles the confident decisions on its own
          (the clear includes and excludes) and surfaces only the genuinely
          ambiguous studies for human review. The time savings come from
          acting decisively where the AI is well-calibrated, while evidence
          quality is protected by the system recognising when it isn&rsquo;t.
          Reviewers see the reasoning behind every decision, can override any
          of them, and have a full audit log of what the system did.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:hello@hopperlace.ai?subject=Evidence%20Synthesis%20pilot"
            className="inline-flex items-center justify-center gap-2 bg-navy text-offwhite px-6 py-3 rounded-lg text-sm font-medium hover:bg-navy-light transition-colors"
          >
            Running a systematic review team? We&rsquo;re onboarding early
            pilots.
          </a>
          <a
            href="https://www.evidencesynthesisai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-navy text-navy px-6 py-3 rounded-lg text-sm font-medium hover:bg-navy hover:text-offwhite transition-colors"
          >
            Learn more about Evidence Synthesis AI
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              className="mt-px"
            >
              <path
                d="M3 8h10m0 0L9 4m4 4L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Research ─── */

const papers = [
  {
    title: "Deference-Aware Evaluation for Human-in-the-Loop AI Systems",
    meta: "White Paper \u00b7 March 2026 \u00b7 Hopperlace Research \u00b7 DOI: 10.17605/OSF.IO/A69YH",
    meta2: "Accepted as a poster \u00b7 Workshop on Technical AI Governance Research (TAIGR), ICML 2026",
    description:
      "A framework for evaluating AI systems on their capacity to recognise the limits of their own competence and defer when appropriate, alongside standard accuracy. The paper identifies two failure modes that conventional metrics conflate, penalised conservatism and genuine confident errors, and introduces deference-aware metrics that distinguish them. The framework is validated across nine frontier models and 258 systematic review studies. The methodology applies across domains, and systematic review is the first deployment.",
    href: "https://osf.io/a69yh/files/vj95h",
    linkLabel: "Read on OSF",
  },
];

function Research() {
  return (
    <section id="research" className="py-20 px-6 bg-navy">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-medium text-terracotta uppercase tracking-widest">
          Research
        </h2>
        <div className="mt-8 flex flex-col gap-8">
          {papers.map((paper) => (
            <div
              key={paper.title}
              className="border border-offwhite/10 rounded-xl p-8 sm:p-10"
            >
              <p className="text-xs font-medium text-offwhite/50 uppercase tracking-widest">
                {paper.meta}
              </p>
              {paper.meta2 && (
                <p className="mt-1 text-xs font-medium text-offwhite/50 uppercase tracking-widest">
                  {paper.meta2}
                </p>
              )}
              <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-offwhite leading-snug">
                {paper.title}
              </h3>
              <p className="mt-5 text-offwhite/70 text-sm leading-relaxed">
                {paper.description}
              </p>
              <a
                href={paper.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 bg-terracotta text-offwhite px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-terracotta/90 transition-colors"
              >
                {paper.linkLabel}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="mt-px"
                >
                  <path
                    d="M5 3h8v8m0-8L5 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Team ─── */

const team = [
  {
    name: "Yuyu Shen",
    role: "Founder",
    bio: "AI product leader with a decade building production AI systems across fintech, enterprise software, and consumer technology, at Meta, Walmart, Beamery, Cleo, and others. Founded Hopperlace to close a gap that kept appearing in the work: AI gets deployed in high-stakes contexts without the evaluation infrastructure needed to know when its outputs can actually be trusted. That gap shapes how Hopperlace builds.",
  },
  {
    name: "Martin Walker, MPH",
    role: "Co-founder, Evidence Synthesis",
    bio: "Background in evidence-based health improvement and systematic review evidence synthesis. Brings the passion for better public outcomes and domain experience to ensure Evidence Synthesis AI works with the right rigour and goal.",
  },
];

function Team() {
  return (
    <section id="team" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-medium text-terracotta uppercase tracking-widest">
          Team
        </h2>
        <p className="mt-3 text-2xl sm:text-3xl font-semibold text-navy tracking-tight">
          Who we are
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 max-w-3xl">
          {team.map((person) => (
            <div key={person.name}>
              <div className="w-16 h-16 rounded-full bg-warm-gray flex items-center justify-center text-navy font-semibold text-lg">
                {person.name
                  .split(",")[0]
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="mt-4 font-semibold text-navy">{person.name}</h3>
              <p className="text-sm text-text-muted">{person.role}</p>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">
                {person.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 border-t border-warm-gray">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-sm font-medium text-terracotta uppercase tracking-widest">
          Contact
        </h2>
        <p className="mt-3 text-2xl sm:text-3xl font-semibold text-navy tracking-tight">
          Get in touch
        </p>
        <p className="mt-4 text-text-muted">
          Interested in our research or exploring collaboration?
        </p>
        <a
          href="mailto:hello@hopperlace.ai"
          className="mt-6 inline-block text-lg font-medium text-navy hover:text-teal-light transition-colors"
        >
          hello@hopperlace.ai
        </a>
      </div>
    </section>
  );
}

/* ─── Footer ─── */

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-warm-gray">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
        <p>&copy; {new Date().getFullYear()} Hopperlace. All rights reserved.</p>
        <p>hopperlace.ai</p>
      </div>
    </footer>
  );
}

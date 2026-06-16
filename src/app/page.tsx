import NavInner from "@/components/NavInner";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Hopperlace",
      url: "https://hopperlace.ai",
      description:
        "Evaluation infrastructure for AI in high-stakes domains, built on deference-aware evaluation. Starting in life sciences — serving systematic review teams and pharmacovigilance / drug-safety teams.",
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
      datePublished: "2026-05",
      url: "https://osf.io/a69yh/",
      identifier: {
        "@type": "PropertyValue",
        propertyID: "DOI",
        value: "10.17605/OSF.IO/A69YH",
      },
      description:
        "A framework for evaluating AI systems on their capacity to recognise the limits of their own competence and defer when appropriate, alongside standard accuracy. The paper identifies two failure modes that conventional metrics conflate — penalised conservatism and genuine confident errors — and introduces deference-aware metrics that distinguish them. A cross-domain audit of six frontier models across five medical domains (2,729 studies, 16,374 screening decisions) shows that no single model is uniformly safe, and isolates a structural class of failures that calibration, ensembling, and model scaling cannot fix. The methodology applies across domains, and systematic review screening is the first deployment.",
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
        <StatStrip />
        <Problem />
        <HowItWorks />
        <WhyTrust />
        <WhoItsFor />
        <Research />
        <Team />
        <BiggerPicture />
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
        <h1 className="text-4xl sm:text-[2.5rem] font-semibold text-navy leading-[1.1] tracking-tight text-balance">
          Evaluation infrastructure for AI decisions that{" "}
          <span className="text-teal-light">can&rsquo;t afford to be wrong.</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-text-muted leading-relaxed">
          Hopperlace tells you when an AI system&rsquo;s decisions can be trusted
          and shows you why. We start where confident mistakes carry both
          societal and financial costs: high-stakes evidence work in life
          sciences.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:hello@hopperlace.ai?subject=Evidence%20Synthesis%20pilot"
            className="inline-flex items-center justify-center gap-2 bg-navy text-offwhite px-6 py-3 rounded-lg text-sm font-medium hover:bg-navy-light transition-colors"
          >
            Start a pilot
          </a>
          <a
            href="https://www.evidencesynthesisai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-navy text-navy px-6 py-3 rounded-lg text-sm font-medium hover:bg-navy hover:text-offwhite transition-colors"
          >
            See the product
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
      </div>
    </section>
  );
}

/* ─── Stat strip ─── */

const stats = [
  {
    figure: "~80",
    label: "systematic reviews published every day",
  },
  {
    figure: ">1 year",
    label: "average review, from registration to publication",
  },
  {
    figure: "8×",
    label: "swing in a model's confident-error rate between reviews",
  },
];

function StatStrip() {
  return (
    <section className="py-10 px-6 border-y border-warm-gray/60">
      <div className="max-w-3xl mx-auto grid gap-8 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-3xl sm:text-4xl font-semibold text-navy tracking-tight">
              {s.figure}
            </p>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── 01 Problem ─── */

function Problem() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-medium text-teal-light uppercase tracking-widest">
          01 · The problem
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-navy tracking-tight">
          Speed to accuracy is the real problem.
        </h2>
        <p className="mt-8 text-text-muted leading-relaxed">
          Dual human screening is the gold standard for a reason. Single
          reviewers miss 13% of relevant studies. It&rsquo;s also why screening
          takes months. AI can now help reduce screening time. But which AI? On
          their most confident decisions, frontier models differ by 45&times; in
          error rate — and a model that isn&rsquo;t aware of its limits
          doesn&rsquo;t just risk the review, it slows it down, burying
          reviewers in false results.
        </p>
        <p className="mt-5 text-text-muted leading-relaxed">
          Most AI tools don&rsquo;t know about their limitations. Our product
          knows when it can&rsquo;t make a confident decision and brings this to
          your attention.
        </p>
      </div>
    </section>
  );
}

/* ─── 02 How it works ─── */

const mechanics = [
  {
    n: "1",
    title: "Handles the confident calls on its own",
    body: "Clear includes and excludes decided automatically where the system is well-calibrated.",
  },
  {
    n: "2",
    title: "Surfaces only the genuine judgment calls",
    body: "Ambiguous decisions are routed to a human, so reviewer attention goes where it actually matters.",
  },
  {
    n: "3",
    title: "Shows the reasoning behind every decision",
    body: "Each include, exclude, or deferral comes with the rationale the system used to get there.",
  },
  {
    n: "4",
    title: "Override anything, audit everything",
    body: "Reviewers can change any decision, and the full log of human and AI decisions are auditable.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 border-t border-warm-gray">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-medium text-teal-light uppercase tracking-widest">
          02 · How it works
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-navy tracking-tight">
          Decisive when it&rsquo;s confident. Careful when it&rsquo;s not.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {mechanics.map((m) => (
            <div
              key={m.n}
              className="border border-warm-gray rounded-xl p-6 hover:border-teal-light/40 transition-colors"
            >
              <p className="text-xs font-medium text-teal-light uppercase tracking-widest">
                {m.n}
              </p>
              <h3 className="mt-2 font-semibold text-navy">{m.title}</h3>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">
                {m.body}
              </p>
            </div>
          ))}
        </div>
        <a
          href="https://www.evidencesynthesisai.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-teal-light hover:text-navy transition-colors"
        >
          See the full product
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
    </section>
  );
}

/* ─── 03 Why you can trust it (emphasis) ─── */

const validation = [
  {
    figure: "45×",
    label:
      "error-rate gap between the best and worst model on their most-confident decisions — 99.7% vs 87.6% accurate",
  },
  {
    figure: "3",
    label: "independent metrics that converge on the same model ranking",
  },
];

function WhyTrust() {
  return (
    <section
      id="product"
      className="py-20 px-6 bg-warm-gray/30 border-y border-warm-gray/50"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-medium text-terracotta uppercase tracking-widest">
          03 · Why you can trust it
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-navy tracking-tight">
          Validation
        </h2>
        <p className="mt-8 text-lg text-text-muted leading-relaxed">
          Validated across 6 frontier models and 5 medical domains — 2,729
          studies, 16,374 screening decisions. No single model is uniformly
          safe; deference-aware evaluation is how you tell which decisions to
          trust.
        </p>
        <div className="mt-10 border border-warm-gray rounded-xl bg-offwhite p-7 sm:p-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {validation.map((v) => (
              <div key={v.figure}>
                <p className="text-3xl sm:text-4xl font-semibold text-navy tracking-tight">
                  {v.figure}
                </p>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  {v.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 04 Who it's for ─── */

const audiences = [
  {
    name: "Systematic review teams",
    body: "Title-and-abstract screening without the year-long grind, with an audit trail that holds up to peer scrutiny.",
  },
  {
    name: "Pharmacovigilance / drug-safety teams",
    body: "Continuous literature monitoring for adverse events, with the documented decision trails.",
  },
  {
    name: "Research consultancies",
    body: "Evidence work at speed, with rigour you can defend to clients.",
  },
];

function WhoItsFor() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-medium text-teal-light uppercase tracking-widest">
          04 · Who it&rsquo;s for
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-navy tracking-tight">
          The teams who can&rsquo;t afford a confident mistake.
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {audiences.map((a) => (
            <div
              key={a.name}
              className="border border-warm-gray rounded-xl p-6 hover:border-teal-light/40 transition-colors"
            >
              <h3 className="font-semibold text-navy">{a.name}</h3>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 05 Research ─── */

const papers = [
  {
    title: "Deference-Aware Evaluation for Human-in-the-Loop AI Systems",
    meta: "White Paper · 2026 · Hopperlace Research · DOI: 10.17605/OSF.IO/A69YH",
    meta2: "Poster · Workshop on Technical AI Governance Research (TAIGR), ICML 2026",
    href: "https://osf.io/a69yh/",
    linkLabel: "Read on OSF",
  },
];

function Research() {
  return (
    <section id="research" className="py-20 px-6 bg-navy">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-medium text-terracotta uppercase tracking-widest">
          05 · Research
        </p>
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
          <div className="border-l-2 border-terracotta pl-6 py-2">
            <p className="text-base sm:text-lg text-offwhite/90 leading-relaxed">
              &ldquo;A model&rsquo;s confident-error rate can swing more than
              eightfold from one review to the next — which is why screening
              needs an evaluation layer that knows when its own judgments can be
              trusted.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 06 Team ─── */

const team = [
  {
    name: "Yuyu Shen",
    role: "Founder",
    bio: "A decade building production AI in regulated industries — fintech, employment, and consumer banking. Founded Hopperlace after recurring exposure to the same gap: AI deployed in high-stakes work without evaluation infrastructure capable of distinguishing trustworthy outputs from overconfident ones. Author of the deference-aware evaluation framework; poster at ICML 2026 TAIGR workshop.",
  },
  {
    name: "Martin Walker, MPH",
    role: "Co-founder, Evidence Synthesis",
    bio: "Background in evidence-based health and systematic review evidence synthesis; brings the domain experience that keeps the system honest about clinical reality. Resident AI skeptic.",
  },
];

function Team() {
  return (
    <section id="team" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-medium text-teal-light uppercase tracking-widest">
          06 · Team
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-navy tracking-tight">
          Who we are
        </h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2">
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

/* ─── 07 The bigger picture ─── */

function BiggerPicture() {
  return (
    <section className="py-20 px-6 bg-warm-gray/30 border-y border-warm-gray/50">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-medium text-teal-light uppercase tracking-widest">
          07 · Where we go next
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-navy tracking-tight">
          Where we go next
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-text-muted leading-relaxed">
          Life sciences is where we start. But the problem of AI that
          doesn&rsquo;t know the limits of its own competence appears wherever
          consequential decisions rest on AI outputs. Hopperlace&rsquo;s
          methodology was built to travel.
        </p>
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
          Running a systematic review or pharmacovigilance team? We&rsquo;re
          onboarding early pilots. Investors and partners: hello@hopperlace.ai
        </p>
        <a
          href="mailto:hello@hopperlace.ai?subject=Evidence%20Synthesis%20pilot"
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
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
        <p>&copy; {new Date().getFullYear()} Hopperlace. All rights reserved.</p>
        <p>hopperlace.ai</p>
      </div>
    </footer>
  );
}

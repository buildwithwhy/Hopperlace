export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Thesis />
      <WhatWeBuild />
      <PilotCTA />
      <Research />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}

/* ─── Navigation ─── */

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-offwhite/90 backdrop-blur-sm border-b border-warm-gray/50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-navy font-semibold text-lg tracking-tight">
          Hopperlace
        </a>
        <div className="hidden sm:flex items-center gap-8 text-sm text-text-muted">
          <a href="#products" className="hover:text-navy transition-colors">
            Architecture
          </a>
          <a href="#research" className="hover:text-navy transition-colors">
            Research
          </a>
          <a href="#team" className="hover:text-navy transition-colors">
            Team
          </a>
          <a href="#contact" className="hover:text-navy transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */

function Hero() {
  return (
    <section className="pt-40 pb-6 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-semibold text-navy leading-tight tracking-tight">
          Human-adaptive AI.
          <br />
          <span className="text-teal-light">Trustworthy by design.</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-text-muted leading-relaxed max-w-2xl">
          Hopperlace builds evaluation and orchestration infrastructure for AI
          systems that know when to act and when to defer&nbsp;&mdash; making the
          human-AI boundary measurable, auditable, and trustworthy.
        </p>
      </div>
    </section>
  );
}

/* ─── Thesis ─── */

function Thesis() {
  return (
    <section className="pb-24 pt-6 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-lg sm:text-xl text-text-muted leading-relaxed">
          Humans are still relevant in the places that matter most in the AI
          age. High stakes mean human accountability. Current model capabilities
          mean real limits. Both mean someone still has to be in the
          loop&nbsp;&mdash; and that loop has to actually work. Better safety.
          Better and faster AI too.
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
      "AI systems need to know what they don\u2019t know. This layer builds the evaluation infrastructure for appropriate deferral\u00a0\u2014 measuring not just accuracy but when the AI should stop and hand off. Current application: human-in-the-loop systematic review screening.",
  },
  {
    number: 2,
    layer: "Routing & Orchestration Layer",
    product: "LetsBegin",
    status: "In Development",
    description:
      "Getting the human in the loop isn\u2019t enough\u00a0\u2014 it matters when, how, and in what form. This layer manages the handoff: sequencing decisions, surfacing one thing at a time, and routing based on confidence and complexity. Designed around human attention and cognitive capacity, so the human who receives the task can actually do it well. Current application: human-adaptive task orchestration for agentic workflows.",
  },
  {
    number: 3,
    layer: "Trust & Governance Layer",
    product: "Value Compass",
    status: "In Development",
    description:
      "Trust in AI systems has to be earned, not assumed. This layer makes AI behavior legible\u00a0\u2014 measuring alignment between how a system acts and the values of the people and organisations relying on it. So the right tool gets used in the right situation, with the right expectations. Current application: trust evaluation framework for AI tool selection.",
  },
];

function WhatWeBuild() {
  return (
    <section id="products" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-medium text-terracotta uppercase tracking-widest">
          The architecture
        </h2>
        <p className="mt-3 text-2xl sm:text-3xl font-semibold text-navy tracking-tight">
          Three layers. One architecture.
        </p>
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

/* ─── Pilot CTA ─── */

function PilotCTA() {
  return (
    <section className="pb-24 px-6">
      <div className="max-w-3xl mx-auto border border-warm-gray rounded-xl p-8 text-center">
        <p className="text-lg font-medium text-navy">
          Running a systematic review team?
        </p>
        <p className="mt-2 text-text-muted">
          We&rsquo;re onboarding early pilots.
        </p>
        <a
          href="mailto:hello@hopperlace.ai"
          className="mt-5 inline-flex items-center gap-2 bg-terracotta text-offwhite px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-terracotta/90 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}

/* ─── Research ─── */

function Research() {
  return (
    <section id="research" className="py-24 px-6 bg-navy">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-medium text-terracotta uppercase tracking-widest">
          Research
        </h2>
        <div className="mt-8 border border-offwhite/10 rounded-xl p-8 sm:p-10">
          <p className="text-xs font-medium text-offwhite/50 uppercase tracking-widest">
            White Paper &middot; March 2026
          </p>
          <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-offwhite leading-snug">
            Deference-Aware Evaluation for Human-in-the-Loop AI Systems
          </h3>
          <p className="mt-2 text-sm text-offwhite/60">Hopperlace Research</p>
          <p className="mt-5 text-offwhite/70 text-sm leading-relaxed">
            We introduce a framework for evaluating AI systems not just on
            accuracy, but on their capacity to recognize the limits of their own
            competence and appropriately defer to human judgment. The paper
            presents deference-aware metrics and demonstrates their application
            in high-stakes screening tasks.
          </p>
          <a
            href="https://osf.io/a69yh/files/vj95h"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 bg-terracotta text-offwhite px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-terracotta/90 transition-colors"
          >
            Read on OSF
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

/* ─── Team ─── */

const team = [
  {
    name: "Yuyu Shen",
    role: "Founder",
    bio: "Ex data scientist and seasoned AI-native product leader turned founder\u00a0\u2014 most recently in HR, fintech, and enterprise tech. Building Hopperlace because there\u2019s a gap I couldn\u2019t ignore: we\u2019re building AI evaluation and orchestration systems as if the human isn\u2019t in the picture. They are and will continue to be in many places. And that changes everything about how those systems should be designed.",
  },
  {
    name: "Martin Walker, MPH",
    role: "Co-founder, Evidence Synthesis",
    bio: "Background in evidence-based health improvement and systematic review evidence synthesis. Brings the passion for better public outcomes and domain experience to ensure Evidence Synthesis AI works with the right rigour and goal.",
  },
];

function Team() {
  return (
    <section id="team" className="py-24 px-6">
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
    <section id="contact" className="py-24 px-6 border-t border-warm-gray">
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

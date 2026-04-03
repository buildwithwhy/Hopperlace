export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Thesis />
      <WhatWeBuild />
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
            The Problem
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
    <section className="pt-40 pb-24 px-6">
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
        <div className="mt-10">
          <a
            href="#research"
            className="inline-flex items-center gap-2 bg-navy text-offwhite px-6 py-3 rounded-lg text-sm font-medium hover:bg-navy-light transition-colors"
          >
            Read the paper
            <svg
              width="16"
              height="16"
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

/* ─── Thesis ─── */

function Thesis() {
  return (
    <section className="pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-lg sm:text-xl text-text-muted leading-relaxed">
          Humans are still relevant in the places that matter most in the AI
          age. High stake situations mean human accountability. Current model
          capabilities mean real limits. Both mean someone still has to be in
          the loop&nbsp;&mdash; and that loop has to actually work. Hopperlace
          builds AI that knows when to act and how to step back. That reads its
          own uncertainty. That brings the human in at the right moment, not too
          often, not too late, and not in a way that burns them out before the
          decision that counts. Better safety. Better and faster AI too.
        </p>
      </div>
    </section>
  );
}

/* ─── What We Build ─── */

const products = [
  {
    name: "Evidence Synthesis",
    status: "Early pilots",
    description:
      "Human-in-the-loop AI for systematic review screening. Combines large language models with structured human oversight to accelerate evidence synthesis while preserving methodological rigor.",
  },
  {
    name: "LetsBegin",
    status: "Building",
    description:
      "Human-adaptive task orchestration. Dynamically routes decisions between AI and human agents based on confidence, complexity, and stakes — ensuring the right actor handles each step.",
  },
  {
    name: "ValueCompass",
    status: "Building",
    description:
      "Trust evaluation for AI tools. Measures alignment between AI system behavior and organizational values through structured, repeatable assessment frameworks.",
  },
];

function WhatWeBuild() {
  return (
    <section id="products" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-medium text-terracotta uppercase tracking-widest">
          The problem
        </h2>
        <p className="mt-3 text-2xl sm:text-3xl font-semibold text-navy tracking-tight">
          Infrastructure for the human-AI boundary
        </p>
        <p className="mt-4 text-text-muted">
          Three layers. One architecture.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="border border-warm-gray rounded-xl p-7 hover:border-teal-light/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-navy">{product.name}</h3>
                <span className="text-xs font-medium text-amber bg-amber/10 px-2.5 py-1 rounded-full">
                  {product.status}
                </span>
              </div>
              <p className="mt-4 text-sm text-text-muted leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
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
    name: "Yu-Yu Shen",
    role: "Co-founder",
    bio: "Research and engineering at the intersection of AI evaluation and human decision-making. Focused on building infrastructure that makes AI systems accountable to the people who rely on them.",
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
        <div className="mt-14 max-w-md">
          {team.map((person) => (
            <div key={person.name}>
              <div className="w-16 h-16 rounded-full bg-warm-gray flex items-center justify-center text-navy font-semibold text-lg">
                {person.name
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
          href="mailto:research@hopperlace.ai"
          className="mt-6 inline-block text-lg font-medium text-navy hover:text-teal-light transition-colors"
        >
          research@hopperlace.ai
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

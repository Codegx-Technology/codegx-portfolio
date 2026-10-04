import { motion } from "framer-motion";
import { FileText, Scale, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Head } from "@/components/head";
import { MainLayout } from "@/components/layouts/MainLayout";
import { IntelligentBackButton } from "@/components/ui/intelligent-back-button";

// TODO: add this title's Gumroad URL when the listing exists, then reinstate a
// "Buy Full Book" anchor beside the enquiry button. The other titles link out as
// https://petersolver.gumroad.com/l/<id>. Deliberately no button until the link is real.

const explorations = [
  "Why deterministic software can be verified and probabilistic systems cannot",
  "Where statistical inference introduces opacity, non-linearity, and emergence",
  "What the GOVERN, MAP, MEASURE, and MANAGE functions actually require of an organisation",
  "How ISO/IEC 42001 turns a management system into auditable evidence",
  "What ISO/IEC 23894 says about risk that the other two leave implicit",
  "Reading the EU AI Act against the standards that claim to satisfy it",
  "Building an assurance case that survives an auditor who did not build the system",
  "Where accountability sits when the model cannot explain its own output",
  "What a board can be shown, and what it should refuse to accept",
  "Why model documentation is not model governance",
];

const audiences = [
  "Risk, compliance, and assurance leads accountable for AI systems",
  "Engineering leaders who own production machine learning",
  "Executives and board members carrying the liability",
  "Auditors and assessors working against NIST AI RMF, ISO/IEC 42001, and the EU AI Act",
  "Architects and consultants designing governance into a system rather than onto it",
];

const receives = [
  "High-quality PDF edition ready to read on any device",
  "Framework mappings across NIST AI RMF, ISO/IEC 42001, ISO/IEC 23894, and the EU AI Act",
  "Written for practitioners who have to defend the system after it ships",
];

export default function EnterpriseAIGovernance() {
  return (
    <>
      <Head
        title="Enterprise AI Governance | Founder Publications"
        description="Enterprise AI Governance by Peter Oduor Oluoch is a governance reference for probabilistic systems, reading NIST AI RMF, ISO/IEC 42001, ISO/IEC 23894, and the EU AI Act against the engineering decisions that create the obligation."
      />

      <MainLayout withContainer={true} navbarVariant="default">
        <section className="px-4 py-8 sm:px-6 md:px-0 md:py-14">
          <IntelligentBackButton fallbackHref="/publications" label="Back to Publications" align="center" className="mb-10" />

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <motion.aside
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:sticky lg:top-28"
            >
              <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
                <img
                  src="/assets/publications/enterprise-ai-governance-cover.png"
                  alt="Enterprise AI Governance book cover"
                  className="mx-auto w-full max-w-md rounded-md object-contain"
                />
              </div>
            </motion.aside>

            <motion.article
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="space-y-8"
            >
              <div>
                <div className="mb-4 inline-flex rounded-full border border-[#c8a951]/30 bg-[#c8a951]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#9f7b42] dark:text-[#d6b464]">
                  AI Governance &amp; Assurance
                </div>
                <h1 className="text-3xl font-bold leading-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
                  Enterprise AI Governance
                </h1>
                <p className="mt-3 text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                  Building Responsible AI Systems with NIST AI RMF, ISO/IEC 42001, ISO/IEC 23894, and the EU AI Act
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-5 md:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f7b42] dark:text-[#d6b464]">
                  Position
                </p>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  <p>Deterministic software is predictable. It can be verified, traced to a line of code, and certified.</p>
                  <p>
                    Machine learning is not. It infers statistical relationships, and with them come non-linear
                    behaviour, opacity, and emergence.
                  </p>
                  <p>The frameworks do not remove that. They price it.</p>
                  <p>
                    The question is not whether the system is compliant on paper. It is what the organisation can prove
                    when it cannot explain the output.
                  </p>
                </div>
              </div>
            </motion.article>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-10 space-y-10"
          >
            <div className="divide-y divide-border/80 border-y border-border/80">
              <section className="grid gap-8 py-8 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f7b42] dark:text-[#d6b464]">
                    What This Is
                  </p>
                  <h2 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">
                    A governance reference for probabilistic systems.
                  </h2>
                </div>
                <div className="space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  <p>
                    A working reference for the people who have to put their name to a system whose behaviour cannot be
                    verified line by line.
                  </p>
                  <p>Not a compliance checklist. Not an AI primer. Not a summary of the regulations.</p>
                  <p>
                    A framework that reads NIST AI RMF, ISO/IEC 42001, ISO/IEC 23894, and the EU AI Act against one
                    another, and asks what has to be built for the answer to survive an audit.
                  </p>
                </div>
              </section>

              <section className="grid gap-8 py-8 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f7b42] dark:text-[#d6b464]">
                    The Question At The Heart Of This Book
                  </p>
                  <h2 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">
                    What can be certified once behaviour stops being verifiable?
                  </h2>
                </div>
                <div className="space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  <p>Documentation alone does not answer it.</p>
                  <p>Neither do model cards. Neither does a risk register nobody reads.</p>
                  <p>Determinism can be certified. Probability has to be governed.</p>
                </div>
              </section>
            </div>

            <section className="py-8">
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <h2 className="text-2xl font-bold text-slate-950 dark:text-white">What You Will Explore</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    Each chapter adds one load-bearing idea. Together they form a single argument.
                  </p>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {explorations.map((point) => (
                    <li
                      key={point}
                      className="border-l border-[#c8a951]/50 pl-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <div className="divide-y divide-border/80 border-y border-border/80">
              <section className="grid gap-8 py-8 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f7b42] dark:text-[#d6b464]">
                    How It Works
                  </p>
                  <h2 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">
                    The book moves from the distinction to the obligation.
                  </h2>
                </div>
                <div className="space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  <p>
                    It begins with what separates deterministic from probabilistic systems, moves through what each
                    framework actually requires, and ends with the assurance and accountability that survive contact
                    with an auditor.
                  </p>
                  <p>Each chapter adds one load-bearing idea. Together they form a single argument.</p>
                </div>
              </section>
            </div>

            <section className="grid gap-8 py-8 lg:grid-cols-2">
              <div className="border-l border-[#c8a951]/50 pl-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#c8a951]/10 text-[#9f7b42] dark:text-[#d6b464]">
                  <Scale className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-950 dark:text-white">Who This Is For</h2>
                <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {audiences.map((audience) => (
                    <li key={audience}>{audience}</li>
                  ))}
                </ul>
              </div>

              <div className="border-l border-border pl-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#c8a951]/10 text-[#9f7b42] dark:text-[#d6b464]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-950 dark:text-white">What You Get</h2>
                <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {receives.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="grid gap-8 py-8 lg:grid-cols-[0.85fr_1.15fr]">
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">The Goal</h2>
              <div className="space-y-5">
                <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  Not to reassure. Not to sell certainty. To give the reader a way to govern a system that will not
                  explain itself.
                </p>
                <blockquote className="border-l-2 border-[#c8a951] pl-4 text-base font-medium text-slate-800 dark:text-slate-100">
                  "Determinism can be certified. Probability has to be governed."
                </blockquote>
              </div>
            </section>

            <section className="rounded-lg border border-[#c8a951]/30 bg-[#c8a951]/10 p-5 md:p-6">
              <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                  <h2 className="text-2xl font-bold text-slate-950 dark:text-white">Access</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    Ask about this title for the PDF edition, review copies, and licensing terms.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-[#c8a951] px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-[#d8ba66]"
                  >
                    <FileText className="h-4 w-4" />
                    Enquire About This Title
                  </Link>
                </div>
              </div>
            </section>

            <section className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              <p>Written by Peter Oduor Oluoch, Software Engineer, AI Solutions Architect, and Author.</p>
              <p className="mt-2">
                Author of The Unwritten Life, The Architecture of Resilience, Engineering in the Age of AI, and the AI
                for Young Thinkers series.
              </p>
            </section>
          </motion.div>
        </section>
      </MainLayout>
    </>
  );
}

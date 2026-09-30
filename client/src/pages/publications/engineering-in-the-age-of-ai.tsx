import { motion } from "framer-motion";
import { BookOpen, Download, FileText, ShieldCheck } from "lucide-react";
import { Head } from "@/components/head";
import { MainLayout } from "@/components/layouts/MainLayout";
import { IntelligentBackButton } from "@/components/ui/intelligent-back-button";

const fullBookUrl = "https://petersolver.gumroad.com/l/hkklkck";
const sampleUrl = "https://petersolver.gumroad.com/l/ibmrnv";

const gains = [
  "Design systems that tolerate LLM variability",
  "Move from single-model usage to orchestrated architectures",
  "Identify and mitigate failure modes before deployment",
  "Control cost, performance, and system behaviour",
];

const coreAreas = [
  {
    title: "System Failure Patterns",
    description: "Why conventional architectures break under AI-driven workflows.",
    icon: ShieldCheck,
  },
  {
    title: "Multi-Agent Orchestration",
    description: "Designing coordinated systems instead of isolated model calls.",
    icon: BookOpen,
  },
  {
    title: "Architectural Governance",
    description: "Security, compliance (HIPAA / PCI-DSS), and operational control.",
    icon: FileText,
  },
  {
    title: "Decision Frameworks",
    description: "Evaluating reliability, cost, and failure risk.",
    icon: Download,
  },
];

const audiences = [
  "Senior engineers",
  "Technical leads",
  "Architects responsible for production systems",
];

export default function EngineeringInTheAgeOfAI() {
  return (
    <>
      <Head
        title="Engineering in the Age of AI | Founder Publications"
        description="Engineering in the Age of AI by Peter Oduor Oluoch is a technical reference for designing production systems that stay stable under AI uncertainty."
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
                  src="/assets/publications/engineering-in-the-age-of-ai-cover.png"
                  alt="Engineering in the Age of AI book cover"
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
                  Engineering &amp; AI
                </div>
                <h1 className="text-3xl font-bold leading-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
                  Engineering in the Age of AI
                </h1>
                <p className="mt-3 text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                  Designing Production Systems Under AI Uncertainty
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-5 md:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f7b42] dark:text-[#d6b464]">
                  Position
                </p>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  <p>Code is no longer the bottleneck. System behaviour is.</p>
                  <p>
                    Traditional engineering does not handle non-deterministic outputs, unstable pipelines,
                    unpredictable cost profiles, or weak orchestration across components.
                  </p>
                  <p>This book is about designing systems that stay stable anyway.</p>
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
                    A technical reference for AI systems in production.
                  </h2>
                </div>
                <div className="space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  <p>Not a tutorial. Not prompt engineering.</p>
                  <p>
                    A systems-level reference for engineers who own what a system does once it is running,
                    not just what it produces in a demonstration.
                  </p>
                </div>
              </section>

              <section className="grid gap-8 py-8 lg:grid-cols-3">
                <div className="lg:col-span-1">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f7b42] dark:text-[#d6b464]">
                    What You Will Gain
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
                  {gains.map((gain) => (
                    <div key={gain} className="border-l border-[#c8a951]/50 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      {gain}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <section className="py-8">
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                <h2 className="text-2xl font-bold text-slate-950 dark:text-white">Core Areas Covered</h2>
                <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                  {coreAreas.map((area) => (
                    <div key={area.title} className="border-t border-border/70 pt-4">
                      <h3 className="text-base font-semibold text-slate-950 dark:text-white">{area.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                        {area.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div className="divide-y divide-border/80 border-y border-border/80">
              <section className="grid gap-8 py-8 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f7b42] dark:text-[#d6b464]">
                    Scope
                  </p>
                  <h2 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">
                    System-level focus throughout.
                  </h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="border-t border-border/70 pt-4">
                    <p className="text-2xl font-bold text-slate-950 dark:text-white">54,000+</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">words</p>
                  </div>
                  <div className="border-t border-border/70 pt-4">
                    <p className="text-2xl font-bold text-slate-950 dark:text-white">24</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">chapters</p>
                  </div>
                  <div className="border-t border-border/70 pt-4">
                    <p className="text-2xl font-bold text-slate-950 dark:text-white">Production</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">systems, not demos</p>
                  </div>
                </div>
              </section>

              <section className="grid gap-8 py-8 lg:grid-cols-2">
                <div className="border-l border-[#c8a951]/50 pl-5">
                  <h2 className="text-xl font-bold text-slate-950 dark:text-white">Who This Is For</h2>
                  <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {audiences.map((audience) => (
                      <li key={audience}>{audience}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                    Not suitable for beginners.
                  </p>
                </div>

                <div className="border-l border-border pl-5">
                  <h2 className="text-xl font-bold text-slate-950 dark:text-white">What You Get</h2>
                  <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    <li>High-quality PDF (production master)</li>
                    <li>DOCX version for internal use</li>
                    <li>Full 24-chapter manuscript</li>
                  </ul>
                </div>
              </section>

              <section className="grid gap-8 py-8 lg:grid-cols-[0.85fr_1.15fr]">
                <h2 className="text-2xl font-bold text-slate-950 dark:text-white">Core Position</h2>
                <blockquote className="border-l-2 border-[#c8a951] pl-4 text-base font-medium text-slate-800 dark:text-slate-100">
                  "This is not about using AI. It is about engineering systems that use AI."
                </blockquote>
              </section>
            </div>

            <section className="rounded-lg border border-[#c8a951]/30 bg-[#c8a951]/10 p-5 md:p-6">
              <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                  <h2 className="text-2xl font-bold text-slate-950 dark:text-white">Access</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    $79 — full access. Launch allocation (25%) currently active. International readers can
                    pay by card via Gumroad, and a free technical sampler is available.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
                  <a
                    href={fullBookUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-[#c8a951] px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-[#d8ba66]"
                  >
                    <BookOpen className="h-4 w-4" />
                    Buy Full Book
                  </a>
                  <a
                    href={sampleUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-[#c8a951]/60 px-5 py-3 text-sm font-semibold text-[#9f7b42] transition-colors hover:bg-[#c8a951]/10 dark:text-[#d6b464]"
                  >
                    <Download className="h-4 w-4" />
                    Read Free Sample
                  </a>
                </div>
              </div>
            </section>

            <section className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              <p>
                Written by Peter Oduor Oluoch, Software Engineer, AI Solutions Architect, and Author.
              </p>
              <p className="mt-2">
                Author of The Architecture of Resilience, The Unwritten Life, and the AI for Young
                Thinkers series.
              </p>
            </section>
          </motion.div>
        </section>
      </MainLayout>
    </>
  );
}

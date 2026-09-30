import { motion } from "framer-motion";
import { Compass, Download, Eye, FileText, Mountain, Scale, ShieldCheck, Target } from "lucide-react";
import { Link } from "wouter";
import { Head } from "@/components/head";
import { MainLayout } from "@/components/layouts/MainLayout";
import { IntelligentBackButton } from "@/components/ui/intelligent-back-button";

const gains = [
  "Stronger judgement under pressure",
  "Greater emotional stability during uncertainty",
  "A practical framework for disciplined thinking",
  "Clearer priorities and decision-making",
  "A deeper understanding of your own patterns and behaviours",
  "Greater independence from external validation",
  "A sustainable daily reflection practice",
];

const entryParts = [
  "A carefully selected passage",
  "Original commentary",
  "A reflection prompt",
  "Space for personal journaling",
];

const coreAreas = [
  {
    title: "Judgement",
    description: "Learning to distinguish what is within your control from what is not.",
    icon: Scale,
  },
  {
    title: "Discipline",
    description: "Building consistency through deliberate action rather than motivation.",
    icon: Target,
  },
  {
    title: "Resilience",
    description: "Developing the capacity to remain steady through adversity and change.",
    icon: ShieldCheck,
  },
  {
    title: "Character",
    description: "Strengthening integrity, responsibility, and personal standards.",
    icon: Compass,
  },
  {
    title: "Attention",
    description: "Protecting focus in a distracted and noisy world.",
    icon: Eye,
  },
  {
    title: "Perspective",
    description: "Understanding events clearly rather than emotionally.",
    icon: Mountain,
  },
];

const formatPoints = [
  "365 Daily Reflections",
  "Original Commentary Throughout",
  "Structured Reflection Prompts",
  "Journaling Framework Included",
  "Designed for Year-Round Use",
];

const audiences = [
  "Professionals",
  "Leaders",
  "Entrepreneurs",
  "Creators",
  "Builders",
  "Students",
];

const receives = [
  "High-quality PDF edition",
  "DOCX edition",
  "Complete 365-day reflection system",
  "Instant download",
  "Lifetime access to purchased formats",
];

export default function TheArchitectureOfResilience() {
  return (
    <>
      <Head
        title="The Architecture of Resilience | Founder Publications"
        description="The Architecture of Resilience by Peter Oduor Oluoch is a 365-day blueprint for mental sovereignty: daily reflections for clarity, discipline and resilience."
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
                  src="/assets/publications/the-architecture-of-resilience-cover.png"
                  alt="The Architecture of Resilience book cover"
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
                  Resilience &amp; Judgement
                </div>
                <h1 className="text-3xl font-bold leading-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
                  The Architecture of Resilience
                </h1>
                <p className="mt-3 text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                  A 365-Day Blueprint for Mental Sovereignty
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-5 md:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f7b42] dark:text-[#d6b464]">
                  Position
                </p>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  <p>
                    Most people spend years developing professional skills while neglecting the inner habits
                    that determine how they think, decide, respond, and endure.
                  </p>
                  <p>
                    Life rarely becomes simpler. Responsibilities increase, pressures multiply, and
                    distractions never stop.
                  </p>
                  <p>Resilience is not a personality trait. It is something that can be built.</p>
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
                    A daily practice for strengthening judgement.
                  </h2>
                </div>
                <div className="space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  <p>
                    A structured collection of 365 daily reflections inspired by Stoic philosophy and
                    interpreted for modern life.
                  </p>
                  <p>Not a collection of quotations. A practical system for daily reflection and self-examination.</p>
                  <p>Each entry includes:</p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {entryParts.map((part) => (
                      <li key={part} className="border-l border-[#c8a951]/50 pl-4 text-sm">
                        {part}
                      </li>
                    ))}
                  </ul>
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
                  {coreAreas.map((area) => {
                    const Icon = area.icon;
                    return (
                      <div key={area.title} className="border-t border-border/70 pt-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#c8a951]/10 text-[#9f7b42] dark:text-[#d6b464]">
                            <Icon className="h-4 w-4" />
                          </div>
                          <h3 className="text-base font-semibold text-slate-950 dark:text-white">{area.title}</h3>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                          {area.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            <div className="divide-y divide-border/80 border-y border-border/80">
              <section className="grid gap-8 py-8 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f7b42] dark:text-[#d6b464]">
                    Format
                  </p>
                  <h2 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">
                    Built for year-round use.
                  </h2>
                </div>
                <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {formatPoints.map((point) => (
                    <div key={point} className="border-t border-border/70 pt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      {point}
                    </div>
                  ))}
                </div>
              </section>

              <section className="grid gap-8 py-8 lg:grid-cols-2">
                <div className="border-l border-[#c8a951]/50 pl-5">
                  <h2 className="text-xl font-bold text-slate-950 dark:text-white">Who This Is For</h2>
                  <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:grid-cols-2">
                    {audiences.map((audience) => (
                      <li key={audience}>{audience}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                    Anyone seeking a more thoughtful and disciplined approach to life.
                  </p>
                </div>

                <div className="border-l border-border pl-5">
                  <h2 className="text-xl font-bold text-slate-950 dark:text-white">What You Receive</h2>
                  <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {receives.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="grid gap-8 py-8 lg:grid-cols-[0.85fr_1.15fr]">
                <h2 className="text-2xl font-bold text-slate-950 dark:text-white">Core Position</h2>
                <blockquote className="border-l-2 border-[#c8a951] pl-4 text-base font-medium text-slate-800 dark:text-slate-100">
                  "Resilience is not inherited. It is built through daily acts of judgement, discipline, and
                  reflection."
                </blockquote>
              </section>
            </div>

            <section className="rounded-lg border border-[#c8a951]/30 bg-[#c8a951]/10 p-5 md:p-6">
              <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                  <h2 className="text-2xl font-bold text-slate-950 dark:text-white">Access</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    Full Edition: $24.90. Launch allocation (25%) currently active. 365 daily reflections,
                    instant download. A free sampler is available on request.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-[#c8a951] px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-[#d8ba66]"
                  >
                    <Download className="h-4 w-4" />
                    Request Access
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-[#c8a951]/60 px-5 py-3 text-sm font-semibold text-[#9f7b42] transition-colors hover:bg-[#c8a951]/10 dark:text-[#d6b464]"
                  >
                    <FileText className="h-4 w-4" />
                    Request the Free Sampler
                  </Link>
                </div>
              </div>
            </section>

            <section className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              <p>
                Written by Peter Oduor Oluoch, Software Engineer, AI Solutions Architect, and Author.
              </p>
              <p className="mt-2">
                Author of AI for Young Thinkers, The Unwritten Life, and Engineering in the Age of AI.
              </p>
            </section>
          </motion.div>
        </section>
      </MainLayout>
    </>
  );
}

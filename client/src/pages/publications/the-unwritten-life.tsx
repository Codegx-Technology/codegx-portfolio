import { motion } from "framer-motion";
import { BookOpen, CreditCard, Download } from "lucide-react";
import { Head } from "@/components/head";
import { MainLayout } from "@/components/layouts/MainLayout";
import { IntelligentBackButton } from "@/components/ui/intelligent-back-button";

const sampleUrl = "https://petersolver.gumroad.com/l/ppggp";
const fullBookUrl = "https://petersolver.gumroad.com/l/qwjmoi";
const selarUrl = "https://selar.com/7112873187";

const explorationPoints = [
  "Why professional identity becomes difficult to separate from personal identity",
  "The hidden psychological challenges of retirement and life transition",
  "How to distinguish your capabilities from your job title",
  "The Skill Translation Matrix and transferable strengths",
  "Your Invisible Portfolio: the assets no institution can take away",
  "The Three-Pillar Life Design framework",
  "How purpose, contribution, discovery, and connection shape the next chapter",
  "Why meaning is constructed, not inherited",
];

const audiences = [
  "Professionals approaching retirement",
  "Retired professionals seeking renewed purpose",
  "Executives and business leaders",
  "Teachers, educators, and students",
  "Public servants and uniformed service personnel",
  "Entrepreneurs navigating major transitions",
  "Anyone seeking meaning, legacy, and contribution beyond traditional success",
];

export default function TheUnwrittenLife() {
  return (
    <>
      <Head
        title="The Unwritten Life | Founder Publications"
        description="The Unwritten Life by Peter Oduor Oluoch is a practical guide to identity, purpose, reinvention, and meaningful living beyond career and major life transitions."
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
                  src="/assets/publications/the-unwritten-life-cover.png"
                  alt="The Unwritten Life book cover"
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
                  Identity & Purpose
                </div>
                <h1 className="text-3xl font-bold leading-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
                  The Unwritten Life
                </h1>
                <p className="mt-3 text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                  Identity, Purpose, and What Remains When the Title Is Gone
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-5 md:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f7b42] dark:text-[#d6b464]">
                  Position
                </p>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  <p>Most books about retirement focus on money. This book focuses on identity.</p>
                  <p>
                    For many people, the hardest part of retirement, career change, or a major life transition is not
                    the loss of income. It is the loss of the person they thought they were.
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
                    A framework for the life after the role.
                  </h2>
                </div>
                <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  A practical guide to identity, purpose, reinvention, and meaningful living beyond career, retirement,
                  and major life transitions. It is not a retirement manual or a motivational book. It is a framework
                  for understanding what remains when titles, institutions, routines, and professional identities begin
                  to fall away.
                </p>
              </section>

              <section className="grid gap-8 py-8 lg:grid-cols-3">
                <div className="lg:col-span-1">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f7b42] dark:text-[#d6b464]">
                    The question at the heart of the book
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                    Who are you when the role is gone?
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 dark:text-slate-300">
                    Retirement arrives. A career ends. A business is sold. A title disappears. The calendar empties.
                    And an unexpected question appears: what now?
                  </p>
                </div>
              </section>

              <section className="py-8">
                <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                  <h2 className="text-2xl font-bold text-slate-950 dark:text-white">What You Will Explore</h2>
                  <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {explorationPoints.map((point) => (
                      <div
                        key={point}
                        className="border-t border-border/70 pt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="grid gap-8 py-8 lg:grid-cols-2">
                <div className="border-l border-[#c8a951]/50 pl-5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#c8a951]/10 text-[#9f7b42] dark:text-[#d6b464]">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-950 dark:text-white">How It Works</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    The book draws on psychology, real-world portraits, and practical frameworks. Each chapter moves the
                    reader from uncertainty to clarity, not by providing easy answers, but by building the capacity to
                    ask sharper ones.
                  </p>
                </div>

                <div className="border-l border-border pl-5">
                  <h2 className="text-xl font-bold text-slate-950 dark:text-white">Who This Is For</h2>
                  <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:grid-cols-2">
                    {audiences.map((audience) => (
                      <li key={audience}>{audience}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="grid gap-8 py-8 lg:grid-cols-[0.85fr_1.15fr]">
                <h2 className="text-2xl font-bold text-slate-950 dark:text-white">What You Get</h2>
                <div>
                  <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                    A high-quality PDF edition ready to read on any device, designed for thoughtful reading,
                    reflection, and practical application. Paperback edition available separately.
                  </p>
                  <blockquote className="mt-5 border-l-2 border-[#c8a951] pl-4 text-sm font-medium text-slate-800 dark:text-slate-100">
                    "You are more than the institution that once gave your abilities somewhere to go."
                  </blockquote>
                </div>
              </section>
            </div>

            <section className="rounded-lg border border-[#c8a951]/30 bg-[#c8a951]/10 p-5 md:p-6">
              <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                  <h2 className="text-2xl font-bold text-slate-950 dark:text-white">Read Or Purchase</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    International readers can pay by card via Gumroad. Kenyan and East African readers can use M-Pesa
                    via Selar. A free sample chapter is also available on Gumroad.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
                  <a
                    href={fullBookUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-[#c8a951] px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-[#d8ba66]"
                  >
                    <CreditCard className="h-4 w-4" />
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
                  <a
                    href={selarUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-card dark:text-slate-100"
                  >
                    <CreditCard className="h-4 w-4" />
                    Pay With M-Pesa
                  </a>
                </div>
              </div>
            </section>

            <section className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              <p>Written by Peter Oduor Oluoch, Software Engineer, AI Architect, and Author.</p>
            </section>
          </motion.div>
        </section>
      </MainLayout>
    </>
  );
}

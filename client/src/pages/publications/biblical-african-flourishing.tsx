import { motion } from "framer-motion";
import { BookOpen, FileText, Landmark, ScrollText } from "lucide-react";
import { Link } from "wouter";
import { Head } from "@/components/head";
import { MainLayout } from "@/components/layouts/MainLayout";
import { IntelligentBackButton } from "@/components/ui/intelligent-back-button";

const fullBookUrl = "https://petersolver.gumroad.com/l/gyakjk";

const explorations = [
  "Why human dignity is grounded in the image of God, and what that does to every imperial claim on it",
  "The difference between blessing and guaranteed prosperity",
  "Bounded agency: why dignity and limits belong together",
  "Work versus toil, and the vocation of cultivation and keeping",
  "How rebellion against order compounds inside institutions",
  "Why capability is not moral order, and what the fratricidal city teaches",
  "Dead capital: why assets without institutions cannot become wealth",
  "Covenantal economics and the ethic of maintenance",
  "The force multipliers of agency",
  "How extractive path dependency gives way to sovereign governance",
  "Shalom as ordered flourishing across generations",
];

const structure = [
  "Introduction",
  "Ten chapters",
  "Epilogue",
  "Full bibliography",
  "Scripture index",
];

const audiences = [
  "Public servants, policy professionals, and governance practitioners",
  "Pastors, theologians, and ministry leaders",
  "Business owners, executives, and institution builders",
  "Engineers, planners, and technical professionals",
  "Entrepreneurs and investors working in African markets",
  "Development and civil-society practitioners",
  "Educators and students of theology, economics, and public life",
  "Readers in the diaspora who want a serious foundation, not a slogan",
  "Anyone who believes Africa's future is built, not awaited",
];

const receives = [
  "High-quality PDF edition ready to read on any device",
  "Designed for thoughtful reading, discussion, and practical application",
  "Full bibliography and scripture index",
];

export default function BiblicalAfricanFlourishing() {
  return (
    <>
      <Head
        title="Biblical African Flourishing | Founder Publications"
        description="Biblical African Flourishing by Peter Oduor Oluoch is a treatise on dignity, vocation, and the institutional architecture that turns them into intergenerational shalom."
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
                  src="/assets/publications/biblical-african-flourishing-cover.png"
                  alt="Biblical African Flourishing book cover"
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
                  Dignity, Vocation &amp; Institutions
                </div>
                <h1 className="text-3xl font-bold leading-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
                  Biblical African Flourishing
                </h1>
                <p className="mt-3 text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                  Dignity, Vocation, and the Institutional Architecture of Intergenerational Shalom
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-5 md:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f7b42] dark:text-[#d6b464]">
                  Position
                </p>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  <p>Most writing on African progress begins with grievance or with romance.</p>
                  <p>This book begins with architecture.</p>
                  <p>
                    Because dignity is not the same as outcome. A people can be created with full worth and
                    still live inside institutions that waste it.
                  </p>
                  <p>The question is not whether the dignity is real. It is what has been built to carry it.</p>
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
                    A treatise on what must be built.
                  </h2>
                </div>
                <div className="space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  <p>
                    A treatise on human dignity, vocation, and the institutions that turn either into lasting
                    flourishing.
                  </p>
                  <p>Not a development manual. Not a prosperity gospel. Not a grievance narrative.</p>
                  <p>
                    A framework that reads Genesis, institutional economics, and systems thinking together, and
                    asks what a society must build so that flourishing outlives the people who started it.
                  </p>
                </div>
              </section>

              <section className="grid gap-8 py-8 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f7b42] dark:text-[#d6b464]">
                    The Question At The Heart Of This Book
                  </p>
                  <h2 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">
                    What does it take to build a society that keeps its promises to the next generation?
                  </h2>
                </div>
                <div className="space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  <p>Capability alone does not answer it.</p>
                  <p>Neither do resources. Neither does effort.</p>
                  <p>Dignity is given. Flourishing has to be built, maintained, and handed on.</p>
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
                    The book moves from foundation to structure.
                  </h2>
                </div>
                <div className="space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  <p>
                    It begins with dignity, moves through vocation and limits, diagnoses what breaks, and ends
                    with the governance required to build.
                  </p>
                  <p>Each chapter adds one load-bearing idea. Together they form a single argument.</p>
                </div>
              </section>

              <section className="grid gap-8 py-8 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9f7b42] dark:text-[#d6b464]">
                    Structure
                  </p>
                  <h2 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">
                    Introduction, ten chapters, and an epilogue.
                  </h2>
                </div>
                <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {structure.map((item) => (
                    <div
                      key={item}
                      className="border-t border-border/70 pt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <section className="grid gap-8 py-8 lg:grid-cols-2">
              <div className="border-l border-[#c8a951]/50 pl-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#c8a951]/10 text-[#9f7b42] dark:text-[#d6b464]">
                  <Landmark className="h-5 w-5" />
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
                  <ScrollText className="h-5 w-5" />
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
                  Not to flatter. Not to accuse. To give the reader a way to think, build, and steward for
                  generations they will never see.
                </p>
                <blockquote className="border-l-2 border-[#c8a951] pl-4 text-base font-medium text-slate-800 dark:text-slate-100">
                  "Dignity is given. Flourishing is built."
                </blockquote>
              </div>
            </section>

            <section className="rounded-lg border border-[#c8a951]/30 bg-[#c8a951]/10 p-5 md:p-6">
              <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                  <h2 className="text-2xl font-bold text-slate-950 dark:text-white">Access</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    The PDF edition is available on Gumroad, where international readers can pay by card and
                    download instantly. Institutional reading and review copies can be requested directly from
                    Codegx Technologies.
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
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-[#c8a951]/60 px-5 py-3 text-sm font-semibold text-[#9f7b42] transition-colors hover:bg-[#c8a951]/10 dark:text-[#d6b464]"
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
                Author of The Unwritten Life, The Architecture of Resilience, Engineering in the Age of AI, and
                the AI for Young Thinkers series.
              </p>
            </section>
          </motion.div>
        </section>
      </MainLayout>
    </>
  );
}

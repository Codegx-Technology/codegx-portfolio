import { motion } from "framer-motion";
import { BookOpen, CreditCard, Download, ShoppingBag } from "lucide-react";
import { Head } from "@/components/head";
import { MainLayout } from "@/components/layouts/MainLayout";
import { IntelligentBackButton } from "@/components/ui/intelligent-back-button";

const sampleUrl = "https://petersolver.gumroad.com/l/htiese";
const fullBookUrl = "https://petersolver.gumroad.com/l/dlyfqv";
const selarUrl = "https://selar.com/u64y47d1l9";
const paperbackUrl = "https://www.amazon.co.uk/dp/B0H24K73M8";

const explorationPoints = [
  "How machines find patterns and make predictions",
  "Why AI sometimes confidently gets things wrong",
  "How recommendation systems decide what you see",
  "What deepfakes are and why they matter",
  "Machine bias, data privacy, and who owns information",
  "The difference between intelligence and wisdom",
];

const audiences = [
  "Children aged 8 to 14",
  "Parents and guardians",
  "Teachers and schools",
  "Homeschool communities",
  "Libraries and educational programmes",
  "African digital literacy initiatives",
];

export default function AIForYoungThinkers() {
  return (
    <MainLayout>
      <Head
        title="AI for Young Thinkers | Founder Publications"
        description="A story-led AI literacy book for children aged 8 to 14, set in a Kenyan village school."
      />

      <main className="px-safe mx-auto w-full overflow-hidden max-w-7xl">
        <section className="px-4 py-8 sm:px-6 md:py-14">
          <div className="mb-8 flex w-full justify-center sm:mb-10">
            <IntelligentBackButton fallbackHref="/publications" label="Back to Publications" />
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <motion.aside
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="lg:sticky lg:top-28"
            >
              <div className="rounded-lg border border-[#c8a951]/30 bg-[#c8a951]/5 p-3">
                <img
                  src="/assets/publications/ai-for-young-thinkers-cover.png"
                  alt="AI for Young Thinkers book cover"
                  className="mx-auto w-full max-w-xl rounded-md object-contain"
                />
              </div>
            </motion.aside>

            <motion.article
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="space-y-7"
            >
              <div className="inline-flex rounded-full border border-[#c8a951]/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#c8a951]">
                Education & AI Literacy
              </div>

              <div>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  AI for Young Thinkers
                </h1>
                <p className="mt-4 text-xl leading-relaxed text-slate-200">
                  A Journey Into the World of Thinking Machines
                </p>
              </div>

              <section className="rounded-lg border border-border/70 bg-background/40 p-5 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c8a951]">
                  Position
                </p>
                <div className="mt-5 space-y-4 text-lg leading-relaxed text-slate-200">
                  <p>Most books about AI teach children how to use technology.</p>
                  <p>This book teaches them how to think about it.</p>
                </div>
              </section>
            </motion.article>
          </div>

          <div className="mt-10 space-y-10">
            <div className="divide-y divide-border/80 border-y border-border/80">
              <section className="grid gap-8 py-8 lg:grid-cols-[0.85fr_1.15fr]">
                <h2 className="text-2xl font-bold text-white">What This Is</h2>
                <div className="space-y-4 text-lg leading-relaxed text-slate-300">
                  <p>A story-led book for children aged 8 to 14, set in a Kenyan village school.</p>
                  <p>Not a coding course. Not a tech tutorial.</p>
                  <p>A thinking curriculum built around story, conversation, and honest questions.</p>
                </div>
              </section>

              <section className="grid gap-8 py-8 lg:grid-cols-[0.85fr_1.15fr]">
                <h2 className="text-2xl font-bold text-white">The Story</h2>
                <div className="space-y-4 text-lg leading-relaxed text-slate-300">
                  <p>
                    Amina and Brian sit in their classroom with Teacher Njeri and begin to understand
                    what a thinking machine actually is, how it learns, how it gets things wrong, and
                    what that means for the world they are growing up in.
                  </p>
                  <p>Each chapter is a lesson disguised as a story.</p>
                </div>
              </section>
            </div>

            <section className="grid gap-8 py-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-white">What Young Readers Explore</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
                {explorationPoints.map((point) => (
                  <div key={point} className="border-l border-[#c8a951]/50 pl-5 text-slate-300">
                    {point}
                  </div>
                ))}
              </div>
            </section>

            <div className="divide-y divide-border/80 border-y border-border/80">
              <section className="grid gap-8 py-8 lg:grid-cols-[0.85fr_1.15fr]">
                <h2 className="text-2xl font-bold text-white">How It Works</h2>
                <div className="space-y-4 text-lg leading-relaxed text-slate-300">
                  <p>Each chapter follows the same structure.</p>
                  <p>
                    A story. A big idea. An activity that needs no devices or special equipment. And
                    a teacher's guide for the adult in the room.
                  </p>
                  <p>
                    Children are not asked to watch or listen. They are asked to question, reflect,
                    investigate, and think for themselves.
                  </p>
                </div>
              </section>

              <section className="grid gap-8 py-8 lg:grid-cols-[0.85fr_1.15fr]">
                <h2 className="text-2xl font-bold text-white">The Goal</h2>
                <div className="space-y-4 text-lg leading-relaxed text-slate-300">
                  <p>Not to raise children who merely consume technology.</p>
                  <p>To raise children capable of guiding it wisely.</p>
                </div>
              </section>
            </div>

            <section className="grid gap-8 py-8 lg:grid-cols-2">
              <div className="border-l border-[#c8a951]/50 pl-5">
                <h2 className="text-2xl font-bold text-white">Who This Is For</h2>
                <ul className="mt-5 space-y-3 text-slate-300">
                  {audiences.map((audience) => (
                    <li key={audience}>{audience}</li>
                  ))}
                </ul>
              </div>

              <div className="border-l border-border pl-5">
                <h2 className="text-2xl font-bold text-white">What You Get</h2>
                <div className="mt-5 space-y-4 text-lg leading-relaxed text-slate-300">
                  <p>High-quality PDF, ready to read on any device.</p>
                  <p>Paperback edition available separately on Amazon.</p>
                </div>
              </div>
            </section>

            <section className="rounded-lg border border-[#c8a951]/30 bg-[#c8a951]/10 p-5 md:p-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c8a951]">
                    Reading Options
                  </p>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-300">
                    International readers can pay by card via Gumroad. Kenyan and East African
                    readers can use M-Pesa via Selar. A free sample chapter is available on Gumroad,
                    and the paperback is available on Amazon.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[26rem]">
                  <a
                    href={fullBookUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-[#c8a951] px-5 py-3 font-semibold text-[#0f172a] transition hover:bg-[#d9bd69]"
                  >
                    <BookOpen className="h-4 w-4" />
                    Buy Full Book
                  </a>
                  <a
                    href={sampleUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-[#c8a951]/50 px-5 py-3 font-semibold text-[#c8a951] transition hover:bg-[#c8a951]/10"
                  >
                    <Download className="h-4 w-4" />
                    Read Free Sample
                  </a>
                  <a
                    href={selarUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background/40 px-5 py-3 font-semibold text-white transition hover:bg-background/70"
                  >
                    <CreditCard className="h-4 w-4" />
                    Pay With M-Pesa
                  </a>
                  <a
                    href={paperbackUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background/40 px-5 py-3 font-semibold text-white transition hover:bg-background/70"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Paperback on Amazon
                  </a>
                </div>
              </div>
            </section>

            <section className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              <p>Written by Peter Oduor Oluoch, Software Engineer, AI Architect, and Author.</p>
              <p className="mt-4 text-base italic text-slate-300">
                "The machine has the gears, but you have the soul."
              </p>
            </section>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Compass, GraduationCap, ShieldCheck } from "lucide-react";
import { Head } from "@/components/head";
import { MainLayout } from "@/components/layouts/MainLayout";
import { IntelligentBackButton } from "@/components/ui/intelligent-back-button";

const books = [
  {
    title: "Engineering in the Age of AI",
    subtitle: "The sovereign engineering mandate for the era of autonomous systems",
    category: "Engineering & AI",
    year: "2026",
    description:
      "A systems-level field guide on engineering judgement, AI governance, code review, prompt interfaces, and technical autonomy in the age of autonomous tools.",
    excerpt: "AI produces code, not reliability.",
    icon: ShieldCheck,
  },
  {
    title: "AI for Young Thinkers",
    subtitle: "A Journey into the World of Thinking Machines",
    category: "Education & AI Literacy",
    year: "2026",
    description:
      "A clear introduction to AI for young readers, parents, and teachers, centred on responsible curiosity, human judgement, and active digital citizenship.",
    excerpt: "The machine has the gears, but you have the soul.",
    icon: GraduationCap,
  },
  {
    title: "The Architecture of Resilience",
    subtitle: "A 365-Day Blueprint for Mental Sovereignty",
    category: "Resilience & Judgement",
    year: "2026",
    description:
      "A daily practice of reflection for leaders, builders, and professionals who need steadiness, discipline, and clarity under pressure.",
    excerpt: "A way of standing inside difficulty without being destroyed by it.",
    icon: Compass,
  },
  {
    title: "The Unwritten Life",
    subtitle: "Identity, Purpose, and What Remains When the Title Is Gone",
    category: "Identity & Purpose",
    year: "2025",
    description:
      "A reflective work on identity, transition, and rebuilding purpose when formal structures, roles, and titles fall away.",
    excerpt: "What nobody tells you about who you are when the structure stops.",
    icon: BookOpen,
  },
];

const threads = [
  "Engineering judgement in the age of automation",
  "Human agency, resilience, and responsible technology",
  "Learning systems that preserve clarity and ownership",
];

export default function Publications() {
  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Head
        title="Founder Publications | Codegx Technologies"
        description="Books by Peter O. Oluoch on engineering judgement, responsible AI, resilience, and the human side of technology."
      />

      <MainLayout withContainer={true} navbarVariant="default">
        <section className="px-4 py-8 sm:px-6 md:px-0 md:py-14">
          <IntelligentBackButton fallbackHref="/" align="center" className="mb-10" />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-4 inline-flex rounded-full border border-[#c8a951]/30 bg-[#c8a951]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#9f7b42] dark:text-[#d6b464]">
              Founder Publications
            </div>
            <h1 className="text-3xl font-bold leading-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              Books On Engineering, Judgement, And Human Agency
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
              Selected works by Peter O. Oluoch that sit behind the Codegx operating voice: disciplined engineering,
              responsible AI, resilient leadership, and technology that strengthens human judgement.
            </p>
          </motion.div>
        </section>

        <section className="px-4 py-6 sm:px-6 md:px-0 md:py-10">
          <div className="grid gap-4 md:grid-cols-2">
            {books.map((book, index) => {
              const Icon = book.icon;
              return (
                <motion.article
                  key={book.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={itemVariants}
                  transition={{ delay: index * 0.04 }}
                  className="rounded-lg border border-border bg-card p-5 transition-colors duration-300 hover:border-[#c8a951]/50 md:p-6"
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#c8a951]/10 text-[#9f7b42] dark:text-[#d6b464]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                      {book.year}
                    </div>
                  </div>

                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#9f7b42] dark:text-[#d6b464]">
                    {book.category}
                  </div>
                  <h2 className="text-xl font-bold leading-tight text-slate-950 dark:text-white md:text-2xl">
                    {book.title}
                  </h2>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-slate-500 dark:text-slate-400">
                    {book.subtitle}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {book.description}
                  </p>

                  <blockquote className="mt-6 border-l-2 border-[#c8a951] pl-4 text-sm font-medium text-slate-800 dark:text-slate-100">
                    "{book.excerpt}"
                  </blockquote>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="px-4 py-8 sm:px-6 md:px-0 md:py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={itemVariants}
            className="rounded-lg border border-border bg-[#111827] p-5 text-white dark:bg-[#15111a] md:p-7"
          >
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#d6b464]">
                  Editorial Thread
                </div>
                <h2 className="text-2xl font-bold md:text-3xl">A library that supports the operating mandate.</h2>
              </div>
              <div className="space-y-4 lg:col-span-8">
                {threads.map((thread) => (
                  <div key={thread} className="flex items-center gap-3 border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                    <div className="h-2.5 w-2.5 rotate-45 bg-[#d6b464]" />
                    <p className="text-sm font-medium text-slate-200">{thread}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="px-4 pb-12 pt-4 sm:px-6 md:px-0">
          <div className="rounded-lg border border-border bg-card p-5 text-center md:p-7">
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">Publication Enquiries</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              For speaking, education, institutional reading, or publication enquiries, contact Codegx Technologies.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-[#c8a951]/60 px-5 py-3 text-sm font-semibold text-[#9f7b42] transition-colors hover:bg-[#c8a951]/10 dark:text-[#d6b464]"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </MainLayout>
    </>
  );
}

import { motion } from "framer-motion";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Head } from "@/components/head";
import { PageBackNav } from "@/components/ui/page-back-nav";

const terms = [
  {
    title: "1. Acceptance",
    content:
      "By using this website or requesting services from Codegx Technologies, you agree to use the site lawfully and in line with these terms. If a signed agreement or statement of work applies, that document governs the engagement.",
  },
  {
    title: "2. Website Content",
    content:
      "The site explains our services, Wakala OS, platform work, delivery approach, and operating principles. It is provided for general information and does not create a binding proposal, warranty, or service commitment unless confirmed in writing.",
  },
  {
    title: "3. Engagements and Deliverables",
    content:
      "Project scope, deliverables, timelines, fees, support terms, acceptance criteria, and operational responsibilities are defined through written agreements. We avoid implied obligations where clear delivery controls are required.",
  },
  {
    title: "4. Intellectual Property",
    content:
      "Codegx retains ownership of its pre-existing tools, methods, templates, architecture patterns, and platform assets. Client-specific deliverables and usage rights are handled under the relevant written agreement.",
  },
  {
    title: "5. Acceptable Use",
    content:
      "You must not misuse the site, interfere with its operation, attempt unauthorized access, copy protected assets, reverse engineer restricted materials, or submit unlawful, harmful, or misleading content.",
  },
  {
    title: "6. Accuracy and Availability",
    content:
      "We aim to keep website information accurate and useful, but the site is provided as available. Content may change as our services, products, and operating practices mature.",
  },
  {
    title: "7. Liability",
    content:
      "To the extent permitted by law, Codegx Technologies is not liable for indirect, incidental, or consequential losses arising from use of the website or reliance on general website content.",
  },
  {
    title: "8. Governing Law",
    content:
      "These terms are governed by the laws of Kenya unless a signed agreement states otherwise.",
  },
  {
    title: "9. Contact",
    content:
      "Questions about these terms can be sent to legal@codegxtechnologies.org or through https://codegxtechnologies.org.",
  },
];

export default function Terms() {
  return (
    <>
      <Head
        title="Terms of Service | Codegx Technologies"
        description="Terms governing use of the Codegx Technologies website and service engagement materials."
      />

      <MainLayout withContainer={true} navbarVariant="default">
        <PageBackNav fallbackHref="/" className="px-4 pt-8 sm:px-6 md:px-0" />

        <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 md:px-0 md:py-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="border-b border-slate-200 pb-8 dark:border-slate-800"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#b88a3d]">
              Website Terms
            </p>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Practical terms for using the Codegx website and understanding how formal delivery
              commitments are created.
            </p>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-500">
              Last reviewed: July 10, 2026
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            className="mt-10 divide-y divide-slate-200 dark:divide-slate-800"
          >
            {terms.map((section) => (
              <motion.section
                key={section.title}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                }}
                className="grid gap-3 py-6 md:grid-cols-[220px_1fr] md:gap-8"
              >
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {section.title}
                </h2>
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  {section.content}
                </p>
              </motion.section>
            ))}
          </motion.div>

          <div className="pt-10">
            <PageBackNav fallbackHref="/" />
          </div>
        </section>
      </MainLayout>
    </>
  );
}

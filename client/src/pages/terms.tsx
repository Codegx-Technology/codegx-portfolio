import { motion } from "framer-motion";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Head } from "@/components/head";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function Terms() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <Head
        title="Terms of Service | Codegx Technologies"
        description="Terms of Service for Codegx Technologies. Please read these terms carefully before using our website and services."
      />

      <MainLayout withContainer={true} navbarVariant="default">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6 md:mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm md:text-base">Back to Home</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-0"
        >
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-white leading-tight">
              Terms of Service
            </h1>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </motion.section>

        {/* Content */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="py-8 sm:py-10 md:py-12 max-w-4xl mx-auto space-y-8 sm:space-y-10 px-4 sm:px-6 md:px-0"
        >
          {[
            {
              title: "1. Agreement to Terms",
              content: "By accessing and using the codegxtechnologies.org website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
            },
            {
              title: "2. Use License",
              content: "Permission is granted to temporarily download one copy of the materials (information or software) on Codegx Technologies' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:\n• Modify or copy the materials\n• Use the materials for any commercial purpose or for any public display\n• Attempt to decompile or reverse engineer any software contained on the website\n• Remove any copyright or other proprietary notations from the materials\n• Transfer the materials to another person or 'mirror' the materials on any other server"
            },
            {
              title: "3. Disclaimer",
              content: "The materials on Codegx Technologies' website are provided on an 'as is' basis. Codegx Technologies makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
            },
            {
              title: "4. Limitations",
              content: "In no event shall Codegx Technologies or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Codegx Technologies' website."
            },
            {
              title: "5. Accuracy of Materials",
              content: "The materials appearing on Codegx Technologies' website could include technical, typographical, or photographic errors. Codegx Technologies does not warrant that any of the materials on its website are accurate, complete, or current. Codegx Technologies may make changes to the materials contained on its website at any time without notice."
            },
            {
              title: "6. Links",
              content: "Codegx Technologies has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Codegx Technologies of the site. Use of any such linked website is at the user's own risk."
            },
            {
              title: "7. Modifications",
              content: "Codegx Technologies may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service."
            },
            {
              title: "8. Governing Law",
              content: "These terms and conditions are governed by and construed in accordance with the laws of Kenya, and you irrevocably submit to the exclusive jurisdiction of the courts in that location."
            },
            {
              title: "9. Contact Information",
              content: "If you have any questions about these Terms of Service, please contact us at:\n\nCodegx Technologies\nEmail: legal@codegxtechnologies.org\nWebsite: https://codegxtechnologies.org"
            },
          ].map((section, index) => (
            <motion.div key={index} variants={itemVariants} className="space-y-3 sm:space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                {section.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 whitespace-pre-line leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </motion.section>
      </MainLayout>
    </>
  );
}


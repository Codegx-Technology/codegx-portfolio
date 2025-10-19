import { motion } from "framer-motion";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Head } from "@/components/head";

export default function Privacy() {
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
        title="Privacy Policy | Codegx Technologies"
        description="Privacy Policy for Codegx Technologies. Learn how we collect, use, and protect your personal information."
      />

      <MainLayout withContainer={true} navbarVariant="default">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-6 md:py-8"
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-slate-900 dark:text-white">
              Privacy Policy
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
          className="py-6 md:py-8 max-w-4xl mx-auto space-y-6"
        >
          {[
            {
              title: "1. Introduction",
              content: "Codegx Technologies ('we', 'us', 'our', or 'Company') operates the codegxtechnologies.org website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data."
            },
            {
              title: "2. Information Collection and Use",
              content: "We collect several different types of information for various purposes to provide and improve our Service to you.\n\nTypes of Data Collected:\n• Personal Data: Name, email address, phone number, company information\n• Usage Data: Browser type, IP address, pages visited, time and date of visits\n• Cookies and Tracking: We use cookies to track activity on our Service"
            },
            {
              title: "3. Use of Data",
              content: "Codegx Technologies uses the collected data for various purposes:\n• To provide and maintain our Service\n• To notify you about changes to our Service\n• To allow you to participate in interactive features\n• To provide customer support\n• To gather analysis or valuable information to improve our Service\n• To monitor the usage of our Service\n• To detect, prevent and address technical issues"
            },
            {
              title: "4. Security of Data",
              content: "The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security."
            },
            {
              title: "5. Changes to This Privacy Policy",
              content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last updated' date at the top of this Privacy Policy."
            },
            {
              title: "6. Contact Us",
              content: "If you have any questions about this Privacy Policy, please contact us at:\n\nCodegx Technologies\nEmail: privacy@codegxtechnologies.org\nWebsite: https://codegxtechnologies.org"
            },
          ].map((section, index) => (
            <motion.div key={index} variants={itemVariants} className="space-y-2">
              <h2 className="text-base md:text-lg font-bold text-slate-900 dark:text-white">
                {section.title}
              </h2>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 whitespace-pre-line leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </motion.section>
      </MainLayout>
    </>
  );
}


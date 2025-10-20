import { motion } from "framer-motion";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Head } from "@/components/head";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function Cookies() {
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
        title="Cookie Policy | Codegx Technologies"
        description="Cookie Policy for Codegx Technologies. Learn how we use cookies and similar tracking technologies."
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
              Cookie Policy
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
              title: "1. What Are Cookies?",
              content: "Cookies are small pieces of data stored on your device (computer, tablet, or mobile phone) when you visit a website. They help websites remember information about your visit, such as your preferences and login information."
            },
            {
              title: "2. How We Use Cookies",
              content: "Codegx Technologies uses cookies for the following purposes:\n\n• Essential Cookies: Required for the website to function properly\n• Performance Cookies: Help us understand how visitors use our website\n• Functional Cookies: Remember your preferences and settings\n• Marketing Cookies: Track your activity to show relevant advertisements\n• Analytics Cookies: Collect data about how you interact with our website"
            },
            {
              title: "3. Types of Cookies We Use",
              content: "Session Cookies: Temporary cookies that expire when you close your browser\n\nPersistent Cookies: Remain on your device for a specified period or until you delete them\n\nFirst-party Cookies: Set by Codegx Technologies\n\nThird-party Cookies: Set by our partners and service providers"
            },
            {
              title: "4. Third-Party Cookies",
              content: "We may allow third-party service providers to place cookies on your device for analytics, advertising, and other purposes. These providers include:\n\n• Google Analytics: For website traffic analysis\n• Social Media Platforms: For social sharing and tracking\n• Advertising Networks: For targeted advertising\n\nThese third parties have their own privacy policies governing their use of cookies."
            },
            {
              title: "5. Your Cookie Choices",
              content: "You can control cookies through your browser settings:\n\n• Accept all cookies\n• Reject all cookies\n• Accept only essential cookies\n• Customize which types of cookies to accept\n\nPlease note that disabling cookies may affect the functionality of our website."
            },
            {
              title: "6. How to Delete Cookies",
              content: "You can delete cookies from your device by:\n\n• Using your browser's settings to clear browsing data\n• Adjusting your privacy settings\n• Using third-party cookie management tools\n\nFor instructions specific to your browser, please visit your browser's help section."
            },
            {
              title: "7. Do Not Track",
              content: "Some browsers include a 'Do Not Track' feature. Currently, there is no industry standard for recognizing Do Not Track signals. Codegx Technologies does not currently respond to Do Not Track browser signals, but we provide you with choices regarding the collection and use of information as described in this policy."
            },
            {
              title: "8. Changes to This Cookie Policy",
              content: "We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website."
            },
            {
              title: "9. Contact Us",
              content: "If you have questions about our use of cookies, please contact us at:\n\nCodegx Technologies\nEmail: cookies@codegxtechnologies.org\nWebsite: https://codegxtechnologies.org"
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


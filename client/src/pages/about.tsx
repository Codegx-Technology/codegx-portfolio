import { motion } from "framer-motion";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Head } from "@/components/head";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

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
        title="About Codegx Technologies | Enterprise AI Solutions"
        description="Learn about Codegx Technologies - pioneering digital transformation through innovative AI and technology solutions for enterprises worldwide."
      />

      <MainLayout withContainer={true} navbarVariant="default">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-8 md:py-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              About Codegx Technologies
            </h1>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
              Pioneering digital transformation through innovative technology solutions for enterprises worldwide.
            </p>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-6 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              To empower organizations with cutting-edge AI and technology solutions that drive innovation, efficiency, and sustainable growth. We believe in transforming complex business challenges into opportunities for digital excellence.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Our Vision</h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              To be the trusted partner for enterprises seeking transformative technology solutions that create lasting competitive advantages. We envision a future where AI and innovation are accessible to organizations of all sizes.
            </p>
          </motion.div>
        </motion.section>

        {/* Core Values */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-6 md:py-10"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-slate-900 dark:text-white">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Innovation",
                description: "We continuously push boundaries to deliver cutting-edge solutions that solve real-world problems.",
              },
              {
                title: "Excellence",
                description: "We maintain the highest standards of quality in everything we do, from code to customer service.",
              },
              {
                title: "Integrity",
                description: "We operate with transparency and honesty, building trust with our clients and partners.",
              },
              {
                title: "Collaboration",
                description: "We believe in the power of teamwork and partnerships to achieve extraordinary results.",
              },
              {
                title: "Impact",
                description: "We measure success by the positive impact we create for our clients and their stakeholders.",
              },
              {
                title: "Sustainability",
                description: "We build solutions that are not only effective today but sustainable for the future.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800"
              >
                <h3 className="text-base md:text-lg font-semibold mb-2 text-slate-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* What We Do */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-6 md:py-10"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-slate-900 dark:text-white">
            What We Do
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <motion.div variants={itemVariants} className="space-y-1">
              <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white">
                AI & Machine Learning Solutions
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                We develop intelligent systems that learn from data and make informed decisions, helping organizations automate processes and gain competitive insights.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-1">
              <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white">
                Digital Transformation
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                We guide organizations through comprehensive digital transformation journeys, modernizing legacy systems and enabling new business models.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-1">
              <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white">
                Custom Software Development
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                We build bespoke software solutions tailored to your unique business needs, ensuring scalability, security, and performance.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-6 md:py-10 text-center"
        >
          <h2 className="text-lg md:text-2xl font-bold mb-3 text-slate-900 dark:text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-4 max-w-2xl mx-auto">
            Let's discuss how Codegx Technologies can help you achieve your digital transformation goals.
          </p>
          <Link href="/contact">
            <Button size="sm" className="rounded-full px-6 py-2 text-xs md:text-sm font-semibold">
              Get in Touch
            </Button>
          </Link>
        </motion.section>
      </MainLayout>
    </>
  );
}


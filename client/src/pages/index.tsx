import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import AgencyIntro from "@/components/Agency/AgencyIntro";
import AgencyServices from "@/components/Agency/AgencyServices";
import HeroUnified from "@/components/Landing/HeroUnified";
import FeaturedProjects from "@/components/Landing/FeaturedProjects";
import CallToAction from "@/components/Landing/CallToAction";

export default function Home() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Layout className="overflow-hidden">
      <AnimatePresence mode="wait">
        {/* Hero Section - Unified */}
        <HeroUnified />

        {/* About Section - Personal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <About />
        </motion.div>

        {/* Skills Section - Personal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <Skills />
        </motion.div>

        {/* Agency Intro Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          id="agency"
        >
          <div className="py-10 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-inter mb-4">Meet Our Agency</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Astella AI is the technology wing of Codegx Technology, specializing in cutting-edge solutions for businesses.
                </p>
              </div>
            </div>
          </div>
          <AgencyIntro />
        </motion.div>

        {/* Featured Projects Section - Combined */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <FeaturedProjects />
        </motion.div>

        {/* Agency Services Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div className="py-10 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-inter mb-4">Our Services</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We offer a comprehensive range of technology services to help businesses thrive in the digital age.
                </p>
              </div>
            </div>
          </div>
          <AgencyServices />
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <CallToAction />
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <Contact />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

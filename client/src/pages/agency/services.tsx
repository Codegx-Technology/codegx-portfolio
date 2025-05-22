import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import AgencyServices from "@/components/Agency/AgencyServices";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";

interface AgencyProfile {
  name: string;
  services: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export default function ServicesPage() {
  const { data: agencyProfile } = useQuery<AgencyProfile>({
    queryKey: ["/data/agencyProfile.json"],
    staleTime: Infinity,
  });

  // Set page title based on agency name
  useEffect(() => {
    document.title = agencyProfile ? `${agencyProfile.name} – Services` : "Agency – Services";
  }, [agencyProfile]);

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Section transition variants
  const sectionVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-white dark:bg-[#121212] text-[#2c1a22] dark:text-white"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Navbar />

      <main>
        {/* Hero Section */}
        <div className="relative py-20 overflow-hidden bg-gradient-to-br from-[#2c1a22] via-[#3d2128] to-[#2c1a22] dark:from-[#1f1a2c] dark:via-[#2a1f3d] dark:to-[#1f1a2c]">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 z-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 20 H40 M20 0 V40" stroke="currentColor" strokeWidth="0.5" fill="none" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center px-4 py-1.5 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-sm font-medium mb-4 border border-[#c8a951]/20 dark:border-[#9f7b42]/20"
              >
                <span className="flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#c8a951] dark:bg-[#9f7b42] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8a951] dark:bg-[#9f7b42]"></span>
                </span>
                What We Offer
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-white">
                Our <span className="text-[#c8a951] dark:text-[#9f7b42]">Services</span>
              </h1>

              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Explore our comprehensive range of services designed to help your business thrive in the digital landscape.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.section variants={sectionVariants}>
          <AgencyServices />
        </motion.section>

        {/* Additional Services Information */}
        <motion.section
          className="py-20 bg-white dark:bg-[#121212] relative overflow-hidden"
          variants={sectionVariants}
        >
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full translate-x-1/3 -translate-y-1/3 z-0"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full -translate-x-1/3 translate-y-1/3 z-0"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-[#1a1a1a] p-8 rounded-xl shadow-lg border border-gray-100 dark:border-[#2c1a22]/50"
              >
                <div className="inline-flex items-center px-4 py-1.5 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-sm font-medium mb-6 border border-[#c8a951]/20 dark:border-[#9f7b42]/20">
                  Our Process
                </div>

                <h2 className="text-3xl font-bold mb-6 text-[#2c1a22] dark:text-white">Our Approach</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  We believe in a collaborative approach to every project. Our team works closely with you to understand your unique challenges and goals, ensuring that our solutions are tailored to your specific needs.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 w-12 h-12 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center rounded-lg text-[#c8a951] dark:text-[#9f7b42]">
                      <i className="fas fa-lightbulb text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-[#2c1a22] dark:text-white">Discovery</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        We begin by understanding your business, goals, and challenges through in-depth consultations.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 w-12 h-12 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center rounded-lg text-[#c8a951] dark:text-[#9f7b42]">
                      <i className="fas fa-pencil-ruler text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-[#2c1a22] dark:text-white">Planning</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Our team creates a detailed roadmap and strategy tailored to your specific requirements.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 w-12 h-12 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center rounded-lg text-[#c8a951] dark:text-[#9f7b42]">
                      <i className="fas fa-code text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-[#2c1a22] dark:text-white">Development</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        We build your solution using cutting-edge technologies and best practices.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 w-12 h-12 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center rounded-lg text-[#c8a951] dark:text-[#9f7b42]">
                      <i className="fas fa-rocket text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-[#2c1a22] dark:text-white">Launch & Support</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        We ensure a smooth deployment and provide ongoing support and maintenance.
                      </p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-[#1a1a1a] p-8 rounded-xl shadow-lg border border-gray-100 dark:border-[#2c1a22]/50"
              >
                <div className="inline-flex items-center px-4 py-1.5 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-sm font-medium mb-6 border border-[#c8a951]/20 dark:border-[#9f7b42]/20">
                  Our Strengths
                </div>

                <h2 className="text-3xl font-bold mb-6 text-[#2c1a22] dark:text-white">Why Choose Us</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  With our expertise and dedication to excellence, we deliver solutions that drive real business results.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-[#2c1a22] p-6 rounded-lg shadow-md border border-gray-100 dark:border-[#3d2128] group hover:border-[#c8a951] dark:hover:border-[#9f7b42] transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42] mb-4 group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-users text-xl"></i>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-[#2c1a22] dark:text-white group-hover:text-[#c8a951] dark:group-hover:text-[#9f7b42] transition-colors">Expert Team</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Our team consists of experienced professionals with diverse skills and expertise.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-[#2c1a22] p-6 rounded-lg shadow-md border border-gray-100 dark:border-[#3d2128] group hover:border-[#c8a951] dark:hover:border-[#9f7b42] transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42] mb-4 group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-cogs text-xl"></i>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-[#2c1a22] dark:text-white group-hover:text-[#c8a951] dark:group-hover:text-[#9f7b42] transition-colors">Cutting-edge Technology</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      We stay at the forefront of technological advancements to deliver innovative solutions.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-[#2c1a22] p-6 rounded-lg shadow-md border border-gray-100 dark:border-[#3d2128] group hover:border-[#c8a951] dark:hover:border-[#9f7b42] transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42] mb-4 group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-chart-line text-xl"></i>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-[#2c1a22] dark:text-white group-hover:text-[#c8a951] dark:group-hover:text-[#9f7b42] transition-colors">Results-Driven</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Our focus is on delivering measurable results that help your business grow.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-[#2c1a22] p-6 rounded-lg shadow-md border border-gray-100 dark:border-[#3d2128] group hover:border-[#c8a951] dark:hover:border-[#9f7b42] transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42] mb-4 group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-headset text-xl"></i>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-[#2c1a22] dark:text-white group-hover:text-[#c8a951] dark:group-hover:text-[#9f7b42] transition-colors">Dedicated Support</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      We provide ongoing support and maintenance to ensure your solution continues to perform optimally.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-20 text-center"
            >
              <Link href="/contact">
                <a className="inline-flex items-center gap-2 bg-[#c8a951] hover:bg-[#c8a951]/90 text-[#2c1a22] dark:bg-[#9f7b42] dark:hover:bg-[#9f7b42]/90 dark:text-[#1f1a2c] px-8 py-4 rounded-md font-medium transition-colors">
                  <span>Get Started</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
      <BackToTop />
    </motion.div>
  );
}

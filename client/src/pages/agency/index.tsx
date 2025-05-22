import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import AgencyIntro from "@/components/Agency/AgencyIntro";
import AgencyServices from "@/components/Agency/AgencyServices";
import { useQuery } from "@tanstack/react-query";

interface AgencyProfile {
  name: string;
  tagline: string;
  description: string;
  logo: string;
  website: string;
  socials: {
    platform: string;
    url: string;
  }[];
  team?: {
    name: string;
    position: string;
    bio: string;
    photo: string;
    socials: {
      platform: string;
      url: string;
    }[];
  }[];
  testimonials?: {
    quote: string;
    author: string;
    position: string;
    photo: string;
  }[];
}

export default function AgencyPage() {
  const { data: agencyProfile } = useQuery<AgencyProfile>({
    queryKey: ["/data/agencyProfile.json"],
    staleTime: Infinity,
  });

  // Set page title based on agency name
  useEffect(() => {
    document.title = agencyProfile ? `${agencyProfile.name} – About` : "Astella AI – About";
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
          <motion.section variants={sectionVariants}>
            <AgencyIntro />
          </motion.section>

          <motion.section variants={sectionVariants}>
            <AgencyServices />
          </motion.section>

          {/* Team Section */}
          {agencyProfile?.team && agencyProfile.team.length > 0 && (
            <motion.section
              className="py-20 bg-white dark:bg-[#121212] relative overflow-hidden"
              variants={sectionVariants}
            >
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full translate-x-1/3 -translate-y-1/3 z-0"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full -translate-x-1/3 translate-y-1/3 z-0"></div>

              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
                >
                  <div className="inline-flex items-center px-4 py-1.5 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-sm font-medium mb-4 border border-[#c8a951]/20 dark:border-[#9f7b42]/20">
                    Our Experts
                  </div>

                  <h2 className="text-4xl font-bold mb-6 text-[#2c1a22] dark:text-white">
                    Meet Our <span className="text-[#c8a951] dark:text-[#9f7b42]">Team</span>
                  </h2>

                  <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                    Meet the talented professionals behind our innovative solutions.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {agencyProfile.team.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -10, transition: { duration: 0.2 } }}
                      className="bg-gray-50 dark:bg-[#1a1a1a] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-[#2c1a22]/50 group"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="relative mb-6">
                          {/* Background layers for depth */}
                          <div className="absolute -inset-1 rounded-full bg-[#c8a951]/20 dark:bg-[#9f7b42]/20 blur-sm"></div>

                          <div className="w-28 h-28 rounded-full overflow-hidden relative border-2 border-[#c8a951]/30 dark:border-[#9f7b42]/30">
                            <img
                              src={member.photo}
                              alt={member.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://via.placeholder.com/150?text=Team";
                              }}
                            />
                          </div>
                        </div>

                        <h3 className="text-xl font-bold mb-2 text-[#2c1a22] dark:text-white group-hover:text-[#c8a951] dark:group-hover:text-[#9f7b42] transition-colors">{member.name}</h3>
                        <p className="text-[#c8a951] dark:text-[#9f7b42] text-sm font-medium mb-4">{member.position}</p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-6">{member.bio}</p>

                        {member.socials && member.socials.length > 0 && (
                          <div className="flex space-x-4 mt-auto pt-4 border-t border-gray-200 dark:border-gray-800 w-full">
                            {member.socials.map((social, idx) => (
                              <motion.a
                                key={idx}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-[#c8a951]/10 dark:hover:bg-[#9f7b42]/10 text-gray-600 dark:text-gray-400 hover:text-[#c8a951] dark:hover:text-[#9f7b42] transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={`${member.name}'s ${social.platform}`}
                              >
                                <i className={getSocialIcon(social.platform)}></i>
                              </motion.a>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {/* Testimonials Section */}
          {agencyProfile?.testimonials && agencyProfile.testimonials.length > 0 && (
            <motion.section
              className="py-20 bg-gray-50 dark:bg-[#1a1a1a] relative overflow-hidden"
              variants={sectionVariants}
            >
              {/* Circuit pattern overlay */}
              <div className="absolute inset-0 z-0 opacity-5">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M0 50 H100 M50 0 V100 M25 25 L75 75 M75 25 L25 75" stroke="currentColor" strokeWidth="0.5" fill="none" />
                    <circle cx="50" cy="50" r="3" fill="currentColor" />
                    <circle cx="25" cy="25" r="2" fill="currentColor" />
                    <circle cx="75" cy="25" r="2" fill="currentColor" />
                    <circle cx="25" cy="75" r="2" fill="currentColor" />
                    <circle cx="75" cy="75" r="2" fill="currentColor" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
                </svg>
              </div>

              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
                >
                  <div className="inline-flex items-center px-4 py-1.5 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-sm font-medium mb-4 border border-[#c8a951]/20 dark:border-[#9f7b42]/20">
                    Client Success
                  </div>

                  <h2 className="text-4xl font-bold mb-6 text-[#2c1a22] dark:text-white">
                    What Our <span className="text-[#c8a951] dark:text-[#9f7b42]">Clients Say</span>
                  </h2>

                  <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                    Hear from the businesses and organizations we've helped transform.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {agencyProfile.testimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -10, transition: { duration: 0.2 } }}
                      className="bg-white dark:bg-[#2c1a22] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-[#3d2128] group"
                    >
                      <div className="flex flex-col h-full">
                        <div className="text-4xl text-[#c8a951] dark:text-[#9f7b42] mb-6 opacity-50 group-hover:opacity-100 transition-opacity">"</div>
                        <p className="text-gray-700 dark:text-gray-300 mb-8 italic flex-grow">{testimonial.quote}</p>
                        <div className="mt-auto flex items-center pt-6 border-t border-gray-200 dark:border-gray-800">
                          <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-[#c8a951]/20 dark:border-[#9f7b42]/20">
                            <img
                              src={testimonial.photo}
                              alt={testimonial.author}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://via.placeholder.com/150?text=Client";
                              }}
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-[#2c1a22] dark:text-white">{testimonial.author}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {/* CTA Section */}
          <motion.section
            className="py-20 relative overflow-hidden bg-gradient-to-br from-[#2c1a22] via-[#3d2128] to-[#2c1a22] dark:from-[#1f1a2c] dark:via-[#2a1f3d] dark:to-[#1f1a2c]"
            variants={sectionVariants}
          >
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 z-0 opacity-5">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="grid-pattern-cta" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 20 H40 M20 0 V40" stroke="currentColor" strokeWidth="0.5" fill="none" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid-pattern-cta)" />
              </svg>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to <span className="text-[#c8a951] dark:text-[#9f7b42]">Transform</span> Your Business?</h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
                  Let's discuss how our innovative solutions can help you achieve your business goals.
                </p>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[#c8a951] hover:bg-[#c8a951]/90 text-[#2c1a22] dark:bg-[#9f7b42] dark:hover:bg-[#9f7b42]/90 dark:text-[#1f1a2c] px-8 py-4 rounded-md font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-envelope"></i>
                  <span>Get in Touch</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.section>
        </main>

        <Footer />
        <BackToTop />
      </motion.div>
  );
}

// Function to get the appropriate social icon
function getSocialIcon(platform: string) {
  switch (platform.toLowerCase()) {
    case "linkedin":
      return "fab fa-linkedin";
    case "twitter":
      return "fab fa-twitter";
    case "github":
      return "fab fa-github";
    case "instagram":
      return "fab fa-instagram";
    case "facebook":
      return "fab fa-facebook";
    case "dribbble":
      return "fab fa-dribbble";
    case "youtube":
      return "fab fa-youtube";
    default:
      return "fas fa-link";
  }
}

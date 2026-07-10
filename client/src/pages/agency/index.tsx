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
    document.title = agencyProfile ? `${agencyProfile.name} - About` : "Wakala Agency - About";
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

          <motion.section
            className="relative overflow-hidden bg-white py-12 dark:bg-[#121212] md:py-16"
            variants={sectionVariants}
          >
            <div className="absolute inset-0 z-0 opacity-5">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="wakala-operating-model" x="0" y="0" width="44" height="44" patternUnits="userSpaceOnUse">
                  <path d="M0 22 H44 M22 0 V44" stroke="currentColor" strokeWidth="0.5" fill="none" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#wakala-operating-model)" />
              </svg>
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12">
                <div className="mb-3 inline-flex items-center rounded-full border border-[#c8a951]/20 bg-[#c8a951]/10 px-4 py-1.5 text-xs font-medium text-[#c8a951] dark:border-[#9f7b42]/20 dark:bg-[#9f7b42]/10 dark:text-[#9f7b42] md:text-sm">
                  Wakala Operating Model
                </div>
                <h2 className="text-2xl font-bold text-[#2c1a22] dark:text-white md:text-3xl">
                  The governed layer between intent and execution
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-gray-700 dark:text-gray-300 md:text-sm">
                  Wakala OS turns business intent into accountable workflow execution through routing, state, and enforcement patterns that Codegx can operate and extend.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3 md:gap-6">
                {[
                  {
                    label: "01",
                    title: "Routing Layer",
                    body: "Defines entry points, workflow handoffs, roles, and escalation paths before execution begins.",
                    icon: "fas fa-route",
                  },
                  {
                    label: "02",
                    title: "State Layer",
                    body: "Preserves operating context, evidence, and provenance across people, systems, and assisted workflows.",
                    icon: "fas fa-database",
                  },
                  {
                    label: "03",
                    title: "Enforcement Layer",
                    body: "Applies policy, observability, and audit boundaries so work remains traceable after launch.",
                    icon: "fas fa-shield-alt",
                  },
                ].map((layer) => (
                  <motion.div
                    key={layer.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    viewport={{ once: true }}
                    className="rounded-lg border border-gray-100 bg-gray-50 p-5 shadow-sm dark:border-[#2c1a22]/50 dark:bg-[#1a1a1a] md:p-6"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c8a951] dark:text-[#9f7b42]">{layer.label}</span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#c8a951]/10 text-[#c8a951] dark:bg-[#9f7b42]/10 dark:text-[#9f7b42]">
                        <i className={layer.icon}></i>
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#2c1a22] dark:text-white">{layer.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{layer.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            className="relative overflow-hidden bg-gray-50 py-12 dark:bg-[#15111a] md:py-16"
            variants={sectionVariants}
          >
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                <div>
                  <div className="mb-3 inline-flex items-center rounded-full border border-[#c8a951]/20 bg-[#c8a951]/10 px-4 py-1.5 text-xs font-medium text-[#c8a951] dark:border-[#9f7b42]/20 dark:bg-[#9f7b42]/10 dark:text-[#9f7b42] md:text-sm">
                    Operating Patterns
                  </div>
                  <h2 className="text-2xl font-bold text-[#2c1a22] dark:text-white md:text-3xl">
                    Where governed execution is becoming necessary
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  These are recurring operating problems Codegx sees across modern teams. Wakala OS gives them structure without making automation the whole product.
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-5">
                {[
                  {
                    title: "Lead & Intent Operations",
                    body: "Capture, qualify, route, and follow up on demand without losing context between channels.",
                  },
                  {
                    title: "Reception & Intake",
                    body: "Handle bookings, enquiries, triage, and escalation with visible ownership.",
                  },
                  {
                    title: "Content Operations",
                    body: "Coordinate research, drafting, review, publishing, and evidence trails.",
                  },
                  {
                    title: "Internal Reporting",
                    body: "Turn hiring, team, finance, and delivery workflows into accountable routines.",
                  },
                  {
                    title: "Document & CRM Workflows",
                    body: "Structure intake, classification, case movement, and customer records.",
                  },
                ].map((pattern, index) => (
                  <motion.div
                    key={pattern.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                    viewport={{ once: true }}
                    className="rounded-lg border border-gray-200 bg-white p-4 dark:border-[#2c1a22]/60 dark:bg-[#1a1a1a]"
                  >
                    <div className="mb-4 text-xs font-semibold text-[#c8a951] dark:text-[#9f7b42]">0{index + 1}</div>
                    <h3 className="text-sm font-bold leading-snug text-[#2c1a22] dark:text-white">{pattern.title}</h3>
                    <p className="mt-3 text-xs leading-relaxed text-gray-700 dark:text-gray-300">{pattern.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section variants={sectionVariants}>
            <AgencyServices />
          </motion.section>

          {agencyProfile?.team && agencyProfile.team.length > 0 && (
            <motion.section
              className="py-12 md:py-16 bg-white dark:bg-[#121212] relative overflow-hidden"
              variants={sectionVariants}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full translate-x-1/3 -translate-y-1/3 z-0"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full -translate-x-1/3 translate-y-1/3 z-0"></div>

              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-8 md:mb-12"
                >
                  <div className="inline-flex items-center px-4 py-1.5 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-xs md:text-sm font-medium mb-2 md:mb-3 border border-[#c8a951]/20 dark:border-[#9f7b42]/20">
                    Founder Stewardship
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3 text-[#2c1a22] dark:text-white">
                    The Vision Behind <span className="text-[#c8a951] dark:text-[#9f7b42]">Wakala OS</span>
                  </h2>

                  <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                    Wakala OS is led from the Codegx mandate: dependable software, governed operating infrastructure, and operational intelligence.
                  </p>
                </motion.div>

                <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8">
                  {agencyProfile.team.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50 shadow-lg transition-all duration-300 dark:border-[#2c1a22]/50 dark:bg-[#1a1a1a]"
                    >
                      <div className="grid gap-0 md:grid-cols-[1.15fr_0.85fr]">
                        <div className="relative min-h-[280px]">
                          <div className="absolute inset-0 bg-[#2c1a22]/20" />
                            <img
                              src={member.photo}
                              alt={member.name}
                              className="h-full min-h-[280px] w-full object-cover"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "/assets/brand/codegx-icon.png";
                              }}
                            />
                        </div>

                        <div className="flex flex-col justify-center p-6 md:p-8">
                          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#c8a951] dark:text-[#9f7b42]">
                            Founder
                          </div>
                          <h3 className="text-2xl font-bold mb-2 text-[#2c1a22] dark:text-white">{member.name}</h3>
                          <p className="text-[#c8a951] dark:text-[#9f7b42] text-sm font-medium mb-4">{member.position}, Codegx Technologies</p>
                          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">{member.bio}</p>

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
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

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

          <motion.section
            className="py-20 relative overflow-hidden bg-gradient-to-br from-[#2c1a22] via-[#3d2128] to-[#2c1a22] dark:from-[#1f1a2c] dark:via-[#2a1f3d] dark:to-[#1f1a2c]"
            variants={sectionVariants}
          >
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Build Workflows That Can Be <span className="text-[#c8a951] dark:text-[#9f7b42]">Governed</span></h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
                  Talk to Codegx about Wakala OS, governed workflows, and operating systems that need clear ownership after launch.
                </p>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[#c8a951] hover:bg-[#c8a951]/90 text-[#2c1a22] dark:bg-[#9f7b42] dark:hover:bg-[#9f7b42]/90 dark:text-[#1f1a2c] px-8 py-4 rounded-md font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-envelope"></i>
                  <span>Discuss Wakala OS</span>
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

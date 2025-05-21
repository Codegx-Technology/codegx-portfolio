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
      className="min-h-screen bg-background text-foreground"
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
              className="py-16 bg-background"
              variants={sectionVariants}
            >
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
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
                      className="bg-background rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-border"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                          <img
                            src={member.photo}
                            alt={member.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://via.placeholder.com/150?text=Team";
                            }}
                          />
                        </div>
                        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                        <p className="text-primary text-sm mb-3">{member.position}</p>
                        <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>

                        {member.socials && member.socials.length > 0 && (
                          <div className="flex space-x-3">
                            {member.socials.map((social, idx) => (
                              <motion.a
                                key={idx}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
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
              className="py-16 bg-muted/30"
              variants={sectionVariants}
            >
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
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
                      className="bg-background rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-border"
                    >
                      <div className="flex flex-col">
                        <div className="text-4xl text-primary mb-4">"</div>
                        <p className="text-muted-foreground mb-6 italic">{testimonial.quote}</p>
                        <div className="mt-auto flex items-center">
                          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
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
                            <h4 className="font-semibold">{testimonial.author}</h4>
                            <p className="text-sm text-muted-foreground">{testimonial.position}</p>
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
            className="py-16 bg-primary text-primary-foreground"
            variants={sectionVariants}
          >
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
                Let's discuss how our innovative solutions can help you achieve your business goals.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-md hover:bg-background/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-envelope"></i>
                <span>Get in Touch</span>
              </motion.a>
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

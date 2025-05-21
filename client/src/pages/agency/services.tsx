import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import AgencyServices from "@/components/Agency/AgencyServices";
import { useQuery } from "@tanstack/react-query";

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
      className="min-h-screen bg-background text-foreground"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Navbar />

      <main>
        <motion.section 
          className="py-16 bg-background"
          variants={sectionVariants}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our comprehensive range of services designed to help your business thrive in the digital landscape.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section variants={sectionVariants}>
          <AgencyServices />
        </motion.section>

        {/* Additional Services Information */}
        <motion.section 
          className="py-16 bg-background"
          variants={sectionVariants}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
                <p className="text-muted-foreground mb-6">
                  We believe in a collaborative approach to every project. Our team works closely with you to understand your unique challenges and goals, ensuring that our solutions are tailored to your specific needs.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                      <i className="fas fa-lightbulb text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold">Discovery</h3>
                      <p className="text-muted-foreground">
                        We begin by understanding your business, goals, and challenges through in-depth consultations.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                      <i className="fas fa-pencil-ruler text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold">Planning</h3>
                      <p className="text-muted-foreground">
                        Our team creates a detailed roadmap and strategy tailored to your specific requirements.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                      <i className="fas fa-code text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold">Development</h3>
                      <p className="text-muted-foreground">
                        We build your solution using cutting-edge technologies and best practices.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                      <i className="fas fa-rocket text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold">Launch & Support</h3>
                      <p className="text-muted-foreground">
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
              >
                <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
                <p className="text-muted-foreground mb-6">
                  With our expertise and dedication to excellence, we deliver solutions that drive real business results.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <div className="text-primary text-2xl mb-3">
                      <i className="fas fa-users"></i>
                    </div>
                    <h3 className="font-semibold mb-2">Expert Team</h3>
                    <p className="text-muted-foreground text-sm">
                      Our team consists of experienced professionals with diverse skills and expertise.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <div className="text-primary text-2xl mb-3">
                      <i className="fas fa-cogs"></i>
                    </div>
                    <h3 className="font-semibold mb-2">Cutting-edge Technology</h3>
                    <p className="text-muted-foreground text-sm">
                      We stay at the forefront of technological advancements to deliver innovative solutions.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <div className="text-primary text-2xl mb-3">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <h3 className="font-semibold mb-2">Results-Driven</h3>
                    <p className="text-muted-foreground text-sm">
                      Our focus is on delivering measurable results that help your business grow.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <div className="text-primary text-2xl mb-3">
                      <i className="fas fa-headset"></i>
                    </div>
                    <h3 className="font-semibold mb-2">Dedicated Support</h3>
                    <p className="text-muted-foreground text-sm">
                      We provide ongoing support and maintenance to ensure your solution continues to perform optimally.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
      <BackToTop />
    </motion.div>
  );
}

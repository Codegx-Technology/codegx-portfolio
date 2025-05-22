import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface AgencyProfile {
  services: Service[];
}

export function AgencyServices() {
  const { data: agencyProfile, isLoading, error } = useQuery<AgencyProfile>({
    queryKey: ["/data/agencyProfile.json"],
    staleTime: Infinity,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !agencyProfile) {
    return (
      <div className="bg-destructive/10 text-destructive p-4 rounded-lg">
        <p>Failed to load agency services. Please try again later.</p>
      </div>
    );
  }

  // Function to get the appropriate icon
  const getServiceIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "code":
        return "fas fa-code";
      case "mobile":
        return "fas fa-mobile-alt";
      case "brain":
        return "fas fa-brain";
      case "link":
        return "fas fa-link";
      case "palette":
        return "fas fa-palette";
      case "cloud":
        return "fas fa-cloud";
      case "chart":
        return "fas fa-chart-bar";
      case "bot":
        return "fas fa-robot";
      default:
        return "fas fa-cog";
    }
  };

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-[#121212]">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full translate-x-1/3 -translate-y-1/3 z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full -translate-x-1/3 translate-y-1/3 z-0"></div>

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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-sm font-medium mb-4 border border-[#c8a951]/20 dark:border-[#9f7b42]/20">
            What We Offer
          </div>

          <h2 className="text-4xl font-bold mb-6 text-[#2c1a22] dark:text-white">
            Our <span className="text-[#c8a951] dark:text-[#9f7b42]">Services</span>
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive range of digital solutions to help businesses thrive in the digital landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {agencyProfile.services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-gray-50 dark:bg-[#1a1a1a] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-[#2c1a22]/50 group"
            >
              <div className="w-16 h-16 rounded-lg bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42] mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${getServiceIcon(service.icon)} text-2xl`}></i>
              </div>

              <h3 className="text-xl font-bold mb-4 text-[#2c1a22] dark:text-white group-hover:text-[#c8a951] dark:group-hover:text-[#9f7b42] transition-colors">{service.title}</h3>

              <p className="text-gray-700 dark:text-gray-300">{service.description}</p>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                <a href="#" className="inline-flex items-center text-[#c8a951] dark:text-[#9f7b42] font-medium">
                  Learn More
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a href="/contact" className="inline-flex items-center gap-2 bg-[#c8a951] hover:bg-[#c8a951]/90 text-[#2c1a22] dark:bg-[#9f7b42] dark:hover:bg-[#9f7b42]/90 dark:text-[#1f1a2c] px-8 py-4 rounded-md font-medium transition-colors">
            <span>Get Started</span>
            <i className="fas fa-arrow-right"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default AgencyServices;

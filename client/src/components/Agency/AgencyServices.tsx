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
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of digital solutions to help businesses thrive in the digital landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {agencyProfile.services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                <i className={`${getServiceIcon(service.icon)} text-xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AgencyServices;

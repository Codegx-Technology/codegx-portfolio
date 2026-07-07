import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";

interface AgencyProfile {
  name: string;
  tagline: string;
  description: string;
  logo: string;
  website: string;
  services: {
    title: string;
    description: string;
    icon: string;
  }[];
  socials: {
    platform: string;
    url: string;
  }[];
}

export function HomeHero() {
  const { data: agencyProfile } = useQuery<AgencyProfile>({
    queryKey: ["/data/agencyProfile.json"],
    staleTime: Infinity,
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header id="hero" className="relative min-h-screen flex items-center overflow-x-hidden pt-20 w-full">
      {/* Structured background */}


      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 w-full">
        <div className="md:flex md:items-center md:justify-between">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-gray-100 mb-4">
              <span className="text-sm font-semibold text-gray-700">
                {agencyProfile?.name || "Codegx Technologies"}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-inter leading-tight">
              Unified Homepage
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed opacity-90">
              Welcome to the corporate homepage of Codegx Technologies, showcasing our comprehensive solutions and the specialized services of Wakala Agency.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/services">
                <Button
                  size="sm"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/30 rounded-full px-6 sm:px-8"
                >
                  <i className="fas fa-building mr-2"></i>Codegx Services
                </Button>
              </Link>
              <Link href="/agency">
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 rounded-full px-6 sm:px-8"
                >
                  <i className="fas fa-building mr-2"></i>Wakala Agency
                </Button>
              </Link>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto text-foreground hover:bg-background/80 rounded-full px-6 sm:px-8"
              >
                <i className="fas fa-envelope mr-2"></i>Contact
              </Button>
            </div>
            <div className="mt-10 flex space-x-5">
              <a
                href="https://github.com/peteroluoch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="https://linkedin.com/in/peteroduor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="https://twitter.com/peteroduor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hidden md:block md:w-1/2 pl-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-30"></div>
              <div className="relative bg-background rounded-lg p-6 shadow-xl">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <i className="fas fa-code text-3xl text-primary"></i>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Codegx Technologies</h3>
                  <p className="text-muted-foreground mb-4">
                    Enterprise software and automation for businesses and organizations
                  </p>
                  <div className="flex justify-center space-x-4 mb-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                        <i className="fas fa-user text-primary"></i>
                      </div>
                      <span className="text-sm">Services</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                        <i className="fas fa-cogs text-primary"></i>
                      </div>
                      <span className="text-sm">Wakala Agency</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Explore both sections to learn more about our services and expertise
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

export default HomeHero;

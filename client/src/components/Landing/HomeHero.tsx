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
    <header id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Abstract Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-screen bg-gradient-to-bl from-primary/5 to-transparent transform -skew-x-12"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="md:flex md:items-center md:justify-between">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 mb-4 backdrop-blur-sm">
              <span className="text-sm font-semibold text-primary">
                {agencyProfile?.name || "Codegx Technologies"}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-inter leading-tight">
              Unified <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Homepage</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed opacity-90">
              Welcome to the combined homepage of Codegx Technologies, featuring both our personal portfolio and Astella AI agency services.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/portfolio">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/30 rounded-full px-8"
                >
                  <i className="fas fa-user mr-2"></i>Personal Portfolio
                </Button>
              </Link>
              <Link href="/agency">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 rounded-full px-8"
                >
                  <i className="fas fa-building mr-2"></i>Astella AI Agency
                </Button>
              </Link>
              <Button
                size="lg"
                variant="ghost"
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:bg-background/80 rounded-full px-8"
              >
                <i className="fas fa-envelope mr-2"></i>Contact
              </Button>
            </div>
            <div className="mt-10 flex space-x-5">
              <a
                href="https://github.com/peteroduor"
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
                    Innovative technology solutions for businesses and organizations
                  </p>
                  <div className="flex justify-center space-x-4 mb-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                        <i className="fas fa-user text-primary"></i>
                      </div>
                      <span className="text-sm">Portfolio</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                        <i className="fas fa-robot text-primary"></i>
                      </div>
                      <span className="text-sm">Astella AI</span>
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

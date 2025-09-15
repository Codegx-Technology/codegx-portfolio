import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";

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

export default function MainHome() {
  const { data: agencyProfile, isLoading } = useQuery<AgencyProfile>({
    queryKey: ["/data/agencyProfile.json"],
    staleTime: Infinity,
  });

  // Function to get the appropriate social icon
  const getSocialIcon = (platform: string) => {
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
      default:
        return "fas fa-link";
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">
                Codegx<span className="text-primary">.Tech</span>
              </span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/agency" className="hover:text-primary transition">
                AI Agency
              </Link>
              <Link href="/portfolio" className="hover:text-primary transition">
                Portfolio
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Codegx Technologies
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {isLoading
                ? "Loading..."
                : agencyProfile?.tagline || "Transforming Ideas into Digital Reality"}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/agency">
                <Button size="lg" className="rounded-full">
                  Explore AI Agency
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="rounded-full">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">About Codegx Technologies</h2>
              <p className="text-muted-foreground mb-6">
                {isLoading
                  ? "Loading..."
                  : agencyProfile?.description ||
                    "Codegx Technologies is a forward-thinking software development company specializing in creating innovative digital solutions for businesses across various industries."}
              </p>
              <p className="text-muted-foreground mb-6">
                Our company operates through two main divisions:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                    <i className="fas fa-robot text-primary"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Agency</h3>
                    <p className="text-muted-foreground">
                      Our specialized AI division focused on developing intelligent solutions for businesses and government agencies.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                    <i className="fas fa-user-tie text-primary"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Personal Portfolio</h3>
                    <p className="text-muted-foreground">
                      The professional showcase of our founder's work, expertise, and achievements in software development.
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
              className="relative"
            >
              <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-xl">
                <img
                  src={isLoading ? "https://via.placeholder.com/600x400" : agencyProfile?.logo || "https://via.placeholder.com/600x400"}
                  alt="Codegx Technologies"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x400?text=Codegx+Technology";
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-lg shadow-lg border">
                <div className="flex space-x-3">
                  {!isLoading &&
                    agencyProfile?.socials.slice(0, 4).map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`Visit ${social.platform}`}
                      >
                        <i className={getSocialIcon(social.platform)}></i>
                      </a>
                    ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Divisions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our specialized divisions, each offering unique expertise and solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AI Agency Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-lg overflow-hidden shadow-lg border hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="fas fa-robot text-white text-5xl"></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">AI Agency</h3>
                <p className="text-muted-foreground mb-6">
                  Our AI division specializes in developing intelligent solutions using machine learning, natural language processing, and data analytics to solve complex business problems.
                </p>
                <Link href="/agency">
                  <Button className="w-full">
                    Explore AI Agency <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Portfolio Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-background rounded-lg overflow-hidden shadow-lg border hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-r from-emerald-500 to-teal-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="fas fa-user-tie text-white text-5xl"></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Personal Portfolio</h3>
                <p className="text-muted-foreground mb-6">
                  The professional showcase of our founder's work, featuring projects, skills, and achievements in software development, web design, and digital innovation.
                </p>
                <Link href="/portfolio">
                  <Button variant="outline" className="w-full">
                    View Portfolio <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      <BackToTop />
    </div>
  );
}

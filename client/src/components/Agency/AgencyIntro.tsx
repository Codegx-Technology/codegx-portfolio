import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
}

export function AgencyIntro() {
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
        <p>Failed to load agency profile. Please try again later.</p>
      </div>
    );
  }

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
      case "dribbble":
        return "fab fa-dribbble";
      case "youtube":
        return "fab fa-youtube";
      default:
        return "fas fa-link";
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center gap-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/3 flex justify-center lg:justify-start"
          >
            <div className="w-48 h-48 relative">
              <img
                src={agencyProfile.logo}
                alt={`${agencyProfile.name} logo`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback if image fails to load
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/150?text=Logo";
                }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {agencyProfile.name}
              </h1>
              <h2 className="text-xl md:text-2xl text-primary font-medium mb-4">
                {agencyProfile.tagline}
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                {agencyProfile.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <a
                  href={agencyProfile.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  <i className="fas fa-globe"></i>
                  <span>Visit Website</span>
                </a>

                {/* Social Links */}
                <div className="flex gap-3">
                  {agencyProfile.socials.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Visit ${agencyProfile.name} on ${social.platform}`}
                    >
                      <i className={getSocialIcon(social.platform)}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AgencyIntro;

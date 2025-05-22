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
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2c1a22] via-[#3d2128] to-[#2c1a22] dark:from-[#1f1a2c] dark:via-[#2a1f3d] dark:to-[#1f1a2c] z-0"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 H40 M20 0 V40" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-full translate-x-1/3 translate-y-1/3 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/3 flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Background layers for depth */}
              <div className="absolute -right-6 -bottom-6 left-6 top-6 border-2 border-[#c8a951]/20 dark:border-[#9f7b42]/20 rounded-xl"></div>
              <div className="absolute -right-3 -bottom-3 left-9 top-9 border-2 border-[#c8a951]/10 dark:border-[#9f7b42]/10 rounded-xl"></div>

              <div className="w-64 h-64 relative bg-[#2c1a22]/50 dark:bg-[#1f1a2c]/50 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-[#c8a951]/20 dark:border-[#9f7b42]/20">
                <img
                  src={agencyProfile.logo}
                  alt={`${agencyProfile.name} logo`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback if image fails to load
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/150?text=Logo";
                  }}
                />

                {/* Glowing effect */}
                <div className="absolute inset-0 bg-[#c8a951]/5 dark:bg-[#9f7b42]/5 rounded-xl filter blur-xl opacity-50"></div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center px-4 py-1.5 bg-[#c8a951]/10 dark:bg-[#9f7b42]/10 rounded-full text-[#c8a951] dark:text-[#9f7b42] text-sm font-medium mb-4 border border-[#c8a951]/20 dark:border-[#9f7b42]/20"
              >
                <span className="flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#c8a951] dark:bg-[#9f7b42] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8a951] dark:bg-[#9f7b42]"></span>
                </span>
                Innovation Through AI
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4">
                {agencyProfile.name}
              </h1>

              <h2 className="text-xl md:text-2xl text-[#c8a951] dark:text-[#9f7b42] font-medium mb-6">
                {agencyProfile.tagline}
              </h2>

              <p className="text-xl text-slate-300 mb-8 max-w-2xl">
                {agencyProfile.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <a
                    href={agencyProfile.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#c8a951] hover:bg-[#c8a951]/90 text-[#2c1a22] dark:bg-[#9f7b42] dark:hover:bg-[#9f7b42]/90 dark:text-[#1f1a2c] px-6 py-3 rounded-md font-medium transition-colors"
                  >
                    <i className="fas fa-globe"></i>
                    <span>Visit Website</span>
                  </a>
                </motion.div>

                {/* Social Links */}
                <div className="flex gap-3">
                  {agencyProfile.socials.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-[#c8a951]/10 dark:hover:bg-[#9f7b42]/10 text-white hover:text-[#c8a951] dark:hover:text-[#9f7b42] transition-colors"
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

import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
  icon?: string;
  isAgencyLink?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
  isAgencySection?: boolean;
}

interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

interface FooterProps {
  className?: string;
  companyName?: string;
  companyDescription?: string;
  sections?: FooterSection[];
  socialLinks?: SocialLink[];
  showSocial?: boolean;
  showLegal?: boolean;
  showNewsletter?: boolean;
  isAgencyPage?: boolean;
  variant?: "default" | "minimal" | "expanded";
}

/**
 * Enterprise-grade footer with sections: About, Links, Contact, Social
 */
export function Footer({
  className,
  companyName = "Codegx Technologies",
  companyDescription = "Pioneering digital transformation through innovative technology solutions for enterprises worldwide.",
  sections,
  socialLinks,
  showSocial = true,
  showLegal = true,
  showNewsletter = true,
  isAgencyPage = false,
  variant = "default",
}: FooterProps) {
  // Default footer sections for Codegx Technologies (parent company)
  const codegxSections: FooterSection[] = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about", icon: "fas fa-info-circle" },
        { label: "Our Team", href: "/team", icon: "fas fa-users" },
        { label: "Contact", href: "/contact", icon: "fas fa-envelope" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Enterprise Solutions", href: "/solutions/enterprise", icon: "fas fa-building" },
        { label: "Digital Transformation", href: "/solutions/digital-transformation", icon: "fas fa-sync" },
        { label: "Custom Development", href: "/solutions/custom-development", icon: "fas fa-code" },
      ],
    },
    {
      title: "Our Agencies",
      links: [
        {
          label: "Astella AI",
          href: "/agency",
          icon: "fas fa-robot",
          isAgencyLink: true
        },
        {
          label: "Portfolio",
          href: "/portfolio",
          icon: "fas fa-user-tie"
        },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog", icon: "fas fa-rss" },
        { label: "Case Studies", href: "/case-studies", icon: "fas fa-file-alt" },
        { label: "Documentation", href: "/docs", icon: "fas fa-book", external: true },
        { label: "Support", href: "/support", icon: "fas fa-headset" },
      ],
    },
  ];

  // Default footer sections for Astella AI (agency)
  const astellaSections: FooterSection[] = [
    {
      title: "Astella AI",
      isAgencySection: true,
      links: [
        { label: "Why Astella", href: "/why-astella", icon: "fas fa-star", isAgencyLink: true },
        { label: "AI Services", href: "/agency/services", icon: "fas fa-cogs", isAgencyLink: true },
        { label: "AI Projects", href: "/agency/projects", icon: "fas fa-project-diagram", isAgencyLink: true },
        { label: "Contact Astella", href: "/agency/contact", icon: "fas fa-envelope", isAgencyLink: true },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy", icon: "fas fa-shield-alt" },
        { label: "Terms of Service", href: "/terms", icon: "fas fa-gavel" },
        { label: "Cookie Policy", href: "/cookies", icon: "fas fa-cookie" },
      ],
    },
  ];

  // Default social links
  const defaultSocialLinks: SocialLink[] = [
    { platform: "LinkedIn", href: "https://linkedin.com/company/codegx-technologies", icon: "fab fa-linkedin" },
    { platform: "Twitter", href: "https://twitter.com/codegxtech", icon: "fab fa-twitter" },
    { platform: "GitHub", href: "https://github.com/Codegx-Technology", icon: "fab fa-github" },
    { platform: "Instagram", href: "https://instagram.com/codegxtech", icon: "fab fa-instagram" },
  ];

  // Agency social links
  const agencySocialLinks: SocialLink[] = [
    { platform: "LinkedIn", href: "https://linkedin.com/company/astella-ai", icon: "fab fa-linkedin" },
    { platform: "Twitter", href: "https://twitter.com/astella_ai", icon: "fab fa-twitter" },
    { platform: "GitHub", href: "https://github.com/astella-ai", icon: "fab fa-github" },
  ];

  // Determine which sections and company info to use based on isAgencyPage
  const activeSections = sections || (isAgencyPage ? astellaSections : codegxSections);
  const activeSocialLinks = socialLinks || (isAgencyPage ? agencySocialLinks : defaultSocialLinks);
  const activeCompanyName = isAgencyPage ? "Astella AI" : companyName;
  const activeCompanyDescription = isAgencyPage
    ? "A stellar force for AI innovation in enterprise, education, and public service."
    : companyDescription;

  // Current year for copyright
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    },
  };

  return (
    <footer
      className={cn(
        "relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8",
        variant === "default"
          ? "bg-[#2c1a22] dark:bg-[#1f1a2c] text-slate-200"
          : variant === "minimal"
            ? "bg-background border-t border-border"
            : "bg-[#2c1a22] dark:bg-[#1f1a2c] text-slate-200 py-24",
        className
      )}
    >
      {/* AI-themed background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {/* Circuit board pattern */}
        <div className="absolute inset-0 z-0">
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

        {/* Neural network nodes */}
        <div className="absolute inset-0 z-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <g fill="currentColor" opacity="0.5">
              {Array.from({ length: 20 }).map((_, i) => (
                <circle
                  key={i}
                  cx={`${Math.random() * 100}%`}
                  cy={`${Math.random() * 100}%`}
                  r={Math.random() * 3 + 1}
                />
              ))}
            </g>
          </svg>
        </div>
      </div>

      {/* Diagonal divider at the top */}
      <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden">
        <div className="absolute inset-0 bg-background dark:bg-background transform -skew-y-2"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hexagonal grid layout for main content */}
        <div className="relative">
          {/* Company Info - Centered at the top with hexagonal shape */}
          <motion.div
            className="relative z-20 mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div
              className="inline-block"
              variants={itemVariants}
            >
              <div className="relative">
                <div className="bg-[#c8a951] dark:bg-[#9f7b42] w-20 h-20 mx-auto mb-6 flex items-center justify-center relative overflow-hidden shadow-lg rounded-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c8a951] to-[#d4b968] dark:from-[#9f7b42] dark:to-[#b08c4f] opacity-80"></div>
                  <div className="relative z-10">
                    <span className="font-extrabold text-3xl tracking-tighter text-[#2c1a22] dark:text-[#1f1a2c]">
                      {isAgencyPage ? "AI" : "CT"}
                    </span>
                  </div>

                  {/* Pulsing effect */}
                  <motion.div
                    className="absolute inset-0 bg-[#c8a951] dark:bg-[#9f7b42]"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                </div>

                {/* Connecting lines */}
                <svg className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-2 w-40 h-8" xmlns="http://www.w3.org/2000/svg">
                  <line x1="50%" y1="0" x2="20%" y2="100%" stroke="#c8a951" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#c8a951" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="50%" y1="0" x2="80%" y2="100%" stroke="#c8a951" strokeWidth="1" strokeDasharray="2 2" />
                </svg>
              </div>

              <motion.h3
                className="text-2xl font-bold text-white mt-2"
                variants={itemVariants}
              >
                {activeCompanyName}
              </motion.h3>

              <motion.p
                className="text-sm text-slate-300 mt-3 max-w-lg mx-auto"
                variants={itemVariants}
              >
                {activeCompanyDescription}
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Main content in a neural network-inspired layout */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Left side - Newsletter */}
            {showNewsletter && (
              <motion.div
                className="md:col-span-4 relative"
                variants={itemVariants}
              >
                <div className="bg-[#4d2c35]/30 dark:bg-[#3d2a5d]/30 backdrop-blur-sm p-6 rounded-lg border border-[#4d2c35] dark:border-[#3d2a5d] relative overflow-hidden">
                  {/* Neural network background */}
                  <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <pattern id="neural-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                        <circle cx="25" cy="25" r="1" fill="currentColor" />
                        <circle cx="12.5" cy="12.5" r="1" fill="currentColor" />
                        <circle cx="37.5" cy="12.5" r="1" fill="currentColor" />
                        <circle cx="12.5" cy="37.5" r="1" fill="currentColor" />
                        <circle cx="37.5" cy="37.5" r="1" fill="currentColor" />
                        <path d="M25 25 L12.5 12.5 M25 25 L37.5 12.5 M25 25 L12.5 37.5 M25 25 L37.5 37.5" stroke="currentColor" strokeWidth="0.5" />
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#neural-pattern)" />
                    </svg>
                  </div>

                  <h4 className="font-semibold mb-3 text-[#c8a951] dark:text-[#9f7b42] relative z-10">
                    <i className="fas fa-robot mr-2"></i>
                    AI-Powered Updates
                  </h4>

                  <p className="text-sm text-slate-300 mb-4 relative z-10">
                    Subscribe to receive the latest AI insights and technology updates from our team.
                  </p>

                  <div className="relative z-10">
                    <div className="flex flex-col space-y-2">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="bg-[#2c1a22]/70 dark:bg-[#1f1a2c]/70 border border-[#4d2c35] dark:border-[#3d2a5d] rounded-md px-4 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-[#c8a951] dark:focus:ring-[#9f7b42]"
                      />
                      <button className="bg-[#c8a951] dark:bg-[#9f7b42] text-[#2c1a22] dark:text-[#1f1a2c] px-4 py-2 rounded-md font-medium text-sm hover:bg-[#c8a951]/90 dark:hover:bg-[#9f7b42]/90 transition-colors w-full">
                        <i className="fas fa-paper-plane mr-2"></i>
                        Subscribe
                      </button>
                    </div>
                  </div>

                  {/* Social Links */}
                  {showSocial && (
                    <div className="mt-6 relative z-10">
                      <h5 className="text-xs uppercase tracking-wider text-slate-400 mb-3">Connect With Us</h5>
                      <div className="flex gap-3 sm:gap-4">
                        {activeSocialLinks.map((social, index) => (
                          <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-[#4d2c35]/50 dark:bg-[#3d2a5d]/50 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42] hover:bg-[#4d2c35] dark:hover:bg-[#3d2a5d] transition-colors"
                            aria-label={`Visit ${social.platform} profile`}
                          >
                            <i className={social.icon}></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Center/Right - Footer Sections in a neural network layout */}
            <motion.div
              className={cn(
                "grid gap-8",
                showNewsletter
                  ? "md:col-span-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  : "md:col-span-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              )}
              variants={containerVariants}
            >
              {activeSections.map((section, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  variants={itemVariants}
                  custom={index}
                >
                  {/* Hexagonal connector at the top */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-4 w-8 h-8 flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#c8a951] dark:bg-[#9f7b42] transform rotate-45"></div>
                  </div>

                  <div className="pt-6">
                    <h4 className="font-semibold mb-4 text-[#c8a951] dark:text-[#9f7b42] flex items-center">
                      <i className={section.isAgencySection ? "fas fa-robot mr-2" : "fas fa-network-wired mr-2"}></i>
                      {section.title}
                    </h4>

                    <ul className="space-y-3 text-sm relative">
                      {/* Vertical connector line */}
                      <div className="absolute top-0 bottom-0 left-2.5 w-px bg-[#4d2c35] dark:bg-[#3d2a5d]"></div>

                      {section.links.map((link, linkIndex) => (
                        <motion.li
                          key={linkIndex}
                          className="relative"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {/* Horizontal connector */}
                          <div className="absolute top-1/2 left-2.5 w-3 h-px bg-[#4d2c35] dark:bg-[#3d2a5d]"></div>

                          {link.external ? (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center pl-7 text-slate-300 hover:text-[#c8a951] dark:hover:text-[#9f7b42] transition-colors"
                            >
                              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                                <i className={`${link.icon || "fas fa-link"} text-xs text-[#c8a951]/70 dark:text-[#9f7b42]/70`}></i>
                              </span>
                              {link.label}
                            </a>
                          ) : (
                            <Link 
                              href={link.href}
                              className="flex items-center pl-7 text-slate-300 hover:text-[#c8a951] dark:hover:text-[#9f7b42] transition-colors"
                            >
                              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                                <i className={`${link.icon || "fas fa-link"} text-xs text-[#c8a951]/70 dark:text-[#9f7b42]/70`}></i>
                              </span>
                              {link.label}
                            </Link>
                          )}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar with circuit board pattern */}
        <div className="mt-16 pt-8 border-t border-[#4d2c35]/50 dark:border-[#3d2a5d]/50 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 relative">
          {/* Circuit pattern */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c8a951]/30 dark:via-[#9f7b42]/30 to-transparent"></div>

          <div className="mb-4 md:mb-0 flex items-center">
            <div className="w-5 h-5 mr-2 relative">
              <div className="absolute inset-0 bg-[#c8a951]/20 dark:bg-[#9f7b42]/20 rounded-full animate-ping"></div>
              <div className="relative w-full h-full bg-[#c8a951] dark:bg-[#9f7b42] rounded-full flex items-center justify-center">
                <i className="fas fa-microchip text-[8px] text-[#2c1a22] dark:text-[#1f1a2c]"></i>
              </div>
            </div>
            &copy; {currentYear} {activeCompanyName}. All rights reserved.
          </div>

          {/* Developer attribution */}
          <div className="mb-4 md:mb-0 text-center">
            <span className="flex items-center justify-center">
              <i className="fas fa-code text-[10px] mr-1 text-[#c8a951] dark:text-[#9f7b42]"></i>
              Developed by <Link href="/">
                <a className="mx-1 hover:text-[#c8a951] dark:hover:text-[#9f7b42] transition-colors">
                  Codegx Technologies
                </a>
              </Link>, <a href="https://progressivevillage.org" target="_blank" rel="noopener noreferrer" className="mx-1 hover:text-[#c8a951] dark:hover:text-[#9f7b42] transition-colors">
                Progressive Village
              </a>
            </span>
          </div>

          {showLegal && (
            <div className="flex space-x-6">
              <Link href="/privacy">
                <a className="hover:text-[#c8a951] dark:hover:text-[#9f7b42] transition-colors flex items-center">
                  <i className="fas fa-shield-alt mr-1 text-[10px]"></i>
                  Privacy
                </a>
              </Link>
              <Link href="/terms">
                <a className="hover:text-[#c8a951] dark:hover:text-[#9f7b42] transition-colors flex items-center">
                  <i className="fas fa-gavel mr-1 text-[10px]"></i>
                  Terms
                </a>
              </Link>
              <Link href="/cookies">
                <a className="hover:text-[#c8a951] dark:hover:text-[#9f7b42] transition-colors flex items-center">
                  <i className="fas fa-cookie mr-1 text-[10px]"></i>
                  Cookies
                </a>
              </Link>
            </div>
          )}
        </div>

        {/* Parent Company Attribution (only on agency pages) */}
        {isAgencyPage && (
          <div className="mt-6 text-center text-xs text-slate-500">
            <span>Astella AI is a division of </span>
            <Link href="/">
              <a className="text-[#c8a951] dark:text-[#9f7b42] hover:underline">
                <i className="fas fa-building mr-1"></i>
                Codegx Technologies
              </a>
            </Link>
          </div>
        )}
      </div>
    </footer>
  );
}

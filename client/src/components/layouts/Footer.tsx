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
        { label: "Careers", href: "/careers", icon: "fas fa-briefcase" },
        { label: "Contact", href: "/contact", icon: "fas fa-envelope" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Enterprise Solutions", href: "/solutions/enterprise", icon: "fas fa-building" },
        { label: "Digital Transformation", href: "/solutions/digital-transformation", icon: "fas fa-sync" },
        { label: "Cloud Services", href: "/solutions/cloud", icon: "fas fa-cloud" },
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
        "border-t py-12 px-4 sm:px-6 lg:px-8",
        variant === "default"
          ? "bg-[#2c1a22] dark:bg-[#1f1a2c] border-[#4d2c35] dark:border-[#3d2a5d] text-slate-200"
          : variant === "minimal"
            ? "bg-background border-border"
            : "bg-[#2c1a22] dark:bg-[#1f1a2c] border-[#4d2c35] dark:border-[#3d2a5d] text-slate-200 py-20",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Company Info */}
          <motion.div className="lg:col-span-4" variants={itemVariants}>
            <div className="flex items-center mb-4">
              <div className="mr-3 bg-[#c8a951] text-[#2c1a22] dark:bg-[#9f7b42] dark:text-[#1f1a2c] w-10 h-10 rounded-md flex items-center justify-center shadow-md">
                <span className="font-extrabold text-xl tracking-tighter">
                  {isAgencyPage ? "AI" : "CT"}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">{activeCompanyName}</h3>
            </div>

            <p className="text-sm text-slate-300 mb-6 max-w-md">
              {activeCompanyDescription}
            </p>

            {/* Social Links */}
            {showSocial && (
              <div className="flex space-x-4 mb-6">
                {activeSocialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#4d2c35]/50 dark:bg-[#3d2a5d]/50 flex items-center justify-center text-[#c8a951] dark:text-[#9f7b42] hover:bg-[#4d2c35] dark:hover:bg-[#3d2a5d] transition-colors"
                    aria-label={social.platform}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            )}

            {/* Newsletter Signup */}
            {showNewsletter && variant === "expanded" && (
              <div className="mt-6">
                <h4 className="font-semibold mb-3 text-[#c8a951] dark:text-[#9f7b42]">Subscribe to our newsletter</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="bg-[#4d2c35]/30 dark:bg-[#3d2a5d]/30 border border-[#4d2c35] dark:border-[#3d2a5d] rounded-l-md px-4 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-[#c8a951] dark:focus:ring-[#9f7b42]"
                  />
                  <button className="bg-[#c8a951] dark:bg-[#9f7b42] text-[#2c1a22] dark:text-[#1f1a2c] px-4 py-2 rounded-r-md font-medium text-sm hover:bg-[#c8a951]/90 dark:hover:bg-[#9f7b42]/90 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            )}
          </motion.div>

          {/* Footer Sections */}
          <motion.div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" variants={containerVariants}>
            {activeSections.map((section, index) => (
              <motion.div key={index} variants={itemVariants}>
                <h4 className="font-semibold mb-4 text-[#c8a951] dark:text-[#9f7b42]">{section.title}</h4>
                <ul className="space-y-3 text-sm">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-slate-300 hover:text-[#c8a951] dark:hover:text-[#9f7b42] transition-colors"
                        >
                          {link.icon && <i className={`${link.icon} mr-2 w-5 text-[#c8a951]/70 dark:text-[#9f7b42]/70`}></i>}
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href}>
                          <a className="flex items-center text-slate-300 hover:text-[#c8a951] dark:hover:text-[#9f7b42] transition-colors">
                            {link.icon && <i className={`${link.icon} mr-2 w-5 text-[#c8a951]/70 dark:text-[#9f7b42]/70`}></i>}
                            {link.label}
                          </a>
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#4d2c35]/50 dark:border-[#3d2a5d]/50 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <div className="mb-4 md:mb-0">
            &copy; {currentYear} {activeCompanyName}. All rights reserved.
          </div>

          {showLegal && (
            <div className="flex space-x-6">
              <Link href="/privacy">
                <a className="hover:text-[#c8a951] dark:hover:text-[#9f7b42] transition-colors">Privacy Policy</a>
              </Link>
              <Link href="/terms">
                <a className="hover:text-[#c8a951] dark:hover:text-[#9f7b42] transition-colors">Terms of Service</a>
              </Link>
              <Link href="/cookies">
                <a className="hover:text-[#c8a951] dark:hover:text-[#9f7b42] transition-colors">Cookie Policy</a>
              </Link>
            </div>
          )}
        </div>

        {/* Parent Company Attribution (only on agency pages) */}
        {isAgencyPage && (
          <div className="mt-6 text-center text-xs text-slate-500">
            <span>Astella AI is a division of </span>
            <Link href="/">
              <a className="text-[#c8a951] dark:text-[#9f7b42] hover:underline">Codegx Technologies</a>
            </Link>
          </div>
        )}
      </div>
    </footer>
  );
}

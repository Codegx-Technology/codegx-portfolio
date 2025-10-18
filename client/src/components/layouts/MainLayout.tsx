import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ExecutiveNavbar } from "@/components/layouts/ExecutiveNavbar";
import { Footer } from "@/components/layouts/Footer";
import { BackToTop } from "@/components/back-to-top";
import { useLocation } from "wouter";

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
  withContainer?: boolean;
  navbarVariant?: "default" | "transparent" | "elevated" | "bordered";
  showSearch?: boolean;
  showNotifications?: boolean;
}

/**
 * Enterprise-grade layout component with enhanced ExecutiveNavbar
 */
export function MainLayout({
  children,
  className = "",
  containerClassName,
  fullWidth = false,
  withContainer = true,
  navbarVariant = "default",
  showSearch = false,
  showNotifications = false,
}: MainLayoutProps) {
  const [location] = useLocation();

  // Determine if we're on the home page
  const isHomePage = location === "/" || location === "/home" || location === "/enhanced-home";

  // Determine if we're on an agency page
  const isAgencyPage = location.includes("/agency") || location === "/enhanced-agency";

  // Use transparent navbar on home page
  const effectiveNavbarVariant = isHomePage ? "transparent" : navbarVariant;

  // Set the appropriate logo based on the page
  const logoAlt = isAgencyPage ? "Astella AI" : "Codegx Technologies";

  // Define all navigation links
  const navLinks = [
    { href: "/", label: "Home" },
    {
      href: "/agency",
      label: "Astella AI",
      children: [
        { href: "/agency", label: "Why Astella", icon: <i className="fas fa-chevron-right text-xs" /> },
        { href: "/agency/projects", label: "Projects", icon: <i className="fas fa-chevron-right text-xs" /> },
      ]
    },
    { href: "/services", label: "Services" },
    {
      href: "/case-studies",
      label: "Case Studies",
      children: [
        { href: "/case-studies/enterprise", label: "Enterprise", icon: <i className="fas fa-chevron-right text-xs" /> },
        { href: "/case-studies/startups", label: "Startups", icon: <i className="fas fa-chevron-right text-xs" /> },
        {
          href: "/case-studies/healthcare",
          label: "Healthcare",
          badge: "New",
          badgeVariant: "secondary",
          icon: <i className="fas fa-chevron-right text-xs" />
        },
      ]
    },
    { href: "/pricing", label: "Pricing", badge: "Updated", badgeVariant: "outline" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <ExecutiveNavbar
        variant={effectiveNavbarVariant}
        ctaVariant="electric"
        showSearch={showSearch}
        showNotifications={showNotifications}
        notificationCount={2}
        sticky={true}
        logo={{
          light: "/logo-dark.svg",
          dark: "/logo-light.svg",
          alt: logoAlt
        }}
      />

      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "flex-grow pb-safe",
          !isHomePage && "pt-20 pt-safe",
          className
        )}
      >
        {withContainer ? (
          <div className={cn(
            "px-safe mx-auto px-4 sm:px-6 lg:px-8 py-20",
            !fullWidth && "max-w-7xl",
            containerClassName
          )}>
            {children}
          </div>
        ) : (
          <div className="px-safe">
            {children}
          </div>
        )}
      </motion.main>

      <Footer
        isAgencyPage={isAgencyPage}
        variant="default"
        showNewsletter={false}
      />
      <BackToTop />
    </div>
  );
}

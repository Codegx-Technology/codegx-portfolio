import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { EnhancedThemeToggle } from "@/components/enhanced-theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ChevronDown, Menu, X } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
  children?: NavLink[];
}

interface ExecutiveNavbarProps {
  className?: string;
  logo?: {
    light: string;
    dark: string;
    alt: string;
  };
  showThemeToggle?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

export function ExecutiveNavbar({
  className,
  logo = {
    light: "/logo-dark.svg",
    dark: "/logo-light.svg",
    alt: "Company Logo",
  },
  showThemeToggle = true,
  ctaText = "Request Demo",
  ctaHref = "/contact",
}: ExecutiveNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navigation links
  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { 
      href: "/case-studies", 
      label: "Case Studies",
      children: [
        { href: "/case-studies/enterprise", label: "Enterprise" },
        { href: "/case-studies/startups", label: "Startups" },
        { href: "/case-studies/healthcare", label: "Healthcare" },
      ]
    },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full",
        "transition-colors duration-300",
        scrolled
          ? "bg-white/70 dark:bg-[#0f172a]/80 backdrop-blur shadow-sm supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-[#0f172a]/80"
          : "bg-white dark:bg-[#0f172a]",
        className
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {theme === "dark" ? (
                <img src={logo.dark} alt={logo.alt} className="h-8" />
              ) : (
                <img src={logo.light} alt={logo.alt} className="h-8" />
              )}
            </motion.div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <nav className="flex space-x-6">
            {navLinks.map((link) => 
              link.children ? (
                <NavigationMenu key={link.href}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={cn(
                          "bg-transparent hover:bg-transparent px-0",
                          location.startsWith(link.href) ? "text-primary font-medium" : ""
                        )}
                      >
                        {link.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-2 p-4">
                          {link.children.map((child) => (
                            <li key={child.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={child.href}
                                  className={cn(
                                    "block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
                                    location === child.href ? "bg-accent/50" : ""
                                  )}
                                >
                                  {child.label}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors hover:text-primary",
                    location === link.href ? "text-primary" : "",
                    "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 after:w-0 hover:after:w-full",
                    location === link.href && "after:w-full"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Theme Toggle */}
          {showThemeToggle && (
            <EnhancedThemeToggle variant="icon" className="mr-2" />
          )}

          {/* CTA Button */}
          <Button
            asChild
            className="rounded-xl px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            variant="outline"
          >
            <Link href={ctaHref}>
              {ctaText}
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          {showThemeToggle && (
            <EnhancedThemeToggle variant="icon" className="mr-2" />
          )}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => 
                  link.children ? (
                    <div key={link.href} className="space-y-2">
                      <div className="font-medium text-sm">{link.label}</div>
                      <div className="pl-3 border-l border-border space-y-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "block py-1 px-2 text-sm rounded hover:bg-accent",
                              location === child.href ? "text-primary font-medium" : ""
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "px-2 py-1 text-sm rounded-md font-medium hover:bg-accent",
                        location === link.href ? "text-primary" : ""
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )
                )}

                <div className="pt-4 mt-4 border-t border-border">
                  <Button className="w-full" asChild>
                    <Link href={ctaHref} onClick={() => setIsOpen(false)}>
                      {ctaText}
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}

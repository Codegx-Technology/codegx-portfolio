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
  isPage?: boolean;
  children?: NavLink[];
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  // Get the base path from Vite config
  const basePath = import.meta.env.BASE_URL || "/";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
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
    { href: "/home", label: "Home", isPage: true },
    // Portfolio removed - available in 'portfolio' branch
    { href: "/contact", label: "Contact", isPage: true },
  ];

  // Agency dropdown links
  const agencyLinks: NavLink[] = [
    { href: "/why-astella", label: "Why Astella", isPage: true },
    { href: "/services", label: "Services", isPage: true },
    { href: "/pricing", label: "Pricing", isPage: true },
    { href: "/quote", label: "Get a Quote", isPage: true },
    { href: "/agency/projects", label: "Projects", isPage: true },
    { href: "/case-studies", label: "Case Studies", isPage: true },
    { href: "/blog", label: "Blog", isPage: true },
  ];

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full",
        "transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 border-b shadow-sm"
          : "bg-background"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {theme === "dark" ? (
                  <img src="/logo-light.svg" alt="Codegx Tech" className="h-10" />
                ) : (
                  <img src="/logo-dark.svg" alt="Codegx Tech" className="h-10" />
                )}
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-transparent",
                        location === link.href ? "text-primary font-medium" : ""
                      )}
                    >
                      <Link href={link.href} className="group relative">
                        {link.label}
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}

                {/* Agency Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "bg-transparent hover:bg-transparent",
                      location.startsWith("/agency") ? "text-primary font-medium" : ""
                    )}
                  >
                    Agency
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {agencyLinks.map((link) => (
                        <li key={link.href} className="row-span-1">
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                location === link.href ? "bg-accent/50" : ""
                              )}
                            >
                              <div className="text-sm font-medium leading-none">{link.label}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Theme Toggle */}
            <EnhancedThemeToggle variant="dropdown" />

            {/* CTA Button */}
            <Button
              variant="electric"
              size="sm"
              asChild
              className="relative overflow-hidden group"
            >
              <Link href="/quote">
                <span className="relative z-10">Request Demo</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden">
            <EnhancedThemeToggle variant="icon" className="mr-2" />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "px-3 py-2 rounded-md font-medium hover:bg-primary/10",
                        location === link.href ? "text-primary" : ""
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}

                  {/* Agency Section */}
                  <div className="px-3 py-2">
                    <div className="font-medium mb-2">Agency</div>
                    <div className="pl-3 border-l-2 border-muted space-y-2">
                      {agencyLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={cn(
                            "block py-1 px-2 rounded hover:bg-primary/10",
                            location === link.href ? "text-primary font-medium" : ""
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="px-3 pt-4">
                    <Button variant="electric" className="w-full" asChild>
                      <Link href="/quote" onClick={() => setIsOpen(false)}>
                        Request Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

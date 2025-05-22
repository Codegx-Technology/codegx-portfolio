import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
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
import {
  ChevronDown,
  Menu,
  X,
  Bell,
  Search,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface NavLink {
  href: string;
  label: string;
  children?: NavLink[];
  isExternal?: boolean;
  badge?: string;
  badgeVariant?: "default" | "secondary" | "outline" | "destructive";
  icon?: React.ReactNode;
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
  ctaVariant?: "default" | "electric" | "sapphire" | "emerald" | "electric-outline";
  showSearch?: boolean;
  showNotifications?: boolean;
  notificationCount?: number;
  variant?: "default" | "transparent" | "elevated" | "bordered";
  sticky?: boolean;
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
  ctaVariant = "electric",
  showSearch = false,
  showNotifications = false,
  notificationCount = 0,
  variant = "default",
  sticky = true,
}: ExecutiveNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const controls = useAnimation();

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

  // Animation effect for navbar items
  useEffect(() => {
    if (scrolled) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [scrolled, controls]);

  // Navigation links
  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    {
      href: "/agency",
      label: "Agency",
      children: [
        { href: "/agency", label: "Why Astella", icon: <ChevronRight className="h-4 w-4" /> },
        { href: "/agency/projects", label: "Projects", icon: <ChevronRight className="h-4 w-4" /> },
        { href: "/agency/services", label: "Services", icon: <ChevronRight className="h-4 w-4" /> },
      ]
    },
    { href: "/services", label: "Services" },
    {
      href: "/case-studies",
      label: "Case Studies",
      children: [
        { href: "/case-studies/enterprise", label: "Enterprise", icon: <ChevronRight className="h-4 w-4" /> },
        { href: "/case-studies/startups", label: "Startups", icon: <ChevronRight className="h-4 w-4" /> },
        {
          href: "/case-studies/healthcare",
          label: "Healthcare",
          badge: "New",
          badgeVariant: "secondary",
          icon: <ChevronRight className="h-4 w-4" />
        },
      ]
    },
    { href: "/pricing", label: "Pricing", badge: "Updated", badgeVariant: "outline" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      className={cn(
        sticky ? "sticky top-0" : "",
        "z-50 w-full",
        "transition-all duration-300",
        variant === "default" && scrolled
          ? "bg-gradient-to-r from-[#0a192f] to-[#112240] backdrop-blur shadow-lg supports-[backdrop-filter]:bg-[#0a192f]/90"
          : variant === "default"
            ? "bg-gradient-to-r from-[#0a192f] to-[#112240]"
            : variant === "transparent"
              ? "bg-transparent"
              : variant === "elevated"
                ? "bg-gradient-to-r from-[#0a192f] to-[#112240] shadow-xl"
                : variant === "bordered"
                  ? "bg-gradient-to-r from-[#0a192f] to-[#112240] border-b border-[#233554]"
                  : "bg-gradient-to-r from-[#0a192f] to-[#112240]",
        "dark:bg-gradient-to-r dark:from-[#0a192f] dark:to-[#112240]",
        className
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="flex items-center"
              >
                {/* Logo image */}
                <div className="mr-2">
                  {theme === "dark" ? (
                    <img src={logo.dark} alt={logo.alt} className="h-9 sm:h-10" />
                  ) : (
                    <img src={logo.light} alt={logo.alt} className="h-9 sm:h-10" />
                  )}
                </div>

                {/* Logo text */}
                <div className="font-bold text-lg sm:text-xl tracking-tight text-white">
                  {logo.alt}
                </div>
              </motion.div>
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-[#64ffda] w-0"
                animate={{ width: scrolled ? "100%" : "0%" }}
                transition={{ duration: 0.3, delay: 0.2 }}
              />
            </motion.div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <nav className="flex space-x-6">
            <AnimatePresence>
              {navLinks.map((link, index) =>
                link.children ? (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger
                            className={cn(
                              "bg-transparent hover:bg-transparent px-0 gap-1.5 text-slate-200",
                              "hover:text-[#64ffda] data-[state=open]:text-[#64ffda]",
                              location.startsWith(link.href) ? "text-[#64ffda] font-medium" : ""
                            )}
                          >
                            {link.label}
                            {link.badge && (
                              <Badge variant={link.badgeVariant} className="ml-1 text-[10px] px-1.5 py-0 bg-[#64ffda] text-[#0a192f]">
                                {link.badge}
                              </Badge>
                            )}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <motion.ul
                              className="grid w-[240px] gap-2 p-4"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {link.children.map((child) => (
                                <motion.li
                                  key={child.href}
                                  whileHover={{ x: 3 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={child.href}
                                      className={cn(
                                        "flex items-center justify-between select-none rounded-md p-2.5 text-sm leading-none no-underline outline-none transition-colors",
                                        "hover:bg-[#233554] hover:text-[#64ffda]",
                                        location === child.href ? "bg-[#233554] font-medium text-[#64ffda]" : "text-slate-200"
                                      )}
                                    >
                                      <span className="flex items-center gap-2">
                                        {child.label}
                                        {child.badge && (
                                          <Badge variant={child.badgeVariant} className="text-[10px] px-1.5 py-0 bg-[#64ffda] text-[#0a192f]">
                                            {child.badge}
                                          </Badge>
                                        )}
                                      </span>
                                      {child.icon}
                                    </Link>
                                  </NavigationMenuLink>
                                </motion.li>
                              ))}
                            </motion.ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </motion.div>
                ) : (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "relative text-sm font-medium transition-colors flex items-center gap-1.5",
                        "text-slate-200 hover:text-[#64ffda]",
                        location === link.href ? "text-[#64ffda]" : "",
                        "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-[#64ffda] after:transition-all after:duration-300 after:w-0 hover:after:w-full",
                        location === link.href && "after:w-full"
                      )}
                    >
                      {link.label}
                      {link.badge && (
                        <Badge variant={link.badgeVariant} className="text-[10px] px-1.5 py-0 bg-[#64ffda] text-[#0a192f]">
                          {link.badge}
                        </Badge>
                      )}
                    </Link>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </nav>

          {/* Action Items */}
          <div className="flex items-center space-x-3">
            {/* Search Button */}
            {showSearch && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="ghost" size="icon" className="rounded-full" aria-label="Search">
                  <Search className="h-4 w-4" />
                </Button>
              </motion.div>
            )}

            {/* Notifications */}
            {showNotifications && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button variant="ghost" size="icon" className="rounded-full" aria-label="Notifications">
                  <Bell className="h-4 w-4" />
                  {notificationCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] text-white">
                      {notificationCount > 9 ? '9+' : notificationCount}
                    </span>
                  )}
                </Button>
              </motion.div>
            )}

            {/* Theme Toggle */}
            {showThemeToggle && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <EnhancedThemeToggle variant="icon" className="rounded-full" />
              </motion.div>
            )}

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="ml-2"
            >
              <Button
                asChild
                variant="outline"
                size="sm"
                className={cn(
                  "font-medium border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10",
                  "px-4 py-2 rounded-md"
                )}
              >
                <Link href={ctaHref}>
                  {ctaText}
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-2 md:hidden">
          {/* Mobile Action Items */}
          {showSearch && (
            <Button variant="ghost" size="icon" className="rounded-full h-9 w-9" aria-label="Search">
              <Search className="h-4 w-4" />
            </Button>
          )}

          {showNotifications && (
            <div className="relative">
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9" aria-label="Notifications">
                <Bell className="h-4 w-4" />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] text-white">
                    {notificationCount > 9 ? '9+' : notificationCount}
                  </span>
                )}
              </Button>
            </div>
          )}

          {showThemeToggle && (
            <EnhancedThemeToggle variant="icon" className="rounded-full h-9 w-9" />
          )}

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9" aria-label="Menu">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] sm:w-[350px] pr-0 bg-[#0a192f] border-l border-[#233554] text-slate-200"
            >
              <div className="flex justify-between items-center mb-6 pr-6">
                <div className="flex-shrink-0 flex items-center">
                  <div className="mr-2">
                    <img src={logo.dark} alt={logo.alt} className="h-7" />
                  </div>
                  <div className="font-bold text-base tracking-tight text-white">
                    {logo.alt}
                  </div>
                </div>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 text-slate-200 hover:text-[#64ffda] hover:bg-[#233554]">
                    <X className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
              </div>

              <div className="flex flex-col space-y-1 pr-6 max-h-[calc(100vh-120px)] overflow-y-auto">
                <AnimatePresence>
                  {navLinks.map((link, index) =>
                    link.children ? (
                      <motion.div
                        key={link.href}
                        className="space-y-1 mb-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <div className="flex items-center justify-between font-medium text-sm px-3 py-2 rounded-md text-[#64ffda]">
                          <div className="flex items-center gap-1.5">
                            {link.label}
                            {link.badge && (
                              <Badge variant={link.badgeVariant} className="text-[10px] px-1.5 py-0 bg-[#64ffda] text-[#0a192f]">
                                {link.badge}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="pl-3 border-l border-[#233554] space-y-0.5 ml-3">
                          {link.children.map((child) => (
                            <motion.div
                              key={child.href}
                              whileHover={{ x: 3 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Link
                                href={child.href}
                                className={cn(
                                  "flex items-center justify-between py-2 px-3 text-sm rounded-md",
                                  "hover:bg-[#233554] hover:text-[#64ffda]",
                                  location === child.href
                                    ? "text-[#64ffda] font-medium bg-[#233554]/50"
                                    : "text-slate-200"
                                )}
                                onClick={() => setIsOpen(false)}
                              >
                                <span className="flex items-center gap-1.5">
                                  {child.label}
                                  {child.badge && (
                                    <Badge variant={child.badgeVariant} className="text-[10px] px-1.5 py-0 bg-[#64ffda] text-[#0a192f]">
                                      {child.badge}
                                    </Badge>
                                  )}
                                </span>
                                {child.icon}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          className={cn(
                            "flex items-center justify-between px-3 py-2.5 text-sm rounded-md font-medium",
                            "hover:bg-[#233554] hover:text-[#64ffda]",
                            location === link.href
                              ? "text-[#64ffda] bg-[#233554]/50"
                              : "text-slate-200"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="flex items-center gap-1.5">
                            {link.label}
                            {link.badge && (
                              <Badge variant={link.badgeVariant} className="text-[10px] px-1.5 py-0 bg-[#64ffda] text-[#0a192f]">
                                {link.badge}
                              </Badge>
                            )}
                          </span>
                          {location === link.href && <ChevronRight className="h-4 w-4 text-[#64ffda]" />}
                        </Link>
                      </motion.div>
                    )
                  )}
                </AnimatePresence>
              </div>

              <div className="absolute bottom-0 left-0 right-6 p-6 border-t border-[#233554] bg-[#0a192f] pt-6">
                <Button
                  className="w-full border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10"
                  variant="outline"
                  size="default"
                  asChild
                >
                  <Link href={ctaHref} onClick={() => setIsOpen(false)}>
                    {ctaText}
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}

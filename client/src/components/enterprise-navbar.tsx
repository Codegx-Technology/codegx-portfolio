import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export function EnterpriseNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [isHomePage, setIsHomePage] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  // Get the base path from Vite config
  const basePath = import.meta.env.BASE_URL || "/";

  // Check if we're on the home page
  useEffect(() => {
    setIsHomePage(location === basePath || location === "/");
  }, [location, basePath]);

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

  const navLinks = [
    { href: "/home", label: "Home", isPage: true },
    { href: "/portfolio", label: "Portfolio", isPage: true },
    { href: "/contact", label: "Contact", isPage: true },
  ];

  const agencyLinks = [
    { href: "/why-astella", label: "Why Astella", isPage: true },
    { href: "/services", label: "Services", isPage: true },
    { href: "/pricing", label: "Pricing", isPage: true },
    { href: "/quote", label: "Get a Quote", isPage: true },
    { href: "/agency/projects", label: "Projects", isPage: true },
    { href: "/case-studies", label: "Case Studies", isPage: true },
    { href: "/blog", label: "Blog", isPage: true },
  ];

  return (
    <motion.nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md" 
          : "bg-background"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
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

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} currentPath={location} />
            ))}

            {/* Agency Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="font-medium flex items-center gap-1 px-0 py-0 h-auto"
                >
                  <span className="relative">
                    Agency
                    <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-secondary transition-all duration-300"></span>
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 p-2">
                {agencyLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild className="py-2">
                    <Link
                      href={link.href}
                      className={`w-full rounded-md transition-colors ${
                        location === link.href 
                          ? "text-primary font-medium bg-primary/10" 
                          : "hover:bg-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <ThemeToggle />

            <Button variant="electric" size="sm" asChild className="ml-2">
              <Link href="/quote">Get Started</Link>
            </Button>
          </div>

          <div className="flex items-center md:hidden">
            <ThemeToggle className="mr-2" />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <i className="fas fa-bars text-xl"></i>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-3 py-2 rounded-md font-medium hover:bg-primary/10 ${
                        location === link.href ? "text-primary" : ""
                      }`}
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
                          className={`block py-1 px-2 rounded hover:bg-primary/10 ${
                            location === link.href ? "text-primary font-medium" : ""
                          }`}
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
                        Get Started
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

// Animated NavLink component with underline effect
function NavLink({ href, label, currentPath }: { href: string; label: string; currentPath: string }) {
  const isActive = currentPath === href;
  
  return (
    <Link href={href} className="group relative py-2">
      <span className={`font-medium transition-colors ${isActive ? "text-primary" : "hover:text-primary"}`}>
        {label}
      </span>
      <AnimatePresence>
        {isActive && (
          <motion.span 
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
      <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-secondary transition-all duration-300"></span>
    </Link>
  );
}

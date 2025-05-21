import { useState } from "react";
import { Link } from "wouter";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "/agency", label: "Agency", isPage: true },
  ];

  const handleNavLinkClick = (href: string, isPage: boolean = false) => {
    if (isPage) {
      // Let the Link component handle navigation
      setIsOpen(false);
      return true;
    } else {
      // Handle anchor links with smooth scrolling
      const element = document.querySelector(href);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 80,
          behavior: "smooth",
        });
      }
      setIsOpen(false);
      return false;
    }
  };

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold font-inter">
                John<span className="text-primary">.dev</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium hover:text-primary transition"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-medium hover:text-primary transition"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              )
            ))}
            <a
              href="/resume.pdf"
              className="font-medium text-primary hover:text-primary/80 flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-download text-sm"></i> Resume
            </a>
            <ThemeToggle />
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
                    link.isPage ? (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="px-3 py-2 rounded-md font-medium hover:bg-primary/10"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        key={link.href}
                        href={link.href}
                        className="px-3 py-2 rounded-md font-medium hover:bg-primary/10"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavLinkClick(link.href);
                        }}
                      >
                        {link.label}
                      </a>
                    )
                  ))}
                  <a
                    href="/resume.pdf"
                    className="px-3 py-2 rounded-md font-medium text-primary hover:bg-primary/10 flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-download text-sm"></i> Resume
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

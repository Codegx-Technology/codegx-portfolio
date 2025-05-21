import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [location] = useLocation();
  const [isHomePage, setIsHomePage] = useState(false);

  // Check if we're on the home page
  useEffect(() => {
    setIsHomePage(location === "/");
  }, [location]);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#agency", label: "Agency" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavLinkClick = (href: string) => {
    // If we're not on the home page and trying to navigate to an anchor,
    // redirect to home page with the anchor
    if (!isHomePage && href.startsWith('#')) {
      window.location.href = `/${href}`;
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="py-10 bg-background border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold font-inter">
                Peter<span className="text-primary">.dev</span>
              </span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">Founder of Astella AI | Software & Blockchain Engineer</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm hover:text-primary transition"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-6 md:mt-0">
            <p className="text-sm text-muted-foreground">&copy; {currentYear} Codegx Technology | Peter O. Oluoch. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

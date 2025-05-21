import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavLinkClick = (href: string) => {
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
            <p className="mt-2 text-sm text-muted-foreground">Software & Blockchain Engineer</p>
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
            <p className="text-sm text-muted-foreground">&copy; {currentYear} Peter O. Oluoch. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

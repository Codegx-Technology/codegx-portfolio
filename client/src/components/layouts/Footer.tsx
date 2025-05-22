import React from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  className?: string;
  companyName?: string;
  companyDescription?: string;
  sections?: FooterSection[];
  showSocial?: boolean;
  showLegal?: boolean;
}

/**
 * Enterprise-grade footer with sections: About, Links, Contact, Social
 */
export function Footer({
  className,
  companyName = "Astella AI",
  companyDescription = "A stellar force for AI innovation in enterprise, education, and public service.",
  sections,
  showSocial = true,
  showLegal = true,
}: FooterProps) {
  // Default footer sections
  const defaultSections: FooterSection[] = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "hello@astella.ai", href: "mailto:hello@astella.ai", external: true },
        { label: "LinkedIn", href: "https://linkedin.com/company/astella-ai", external: true },
        { label: "X (Twitter)", href: "https://x.com/astella_ai", external: true },
      ],
    },
  ];

  // Use provided sections or default ones
  const footerSections = sections || defaultSections;

  // Current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn("bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8", className)}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h4 className="font-semibold mb-4">{companyName}</h4>
          <p className="text-sm text-muted-foreground">{companyDescription}</p>
        </div>

        {/* Footer Sections */}
        {footerSections.map((section, index) => (
          <div key={index}>
            <h4 className="font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href}>
                      <a className="hover:text-primary transition-colors">{link.label}</a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-xs text-muted-foreground">
        &copy; {currentYear} {companyName}. All rights reserved.
      </div>
    </footer>
  );
}

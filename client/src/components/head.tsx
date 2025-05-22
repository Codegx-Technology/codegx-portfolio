import { Helmet } from "react-helmet";
import { useLocation } from "wouter";
import { env } from "@/utils/env";

interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  structuredData?: Record<string, any>;
}

export function Head({
  title = "Codegx Technology - AI Agency & Portfolio",
  description = "Codegx Technology is a forward-thinking software development company specializing in AI solutions and innovative digital products.",
  image = "/images/og-image.jpg",
  canonical,
  type = "website",
  noindex = false,
  structuredData,
}: HeadProps) {
  const [location] = useLocation();
  const siteTitle = title.includes(" - ") ? title : `${title} - Codegx Technology`;
  const siteUrl = env.SITE_URL || "https://codegx-technology.github.io/codegx-portfolio";
  const currentUrl = canonical || location;
  const fullUrl = `${siteUrl}${currentUrl}`;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Codegx Technology",
    "url": siteUrl,
    "logo": `${siteUrl}/images/logo.png`,
    "sameAs": [
      "https://twitter.com/codegxtech",
      "https://www.linkedin.com/company/codegx-technology",
      "https://github.com/Codegx-Technology"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-234-567-8901",
      "contactType": "customer service",
      "email": "info@codegxtechnologies.com"
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Codegx Technology" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
}

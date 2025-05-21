import { Helmet } from "react-helmet";

interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function Head({
  title = "Codegx Technology - AI Agency & Portfolio",
  description = "Codegx Technology is a forward-thinking software development company specializing in AI solutions and innovative digital products.",
  image = "/images/og-image.jpg",
  url = "https://codegx.tech",
}: HeadProps) {
  const siteTitle = title.includes(" - ") ? title : `${title} - Codegx Technology`;
  
  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
    </Helmet>
  );
}

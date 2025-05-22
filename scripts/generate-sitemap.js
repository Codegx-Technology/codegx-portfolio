import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITE_URL = process.env.VITE_SITE_URL || 'https://codegx-technology.github.io/codegx-portfolio';
const PAGES_DIR = path.join(__dirname, '../client/src/pages');
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// Get all page files
const getPages = async () => {
  return await glob(`${PAGES_DIR}/**/*.{tsx,jsx}`, {
    ignore: [
      // Ignore API routes, layout files, and other non-page files
      '**/api/**',
      '**/components/**',
      '**/layout.tsx',
      '**/not-found.tsx',
      '**/error.tsx',
      '**/loading.tsx',
    ],
  });
};

// Convert file path to URL path
const filePathToUrlPath = (filePath) => {
  // Remove the pages directory and file extension
  let urlPath = filePath
    .replace(PAGES_DIR, '')
    .replace(/\.(tsx|jsx)$/, '')
    .replace(/\/index$/, '/');

  // Handle dynamic routes
  urlPath = urlPath.replace(/\[([^\]]+)\]/g, 'param');

  return urlPath;
};

// Generate sitemap XML
const generateSitemap = async () => {
  const pages = await getPages();

  // Start XML
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Add home page
  sitemap += `  <url>
    <loc>${SITE_URL}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
`;

  // Add all other pages
  pages.forEach((page) => {
    const urlPath = filePathToUrlPath(page);

    // Skip dynamic routes for simplicity
    if (urlPath.includes('param')) {
      return;
    }

    sitemap += `  <url>
    <loc>${SITE_URL}${urlPath}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  });

  // End XML
  sitemap += `</urlset>`;

  return sitemap;
};

// Write sitemap to file
const writeSitemap = (sitemap) => {
  // Ensure directory exists
  const dir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_PATH, sitemap);
  console.log(`Sitemap generated at ${OUTPUT_PATH}`);
};

// Main function
const main = async () => {
  const sitemap = await generateSitemap();
  writeSitemap(sitemap);
};

main().catch(err => {
  console.error('Error generating sitemap:', err);
  process.exit(1);
});

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
import { visualizer } from "rollup-plugin-visualizer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(async ({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  const basePath = process.env.NODE_ENV === 'production' && process.env.VITE_BASE_PATH ? process.env.VITE_BASE_PATH : "/";

  return {
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
    // Add visualizer in analyze mode
    ...(process.env.ANALYZE === "true" ? [visualizer({ open: true, gzipSize: true, brotliSize: true })] : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  base: basePath, // Flexible base path for different deployments
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
    sourcemap: mode !== 'production',
    minify: mode === 'production' ? 'esbuild' : false,
    // Copy public files to build output
    copyPublicDir: true,
    // Target modern browsers for smaller bundle
    target: 'es2020',
    // Increase chunk size warning limit (we're optimizing)
    chunkSizeWarningLimit: 1000,
    // Optimize chunks for better caching and loading
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunk for core React libraries - MUST include wouter with React
          if (id.includes('node_modules/react') || 
              id.includes('node_modules/react-dom') || 
              id.includes('node_modules/scheduler') ||
              id.includes('node_modules/wouter')) {
            return 'vendor';
          }
          
          // Framer Motion in separate chunk (used frequently)
          if (id.includes('node_modules/framer-motion')) {
            return 'framer';
          }
          
          // Radix UI components in separate chunk
          if (id.includes('node_modules/@radix-ui')) {
            return 'ui';
          }
          
          // React Query in separate chunk
          if (id.includes('node_modules/@tanstack/react-query')) {
            return 'query';
          }
          
          // Icon map in separate chunk (now optimized)
          if (id.includes('/lib/iconMap')) {
            return 'icons';
          }
        },
      },
    },
    // Optimize CSS
    cssMinify: mode === 'production',
  },
  // Define environment variables
  define: {
    'process.env': env,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react/jsx-runtime', 'framer-motion', 'wouter'],
    esbuildOptions: {
      target: 'es2020',
    },
  },
  }
});

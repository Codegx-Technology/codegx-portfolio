import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');

  // Set base path for GitHub Pages deployment
  const basePath = process.env.NODE_ENV === 'production' ? '/codegx-portfolio/' : '/';

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@shared": path.resolve(__dirname, "../shared"),
      },
    },
    base: basePath, // GitHub Pages requires /codegx-portfolio/ for subdirectory deployment
    build: {
      outDir: "../dist/public",
      emptyOutDir: true,
      sourcemap: mode !== 'production',
      minify: mode === 'production',
      copyPublicDir: true,
    },
    // Define environment variables
    define: {
      'process.env': env,
    },
    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion'],
    },
  };
});

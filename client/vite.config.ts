import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');

  const basePath = process.env.NODE_ENV === 'production' && process.env.VITE_BASE_PATH ? process.env.VITE_BASE_PATH : "/";

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@shared": path.resolve(__dirname, "../shared"),
      },
    },
    base: basePath, // Flexible base path for different deployments
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

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths()
  ],
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  base: "/codegx-portfolio/",
  build: {
    outDir: "../dist/public",
    emptyOutDir: true,
    sourcemap: false,
    minify: true,
    copyPublicDir: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
});

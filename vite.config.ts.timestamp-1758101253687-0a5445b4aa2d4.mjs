// vite.config.ts
import { defineConfig, loadEnv } from "file:///C:/Users/Apollo/Documents/codegx-portfolio/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Apollo/Documents/codegx-portfolio/node_modules/@vitejs/plugin-react/dist/index.mjs";
import themePlugin from "file:///C:/Users/Apollo/Documents/codegx-portfolio/node_modules/@replit/vite-plugin-shadcn-theme-json/dist/index.mjs";
import path, { dirname } from "path";
import runtimeErrorOverlay from "file:///C:/Users/Apollo/Documents/codegx-portfolio/node_modules/@replit/vite-plugin-runtime-error-modal/dist/index.mjs";
import { fileURLToPath } from "url";
import { visualizer } from "file:///C:/Users/Apollo/Documents/codegx-portfolio/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Apollo/Documents/codegx-portfolio/vite.config.ts";
var __filename = fileURLToPath(__vite_injected_original_import_meta_url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      react(),
      runtimeErrorOverlay(),
      themePlugin(),
      ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
        await import("file:///C:/Users/Apollo/Documents/codegx-portfolio/node_modules/@replit/vite-plugin-cartographer/dist/index.mjs").then(
          (m) => m.cartographer()
        )
      ] : [],
      // Add visualizer in analyze mode
      ...process.env.ANALYZE === "true" ? [visualizer({ open: true, gzipSize: true, brotliSize: true })] : []
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets")
      }
    },
    root: path.resolve(__dirname, "client"),
    base: process.env.VITE_BASE_PATH || "/",
    // Flexible base path for different deployments
    build: {
      outDir: path.resolve(__dirname, "dist/public"),
      emptyOutDir: true,
      sourcemap: mode !== "production",
      minify: mode === "production",
      // Optimize chunks
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom", "framer-motion"],
            ui: [
              "@radix-ui/react-accordion",
              "@radix-ui/react-alert-dialog",
              "@radix-ui/react-avatar",
              "@radix-ui/react-checkbox",
              "@radix-ui/react-dialog",
              "@radix-ui/react-dropdown-menu",
              "@radix-ui/react-label",
              "@radix-ui/react-popover",
              "@radix-ui/react-select",
              "@radix-ui/react-slot",
              "@radix-ui/react-toast"
            ]
          }
        }
      },
      // Optimize CSS
      cssMinify: mode === "production"
    },
    // Define environment variables
    define: {
      "process.env": env
    },
    // Optimize dependencies
    optimizeDeps: {
      include: ["react", "react-dom", "framer-motion"]
    },
    // Enable server-side rendering
    ssr: {
      noExternal: ["@radix-ui/*"]
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBcG9sbG9cXFxcRG9jdW1lbnRzXFxcXGNvZGVneC1wb3J0Zm9saW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEFwb2xsb1xcXFxEb2N1bWVudHNcXFxcY29kZWd4LXBvcnRmb2xpb1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvQXBvbGxvL0RvY3VtZW50cy9jb2RlZ3gtcG9ydGZvbGlvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgdGhlbWVQbHVnaW4gZnJvbSBcIkByZXBsaXQvdml0ZS1wbHVnaW4tc2hhZGNuLXRoZW1lLWpzb25cIjtcclxuaW1wb3J0IHBhdGgsIHsgZGlybmFtZSB9IGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCBydW50aW1lRXJyb3JPdmVybGF5IGZyb20gXCJAcmVwbGl0L3ZpdGUtcGx1Z2luLXJ1bnRpbWUtZXJyb3ItbW9kYWxcIjtcclxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gXCJ1cmxcIjtcclxuaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gXCJyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXJcIjtcclxuXHJcbmNvbnN0IF9fZmlsZW5hbWUgPSBmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCk7XHJcbmNvbnN0IF9fZGlybmFtZSA9IGRpcm5hbWUoX19maWxlbmFtZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoYXN5bmMgKHsgbW9kZSB9KSA9PiB7XHJcbiAgLy8gTG9hZCBlbnYgZmlsZSBiYXNlZCBvbiBgbW9kZWAgaW4gdGhlIGN1cnJlbnQgd29ya2luZyBkaXJlY3RvcnkuXHJcbiAgLy8gU2V0IHRoZSB0aGlyZCBwYXJhbWV0ZXIgdG8gJycgdG8gbG9hZCBhbGwgZW52IHJlZ2FyZGxlc3Mgb2YgdGhlIGBWSVRFX2AgcHJlZml4LlxyXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgJycpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBydW50aW1lRXJyb3JPdmVybGF5KCksXHJcbiAgICB0aGVtZVBsdWdpbigpLFxyXG4gICAgLi4uKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgcHJvY2Vzcy5lbnYuUkVQTF9JRCAhPT0gdW5kZWZpbmVkXHJcbiAgICAgID8gW1xyXG4gICAgICAgICAgYXdhaXQgaW1wb3J0KFwiQHJlcGxpdC92aXRlLXBsdWdpbi1jYXJ0b2dyYXBoZXJcIikudGhlbigobSkgPT5cclxuICAgICAgICAgICAgbS5jYXJ0b2dyYXBoZXIoKSxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgXVxyXG4gICAgICA6IFtdKSxcclxuICAgIC8vIEFkZCB2aXN1YWxpemVyIGluIGFuYWx5emUgbW9kZVxyXG4gICAgLi4uKHByb2Nlc3MuZW52LkFOQUxZWkUgPT09IFwidHJ1ZVwiID8gW3Zpc3VhbGl6ZXIoeyBvcGVuOiB0cnVlLCBnemlwU2l6ZTogdHJ1ZSwgYnJvdGxpU2l6ZTogdHJ1ZSB9KV0gOiBbXSksXHJcbiAgXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJjbGllbnRcIiwgXCJzcmNcIiksXHJcbiAgICAgIFwiQHNoYXJlZFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNoYXJlZFwiKSxcclxuICAgICAgXCJAYXNzZXRzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiYXR0YWNoZWRfYXNzZXRzXCIpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJvb3Q6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiY2xpZW50XCIpLFxyXG4gIGJhc2U6IHByb2Nlc3MuZW52LlZJVEVfQkFTRV9QQVRIIHx8IFwiL1wiLCAvLyBGbGV4aWJsZSBiYXNlIHBhdGggZm9yIGRpZmZlcmVudCBkZXBsb3ltZW50c1xyXG4gIGJ1aWxkOiB7XHJcbiAgICBvdXREaXI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiZGlzdC9wdWJsaWNcIiksXHJcbiAgICBlbXB0eU91dERpcjogdHJ1ZSxcclxuICAgIHNvdXJjZW1hcDogbW9kZSAhPT0gJ3Byb2R1Y3Rpb24nLFxyXG4gICAgbWluaWZ5OiBtb2RlID09PSAncHJvZHVjdGlvbicsXHJcbiAgICAvLyBPcHRpbWl6ZSBjaHVua3NcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XHJcbiAgICAgICAgICB2ZW5kb3I6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ2ZyYW1lci1tb3Rpb24nXSxcclxuICAgICAgICAgIHVpOiBbXHJcbiAgICAgICAgICAgICdAcmFkaXgtdWkvcmVhY3QtYWNjb3JkaW9uJyxcclxuICAgICAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1hbGVydC1kaWFsb2cnLFxyXG4gICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LWF2YXRhcicsXHJcbiAgICAgICAgICAgICdAcmFkaXgtdWkvcmVhY3QtY2hlY2tib3gnLFxyXG4gICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LWRpYWxvZycsXHJcbiAgICAgICAgICAgICdAcmFkaXgtdWkvcmVhY3QtZHJvcGRvd24tbWVudScsXHJcbiAgICAgICAgICAgICdAcmFkaXgtdWkvcmVhY3QtbGFiZWwnLFxyXG4gICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LXBvcG92ZXInLFxyXG4gICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LXNlbGVjdCcsXHJcbiAgICAgICAgICAgICdAcmFkaXgtdWkvcmVhY3Qtc2xvdCcsXHJcbiAgICAgICAgICAgICdAcmFkaXgtdWkvcmVhY3QtdG9hc3QnLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIC8vIE9wdGltaXplIENTU1xyXG4gICAgY3NzTWluaWZ5OiBtb2RlID09PSAncHJvZHVjdGlvbicsXHJcbiAgfSxcclxuICAvLyBEZWZpbmUgZW52aXJvbm1lbnQgdmFyaWFibGVzXHJcbiAgZGVmaW5lOiB7XHJcbiAgICAncHJvY2Vzcy5lbnYnOiBlbnYsXHJcbiAgfSxcclxuICAvLyBPcHRpbWl6ZSBkZXBlbmRlbmNpZXNcclxuICBvcHRpbWl6ZURlcHM6IHtcclxuICAgIGluY2x1ZGU6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ2ZyYW1lci1tb3Rpb24nXSxcclxuICB9LFxyXG4gIC8vIEVuYWJsZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmdcclxuICBzc3I6IHtcclxuICAgIG5vRXh0ZXJuYWw6IFsnQHJhZGl4LXVpLyonXSxcclxuICB9LFxyXG4gIH1cclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFQsU0FBUyxjQUFjLGVBQWU7QUFDaFcsT0FBTyxXQUFXO0FBQ2xCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sUUFBUSxlQUFlO0FBQzlCLE9BQU8seUJBQXlCO0FBQ2hDLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMsa0JBQWtCO0FBTjBLLElBQU0sMkNBQTJDO0FBUXRQLElBQU0sYUFBYSxjQUFjLHdDQUFlO0FBQ2hELElBQU0sWUFBWSxRQUFRLFVBQVU7QUFFcEMsSUFBTyxzQkFBUSxhQUFhLE9BQU8sRUFBRSxLQUFLLE1BQU07QUFHOUMsUUFBTSxNQUFNLFFBQVEsTUFBTSxRQUFRLElBQUksR0FBRyxFQUFFO0FBRTNDLFNBQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLG9CQUFvQjtBQUFBLE1BQ3BCLFlBQVk7QUFBQSxNQUNaLEdBQUksUUFBUSxJQUFJLGFBQWEsZ0JBQzdCLFFBQVEsSUFBSSxZQUFZLFNBQ3BCO0FBQUEsUUFDRSxNQUFNLE9BQU8saUhBQWtDLEVBQUU7QUFBQSxVQUFLLENBQUMsTUFDckQsRUFBRSxhQUFhO0FBQUEsUUFDakI7QUFBQSxNQUNGLElBQ0EsQ0FBQztBQUFBO0FBQUEsTUFFTCxHQUFJLFFBQVEsSUFBSSxZQUFZLFNBQVMsQ0FBQyxXQUFXLEVBQUUsTUFBTSxNQUFNLFVBQVUsTUFBTSxZQUFZLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztBQUFBLElBQ3pHO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLEtBQUssUUFBUSxXQUFXLFVBQVUsS0FBSztBQUFBLFFBQzVDLFdBQVcsS0FBSyxRQUFRLFdBQVcsUUFBUTtBQUFBLFFBQzNDLFdBQVcsS0FBSyxRQUFRLFdBQVcsaUJBQWlCO0FBQUEsTUFDdEQ7QUFBQSxJQUNGO0FBQUEsSUFDQSxNQUFNLEtBQUssUUFBUSxXQUFXLFFBQVE7QUFBQSxJQUN0QyxNQUFNLFFBQVEsSUFBSSxrQkFBa0I7QUFBQTtBQUFBLElBQ3BDLE9BQU87QUFBQSxNQUNMLFFBQVEsS0FBSyxRQUFRLFdBQVcsYUFBYTtBQUFBLE1BQzdDLGFBQWE7QUFBQSxNQUNiLFdBQVcsU0FBUztBQUFBLE1BQ3BCLFFBQVEsU0FBUztBQUFBO0FBQUEsTUFFakIsZUFBZTtBQUFBLFFBQ2IsUUFBUTtBQUFBLFVBQ04sY0FBYztBQUFBLFlBQ1osUUFBUSxDQUFDLFNBQVMsYUFBYSxlQUFlO0FBQUEsWUFDOUMsSUFBSTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBO0FBQUEsTUFFQSxXQUFXLFNBQVM7QUFBQSxJQUN0QjtBQUFBO0FBQUEsSUFFQSxRQUFRO0FBQUEsTUFDTixlQUFlO0FBQUEsSUFDakI7QUFBQTtBQUFBLElBRUEsY0FBYztBQUFBLE1BQ1osU0FBUyxDQUFDLFNBQVMsYUFBYSxlQUFlO0FBQUEsSUFDakQ7QUFBQTtBQUFBLElBRUEsS0FBSztBQUFBLE1BQ0gsWUFBWSxDQUFDLGFBQWE7QUFBQSxJQUM1QjtBQUFBLEVBQ0E7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

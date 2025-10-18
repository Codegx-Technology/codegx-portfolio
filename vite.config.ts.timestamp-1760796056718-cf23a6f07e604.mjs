// vite.config.ts
import { defineConfig, loadEnv } from "file:///C:/Users/omond/Documents/codegx-portfolio/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/omond/Documents/codegx-portfolio/node_modules/@vitejs/plugin-react/dist/index.mjs";
import themePlugin from "file:///C:/Users/omond/Documents/codegx-portfolio/node_modules/@replit/vite-plugin-shadcn-theme-json/dist/index.mjs";
import path, { dirname } from "path";
import runtimeErrorOverlay from "file:///C:/Users/omond/Documents/codegx-portfolio/node_modules/@replit/vite-plugin-runtime-error-modal/dist/index.mjs";
import { fileURLToPath } from "url";
import { visualizer } from "file:///C:/Users/omond/Documents/codegx-portfolio/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var __vite_injected_original_import_meta_url = "file:///C:/Users/omond/Documents/codegx-portfolio/vite.config.ts";
var __filename = fileURLToPath(__vite_injected_original_import_meta_url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const basePath = process.env.NODE_ENV === "production" && process.env.VITE_BASE_PATH ? process.env.VITE_BASE_PATH : "/";
  return {
    plugins: [
      react(),
      runtimeErrorOverlay(),
      themePlugin(),
      ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
        await import("file:///C:/Users/omond/Documents/codegx-portfolio/node_modules/@replit/vite-plugin-cartographer/dist/index.mjs").then(
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
    base: basePath,
    // Flexible base path for different deployments
    build: {
      outDir: path.resolve(__dirname, "dist/public"),
      emptyOutDir: true,
      sourcemap: mode !== "production",
      minify: mode === "production" ? "esbuild" : false,
      // Copy public files to build output
      copyPublicDir: true,
      // Target modern browsers for smaller bundle
      target: "es2020",
      // Increase chunk size warning limit (we're optimizing)
      chunkSizeWarningLimit: 1e3,
      // Optimize chunks for better caching and loading
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes("node_modules/react") || id.includes("node_modules/react-dom") || id.includes("node_modules/scheduler") || id.includes("node_modules/wouter")) {
              return "vendor";
            }
            if (id.includes("node_modules/framer-motion")) {
              return "framer";
            }
            if (id.includes("node_modules/@radix-ui")) {
              return "ui";
            }
            if (id.includes("node_modules/@tanstack/react-query")) {
              return "query";
            }
            if (id.includes("/lib/iconMap")) {
              return "icons";
            }
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
      include: ["react", "react-dom", "react/jsx-runtime", "framer-motion", "wouter"],
      esbuildOptions: {
        target: "es2020"
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxvbW9uZFxcXFxEb2N1bWVudHNcXFxcY29kZWd4LXBvcnRmb2xpb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcb21vbmRcXFxcRG9jdW1lbnRzXFxcXGNvZGVneC1wb3J0Zm9saW9cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL29tb25kL0RvY3VtZW50cy9jb2RlZ3gtcG9ydGZvbGlvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgdGhlbWVQbHVnaW4gZnJvbSBcIkByZXBsaXQvdml0ZS1wbHVnaW4tc2hhZGNuLXRoZW1lLWpzb25cIjtcclxuaW1wb3J0IHBhdGgsIHsgZGlybmFtZSB9IGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCBydW50aW1lRXJyb3JPdmVybGF5IGZyb20gXCJAcmVwbGl0L3ZpdGUtcGx1Z2luLXJ1bnRpbWUtZXJyb3ItbW9kYWxcIjtcclxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gXCJ1cmxcIjtcclxuaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gXCJyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXJcIjtcclxuXHJcbmNvbnN0IF9fZmlsZW5hbWUgPSBmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCk7XHJcbmNvbnN0IF9fZGlybmFtZSA9IGRpcm5hbWUoX19maWxlbmFtZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoYXN5bmMgKHsgbW9kZSB9KSA9PiB7XHJcbiAgLy8gTG9hZCBlbnYgZmlsZSBiYXNlZCBvbiBgbW9kZWAgaW4gdGhlIGN1cnJlbnQgd29ya2luZyBkaXJlY3RvcnkuXHJcbiAgLy8gU2V0IHRoZSB0aGlyZCBwYXJhbWV0ZXIgdG8gJycgdG8gbG9hZCBhbGwgZW52IHJlZ2FyZGxlc3Mgb2YgdGhlIGBWSVRFX2AgcHJlZml4LlxyXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgJycpO1xyXG5cclxuICBjb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgcHJvY2Vzcy5lbnYuVklURV9CQVNFX1BBVEggPyBwcm9jZXNzLmVudi5WSVRFX0JBU0VfUEFUSCA6IFwiL1wiO1xyXG5cclxuICByZXR1cm4ge1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBydW50aW1lRXJyb3JPdmVybGF5KCksXHJcbiAgICB0aGVtZVBsdWdpbigpLFxyXG4gICAgLi4uKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgcHJvY2Vzcy5lbnYuUkVQTF9JRCAhPT0gdW5kZWZpbmVkXHJcbiAgICAgID8gW1xyXG4gICAgICAgICAgYXdhaXQgaW1wb3J0KFwiQHJlcGxpdC92aXRlLXBsdWdpbi1jYXJ0b2dyYXBoZXJcIikudGhlbigobSkgPT5cclxuICAgICAgICAgICAgbS5jYXJ0b2dyYXBoZXIoKSxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgXVxyXG4gICAgICA6IFtdKSxcclxuICAgIC8vIEFkZCB2aXN1YWxpemVyIGluIGFuYWx5emUgbW9kZVxyXG4gICAgLi4uKHByb2Nlc3MuZW52LkFOQUxZWkUgPT09IFwidHJ1ZVwiID8gW3Zpc3VhbGl6ZXIoeyBvcGVuOiB0cnVlLCBnemlwU2l6ZTogdHJ1ZSwgYnJvdGxpU2l6ZTogdHJ1ZSB9KV0gOiBbXSksXHJcbiAgXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJjbGllbnRcIiwgXCJzcmNcIiksXHJcbiAgICAgIFwiQHNoYXJlZFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNoYXJlZFwiKSxcclxuICAgICAgXCJAYXNzZXRzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiYXR0YWNoZWRfYXNzZXRzXCIpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJvb3Q6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiY2xpZW50XCIpLFxyXG4gIGJhc2U6IGJhc2VQYXRoLCAvLyBGbGV4aWJsZSBiYXNlIHBhdGggZm9yIGRpZmZlcmVudCBkZXBsb3ltZW50c1xyXG4gIGJ1aWxkOiB7XHJcbiAgICBvdXREaXI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiZGlzdC9wdWJsaWNcIiksXHJcbiAgICBlbXB0eU91dERpcjogdHJ1ZSxcclxuICAgIHNvdXJjZW1hcDogbW9kZSAhPT0gJ3Byb2R1Y3Rpb24nLFxyXG4gICAgbWluaWZ5OiBtb2RlID09PSAncHJvZHVjdGlvbicgPyAnZXNidWlsZCcgOiBmYWxzZSxcclxuICAgIC8vIENvcHkgcHVibGljIGZpbGVzIHRvIGJ1aWxkIG91dHB1dFxyXG4gICAgY29weVB1YmxpY0RpcjogdHJ1ZSxcclxuICAgIC8vIFRhcmdldCBtb2Rlcm4gYnJvd3NlcnMgZm9yIHNtYWxsZXIgYnVuZGxlXHJcbiAgICB0YXJnZXQ6ICdlczIwMjAnLFxyXG4gICAgLy8gSW5jcmVhc2UgY2h1bmsgc2l6ZSB3YXJuaW5nIGxpbWl0ICh3ZSdyZSBvcHRpbWl6aW5nKVxyXG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxMDAwLFxyXG4gICAgLy8gT3B0aW1pemUgY2h1bmtzIGZvciBiZXR0ZXIgY2FjaGluZyBhbmQgbG9hZGluZ1xyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBtYW51YWxDaHVua3M6IChpZCkgPT4ge1xyXG4gICAgICAgICAgLy8gVmVuZG9yIGNodW5rIGZvciBjb3JlIFJlYWN0IGxpYnJhcmllcyAtIE1VU1QgaW5jbHVkZSB3b3V0ZXIgd2l0aCBSZWFjdFxyXG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMvcmVhY3QnKSB8fCBcclxuICAgICAgICAgICAgICBpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzL3JlYWN0LWRvbScpIHx8IFxyXG4gICAgICAgICAgICAgIGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMvc2NoZWR1bGVyJykgfHxcclxuICAgICAgICAgICAgICBpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzL3dvdXRlcicpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAndmVuZG9yJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gRnJhbWVyIE1vdGlvbiBpbiBzZXBhcmF0ZSBjaHVuayAodXNlZCBmcmVxdWVudGx5KVxyXG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbicpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnZnJhbWVyJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gUmFkaXggVUkgY29tcG9uZW50cyBpbiBzZXBhcmF0ZSBjaHVua1xyXG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMvQHJhZGl4LXVpJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuICd1aSc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIFJlYWN0IFF1ZXJ5IGluIHNlcGFyYXRlIGNodW5rXHJcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcy9AdGFuc3RhY2svcmVhY3QtcXVlcnknKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3F1ZXJ5JztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gSWNvbiBtYXAgaW4gc2VwYXJhdGUgY2h1bmsgKG5vdyBvcHRpbWl6ZWQpXHJcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJy9saWIvaWNvbk1hcCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnaWNvbnMnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgLy8gT3B0aW1pemUgQ1NTXHJcbiAgICBjc3NNaW5pZnk6IG1vZGUgPT09ICdwcm9kdWN0aW9uJyxcclxuICB9LFxyXG4gIC8vIERlZmluZSBlbnZpcm9ubWVudCB2YXJpYWJsZXNcclxuICBkZWZpbmU6IHtcclxuICAgICdwcm9jZXNzLmVudic6IGVudixcclxuICB9LFxyXG4gIC8vIE9wdGltaXplIGRlcGVuZGVuY2llc1xyXG4gIG9wdGltaXplRGVwczoge1xyXG4gICAgaW5jbHVkZTogWydyZWFjdCcsICdyZWFjdC1kb20nLCAncmVhY3QvanN4LXJ1bnRpbWUnLCAnZnJhbWVyLW1vdGlvbicsICd3b3V0ZXInXSxcclxuICAgIGVzYnVpbGRPcHRpb25zOiB7XHJcbiAgICAgIHRhcmdldDogJ2VzMjAyMCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgfVxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1VCxTQUFTLGNBQWMsZUFBZTtBQUM3VixPQUFPLFdBQVc7QUFDbEIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxRQUFRLGVBQWU7QUFDOUIsT0FBTyx5QkFBeUI7QUFDaEMsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyxrQkFBa0I7QUFOd0ssSUFBTSwyQ0FBMkM7QUFRcFAsSUFBTSxhQUFhLGNBQWMsd0NBQWU7QUFDaEQsSUFBTSxZQUFZLFFBQVEsVUFBVTtBQUVwQyxJQUFPLHNCQUFRLGFBQWEsT0FBTyxFQUFFLEtB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

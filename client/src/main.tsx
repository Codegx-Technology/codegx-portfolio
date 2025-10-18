console.log("🔵 Step 1: Imports starting...");

import { createRoot } from "react-dom/client";
console.log("🔵 Step 2: React imported");

import App from "./App";
console.log("🔵 Step 3: App imported");

import "./index.css";
console.log("🔵 Step 4: CSS imported");

// Fonts are loaded via Google Fonts in index.html (Montserrat)
console.log("🔵 Step 5: Fonts loaded from Google Fonts");

console.log("🚀 Main.tsx loaded");

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("❌ Root element not found!");
  document.body.innerHTML = '<div style="padding: 20px; font-family: Arial;"><h1>Error: Root element not found</h1><p>The #root div is missing from index.html</p></div>';
  throw new Error("Root element not found");
}

console.log("✅ Root element found, mounting React app...");

try {
  createRoot(rootElement).render(<App />);
  console.log("✅ React app mounted successfully!");
} catch (error) {
  console.error("❌ Error mounting React app:", error);
  document.body.innerHTML = `<div style="padding: 20px; font-family: Arial;"><h1>Error mounting app</h1><pre>${error}</pre></div>`;
}

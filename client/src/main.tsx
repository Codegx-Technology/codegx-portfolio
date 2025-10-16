import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Import fonts - Optimized: Latin subset only, essential weights
import "@fontsource/inter/400.css"; // Normal
import "@fontsource/inter/600.css"; // Semibold
import "@fontsource/inter/700.css"; // Bold
import "@fontsource/plus-jakarta-sans/400.css"; // Normal
import "@fontsource/plus-jakarta-sans/600.css"; // Semibold
import "@fontsource/plus-jakarta-sans/700.css"; // Bold

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(<App />);

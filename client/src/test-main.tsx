import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
if (!rootElement) {
  document.body.innerHTML = "<h1>ERROR: Root element not found</h1>";
  throw new Error("Root element not found");
}

try {
  createRoot(rootElement).render(
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Test Page - React is Working!</h1>
      <p>If you see this, React is mounting correctly.</p>
      <p>Time: {new Date().toLocaleString()}</p>
    </div>
  );
  console.log("✅ React mounted successfully!");
} catch (error) {
  console.error("❌ Error mounting React:", error);
  document.body.innerHTML = `<h1>Error: ${error}</h1>`;
}

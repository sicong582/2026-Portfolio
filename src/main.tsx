import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Make sure there's a <div id='root'></div> in index.html");
}

console.log("🚀 App starting...", { rootElement, hasApp: !!App });

try {
  const root = createRoot(rootElement);
  root.render(<App />);
  console.log("✅ App rendered successfully");
} catch (error) {
  console.error("❌ Failed to render app:", error);
  rootElement.innerHTML = `
    <div style="padding: 2rem; font-family: system-ui; max-width: 600px; margin: 2rem auto;">
      <h1 style="color: #dc2626;">Failed to load application</h1>
      <p style="color: #6b7280;">${error instanceof Error ? error.message : String(error)}</p>
      <pre style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem; overflow: auto; font-size: 0.875rem;">
        ${error instanceof Error ? error.stack : String(error)}
      </pre>
    </div>
  `;
}

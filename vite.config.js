import path from "path";
import { fileURLToPath } from "url"; // Import the necessary function to work with URLs
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Get the directory name in an ES module context
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

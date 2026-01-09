import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { mdx } from "@cyco130/vite-plugin-mdx";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react(), mdx()],
});

import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  server: {
		host: true,
		port: 4321,
	},
  vite: {
    plugins: [tailwindcss()]
  }
});

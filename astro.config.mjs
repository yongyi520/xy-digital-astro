import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: "static",
  server: {
		host: true,
		port: 4321,
	},
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()]
  }
});

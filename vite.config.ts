import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import adapter from "@sveltejs/adapter-static";
import "dotenv/config";
import { enhancedImages } from "@sveltejs/enhanced-img";

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit({
			adapter: adapter(),
			// paths: {
			// 	base:
			// 		process.env.NODE_ENV === "production" ? "/sveltekit-gh-pages" : "",
			// },
		}),
	],
});

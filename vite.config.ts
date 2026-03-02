import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		tailwindcss(),
		VitePWA({
			devOptions: {
				enabled: true,
			},
			registerType: "autoUpdate",
			workbox: {
				clientsClaim: true,
				skipWaiting: true, 
			},
			includeAssets: [
				"miganart.svg",
				"favicon.ico",
				"apple-touch-icon.png",
			],
			manifest: {
				name: "Miganart",
				description: "간단한 만다라트 작성 앱",
				theme_color: "#090c16",
				background_color: "#090c16",
				display: "standalone",
				id: "/",
				start_url: "/",
				scope: "/",
				icons: [
					{
						src: "/pwa-64x64.png",
						sizes: "64x64",
						type: "image/png",
					},
					{
						src: "/pwa-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "/pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "maskable",
					},
				],
				screenshots: [
					{
						src: "/pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
						form_factor: "wide",
						label: "Desktop View",
					},
					{
						src: "/pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
						form_factor: "narrow", 
						label: "Mobile View",
					},
				],
			},
		}),
	],
});

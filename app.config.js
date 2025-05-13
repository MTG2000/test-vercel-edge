import reactRefresh from "@vitejs/plugin-react";
import { createApp } from "vinxi";

export default createApp({
	server: {
		experimental: {
			websocket: true,
		},
	},
	routers: [
		{
			name: "public",
			type: "static",
			dir: "./public",
			base: "/",
		},
		{
			name: "client",
			type: "client",
			handler: "./app/client.tsx",
			target: "browser",
			plugins: () => [reactRefresh()],
			base: "/_build",
		}, 
		{
		name: 'server',
		type: 'http',
		handler: './app/server.tsx',
		base: '/',
		target: 'server',
		},
	],
});

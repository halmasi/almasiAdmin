import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const cherryPickedKeys = ["BACKEND_API"];

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	const processEnv: any = {};
	cherryPickedKeys.forEach((key) => (processEnv[key] = env[key]));

	return {
		define: {
			"process.env": processEnv,
		},
		plugins: [react()],
	};
});

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
	const plugins = [vue()];

	if (mode === 'development') {
		const { default: VueDevTools } = await import('vite-plugin-vue-devtools');
		plugins.push(VueDevTools());
	}

	return {
		plugins
	};
});

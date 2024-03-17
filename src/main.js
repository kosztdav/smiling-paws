import { createSSRApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import Tooltip from 'primevue/tooltip';

// Export a function that creates a fresh app instance
export const createApp = () => {
	const app = createSSRApp(App);
	app.directive('tooltip', Tooltip);
	app.use(router);
	return { app, router }; // Return router as well for server-side operations
};

import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router';

const isServer = typeof window === 'undefined';

const router = createRouter({
	history: isServer ? createMemoryHistory() : createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../pages/HomePage.vue')
		},
		{
			path: '/foglalkozasok',
			name: 'trainings',
			component: () => import('../pages/TrainingsPage.vue')
		},
		{
			path: '/hazirend',
			name: 'policy',
			component: () => import('../pages/PolicyPage.vue')
		},
		{
			path: '/kapcsolat',
			name: 'contact',
			component: () => import('../pages/ContactPage.vue')
		},
		{
			path: '/admin',
			name: 'admin',
			component: () => import('../pages/AdminPageEditor.vue')
		}
	]
});

export default router;

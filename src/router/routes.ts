import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{ path: '/', component: () => import('../pages/Index.vue') },
	{ path: '/about', component: () => import('../pages/About.vue') },
	{ path: '/contact', component: () => import('../pages/Contact.vue') },
	{ path: '/signup', component: () => import("../pages/Signup.vue") },
	{ path: '/:pathMatch(.*)*', component: () => import('../pages/404.vue') }
];

export default routes;

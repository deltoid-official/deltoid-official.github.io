import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{ path: '/', component: () => import('../views/Index.vue') },
	{ path: '/about', component: () => import('../views/About.vue') },
	{ path: '/contact', component: () => import('../views/Contact.vue') },
	{ path: '/:pathMatch(.*)*', component: () => import('../views/404.vue') }
]

export default routes
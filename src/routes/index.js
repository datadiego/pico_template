import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: () => import('../views/Home.vue') },
    { path: '/about', component: () => import('../views/About.vue') },
    { path: '/digital', component: () => import('../views/Digital.vue') },
    { path: '/generative', component: () => import('../views/Generative.vue') },
    { path: '/machine', component: () => import('../views/Machine.vue') },
    { path: '/ai', component: () => import('../views/AI.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
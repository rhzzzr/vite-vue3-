import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('/@/pages/index/index.vue')
    },
]
const router = createRouter({
    history: createWebHistory('/qidian/'),
    routes: routes,
})
export default router
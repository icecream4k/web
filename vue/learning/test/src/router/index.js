import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/test1',
        name: 'test',
        component: () => import('../components/rtspVideo.vue')
    },
    {
        path: '/test2',
        name: 'test2',
        component: () => import('../components/hlsVideo.vue')
    },
    {
        path: '/timerTest',
        name: 'timerTest',
        component: () => import('../components/timerTest.vue')
    },
    {
        path: '/echartsTest',
        name: 'echartsTest',
        component: () => import('../components/echartsTest.vue')
    },
    {
        path: '/v-for-button',
        name: 'v-for-button',
        component: () => import('../components/v-for-button.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
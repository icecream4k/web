import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/index'
    },
    {
        path: '/index',
        component: () => import('../views/index'),
        children: [
            {
            path: '',
            redirect: 'introduce'
        },{
            path:'introduce',
            component:()=>import('../components/main/content/introduce.vue')
        }, {
            path: 'transitionAnimation',
            component: () => import('../components/main/content/transitionAnimation.vue')
        }, {
            path: 'test',
            component: () => import('../components/test/test.vue')
        }]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
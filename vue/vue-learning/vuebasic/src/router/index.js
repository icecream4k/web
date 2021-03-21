import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: () => import( /* webpackChunkName:"home" */ '../views/home.vue')
    },
    {
        path: '/fuChuanZi',
        name: 'fuChuanZi',
        component: () => import( /* webpackChunkName:"fuChuanZi" */ '../components/父子组件/fuChuanZi.vue')
    },
    {
        path: '/classAndStyle',
        name: 'classAndStyle',
        component: () => import( /* webpackChunkName:"classAndStyle" */ '../components/绑定样式/classAndStyle.vue')
    },
    {
        path: '/vFor',
        name: 'vFor',
        component: () => import( /* webpackChunkName:"vFor" */ '../components/循环列表/vFor.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
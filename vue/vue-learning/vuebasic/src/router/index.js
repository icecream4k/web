import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        // 增加注释可以在开发者控制台中显示对应注释名的js文件
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
    },
    {
        path: '/event',
        name: 'event',
        component: () => import( /* webpackChunkName:"event" */ '../components/事件/event.vue')
    },
    {
        path: '/bro',
        name: 'bro',
        component: () => import( /* webpackChunkName:"bro" */ '../components/兄弟组件/bro.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
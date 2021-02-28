import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/index'
    },
    {
        path: '/index',
        component: () => import('../views/index.vue'),
        children: [{
            path: '',
            redirect: 'introduce'
        }, {
            // 欢迎介绍页
            path: 'introduce',
            component: () => import('../components/main/content/introduce.vue')
        }, {
            // 过渡动画
            path: 'transitionAnimation',
            component: () => import('../components/main/content/transitionAnimation.vue')
        }, {
            // 布局
            path: 'layout',
            component: () => import('../components/main/content/layout.vue')
        }, {
            // 容器实例
            path: 'containerInstance',
            component: () => import('../components/main/content/containerInstance.vue')
        }, {
            // 按钮
            path: 'button',
            component: () => import('../components/main/content/button.vue')
        }, {
            // 文字样式
            path:'link',
            component:()=>import('../components/main/content/link.vue')
        },{
            // 测试页
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
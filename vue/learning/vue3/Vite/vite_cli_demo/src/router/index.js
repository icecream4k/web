import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 配置路由信息
const routes = [{
    path: '/',
    component: () => import('../views/home.vue')
}]


const router = new VueRouter({
    // 如果要进行打包,那么则把mode设置成hash模式
    mode: 'hash',
    // 设定路由的history模式
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// 导出路由信息
export default router
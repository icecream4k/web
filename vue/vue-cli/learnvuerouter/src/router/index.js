// 配置路由相关的信息
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import User from '../components/User.vue'
// 通过Vue.use(插件),来安装这个插件
Vue.use(Router)
// 创建路由对象
// 导出路由映射关系
export default new Router({
    // 配置路由和组件之间的映射关系
    routes: [
        {
            path:'',
            // redirect - 重定向,如果url没有任何内容的时候,则会重定向到home路由
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/about',
            component:About
        },
        {
            path:'/user/:userid',
            component:User
        }
    ],
    // 如果设置模式为history,那么url则为传统html的url
    mode:'history',
    linkActiveClass:'active'
})
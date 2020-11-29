// 配置路由相关的信息
import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'

// 原本方式处理
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

// 懒加载处理
const Home = () => import('../components/Home.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const Profile = () => import('../components/Profile.vue')

// 通过Vue.use(插件),来安装这个插件
Vue.use(Router)
// 创建路由对象
// 导出路由映射关系
export default new Router({
    // 配置路由和组件之间的映射关系
    routes: [{
            path: '',
            // redirect - 重定向,如果url没有任何内容的时候,则会重定向到home路由
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
            meta:{
                title:'首页'
            },
            children:[
                {
                    path:'news',
                    meta:{
                        title:'新闻'
                    },
                    component:HomeNews
                },
                {
                    path:'message',
                    meta:{
                        title:'信息'
                    },
                    component:HomeMessage
                }
            ]
        },
        {
            path: '/about',
            
            component: About,
            meta:{
                title:'关于'
            },
            beforeEnter: (to, from, next) => {
                console.log('进入了about');
                next()
              }
        },
        {
            path: '/user/:Id',
            component: User,
            meta:{
                title:'我的'
            }
        },
        {
            path:'/profile',
            meta:{
                title:'档案'
            },
            component:Profile
        }
    ],
    // 如果设置模式为history,那么url则为传统html的url
 
    mode: 'history',
    linkActiveClass: 'active'
    
})
const router = new VueRouter({
    //配置路由和组件之间的应用关系
    router,
    mode:'history',
    linkActiveClass:'active'
})

// router.beforeEach((to, from, next) => {
//     // 从 from 跳转到 to
//     document.title = to.matched[0].meta.title;
//     console.log('进入了beforeEach');
//     next();
// })
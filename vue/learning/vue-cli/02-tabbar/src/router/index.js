import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 懒加载
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profie/Profile.vue')

// 设定路由
export default new Router({
    routes: [{
            path: '',
            redirect: '/home'
        },
        {
            path: '/category',
            component: Category
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/cart',
            component: Cart
        },
        {
            path: '/profile',
            component: Profile
        },

    ],
    mode: 'history',
    // linkActiveClass: 'active'
    
})
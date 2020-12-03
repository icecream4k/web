import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Home = () => impomrt('../views/home/Home.vue')
const Category = () => impomrt('../views/category/Category.vue')
const Cart = () => impomrt('../views/cart/Cart.vue')
const Profile = () => impomrt('../views/profie/Profile.vue')
export default new Router({
    routes: [{
            path: '',
            redirect: '/home'
        },
        {
            path: 'category',
            component: Category
        },
        {
            path: 'home',
            component: Home
        },
        {
            path: 'cart',
            component: Cart
        },
        {
            path: 'profie',
            component: Profile
        },
        
    ]
})
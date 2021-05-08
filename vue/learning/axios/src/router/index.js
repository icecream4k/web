import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


export default new Router({
    routes: [{
            path: "",
            redirect: '/Home'
        },
        {
            path: "/Home",
            component: () => import('../components/Home.vue')
        },
        {
            path: "/GlobalConfiguration",
            component: () => import('../components/GlobalConfiguration.vue')

        },
        {
            path: "/Example",
            component: () => import("../components/Example.vue")
        },
        {
            path: "/Interceptor",
            component: () => import("../components/Interceptor.vue")
        }
    ],
    mode: 'history',
})
import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

// 懒加载
const Home = () => import("../components/Home.vue")
const FirstAcquaintanceLess = () => import("../components/FirstAcquaintanceLess.vue")
const Variable = () => import("../components/Variable.vue")
const DelayedLoadingOfVariables = () => import("../components/DelayedLoadingOfVariables.vue")
const NestedRules = () =>import("../components/NestedRules.vue")

export default new Router({
    routes: [{
            path: "",
            redirect: "/home"
        },
        {
            path: "/home",
            component: Home
        },
        {
            path: "/FirstAcquaintanceLess",
            component: FirstAcquaintanceLess
        },
        {
            path: "/Variable",
            component: Variable
        },
        {
            path: "/DelayedLoadingOfVariables",
            component: DelayedLoadingOfVariables
        },
        {
            path:'/NestedRules',
            component:NestedRules
        }
    ],
    mode: "history"
})
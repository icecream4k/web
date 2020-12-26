import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

// 懒加载
const Home = () => import("../components/Home.vue")
const FirstAcquaintanceLess = () => import("../components/FirstAcquaintanceLess.vue")
const Variable = () => import("../components/Variable.vue")
const DelayedLoadingOfVariables = () => import("../components/DelayedLoadingOfVariables.vue")
const NestedRules = () =>import("../components/NestedRules.vue")
const OrdinaryMixing = () => import("../components/Mixing/OrdinaryMixing.vue")
const ParameterMixing = () => import("../components/Mixing/ParameterMixing.vue")
const ParameterDefaultMixed = () => import("../components/Mixing/ParameterDefaultMixed.vue")
const NamedParameterMixing = () => import("../components/Mixing/NamedParameterMixing.vue")
const MatchingPatternMixing = () => import("../components/Mixing/MatchingPatternMixing.vue")
const Arguments = () => import("../components/Mixing/Arguments.vue")
const Calculation  = () => import("../components/Calculation.vue")
const Inherit = () => import("../components/Inherit.vue")
const AvoidCompilation = () => import("../components/AvoidCompilation.vue")

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
        },
        {
            path:"/OrdinaryMixing",
            component:OrdinaryMixing
        },
        {
            path:"/ParameterMixing",
            component:ParameterMixing
        },
        {
            path:"/ParameterDefaultMixed",
            component:ParameterDefaultMixed
        },
        {
            path:"/NamedParameterMixing",
            component:NamedParameterMixing
        },
        {
            path:"/MatchingPatternMixing",
            component:MatchingPatternMixing
        },
        {
            path:'/Arguments',
            component:Arguments
        },
        {
            path:"/Calculation",
            component:Calculation
        },
        {
            path:"/Inherit",
            component:Inherit
        },
        {
            path:"/AvoidCompilation",
            component:AvoidCompilation
        }
    ],
    mode: "history"
})
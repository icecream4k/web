import Vue from 'vue'
import Router from 'vue-router'


const Home = () => import('../components/Home.vue')
const GlobalConfiguration = () => import('../components/GlobalConfiguration.vue')

Vue.use(Router)


export default new Router({
  routes: [{
      path: "",
      redirect: '/Home'
    },
    {
      path: "/Home",
      component: Home
    },
    {
      path: "/GlobalConfiguration",
      component: GlobalConfiguration
    },
    {
      path: "/Example",
      component:() => import("../components/Example.vue")
    }
  ],
  mode: 'history',
})
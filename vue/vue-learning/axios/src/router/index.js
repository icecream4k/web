import Vue from 'vue'
import Router from 'vue-router'


const Home = () => import('../components/Home.vue')
const Demo = () => import('../components/Demo.vue')

Vue.use(Router)


export default new Router({
  routes: [
    {
      path:"",
      redirect:'/Home'
    },
    {
      path:"/Home",
      component:Home
    },
    {
      path:"/Demo",
      component:Demo
    }
  ],
  mode: 'history',
})

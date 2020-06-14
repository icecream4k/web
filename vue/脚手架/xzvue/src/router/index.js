import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Notfond from '../views/Notfond.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path:'/',
    component:Index
  },
  {
    path:'/details/:lid',
    props:true,
    component:()=>import(
      /* webpackChunkName: 'details' */
      '../views/Details.vue'
    ) 
  },
  {
    path:'*',component:Notfond
  }
]

const router = new VueRouter({
  routes
})

export default router

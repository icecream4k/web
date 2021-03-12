import Vue from 'vue'
import VueRouter from 'vue-router'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        
        component:()=>import('../components/home.vue')
    },
    {
        path:'/t1',
        component:()=>import('../components/three/t1.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

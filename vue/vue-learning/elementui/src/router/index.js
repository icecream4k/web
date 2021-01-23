import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:"",
        redirect:'/Index'
    },
    {
        path:"/Index",
        component:()=>import('../views/Index'),
        children:[{
            path:'',
            components:{
                Header:()=>import('../components/header/Header.vue'),
                Footer:()=>import('../components/footer/Footer.vue'),
            }
        }]
    },
    {
        path:"/test",
        component:()=>import('../components/test/test.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

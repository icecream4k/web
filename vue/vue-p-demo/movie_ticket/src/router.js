//wupanyan
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import city from './views/city.vue'
import cinema from './views/cinema.vue'
import cinemaDetail from './components/cinema/cinemaDetail.vue'
import carousel from './components/carousel.vue'
// yuanzong
import Booking from '@/views/Booking'
import ChoiceSeat from '@/views/ChoiceSeat'
// zhangli
import User from "./views/User.vue"
import Login from "./views/Login.vue"
import Reg from "./views/Reg.vue"
import OrderList from "./views/OrderList.vue"
import OrderDetail from "./views/OrderDetail.vue"
import LikeList from "./views/LikeList"
//huanhuan
import Product from "./views/Product.vue"
import Prodetails from "./views/Prodetails.vue"
import Pay from "./views/Pay.vue"





Vue.use(Router)
// 包含测试路由
export default new Router({
  routes: [
    {
      path:'/carousel',
      name:"carousel",
      component:carousel
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      // meta:{
      //   keepAlive:true
      // }
    },
    {
      path:'/city',
      name:'city',
      component:city
    },
    {
      path:'/cinema',
      name:"cinema",
      component:cinema,
      meta:{
        city:[]
        // keepAlive:true
      }
    },
    {
      path:'/cinemaDetail/:cid',
      name:'cinemaDetail',
      component:cinemaDetail,
      props:true
      // meta:{
      //   keepAlive:true
      // }
    },
    // yuazong
		{
		  path: '/booking',
		  name: 'booking',
		  component: Booking,
			
		},
		{
		  path: '/choiceseat',
		  name: 'choiceseat',
		  component: ChoiceSeat,	
    },
    // zhangli
    {
      path:'/User',
      name:"User",
      component:User,
      meta:{
        uname:""
      }
    },
    {
      path:'/OrderDetail',
      name:'OrderDetail',
      component:OrderDetail
    },
    {
      path:'/OrderList',
      name:"OrderList",
      component:OrderList
    },
    {
      path:'/Reg',
      name:'Reg',
      component:Reg
    },
    {
      path:'/Login',
      component:Login,
      name:"login"
    },
    {
      path:'/LikeList',
      name:'LikeList',
      component:LikeList
    },
    // huanhuan
    {
      path:'/Product',
      component:Product,
      name:"product"
      // meta:{
      //       keepAlive: true // 需要被缓存
      //     }
    },
    {
      path:'/Prodetails',
      name:'prodetails',
      component:Prodetails
    },
    {
      path:'/Pay/',
      name:"pay",
      component:Pay
    }
  ]
})

// 引入
import Vue from 'vue'
import Router from 'vue-router'

// 懒加载
const HelloWorld = () => import("../components/HelloWorld.vue")

// 注册组件
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"",
      redirect:'/Index'
    },
    {
      path:"/Index",
      component:HelloWorld
    }
    
  ]
})


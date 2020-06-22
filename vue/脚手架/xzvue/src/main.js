import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import myHeader from './components/myHeader.vue'




Vue.component('my-header',myHeader)
//结果：在当前项目中任何位置都可以使用<my-header></my-header>
Vue.config.productionTip = false
new Vue({
  router,//路由器组件-实现单页面应用的核心
  store,//vuex知识
  render: h => h(App)//引入app.vue的内容
}).$mount('#app')//替换到页面中的id未app的div位置

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,//路由器组件-实现单页面应用的核心
  store,//vuex知识
  render: h => h(App)//引入app.vue的内容
}).$mount('#app')//替换到页面中的id未app的div位置

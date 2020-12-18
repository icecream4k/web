import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import bottomBar from "./components/bottomBar.vue"
import myHeder from "./components/myHeader.vue"
import myLoading from "./components/loading.vue"
import filter from "./filter"

import MintUI from 'mint-ui'

import'mint-ui/lib/style.css'

Vue.use(MintUI)
//配置axios
axios.defaults.withCredentials=true
// axios.defaults.baseURL="http://47.106.185.72:3000"
axios.defaults.baseURL="http://127.0.0.1:3000"
Vue.prototype.axios=axios

Vue.config.productionTip = false

// 注册全局组件
Vue.component("bottomBar",bottomBar)
Vue.component("myHeader",myHeder)
Vue.component("myLoading",myLoading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')




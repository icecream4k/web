import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueVideoPlayer from 'vue-video-player'
import echarts from 'echarts'
import axios from './network/http'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$axios = axios

Vue.prototype.$echarts = echarts


Vue.use(VueVideoPlayer)
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
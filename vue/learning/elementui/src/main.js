// 引入
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueParticles from 'vue-particles'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { borderBox4 } from '@jiaminghi/data-view'
import { decoration10 } from '@jiaminghi/data-view'


// 注册
Vue.use(borderBox4)
Vue.use(decoration10)
Vue.use(ElementUI)
Vue.use(VueParticles)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
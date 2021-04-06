import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { borderBox7 } from '@jiaminghi/data-view'
Vue.use(borderBox7)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
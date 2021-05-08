import Vue from 'vue'
import App from './App'
import router from './router'
import less from 'less'
import dataV from '@jiaminghi/data-view'
// import Charts from "@jiaminghi/charts"
// import axios from "axios"
Vue.use(less)
Vue.use(dataV)
// Vue.use(Charts)
// Vue.use(axios)
// Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})


Vue.config.productionTip = false
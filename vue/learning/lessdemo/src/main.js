import Vue from 'vue'
import App from './App'
import router from './router'
import less from 'less'

Vue.use(less)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

Vue.config.productionTip = false
import Vue from 'vue'
import App from './App'
import router from './router'
import less from 'less'
import dataV from '@jiaminghi/data-view'

Vue.use(less)
Vue.use(dataV)


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})


Vue.config.productionTip = false
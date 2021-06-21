import {
    createApp
} from 'vue'
import App from './App.vue'
import * as echarts from 'echarts'

createApp(App).mount('#app').use(echarts)
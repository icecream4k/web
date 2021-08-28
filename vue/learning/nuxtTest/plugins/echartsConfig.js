import Vue from "vue"; // 引入vue来进行挂载使用
import * as echarts from "echarts"; // 引入echart
Vue.prototype.$echarts = echarts; // 挂载echart在vue的原型对象上
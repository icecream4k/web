import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// axios的基本使用
axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  method: 'get'
}).then(res => {
  // console.log(res);
})

// axios发送并发请求
// 用axios.all 并且给两个axios请求,在最终的.then里面进行囊括所有的请求
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
// }), axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(
//   res => {
//   // 这里的res是一个数组,可以对数组进行操作 
//   console.log(res);
// }

// 也开始用axios.spread打开每一个res的结果,这样的返回值就是n个对象了,而不是数组,可以对,res1或者resN进行操作
// 这里相当于是一个对于参数的解构,因为参数是数组,所以相当于是一个数组的解构
// axios.spread((res1,res2) => {
//   console.log('结果1 >>> ',res1);
//   console.log('结果2 >>> ',res2);
// })
// )
// 对象的解构
const obj = {
  name:'kobe',
  age:30
}
const {name,age} = obj;

// 数组的解构
const names = ['why','kobe','han']
// 传统写法
// const name1 = names[0]
// 解构写法
const [name1,name2,name3] = names;
console.log('name1 >>> ',name1);

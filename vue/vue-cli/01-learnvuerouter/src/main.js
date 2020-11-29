import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
console.log(router);

// beforeEach放在main.js里面就可以了
// 前置钩子(hook)
router.beforeEach((to, from, next) => {
    // 从 from 跳转到 to
    document.title = to.matched[0].meta.title;
    // console.log('>>>>>>>>>>',to.meta.title);
    console.log(`前置钩子函数启动,从${from.meta.title}跳转到${to.meta.title}`);
    next();
})

// 后置钩子()
router.afterEach((to,from)=>{
    console.log(`后置钩子函数启动,从${from.meta.title}跳转到${to.meta.title}`);
})
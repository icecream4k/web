import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 避免在首页点击标题导致路由冗余的报错
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch((error) => error);
};

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");

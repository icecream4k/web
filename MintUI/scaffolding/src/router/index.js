import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

//测试案例开始
import Header from "../components/MintUI/Header.vue";
import Button from '../components/MintUI/Button.vue';
import Field from '../components/MintUI/Field.vue';
//测试案例结束
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/header",
    // name: "Home",暂时可以没有
    component: Header,
  },
  {
    path:"/field",
    component:Field,
  },
  {
    path: "/button",
    // name: "Home",暂时可以没有
    component: Button,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

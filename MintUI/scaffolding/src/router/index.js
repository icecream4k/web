import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

//测试案例开始
import Header from "../components/MintUI/Header.vue";
import Button from "../components/MintUI/Button.vue";
import Field from "../components/MintUI/Field.vue";
import Toast from "../components/MintUI/Toast.vue";
import Register from "../views/Register";
import Checklist from "../components/MintUI/Checklist.vue";
import Radio from "../components/MintUI/Radio.vue";
import Switch from "../components/MintUI/Switch.vue";
import Navbar from "../components/MintUI/Navbar.vue";
import Tabcontainer from "../components/MintUI/Tabcontainer.vue";
import Tabbar from "../components/MintUI/Tabbar.vue"
import test from "../components/MintUI/test.vue"
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
    path: "/field",
    component: Field,
  },
  {
    path: "/checklist",
    component: Checklist,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/radio",
    component: Radio,
  },
  {
    path: "/button",
    // name: "Home",暂时可以没有
    component: Button,
  },
  {
    path: "/toast",
    component: Toast,
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
  {
    path: "/switch",
    component: Switch,
  },
  {
      path:"/navbar",
      component:Navbar,
  },
  {
      path:"/tabcontainer",
      component:Tabcontainer,
  },
  {
      path:'/tabbar',
      component:Tabbar,
  },
  {
      path:'/test',
      component:test
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
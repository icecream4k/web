import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
    { path: "", redirect: "/Home" },
    {
        path: "/Home",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
];

const router = new VueRouter({
    mode: "hash",
    //   mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;

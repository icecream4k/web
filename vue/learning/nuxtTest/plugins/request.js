import Vue from "vue";
import axios from "axios";
import qs from "qs";

const http = axios.create({
    baseURL: "http://0.0.0.0:5001/"
});
const sparehttp = axios.create({
    baseURL: "http://127.0.0.1:5000/"
});
// 请求拦截器
http.interceptors.request.use(res => {
    // let token = "";
    // if (JSON.parse(sessionStorage.getItem("userInformation"))) {
    //     token = JSON.parse(window.sessionStorage.getItem("userInformation"))
    //         .data["token"];
    // }
    // if (token) {
    //     res.headers["token"] = token;
    // }
    return Promise.resolve(res);
});

// 响应拦截器
http.interceptors.response.use(res => {
    // if (res.data.code == 10007) {
    //     Vue.prototype.$notify({
    //         title: "警告",
    //         message: `登录过期,即将跳转登录页`,
    //         type: "warning"
    //     });
    //     setTimeout(() => {
    //         router.push("/login");
    //     }, 2000);
    // }
    return Promise.resolve(res);
});

Vue.prototype.$http = http;
Vue.prototype.$sparehttp = sparehttp;
Vue.prototype.$qs = qs;

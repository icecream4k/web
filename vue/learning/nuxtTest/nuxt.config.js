export default {
    mode: "universal", // 设置之后网站项目里面所有的页面都有单独的路径
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "nuxtTest",
        htmlAttrs: {
            lang: "en"
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },
    // 进行ajax请求时顶部进度条的颜色
    loading: { color: "red" },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["~/assets/style/mian.css", "~/assets/style/reset.css"],
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    // 加载第三方插件
    plugins: ["@/plugins/echartsConfig", "@/plugins/request"],
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],
    // Modules: https://go.nuxtjs.dev/config-modules
    // 相当于全局注册
    modules: ["@nuxtjs/toast"],
    toast: {
        position: "top-center",
        duration: 2000
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    router:{
        
        middleware:'goto_m'
    }
};

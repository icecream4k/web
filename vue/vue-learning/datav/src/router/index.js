import Vue from 'vue'
import Router from 'vue-router'


// 懒加载
const Home = () => import('../components/Home.vue')
const Loading_demo = () => import('../components/loading_demo.vue')
const Full_screen_container = () => import('../components/Full_screen_container.vue')
const DvBorderBox = () => import('../components/DvBorderBox.vue')
const Test = () => import('../components/Test.vue')
const Decorate = () => import('../components/Decorate.vue')
const Dynamic_ring_graph = () => import('../components/Chart/Dynamic_ring_graph.vue')
const Capsule_column = () => import('../components/Chart/Capsule_column.vue')
const Water_level_chart = () => import('../components/Chart/Water_level_chart.vue')
const Progress_pool = () =>import('../components/Chart/Progress_pool.vue')






// 注册
Vue.use(Router)
export default new Router({
    routes: [{
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/loading_demo',
            component: Loading_demo
        },
        {
            path: '/full_screen_container',
            component: Full_screen_container
        },
        {
            path: '/dvborderbox',
            component: DvBorderBox
        },
        {
            path: '/test',
            component: Test
        },
        {
            path: '/decorate',
            component: Decorate
        },
        {
            path: '/dynamic_ring_graph',
            component: Dynamic_ring_graph
        },
        {
            path: '/capsule_column',
            component: Capsule_column
        },
        {
            path: '/water_level_chart',
            component: Water_level_chart
        },
        {
            path:'/progress_pool',
            component:Progress_pool
        }
    ],

    // 更变路由模式为history
    mode: 'history',
})
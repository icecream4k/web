<template>
    <div id="app">
        <router-link to="/Home" tag="button">首页</router-link>
        <router-link to="/GlobalConfiguration" tag="button">全局配置</router-link>
        <router-link to="/Example" tag="button">实例</router-link>
        <router-link to="/Interceptor" tag="button">拦截器</router-link>
        <router-view></router-view>
        <helloWorld /> 
    </div>
</template>

<script>
    import helloWorld from './components/helloWorld'
    import axios from 'axios'
    export default {
        name: 'App',
        components: {
            helloWorld 
        },
        data() {
            return {
                result: null,
            }
        },
        created() {
            axios({
                url: 'http:/111.222.333:4444'
            }).then(res => {
                console.log(res);
                this.result = res
            })
        },
    }
</script>

<style lang="less">
    #app>div {
        margin-top: 2vw;
    }
</style>
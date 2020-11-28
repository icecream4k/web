<template>
    <div>
        <h2>我是首页</h2>
        <p>我是首页内容,哈哈哈</p>
        
        <router-link tag="button" to='/home/news'>新闻</router-link>
        <router-link tag="button" to='/home/message'>消息</router-link>
        <router-view></router-view>
        <h3>{{message}}</h3>
    </div>
</template>
<script>
export default {
    name: "Home",
    data() {
        return {
            message:'你好'
        }
    },
    created() { // 创建组件时候回调的
        console.log('created');
        document.title = '首页'

    }

};
</script>
<style scoped>
</style>
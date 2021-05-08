<template>
    <div>
        <h2>this is index</h2>
        <p>this is index content</p>
        <router-link tag="button" to="/home/news">新闻</router-link>
        <router-link tag="button" to="/home/message">消息</router-link>
        <router-view></router-view>
        <h3>{{ message }}</h3>
    </div>
</template>
<script>
export default {
    name: "Home",
    data() {
        return {
            message: "你好",
            path: "/about",
        };
    },
    created() {
        // 创建组件时候回调的
        console.log("首页创建");
        document.title = "首页";
        // this.$router.push('/home/news')
    },
    destroyed() {
        console.log("首页销毁");
    },

    // 这两个函数,只有该组件被保持了状态使用了keep-alive时,才是有效的
    activated() {
        console.log(`首页组件被激活`);
        this.$router.push(this.path);
    },
    deactivated() {
        console.log(`首页组件取消激活状态`);   
    }
    ,
    // beforeRouteLeave(to, from, next) {
    //     console.log(this.$route.path);
    //     this.path = this.$route.path;
    //     next();
    // },
};
</script>
<style scoped>
</style>
<template>
    <div>
        <h2>我是用户界面</h2>
        <p>我是用户的相关嘻嘻,欢迎</p>
        <span style="color: blue">{{ userId }}</span>
        <h2>{{$route.params.id}}</h2>
        <button @click="btnClick">按钮</button>
    </div>
</template>
<script>
export default {
    name: "User",
    computed: {
        userId() {
            return this.$route.params.Id;
        },
    },
    methods: {
        btnClick(){
            console.log(this.$router);
            console.log(this.$route);
        }
    },
    // created() { // 串讲组件时候回调的
    //     console.log('created');
    //     document.title = '用户'
    // } 
};
</script>
<style scoped>
</style>
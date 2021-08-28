<template>
    <div class="index">
        <h1>这是news页面</h1>
        <h2>得到的id是:{{ val }}</h2>
        <nuxt-link :to="{ name: 'index' }">回首页</nuxt-link>
    </div>
</template>
<script>
export default {
    name: "index",
    data() {
        return {
            val: this.$route.params.id
        };
    },
    methods: {
        getRouterData() {
            console.log(`666`, this.val);
            this.RequestTest();
        },
        async RequestTest() {
            const prot1Request = await this.$http.get("/t1");
            const prot2Request = await this.$sparehttp.get("/t1");
            console.log("接口1,axios请求测试的结果:", prot1Request);
            console.log("接口2,axios请求测试的结果:", prot2Request);
        }
    },
    mounted() {
        this.getRouterData();
    }
};
</script>
<style lang="less" scoped></style>

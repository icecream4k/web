<template>
    <div class="_id">
        <h1>动态id的页面</h1>
        <h2>得到的id是:{{ val }}</h2>
        <nuxt-link :to="{ name: 'index' }">回首页</nuxt-link>
    </div>
</template>
<script>
export default {
    // name: "_id",

    validate({ params }) {
        console.log(params.id);
        return params.id === "456";
    },
    // validate({ params, store }) {
    //     // 校验 `params.id` 是否存在
    //     return store.state.categories.some(
    //         category => category.id === params.id
    //     );
    // },
    data() {
        return {
            val: this.$route.params.id
        };
    },
    mounted() {
        this.$toast.show("啦啦啦");
        this.$toast.error("啦啦啦");
        this.$toast.success("啦啦啦");
    }
};
</script>
<style lang="less" scoped></style>

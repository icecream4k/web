<template>
    <div class="error">
        <h1>{{ msg }}</h1>
        <h1>错误信息:{{ error.statusCode }} / {{error.message}}</h1>
        <nuxt-link :to="{ name: 'index' }">回首页</nuxt-link>
    </div>
</template>
<script>
export default {
    name: "error",
    props: ["error"],
    data() {
        return {
            msg: "错误页面"
        };
    }
};
</script>
<style lang="less" scoped></style>

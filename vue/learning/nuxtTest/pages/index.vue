<template>
    <div class="index">
        <h1>首页</h1>
        <nuxt-link :to="{ name: 'about' }">about</nuxt-link>
        <nuxt-link :to="{ name: 'news', params: { id: 9527 } }">news</nuxt-link>
        <a href="/news/456">动态路由</a>
        <nuxt-link :to="{ name: 'chart' }">Echarts图表渲染</nuxt-link>
        <nuxt-link :to="{ name: 'abcxxx' }">错误路径跳转</nuxt-link>
    </div>
</template>
<script>
export default {
    name: "index"
};
</script>
<style lang="less" scoped></style>

<template>
    <div>
        <h2>我是关于</h2>
        <p>我是关于内容,呵呵呵</p>
    </div>
</template>
<script>
export default {
    name: "About",
    created() { // 串讲组件时候回调的
        console.log('关于创建');
        document.title = '关于'
    }
};
</script>
<style scoped>
</style>
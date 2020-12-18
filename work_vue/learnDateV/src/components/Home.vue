<template>
    <div>
        <router-link to='test' tag="button">测试页</router-link>
        <router-link to='full_screen_container' tag="button">全屏容器</router-link>
        <router-link to='loading_demo' tag="button">loading加载</router-link>
        <router-link to='dvborderbox' tag="button">边框特效</router-link>
        <router-link to="decorate" tag="button">装饰</router-link>
        <router-link to="chart" tag="button">图表</router-link>
    </div>
</template>
<script>
   export default {
       name: 'Home'
    };
</script>
<style scoped>

</style>
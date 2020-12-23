<template>
    <div id="wrap">
        <router-link to="/home" tag="button">首页</router-link>
        <div class="inner"></div>
    </div>
</template>
<script>
    export default {
        name: 'NestedRules'
    };
</script>
<style lang='less'>
    @import "../../styles/NestedRules.less";
</style>
<template>
    <div id="wrap">
        <router-link to="/home" tag="button">首页</router-link>
        <div class="inner"></div>
        <div class="inner2"></div>
    </div>
</template>
<script>
    export default {
        name: 'ParameterMixing'
    };
</script>
<style lang='less'>
    @import "../../../styles/Mixing/ParameterMixing.less";
</style>
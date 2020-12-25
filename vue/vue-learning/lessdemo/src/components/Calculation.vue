<template>
    <div id="wrap">
        <router-link to="/home" tag="button">首页</router-link>
        <div class="calculation"></div>
    </div>
</template>
<script>
    export default {
        name: 'calculation'
    };
</script>
<style lang='less'>
    @import "../../styles/Calculation.less";
</style>
<template>
    <div id="wrap">
        <router-link to="/home" tag="button">首页</router-link>
        <div class="arguments"></div>
    </div>
</template>

<script>
    export default {
        name: 'Arguments'
    };
</script>
<style lang='less'>
    @import "../../../styles/Mixing/Arguments.less";
</style>
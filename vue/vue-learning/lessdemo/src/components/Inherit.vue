<template>
    <div id="wrap">
        <router-link to="/home" tag="button">首页</router-link>
        <div class="inner">inner1</div>
        <div class="inner">inner2</div>
    </div>
</template>
<script>
    export default {
        name: 'Inherit',
        data() {
            return {
                
            }
        },
    };
</script>
<style lang="less">
    @import "../../styles/Inherit.less";
</style>
<template>
    <div>
        <div id="wrap">
            <router-link to="/Home" tag="button">首页</router-link>
            <div class="cd1">
                <div class="d1"></div>
                <div class="d2"></div>
                <div class="d3"></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'DelayedLoadingOfVariables'
    };
</script>
<style lang='less'>
    @import "../../styles/DelayedLoadingOfVariables.less";

    .cd1 div {
        width: 100px;
        height: 100px;
    }
</style>
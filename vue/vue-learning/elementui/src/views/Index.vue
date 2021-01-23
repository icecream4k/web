<template>
    <div class="index" id="Index">
        <div class="integratedContainer">
            <!-- 首页上方导航内容 -->
            <div class="pageHeader">
                <router-view name="Header"></router-view>
            </div>
            <!-- 主体内容 -->
            <div class="pageMain">
                <router-view></router-view>
            </div>
            <!-- 页脚 -->
            <div class="pageFooter">
                <router-view name="Footer"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style lang='less'>
    // @import "~assets/less/Index.less";
</style>
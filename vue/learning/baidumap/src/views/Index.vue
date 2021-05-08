<template>
    <div class="index" id="Index">
        <div class="header">
            <div class="headerLeft">

            </div>
            <div class="headerMiddle">

            </div>
            <div class="headerRight">

            </div>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
        <div class="footer">
            
        </div>
    </div>
</template>
<script>
    export default {
        name: 'index'
    };
</script>
<style lang='less'>
    @import '../assets/less/Index.less';
</style>
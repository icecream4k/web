<template>
    <div id="app">
        <div id="tab-bar">
            <div class="tab-bar-item">首页</div>
            <div class="tab-bar-item">分类</div>
            <div class="tab-bar-item">购物车</div>
            <div class="tab-bar-item">我的</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    components: {
        
    },
};
</script>

<style>
    /* 在style里面引用资源的时候,要加上@import */
    @import url('./assets/css/base.css');
    #tab-bar{
        display: flex;
        background-color: #eee;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow:0px -1px 1px rgba(100,100,100,0.14);
    }
    .tab-bar-item{
        flex: 1;
        text-align: center;
        height: 49px;
    }
    /* body{
        padding: 0;
        margin: 0;
    } */
</style>

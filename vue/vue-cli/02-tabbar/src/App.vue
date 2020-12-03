<template>
    <div id="app">
        <tab-bar>
            <tab-bar-item>
                <img
                    slot="item-icon"
                    src="./assets/img/tabbar/首页.png"
                    alt=""
                />
                <img
                    slot="item-icon-active"
                    src="./assets/img/tabbar/首页-选中.png"
                    alt=""
                />
                <div slot="item-text">首页</div>
            </tab-bar-item>
            <tab-bar-item>
                <img
                    slot="item-icon"
                    src="./assets/img/tabbar/分类.png"
                    alt=""
                />
                <img
                    slot="item-icon-active"
                    src="./assets/img/tabbar/分类-选中.png"
                    alt=""
                />
                <div slot="item-text">分类</div>
            </tab-bar-item>
            <tab-bar-item>
                <img
                    slot="item-icon"
                    src="./assets/img/tabbar/购物车.png"
                    alt=""
                />
                <img
                    slot="item-icon-active"
                    src="./assets/img/tabbar/购物车-选中.png"
                    alt=""
                />
                <div slot="item-text">购物车</div>
            </tab-bar-item>
            <tab-bar-item>
                <img
                    slot="item-icon"
                    src="./assets/img/tabbar/我的.png"
                    alt=""
                /><img
                    slot="item-icon-active"
                    src="./assets/img/tabbar/我的-选中.png"
                    alt=""
                />
                <div slot="item-text">我的</div>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TabBarItem";

export default {
    name: "App",
    components: {
        TabBar,
        TabBarItem,
    },
};
</script>

<style>
/* 在style里面引用资源的时候,要加上@import */
@import url("./assets/css/base.css");

/* body{
        padding: 0;
        margin: 0;
    } */
</style>

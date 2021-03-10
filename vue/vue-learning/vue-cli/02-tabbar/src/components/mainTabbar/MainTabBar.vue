<template>
    <tab-bar>
        <tab-bar-item path="/home" activeColor="#0bc15f">
            <img slot="item-icon" src="../../assets/img/tabbar/首页.png" alt="" />
            <img
                slot="item-icon-active"
                src="../../assets/img/tabbar/首页-选中.png"
                alt=""
            />
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category" activeColor="#dd6572">
            <img slot="item-icon" src="../../assets/img/tabbar/分类.png" alt="" />
            <img
                slot="item-icon-active"
                src="../../assets/img/tabbar/分类-选中.png"
                alt=""
            />
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart" activeColor="#548fd5">
            <img slot="item-icon" src="../../assets/img/tabbar/购物车.png" alt="" />
            <img
                slot="item-icon-active"
                src="../../assets/img/tabbar/购物车-选中.png"
                alt=""
            />
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="#84b5e2">
            <img
                slot="item-icon"
                src="../../assets/img/tabbar/我的.png"
                alt=""
            /><img
                slot="item-icon-active"
                src="../../assets/img/tabbar/我的-选中.png"
                alt=""
            />
            <div slot="item-text">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>
<script>
import TabBar from "../tabbar/TabBar";
import TabBarItem from "../tabbar/TabBarItem";

export default {
    name: "MainTabBar",
    components:{
        TabBar,
        TabBarItem
    }
};
</script>
<style scoped>
</style>
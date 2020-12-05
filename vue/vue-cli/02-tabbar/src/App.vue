<template>
    <div id="app">
        <router-view></router-view>
        <main-tab-bar></main-tab-bar>
    </div>
</template>

<script>
import MainTabBar from "./components/MainTabBar";

export default {
    name: "App",
    components: {
        MainTabBar,
    },
};
</script>

<style>
/* 在style里面引用资源的时候,要加上@import */
@import url("./assets/css/base.css");
</style>

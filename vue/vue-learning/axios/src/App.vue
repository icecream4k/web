<template>
  <div id="app">
    <router-link to="/Home" tag="button">首页</router-link>
    <router-link to="/GlobalConfiguration" tag="button">全局配置</router-link>
    <router-link to="/Example" tag="button">实例</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="less">
  #app>div {
    margin-top: 2vw;
  }
</style>
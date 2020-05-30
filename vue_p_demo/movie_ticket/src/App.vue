<template>
  <div id="app">
    <keep-alive :include="cacheComponent">
      <router-view></router-view>
    </keep-alive>
    <!-- <router-view v-if="!$route.meta.keepAlive"></router-view> -->
    <!-- cinemaDetails组件全局缓存 -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  computed:{
    cacheComponent(){
      return this.$store.state.cacheComponent
    }
  },
  // mounted(){
  //   window.onbeforeunload=function(){
  //     localStorage.clear()
  //   }
  // }
}
</script>

<style>

</style>

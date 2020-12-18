<template>
  <router-link to='/city' tag='div'>
    <i class="iconfont icon-dingwei1"></i>
    {{$store.state.cityAndCinema.cName|strFilter('cName')}}
    <i class="iconfont icon-xiala"></i>
  </router-link>
  
</template>

<script>
export default {
  
}
</script>


<style scoped lang="stylus">
  div
    font-size: 1.1rem
    .iconfont 
      color: #8a8a8a;
      font-weight: bold
    .icon-dingwei1
      position: relative
      top: .08333rem
      font-size: 1.5rem
    .icon-xiala
      font-size: 1rem
</style>

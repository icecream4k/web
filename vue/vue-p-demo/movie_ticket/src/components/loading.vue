<template>
<!-- 加载提示组件 -->
  <div v-show="loadStatus" class="loading">
    <i class="iconfont icon-loading"></i>
    加载中
  </div>
</template>

<script>
export default {
  props:{
    loadStatus:{
      type:Boolean,
      default:false
    }
  }
}
</script>


<style scoped lang="stylus">
 .loading
    width: 8rem
    height: 8rem
    position: fixed 
    z-index: 200
    left: 50%
    top: 50%
    margin-left: -4rem
    margin-top: -4rem
    background-color: rgba(0,0,0,.5)
    font-size: 1.2rem
    border-radius: 1rem
    text-align: center
    color: #fff
    i 
      display: block
      font-size: 2rem
      margin: 1.5rem 0 1rem
</style>

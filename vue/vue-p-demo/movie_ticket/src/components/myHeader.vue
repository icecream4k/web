<template>
<!-- 头部组件 -->
  <div class="header">
    <!-- 插槽 -->
    <slot></slot>
    <i class="iconfont icon-guanbi headerBack" @click="back"></i>
  </div>
</template>

<script>
export default {
  methods:{
    back(){
      this.$router.go(-1)
      // this.$router.push("/cinema")
    }
  }
}
</script>


<style scoped lang="stylus">
  $n=8.3333333
  .header
    position: fixed
    top: 0
    left: 0
    right: 0
    overflow: hidden
    height: .43*$n rem
    line-height: .43*$n rem
    text-align: center 
    color: #fff
    font-size: .16*$n rem
    background-color: #C63B2D
    z-index: 399;
    .headerBack
      position: absolute
      top: 0
      left: 0
      width: .5*$n rem
      font-size: .2*$n rem
      color: #fff
</style>

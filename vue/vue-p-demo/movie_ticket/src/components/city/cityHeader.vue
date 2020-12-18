<template>
  <div class="header" @click="back">
    <!-- 插槽 -->
    <slot></slot>
    <i class="iconfont icon-guanbi headerBack"></i>
  </div>
</template>

<script>
export default {
  methods:{
    back(){
      this.$router.go(-1)
    }
  }
}
</script>


<style scoped lang="stylus">
  $n=8.3333333
  .header
    position: relative
    overflow: hidden
    height: .43*$n rem
    line-height: .43*$n rem
    text-align: center 
    color: #000
    font-size: .16*$n rem
    background-color: #f9f9f9
    .headerBack
      position: absolute
      top: 0
      left: 0
      width: .32*$n rem
      font-size: .2*$n rem
      color: #000
</style>

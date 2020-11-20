<template>
  <!-- 星星打分组件 -->
  <div class='contain'>
    <ul class="starList">
      <li v-for="(item,index) of starList" :key="index" class="star">
        <i class="iconfont" :class="item"></i>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  props:{
    score:{
      type:Number
    }
  },
  data(){
    return {
      star:[]
    }
  },
  computed:{
    starList(){
      let n=Math.floor(this.score/2)
      for(let i=0;i<n;i++){
        this.star.push("icon-star-full")
      }
      if(Math.round(this.score/2)>Math.floor(this.score/2)){
        this.star.push("icon-star-half")
        n++
      }
      for(let i=0;i<5-n;i++){
        this.star.push("icon-star-empty")
      }
      return this.star
    }
  }
}
</script>
<style scoped lang="stylus">
.contain
  display:inline-block
  .starList
    width:6rem
    display:flex
    justify-content:space-around
    .star
      color:#faaf00
      .iconfont
        font-size:1rem


</style>

<template>
<!-- 底部导航栏组件 -->
  <div class="barContain">
    <ul class="bottomBar">
      <li v-for="item of items" :key="item.id" @click="jump(item.path,item.id)" :style="item.id==$store.state.barId ? selected : ''">
          <i :class="item.icon"></i>
          <p v-text="item.name"></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items:[
        {
          id:1,
          name:"电影",
          icon:"iconfont icon-dianying",
          //后期路由对接
          path:"/"
        },
        {
          id:2,
          name:"商城",
          icon:"iconfont icon-shangcheng1",
          path:"/Product"
        },
        {
          id:3,
          name:"我的",
          icon:"iconfont icon-ziyuan",
          path:"/User"
        } 
      ],
      selected:{
        color:"#C63B2D"
      }
    }
  },
  methods:{
    jump(i,id){
      this.$store.commit("changeBarId",id)
      this.$router.push({path:i,params:id})
    }
  }
}
</script>


<style lang="stylus" scoped>
  $n=8.33333
  .barContain
    position: fixed
    z-index: 300
    bottom: 0
    width: 100%
    color: #535353
    background-color: #F1F1F1
    .bottomBar
      width: 100%
      height: 30%
      display: flex
      justify-content: space-around
      align-items: middle 
      font-size: .14*$n rem
      li
        text-align: center
        padding: 1.25rem .8333rem .8333rem
        i 
          font-size: .25*$n rem
        p
          font-size: .13*$n rem
          margin: .6667rem 0 1.25rem
          letter-spacing: .005*$n rem

</style>

<template>
  <div class="list" ref="cityList">
    <!-- 当前城市 -->
    <div class="area">
      <div class="title">当前城市</div>
      <div class="buttonList">
        <div class="buttonWrapper">
          <div class="button" style="color:#e71a0f;border:1px solid #C63B2D" @click="jumpToCinema({'name':city,'id':cityId})">
            {{$store.state.cityAndCinema.city}}
          </div>
        </div>
      </div>
    </div>
    <!-- 热门城市列表 -->
    <div class="area">
      <div class="title">热门城市</div>
      <div class="buttonList">
        <!-- 循环渲染热门城市 -->
        <div 
          class="buttonWrapper" 
          v-for="item of hot"
          :key="item.id"
          @click="jumpToCinema(item)"
        >
          <div class="button" v-text="item.name"></div>
        </div>
      </div>
    </div>
    <!-- 完整城市列表 -->
    <!-- 循环渲染城市首字母表 -->
    <div 
      class="area"
      v-for="(item,key) of cities"
      :key="key"
      :ref="key"
    >
      <div class="title" v-text="key"></div>
        <ul class="itemList">
          <!-- 循环渲染城市首字母对应的城市列表 -->
          <li 
            class="item"
            v-for="city of item"
            :key="city.id"
            v-text="city.name"
            @click="jumpToCinema(city)"
          ></li>
        </ul>    
    </div>
  </div>
</template>

<script>
export default {
  props:{
    cities:{
      type:Object,
      default:{}
      },
    hot:{
      type:Array,
      default:[]
      },
    selectedLetter:{
      type:String,
      default:""
    }
  },
  data(){
    return {
      // 取出vuex中city信息
      cityId:this.$store.state.cityAndCinema.cityId,
      city:this.$store.state.cityAndCinema.city
    }
  },
  watch:{
    selectedLetter(){
      // 过滤传入的字母，变成符合要求的格式
      const letter=this.filterLetter(this.selectedLetter)
      // 获取对应字母的offsetTop值
      const h=this.$refs[letter][0].offsetTop
      //设置list元素的scrollTop值，让页面滚动至对应的字母位置
      this.$refs.cityList.scrollTop=h
    }
  },
  methods:{
    // 由于传入的字母为A1，A2格式，需要此过滤函数截取到符合要求的字母
    filterLetter(ltr){
      return ltr.slice(0,1)
    },
    // 跳转至相应城市的影院选择页面，并传入城市信息对象,由cinnema组件去统一修改vuex信息，防止客户此页面点击后退造成城市与影院不匹配的Bug
    jumpToCinema(city){
      this.$store.commit('changeCacheComponent',["cinema"])
      this.$router.push({
        name:"cinema",
        // 向cinema传入城市信息对象,用query不用params，避免刷新或后退造成参数丢失
        query:city
      })
    }
  }
}
</script>


<style scoped lang="stylus">
  $n=8.333333
  clear()
    &:after
      content: ""
      display: block
      clear: both
  .list
    position: absolute
    top: 7.4167rem
    left: 0
    right: 0
    bottom: 0
    overflow: auto
    .title
      line-height: 2rem
      background: #f6f6f6
      padding-top: .6667rem
      padding-left: .66664rem
      color: #333
      font-size: 1.1667rem
    .buttonList
      padding: .41667rem 2.5rem .41667rem .41667rem
      background: #f6f6f6
      clear()
      .buttonWrapper
        width: 33.33%
        float: left
        .button
          text-align: center
          margin: .4167rem
          padding: .66664rem 0
          border: .08333rem solid #ccc
          font-size: 1.1667rem
          border-radius: .25rem
    .itemList
      .item
        height: 3rem
        line-height: 3rem
        font-size: 1.1667rem
        color: #333
        margin-left: .6667rem
        border-bottom: .08333rem solid #f6f6f6
</style>

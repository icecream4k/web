<template>
  <div ref="test">
    <div class="movieContain" ref="movieContent">
      <div class="middle" :style="middleFixed">
        <!-- 影院和播放类型展示middle行 -->
        <div class="cityChoose">
          <choose-city></choose-city>
        </div>
        <div class="playType" @click="handlePlayType">
          <span :style="playType==1 ? selected : ''">热映</span>
          <span :style="playType==0 ? selected : ''">即映</span>
        </div>
      </div>
      <!-- 电影展示列表 -->
      <ul class="movieList" ref="movieList">
        <li v-for="movie of movies" :key="movie.mid" @click="toMovieDetail(movie.mid)">
          <div>
            <img :src="baseUrl+movie.pic">
          </div>
          <div class="content">
            <p v-text="movie.mName"></p>
            <div class="img" v-if="movie.sType">
              <img :src="baseUrl+movie.sType">
            </div>
            <p v-if="movie.hot==1">评分 <span style="color:#faaf00">{{movie.score}}</span></p>
            <p v-else>
              {{movie.showTime}} 上映 <i class="iconfont icon-love-b"></i> {{movie.watcher}}人 想看
            </p>
            <p v-text="movie.intro"></p>
          </div>
          <!-- 购票，预售按钮，阻止冒泡 -->
          <div :style="movie.hot==1 ? '' : notHot" v-text="movie.hot==1 ? '购票':'预售'" @click.stop="toBuy(movie.mid)"></div>
        </li>
      </ul> 
    </div>
    <bottom-bar></bottom-bar>
  </div>  
</template>

<script>
import chooseCity from "../city/chooseCity"
import {baseUrl} from "../../common"
export default {
  components:{
    chooseCity
  },
  data() {
    return {
      // 预售样式
      notHot:{
        backgroundColor:"#faaf00"
      },
      // 播放类型样式
      selected:{
        borderBottom:"0.02rem solid #c63b2d",
        color:"#C63B2D"
      },
      // 1为热映，0为即映
      playType:1,
      // middle展示行样式
      middleFixed:'',
      // 设置节流开关
      canHandle:true,
      baseUrl,
      loadStatus:true
    }
  },
  props:{
    movieData:Array
  },
  methods:{
    // 跳转至购票
    toBuy(mid){
      // 跳转至购票
      this.$store.commit("changeMid",mid)
      this.$router.push(`/booking`)
      // console.log(`去购票页啦${mid}`)
    },
    // 跳转至电影详情
    toMovieDetail(mid){
      // console.log(`去电影详情页啦${mid}`)
      this.$router.push({name:'prodetails',query:{mid}})
    },
    //热映即映样式控制
    handlePlayType(e){
      let text=e.target.innerText
      if(text=="热映"||text=="即映"){
        this.playType=text== "热映" ? 1 : 0;
      }
    },
    // middle行当滚动到页面顶部，位置固定
    handleScroll(){
      // 获取DOM元素
      let movieContent=this.$refs.movieContent
      let movieList=this.$refs.movieList
      // 获取内容区域顶部距页面顶部距离
      let h=movieContent.offsetTop
      // 绑定滚动监听事件，注意事件函数this指向
      // window.addEventListener("scroll",()=>{
        // 判断节流开关,true可以执行
        if(this.canHandle){
          //关闭节流开关
          this.canHandle=false
          // 获取页面滚动距离
          let scr=document.documentElement.scrollTop
          if(scr>=h){  
            // middle行滚动到页面顶部，将位置固定       
            this.middleFixed={
              position:"fixed",
              right:0,
              left:0,
              top:0,
              backgroundColor:"#f1f1f1",
              zIndex:99
            }
            // 防止middle行固定定位后，高度缺失，下面的元素抖动
            movieList.style.marginTop="3.8333rem"
          }else{
            // middle行不在顶部，清除之前的样式
            this.middleFixed=""
            movieList.style.marginTop="0"
          }
          setTimeout(()=>{
            // 打开节流开关
            this.canHandle=true
          },5)
        }     
      // })
    }
  },
  computed:{
    // 返回playType和数据中hot属性值一致的电影，1：热映，0:即映
    movies(){
      return this.movieData.filter(elem=>elem.hot==this.playType)
    }
  },
  mounted(){
    this.$store.commit("changeBarId",1)
    window.onscroll=this.handleScroll
    // this.handleScroll()
    // console.log(this.$store.state.cityAndCinema)
  },
  activated(){
    this.$store.commit("changeBarId",1)
    window.onscroll=this.handleScroll
    // console.log("scroll监听了")
  }
}
</script>


<style scoped lang="stylus">
  $n=8.33333
  // 清除浮动样式
  clear()
    &:after
      content: ""
      display: block
      clear: both     
  // 字体样式
  font(s,c,w=bold)
    // font-family: "微软雅黑"
    font-size: s
    color: c
    font-weight: w
  // 列表高度
  calcHeight(w)
    w*1.4245
  .movieContain
    position: absolute
    left: 0
    right: 0
    // height: 80%
    // overflow: auto
    .middle
      font-size: .14*$n rem
      clear()
      padding: .6667rem .6667rem .1667rem
      .cityChoose
        float: left
        height: 3rem
        line-height: 3rem
      .playType
        float: right
        margin-right: 3%
        span
          display: inline-block
          margin-left: .3*$n rem
          padding: .5833rem .25rem
          height: .2*$n rem
          line-height: .2*$n rem
          text-align: right
          font(1.3333rem,#000)
          letter-spacing: .005*$n rem
          
    // 电影列表样式  
    .movieList
      width: 100%
      padding: .4167rem .6667rem .6667rem
      // position: absolute
      // height: 75%
      // overflow: auto
      box-sizing: border-box
      padding-bottom: 8.3333rem
      
      li
        width: 100%
        box-sizing: border-box
        padding: .6667rem .3333rem
        border-bottom:.08333rem solid #e5e5e5
        position: relative
        clear()
        div:not(.img)
          float: left
        div:first-child
          margin-right: .12*$n rem
          img
            width: .7*$n rem
            height: calcHeight(5.8333rem)
        div.content
          height: calcHeight(5.8333rem)
          display: flex
          flex-direction: column
          justify-content: space-around
          p
            font(1rem,#535353,normal)
            letter-spacing: .005*$n rem
            i
              font-size: .1*$n rem
          div
            height: 1rem
            line-height: 1rem
            font-size: 0
            padding-left: .04*$n rem
            img 
              height: 1rem
            
          p:first-child
            font(1.1667rem,#000)
        // 最后购票，预售按钮样式
        div:nth-child(3)
          width: .5*$n rem
          height: .25*$n rem
          line-height: .25*$n rem
          text-align: center
          background-color: #C63B2D
          font-size: 1rem
          letter-spacing: .02*$n rem
          color: #fff
          border-radius: 1.25rem
          position: absolute
          right: 3%
          top: 50%
          margin-top: -1.25em

</style>

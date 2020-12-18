<template>
  <div>
    <city-header>影院详情</city-header>
    <my-loading :loadStatus="loadStatus"></my-loading>
    <!-- 影院轮播组件 -->
    <my-carousel :scale="0.5" :pic="cinema.pic"></my-carousel>
    <div class="cinemaMsg">
      <ul>
        <li class="cName">
          <i class="iconfont icon-dingwei1 cinemaLoca"></i>
          {{cinema.cName}}
        </li>
        <li class="loca">
          地址：{{cinema.loca}}
        </li>
        <li class="phone">
          影城电话：{{cinema.telephone}}
        </li>
        <li class="bus">
          {{cinema.bus}}
        </li>
      </ul>
    </div>
    <!-- 影院地图位置 -->
    <div class="map">
      <baidu-map class="bm-view" :center="loca" :zoom="15" :scroll-wheel-zoom="true" :auto-resize="true" :map-click="true" :pinch-to-zoom="true" ak="MLaZHT79pRiOMG6ARzikRz8LGYdkRxGF">
          <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
          <bm-marker :position="loca" :dragging="false" animation="BMAP_ANIMATION_DROP">
          </bm-marker>
      </baidu-map>
    </div>
    <div class="bottom">
      <div class="wrapper">
        <div class="makeCall"><a href="tel:13456886368" class="call" >拨打电话</a></div>
      </div>
       <!-- <div class="wrapper">
        <div class="buyTicket">影城购票</div>
      </div> -->
    </div>
  </div>
</template>

<script>
import baiduMap from 'vue-baidu-map/components/map/Map.vue'
import bmGeolocation from 'vue-baidu-map/components/controls/Geolocation.vue'
import bmMarker from 'vue-baidu-map/components/overlays/Marker.vue'
import cityHeader from '../city/cityHeader'
import myCarousel from '../carousel.vue'
export default {
  name:"cinemaDetail",
  components:{
    cityHeader,
    baiduMap,
    bmGeolocation,
    bmMarker,
    myCarousel
  },
  data(){
    return {
      cid:this.$route.params.cid,
      cinema:{
        pic:"blank.jpg",
        map:"{}"
      },
      loadStatus:true,
      lastCid:""
    }
  },
  computed:{
    loca(){
      return JSON.parse(this.cinema.map)
    }
  },
  methods:{
    // 加载影院详情
    load(){
      this.axios.get('/movie/cinemaDetail',{
        params:{cid:this.cid}
      }).then(res=>{
        this.cinema=res.data;
        // this.lastCid==this.cid;
        // console.log(this.lastCid);
        this.loadStatus=false;
      })
    }
  },
  created(){
    this.load()
  },
  activated(){
    if(this.cid!==this.$route.params.cid){
      this.cid=this.$route.params.cid
      this.load()
    }
    
  }
  // beforeRouteLeave(to,from,next){
  //   if(to.name=="cinema"){
  //     to.meta.keepAlive=true
  //   }
  //   console.log(to)
  //   next()
  // }
}
</script>


<style scoped lang="stylus">
  $n=8.3333333
  clear()
    &:after
      content: ""
      display: block
      clear: both
  // 轮播样式
  .carousel
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 50%
    position: relative
    .container
      font-size: 0
      margin-left: 0
    div.transClass
      transition: all .4s ease
      // 轮播小圆点样式
    .carouselIndex
      width: 40%
      height: 6%
      position: absolute
      top: 88%
      left: 50%
      margin-left: -20%
      display: flex
      justify-content: space-around
      li
        width: .1*$n rem
        height: .1*$n rem
        background: #f9f9f9
        border-radius: 50%
      li.active
        background: #e71a0f

  // 影院信息样式 
  .cinemaMsg
    padding: .6667rem .6667rem 0
    font-size: .13*$n rem
    color: #535353
    ul
      li
        margin: 1rem 0
      .cName
        color: #000
        font-size: 1.3333rem
        font-weight: bold
        .cinemaLoca
          font-size: .2*$n rem
      .loca
        line-height: 2rem
      .bus
        line-height: 2rem
  // 百度地图样式
  .map
    .bm-view
      width: 100%
      height: 2.2*$n rem
    .bm-view >>> .anchorBL
      display: none
  // 底部两个按钮样式
  .bottom
    .wrapper
      width: 100%
      float: left
      
      div
        margin: .8333rem 1.25rem 0
        line-height: .35*$n rem
        font-size: .16*$n rem
        letter-spacing: .005*$n rem
        text-align: center
        border: 1px solid #C63B2D
        margin-bottom:2rem
        // border-radius: .1*$n rem
      .makeCall
        .call
          color: #C63B2D
      // .buyTicket
      //   color: #fff
      //   background: #C63B2D

</style>

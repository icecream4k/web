<template>
  <div>
    <city-header>选择影院</city-header>
    <my-loading :loadStatus="loadStatus"></my-loading>
    <div>
      <!-- 当前城市信息 -->
      <div class="title">{{city.name}}</div>
      <!-- 影院列表 -->
      <ul class="cinemaList" v-show="!msg">
        <li 
          class="item"
          v-for="item of cinemas"
          :key="item.cid"
        >
          <!-- 选择完影院后，跳转至首页,并传入影院信息 -->
          <div class="cinemaMsg" @click="jumpToHome(item.cid,item.cName)">
            <div class="cinemaName" v-text="item.cName"></div>
            <!-- 过滤影城地址，让文字太长溢出时变成... -->
            <div class="cinemaLoca">{{item.loca|strFilter('loca')}}</div>
          </div>
          <!-- 跳转至影院详情页，传入影院Id -->
          <div class="loca" @click="toDetail(item.cid)">
            <i class="iconfont icon-dingwei1"></i>
          </div>   
        </li>
      </ul>
      <div v-show="msg" class="msg">
        <img src="/img/cry.png">
        {{msg}}
      </div>
    </div>
  </div>
  
</template>

<script>
import cityHeader from "../components/city/cityHeader"
export default {
  name:"cinema",
  components:{
    cityHeader
  },
  data(){
    return {
      cinemas:[],
     //接受传递的参数
      city:this.$route.query,
      msg:"",
      loadStatus:true
    }
  },
  methods:{
    load(){
      // 请求影院数据
      this.axios.get('/movie/cinema',{
        params:{cityId:this.city.id}
      }).then(res=>{
        // var a=res.data[0].map
        // a=JSON.parse(a)
        // console.log(a.x)
        this.loadStatus=false;
        if(res.data.code==200){
          // console.log(res.data)
          this.cinemas=res.data.res
          // console.log(this.cinemas)
        }else if(res.data.code=404){
          this.msg="抱歉！该区域暂未有影院合作"
        }
        
      })
    },
    // 跳转至首页，并更新vuex中的城市影院信息
    jumpToHome(cid,cName){
      let obj={}
      // 把上个页面传入的城市信息对象，加上本页选择的影院信息对象整合
      obj.cityId=this.city.id
      obj.city=this.city.name
      obj.cid=cid
      obj.cName=cName
      this.$store.commit("changeCityAndCinema",obj)
      this.$router.push('/')
    },
    // 跳转至影院详情页
    toDetail(cid){
      this.$router.push(`/cinemaDetail/`+cid)
    }
  },
  mounted(){
    // console.log("mount执行")
    this.load()
  },
  activated(){
    //  console.log("activated执行")
    // this.load()
  },
  // 设置路由守卫
  beforeRouteLeave(to,from,next){
    if(to.name=="cinemaDetail"){
      this.$store.commit('changeCacheComponent',['cinema'])
    }else if(to.name=="city"){
      this.$store.commit('changeCacheComponent',[])
    }
    next()
  }
  
}
</script>


<style scoped lang="stylus">
  $n=8.33333
  clear()
    &:after
      content: ""
      display: block
      clear: both

  .title
    height: 3rem
    line-height: 3rem
    background: #f6f6f6
    padding-left: .08*$n rem
    color: #535353
    font-size: .14*$n rem
  .cinemaList
    position: absolute
    top: .79*$n rem
    left: 0
    right: 0
    bottom: 0
    overflow: auto
    padding: .08*$n rem
    .item
      clear()
      border-bottom: 1px solid #e5e5e5
      .cinemaMsg
        float: left
        letter-spacing: .005*$n rem
        width: 82%
        .cinemaName
          padding-top: 1.25rem
          font-size: .17*$n rem
          color: #000  
        .cinemaLoca
          overflow: hidden
          height: 1.25rem
          padding: 1.25rem 0 0
          margin-bottom: 1.25rem
          font-size: .14*$n rem
          color: #535353
      .loca
        float: right
        width: .55*$n rem
        height: .77*$n rem
        text-align: center
        i
          position: relative
          top: 3rem
          font-size: .26*$n rem
          color: #e71a0f
  .msg
    font-size: 1.5rem
    margin-top: 40%
    text-align: center
    img
      display: block
      width: 8rem
      margin: 0 auto 4rem
      


</style>

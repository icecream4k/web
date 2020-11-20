<template>
    <div class="container">
         <my-header>想看列表</my-header>
         <my-loading :loadStatus="loadStatus"></my-loading>
         <div v-show="want==null" class="noWant">暂无想看的电影</div>
           <!-- 电影展示列表 -->
          <ul class="movieList" v-show="want!=null">
            <li v-for="movie of movies" :key="movie.mid" @click="toMovieDetail(movie.mid)">
                <div>
                <img :src="baseUrl+movie.pic">
                </div>
                <div class="content">
                <p v-text="movie.mName"></p>
                <div class="img" v-if="movie.sType">
                    <img :src="baseUrl+movie.sType">
                </div>
                <p v-if="movie.hot==1">评分 {{movie.score}}分</p>
                <p v-else>
                    {{movie.showTime}} 上映 <i class="iconfont icon-love-b"></i> {{movie.watcher}}人 想看
                </p>
                <p v-text="movie.intro"></p>
                </div>
                <div :style="movie.hot==1 ? '' : notHot" v-text="movie.hot==1 ? '购票':'预售'" @click.stop='toBuy(movie.mid)'></div>
            </li>
        </ul>
    </div>
</template>
<script>
//1:引入子组件
// import Header from "../components/user/Header.vue";

import {baseUrl} from "../common.js"

export default {
    name:'LikeList',
    data(){
        return{
            movies:'',
            notHot:{
                backgroundColor:"#F1A13E"
            },
            baseUrl,
            uid:localStorage.getItem('uid'),
            want:'',
            wantArr:[],
            loadStatus:true
        }
    },
    methods:{
    getLikeList(){
      (async ()=>{
        await new Promise((reslove,reject)=>{
          this.axios.get("/user/want",{params:{uid:this.uid}})
          .then((res)=>{
            
            this.want=res.data[0].want
            // console.log(this.want)
            if(this.want==null){
              this.loadStatus=false
              return
            }
            this.wantArr=this.want.split("+")
            reslove()
          })
        })
        await new Promise((reslove,reject)=>{
          this.axios.get("/movie/wantList",{params:{want:this.wantArr.join(",")}})
            .then((res)=>{
              this.movies=res.data
              // console.log(this.movies,this.want)
              this.loadStatus=false
              reslove()
            })
        })
      })()
    },
    // 跳转至电影详情
    toMovieDetail(mid){
      this.$router.push({name:'prodetails',query:{mid}})
    },
    toBuy(mid){
      this.$store.commit("changeMid",mid)
      this.$router.push(`/booking`)
    }
  },
  created(){
   
      this.getLikeList()
    
    
  }
}
</script>
<style scoped lang="stylus">
  clear()
    &:after
      content: ""
      display: block
      clear: both

  // 字体样式
  font(s,c,w=bold)
    font-family: "微软雅黑"
    font-size: s
    color: c
    font-weight: w

  // 列表高度
  calcHeight(w)
    w*1.4245
   .noWant
    position:absolute;
    top:45%
    width:100%
    text-align:center
    font-size:1.4rem
   .movieList
    width: 100%
    padding: 0.664rem
    position: absolute
    top:3.6rem
    // height: 100%
    overflow: auto
    box-sizing: border-box
    
    li
      width: 100%
      box-sizing: border-box
      padding: 0.664rem 0.332rem
      border-bottom:0.083rem solid #e5e5e5
      position: relative
      clear()
      div:not(.img)
        float: left
      div:first-child
        margin-right: 0.996rem
        img
          width: 5.81rem
          height: calcHeight(5.81rem)
      div.content
        height: calcHeight(5.81rem)
        display: flex
        flex-direction: column
        justify-content: space-around
        p
          font(0.996rem,#535353,normal)
          letter-spacing: 0.0415rem
          i
            font-size: 0.083rem
        div
          height: 0.996rem
          line-height: 0.996rem
          font-size: 0
          padding-left: 0.332rem
          img 
            height: 0.996rem
          
        p:first-child
          font(1.16rem,#000)
      div:nth-child(3)
        width: 4.15rem
        height: 2.075rem
        line-height: 2.075rem
        text-align: center
        background-color: #C63B2D
        font-size: 0.996rem
        letter-spacing: 0.166rem
        color: #fff
        border-radius: 1.245rem
        position: absolute
        right: 3%
        top: 50%
        margin-top: -1.245rem
</style>

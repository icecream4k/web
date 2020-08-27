<template>
  <div>
    <my-loading :loadStatus="loadStatus"></my-loading>
    <my-carousel :pic="pic" :scale="0.25"></my-carousel>
    <movie-content :movieData="movieData"></movie-content>
  </div>
</template>

<script>
import myCarousel from "../components/carousel"
import movieContent from "../components/home/movieContent"
export default {
  name:"home",
  components:{
    myCarousel,
    movieContent
  },
  data(){
    return {
      pic:"carousel/header.jpg&carousel/header2.jpg",
      loadStatus:true,
      movieData:[]
    }
  },
  methods:{
    // 获取主页数据
    load(){
      this.axios.get('/movie/')
      .then(res=>{
        // console.log(res.data)
        this.movieData=res.data.movie
        this.pic=res.data.pic
        this.loadStatus=false
      })
    }
  },
  mounted(){
    this.load()
  },
  // 离开时清空onscroll事件
  beforeRouteLeave(to,from,next){
    window.onscroll=null
    next();
  }
}
</script>


<style scoped>

</style>

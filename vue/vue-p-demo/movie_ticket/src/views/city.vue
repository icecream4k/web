<template>
  <div>
    <!-- 用了插槽 -->
    <city-header>选择城市</city-header>
    <city-search :cities="cities"></city-search>
    <city-list 
      :cities="cities"
      :hot="hot"
      :selectedLetter="selectedLetter"
    ></city-list>
    <letter-list 
      :cities="cities"
      @changeLetter="handleChangeLetter"
    ></letter-list>
  </div>
</template>

<script>
import cityJson from "../../public/json/city.json"
import cityList from "../components/city/cityList"
import cityHeader from "../components/city/cityHeader"
import citySearch from "../components/city/citySearch"
import letterList from "../components/city/letterList"
export default {
  name:"city",
  components:{
    cityList,
    cityHeader,
    citySearch,
    letterList
  },
  data(){
    return {
      cities:{},
      hot:[],
      selectedLetter:"",
      cityJson
    }
  },
  methods: {
    // 获取城市信息
    getCityInfo () {
      
      // 城市信息
      this.cities=cityJson.data.cities
      // 热门城市获取
      this.hot=cityJson.data.hotCities
      
    },
    handleChangeLetter(letter){
      this.selectedLetter=letter;
    }
  },
  mounted () {
    this.getCityInfo()
  }
  // beforeRouteLeave(to,from,next){
  //   if(to.name=="cinema"){
  //     to.meta.keepAlive=false
  //   }
  //   console.log(to)
  //   next()
  // }
}
</script>


<style scoped>

</style>

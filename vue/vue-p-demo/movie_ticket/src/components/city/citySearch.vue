<template>
  <div>
    <div class="search">
      <input v-model="kw" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" ref="search" v-show="kw">
      <ul>
        <li 
          class="search-item"
          v-for="item of list" 
          :key="item.id" 
          v-text="item.name"
          @click="jumpToCinema(item)"
        ></li>
        <li class="search-item" v-show="notFound">没有找到匹配的城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    cities:{
      type:Object,
      default:{},
      timer:null
    }
  },
  data(){
    return {
      kw:"",
      list:[]
    }
  },
  computed:{
    notFound(){
      return !this.list.length
    }
  },
  methods:{
    // 跳转至相应城市的影院选择页面，并传入城市信息对象
    jumpToCinema(city){
      // console.log(city)
      this.$router.push({
        name:"cinema",
       query:city
      })
    }
  },
  watch:{
    kw(){
      // 设置防抖函数
      if(this.timer){
        clearTimeout(this.timer)
      }
      if(!this.kw){
        this.list=[]
        return
      }
      this.timer=setTimeout(() => {
        this.list=[]
        for(let i in this.cities){
          this.cities[i].forEach((value)=>{
            if(value.spell.indexOf(this.kw)>-1||value.name.indexOf(this.kw)>-1){
              // 如果找到符合的城市，Push至数组中
              this.list.push(value)
            }
          })
        }
      }, 200);
    }
  }
}
</script>

<style lang="stylus" scoped>
  .search
    height: 2.5rem
    padding: .66667rem
    background: #f6f6f6
    .search-input
      box-sizing: border-box
      width: 100%
      height: 2.5rem
      padding: .66667rem
      line-height: 2.5rem
      text-align: left
      border-radius: .25rem
      color: #666
      font-size: 1.1667rem
      font-family: "Arial"
  .search-content
    z-index: 9
    overflow: auto
    position: absolute
    top: 7.4167rem
    left: 0
    right: 0
    bottom: 0
    background: #f6f6f6
    .search-item
      height: 3rem
      line-height: 3rem
      padding-left: 1.3333rem
      font-size: 1.1667rem
      background: #fff
      color: #666
      border-bottom: .08333rem solid #f6f6f6
</style>

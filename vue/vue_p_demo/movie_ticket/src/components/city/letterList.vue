<template>
  <ul class="list" ref="letterList">
    <li 
      class="item"
      v-for="letter of letters"
      :key="letter"
      v-text="letter"
      :ref="letter"
      @click="handleLetterchange(letter)"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    ></li>
  </ul>
</template>

<script>
export default {
  props:{
    cities:{
      type:Object,
      default:{}
    }
  },
  computed:{
    // 获取字母数组
    letters(){
      const letters=[]
      for(let key in this.cities){
        letters.push(key)
      }
      return letters
    }
  },
  data(){
    return {
      // i让传去父组件的字母都有唯一的标识
      i:0,
      touchStatus:false,
      letterListH:0,
      timer:null,
      startY:0
    }
  },
  methods:{
    // 处理字母变化。并将字母传给父组件
    handleLetterchange(letter){
      this.i++
      // let letter=e.target.innerText
      // cityList组件监听letterList本组件传去的letter字母，若用户点击相同的字母，则cityList组件的watch事件不会触发。为了解决这个问题，给字母加上i状态值，让每次点击传去的letter字母值不同(A1,A2,B3..)，触发cityList组件的watch监听
      letter=letter+this.i
       // 把letter传入父组件city,父组件再将letter传入子组件cityList
      this.$emit('changeLetter',letter)
    },
    // 触摸事件开始
    handleTouchStart(){
      this.touchStatus=true
    },
    // 触摸事件结束
    handleTouchEnd(){
      this.touchStatus=false
    },
    // 触摸滑动时
    handleTouchMove(e){
      e.preventDefault()
      if(this.touchStatus){
        if(this.timer){
          clearTimeout(this.timer)
        }
        // 设置防抖函数，避免手指滑动一直触发
        this.timer=setTimeout(()=>{
          // 计算首字母A距离字母列表顶部的高度，由于字母列表动态渲染，无法在mounted中通过$refs的方式计算，但是可以在updated钩子中计算
          // const letterH=this.$refs.A[0].offsetTop
          // 获得手指滑动时对于视图顶部的高度
          let touchY=e.touches[0].clientY
          // 获得手指相对于字母列表的滑动距离，除以每个字母项的高度，向下取整得到字母在数组中的下标
          let index=Math.floor((touchY-this.letterListH-this.startY)/22)
           // 如果下标在合理的值范围内（下标可能为-1）
          if(index>=0&&index<this.letters.length){
            // 把下标对应的字母传入父组件city,父组件再将letter传入子组件cityList
            this.$emit('changeLetter',this.letters[index])
          }  
        },5)
        
      }
    }
  },
  mounted(){
    // 初始化DOM元素letterList距离顶部元素的高度
    this.letterListH=this.$refs.letterList.offsetTop 
  },
  updated(){
    //  计算首字母A距离字母列表顶部的高度。刚开始cities为空，父组件值传过来后，触发updated钩子
    this.startY=this.$refs.A[0].offsetTop
  }
}
</script>

<style lang="stylus" scoped>
  $n=8.33333
  .list
    display: flex 
    flex-direction: column
    justify-content: center
    position: absolute 
    right: 0
    top: .8*$n rem
    bottom: 0
    width: .2*$n rem
    font-size: .14*$n rem
    padding-right: .08*$n rem
    .item
      height: .22*$n rem
      line-height: .22*$n rem
      text-align: center
      color: #C63B2D
</style>

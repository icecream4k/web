<template>
  <div>
    <!-- 轮播组件 -->
    <div class="carousel" :style="carouselStyle">
      <div 
        class="container" 
        :style="conStyle" 
        :class="{transClass:hasTrans}"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        ref="con"
      >
        <img 
          v-for="(p,i) of pics" 
          :key="i" :src="baseUrl+p" 
          :style="{width:innerWidth+'px',height:scale*innerWidth+'px'}"
        >
        <!-- 轮播最后拼接第一张图片，宽度设置为页面宽度 -->
        <img 
          :src="baseUrl+pics[0]" 
          :style="{width:innerWidth+'px',height:scale*innerWidth+'px'}"
        >
      </div>
      <ul class="carouselIndex" :style="indexStyle">
        <!-- 轮播小圆点样式，i==pics.length&&idx==0解决轮播到最后一张图，瞬移到第一张图时，i值不匹配任何一个idx值，i值为图片数组长度，且此时为第一张图片，定时器让小圆点样式有400ms延迟的问题。i==pics.length&&idx==0可以锁定到这个小圆点 -->
        <li 
          v-for="(pic,idx) of pics" 
          :key="idx" :class="idx==i||(i==pics.length&&idx==0) ? 'active' : ''">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {baseUrl} from "../common"
export default {
  name:"carousel",
  props:{
    pic:String,
    // 轮播图片宽高比例
    scale:Number
  },
  data(){
    return {
      // 轮播图片宽度
      innerWidth:window.innerWidth,
      //是否可以轮播
      canMove:true,
      // 轮播过渡状态
      hasTrans:true,
      // i控制margin-left值。i为0，显示第一张图片
      i:0,
      // 小圆点下标样式
      indexClass:false,
      // 定时器
      timer:null,
      // 触摸开始时的坐标
      startX:0,
      // 触摸状态
      touchStatus:false,
      // 触摸 手指移动距离
      moveLen:0,
      baseUrl,
      n:0
    }
  },
  computed:{
    // 获取轮播图片地址，用split截取
    pics(){
      return this.pic.split("&")
    },
    // 控制轮播容器的宽度与marginLeft值
    conStyle(){
      let width=this.innerWidth*(this.pics.length+1)+"px"
      let marginLeft=-this.i*this.innerWidth+"px"
      return {width,marginLeft}
    },
     // 防止轮播下方文字抖动的内边距高度，根据轮播宽高比例来定
    carouselStyle(){
      return {paddingBottom:this.scale*100+"%"}
    },
    indexStyle(){
      let width=this.pics.length*8
      let marginLeft=-width/2
      return {width:width+"%",marginLeft:marginLeft+"%"}
    }
  },
  methods:{
    // 轮播图片移动函数，i为1则向左移动，-1则向右移动
    move(i){
      if(this.canMove){
        this.canMove=false
        // 如果是第一张图片，且要向右移动，则要瞬移到最后一张图片
        if(i==-1&&this.i==0){
          // 关闭过渡效果，可以瞬移
          this.hasTrans=false
          // 移到最后一张图片
          this.i=this.pics.length
          // 50ms后打开过渡效果，防止dom叠加Bug。然后this.i+1，轮播右移且有过渡效果
          setTimeout(()=>{
            this.hasTrans=true
            this.i+=i
            // 400ms过渡执行完后，设置轮播状态为true，可以下一次移动
            setTimeout(()=>{
              this.canMove=true
            },400)
          },50)
          // 如果是倒数第二张图片（最后一张图片为第一张图片，欺骗用户用的），且要左移
        }else if(i==1&&this.i==this.pics.length-1){
          // 先左移到最后一张图片，带过渡效果
          this.i+=i
          setTimeout(()=>{
            // 400ms后，过渡完成，移动到最后一张图片，然后关闭过渡效果，瞬移到第一张图片
            this.hasTrans=false
            this.i=0
            // 50ms后打开过渡效果，设置轮播状态为true
            setTimeout(()=>{
              this.hasTrans=true
              this.canMove=true            
            },50)    
          },400)
        }else{
          // 打开动画效果，手指滑动到最后一张图，瞬移的后取消了动画效果，在此可以打开
          // this.hasTrans=true
          // 其他轮播位置正常设置this.i值，计算属性响应式改变marginLeft值，达到移动图片效果
          this.i+=i
          // 过渡效果为0.4s,设置0.4s定时器，过渡完后才能执行下一次轮播
          setTimeout(()=>{
            this.canMove=true
          },400)
        }
      }     
    },
    // 轮播开始函数
    start(){
      this.timer=setInterval(()=>{
        this.move(1)
        // console.log("我是定时器")
      },3000)
    },
    // 轮播结束函数
    stop(){
      clearInterval(this.timer)
    },
    // 触摸开始
    handleTouchStart(e){
      // 关闭轮播
      this.stop()
      // 设置触摸状态值为true
      this.touchStatus=true
      // 获取触摸开始X坐标位置
      this.startX=e.touches[0].clientX
      // console.log("触摸开始的坐标"+this.startX)
    },
    // 触摸结束
    handleTouchEnd(){
      // 设置触摸状态值为false
      this.touchStatus=false
      // 打开轮播
      this.start()
      // 如果触摸结束（手指抬起）时，滑动的距离小于图片的一半，则不移动图片，回退到原来的位置
      if(Math.abs(this.moveLen)<this.innerWidth/2){
        this.hasTrans=true
        this.$refs.con.style.marginLeft=this.conStyle.marginLeft
      }
    },
    // 触摸滑动时
    handleTouchMove(e){
      e.preventDefault()
      if(this.touchStatus){
        // 关闭过渡效果，让图片可以跟着手指的滑动而移动
        this.hasTrans=false
        // 触摸移动时的X坐标
        let moveX=e.touches[0].clientX
        // 减去触摸开始时的坐标，计算出触摸滑动的X距离
        this.moveLen=(moveX-this.startX)*1.3
        // console.log(moveLen)
        // console.log(this.innerWidth/2)
        // 获取图片原来的marginLeft数值（slice去掉px单位）
        let marginLeft=parseInt(this.conStyle.marginLeft.slice(0,-2))
        // 如果是第一张图片，且要右移图片，则要瞬移至最后一张，欺骗用户
        if(this.i==0&&this.moveLen>0){
          // 关闭动画
          this.hasTrans=false
          // 让图片瞬移到最后一张
          this.i=this.pics.length
        }
        // 不断改变图片的marginLeft值，让图片随手指移动
        this.$refs.con.style.marginLeft=marginLeft+this.moveLen+"px"
        
        // moveLen为负值，往左移，且手指滑动距离满足图片自动过渡移动条件
        if(-this.moveLen>=this.innerWidth/2){
          // 如果是倒数第二张图片（实际为最后一张）
          if(this.i==this.pics.length-1){
            // 打开过渡效果
            this.hasTrans=true
            // 让图片过渡移动到指定位置
            this.i++
            // 200ms后，过渡移动完成，关闭过渡效果，瞬移到第一张图片
            setTimeout(()=>{
              this.hasTrans=false
              this.i=0
              setTimeout(()=>{
                // 再次打开动画效果，防止滑动后，自动轮播没有过渡效果了
                this.hasTrans=true
              },20)
            },200)
            // 上述操作进行时，滑动状态值为false,手指滑动无效，图片自动移动
            this.touchStatus=false
          }else{
            // 其他位置滑动时，操作this.i值让图片自动过渡移动
            this.hasTrans=true
            this.i++
            // 滑动状态值为false,手指滑动无效，图片自动移动
            this.touchStatus=false
          }
        // moveLen为正值，向右移，且手指滑动距离满足图片自动过渡移动条件
        }else if(this.moveLen>=this.innerWidth/2){
          // 操作this.i值让图片自动过渡移动
          this.hasTrans=true
          this.i--
          // 滑动状态值为false,手指滑动无效，图片自动移动
          this.touchStatus=false
        }
      }
      // console.log(this.i)
    }
  },
  created(){
    // 初始化实例时，动态获取页面视口宽度
    window.onresize=function(){
      // console.log("我是window.onresize")
      this.innerWidth=window.innerWidth
    }
    // window.addEventListener("resize",()=>{
    //   this.innerWidth=window.innerWidth
    // })
  },
  mounted(){
    // 挂载完后，执行轮播
    this.start()
    this.n=1   
  },
  // 路由离开时，清空这个window监听事件，防止他一直在监听，浪费资源,也清空定时器，避免在后台一直运行
  beforeDestroy(){
    // console.log("清空定时器啦")
    window.onresize=null
    this.stop()
    this.n=0
  },
  //因为改成缓存后，beforeDestory钩子不执行了
  deactivated(){
    // console.log("清空定时器啦")
    window.onresize=null
    this.stop()
    this.n=0
  },
  activated(){
    // 挂载完后，执行轮播
    if(this.n==1){
      return
    }else{
      this.start()   
    }
    
  }
}
</script>


<style scoped lang="stylus">
  $n=8.3333333
  // 轮播样式
  .carousel
    width: 100%
    height: 0
    overflow: hidden
    // padding-bottom: 50%
    position: relative
    .container
      // 解决图片之间一个字节空隙问题
      font-size: 0
      margin-left: 0
    div.transClass
      transition: all .4s ease
      // 轮播小圆点样式
    .carouselIndex
      height: 6%
      position: absolute
      bottom: 10%
      left: 50%
      display: flex
      justify-content: space-around
      li
        width: .8rem
        height: .8rem
        background: #f9f9f9
        border-radius: 50%
      li.active
        background: #e71a0f
</style>

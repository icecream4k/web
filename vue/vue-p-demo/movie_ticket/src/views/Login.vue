<template>
  <div>
    <div class="modal" v-show="msgStatus1">
      <div class="message message2" :style="msgStyle">
        <p>登陆成功</p>
      </div>
    </div>
    <div v-show="msgStatus" class="message" :style="msgStyle">
        用户名或密码错误
    </div>
    <div class="container">
      <my-header>用户登陆</my-header>
      <i class="iconfont icon-guanbi back" @click="toHome" v-show="$route.params.cid"></i>
      <div class="logo">
        <i class="iconfont icon-dianying"></i>
      </div>
      <div class="reg">
        <!--手机号-->
        <mt-field  label="账号：" type="number" v-model="phone" placeholder="请输入您的手机号">
        </mt-field>
        <!--密码 -->
        <mt-field label="密码：" type="password" v-model="upwd" placeholder="请输入密码">
        </mt-field>
        <!-- 登录 -->
        <mt-button size="large" class="Btn" @click ="log">登&nbsp;&nbsp;录</mt-button>
        <h3>没有账号？<span @click="toReg" style="color:#c63b2d">立即注册</span></h3>
      </div>
    </div>
  </div>
</template>
<script>
//1:引入Header组件
// import Header from "../components/user/Header.vue";
import qs from 'qs'
export default {
  data() {
    return {
      phone:"",
      upwd:"",
      msgStatus:false,
      msgStatus1:false,
      msgStyle:{
        // opacity:0
        transform:"scale(0)"
      },
      canClick:true,
      params:this.$route.params,
      // cover:false
      jumpStatus:""
      //1说明点击了登录按钮
    }
  },
  
  methods: {
    toReg(){
      this.jumpStatus=2;
      this.$router.push('/Reg')
    },
    log() {
      if(this.canClick){
        var url="/user/login";
        var obj={uname:this.phone,upwd:this.upwd};
        qs.stringify
        this.axios.post(url,qs.stringify(obj)).then(
          result=>{
            if(result.data.code>0){
              this.$store.commit("changeUser",{uid:result.data.uid,uname:this.phone});
              localStorage.setItem('uid',result.data.uid)
              localStorage.setItem('uname',this.phone)
              this.msgStatus1=true;
              setTimeout(()=>{
                this.msgStyle.transform="scale(1)";
                setTimeout(()=>{
                  this.jumpStatus=1
                  this.$router.push("/User");
                },1000)
              },20)
              
            }else{
              this.msgStatus=true;
              this.canClick=false;
              setTimeout(()=>{
                this.msgStyle.transform="scale(1)";
              },20)
              setTimeout(()=>{
                setTimeout(()=>{
                  this.msgStatus=false;
                  this.canClick=true;
                },300)
                // this.msgStyle.opacity=0;
                this.msgStyle.transform="scale(0)";
              },2000)
            }
          }
        )
      }    
    },
    toHome(){
      this.$router.push('/');
    }

  },
  beforeRouteLeave(to,from,next){
    // if(this.params.cid){
    //   this.params=0
    //   next({name:"pay",params:this.$route.params})
    // }
    if(from.meta.jumpStatus==3&&this.jumpStatus==1){
      //meta.jumpStatus==3说明从支付页来，到时候也要回支付页去,
      // jumpStatus==1说明点了登陆按钮
      from.meta.jumpStatus=0;
      next({name:"pay",params:this.$route.params})
    }
    if(from.meta.jumpStatus==3&&this.jumpStatus==2){
      //从支付页来，到注册页去
      // jumpStatus==2说明点了注册按钮
      this.jumpStatus=0;
      next({name:"Reg",params:this.$route.params})
    }
    // 解决用户点后退按钮后，jumpStatus为3，造成从user页面登陆跳转的Bug
    if(from.meta.jumpStatus==3&&to.name=="home"){
      from.meta.jumpStatus=0;
    }
    next()
  },
  // 设置jumpStatus=3说明从支付页来，最后跳回支付页完成订单
  beforeRouteEnter(to,from,next){
    if(from.name=="product"){
      to.meta.jumpStatus=3
    }
    next()
  }

};
</script>
<style scoped>
.back{
      position:fixed;
      top:0;
      left:0;
      width:4.1667rem;
      height:3.5833rem;
      line-height: 3.5833rem;
      text-align: center;
      background-color: #C63B2D;
      font-size:1.667rem;
      color:#fff;
      font-family: "Arial";
      z-index:400;
    }
.modal{
    position:fixed;
    background-color:rgba(0,0,0,.3);
    width:100%;
    height:100%;
    left:0;
    top:0;
    z-index:100;
  }
  .message{
    width: 8rem;
    height: 8rem;
    line-height:2rem;
    position: absolute ;
    z-index: 200;
    left: 50%;
    top: 50%;
    margin-left: -4rem;
    margin-top: -4rem;
    background-color: rgba(0,0,0,.7);
    font-size: 1.2rem;
    border-radius: 1rem;
    text-align: center;
    padding: 1.9rem 1.5rem 1.5rem;
    box-sizing: border-box;
    color: #fff;
    overflow: hidden;
    transition: all .3s ease;
  }
  .message2{
    padding:0;
    line-height: 8rem;
  }
  .reg>>>.mint-cell-wrapper{ 
    background-image:none;
    border-bottom:1px solid #e5e5e5;
  }
  .reg>>>.mint-field-core{
    font-family: "Arial";
    color:#535353;
    
  }
  .container{
    position:relative;
  }
  /* 电影logo图标显示 */
    .container>.logo{
      margin:0 auto;
      width:10rem;
      height:10rem;
      /* border:0.1rem solid #c63b2d; */
    }
    .container>.logo>i{
      display: inline-block; 
      position:absolute;
      font-size:6rem;
      top:8rem;
      left:12.5rem;
    }
    /* 主体样式 */
    .container>.reg{
      margin:4rem auto; 
      padding:0.5rem;
      width:90%;
      /* border:0.1rem solid #c63b2d; */
    }
    .code{
      padding:0.3rem 0.5rem;
      letter-spacing: 0.1rem;
      margin-left:12rem;
      color:#888;
      font-size:1.2rem;
      border:0.1rem solid #c63b2d;
      border-radius:0.2rem;
    }
    .container>.reg>h3{
        font-size:1.16rem;
        text-align:center;
        margin-top:1.16rem;
    }
    .container>.reg>h3>a{
        color:#c63b2d;
    }
    /* 其它小图标 */
    i{
        font-size:1.5rem;
        color:#c63b2d;
    }
    .icon-err{
      font-size:1.6rem;
      color:green;
    }
    
    .Btn{
      margin-top:2rem;
      color:#fff;
      background:#c63b2d;
    }


</style>


<template>
  <div>
    <div class="modal" v-show="msgStatus">
      <div class="message" :style="msgStyle">
        <p>注册成功！</p>
        <p>即将跳转至登陆页面</p>
      </div>
    </div>
    <div class="container">
        <my-header>用户注册</my-header>
        <div class="logo">
          <i class="iconfont icon-dianying"></i>
        </div>
        <div class="reg">
          <!--手机号-->
           <mt-field type="number" v-model="phone" placeholder="请输入您的手机号" @blur.native.capture="checkPhone">
                <i class="iconfont icon-shouji1 tubiao"></i>
                <i v-if="type==-1" class="iconfont icon-err"></i>
                <i v-else-if="type==1" class="iconfont icon-right"></i>
           </mt-field>
           <!--密码 -->
            <mt-field type="password" v-model="upwd" placeholder="请输入密码（6-18位大小写字母，数字）" @blur.native.capture="checkUpwd">
                <i class="iconfont icon-mima tubiao"></i>
                <i v-if="type1==-1" class="iconfont icon-err"></i>
                <i v-else-if="type1==1" class="iconfont icon-right"></i>
            </mt-field>
            <!--确认密码 -->
            <mt-field type="password" v-model="upwd2" placeholder="请确认密码" @blur.native.capture="configUpwd">
                <i class="iconfont icon-mima tubiao"></i>
                <i v-if="type2==-1" class="iconfont icon-err"></i>
                <i v-else-if="type2==1" class="iconfont icon-right"></i>
            </mt-field>
            <!-- 验证码 -->
             <mt-field placeholder="验证码" type="text" v-model="code" @blur.native.capture="checkCode">
                <i class="iconfont icon-yanzhengma tubiao1"></i>
                <i v-if="type3==-1" class="iconfont icon-err correct"></i>
                <i v-else-if="type3==1" class="iconfont icon-right correct"></i>
                <random-code class="code" @getCode="getcode"></random-code>
            </mt-field>
           
            <!-- 注册 -->
            <mt-button size="large" class="Btn" @click="reg">注&nbsp;&nbsp;册</mt-button>
             <h3>注册代表您同意<a>《用户协议》</a></h3>
        </div>
    </div>
  </div>  
</template>
<script>
//1:引入Header组件
// import Header from "../components/user/Header.vue";
import randomCode from "../components/user/randomCode.vue";
import qs from 'qs'
export default {
  data() {
    return {
      phone:"",
      upwd:"",
      upwd2:"",
      code:"",
      codeStr:"获取验证码",
      type:0,
      type1:0,
      type2:0,
      type3:0, 
      randomCode:"" ,
      msgStatus:false,   
      msgStyle:{
        transform:"scale(0)"
      }, 
      params:this.$route.params,
      jumpStatus:1
    }
  },
   mounted(){
    //  this.createCode();
   },
  //2:注册子组件
  components: {
    // "my-header": Header,
     "random-code":randomCode
  },
  methods: {
    //函数验证提示
    checkPhone(){
      //1:电话正则验证
      var reg_phone=/^1[3-8]\d{9}$/i;
      if(!reg_phone.test(this.phone)){
        this.$toast("手机号格式错误，请重新输入！")
        this.type=-1;
        return;
      }else if(reg_phone.test(this.phone)){
        //发送axios请求
       //"根据后台数据库验证此号码是否被注册过"
        var url="/user/yz_reg";
        var obj={uname:this.phone}; 
        this.axios.get(url,{params:obj}).then(
          result=>{
            if(result.data.code>0){
              this.$toast("该手机号已注册！")
              this.type=-1;
            }else{
                this.type=1;
            }
          }
        )
      }
    },
    checkUpwd(){
      //2:密码正则验证      
      var reg_upwd=/^.*(?=.{6,18})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/;
      if(!reg_upwd.test(this.upwd)){
        this.$toast("密码格式错误，请重新输入！")
        this.type1=-1;
        return;
      }else if(reg_upwd.test(this.upwd)){
        this.type1=1;
      }
    },
    //3:确认密码验证
    configUpwd(){
      if(this.upwd2!=this.upwd||this.upwd2==""){
        this.$toast("两次密码不一致，请重新输入！")
        this.type2=-1;
        return;
      }else{
        this.type2=1;
      }
    },
    // <!--生成验证码-->
    //1:组件验证码
    getcode(code){
      this.randomCode=code
    },
    //验证验证码
    checkCode(){
      if(this.code.toUpperCase()!=this.randomCode.toUpperCase()){
        this.$toast("验证码错误！")
        this.type3=-1;
        return;
      }else {
        this.type3=1;
      }
    },
    reg() {
      //1:先验证验证码是否正确
      if(this.type==1&&this.type1==1&&this.type2==1&&this.type3==1){
        //发送axios请求
        var url="/user/reg";
        var obj={uname:this.phone,upwd:this.upwd};
        this.axios.post(url,qs.stringify(obj)).then(
          result=>{
            if(result.data.code>0){
              // this.$messagebox.confirm("注册成功，3秒后跳转登录界面" ).then(action=>{
              //   setTimeout(()=>{
              //   this.$router.push("/Login");
              // },3000)
              // }).catch(err=>{
              //   console.log(err);
              // });
              this.msgStatus=true;
              setTimeout(()=>{
                this.msgStyle.transform="scale(1)";
                setTimeout(()=>{
                  this.jumpStatus=1
                  this.$router.push('/Login')
                },1500)
              },20)

            }else{
              this.$messagebox("提示","注册失败")
            }
          }
        )
      }    
    }
  },

//监听数据的变化，验证其有效性----使用watch进行聚焦验证
  watch: {
    phone(newVal,oldVal) {
      if (newVal=="") {
        // 如果输入为空，取消状态显示
       this.type=0;
      }
    },

    upwd(newVal, oldVal) {
       if (newVal == "") {
        // 如果输入为空，取消状态显示
       this.type1=0;
      }
    },
    upwd2(newVal, oldVal) {
       if (newVal == "") {
        // 如果输入为空，取消状态显示
       this.type2=0;
      }
    },

    code(newVal, oldVal) {
       if (newVal == "") {
        // 如果输入为空，取消状态显示
       this.type3=0;
      }
    }
  },
  beforeRouteLeave(to,from,next){
    //meta.jumpStatus==3说明从支付页来，传参带上订单信息
    //!==0然后再设置junpStatus=0防止路由无限跳转
    if(to.meta.jumpStatus==3&&this.jumpStatus!==0){
      this.jumpStatus=0;
      next({name:'login',params:this.params})
    }
    next()
  }
};
</script>
<style scoped>
  .reg>>>.mint-field-core{
    font-family: "Arial";
    color:#535353;
    text-indent:1.8rem;
    font-size:1.4rem;
  }
  .reg>>>.mint-cell-wrapper{ 
    background-image:none;
    border-bottom:1px solid #e5e5e5;
  }
  .reg>>>.mint-field-clear{
    display:none
  }
  .reg>>>.mint-field-other{
    position:static;
  }
  .reg>>>.mint-field-other>.tubiao{
    font-size: 1.8rem;
    position:absolute;
    left:0;
    top:24%;
  }
  .reg>>>.mint-field-other>.tubiao1{
    font-size: 1.8rem;
    position:absolute;
    left:0;
    top:24%;
  }
  .modal{
    position:absolute;
    background-color:rgba(0,0,0,.3);
    width:100%;
    height:100%;
    left:0;
    top:0;
    z-index:100;
  }
  .message{
    width: 14rem;
    height: 8rem;
    line-height:2rem;
    position: absolute ;
    z-index: 200;
    left: 50%;
    top: 50%;
    margin-left: -7rem;
    margin-top: -4rem;
    background-color: rgba(0,0,0,.7);
    font-size: 1.2rem;
    border-radius: 1rem;
    text-align: center;
    padding: 1.9rem 1.5rem 1.5rem;
    box-sizing: border-box;
    color: #fff;
    transition: all .3s ease;
  }
  .correct{
    position:relative;
    top:-.6667rem;
    left:-.6667rem;
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
        font-size:1.4rem;
        color:#c63b2d
    }
    .icon-err{
      font-size:1.6rem;
      color:#c63b2d;
    }
    .icon-right{
      color:green;
    }
    .Btn{
      margin-top:2rem;
      color:#fff;
      background:#c63b2d;
    }
  /* mt-field{
    display:flex;
    justify-content:center;
    align-items: center;
  } */

</style>


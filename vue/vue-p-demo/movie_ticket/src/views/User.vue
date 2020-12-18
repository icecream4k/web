<template>
    <div class="container">
        <div class="header">
                <span>个人中心</span>
        </div>
        <div class="user">
            <div>
                <i class="iconfont icon-yonghu2"></i>
                <div v-show="res.uid">
                    <span>欢迎！ {{(res.uname===null? this.$store.state.user.uname : res.uname)|unameFilter()}}</span>
                </div>
                <div v-show="!res.uid">
                    <router-link :to="`/Login`">登录</router-link>
                    /
                    <router-link :to="`/Reg`">注册</router-link>
                </div>
            </div>
        </div>
        <ul class="list">
            <li v-for="item of items" :key="item.id" @click="jump(item.path,item.id)">
                <i :class="item.icon1"></i>
                    <span v-text="item.title"></span>
                <i :class="item.icon2"></i> 
            </li>
        </ul>
        <mt-button v-show="res.uid" class="btn" size="large" @click="logout">退出登录</mt-button>
        <bottom-bar></bottom-bar>
    </div>
</template>
<script>
export default {
    data(){
        return{
            res:{
                uid:localStorage.getItem('uid'),
                uname:localStorage.getItem('uname')
            },
            items:[
                {
                    id:1,
                    icon1:"iconfont icon-icon-",
                    title:"我的订单",
                    icon2:"iconfont icon-arrowRight",
                    //跳转路由
                    path:"/OrderList",
                },
                {
                    id:2,
                    icon1:"iconfont icon-xiangkan",
                    title:"想看列表",
                    icon2:"iconfont icon-arrowRight",
                    //跳转路由
                    path:"/LikeList",
                },
                 {
                    id:3,
                    icon1:"iconfont icon-jifen",
                    title:"我的积分",
                    icon2:"iconfont icon-arrowRight",
                    //跳转路由
                    path:"/OrderList",
                },
                 {
                    id:4,
                    icon1:"iconfont icon-faxian",
                    title:"更多发现",
                    icon2:"iconfont icon-arrowRight",
                    //跳转路由
                    path:"/OrderList",
                },
                
            ],
        }
    },
    methods:{
        jump(i,id){
            this.$router.push({path:i,params:id})
        },
        logout(){
            this.$store.commit("changeUser",{uid:"",uname:""})
            localStorage.clear()
            window.location.reload()
        }
    },
    mounted(){
        this.$store.commit("changeBarId",3)
        // console.log(this.$store.state.user)
        // console.log(this.res.uid)
    },
    beforeRouteLeave(to,from,next){
        if((to.name=="LikeList"||to.name=="OrderList")&&localStorage.getItem('uname')==null){
            next("/login")
        }
        next()
    }
}
</script>
<style scoped>
    .container{
        background:#F6F6F6;
        height:55.56rem;
    }
 /* 1.头部 */
    .container>.header{
        display:flex;
        align-items:center;
        background:#c63b2d;
        height:9.99rem;
    }  
    .container>.header>span{
        margin:0 auto;
        margin-top:-4.165rem;
        color:#fff;
        font-size: 1.49rem;
    }
/*2:user*/
    .container>.user{
        width:90%;
        margin:0 auto;
        margin-top:-4.165rem;
        z-index:1000;
        background: #fff;
        border-radius:0.83rem;
    }
    .container>.user>div{
        padding:1.66rem 1.66rem;
        position:relative;
    }
    .container>.user>div>i{
        color:#C63B2D;
        font-size: 4rem;
    }
     .container>.user>div>div{
         position: absolute;
         top:50%;
         transform:translate(0,-.75rem);
         display:inline-block;
         margin:0 12%;
         font-size:1.5rem;
     }
     .container>.user>div>div>a{
        color:#535353;
     }
/*3:list部分*/
     .container>.list{
        width:90%;
        margin:0 auto;
        margin-top:1.66rem;
        background: #fff;
        border-radius:0.83rem;
        height:24.99rem;
    }
    .container>.list>li{
        display:flex;
        align-items:center;
        padding:1.2rem 1.66rem;
        border-bottom:1px solid #e5e5e5;
    }
    
    .container>.list>li>i:first-child{
        font-size:2.08rem;
        color:#c63b2d;
    }
    .container>.list>li>i:last-child{
        font-size:2.08rem;
        color:#535353;
        margin-left:12rem;
    }
    .container>.list>li>span{
        display:inline-block;
         color:#535353;
         margin-left:1.66rem;
         font-size:1.33rem;
    }
    .btn{
        width:90%;
        height:3.6rem;
        line-height:3.6rem;
        margin:0.6rem auto;
        color:#c63b2d;
        font-size: 1.49rem;
        font-family:"Arial";
        background-color: #fff;
        border-radius:.7rem;
        outline: none
    }
    .mint-button--default{
        box-shadow:none
    }
    
</style>

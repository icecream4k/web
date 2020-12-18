<template>
    <div class="container">
        <!-- <div class="header">
            <router-link :to="`/User`">
                <img src="../assets/img/LeftArrow1.png" alt="">
            </router-link>
            <span>我的订单</span>
        </div> -->
        <my-header>我的订单</my-header>
        <my-loading :loadStatus="loadStatus"></my-loading>
        <div class="order">
            <ul>
                <li v-for="(item,i) of orderlist " :key="i">
                   <ordermsg
                        :order="item"
                   > </ordermsg>
                </li>
            </ul>
        </div>
        <div v-show="!len" class="noTicket">您还没有订单哦！赶紧<router-link to="/" style="color:#c63b2d;font-size:1.8rem"> 去买票 </router-link>吧！</div>
    </div>
</template>
<script>
//1:引入子组件
import ordermsg from "../components/user/OrderMsg.vue";
// //引入json串
// import mJson from "../../public/json/orderlist.json"


export default {
    name:'OrderList',
    data(){
        return{
			//组件遍历它，然后根据订单信息查询数据
			orderlist:[],
            // list:mJson
            loadStatus:true,
            len:1
			
        }
    },
	created(){
        this.axios.get("order/getUserOrder",{params:{uid:localStorage.getItem('uid')}})
        // {uid:this.$store.state.user.uid}})
		.then(result=>{
			// console.log(result);
            this.orderlist=result.data;
            this.len=this.orderlist.length
            this.loadStatus=false;
			// console.log(this.orderlist);
		})
	},
    //注册子组件
    components:{
        ordermsg
    },
    beforeRouteLeave(to,from,next){
        if(to.name=='pay'){
            this.$router.push('/User')
        }
        if(to.name=="user"){
            this.$store.commit('changeCacheComponent',[])
        }else if(to.name=="OrderDetail"){
            this.$store.commit('changeCacheComponent',['OrderList'])
        }
        next()
    }

}
</script>
<style scoped>
    .container{
        background:#f1f1f1;
        margin-top: 3.60rem;
        position: absolute;
        left:0;
        right:0;
        bottom:0;
        top:0;
        height:100%;
        overflow: auto;
        letter-spacing: 0.0417rem;
    }
    .container>.order{
        margin:0 auto;
        width:90%;
    }
    .container>.order>ul>li{
    margin:1rem 0; 
    }
     .noTicket{
         font-size:1.6rem;
         margin-top:40%;
         text-align:center;
     }

</style>

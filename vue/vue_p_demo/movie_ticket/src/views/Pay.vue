<template>
    <div class="pay">
        <!-- <div class="back" @click="back"><img src="/img/dimg/back.png" alt=""></div> -->
        <my-header>收银台</my-header>
        <button class="cancel" @click="cancel">取消订单</button>
        <div class="cancelMsg" v-show="isCancel">
            <div class="wrapper" :style="cancelClass">
                <div class="cancelContent">确认取消订单吗？</div>
                <div class="yesOrNo"> 
                    <div class="yes" @click="yes">确认取消</div>
                    <div class="no" @click="no">我再想想</div>
                </div>
            </div>
            
        </div>
        <div class="movieMsg">
          <div class="confirm2">支付提醒：请在 {{timeMsg}} 内完成支付，超时订单将取消</div>
          <div class="movieImg"><img :src="baseUrl+movieImg" alt=""></div>
          <div class="movieDetails">
              <span>{{mName}}</span>
              <span v-text="`2019-${movieMsg.date} ${movieMsg.time}`"></span>
			  <p><span v-for="(item,i) of movieMsg.showSeat" :key="i">{{item.x}}排{{item.y}}座</span></p>
              <span v-text="`${movieMsg.showSeat.length}张*${movieMsg.price}`"></span>
              <span v-text="`${(movieMsg.showSeat.length*movieMsg.price).toFixed(2)}元`"></span>
          </div>  
        </div>
        <!-- 电影票详情 从vuex中获取数据渲染到支付页面 -->
        <div></div>
        <!-- 食品详情 -->
        <div class="foods">
            <div v-for="(item,i) of this.$store.getters.getProductionItem" :key="i">
                <span v-text="`${item.fname}×${item.count}`"></span>
                <span v-text="`${(item.Price*item.count).toFixed(2)}元`"></span>
            </div>
        </div>
        <!-- 优惠会员项 -->
        <div class="discount">
            <div class="disItem">
                <span>电影优惠卷、代金券</span>
                <i class="iconfont icon-arrowRight"></i>
            </div>
            <div class="disItem">
                <span>卖品优惠券</span>
                <i class="iconfont icon-arrowRight"></i>
            </div>
            <div class="disItem">
                <span>使用会员卡</span>
                <i class="iconfont icon-arrowRight"></i>
            </div>
            <div class="disItem">
                <span>使用星意卡</span>
                <i class="iconfont icon-arrowRight"></i>
            </div>
            <div class="disItem">
                <span>可使用积分、满50可用</span>
                <i class="iconfont icon-arrowRight"></i>
            </div>
        </div>
        <div class="totalPrice">
            <span>订单总价</span>
            <span>{{(total+(movieMsg.showSeat.length*movieMsg.price)).toFixed(2)}}元</span>
        </div>
        <!-- 支付 -->
        <div class="order">
            <div class="bonus">
                <span class="sum">{{(total+(movieMsg.showSeat.length*movieMsg.price)).toFixed(2)}}</span> 
            </div>
            <button to="" class="confirm" @click="postOrder">确认订单</button>
           
        </div>
    </div>
    
</template>
<script>
// import { setTimeout } from 'timers';
import {baseUrl} from '@/common.js'
export default {
    name:"pay",
    data(){
        return{
           movieMsg:{},
		   movieImg:'movie_img/aichong/1.jpg',
		   mName:'',
           baseUrl:baseUrl,
           secondCount:900,
           timeMsg:"",
           timer:null,
           isCancel:false,
           cancelClass:{
               transform:"scale(0)"
           }
        }
    },
    computed:{
        total(){
            let sum=0;
            for(var item of this.$store.getters.getProductionItem){
               sum+=item.count*item.Price;
            }
            return sum;
        }
    },
    methods:{
        // back(){
        //     this.$router.go(-1)
        // },
        cancel(){
            this.isCancel=true;
            setTimeout(()=>{
                this.cancelClass={
                    transform:'scale(1)'
                }
            },20)
        },
        yes(){
            this.$router.push('/')
        },
        no(){
            this.cancelClass={
                transform:'scale(0)'
            }
            setTimeout(()=>{
                this.isCancel=false;
            },500)
        },
		postOrder(){
			let params = Object.assign({},this.$route.params);
            //添加食品信息
			params.productList=JSON.stringify(this.$store.getters.getProductionItem);
			params.choiceSeat=JSON.stringify(params.choiceSeat);
            params.showSeat=JSON.stringify(params.showSeat);
            params.uid=localStorage.getItem('uid');
			// params.uid=this.$store.state.user.uid;
			//发送ajax请求
			this.axios.post("order/add",params)
			.then((response)=>{
				// console.log(response)
				if(response.data.code==200){
                    //跳转到我的订单
                    this.$router.push("/OrderList")
                    // console.log(response.data)
				}else{
					// console.log("保存订单失败")
				}
			})
			.catch(function(err){
				throw err;
			})
			
        },
        timeCount(){
            let second=this.secondCount%60
            let minute=Math.floor(this.secondCount/60)
            this.timeMsg=minute+'分'+second+'秒'
            this.secondCount--
        }
    },
    actived(){
        // console.log("actived")
    },
	created(){
		//获取电影信息
		this.axios.get("movie/detail",{params:{mid:this.$route.params.mid}})
		.then(result=>{
			// console.log(result.data[0])
			this.movieImg=result.data[0].pic;
			this.mName=result.data[0].mName;
		})
		//在组件实例创建完成后就绑定数据
		// console.log("mounted")
		// console.log(this.$route.params)
		this.movieMsg=this.$route.params;
		// console.log(this.movieMsg.choiceSeat)
		// console.log(JSON.stringify(this.$store.getters.getProductionItem))
	},
    mounted(){
        this.timer=setInterval(()=>{
            if(this.secondCount>=0){
               this.timeCount()
            }else{
                clearInterval(this.timer)
                // 取消订单
            }
        },1000)
    },
     beforeRouteLeave(to,from,next){
        if(to.name=="OrderList"){
            this.$store.commit('changeCacheComponent',[])
        }
        next()
    }
}
</script>
<style scoped>
    .cancel{
        position:fixed;
        top:0;
        left:3%;
        width:7rem;
        height:3.5833rem;
        line-height: 3.5833rem;
        text-align: center;
        outline: none;
        background-color: #C63B2D;
        font-size:1.3rem;
        color:#fff;
        font-family: "Arial";
        z-index:400;
    }
    .cancelMsg{
        position: fixed;
        left:0;
        right:0;
        top:0;
        bottom:0;
        z-index:500;
        background-color:rgba(0,0,0,.5);
    }
    .wrapper{
        position:fixed;
        left:50%;
        top:50%;
        margin-left:-8rem;
        margin-top:-4.5rem;
        width:16rem;
        height:9rem;
        z-index:501;
        letter-spacing: 0.05rem;
        transition: all 0.5s ease;
    }
    .wrapper>div{
        width:16rem;
        text-align: center;
        background-color:rgba(0,0,0,.6);
        color:#fff;
        font-family: "Arial"
    }
    .cancelContent{
        height:6rem;
        line-height: 6rem;
        font-size:1.3rem;
        border-top-right-radius: 1.2rem;
        border-top-left-radius: 1.2rem;
    }
    .wrapper>.yesOrNo{
        height:3rem;
        line-height:3rem;
        font-size:1.1rem;
        display:flex;
        border-top:1px solid #c63b2d;
        border-bottom-right-radius: 1.2rem;
        border-bottom-left-radius: 1.2rem;
        overflow: hidden;
    }
    .no{
        width:50%;
        background-color:#c63b2d;
        color:#fff;
    }
    .yes{
        width:50%;
    }
	.pay{
		padding-bottom: 100%;
		padding-top: 3.6rem;
        background:#f1f1f1;
	}
	.movieMsg{
		margin-bottom:1rem;
        padding-bottom:0.8rem;
        background:#fff;
        margin-top:3rem;
        padding-top:1rem;
	}
    .movieMsg:after{
        display: block;
        content:"";
        clear:both;
    }
	.movieMsg>div:not(:first-child){
		float: left;
	}
    .confirm2{
        position:fixed;
        left:0;
        right:0;
        top:3.6rem;
        margin-bottom:1rem;
        font-size:1rem;
        padding:0.5rem 1rem;
        background:#faaf00;
        color:#fff;
    }
	.movieMsg>.movieImg{
		width: 8rem;
		margin-right: 1.2rem;
		margin-left: 1rem;
        
        box-shadow: .25rem .25rem .5rem 0;
	}
	.movieMsg>.movieImg>img{
		width: 100%;
		display:inline-block;
        
	}
    .movieDetails{
        display: flex;
        flex-direction: column;
		height: 100%;
		width: 60%;
    }
    .movieDetails>span{
        font-size:1.4rem;
		margin-bottom: 1rem;
    }
    .movieDetails>span:nth-child(2){
        font-size: 1.2rem;
        color:#888;
    }
    .movieDetails>span:nth-child(4){
        font-size: 1.2rem;
        color:#888;
    }
    .movieDetails>span:last-child{
        margin-top:0.5rem;
    }
	.movieDetails>p{
		margin-bottom: 1rem;
		word-break:normal;
		width: 88%;
	}
	.movieDetails>p>span{
		font-size: 1.2rem;
        color:#888;
		margin-right: 0.5rem;
	}
 /* .back{
        z-index:200;
        font-size:1.3333rem;
        margin-top:1rem;
		position: fixed;
		top: 0;
		left: 0;
		background: white;
		width: 100%;
		padding-bottom: 1rem;
    }
    .back img{
        width:2rem;
    } */
    .foods{
        display:flex;
        flex-direction: column;
        justify-content:space-between;
        background: #fff;
    }
    .foods>div{
        padding:1rem 1.5rem 1rem 1rem;
        display:flex;
        justify-content:space-between;
        border-bottom:1px solid #f1f1f1;
    }
    .foods span{
        font-size:1.2rem;
    }
    .discount{
        display:flex;
        flex-direction: column;
        background:#fff;
    }
    .disItem{
        display:flex;
        justify-content:space-between;
        padding:1rem 1.5rem 1rem 1rem;
        font-size:1.2rem;
        border-bottom:1px solid #f1f1f1;
    }
    .totalPrice{
        display:flex;
        justify-content:space-between;
        padding:1rem 1.5rem 1rem 1rem;
        font-size:1.2rem;
        margin-top:1rem;
        background:#fff;
    }
    .totalPrice>span:last-child{
        color:#c63b2d;
        font-size:1.4rem;
    }
    /* 支付 */
    .order{
        width:100%;
        display:flex;
        /* flex-direction: column; */
        position:fixed;
        bottom:0rem;
        left:0rem;
        z-index:399;
    }
      
    .bonus{
        width:50%;
        text-align:center;
        border:1px solid #C63B2D;
        padding: 1rem 0;
        /* padding:0.6666rem 0; */
        background:#fff;
        /* line-height:0.6rem;*/
    }
    
    .bonus span{
        display:inline-block; 
        color:#C63B2D;
        font-size:1.5rem;
    }
    .confirm{
        color:#fff;
        text-decoration: none;
        font-size:1.6666rem;
        display:block;
        width:50%;
        text-align:center;
         /* line-height:4.1666rem;  */
        background-color:#C63B2D;
        /* padding:0.4166rem 0; */
    }
    /* 支付成功跳转页面 */
     /* .None{
          display:none;
     }
     .paySuccess{
        position:fixed;
        top:50%;
        left:50%;
        margin-left:-6rem;
        margin-top:-6rem;
        z-index:1000;
        background-color:#ccc;
        width:12rem;
        height:12rem;
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
     .paySuccess p,.paySuccess button{
         text-align:center;
        
     }
     .paySuccess p{
          font-size:1.2rem;
          margin-top:-3rem;
     }
     .paySuccess button{
          font-size:1.6rem;
         display:inline-block;
         background-color:red;
         /* margin-left:30%;
         margin-top:50%; */
         /*width:6rem;
         height:2rem;
         line-height: 2rem;
     } */
</style>



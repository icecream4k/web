<template>
    <div class="container">
        <my-header>订单详情</my-header>
        <table></table>
        <div class="detail"> 
            <div class="content">
                <h4>{{movieMsg.mName}}</h4>
                <p>2019-{{order.date}} {{order.time}}({{movieMsg.lanType}})</p>
                <p>{{ciname.cName}} {{order.roomid+1}}号厅</p>
                <p class="seat"><span v-for="(item,index) in JSON.parse(order.choiceSeat)" :key='index'>{{item.x}}排{{item.y}}座 &nbsp;&nbsp;</span></p>
                <!-- <span>片尾有1个彩蛋，不要错过</span> -->
                <div class="circleLeft"></div>
                <div class="circleRight"></div>
            </div>
        </div>
        <div class="getTicket">
            <div>
                <p>订单号：{{orderId}}</p>
                <p>验证码：2015 0802 3698 1117</p>
                <img :src="require('../assets/img/qyqx01.jpg')">
            </div>
            <div class="circleLeft"></div>
            <div class="circleRight"></div>   
        </div>
        <div class="others">
            <div class="hall">
                <div>
                    <h4>{{ciname.cName}}</h4>
                    <p>{{ciname.loca}}</p>
                </div>
                <img :src="require('../assets/img/phone.png')">
                <div class="circleLeft"></div>
                <div class="circleRight"></div>
            </div>
            
            <div class="price">
                <div>
                    <h4>实付金额</h4>
                    <span>{{payMoney.toFixed(2)}}元</span>
                    <p>订单号：{{orderId}}</p>
                    <p>场次：2019-{{order.date}} {{order.time}}</p>
                    <p>{{movieMsg.mName}}：{{order.price}}.00元({{JSON.parse(order.choiceSeat).length}}张)</p>
                    <p v-for="(item,index) in foodList" :key="index">{{item.fname}}：{{item.Price}}元({{item.count}}份)</p>
                    <p>手机号:{{uname}}</p>
                    <p>电影票由阿里影业凤凰佳影提供</p>
                </div>
                
            </div>
            <div class="notice">
                <div>
                    <h4>观影须知</h4>
                    <p>1.购票时，请核对场次、片名。票面一经售出，概不退换，严禁倒卖。</p>
                    <p>2.低于一米以下儿童谢绝入场。高于一米儿童，必须购票入场,观影期间请持票出入影厅。</p>
                    <p>3.观众请勿携带非本影城卖品部出售的饮食品进入影厅。</p>
                    <p>4.影城内禁止吸烟。请勿食用口香糖。</p>
                    <p>5.影片放映期间，请勿喧哗。请将手机及传呼机关闭或调至震动。</p>
                    <P>6.观众的贵重物品请妥善保管，散场时请带好自己的物品，影城声明对任何原因引起的物品丢失不承担责任。</P>
                    <P>7.请注意开场前将放映约五分钟预告片（广告片）</P>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"OrderDetail",
    data(){
        return{
			order:this.$route.params.order,
			movieMsg:this.$route.params.movieMsg,
			ciname:this.$route.params.ciname,
            foodList:JSON.parse(this.$route.params.order.productList),
            uname:localStorage.getItem('uname')
		}
    },
	// created(){
	// 	console.log(this.order.oId)
	// },
	computed:{
		//订单id
		orderId(){
			let id = JSON.parse(this.order.choiceSeat)[0].id;
			let str = id.toString().substring(2)
			return str
		},
		//总价
		payMoney(){
			let money=0;
			money+=this.order.price*JSON.parse(this.order.choiceSeat).length;
			for(let i = 0;i<this.foodList.length;i++){
				money+=this.foodList[i].Price*this.foodList[i].count;
			}
			return money
		}
    },
    activated(){
        // console.log(this.order.oId)
        // console.log(this.$route.params.order.oId)
        if(this.order.oId!=this.$route.params.order.oId){
            this.order=this.$route.params.order,
			this.movieMsg=this.$route.params.movieMsg,
			this.ciname=this.$route.params.ciname,
            this.foodList=JSON.parse(this.$route.params.order.productList),
            this.uname=localStorage.getItem('uname')
        }
    }
}
</script>
<style scoped>
    .container{
       background:#e5e5e5;
       height:100%;
    }
    .circleLeft{
        position:absolute;
        left:0;
        bottom:-0.8rem;
        width:0.8rem;
        height:1.6rem;
        display: inline-block;
        background-color:#e5e5e5;
        border-top-right-radius: 0.8rem;
        border-bottom-right-radius: 0.8rem;
        z-index:199;
        padding:0 !important;
    }
    .circleRight{
        position:absolute;
        right:0;
        bottom:-0.8rem;
        width:0.8rem;
        height:1.6rem;
        display: inline-block;
        background-color:#e5e5e5;
        border-top-left-radius: 0.8rem;
        border-bottom-left-radius: 0.8rem;
        z-index:199;
        padding:0 !important;
    }
/* 1:header头部部分
    .container>.header{
        height:4.98rem;
        display:flex;
        align-items:center;
        background:#c63b2d;
        padding:0 0.415rem;
    }
    .container>.header>a>img{
        height:1.66rem;
        width:1.66rem;
    }
    .container>.header>span{
        display: flex;
        justify-content:left;
        align-items: center;
        color:#fff;
        font-size: 0.996rem;
        letter-spacing: 0.166rem;
    }
    .container>.header>span:last-child{
        margin-left:7.47rem;
        align-items: center;
        color:#fff;
        font-size: 1.328rem;
        letter-spacing: 0.166rem;
    } */
/*2:订单详情界面*/
    .container>.detail{
        margin:0 auto;
        margin-top: 4.60rem;
        width:90%;
        background:#fff;
        border-bottom:1px dotted #888;
        position: relative;
        border-top-left-radius:1rem;
        border-top-right-radius:1rem;
    }

    .container>.detail>div{
        padding:1.66rem;
        letter-spacing: 0.0417rem;
    }
    .container>.detail>div>h4{
        font-size:1.4rem;
        font-weight: 600;
        margin-bottom:1rem;
        color:#000;
    }
    .container>.detail>div>p{
        font-size:1rem;
        margin-bottom:0.8rem;
        color:#000;
    }
    .container>.detail>div>.seat{
        font-size:1rem;
        margin-bottom:0.8rem;
        color:#888;
    }
    /* .container>.detail>div>span{
        display:block;
        font-size:1rem;
        color:#535353;
        margin-bottom:0.5rem;
    } */
    /* .container>.detail>div>span:last-child{
        display:inline-block;
        background:#c63b2d;
        padding:0.25rem;
        color:#fff;
        border-radius:0.83rem;
    } */
/*3:订单详情界面*/  
    .container>.getTicket{
        margin:0 auto;
        width:90%;
        background:#fff;
        border-bottom:1px dotted #888; 
        position:relative;
    }
    .container>.getTicket>div{
        padding:1.66rem;
        color:#000;
    }
    .container>.getTicket>div>p{
        font-size:1rem;
        letter-spacing: 0.0417rem;
        margin-bottom:0.8rem;
    }
    .container>.getTicket>div>img{
        display:block;
        margin:1.66rem auto;
        width:14.94rem;
        height:14.94rem;
        border-radius: 0.415rem;
    }
/*4:其它详情界面*/  
    .container>.others{
        margin:0 auto;
        width:90%;
        background:#fff;
        margin-bottom:1.4rem;
        border-bottom-left-radius:1rem;
        border-bottom-right-radius:1rem;
    }
 /* 4.1影院信息 */
      .container>.others>.hall{
        padding:1.66rem;
        display:flex;
        /* justify-content: space-around; */
        align-items:center;
        border-bottom:1px dotted #888; 
        position: relative;
        
    }
     .container>.others>.hall>div>h4{
        font-size:1.2rem;
        font-weight:600;
        color:#000;
        letter-spacing: 0.0417rem;
        margin-bottom:0.8rem;

    }
     .container>.others>.hall>div>p{
        font-size:1rem;
        line-height:1.6rem;
        color: #888;
        letter-spacing: 0.0417rem;
        margin-bottom:0.8rem;
    }
    .container>.others>.hall>img{
        margin-left:0.8rem;
        display:inline-block;
        width:2rem;
        height:2rem;
    }
 /* 4.2票价信息 */
     .container>.others>.price{
        padding:1.66rem;
        border-bottom:1px dotted #888; 
    }
      .container>.others>.price>div>h4{
        display:inline-block;
        font-size:1.2rem;
        font-weight:600;
        letter-spacing: 0.0417rem;
        margin-bottom:0.83rem;
        color:#000;
    }
     .container>.others>.price>div>span{
        display:inline-block;
        font-weight:600;
        margin-left:55%;
        font-size:1.4rem;
        letter-spacing: 0.0417rem;
        margin-bottom:0.8rem;
    }
     .container>.others>.price>div>p{
        font-size:1rem;
        line-height:1.6rem;
        color: #888;
        letter-spacing: 0.0417rem;
        margin-bottom:0.2rem;
    }
 /* 4.3观影须知*/
     .container>.others>.notice{
        padding:1.66rem;
    }
      .container>.others>.notice>div>h4{
        display:inline-block;
        font-size:1.2rem;
        font-weight:600;
        letter-spacing: 0.0417rem;
        margin-bottom:0.8rem;
    }
     .container>.others>.notice>div>p{
        font-size:1rem;
        line-height:1.6rem;
        color: #888;
        letter-spacing: 0.0417rem;
        margin-bottom:0.2rem;
    }
 /* 4.5删除订单
     .container>.others>.del{
        padding:1.66rem;
        border-bottom:0.083rem dotted #888; 
    }
     .container>.others>.del>div>p{
        text-align: center;

        
        font-size:1.328rem;
        line-height:1.66rem;
        color: #888;
        letter-spacing: 0.083rem;
        border:0.083rem solid #888;
        border-radius: 1.66rem;
    } */
</style>

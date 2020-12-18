<template>
<!--OrderMsg.vue-->
    <div class="rootstyle">
        <!-- 跳转到相应的订单id中 :to="`OrderList/${item.oid}`"  -->
        <div class="orderitem" @click="toDetail(order,ciname,movieMsg)">
           
            <div class="order">
				<div class="movieImg">
                    <img :src="baseUrl+movieMsg.pic | urlFilter" >
                </div>
                <div class="content">
                    <!-- 电影名称 -->
                    <span>{{movieMsg.mName}}</span>
                    <!-- 2019-07-09 17:30 -->
                    <span >2019-{{order.date}} {{order.time}}</span>
                    <!-- 滨江嘉年华国际影城 -->
                    <span>{{ciname.cName}}&nbsp;&nbsp;{{order.roomid+1}}号厅</span>
                </div>
                <!-- <span class="comment">查看详情</span> -->
            </div>
        </div>
    </div>
</template>
<script>
	import {baseUrl} from '@/common.js'

export default {
    props:['order'],
    data(){
        return{
			ciname:{},
			movieMsg:{
				pic:"blank.jpg"
			},
			baseUrl:baseUrl
        }
    },
	methods:{
		toDetail(order,ciname,movieMsg){
			this.$router.push({
				name:"OrderDetail",
				params:{
					order,
					ciname,
					movieMsg
				}
			})
		}
	},
	created(){
		this.axios.get("movie/detail",{params:{mid:this.order.mid}})
		.then(result=>{
			this.movieMsg=result.data[0]
			// console.log(this.movieMsg)
		})
		this.axios.get("movie/cinemaDetail",{params:{cid:this.order.cid}})
		.then(result=>{
			this.ciname=result.data;
			// console.log(this.ciname);
		})
	}
}
</script>
<style scoped>
   .rootstyle{
        padding:1rem;
        background:#fff;
    }
	/* .rootstyle .comment{
		margin-left: 1rem;
	} */
    /*头部*/
    /* .rootstyle>.orderitem>.header{
        display:flex;
        align-items: center;
        height:2.49rem;
        padding:.41.5rem 0.83rem;
    }
    .rootstyle>.orderitem>.header>img{
        width:2.075rem;
        height:2.075rem;
    }
    .rootstyle>.orderitem>.header>span{
        font-family:Arial;
        font-weight:1000;
        font-size:1.2rem;
        margin-left:0.83rem; 
        letter-spacing:0.25rem;
		color: #535353;
    } */

    /*中间order部分*/
    .rootstyle>.orderitem>.order{
        display:flex;
        align-items: center;
        /* height:6.64rem; */
        /* padding:0.415rem 0.83rem; */
        font-family:"Arial"
    }
	.rootstyle>.orderitem>.order>div:first-child{
		width: 6rem;
        box-shadow: .25rem .25rem .5rem 0;
	}
   
	.rootstyle>.orderitem>.order>div:first-child>img{
		width: 100%;
	}
	.rootstyle>.orderitem>.order>.content{
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        height:8.4533rem;
        margin-left:1.5rem;
        font-size: 1.1rem
    }
    .rootstyle>.orderitem>.order>.content>span:first-child{
        font-size: 1.3rem;
    }
    .rootstyle>.orderitem>.order>.content>span:nth-child(2){
        color:#535353;
    }
    /* .rootstyle>.orderitem>.order>.content{
        display:block;
    } */
    
    /* .rootstyle>.orderitem>.order>div>span{
        display:block;
        font-family:'Arial';
        color: #888;
        font-size:0.996rem;
        letter-spacing:0.05rem;
        margin-left:1rem;
        padding:0.498rem 0;
    }
    .rootstyle>.orderitem>.order>span{
        font-family:'Arial';
        color: #888;
        font-size:0.83rem;
        letter-spacing: 0.166rem;
        margin-left:1rem;
        border-radius: 0.6rem;
		border: 0.1rem solid #eee;
        padding:0.5rem;
    } */
</style>

<template>
	<div class="content" >
		<div class="background" v-if="isloaded==1"><img :src="baseUrl+movieList[$store.getters.getMid-1].pic" alt=""></div>
		<div class="contentbox">
			<div class="hallMessage">
				<div>
					<button class="iconfont icon-arrowLeft" @click="goBack"></button>
					<h3>影院</h3>
				</div>
				<div @click="toCinemaDetail">
					<div class="map">
						<span class="iconfont icon-dingwei1"></span>
						<span>地图</span>
					</div>
					<div class="message">
						<h3>{{cinema.cName}}</h3>
						<p>{{cinema.loca}}</p>
						<p>影城电话：&nbsp;{{cinema.telephone}}</p>
					</div>
				</div>
			</div>
			<div class="movieList" @scroll="handleScroll" ref='movielist' >
				<div ref="imglist" class="imageList" :style="{width:boxWidth+'rem',paddingLeft:boxPading+'rem',paddingRight:boxPading+'rem'}" >
					<div class="item" v-for="(item,index) in movieList" :key="index" :data-code="index">
						<div :style="{left:imgsleft[index]+'rem',top:imgstop[index]+'rem',width:imgwidth[index]+'%'}" 
						ref="img"  
						:data-mid="item.mid">
							<img :src="baseUrl+item.pic" alt="">
						</div>
						
					</div>
				</div>
				
			</div>
			<span :style="{left:spanleft+'rem'}"></span>
			<!-- 直接从store中拿电影id -->
			<m-list :mid="$store.getters.getMid" :cname="cinema.cName" style="padding-top: 1rem;"></m-list>
		</div>
		
	</div>
</template>

<script>
	import Booking from '@/json/booking.json'
	import mList from '@/components/Booking/mList.vue'
	import {baseUrl} from "@/common"
	
	//影院信息
	// const hall=Booking.Hall;
	//拿到电影信息
	const movieList=Booking.moveList;
	let interval=null;
	let leftValue=0;
	export default{
		// props:{
		// 	mid:3
		// },
		name:"booking",
		data(){
			return{
				//影院信息
				cinema:{},
				//判断电影信息是否请求完成
				isloaded:0,
				// mid:this.theMid,
				baseUrl:baseUrl,
				MovieL:[],
				// hall:hall,
				movieList:[],
				//三角图标的left
				spanleft:(window.innerWidth)/24-0.8,
				winWidth:window.innerWidth,
				//图片元素的宽度比
				// imgswidth:0.8,
				imgsleft:[0.3,0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.7],
				imgstop:[0.4636,1.03,1.03,1.03,1.03,1.03,1.03,1.03,1.03,1.03,1.03,1.03,1.03,1.03,1.03],
				imgwidth:[90,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80],
				// imgstyle:{
				// 	left:(4-4*img)rem;
				// 	top:(11.272-11.272*0.8)*0.5rem;
				// }
			}
		},
		created(){
			//进入时先清除全局定时器，因为上次离开时不能确定定时是否被清除，定时器不为空，则永远进不去handScroll
			clearInterval(interval);
			interval=null;
			//获取影院信息
			this.axios.get("movie/cinemaDetail",{params:{cid:this.$store.state.cityAndCinema.cid}})
			.then(result=>{
				// console.log(result.data);
				this.cinema=result.data;
			})
			// console.log(baseUrl);
			//发送ajax获取电影，最多9部电影，需要截取一下，与上面的movieList对应
			this.axios.get("movie")
			.then((result)=>{
				let movieList=result.data.movie;
				this.movieList=movieList;
				this.isloaded=1;
				// console.log(movieList);
			})
			
			//这里需要只是根据初始id渲染了一次，当滑动不同的电影时，需要重新给Moviel赋值，
			//或者在子组件中根据mid获取相应的场次信息；
			// console.log(this.mid-1);
			// this.MovieL=MovieL[this.mid-1];
			// console.log(this.MovieL);
			
		},
		components:{
			mList
		},
		methods:{
			//返回
			goBack() {
				this.$router.back(-1);
			},
			toCinemaDetail(){
				let cid=this.cinema.cid
				this.$router.push(`/cinemaDetail/`+cid)
			},
			//改变选中电影的宽、lef、top
			setImgsItem(arrleft,arrtop,arrwidth,n){
				for(let i=0;i<arrleft.length;i++){
					this.$set(arrleft,i,0.7);
					this.$set(arrtop,i,1.03);
					this.$set(arrwidth,i,80);
				}
				this.$set(arrleft,n,0.3);
				this.$set(arrtop,n,0.4636);
				this.$set(arrwidth,n,90);
				
			},
			handleScroll(e){
				
				// console.log(this.$refs.imglist.offsetX)
				leftValue=e.target.scrollLeft;
				if(interval==null){
					interval=setInterval(()=>{
						if(e.target.scrollLeft==leftValue){
							
							if(leftValue>=0&&leftValue<46){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=0;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,0);
								//改变data中的mid
								// console.log(this.$refs.img[0].getAttribute('data-mid'));
								let mid=this.$refs.img[0].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
								//想一下办法怎么让数据请求过来之后再将img绑定到refs中
								
							}else if(leftValue>=46&&leftValue<144){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=96;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,1);
								let mid=this.$refs.img[1].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
							}else if(leftValue>=144&&leftValue<240){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=190;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,2);
								let mid=this.$refs.img[2].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
							}else if(leftValue>=240&&leftValue<336){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=288;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,3);
								let mid=this.$refs.img[3].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
							}else if(leftValue>=336&&leftValue<432){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=384;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,4);
								let mid=this.$refs.img[4].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
							}else if(leftValue>=432&&leftValue<528){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=480;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,5);
								let mid=this.$refs.img[5].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
							}else if(leftValue>=528&&leftValue<624){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=576;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,6);
								let mid=this.$refs.img[6].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
							}else if(leftValue>=624&&leftValue<720){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=672;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,7);
								let mid=this.$refs.img[7].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
							}else if(leftValue>=720&&leftValue<816){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=768;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,8);
								let mid=this.$refs.img[8].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
							}
							else if(leftValue>=816&&leftValue<912){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=864;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,9);
								let mid=this.$refs.img[9].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
								
							}
							else if(leftValue>=912&&leftValue<1008){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=960;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,10);
								let mid=this.$refs.img[10].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
								
							}
							else if(leftValue>=1008&&leftValue<1104){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=1056;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,11);
								let mid=this.$refs.img[11].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
								
							}
							else if(leftValue>=1104&&leftValue<1200){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=1152;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,12);
								let mid=this.$refs.img[12].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
								
							}
							else if(leftValue>=1200&&leftValue<1296){
								clearInterval(interval);
								interval=null;
								e.target.scrollLeft=1248;
								this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,13);
								let mid=this.$refs.img[13].getAttribute('data-mid');
								this.$store.commit('changeMid',mid);
								
							}
							
						}
					},300);
					
				}
				
			}
		},
		computed:{
			// 图片滑动栏的宽
			boxWidth(){
				return this.movieList.length*8;
			},
			//图片滑动栏左右内边距
			
			boxPading(){
				return ((window.innerWidth/12)*0.5-4);
			}
			// imgsleft(){
			// 	let arr=[]
			// 	for(let i=0;i<this.imgswidthpid.length;i++){
			// 		arr[i]=3.9-4*this.imgswidthpid[i];
			// 	}
			// 	return arr;
			// },
			// imgstop(){
			// 	let arr=[]
			// 	for(let i=0;i<this.imgswidthpid.length;i++){
			// 		arr[i]=5.536-5.636*this.imgswidthpid[i];
			// 	}
			// 	return arr;
			// }
		},
		mounted(){
			// console.log(this.$refs.imglist);
			// const imglist = this.$refs.imglist;
			// imglist.addEventListener('scroll', this.handleScroll);
			// console.log(this.$store.getters.getMid);
			//这里是根据上一级传过来的mid渲染初始化滑动条位置和对应内部元素的样式
			this.setImgsItem(this.imgsleft,this.imgstop,this.imgwidth,this.$store.getters.getMid-1);
			// this.$refs.movielist.scrollLeft=96*(this.$store.getters.getMid-1);
			//为什么一直是0
			// console.log(this.$refs.movielist.scrollLeft);
			// console.log(this.$store.getters.getMid)
		},
		watch:{
			// mid(val,oldval){
			// 	// console.log(val);
			// 	// console.log(oldval);
			// }
			movieList(val,oldval){
			
					// console.log(999);
					//这一步为什么无效
					//因为此时ajax刚刚拿到数据，但是这个div的宽度也许还是没有变为可以滑动的宽度，所以需放在update中
					//update在页面每次更新数据之后执行
					// this.$refs.movielist.scrollLeft=96*(this.$store.getters.getMid-1);
					// console.dir(96*(this.$store.getters.getMid-1))
				
			}
		},
		//update在页面每次更新数据之后执行，axios中请求的数据过来后，data中的数据更新，所以会触发下面的函数
		updated(){
			this.$refs.movielist.scrollLeft=96*(this.$store.getters.getMid-1);
		}
	}
</script>

<style scoped>
	.content{
		width: 100%;
		position: relative;
		font-family: "Arial";
		
	}
	.content>.background{
		width: 100%;
		height: 36rem;
		overflow: hidden;
	}
	.content>.background>img{
		filter: blur(10px);
	}
	.content>.contentbox{
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 9999;
	}
	.content>.contentbox>.hallMessage{
		width: 100%;
		background:#fff;
		overflow: hidden;
		padding-bottom: 1rem;
		
	}
	.content>.contentbox>.hallMessage>div:first-child{
		width: 100%;
		overflow: hidden;
		margin-bottom: 1rem;
		position: fixed;
		top: 0;
		left: 0;
		background: #c63b2d;
		z-index: 10000;
		color: white;
		height: 3.6rem;
		
	}
	.content>.contentbox>.hallMessage>div:first-child>h3{
		text-align: center;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		font-size: 1.5rem;
		line-height: 3.5rem;
		/* height: 3.5rem; */
	}
	.content>.contentbox>.hallMessage>div:first-child>button{
		position: absolute;
		left: 0;
		top: 0;
		z-index: 100;
		font-size: 2.5rem;
		background: #c63b2d;
		border: none;
		color: white;
	}
	/* .content>.contentbox>.hallMessage>div:first-child>h3{
		float: left;
		font-size: 1.5rem;
		line-height: 3.5rem;
		margin-left: 0.5rem;
	} */
	.content>.contentbox>.hallMessage>div:last-child{
		margin-top: 5rem;
		overflow: hidden;
		background: white;
	}
	.content>.contentbox>.hallMessage>div:last-child>div{
		float: left;
		background: white;
	}
	.content>.contentbox>.hallMessage>div:last-child>.map{
		width: 18%;
		border-right: 1px solid #e5e5e5;
	}
	.content>.contentbox>.hallMessage>div:last-child>.map>span:first-child{
		font-size: 2.4rem;
	}
	.content>.contentbox>.hallMessage>div:last-child>.map>span:last-child{
		font-size: 1.1rem;
	}
	.content>.contentbox>.hallMessage>div:last-child>.map>span{
		display: block;
		text-align: center;
		margin-bottom: 0.6rem;
		color: #888;
	}
	.content>.contentbox>.hallMessage>div:last-child>.message{
		padding-left: 2rem;
		width: 72%;
		box-sizing: border-box;
	}
	.content>.contentbox>.hallMessage>div:last-child>.message>h3{
		font-size: 1.2rem;
		color: #000;
	}
	.content>.contentbox>.hallMessage>div:last-child>.message>p:nth-child(2){
		margin-top:0.5rem;
	}
	.content>.contentbox>.hallMessage>div:last-child>.message>p{
		color: #888;
		/* margin-top: 0.5rem; */
		line-height: 1.5rem;
		font-size:1rem
	}
	
	.content>.contentbox>.movieList{
		margin-top: 0.5rem;
		width: 100%;
		padding: 1rem 0 1rem 0 ;
		overflow-x:scroll;
		position: relative;
	}
	.content>.contentbox>span{
		display: inline-block;
		position: absolute;
		border-left: 1rem solid transparent;
		border-right: 1rem solid transparent;
		border-bottom: 1rem solid white;
		top: 25.1rem;
	}
	.content>.contentbox>.movieList>.imageList{
		overflow: hidden;
	}
	.content>.contentbox>.movieList>.imageList>.item{
		width: 8rem;
		height: 11.272rem;
		float: left;
		margin:0;
		position: relative;
	}
	.content>.contentbox>.movieList>.imageList>.item>div{
		
		border: 0.1rem solid white;
		position: absolute;
		
		/* 要减去边框的1像素 */
	}
	.content>.contentbox>.movieList>.imageList>.item img{
		width: 100%;
	}
</style>

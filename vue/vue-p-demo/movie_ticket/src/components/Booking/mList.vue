<template>
	<div class="content">
		<div class="header">
			<p><i v-if="movieMsg.score!=0">{{movieMsg.score}}分</i>{{movieMsg.mName}}</p>
			<p>{{movieMsg.duration}}分钟<span>|</span>{{movieMsg.mType}}</p>
		</div>
		<div class="vip"><img src="img/huiyuan.jpg" alt=""></div>
		<div>
			<div>
				<div class="date" @click="choosDate" :style="{width:dateList.length*8.5+'rem'}">
					<h3 v-for="(item,index) in stageList.movieStage"  :data-date="index" ref='date' :key="index">{{index}}</h3>
				</div>
			</div>
			<div class="list">
				<li v-for="(item,index) in stageList.movieStage[showDate]" :key="index">
					<div>
						<p>{{index}}</p>
						<p>{{index|overTime(movieTime)}} 结束</p>
					</div>
					<div>
						<p>{{movieMsg.lanType}}</p>
						<!-- 这里先拿到影厅的id,存在属性中 -->
						<!-- 然后根据id去拿房间名以及座位信息，座位信息是在点击购票时获取 -->
						<p :data-roomid="stageList.movieStage[showDate][index].roomId">
						{{roomMessage[stageList.movieStage[showDate][index].roomId].name}}</p>
					</div>
					<div>
						<!-- 点击购票选座需要传的参数： -->
						<button 
						@click="buyTicket(showDate,index,item.nowPrice,stageList.movieStage[showDate][index].roomId)">
						购票</button>
					</div>
					<div>
						<p>{{item.nowPrice}}元</p>
						<p>{{item.oldPrice}}元</p>
					</div>
				</li>
			</div>
		</div>
	</div>
</template>

<script>
	//把房间信息引进来
	import roomMessage from '@/json/movehall.json'
	//电影信息，之后是从数据库请求过来的
	import movieMessageList from '@/json/booking.json'
	//引入所有的场次信息，需要根据传过来的mid获取对应的数据
	import MovieL from '@/json/movelist.json'
	export default{
		props:['mid','cname'],
		// {
		// 	//根据mid筛选过后的电影场次
		// 	stageList:Object,
		// 	mid:1
		// },
		data(){
			return{
				//电影名、评分,从数据库请求过来的
				movieMsg:{},
				stageList:null,
				//选中的电影的播映日期列表
				dateList:[],
				dateStyle:[],
				//选中的日期
				showDate:null,
				
				//选中的电影的信息，之后是根据axios请求过来的
				movieMessage:null,
				//房间信息
				roomMessage:roomMessage,
				//电影时长
				movieTime:0
			}
		},
		methods: {
			//选择日期需要做的操作（样式/传数据）
			choosDate(e) {				
				this.showDate=e.target.getAttribute('data-date');
				//设置store中的订单日期,不能先设，因为用户切换电影后直接点击购票，store中就是原来的旧日期
				// let str = e.target.getAttribute('data-date');				
				// this.$store.commit('changeDate',str);
				// console.log(this.$store.getters.getDate);
				let dates= this.$refs.date;
				for(let i=0;i<dates.length;i++){
					dates[i].style.color='#333';
					dates[i].style.borderBottom="0"
				}
				//这里应该根据showDate中的日期找到对应的元素，改变其样式
				for(let i=0;i<dates.length;i++){
					if(dates[i].getAttribute('data-date')==this.showDate){
						dates[i].style.color='#DF5C4D';
						dates[i].style.borderBottom="0.1rem solid #DF5C4D"
					}
				}
				
			},
			//拿到日期、时间、价格、房间号,记住在回退时清除store中的这些信息，应该也可以不用清除，因为每次点击购票
			//都会重新覆盖store中的值
			buyTicket(date,time,price,roomid){
				this.$store.commit('changeDate',date);
				this.$store.commit('changeTime',time);
				this.$store.commit('changePrice',price);
				this.$store.commit('changeRoomId',roomid);
				this.$router.push({
					name:"choiceseat",
					params:{
						movieMsg:this.movieMsg,
						cname:this.cname
					}
				});
			}
		},
		created(){
			//若data中某些值是根据data中的另外一些值计算出来的，最后是在created中计算赋值，否则偶尔会为空
			//这里是根据初始mid设置好对应的场次，若mid有改变还需要重新获取，所以需要监听mid，在下面的watch中
			// console.log(this.stageList);
			//1、获取信息
			this.axios.get("movie/detail",{params:{mid:this.mid}})
			.then(result=>{
				this.movieMsg=result.data[0];
				this.movieTime = this.movieMsg.duration;
			});
			this.movieMessage = movieMessageList.moveList[this.mid-1];
			
			this.stageList=MovieL[this.mid-1];
			// console.log(this.movieMessage);
			// console.log(this.movieTime);
			//2、绑定初始日期列表
			let items = this.stageList.movieStage;
			let i = 0;
			for(let item in items){
				this.dateList[i]=item;
				i++
			}
			this.showDate=this.dateList[0];
		},
		computed: {
			// movieMessage(){
			// 	console.log(movieMessageList.moveList[this.mid-1];)
			// 	return  movieMessageList.moveList[this.mid-1];
			// },
			// movieTime(){
			// 	return this.movieMessage.duration;
			// }
		},
		filters: {
			//电影结束时间过滤器
			overTime(startime,movietime){
				let overtime = '';
				let arr=startime.split(':');
				let hour = parseInt(movietime/60);
				let minute = movietime%60;
				arr[0]= parseInt(arr[0]) +hour;
				arr[1]= parseInt(arr[1])+minute;
				let str= arr.join(':');
				return str;
				
			}
		},
		mounted(){
			//将样式绑定到dom上
			
			//初始化日期样式
			this.$refs.date[0].style.color='#DF5C4D';
			this.$refs.date[0].style.borderBottom="0.1rem solid #DF5C4D"
		},
		//这里为什么需要监听这些信息，因为这里相当于组建复用，有些钩子函数不会被调用
		watch:{
			//监听mid改变stageList
			mid(val,oldval){
				//根据mid从数据库获取电影名和评分
				// console.log(888);
				this.axios.get("movie/detail",{params:{mid:this.mid}})
				.then(result=>{
					this.movieMsg=result.data[0]
					// console.log(this.movieMsg);
					this.movieTime = this.movieMsg.duration;
				});
				this.movieMessage = movieMessageList.moveList[this.mid-1];
				
				this.stageList=MovieL[this.mid-1];
				
			},
			//监听stageList改变dataList
			stageList(val,oldval){
				let items = this.stageList.movieStage;
				let i = 0;
				for(let item in items){
					//注意：以这种方式设置数组不会有数据更新
					this.$set(this.dateList,i,item);
					// this.dateList[i]=item;
					i++
				}
				
			},
			
			//监听dateList改变默认选中的日期showDate
			dateList(val,oldval){
				this.showDate=this.dateList[0];
				
				// this.$refs.date[0].style.color='#DF5C4D';
				// this.$refs.date[0].style.borderBottom="0.1rem solid #DF5C4D"
			},
			// //监听showDate 改变初始选中日期的样式
			// showDate(val,oldval){
			// 	let dates= this.$refs.date;
			// 	for(let i=0;i<dates.length;i++){
			// 		dates[i].style.color='#333';
			// 		dates[i].style.borderBottom="0"
			// 	}
			// 	for(let i=0;i<dates.length;i++){
			// 		if(dates[i].getAttribute('data-date')==this.showDate){
						
			// 			dates[i].style.color='#DF5C4D';
			// 			dates[i].style.borderBottom="0.1rem solid #DF5C4D"
			// 		}
			// 	}
			// }
			
		},
		updated(){
			let dates= this.$refs.date;
				for(let i=0;i<dates.length;i++){
					dates[i].style.color='#333';
					dates[i].style.borderBottom="0"
				}
				for(let i=0;i<dates.length;i++){
					if(dates[i].getAttribute('data-date')==this.showDate){
						dates[i].style.color='#DF5C4D';
						dates[i].style.borderBottom="0.1rem solid #DF5C4D"
					}
				}
		}
	}
</script>

<style scoped="scoped">
	.content{
		width: 100%;
		background: white;
		font-family: "Arial";
	}
	.content>.header{
		width: 100%;
		height: 4rem !important;
	}
	.content>.header>p{
		text-align: center;
		/* margin-top: 1rem; */
		color: #888;
	}
	.content>.header>p:first-child{
		font-size: 1.25rem;
		color: #000;
	}
	.content>.header>p:first-child>i{
		color: #faaf00;
		font-size: 1.1rem;
		margin-right: 1rem;
	}
	.content>.header>p:last-child{
		margin-top: 0.7rem;
		font-size:1rem;
	}
	.content>.header>p:last-child>span{
		margin-left: 0.5rem;
		margin-right: 0.5rem;
		
	}
	.content>.vip{
		width: 100%;
		height: 3rem;
		overflow: hidden;
		/* margin-bottom: 1rem; */
		/* margin-top: 1rem; */
		margin-top:-0.2rem;
	}
	.content>.vip>img{
		width: 100%;
	}
	.content>div:last-child>div:first-child{
		height:3rem;
		overflow-x: scroll;
	}
	/* .content>div:last-child>div:first-child>div{
		height: 100%;
	} */
	.content>div:last-child>div:first-child>div>h3{
		float: left;
		margin-left:2rem;
		font-size: 1.4rem;
		line-height: 2.9rem;
		width: 5rem;
		text-align: center;
	}
	.content>div:last-child .list{
		width: 100%;
	}
	.content>div:last-child .list>li{
		width: 100%;
		height: 4.5rem;
		padding: 1.2rem 0 0.5rem 0;
		list-style: none;
		border-bottom: 1px solid #e5e5e5;
	}
	.content>div:last-child .list>li:first-child{
		padding-top:1.5rem;
	}
	.content>div:last-child .list>li>div{
		width: 23%;
		height: 100%;
		font-size:1rem;
	}
	.content>div:last-child .list>li>div p{
		text-align: center;
		line-height: 2rem;
	}
	.content>div:last-child .list>li>div p:last-child{
		color: #888;
	}
	.content>div:last-child .list>li>div:nth-child(1),.content>div:last-child .list>li>div:nth-child(2){
		float: left;
	}
	.content>div:last-child .list>li>div:nth-child(2){
		font-size:0.9rem;
		margin-left:1.2rem;
	}
	.content>div:last-child .list>li>div:nth-child(2)>p:first-child{
		font-size:1.2rem;
	}
	.content>div:last-child .list>li>div:nth-child(3),.content>div:last-child .list>li>div:nth-child(4){
		float: right;
	}
	.content>div:last-child .list>li>div:nth-child(1)>p:first-child{
		font-size: 1.5rem;
	}
	.content>div:last-child .list>li>div:nth-child(4)>p:first-child{
		font-size: 1.5rem;
		color: #c63b2d;
	}
	.content>div:last-child .list>li>div:nth-child(4)>p:last-child{
		text-decoration:line-through;
	}
	.content>div:last-child .list>li>div:nth-child(3){
		position: relative;
	}
	.content>div:last-child .list>li>div:nth-child(3)>button{
		position: absolute;
		top:0.6rem;
		left: 1.4rem;
		width: 4.1667rem;
		height: 2.083rem;
		line-height: 2.083rem;
		text-align: center;
		font-size:1rem;
		border-radius: 1.25rem;
		letter-spacing: 0.1667rem;
		background: #c63b2d;
		color: white;
		font-family: "Arial";
	}
</style>

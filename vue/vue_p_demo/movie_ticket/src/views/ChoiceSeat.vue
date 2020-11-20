<template>
	<div class="content" :style="{height:maxHeight+'rem'}">
		<div>
			<button class="iconfont icon-arrowLeft" @click="back"></button>
			<h3>影院</h3>
		</div>
		<div class="msg">
			<div>
				<p></p>
				<p></p>
			</div>
			<div>
				<p>{{cname}}</p>
				<p>{{date}}</p>
				<p>{{movieMsg.lanType}} | {{$store.state.orders.movies.price}}元</p>
			</div>
			<div>
				<p></p>
				<p></p>
			</div>
		</div>
		<div class="seatwindow">
			<div class="bang"><p>{{roomName}}</p></div>
			<div><span class="iconfont icon-shafa" style="color: white"></span>
			可选<span class="iconfont icon-shafa" style="color: #999"></span>
			已售<span class="iconfont icon-shafa" style="color: #DF5C4D;"></span>
			已选<span class="iconfont icon-shafa" style="color: orange"></span>
			线上专享</div>
			<div class="viewport" ref="viewport">
				<!-- 最大购买数量弹框 -->
				<div class="over" ref="over"><div>一次最多购买6张</div></div>
				<!-- 未选票时的提示框 -->
				<div class="isnull" ref="nullseat"><div>请选择座位</div></div>
				<div class="room" @click="selectSeat" :style="changeRoom">
					<div v-for="(item,index) in roomSeat" :key="index">
						<span v-for="(seat_item,i) in item" :key="i">
							<!-- 将状态存在data-code中 -->
							<i v-if="seat_item!=-1"  
							class="iconfont icon-shafa" 
							:data-code="seat_item" 
							:data-x="index"
							:data-y="i"
							:data-select='1'
							:data-id='0'
							:class="{xianshang:seat_item==2,yishouchu:seat_item==1}"></i>
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class="showseat">
			<div v-for="(item,index) in showSeats" :key="index"><p>{{item.x}}排{{item.y}}座<i @click="deleteSelect(item.id,$event)">×</i></p></div>
		</div>
		<div>
			<div class="prices">
				<p>{{price*choiceSeat.length}}元</p>
				<!-- 前面设置电影id的同时设置电影名，或者在这里发ajax获取到，然后设置到store中 -->
				<p>{{movieMsg.mName}}</p>
			</div>
			<div class="next">
				<!-- 点击下一步，将订单的所有信息存到store中，然后跳到商品页  -->
				<button @click="nextSteap" >下一步</button>
			</div>
		</div>
	</div>
</template>

<script>
	//引入影院的影厅信息
	import moveHall from '@/json/movehall.json'
	// 此房间已售的订单，后期是通过ajax请求过来的
	
	export default{
		
		data(){
			return {
				maxHeight:window.innerHeight/12,
				//触发移动的初始位置
				sport:{
					x:0,
					y:0
				},
				//room的放大缩小样式
				changeRoom:{
					transform:`scale(${1},${1})`,
					left: '-3.125rem',
					top:'-3.2rem',
				},
				beishu:1,
				roomName:null,
				roomSeat:null,
				// showSeat:null,
				date:null,
				time:null,
				price:null,
				roomid:null,
				choiceSeat:[],
				showSeats:[],
				//电影信息
				movieMsg:{},
				//影院名
				cname:''
				
				
			}
		},
		created(){
			//获取路由参数中的电影信息
			this.movieMsg=this.$route.params.movieMsg;
			this.cname=this.$route.params.cname
			// console.log(this.movieMsg);
			// console.log(this.$route.params.cname)
			//注意，若不是从购票按钮进来，则拿不到这些信息
			// console.log(this.$store);
			this.date=this.$store.getters.getDate;
			this.time=this.$store.getters.getTime;
			this.price=this.$store.getters.getPrice;
			this.roomid=this.$store.getters.getRoomId;
			this.roomName=moveHall[this.roomid].name;
			let arr = moveHall[this.roomid].position;
			let seatArr=[];
			//二维数组克隆
			for(let i = 0;i<arr.length;i++){
				let arr1=[];
				for(let j = 0;j<arr[i].length;j++){
				arr1[j]=arr[i][j];
				}
				seatArr[i]=arr1;
			}
			
			//需要发送ajax获取对应的订单信息
			let params={
				// uid:this.$store.state.user.uid,
				mid:this.$store.getters.getMid,
				cid:this.$store.state.cityAndCinema.cid,
				date:this.date,
				time:this.time,
				price:this.price,
				roomid:this.roomid
			}
			// console.log(params);
			this.axios.get("order/getOrder",{params})
			.then((result)=>{
				// console.log(result.data)
				if(result.data.length>0){
					let selectedArr=[];
					for(let i=0;i<result.data.length;i++){
						selectedArr=selectedArr.concat(JSON.parse(result.data[i].choiceSeat))
						// console.log(JSON.parse(result.data[i].choiceSeat))
					};
					for(let i =0;i<selectedArr.length;i++){
						let x = selectedArr[i].x;
						let y = selectedArr[i].y;
						for(let j = 0;j<seatArr.length;j++){
							if(j==x){
								for(let k = 0;k<seatArr[j].length;k++){
									if(k==y){
										seatArr[j][k]=1;
										break;
									}
									
								}
								break;
							}
						}
					}
					this.roomSeat=seatArr;
					// console.log(this.roomSeat)
				}else{
					this.roomSeat=seatArr;
					// console.log(this.roomSeat)
				}
			})
			.catch((err)=>{
				throw err;
			})
			
			//将所有订单中的座位信息拼接起来
			//需要在请求数据回来之后再执行 
			// let selectedArr = []
			// for(let i = 0;i<orders.length;i++){
			// 	selectedArr=selectedArr.concat(orders[i].seat);
			// }
			// //筛选出可选座位
			// for(let i =0;i<selectedArr.length;i++){
			// 	let x = selectedArr[i].x;
			// 	let y = selectedArr[i].y;
			// 	for(let j = 0;j<seatArr.length;j++){
			// 		if(j==x){
			// 			for(let k = 0;k<seatArr[j].length;k++){
			// 				if(k==y){
			// 					seatArr[j][k]=1;
			// 					break;
			// 				}
							
			// 			}
			// 			break;
			// 		}
			// 	}
			// }
			// this.roomSeat=seatArr;
			
		},
		mounted(){
			this.$refs.viewport.addEventListener('mousewheel',this.blowRoom,false);
			this.$refs.viewport.addEventListener('touchmove',this.moveRoom,false);
			this.$refs.viewport.addEventListener('touchstart',this.getCoord,false);
		},
		methods: {
			//鼠标按下时获取坐标
			getCoord(e){
				this.sport.x=e.touches[0].clientX;
				this.sport.y=e.touches[0].clientY;
				// console.log(e.touches[0].clientX);
				// console.log(e.touches[0].clientY);
			},
			//移动room
			moveRoom(e){
				//这里应该先判断room的放大倍数，若room能显示完整，则不能拖动
				if(this.beishu>0.8){
					let left0 = parseFloat(this.changeRoom.left);
					let top0 = parseFloat(this.changeRoom.top);
					let x0 = this.sport.x;
					let y0 = this.sport.y;
					let x = e.touches[0].clientX;
					let y = e.touches[0].clientY;
					let left = left0+(x-x0)/600;
					let top = top0+(y-y0)/600;
					
					if((y-y0)>0){
						if(top0<10){
							this.changeRoom.top=`${top}rem`;
						}else{
							this.changeRoom.top=top0;
						}
						
					}else{
						if(top0>-10){
							this.changeRoom.top=`${top}rem`;
						}else{
							this.changeRoom.top=top0;
						}
					};
					if((x-x0)>0){
						if(left0<18){
							this.changeRoom.left=`${left}rem`;
						}else{
							this.changeRoom.left=left0;
						}
						
					}else{
						if(left0>-18){
							this.changeRoom.left=`${left}rem`;
						}else{
							this.changeRoom.left=left0;
						}
					}
				}
				
				
			},
			//座位图放大缩小
			blowRoom(e){
				
				if(e.deltaY<0){
					//放大(向下滚)
					if(this.beishu>2){
						return;
					}else{
						this.beishu+=0.1;
						this.changeRoom.transform=`scale(${this.beishu},${this.beishu})`;
					}
					
				}else{
					//缩小
					if(this.beishu<0.6){
						return;
					}else{
						this.beishu-=0.1;
						this.changeRoom.transform=`scale(${this.beishu},${this.beishu})`;
					}
					
				}
			},
			//返回
			back() {
				this.$router.back(-1);
			},
			//点击选座，需要一个数组来记录选中的座位，最多不超过6个
			selectSeat(e){
				//房间位置信息
				let seatArr=moveHall[this.roomid].position;
				//先判断是否超过6张票
				if(this.choiceSeat.length>=6){
					if(e.target.localName=='i'
					&&e.target.getAttribute("data-code")!=1
					&&e.target.getAttribute("data-select")==0
					&&e.target.getAttribute("data-id")!=0
					&&e.target.getAttribute("data-id")){
						if(e.target.localName=='i'){
							for(let i = 0;i<this.showSeats.length;i++){
								if(this.showSeats[i].id==e.target.dataset.id){
									this.showSeats.splice(i,1);
									break;
								}
							}
							for(let i = 0;i<this.choiceSeat.length;i++){
								if(this.choiceSeat[i].id==e.target.dataset.id){
									//根据状态码变回应有的颜色
									if(this.choiceSeat[i].code==2){
										e.target.style.color='orange';
									}else{
										e.target.style.color='white';
									}
									// e.target.style.color=this.choiceSeat[i].color;
									// console.log(this.choiceSeat[i].color);
									this.choiceSeat.splice(i,1);
									break;
								}
							}
							//将座位设置为未选中状态，让其可选
							e.target.dataset.id='0';
							e.target.dataset.select='1';
							
						}
					}else{
						this.$refs.over.style.display="block";
						setTimeout(()=>{this.$refs.over.style.display="none";},2500)
					}
					
					
				}else{
				
					if(e.target.localName=='i'
					&&e.target.getAttribute("data-code")!=1
					&&e.target.getAttribute("data-select")==1
					&&e.target.getAttribute("data-id")==0){
						// console.log(e.target.getAttribute("data-select"))
						//坐标
						let seat = {};
						//展示给用户的坐标
						let showseat = {};
						//存入当前选中的座位的随机id
						let setId = Math.random();
						seat.id=setId;
						seat.x=parseInt(e.target.getAttribute("data-x"));
						seat.y=parseInt(e.target.getAttribute("data-y"));
						//记录座位的状态码，根据状态码去判断应有的初始颜色
						//若要通过元素.style的方式获取元素的某个样式，需要将初始样式定义在内联样式中，否则获取不到
						// console.log(e.target);
						seat.code=e.target.getAttribute("data-code")
						//计算出应该展示给用户的座位坐标
						let x1=0;
						let y1=0;
						for(let i = 0;i<seatArr.length;i++){
							x1++;
							if(i==seat.x){
								for(let k = 0;k<seatArr[i].length;k++){
									// console.log("hahaha")
									if(seatArr[i][k]!=-1){
										y1++
									}
									
									if(k==seat.y){
										// console.log("lalala")
										break;
									}
								}
								break;
							}
							
						}
						showseat.id=setId;
						showseat.x=x1;
						showseat.y=y1;
						// console.log(seat);
						// console.log(showseat); 
						//将seat和showseat添加到数组中；
						this.choiceSeat.push(seat);
						this.showSeats.push(showseat);
						//将按钮设为选中状态，让其不能被再次选择
						e.target.dataset.id=setId;
						e.target.dataset.select='0';
						e.target.style.color='#DF5C4D';
						//给点击的元素添加ref属性，以便点击x号时删除
						e.target.setAttribute('ref',setId);
						//究极操作、将元素动态添加到$refs对象中
						this.$refs[setId]=e.target;
						// console.log(e.target);
						// console.log(e.target.getAttribute('ref'));
					}else{
						if(e.target.localName=='i'){
							for(let i = 0;i<this.showSeats.length;i++){
								if(this.showSeats[i].id==e.target.dataset.id){
									this.showSeats.splice(i,1);
									break;
								}
							}
							for(let i = 0;i<this.choiceSeat.length;i++){
								if(this.choiceSeat[i].id==e.target.dataset.id){
									//根据状态码变回应有的颜色
									if(this.choiceSeat[i].code==2){
										e.target.style.color='orange';
									}else{
										e.target.style.color='white';
									}
									// e.target.style.color=this.choiceSeat[i].color;
									// console.log(this.choiceSeat[i].color);
									this.choiceSeat.splice(i,1);
									break;
								}
							}
							//将座位设置为未选中状态，让其可选
							e.target.dataset.id='0';
							e.target.dataset.select='1';
							
						}
						
						
					}
				}
			},
			deleteSelect(id,e){
				// console.log(id);
				//清除两个数组中对应的座位信息
				for(let i = 0;i<this.showSeats.length;i++){
					if(this.showSeats[i].id==id){
						this.showSeats.splice(i,1);
						break;
					}
				}
				for(let i = 0;i<this.choiceSeat.length;i++){
					if(this.choiceSeat[i].id==id){
						// console.log(this.choiceSeat[i])
						//将对应元素的颜色设为未选中时的初始颜色
						if(this.choiceSeat[i].code==2){
							this.$refs[id].style.color='orange';
						}else{
							this.$refs[id].style.color='white';
						}
						this.choiceSeat.splice(i,1);
						break;
					}
				}
				//因为上面绑定ref属性时页面虚拟dom树已经创建完成，所以在$refs对象中找不到那个元素
				// console.log(this.$refs);
				//处理dom中对应的元素，让其变为可选状态
				this.$refs[id].dataset.id='0';
				this.$refs[id].dataset.select='1';
				// this.$refs[id].style.color='white';
				
			},
			nextSteap(){
				if(this.choiceSeat.length==0){
					// console.log(111)
					this.$refs.nullseat.style.display="block";
					setTimeout(()=>{this.$refs.nullseat.style.display="none";},1000)
				}else{
						
					let params = {};
					params = this.$store.getters.getMovieMessage;
					params.choiceSeat = this.choiceSeat;
					params.showSeat = this.showSeats;
					// console.log(params);
					this.$store.commit("changeBarId",2)
					this.$router.push({
						name:'product',
						params
					});
					
				}
			}
		},
	}
</script>

<style scoped="scoped">
	
	/* 不能加important */
	.content>.seatwindow>.viewport>.room>div>span>i.xianshang{
		color: orange;
	}
	.yishouchu{
		color: #999 !important;
	}
	.content>div:first-child{
		width: 100%;
		overflow: hidden;
		margin-bottom: 1rem;
		background: #c63b2d;
	}
	.content>div:first-child>button{
		float: left;
		font-size: 2.5rem;
		background: #c63b2d;
		border: none;
		color: white;
	}
	.content>div:first-child>h3{
		float: left;
		font-size: 1.5rem;
		line-height: 3.5rem;
		margin-left: 0.5rem;
		color: white;
		width: 25rem;
		text-align: center;
	}
	.content>div:nth-child(2){
		width: 100%;
		height: 6rem;
		display: flex;
		justify-content: space-between;
	}
	.content>div:nth-child(2)>div{
		 height: 100%;
	}
	.content>div:nth-child(2)>div p{
		text-align: center;
		color: #888;
		margin-bottom: 0.6rem;
	}
	
	.content>div:nth-child(2)>div:nth-child(1),.content>div:nth-child(2)>div:nth-child(3){
		width: 15%;
		padding-top: 1rem;
	}
	.content>div:nth-child(2)>div:nth-child(2){
		width: 50%;
	}
	.content>div:nth-child(2)>div:nth-child(2)>p:first-child{
		font-size: 1.333rem;
		color: #333;
	}
	.content>div:nth-child(2)>div>p:first-child{
		font-size: 1.333rem;
		color: #000;
		margin-bottom: 0.6rem;
	}
	.content>div:nth-child(2)>div>p:nth-child(2),.content>div:nth-child(2)>div>p:nth-child(3){
		font-size: 1.1rem;
		color: #888;
	}
	.content>.seatwindow{
		width: 100%;
		height: 50%;
		background: #eee;
		position: relative;
		box-sizing: border-box;
		padding-top: 7rem;
	}
	.content>.seatwindow>div:nth-child(2){
		width: 100%;
		position: absolute;
		left: 0;
		top: 4rem;
		text-align: center;
		font-size:.8rem;
	}
	.content>.seatwindow>div:nth-child(2)>span{
		margin-left: 2rem;
	}
	.content>.seatwindow>div:nth-child(2)>span:first-child{
		margin: 0;
	}
	.content>.seatwindow>.bang{
		height: 2rem;
		background: #9999999e;
		width: 55%;
		border-radius: 0 0 2rem 2rem;
		box-sizing: border-box;
		/* padding-top: 2rem; */
		position: absolute;
		left: 8rem;
		top: 0rem;
	}
	.content>.seatwindow>.bang>p{
		line-height: 2rem;
		text-align: center;
		font-size:.8rem;
	}
	.content>.seatwindow>.viewport{
		width: 100%;
		height: 80%;
		background: #eee;
		/* overflow: scroll; */
		position: relative;
		overflow: hidden;
		/* 试一下通过滚轮事件来放大缩小元素 */
		
	}
	.content>.seatwindow>.viewport>.over,.content>.seatwindow>.viewport>.isnull{
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top:0;
		z-index: 50;
		display: none;
	}
	.content>.seatwindow>.viewport>.over>div,.content>.seatwindow>.viewport>.isnull>div{
		position: absolute;
		left:10rem;
		top:7rem;
		z-index:999;
		width: 11rem;
		height: 4rem;
		line-height: 4rem;
		text-align: center;
		font-size: 1.25rem;
		color: white;
		background: rgba(0,0,0,0.5);
		border-radius: 1rem;
	}
	.content>.seatwindow>.viewport>.room{
		height: 120%;
		width: 120%;
		padding-top: 2rem;
		/* transform: scale(0.5,0.5); */
		position: absolute;
		
	}
	.content>.seatwindow>.viewport>.room>div{
		margin-bottom: 0.5rem;
		margin-top: 0.5rem;
		width: 100%;
		text-align: center;
	}
	.content>.seatwindow>.viewport>.room>div>span{
		margin-left: 0.2rem;
		margin-right: 0.2rem;
		
		display: inline-block;
		height: 1.25rem;
		width: 1.25rem;
	}
	.content>.seatwindow>.viewport>.room>div>span>i{
		margin: 0;
		padding: 0;
		display: inline-block;
		font-size: 1.25rem;
		width: 100%;
		height: 100%;
		color: #ffffff;
	}
	
	.content>.showseat{
		width: 100%;
		/* padding-bottom:50%; */
		padding-left: 1rem;
		padding-right: 1rem;
		margin-top: 1rem;
	}
	.content>.showseat>div{
		width: 6.5rem;
		height: 2rem;
		font-size:1rem;
		line-height: 2rem;
		position: relative;
		border: 1px solid #888;
		margin-bottom: 1rem;
		margin-right: 1rem;
		float: left;
		color:#888;
		
	}
	.content>.showseat>div>p{
		padding-left: 0.4rem;
	}
	.content>.showseat>div i{
		display: inline-block;
		font-size: 1.666rem;
		margin-left: 1rem;
		position: absolute;
		right: 0.2rem;
		top: 0rem;
	}
	
	/* 底部 */
	.content>div:last-child{
		width: 100%;
		height: 4rem;
		border: 0.1rem solid #c63b2d;
		position: fixed;
		bottom: 0;
		display: flex;
	}
	.content>div:last-child>div{
		width: 50%;
		height: 100%;
	}
	.content>div:last-child>.prices{
		background-color:#fff;
	}
	.content>div:last-child>.prices>p{
		color: #c63b2d;
		font-size: 1.25rem;
		text-align: center;
		margin-top: 0.5rem;
	}
	.content>div:last-child>.next{
		background: #c63b2d;
	}
	.content>div:last-child>.next>button{
		background: none;
		color: white;
		height: 100%;
		width: 100%;
		font-size: 1.4rem;
		font-family: "Arial"
	}
	
</style>

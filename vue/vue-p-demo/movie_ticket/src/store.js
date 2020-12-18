import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //底部导航面板对应的Id
    barId:1,
    // //电影Id
    mid:1,
    //城市Id，默认杭州
    cityAndCinema:{
      cityId:18,
      city:"杭州",
      cid:1,
      cName:"杭州滨江天街"
    },
    //影院Id
    cid:1,
		//用户,默认为空
		user:{
			uid:'',
			uname:""
		},
		//小吃信息
    productionItem:[],
		
    // 订单对象，自己根据需要加属性
    orders:{
      uid:'',
      // 小吃信息
      // foods:{
      //   // 小吃Id
      //   fid:[],
      //   // Id对应的数量
      //   fno:[]
      // },
      // 电影票信息
      movies:{
				//这里的信息都是记录用户在购票页面中选择的信息
				//点击购票时需要设置 mtime 、roomid、price
				
				// mname:'',
				//场次日期
				mdate:'',
				//场次时间
				mtime:'',
				//影厅编号
				
				roomid:0,
				//时长
				duration:0,
				//单价
				price:0,
				//总价
				// prices:0,
				//数量
				number:0,
				
				//座位信息
        seat:[],
				//呈现给用户的座位信息
				useat:[]
      }
		},
		// 缓存组件数组
		cacheComponent:["cinemaDetail","home","product","OrderDetail"]

  },
  mutations: {
		// 动态改变缓存组件数组
		changeCacheComponent(state,cacheComponent){
			state.cacheComponent=cacheComponent.concat("cinemaDetail","home","product","OrderDetail");
		},
		// foods 
		update(state,item){
			state.productionItem.push(item)
		},
		changeItem(state,fid){
			for(var i=0;i<state.productionItem.length;i++){
				if(state.productionItem[i].fid==fid){
					state.productionItem[i].count++;
				}
			}
		},
		decCount(state,fid){
			for(var i=0;i<state.productionItem.length;i++){
				if(state.productionItem[i].fid==fid){
					state.productionItem[i].count--;
				}
			}
		},
		delete(state,fid){
			state.productionItem=state.productionItem.filter((ele)=>{
				return ele.fid!=fid;
			})
		},
		changeBarId(state,id){
			state.barId=id
		},
    // changeMid(state,id){
    //   state.mid=id
    // },
    changeCityAndCinema(state,obj){
      state.cityAndCinema.cityId=obj.cityId
      state.cityAndCinema.city=obj.city
      state.cityAndCinema.cid=obj.cid
      state.cityAndCinema.cName=obj.cName
    },
    changeCid(state,id){
      state.cid=id
    },
    changeUser(state,user){
      state.orders.uid=user.uid;
			state.user.uid=user.uid;
			state.user.uname=user.uname;
    },
    addOrder(state,order){
      state.orders=order
    },
    //改变电影id
		changeMid(state,id){
			state.mid=id;
		},
		// changeName(state,name){
		// 	state.orders.movies.mname=name;
		// },
		//改变场次日期
		changeDate(state,str){
			state.orders.movies.mdate=str;
		},
		//改变场次时间
		changeTime(state,str){
			state.orders.movies.mtime=str;
		},
		//改变房间号
		changeRoomId(state,roomid){
			state.orders.movies.roomid=roomid;
		},
		//改变电影时长
		// changeDuration(state,number){
		// 	state.orders.movies.duration=number;
		// },
		//改变单价
		changePrice(state,price){
			state.orders.movies.price=price;
		},
		//改变票数
		changeNumber(state,number){
			state.orders.movies.number=number;
		},
		//添加座位信息，传过来的座位信息为数组，数组中是每个位置的坐标，坐标是一个对象
		changeSeat(state,arr){
			state.orders.movies.seat=arr;
		},
		//改变显示给用户的座位信息
		changeUseat(state,arr){
			state.orders.movies.useat=arr;
		}
  },
  actions: {
		getCount(context,item){
      context.commit("update",item)
    },
    getChange(context,fid){
      context.commit("changeItem",fid)
    },
    getdecCount(context,fid){
      context.commit("decCount",fid)
    },
    getDelete(context,fid){
      context.commit("delete",fid)
    }
  },
  getters:{
		getProductionItem(state){
			return state.productionItem
		},
		// getUid(state){
			
		// },
		getMid(state){
			return state.mid;
		},
		
		getDate(state){
			return state.orders.movies.mdate;
		},
		getTime(state){
			return state.orders.movies.mtime;
		},
		getPrice(state){
			return state.orders.movies.price;
		},
		getRoomId(state){
			return state.orders.movies.roomid;
		},
		// getRoomId(state){
		// 	
		// },
		// getMdate(state){
		// 	
		// },
		// getMtime(state){
		// 	
		// }
		//获取电影票信息
		getMovieMessage(state){
			let params = {};
			params.cid = state.cityAndCinema.cid;
			params.mid = state.mid;
			params.date = state.orders.movies.mdate;
			params.time = state.orders.movies.mtime;
			params.price = state.orders.movies.price;
			params.roomid = state.orders.movies.roomid;
			return params;
		}
	}
})

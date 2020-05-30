<template>
    <div class="product">
        <my-loading :loadStatus="loadStatus"></my-loading>
        <div class="middle">
        <!-- 影院和播放类型展示middle行 -->
            <div class="cityChoose">
                <choose-city style="font-size:1.333rem"></choose-city>
            </div>
            <div class="playType">
                <span>美味小食</span>
            </div>
        </div>
        <!-- 侧面小食导航栏 -->
        <ul class="left_nav">
            <li class="bgcolor" @click="changeTab(1)" data-tid="1">
                <i class="iconfont icon-baomihua"></i>
                <!-- <img src="/img/pimg/pop.png" alt=""   data-tid="1"> -->
                <span>爆米花类</span>
            </li>
             <li @click="changeTab(2)" data-tid="2">
                <i class="iconfont icon-yinliao2"></i> 
                <!-- <img src="/img/pimg/water.png" alt="" data-tid="2"> -->
                <span>现调饮料</span>
            </li>
             <li @click="changeTab(3)"  data-tid="3">
                <i class="iconfont icon-yinliao1"></i> 
                <!-- <img src="/img/pimg/buttle.png" alt="" @click="changeTab(3)"  data-tid="3"> -->
                <span>瓶装饮料</span>
            </li>
             <li @click="changeTab(4)"  data-tid="4">
                <i class="iconfont icon-xiaochikuaican"></i> 
                <!-- <img src="/img/pimg/eat.png" alt="" @click="changeTab(4)"  data-tid="4"> -->
                <span>热销小食</span>
            </li>
        </ul>
        <!-- 小食购买组件 -->
      <div class="right_details">
            <productList @getTotal="setTotal" :arr="arr" :count="count" :changeTab="changeTab" :divNone="divNone"></productList>
      </div>
      <!-- 价格总计组件 -->
      <foot :Sum="Sum" :class="divNone" class="slot">
          <!-- <p slot="slot1" class="slot11">具名插槽1</p>
          <p slot="slot2" class="slot22">具名插槽2</p> -->
      </foot>
      <bottom-bar></bottom-bar>
</div>
</template>
<script>
    import chooseCity from "@/components/city/chooseCity.vue"
    // import msgjson from "../../public/json/productList.json"
    import productList from "../components/productList.vue"
    import foot from "../components/foot.vue"
    import bottomBar from "../components/bottomBar.vue"
    import { Promise } from 'q';
    export default {
        // name:"productList",
        name:"product",
        data(){
            return{
                params:{},
                dataList:[],
                divNone:{
                    // none:true
                    none:false
                },
                loadStatus:true,
                arr:[],
                tab:[1,2,3,4],
                Sum:0,
                getcount:[],
                // 初始化小食信息数组 方便计算
                count:[
                        {
                            fid:1,
                            fdata:[]
                        },
                        {
                            fid:2,
                            fdata:[]
                        },
                        {
                            fid:3,
                            fdata:[]
                        },
                        {
                            fid:4,
                            fdata:[]
                        }
                    ]
            }
        },
        created(){
        // this.$route.params;
        },
        mounted(){
            this.$store.commit("changeBarId",2)
            this.params=this.$route.params
            new Promise(
                    (resolve,reject)=>{
                                this.axios.get("product/").then(res=>{
                                this.dataList=res.data.res
                                resolve(this.changeTab) 
                                this.loadStatus=false
                            })  
                        } 
                    ).then(change=>{change(1)})
        },
        activated(){  //如果缓存成功就执行
            // console.log("alive")
        },
        // beforeRouteLeave(to,from,next){
        //     if(to.name=="pay"){
        //         from.meta.keepAlive=true;
        //         console.log(from)
            
        //     }
        //     next();
        // },
        methods:{
            // 根据小食购买导航栏传参来过滤想要的数据
            changeTab(m){
                // 改变导航栏背景样式
                var li=document.getElementsByTagName("li")
                // var tid=e.target.dataset.tid;
                for(var i=0;i<4;i++){
                    if(i!==m-1){
                        li[i].className="";
                    }else{
                        li[i].className="bgcolor";
                    }
                }
                // 过滤想要的数据
                this.arr=this.dataList.filter((ele)=>{
                    return ele.tid==m;
                })
            },
            // 子组件向父组件传值
            // total(data){
            //     this.Sum=data;
            //     console.log(this.Sum)
            // }
            setTotal(n){
                this.Sum=n;
            }
        },
        components:{
            "productList":productList,
             "foot":foot,
             bottomBar,
             chooseCity
         },
        beforeRouteLeave(to,from,next){
            if(to.name=="pay"&&localStorage.getItem('uid')===null){
                next({name:'login',params:this.$route.params})
            }
            next()       
        }
    }
</script>
<style scoped>
    .middle{
        font-size:1.1667rem;
        padding:.6667rem .6667rem .1667rem;
        background:#f1f1f1;
        position:fixed;
        right:0;
        left:0;
        top:0;
        z-index:99
    }
    .middle:after{
        content:"";
        display:block;
        clear:both;
    }
    .cityChoose{
        float: left;
        height: 3rem;
        line-height: 3rem;
    }
    .playType{
        float: right;
        margin-right: 3%;
    }
    .playType>span{
        border-bottom:0.02rem solid #C63B2D;
        color:#C63B2D;
        display:inline-block;
        margin-left: 2.5rem;
        padding: .5833rem .25rem;
        height: 1.6667rem;
        line-height: 1.6667rem;
        text-align: right;
        font-size:1.3333rem;
        letter-spacing: 0.045rem
    }  
    *{
        margin:0rem;
        padding:0rem;
        font-size:1rem;
        font-family:"-apple-system, BlinkMacSystemFont, 'Microsoft YaHei', sans-serif";
    }
    .right_details{
        position:relative;
        margin-left:6.6666rem;  
        margin-bottom:11rem;
        margin-top:4.8rem;
    }
    .left_nav{
        position:fixed;
        left:0rem;
        top:0rem;
        width:6rem;
        background:#f5f5f5;
        height:100%;
        margin-top:3.8rem;
    }
    .left_nav>li:first-child{
       margin-top:6rem;
    }
    .left_nav>li{
        display:flex;
        flex-direction:column;
        padding:0.4rem;
        height:6rem;
        justify-content: center;
        text-align:center;
    }
    .left_nav>li>i{
        font-size:2.3rem;
        color:#C63B2D;
    }
    .left_nav>li>span{
        padding-top:0.8333rem;
        font-size:1.1rem;
        color:#aaa;
    }
    .bgcolor{
        background:#fff;
    }
    .none{
        display:none;
    }
</style>



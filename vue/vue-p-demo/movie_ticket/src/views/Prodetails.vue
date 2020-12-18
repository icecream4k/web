<template>
    <div>
        <my-header>电影详情</my-header>
        <my-loading :loadStatus="loadStatus"></my-loading>
        <div class="background" ref="background"></div>
        <div class="details">
            <!-- <img :src="filmDetails.posterPic" alt=""> -->
            <table></table>
            <i class="iconfont icon-guanbi1" @click="close" :class="vNone"></i>
            <video :src="movieMsg.video" controls :class="vNone" ref="video">
            </video>
            <div class="wantSee" v-show="movieMsg.hot==0" :class="{seeClass:wantsee}" @click='handleSee'>
                <i class="iconfont icon-xinaixin-" :class="{seeClassi:wantsee}"></i>
                想看
            </div>
            <div class="poster">
                <i class="iconfont icon-bofang" @click="filmPlay"></i>
                <div class="image">
                    <img :src="baseUrl+movieMsg.pic" alt="">
                </div>
                
                <div>
                    <span v-text="movieMsg.mName"></span>
                    <span v-text="`${movieMsg.duration}分钟`"></span>
                    <span v-text="movieMsg.mType"></span>
                    <!-- <span v-text="movieMsg.score"></span> -->
                </div>
            </div>
            <div class="descript">
                <!-- 评分 -->
                <div class="score">
                    <span v-show="movieMsg.hot==1"><my-score :score="Number(movieMsg.score)"></my-score> &nbsp;{{movieMsg.score+'分'}}
                    </span>
                    <span v-show="movieMsg.hot==0">
                        <i class="iconfont icon-love-b"></i>
                        {{num}}人 想看
                    </span>
                    <span v-text="movieMsg.showTime"></span>
                </div>
                <!-- 影片剧情照 -->
                <h4><span>|</span>影片剧情照</h4>
                <div class="imgCon">
                    <div class="imageList" :style="imgListStyle">
                        <div class="imgitem" v-for="(item,i) of imgList" :key="i" :style="`background-image:url(${baseUrl}${item})`"></div>
                    </div>
                </div>    
                <h4><span>|</span>剧情介绍</h4>
                <div class="actor">
                    <div><span>导演:</span><span>{{movieMsg.director}}</span></div>
                    <div><span>主演:</span><span>{{movieMsg.actor}}</span></div>
                    <div>
                        <span>剧情:</span>
                        <span  class="text">{{movieMsg.story}}</span>
                    </div>
                </div>
            </div>
            <div @click="toBuy">
                <span class="buyTiket">购票</span>
            </div>
        </div>
    </div>
    
</template>
<script>
    import {baseUrl} from "../common.js"
    import myScore from "../components/score.vue"

    export default {
        name:"prodetails",
        components:{
            myScore
        },
        data(){
            return{
                vNone:{
                    none:true
                },
                imgList:['blank.jpg'],
                movieMsg:{
                    pic:"blank.jpg"
                    // video:"movie_img/aichong/201906111801521522906.mp4"
                },
                baseUrl,
                // 开关变量
                canDown:false,
                len:0,
                loadStatus:true,
                num:0,
                wantsee:false,
                want:null,
                mid:this.$route.query.mid
            }


        },
        created(){
            //   var mid=this.$route.query.mid;
              var uid=localStorage.getItem("uid");
              var params={mid:this.mid,uid}
            //   发送axios请求 获得详情页的数据
            // new一个promise实例 等待axios请求成功后再dom操作 放置背景图片
              new Promise((resolve)=>{
                  this.axios.get("movie/detailAndWant",{params}).then(res=>{
                    // console.log(res.data)
                    this.movieMsg=res.data.movie[0];
                    this.imgList=res.data.movie[0].mPhoto.split("&");
                    this.want=res.data.want;
                    // // 表示用户之前有想看过这个电影
                    // if(this.want.indexOf(mid)!=-1){
                    //     this.wantsee=true;
                    // }
                    // console.log(this.imgList)
                    this.len=this.imgList.length
                    this.num=this.movieMsg.watcher
                    this.loadStatus=false
                    resolve(this.downBackgroundImage)
                })
              }).then(res=>{res()})
                
            },
        mounted(){
            // this.wantSeeStatus()
            // var details=document.getElementById("details");
            },
        computed:{
            imgListStyle(){
                let width=this.len*10.6+'rem'
                return {width}
            }
        },
        methods:{
            downBackgroundImage(){
                 var background=this.$refs.background;
                 background.style.backgroundImage=`url(${baseUrl}${this.movieMsg.pic})`
            },
            filmPlay(e){
                e.stopDefault;
                this.vNone.none=false;
            },
            close(){
                this.$refs.video.pause();
                this.vNone.none=true;
            },
            toBuy(){
                // 跳转至购票
                let mid=this.$route.query.mid
                this.$store.commit("changeMid",mid)
                this.$router.push(`/booking`)
            },
            handleSee(){
                // mid为数值类型，转为字符串，indexOf遵循===
                let mid=this.$route.query.mid+""
                if(localStorage.getItem('uid')!==null){
                    this.wantsee=this.wantsee==false ? true: false;
                    // this.wantsee==true ? this.num++: this.num--;
                    if(this.wantsee==true){
                        this.num++;
                        if(this.want===null){
                            this.want=mid;
                        }else{
                            this.want+="+"+mid
                        }
                    }
                    if(this.wantsee==false){
                        this.num--;
                        let arr=this.want.split('+');
                        if(arr.indexOf(mid)!=-1){
                            arr.splice(arr.indexOf(mid),1)
                            if(arr.length==0){
                                this.want=null
                            }else{
                                this.want=arr.join('+')
                            } 
                        }
                    }
                }else{
                    this.$router.push('/Login')
                } 
            }      
        },
        watch:{
            want(){
                let mid=this.$route.query.mid+""
                if(this.want===null){
                    this.wantsee=false;
                }else{
                    let arr=this.want.split('+');
                    if(arr.indexOf(mid)!=-1){
                        this.wantsee=true;
                    }else{
                        this.wantsee=false;
                    }
                }
            }  
        },
        beforeDestroy(){
            let uid=localStorage.getItem("uid");
            let mid=this.mid;
            if(uid!=null&&this.movieMsg.hot==0){
                this.axios.get('movie/want',{
                    params:{
                        want:this.want,
                        uid,
                        mid,
                        watcher:this.num
                    }
                })
                .then((res)=>{
                    // console.log("更新数据库")
                    // console.log(res)
                })
            }
            
        }
    }
</script>
<style scoped>
    .background{
        position: absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        background-size:cover;
        z-index:0;
        filter:blur(10px);
    }
    .details{
        margin-top:3.6rem;
        /* height:50%; */
        /* filter:blur(5px); */
        position: relative;
    }
    .poster>div:not(.image){
        display:flex;
        flex-direction: column;
        margin-left:1.5rem;
        margin-top:0.5rem;
    }
    .poster>div span:first-child{
        font-size:1.4rem;
        padding-bottom:1.2rem;
    }
    .poster>div span{
        font-size:1rem;
        color:#fff;
        padding-bottom:1.2rem;
    }
    .poster{
      display:flex;
      position:absolute;
      top:1rem;
      left:1rem;
    }
    .poster>div>img{
        border:1px solid #fff;
        width:8.3333rem;
        /* height:12.5rem; */
    }
    .descript{
        padding:1rem;
        padding-top:0.5rem;
        display:flex;
        flex-direction:column;
        background-color: #fff;
        margin-top:8.3333rem;
        /* height:50rem; */
        border-top-left-radius:0.8333rem;
        border-top-right-radius:0.8333rem;
    }
    .score{
        display:flex;
        flex-direction:column;
    }
    .score span{
        padding-bottom:1rem;
        font-size:1rem;
        color:#535353;
        margin-left:34.3%;
        
    }
    .score span:first-child{
        font-size:1.1rem;
        color:#faaf00;
        padding-top:0.5rem;
    }
    .icon-love-b{
        font-size:1rem;
        color:#c63b2d;
    }
    h4{
        font-size:1.3rem;
        margin-bottom:1.2rem;
        margin-top:1.2rem;
    }
    h4 span{
        margin-left:-0.3rem;
        color:#c63b2d;
        font-size:1.3rem;
        font-weight: bold;
    }
    .imgCon{
        width:100%;
        overflow: auto;
    }
    .imageList{
        display:flex;
        /* justify-content:space-around; */
        /* overflow-x:scroll; */
    }
    .imgitem:first-child{
        margin-left:0;
    }
    .imgitem{
        padding:0.3rem;
        margin:0 .3rem;
        width:10rem;
        height:6rem;
        background-size:cover;
    }
    .poster>i{
        /* display:block; */
        position:absolute;
        width:3rem;
        height: 3rem;
        top:40%;
        left:16%;
        color:#ccc;
        font-size:3rem;
        font-weight: bold;
    }
    .poster>button>img{
        width:4rem;
        height:4rem;
    }
    .none{
        display:none; 
    }
    .icon-guanbi1{
        font-size:1.5rem;
        color:#fff;
        position:fixed;
        top:33%;
        right:5%;
        z-index:999;

    }
    video{
        width:100%;
        position:fixed;
        top:30%;
        left:0;
    }
    .actor{
        display:flex;
        flex-direction: column;
    }
    .actor>div{
        margin-bottom:0.7rem;
        font-size:1.2rem;
    }
    .actor>div>span.text{
        text-align:left; 
        line-height: 1.7rem;
        letter-spacing:.05rem; 
        padding-bottom:100%;
        /* margin-left:1.2rem; */
        
    }
    .actor>div>span{
        display:block;
        float:left;
    }
    .actor>div>span:nth-child(2){
        font-size:1.1rem;
        color:#888;
    }
    .actor>div:nth-child(3){
        background-color: #fff;
    }
    .actor>div>span:nth-child(1){
        width:14%;
    }
    .actor>div>span:nth-child(2){ 
        width:86%;
    }
    .actor>div>span:nth-child(1){
        font-size:1.2rem;
        color:#000;
        
    }
    .buyTiket{
        position:fixed;
        bottom:0rem;
        left:0rem;
        width:100%;
        height:3.6rem;
        line-height:3.6rem;
        text-align: center;
        color:#fff;
        background-color:#c63b2d;
        font-size:1.4rem;
    }
    .wantSee{
        position:absolute;
        top:4%;
        right:8%;
        width:6rem;
        height:2.6rem;
        text-align: center;
        line-height: 2.6rem;
        font-size:1.2rem;
        color:#fff;
        border-radius: 1.3rem;
        border:1px solid #fff;
        box-sizing: border-box;
    }
    .wantSee>i{
        font-size:1.2rem;
        color:#fff;
    }
    .seeClass{
        color:#c63b2d;
        border:1px solid #c63b2d;
    }
    .wantSee>.seeClassi{
        color:#c63b2d;
    }
</style>



<template>
    <div class="foot" :class="divNone">
            <div class="left_cart">
                <i class="iconfont icon-gouwuche"></i>
                <span>{{Sum.toFixed(2)}}元</span> 
            </div>
           <button class="right_cart" @click="jumpPay">选好了</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
           
        }
    },
    props:{
        Sum:{type:Number},
        divNone:{default:Object},
    },
    methods:{
        jumpPay(){
            if(!this.$route.params.cid){
                this.$store.commit("changeBarId",1)
                this.$router.push("/")
            }else{
                this.$router.push({
                    name:"pay",
                    params:this.$route.params
                    }   
                )
            }
        }
    }
}
</script>
<style scoped>
    .foot{
        width:100%;
        display:flex;
        /* flex-direction: column; */
        position:fixed;
        bottom:6.6666rem;
        left:0rem;
        z-index:999;
    }
      
    .left_cart{
        width:50%;
        text-align:center;
        padding: 0.4rem 0;
        border:1px solid #C63B2D;
        /* padding:0.6666rem 0; */
        background:#fff;
        /* line-height:0.6rem; */
    }
    .left_cart i{
        /* display:inline-block;  */
        color:#c63b2d;
        font-size:2.5rem;
        margin-right:0.8333rem;
    }
    .left_cart span{
        /* display:inline-block;  */
        color:#C63B2D;
        font-size:1.5rem;
        position:relative;
        top:-0.3rem;
    }
    .right_cart{
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
   
</style>



<template>
    <div class="container">
        <div class="header">
            <router-link :to="`/User`">
                <img src="../../assets/img/LeftArrow.png">
            </router-link>
            <span v-text="title"></span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: { default: "" },
  },
    data(){
        return{}
    }
}
</script>
<style scoped>
    /*1：头部部分*/
    .container>.header{
        display:flex;
        align-items:center;
        background:#fff;
        height:3.583333319rem;
    }
    .container>.header>a>img{
        margin-left:0.83rem;
        height:2.49rem;
        width:2.49rem;
    }
    .container>.header>a{
        display: flex;
        align-items: center;

    }
    .container>.header>span{
        display: flex;
        justify-content:center;
        align-items: center;
        color:#c63b2d;
        font-size: 1.66rem;
        margin-left:9.96rem;
        letter-spacing:0.166rem;

    }
</style>


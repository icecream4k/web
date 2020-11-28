<template>
    <div id="app">
        <h2>这里是App.vue组件</h2>
        

        <router-link to="/home" tag="button" replace>首页</router-link>
        <router-link to="/about" tag="button" replace>关于</router-link>
        <router-link :to="'/user/'+userId" tag="button" replace>我的</router-link>
        <!-- <router-link to="/profile" tag="button">档案</router-link> -->
        <router-link :to="{path:'/profile',query:{name:'hanlong',age:18,height:178}}" tag="button">档案</router-link>
        <!-- <button @click="userClick">用户</button> -->
        <!-- <button @click="profileClick">档案</button> -->
        <br />
        
        <router-view></router-view>
        <img :src="imgURL" alt="" class="app_img_01" />
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            userId: "zhangsan",
            imgURL: 
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606391969218&di=e8a9f2e4eff438e42d1de2a2d33cbb02&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F27%2F67%2F01300000921826141299672233506.jpg",
            
        };
    },
    methods: {
        // userClick(){
        //     this.$router.push('/user/'+this.userId)
        // },
        // profileClick(){
        //     this.$router.push({
        //         path:'/profile',
        //         query:{
        //             name:'kobe',
        //             age:18,
        //             height:1.99
        //         }
        //     })
            
        // }
    }
};
</script>

<style>
.active {
    color: #f00;
}
.app_img_01 {
    margin-top: 25px;
    width: 45%;
}
</style>

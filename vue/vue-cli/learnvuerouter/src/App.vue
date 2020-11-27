<template>
  <div id="app">
      <h2>这里是App.vue组件</h2>
      <router-view></router-view>

      <router-link to="/home" tag="button" replace>首页</router-link>
      <router-link to="/about" tag="button" replace>关于</router-link>
      <router-link v-bind:to="/user/+userid" tag="button" replace>我的</router-link><br>
      <img v-bind:src='this.imgurl' alt="" class="app_img_01">
      <!-- <button @click='homeClick'>首页</button>
      <button @click='aboutClick'>关于</button> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
      return {
          userid:'zhangsan',
          imgurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606391969218&di=e8a9f2e4eff438e42d1de2a2d33cbb02&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F27%2F67%2F01300000921826141299672233506.jpg'
      }
  },
  methods: {
    //   homeClick(){
    //       // 通过代码的方式修改路由
    //       this.$router.push('home')
    //       console.log('homeclick');
    //   },
    //   aboutClick(){
    //       this.$router.push('about')
    //       console.log('aboutclick');
    //   } 
  },
}
</script>

<style>
    .active{
        color:#f00
    }
    .app_img_01{
        margin-top: 25px;
        width: 20%;
    }
</style>

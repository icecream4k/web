<template>
  <div class="GlobalConfiguration">
    <h2>全局配置</h2>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'GlobalConfiguration',
    methods: {
      getValue() {
        // 使用全局的axios的配置和请求
        axios.defaults.baseURL = 'http://123.207.32.32:8000';
        axios.defaults.timeout = 5000;
        // axios发送并发请求
        // 用axios.all 并且给两个axios请求,在最终的.then里面进行囊括所有的请求
        axios.all([axios({
          url: '/home/multidata',
        }), axios({
          url: '/home/data',
          params: {
            type: 'sell',
            page: 5
          }
        })]).then(
          //   res => {
          //   // 这里的res是一个数组,可以对数组进行操作 
          //   console.log(res);
          // }

          // 也开始用axios.spread打开每一个res的结果,这样的返回值就是n个对象了,而不是数组,可以对,res1或者resN进行操作
          // 这里相当于是一个对于参数的解构,因为参数是数组,所以相当于是一个数组的解构
          axios.spread((res1, res2) => {
            console.log('结果1 >>> ', res1);
            console.log('结果2 >>> ', res2);
          })
        );
      }
    },
    mounted() {
      this.getValue()
    },
  };
</script>
<style lang='less'>
  .GlobalConfiguration {
    height: 200px;
    width: 200px;
    background-color: skyblue;
  }
</style>
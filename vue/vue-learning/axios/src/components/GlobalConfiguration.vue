<template>
    <div class="GlobalConfiguration">
        <h2>全局配置</h2>
        <p>
            如果发现BaseURL是固定的,那么可以把BaseURL设定为全局配置
        </p>
        <p>
            axios.<span style="color:deeppink">defaults</span>.baseURL = 'xxxxxxxxxxxxxxx'
        </p>
        <ul>
            <p>常见的配置选项</p>
            <li>
                请求地址 - url:'/user'
            </li>
            <li>
                请求类型 - method:'get'
            </li>
            <li>
                请求根路径 - baseURL:'https://www.xxxx.com/api'
            </li>
            <li>
                请求前的数据处理 - transformRequest:[function(data){}]
            </li>
            <li>
                请求后的数据处理 - transformResponse:[function(data){}]
            </li>
            <li>
                自定义的请求头 - headers:{'application/x-www-form-urlencoded'}
            </li>
            <li>
                URL查询对象 - params:{id:12}
            </li>
            <li>
                查询对象序列化函数 - paramsSerializer:function(params){}
            </li>
            <li>
                request body - data:{key:'aa'}
            </li>
            <li>
                超时设置 - timeout:1000
            </li>
            <li>
                跨域是否带Token - withCredentials:false
            </li>
            <li>
                自定义请求处理 - adapter:function(resolve,reject,config){}
            </li>
            <li>
                身份验证信息 - auth:{uname:'han',pwd:'18'}
            </li>
            <li>
                响应的数据格式 json / blob / document / arraybuffer / text / stream - responseType:'json'
            </li>
        </ul>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'GlobalConfiguration',
        methods: {
            getValue() {
                // 使用全局的axios的配置和请求
                // 固定开头的url信息
                axios.defaults.baseURL = 'http://123.207.32.32:8000';

                // headers请求头信息
                axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

                // 超时时间
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
                        // console.log('结果1 >>> ', res1);
                        // console.log('结果2 >>> ', res2);
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
        height: 48vh;
        width: 20vw;
        background-color: skyblue;
    }
</style>
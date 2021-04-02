<template>
    <div id="firstQuestion">
        <h1>后端接收前端发过去的请求信息,解析请求中的data数据,返回给前端值的升序</h1>
        <h2>前端请求地址 http://127.0.0.9:5050/firstQuestion | 前端请求携带body的参数questionId : '1',data: xxx | 请求方式(随机):post/get</h2>
        <input type="button" value="请求" @click="requestFirstQuestionParams">
        <h3>{{resMsg}}</h3>
    </div>
</template>
<script>
    import qs from 'qs'
    const axios = require('axios')
    export default {
        name: 'firstQuestion',
        data() {
            return {
                resMsg: '点击上方请求按钮,校验后端代码',
                data1: [],
            }
        },
        methods: {
            randomValue(lower, upper) {
                return Math.floor(Math.random() * (upper - lower)) + lower;
            },
            async requestFirstQuestionParams() {
                for (let i = 0; i < 2; i++) {
                    this.data1.push(this.randomValue(1, 300))
                }
                console.log(this.data1);
                const res = await axios.post('http://127.0.0.1:5000/firstQuestion',
                    qs.stringify()
                );
                this.resMsg = res.data;
                this.data1 = []
            },
        },
        mounted() {
            // this.requestFirstQuestionParams()
        },
    };
</script>
<style lang='less' scoped>

</style>
<template>
    <div id="firstQuestion">
        <div class="titleText">
            <h2>后端接收前端发过去的请求信息,解析请求group中的firstData,secondData,thirdData数据,返回给前端值的升序;<br>前端请求地址<span>http://127.0.0.9:5050/firstQuestion</span> | 前端请求携带body的JSON参数<span>'questionId' : '1','group': 'xxx'</span> | 请求方式:<span>post</span></h2>
        </div>
        <button class="inputButton" @click="requestFirstQuestionParams">
            <span>请求</span>
        </button>
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
                resMsg: '点击上方请求按钮,此处会显示后端的return数据',
                firstData: [],
                secondData: [],
                thirdData: {}
            }
        },
        methods: {
            // 随机函数 接收起始值和终止值作为范围来进行随机处理
            randomValue(lower, upper) {
                return Math.floor(Math.random() * (upper - lower)) + lower;
            },
            // 数据处理函数
            dataProcessing() {
                for (let i = 0; i < 10; i++) {
                    this.firstData.push(this.randomValue(1, 300).toString())
                }
                for (let i = 0; i < 10; i++) {
                    this.secondData.push(this.randomValue(1, 300))
                }
                for (let i = 1; i <= 10; i++) {
                    this.thirdData['value' + i.toString()] = this.randomValue(1, 300)
                }
                const obj = {
                    questionId: 1,
                    group: {
                        firstData: this.firstData,
                        secondData: this.secondData,
                        thirdData: this.thirdData,
                    }
                }
                return obj
            },
            // 重置数据函数
            resetData() {
                this.firstData = [];
                this.secondData = [];
                this.thirdData = {};
            },
            async requestFirstQuestionParams() {
                // 请求并且获取响应结果
                const res = await axios.post('http://127.0.0.1:5000/firstQuestion',
                    JSON.stringify(this.dataProcessing())
                );
                this.resMsg = res.data;
                this.resetData()
            },
        },
        mounted() {
            // this.requestFirstQuestionParams()
        },
    };
</script>
<style lang='less' scoped>
    .wh(@w: 100%, @h: 100%) {
        width: @w;
        height: @h;
    }

    #firstQuestion {
        .inputButton {
            width: 175px;
            height: 80px;
            font-size: 30px;
            font-weight: bolder;
            color: #659ae0;

            // transition: all 1s ease-in-out;
            &::before {
                transition: all 1s ease-in-out;
 
            }

            &:hover::before {
                content: "gogogo";
            }
        }

        .titleText {
            span {
                color: #659ae0;
            }
        }
    }
</style>
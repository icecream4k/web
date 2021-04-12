<template>
    <div id="firstQuestion">
        <dv-border-box-7>
            <div class="titleText">
                <h2>后端接收前端发过去的请求信息,解析请求group中的firstData,secondData,thirdData数据,返回给前端一个JSON,里面包含三组数据进行升序;<br>前端请求地址<span>http://0.0.0.0:5050/firstQuestion</span> | 前端请求携带的JSON参数<span>'questionId' : '1','group': 'xxx'</span> | 请求方式:<span>post</span>;<br>不可使用高阶函数诸如:sorted()等,可随意使用框架/服务,诸如:Django,Flask,socket等</h2>
            </div>
        </dv-border-box-7>
        <div class="buttonSpace">
            <button class="inputButton" @click="requestFirstQuestionParams">
                <span>请求</span>
            </button>
        </div>
        <h3 v-show="showErrorTips">后端错误,请<a href="">刷新</a>重试</h3>
        <div class="dataValueSpace">
            <h3 v-show="!showErrorTips">{{resMsg}}</h3>
        </div>
    </div>
</template>
<script>
    const axios = require('axios')
    export default {
        name: 'firstQuestion',
        data() {
            return {
                showErrorTips: false,
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
                for (let i = 1; i < 10; i++) {
                    this.firstData.push(this.randomValue(1, 300).toString())
                    this.secondData.push(this.randomValue(1, 300))
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

            refreshNow() {
                location.reload()
            },
            async requestFirstQuestionParams() {
                try {
                    var res = await axios.post('http://0.0.0.0:5050/firstQuestion',
                        JSON.stringify(this.dataProcessing())
                    );
                } catch (e) {
                    this.showErrorTips = true
                }
                this.resMsg = res.data;
                this.resetData()
            },
        }
    };
</script>
<style lang='less' scoped>
    #firstQuestion {
        .buttonSpace {

            width: 350px;
            height: 75px;
            margin: 45px auto;

            .inputButton {
                width: 55%;
                height: 100%;
                color: #659ae0;
                transition: all 0.3s ease-in-out;
                background-color: #9992923f;
                border-radius: 5px;
                outline: none;
                border: 1px solid black;

                span {
                    font-size: 40px;
                    font-weight: bolder;

                }

                &:hover {
                    width: 90%;
                    letter-spacing: 40px;
                    text-indent: 40px;
                    text-align: center;

                    outline: none;
                    border-radius: 35px;
                    color: #4d5de9;
                    background-color: #ecececa8;
                }

                &:active {
                    color: #252e7e;
                    background-color: #919191a8;
                }
            }
        }

        .dv-border-box-7 {
            width: 1440px;
            margin: auto;

            .titleText {
                span {
                    color: #659ae0;
                }
            }
        }

        .dataValueSpace {
            width: 900px;
            text-align: center;
            margin: auto;
        }
    }
</style>
<template>
    <div class="hangqing" id="hangqing">
        <div class="Charts2">
            <div>
                <el-button-group>
                    <el-button type="primary" @click="day7">7日</el-button>
                    <el-button type="primary" @click="day15">15日</el-button>
                    <el-button type="primary" @click="day30">30日</el-button>
                </el-button-group>
            </div>

            <div id="hangqingcharts"></div>
        </div>
    </div>
</template>
<script>
    import echartsChange from '../static/js/echartsChange'
    export default {
        name: 'hangqing',
        data() {
            return {
                timerNumber: 0,
                hangQingTimer: null,
                hangQingOption: {
                    title: {
                        text: null,
                        left: 'center',
                        textStyle: {
                            fontSize: 34,
                            color: "#71E3FD",
                            textShadowColor: "rgba(189, 204, 205, 1)",
                            textShadowBlur: 10,
                            textShadowOffsetY: 3.5
                        },
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },
                    grid: {
                        left: '13%',
                        right: '14%',
                        bottom: '3%',
                        containLabel: true
                    },
                    legend: {
                        data: null,
                        textStyle: {
                            color: ['#5872BD', '#9ECA80', '#F4C86B'],
                            fontSize: 25,
                        },
                        icon: "roundRect",
                        top: "0%",
                        right: "10%",
                        orient: "vertical",
                    },
                    xAxis: {
                        type: 'category',
                        data: null,
                        axisPointer: {
                            type: 'shadow'
                        },
                        axisLabel: {
                            fontSize: 25,
                        },
                        axisLine: {
                            lineStyle: {
                                color: "rgba(161, 227, 255, 1)",
                            },
                        },
                        "splitLine": { //网格线
                            "show": false
                        }
                    },
                    yAxis: {
                        type: 'value',

                        interval: 50,
                        "splitLine": { //网格线
                            "show": false
                        },
                        axisLabel: {
                            fontSize: 25,
                        },
                        axisLine: {
                            lineStyle: {
                                color: "rgba(161, 227, 255, 1)",
                            },
                        },
                    },
                    series: [{
                            name: '启动价格',
                            type: 'line',
                            smooth: true,
                            data: null,
                            itemStyle: {
                                color: '#5872BD',
                            },
                            lineStyle: {
                                width: 5
                            },

                        },
                        {
                            name: '舟山价格',
                            type: 'line',
                            smooth: true,
                            data: null,
                            itemStyle: {
                                color: '#9ECA80',
                            },
                            lineStyle: {
                                width: 5
                            }
                        },
                        {
                            name: '北仑价格',
                            type: 'line',
                            smooth: true,
                            data: null,
                            itemStyle: {
                                color: '#F4C86B',
                            },
                            lineStyle: {
                                width: 5
                            }
                        }
                    ]
                }
            }
        },
        methods: {
            day7() {
                this.timerNumber = 0
                const changeArray = ['码头7日挂牌价', ['1日', '2日', '3日', '4日', '5日', '6日', '7日'],
                    [30, 50, 70, 110, 135, 147, 260],
                    [218, 220, 160, 150, 180, 218, 220],
                    [147, 260, 218, 220, 160, 150, 180]
                ]
                echartsChange.LNGcharts('hangqingcharts', this.hangQingOption, changeArray)
            },
            day15() {
                this.timerNumber = 1
                const changeArray = ['码头15日挂牌价', ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日', '11日', '12日', '13日', '14日', '15日'],
                    [30, 50, 70, 110, 135, 147, 260, 218, 220, 160, 150, 180, 218, 220, 180],
                    [218, 220, 160, 150, 180, 218, 220, 180, 145, 112, 90, 80, 70, 55, 78],
                    [130, 50, 70, 180, 145, 137, 250, 225, 234, 166, 112, 150, 238, 210, 170]
                ]
                echartsChange.LNGcharts('hangqingcharts', this.hangQingOption, changeArray)
            },
            day30() {
                this.timerNumber = 2
                const changeArray = ['码头30日挂牌价', ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日', '11日', '12日', '13日', '14日', '15日', '16日', '17日', '18日', '19日', '20日', '21日', '22日', '23日', '24日', '25日', '26日', '27日', '28日', '29日', '30日'],
                    [30, 50, 70, 110, 135, 147, 220, 180, 145, 112, 90, 80, 70, 55, 260, 218, 220, 160, 150, 180, 218, 220, 180, 145, 112, 90, 80, 70, 55, 78],
                    [112, 90, 80, 70, 55, 260, 70, 110, 135, 147, 220, 218, 220, 30, 50, 112, 90, 80, 70, 55, 78, 180, 145, 160, 150, 180, 218, 220, 180, 145],
                    [70, 55, 78, 30, 50, 70, 110, 135, 147, 220, 55, 260, 70, 110, 135, 147, 220, 218, 220, 30, 50, 112, 150, 180, 218, 220, 180, 145, 112, 90, 80]
                ]
                echartsChange.LNGcharts('hangqingcharts', this.hangQingOption, changeArray)
            }
        },
        mounted() {
            this.day7()
            this.hangQingTimer = setInterval(() => {
                switch (this.timerNumber) {
                    case 0:
                        this.day7()
                        console.log('执行了day7');
                        break;
                    case 1:
                        this.day15()
                        console.log('执行了day15');
                        break;
                    case 2:
                        this.day30()
                        console.log('执行了day30');
                        break;
                }
            }, 1000);
        },
        destroyed() {
            clearInterval(this.hangQingTimer)
            this.hangQingTimer = null
        },
    };
</script>
<style lang='less'>
    .wh(@w: 100%; @h: 100%) {
        width: @w;
        height: @h;
    }

    .hangqing {
        .wh();

        .Charts2 {
            .wh();

            .button {
                width: 270px;
                height: 45px;
                // background-color: red;
                position: absolute;
                left: 1540px;
                z-index: 2;
            }

            #hangqingcharts {
                .wh(100vw, 430px);
            }
        }
    }
</style>
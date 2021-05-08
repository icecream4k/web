<template>
    <div>
        <router-link to="/home" tag="button">首页</router-link>
        <dv-decoration-7 class="chart_title_text">
            <h2 style="color: white">&nbsp;&nbsp;动态环图&nbsp;&nbsp;</h2>
        </dv-decoration-7>
        <dv-charts :option="option" class="chart_d1"></dv-charts>
        <input type="button" value="打印油量具体数值" @click="change_oil">
        <br>
        <div class="dynamic_ring_graph_grid_show grid_show">
            <div class="dynamic_ring_graph_grid_show_d">
                <p>基本显示</p>
                <dv-active-ring-chart :config="config_1" style="width:300px;height:300px" />
            </div>
            <div class="dynamic_ring_graph_grid_show_d">
                <p>线条粗细</p>
                <dv-active-ring-chart :config="config_2" style="width:300px;height:300px" />
            </div>
            <div class="dynamic_ring_graph_grid_show_d">
                <p>调节半径</p>
                <dv-active-ring-chart :config="config_3" style="width:300px;height:300px" />
            </div>
            <div class="dynamic_ring_graph_grid_show_d">
                <p>显示具体数值而不是百分比</p>
                <dv-active-ring-chart :config="config_4" style="width:300px;height:300px" />
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Chart",
        data() {
            return {
                Oil_quantity: '',
                // 把数据放在data里面,然后背景设定为黑色即可
                option: {
                    title: {
                        text: '剩余油量表',
                        style: {
                            fill: '#fff'
                        }
                    },
                    series: [{
                        type: 'gauge',
                        data: [{
                            name: 'itemA',
                            value: 94
                        }],
                        center: ['50%', '55%'],
                        axisLabel: {
                            formatter: '{value}%',
                            style: {
                                fill: '#fff'
                            }
                        },
                        axisTick: {
                            style: {
                                stroke: '#fff'
                            }
                        },
                        animationCurve: 'easeInOutBack'
                    }]
                },
                config_1: {
                    data: [{
                            name: '周口',
                            value: 55
                        },
                        {
                            name: '南阳',
                            value: 120
                        },
                        {
                            name: '西峡',
                            value: 78
                        },
                        {
                            name: '驻马店',
                            value: 66
                        },
                        {
                            name: '新乡',
                            value: 80
                        }
                    ]
                },
                config_2: {
                    data: [{
                            name: '周口',
                            value: 55
                        },
                        {
                            name: '南阳',
                            value: 120
                        },
                        {
                            name: '西峡',
                            value: 78
                        },
                        {
                            name: '驻马店',
                            value: 66
                        },
                        {
                            name: '新乡',
                            value: 80
                        }
                    ],
                    lineWidth: 10
                },
                config_3: {
                    radius: '40%',
                    activeRadius: '45%',
                    data: [{
                            name: '周口',
                            value: 55
                        },
                        {
                            name: '南阳',
                            value: 120
                        },
                        {
                            name: '西峡',
                            value: 78
                        },
                        {
                            name: '驻马店',
                            value: 66
                        },
                        {
                            name: '新乡',
                            value: 80
                        }
                    ],
                    digitalFlopStyle: {
                        fontSize: 20
                    }
                },
                config_4: {
                    radius: '40%',
                    activeRadius: '45%',
                    data: [{
                            name: '周口',
                            value: 55
                        },
                        {
                            name: '南阳',
                            value: 120
                        },
                        {
                            name: '西峡',
                            value: 78
                        },
                        {
                            name: '驻马店',
                            value: 66
                        },
                        {
                            name: '新乡',
                            value: 80
                        }
                    ],
                    digitalFlopStyle: {
                        fontSize: 20
                    },
                    showOriginValue: true
                }

            };
        },
        methods: {
            change_oil() {
                console.log(this.option.series[0].data[0].value);
            }
        },
    };
</script>
<style lang="less">
    @import '../../../styles/overall.less';
    .chart_d1 {
        background-color: @tebgc;
        width: @tew;
        height: @teh;
        margin: 10px 0 10px 0;
    }

    .dynamic_ring_graph_grid_show {
        background-color: @tebgc;
        width: 700px;
        grid-template-columns: 1fr 1fr;
    }

    .dynamic_ring_graph_grid_show_d {
        margin: 0 auto;
        width: @tew;
        height: @teh;
    }

    .dynamic_ring_graph_grid_show_d>p {
        color: white;
    }
</style>
<template>
    <div>
        <router-link to="/home" tag="button">首页</router-link><br><br>
        <button onclick="window.location.href='http://datav.jiaminghi.com/guide/flylineChartEnhanced.html'">飞线图具体网页配置</button>
        <dv-decoration-7 class="chart_title_text flying_line_diagram_title_text">
            <h2 style="color: white">&nbsp;&nbsp;飞线地图&nbsp;&nbsp;</h2>
        </dv-decoration-7>
        <div class="Flying_line_diagram_grid_show grid_show">
            <div class="Flying_line_diagram_grid_show_d">
                <p>基本示例</p>
                <dv-flyline-chart-enhanced :config="config_1" style="width:690px;height:600px;" class="flying_line_diagram" />
            </div>
            <div class="Flying_line_diagram_grid_show_d">
                <p>附带图标</p>
                <dv-flyline-chart-enhanced :config="config_1" style="width:690px;height:600px;" class="flying_line_diagram" />
            </div>
            <div class="Flying_line_diagram_grid_show_d">
                <p>附带文本</p>
                <dv-flyline-chart-enhanced :config="config_3" style="width:690px;height:600px;" class="flying_line_diagram" />
            </div>
            <div class="Flying_line_diagram_grid_show_d">
                <p>附带光晕</p>
                <dv-flyline-chart-enhanced :config="config_4" style="width:690px;height:600px;" class="flying_line_diagram" />
            </div>
            <div class="Flying_line_diagram_grid_show_d">
                <p>凹聚飞线</p>
                <dv-flyline-chart-enhanced :config="config_5" style="width:690px;height:600px;" class="flying_line_diagram" />
            </div>
            <div class="Flying_line_diagram_grid_show_d">
                <p>灵活配置</p>
                <dv-flyline-chart-enhanced :config="config_6" style="width:690px;height:600px;" class="flying_line_diagram" />
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Flying_line_diagram',
        data() {
            return {
                config_1: {
                    points: [{
                            name: '郑州',
                            coordinate: [0.48, 0.35]
                        },
                        {
                            name: '新乡',
                            coordinate: [0.52, 0.23]
                        },
                        {
                            name: '焦作',
                            coordinate: [0.43, 0.29]
                        },
                        {
                            name: '开封',
                            coordinate: [0.59, 0.35]
                        },
                        {
                            name: '许昌',
                            coordinate: [0.53, 0.47]
                        },
                        {
                            name: '平顶山',
                            coordinate: [0.45, 0.54]
                        },
                        {
                            name: '洛阳',
                            coordinate: [0.36, 0.38]
                        },
                        {
                            name: '周口',
                            coordinate: [0.62, 0.55]
                        },
                        {
                            name: '漯河',
                            coordinate: [0.56, 0.56]
                        },
                        {
                            name: '南阳',
                            coordinate: [0.37, 0.66]
                        },
                        {
                            name: '信阳',
                            coordinate: [0.55, 0.81]
                        },
                        {
                            name: '驻马店',
                            coordinate: [0.55, 0.67]
                        },
                        {
                            name: '济源',
                            coordinate: [0.37, 0.29]
                        },
                        {
                            name: '三门峡',
                            coordinate: [0.20, 0.36]
                        },
                        {
                            name: '商丘',
                            coordinate: [0.76, 0.41]
                        },
                        {
                            name: '鹤壁',
                            coordinate: [0.59, 0.18]
                        },
                        {
                            name: '濮阳',
                            coordinate: [0.68, 0.17]
                        },
                        {
                            name: '安阳',
                            coordinate: [0.59, 0.10]
                        }
                    ],
                    lines: [{
                            source: '新乡',
                            target: '郑州'
                        },
                        {
                            source: '焦作',
                            target: '郑州'
                        },
                        {
                            source: '开封',
                            target: '郑州'
                        },
                        {
                            source: '许昌',
                            target: '郑州'
                        },
                        {
                            source: '平顶山',
                            target: '郑州'
                        },
                        {
                            source: '洛阳',
                            target: '郑州'
                        },
                        {
                            source: '周口',
                            target: '郑州'
                        },
                        {
                            source: '漯河',
                            target: '郑州'
                        },
                        {
                            source: '南阳',
                            target: '郑州'
                        },
                        {
                            source: '信阳',
                            target: '郑州'
                        },
                        {
                            source: '驻马店',
                            target: '郑州'
                        },
                        {
                            source: '济源',
                            target: '郑州'
                        },
                        {
                            source: '三门峡',
                            target: '郑州'
                        },
                        {
                            source: '商丘',
                            target: '郑州'
                        },
                        {
                            source: '鹤壁',
                            target: '郑州'
                        },
                        {
                            source: '濮阳',
                            target: '郑州'
                        },
                        {
                            source: '安阳',
                            target: '郑州'
                        }
                    ],
                    bgImgSrc: '../../../static/img/henanmap.jpg'
                },
                config_2: {
                    centerPoint: [0.48, 0.35],
                    points: [
                        [0.52, 0.23],
                        [0.43, 0.29],
                        [0.59, 0.35],
                        [0.53, 0.47],
                        [0.45, 0.54],
                        [0.36, 0.38],
                        [0.62, 0.55],
                        [0.56, 0.56],
                        [0.37, 0.66],
                        [0.55, 0.81],
                        [0.55, 0.67],
                        [0.37, 0.29],
                        [0.20, 0.36],
                        [0.76, 0.41],
                        [0.59, 0.18],
                        [0.68, 0.17],
                        [0.59, 0.10]
                    ],
                    bgImgUrl: '../../../static/img/henanmap.jpg',
                    centerPointImg: {
                        url: '../../../static/img/mapCenterPoint.png'
                    },
                    pointsImg: {
                        url: '../../../static/img/mapPoint.png'
                    }
                },
                config_3: {
                    points: [{
                            name: '郑州',
                            coordinate: [0.48, 0.35],
                            icon: {
                                src: '../../../static/img/mapCenterPoint.png',
                                width: 30,
                                height: 30
                            },
                            text: {
                                color: '#fb7293'
                            }
                        },
                        {
                            name: '新乡',
                            coordinate: [0.52, 0.23]
                        },
                        {
                            name: '焦作',
                            coordinate: [0.43, 0.29]
                        },
                        {
                            name: '开封',
                            coordinate: [0.59, 0.35]
                        },
                        {
                            name: '许昌',
                            coordinate: [0.53, 0.47]
                        },
                        {
                            name: '平顶山',
                            coordinate: [0.45, 0.54]
                        },
                        {
                            name: '洛阳',
                            coordinate: [0.36, 0.38]
                        },
                        {
                            name: '周口',
                            coordinate: [0.62, 0.55]
                        },
                        {
                            name: '漯河',
                            coordinate: [0.56, 0.56]
                        },
                        {
                            name: '南阳',
                            coordinate: [0.37, 0.66]
                        },
                        {
                            name: '信阳',
                            coordinate: [0.55, 0.81]
                        },
                        {
                            name: '驻马店',
                            coordinate: [0.55, 0.67]
                        },
                        {
                            name: '济源',
                            coordinate: [0.37, 0.29]
                        },
                        {
                            name: '三门峡',
                            coordinate: [0.20, 0.36]
                        },
                        {
                            name: '商丘',
                            coordinate: [0.76, 0.41]
                        },
                        {
                            name: '鹤壁',
                            coordinate: [0.59, 0.18]
                        },
                        {
                            name: '濮阳',
                            coordinate: [0.68, 0.17]
                        },
                        {
                            name: '安阳',
                            coordinate: [0.59, 0.10]
                        }
                    ],
                    lines: [{
                            source: '新乡',
                            target: '郑州'
                        },
                        {
                            source: '焦作',
                            target: '郑州'
                        },
                        {
                            source: '开封',
                            target: '郑州'
                        },
                        {
                            source: '许昌',
                            target: '郑州'
                        },
                        {
                            source: '平顶山',
                            target: '郑州'
                        },
                        {
                            source: '洛阳',
                            target: '郑州'
                        },
                        {
                            source: '周口',
                            target: '郑州'
                        },
                        {
                            source: '漯河',
                            target: '郑州'
                        },
                        {
                            source: '南阳',
                            target: '郑州'
                        },
                        {
                            source: '信阳',
                            target: '郑州'
                        },
                        {
                            source: '驻马店',
                            target: '郑州'
                        },
                        {
                            source: '济源',
                            target: '郑州'
                        },
                        {
                            source: '三门峡',
                            target: '郑州'
                        },
                        {
                            source: '商丘',
                            target: '郑州'
                        },
                        {
                            source: '鹤壁',
                            target: '郑州'
                        },
                        {
                            source: '濮阳',
                            target: '郑州'
                        },
                        {
                            source: '安阳',
                            target: '郑州'
                        }
                    ],
                    icon: {
                        show: true,
                        src: '../../../static/img/mapPoint.png'
                    },
                    text: {
                        show: true,
                    },
                    bgImgSrc: '../../../static/img/henanmap.jpg'
                },
                config_4: {
                    points: [{
                            name: '郑州',
                            coordinate: [0.48, 0.35],
                            halo: {
                                show: true,
                            },
                            icon: {
                                src: '../../../static/img/mapCenterPoint.png',
                                width: 30,
                                height: 30
                            },
                            text: {
                                show: false
                            }
                        },
                        {
                            name: '新乡',
                            coordinate: [0.52, 0.23]
                        },
                        {
                            name: '焦作',
                            coordinate: [0.43, 0.29]
                        },
                        {
                            name: '开封',
                            coordinate: [0.59, 0.35]
                        },
                        {
                            name: '许昌',
                            coordinate: [0.53, 0.47]
                        },
                        {
                            name: '平顶山',
                            coordinate: [0.45, 0.54]
                        },
                        {
                            name: '洛阳',
                            coordinate: [0.36, 0.38]
                        },
                        {
                            name: '周口',
                            coordinate: [0.62, 0.55]
                        },
                        {
                            name: '漯河',
                            coordinate: [0.56, 0.56]
                        },
                        {
                            name: '南阳',
                            coordinate: [0.37, 0.66]
                        },
                        {
                            name: '信阳',
                            coordinate: [0.55, 0.81]
                        },
                        {
                            name: '驻马店',
                            coordinate: [0.55, 0.67]
                        },
                        {
                            name: '济源',
                            coordinate: [0.37, 0.29]
                        },
                        {
                            name: '三门峡',
                            coordinate: [0.20, 0.36]
                        },
                        {
                            name: '商丘',
                            coordinate: [0.76, 0.41]
                        },
                        {
                            name: '鹤壁',
                            coordinate: [0.59, 0.18]
                        },
                        {
                            name: '濮阳',
                            coordinate: [0.68, 0.17]
                        },
                        {
                            name: '安阳',
                            coordinate: [0.59, 0.10]
                        }
                    ],
                    lines: [{
                            source: '新乡',
                            target: '郑州'
                        },
                        {
                            source: '焦作',
                            target: '郑州'
                        },
                        {
                            source: '开封',
                            target: '郑州'
                        },
                        {
                            source: '许昌',
                            target: '郑州'
                        },
                        {
                            source: '平顶山',
                            target: '郑州'
                        },
                        {
                            source: '洛阳',
                            target: '郑州'
                        },
                        {
                            source: '周口',
                            target: '郑州'
                        },
                        {
                            source: '漯河',
                            target: '郑州'
                        },
                        {
                            source: '南阳',
                            target: '郑州'
                        },
                        {
                            source: '信阳',
                            target: '郑州'
                        },
                        {
                            source: '驻马店',
                            target: '郑州'
                        },
                        {
                            source: '济源',
                            target: '郑州'
                        },
                        {
                            source: '三门峡',
                            target: '郑州'
                        },
                        {
                            source: '商丘',
                            target: '郑州'
                        },
                        {
                            source: '鹤壁',
                            target: '郑州'
                        },
                        {
                            source: '濮阳',
                            target: '郑州'
                        },
                        {
                            source: '安阳',
                            target: '郑州'
                        }
                    ],
                    icon: {
                        show: true,
                        src: '../../../static/img/mapPoint.png'
                    },
                    text: {
                        show: true,
                    },
                    bgImgSrc: '../../../static/img/henanmap.jpg'
                },
                config_5: {
                    points: [{
                            name: '郑州',
                            coordinate: [0.48, 0.35],
                            halo: {
                                show: true,
                            },
                            icon: {
                                src: '../../../static/img/mapCenterPoint.png',
                                width: 30,
                                height: 30
                            },
                            text: {
                                show: false
                            }
                        },
                        {
                            name: '新乡',
                            coordinate: [0.52, 0.23]
                        },
                        {
                            name: '焦作',
                            coordinate: [0.43, 0.29]
                        },
                        {
                            name: '开封',
                            coordinate: [0.59, 0.35]
                        },
                        {
                            name: '许昌',
                            coordinate: [0.53, 0.47]
                        },
                        {
                            name: '平顶山',
                            coordinate: [0.45, 0.54]
                        },
                        {
                            name: '洛阳',
                            coordinate: [0.36, 0.38]
                        },
                        {
                            name: '周口',
                            coordinate: [0.62, 0.55]
                        },
                        {
                            name: '漯河',
                            coordinate: [0.56, 0.56]
                        },
                        {
                            name: '南阳',
                            coordinate: [0.37, 0.66]
                        },
                        {
                            name: '信阳',
                            coordinate: [0.55, 0.81]
                        },
                        {
                            name: '驻马店',
                            coordinate: [0.55, 0.67]
                        },
                        {
                            name: '济源',
                            coordinate: [0.37, 0.29]
                        },
                        {
                            name: '三门峡',
                            coordinate: [0.20, 0.36]
                        },
                        {
                            name: '商丘',
                            coordinate: [0.76, 0.41]
                        },
                        {
                            name: '鹤壁',
                            coordinate: [0.59, 0.18]
                        },
                        {
                            name: '濮阳',
                            coordinate: [0.68, 0.17]
                        },
                        {
                            name: '安阳',
                            coordinate: [0.59, 0.10]
                        }
                    ],
                    lines: [{
                            source: '新乡',
                            target: '郑州'
                        },
                        {
                            source: '焦作',
                            target: '郑州'
                        },
                        {
                            source: '开封',
                            target: '郑州'
                        },
                        {
                            source: '许昌',
                            target: '郑州'
                        },
                        {
                            source: '平顶山',
                            target: '郑州'
                        },
                        {
                            source: '洛阳',
                            target: '郑州'
                        },
                        {
                            source: '周口',
                            target: '郑州'
                        },
                        {
                            source: '漯河',
                            target: '郑州'
                        },
                        {
                            source: '南阳',
                            target: '郑州'
                        },
                        {
                            source: '信阳',
                            target: '郑州'
                        },
                        {
                            source: '驻马店',
                            target: '郑州'
                        },
                        {
                            source: '济源',
                            target: '郑州'
                        },
                        {
                            source: '三门峡',
                            target: '郑州'
                        },
                        {
                            source: '商丘',
                            target: '郑州'
                        },
                        {
                            source: '鹤壁',
                            target: '郑州'
                        },
                        {
                            source: '濮阳',
                            target: '郑州'
                        },
                        {
                            source: '安阳',
                            target: '郑州'
                        }
                    ],
                    icon: {
                        show: true,
                        src: '../../../static/img/mapPoint.png'
                    },
                    text: {
                        show: true,
                    },
                    k: 0.5,
                    bgImgSrc: '../../../static/img/henanmap.jpg'
                },
                config_6: {
                    points: [{
                            name: '郑州',
                            coordinate: [0.48, 0.35],
                            halo: {
                                show: true,
                            },
                            icon: {
                                src: '../../../static/img/mapCenterPoint.png',
                                width: 30,
                                height: 30
                            },
                            text: {
                                show: false
                            }
                        },
                        {
                            name: '新乡',
                            coordinate: [0.52, 0.23]
                        },
                        {
                            name: '焦作',
                            coordinate: [0.43, 0.29]
                        },
                        {
                            name: '开封',
                            coordinate: [0.59, 0.35]
                        },
                        {
                            name: '许昌',
                            coordinate: [0.53, 0.47]
                        },
                        {
                            name: '平顶山',
                            coordinate: [0.45, 0.54]
                        },
                        {
                            name: '洛阳',
                            coordinate: [0.36, 0.38]
                        },
                        {
                            name: '周口',
                            coordinate: [0.62, 0.55],
                            halo: {
                                show: true,
                                color: '#8378ea'
                            }
                        },
                        {
                            name: '漯河',
                            coordinate: [0.56, 0.56]
                        },
                        {
                            name: '南阳',
                            coordinate: [0.37, 0.66],
                            halo: {
                                show: true,
                                color: '#37a2da'
                            }
                        },
                        {
                            name: '信阳',
                            coordinate: [0.55, 0.81]
                        },
                        {
                            name: '驻马店',
                            coordinate: [0.55, 0.67]
                        },
                        {
                            name: '济源',
                            coordinate: [0.37, 0.29]
                        },
                        {
                            name: '三门峡',
                            coordinate: [0.20, 0.36]
                        },
                        {
                            name: '商丘',
                            coordinate: [0.76, 0.41]
                        },
                        {
                            name: '鹤壁',
                            coordinate: [0.59, 0.18]
                        },
                        {
                            name: '濮阳',
                            coordinate: [0.68, 0.17]
                        },
                        {
                            name: '安阳',
                            coordinate: [0.59, 0.10]
                        }
                    ],
                    lines: [{
                            source: '新乡',
                            target: '郑州'
                        },
                        {
                            source: '焦作',
                            target: '郑州'
                        },
                        {
                            source: '开封',
                            target: '郑州'
                        },
                        {
                            source: '周口',
                            target: '郑州',
                            color: '#fb7293',
                            width: 2
                        },
                        {
                            source: '南阳',
                            target: '郑州',
                            color: '#fb7293',
                            width: 2
                        },
                        {
                            source: '济源',
                            target: '郑州'
                        },
                        {
                            source: '三门峡',
                            target: '郑州'
                        },
                        {
                            source: '商丘',
                            target: '郑州'
                        },
                        {
                            source: '鹤壁',
                            target: '郑州'
                        },
                        {
                            source: '濮阳',
                            target: '郑州'
                        },
                        {
                            source: '安阳',
                            target: '郑州'
                        },
                        {
                            source: '许昌',
                            target: '南阳',
                            color: '#37a2da'
                        },
                        {
                            source: '平顶山',
                            target: '南阳',
                            color: '#37a2da'
                        },
                        {
                            source: '洛阳',
                            target: '南阳',
                            color: '#37a2da'
                        },
                        {
                            source: '驻马店',
                            target: '周口',
                            color: '#8378ea'
                        },
                        {
                            source: '信阳',
                            target: '周口',
                            color: '#8378ea'
                        },
                        {
                            source: '漯河',
                            target: '周口',
                            color: '#8378ea'
                        }
                    ],
                    icon: {
                        show: true,
                        src: '../../../static/img/mapPoint.png'
                    },
                    text: {
                        show: true,
                    },
                    k: 0.5,
                    bgImgSrc: '../../../static/img/henanmap.jpg'
                },
                baiduurl:'https://www.baidu.com'
            }
        },
        methods: {
            goflying_line(){
                this.$router.push('https://www.baidu.com');
            }
        },
    };
</script>
<style lang='less'>
    @import '../../../styles/overall.less';

    .Flying_line_diagram_grid_show {
        width: 690px;
        height: 600px;
        grid-template-columns: 1fr 1fr;
    }

    .flying_line_diagram_title_text {
        width: 1400px !important;
    }

    .Flying_line_diagram_grid_show_d {
        margin: 0 auto;
    }

    .Flying_line_diagram_grid_show_d>p {
        font-size: 19px;
    }
</style>
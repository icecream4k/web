<template>
    <div>
        <router-link to="/home" tag='button'>首页</router-link>
        <dv-decoration-7 class="chart_title_text">
            <h2 style="color: white">&nbsp;&nbsp;排名轮播表&nbsp;&nbsp;</h2>
        </dv-decoration-7>
        <div class="Ranking_rotation_table_grid_show grid_show">
            <div class="Ranking_rotation_table_grid_show_d">
                <p>单条滚动</p>
                <dv-scroll-ranking-board :config="config_1" style="width:500px;height:300px" />
            </div>
            <div class="Ranking_rotation_table_grid_show_d">
                <p>整夜滚动</p>
                <dv-scroll-ranking-board :config="config_2" style="width:500px;height:300px" />
            </div>
            <div class="Ranking_rotation_table_grid_show_d">
                <p>数值单位</p>
                <dv-scroll-ranking-board :config="config_3" style="width:500px;height:300px" />
            </div>
            <div class="Ranking_rotation_table_grid_show_d">
                <p>数值格式化</p>
                <dv-scroll-ranking-board :config="config_4" style="width:500px;height:300px" />
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Ranking_rotation_table',
        data() {
            return {
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
                        },
                        {
                            name: '信阳',
                            value: 45
                        },
                        {
                            name: '漯河',
                            value: 29
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
                        },
                        {
                            name: '信阳',
                            value: 45
                        },
                        {
                            name: '漯河',
                            value: 29
                        }
                    ],
                    carousel: 'page'
                },
                config_3: {
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
                    unit: '单位'
                },
                config_4: {
                    data: [{
                            name: '周口',
                            value: 55123
                        },
                        {
                            name: '南阳',
                            value: 12022
                        },
                        {
                            name: '西峡',
                            value: 78932
                        },
                        {
                            name: '驻马店',
                            value: 63411
                        },
                        {
                            name: '新乡',
                            value: 44231
                        }
                    ],
                    unit: '单位',
                    valueFormatter({
                        value
                    }) {
                        console.warn(arguments)
                        const reverseNumber = (value + '').split('').reverse()
                        let valueStr = ''

                        while (reverseNumber.length) {
                            const seg = reverseNumber.splice(0, 3).join('')
                            valueStr += seg
                            if (seg.length === 3) valueStr += ','
                        }

                        return valueStr.split('').reverse().join('')
                    }
                }
            }
        },
    };
</script>
<style lang='less'>
    @import '../../styles/overall.less';

    .Ranking_rotation_table_grid_show {
        background-color: @tebgc;
        width: 1100px;
        grid-template-columns: 1fr 1fr;
    }

    .Ranking_rotation_table_grid_show_d {
        margin: @mr;
    }

    .Ranking_rotation_table_grid_show_d>p {
        color: white;
    }

    .chart_title_text {
        width: 1100px;
    }
</style>
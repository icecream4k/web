<template>
    <div>
        <router-link to="/home" tag="button">首页</router-link>
        <dv-decoration-7 class="chart_title_text Cone_column_chart_title_text">
            <h2 style="color: white">&nbsp;&nbsp;锥形柱图&nbsp;&nbsp;</h2>
        </dv-decoration-7>
        <div class="chart_title_text_grid_show grid_show">
            <div class="chart_title_text_grid_show_d">
                <p>基本示例</p>
                <dv-conical-column-chart :config="config_1" style="width:400px;height:200px;" />
            </div>
            <div class="chart_title_text_grid_show_d">
                <p>数值显示</p>
                <dv-conical-column-chart :config="config_2" style="width:400px;height:200px;" />
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Cone_column_chart',
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
                            value: 71
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
                            value: 35
                        },
                        {
                            name: '漯河',
                            value: 15
                        }
                    ],
                    img: [
                        '../../../static/img/1st.png',
                        '../../../static/img/2st.png',
                        '../../../static/img/3st.png',
                        '../../../static/img/4st.png',
                        '../../../static/img/5st.png',
                        '../../../static/img/6st.png',
                        '../../../static/img/7st.png'
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
                            value: 71
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
                            value: 35
                        },
                        {
                            name: '漯河',
                            value: 15
                        }
                    ],
                    img: [
                        '../../../static/img/1st.png',
                        '../../../static/img/2st.png',
                        '../../../static/img/3st.png',
                        '../../../static/img/4st.png',
                        '../../../static/img/5st.png',
                        '../../../static/img/6st.png',
                        '../../../static/img/7st.png'
                    ],
                    showValue: true
                }
            }
        },
    };
</script>
<style lang='less'>
    @import '../../../styles/overall.less';

    .chart_title_text_grid_show {
        background-color: @tebgc;
        width: 450px;
        padding-left: 10px;
    }
    .Cone_column_chart_title_text{
        width: 460px;
    }
    .chart_title_text_grid_show_d>p{
        font-size: 14px;
        color: white;
    }
</style>
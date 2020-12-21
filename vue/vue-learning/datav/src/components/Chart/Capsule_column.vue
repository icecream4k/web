<template>
    <div>
        <router-link to="/home" tag="button">首页</router-link>
        <dv-decoration-7 class="chart_title_text">
            <h2 style="color: white">&nbsp;&nbsp;胶囊柱图&nbsp;&nbsp;</h2>
        </dv-decoration-7>
        <div class="capsule_column_grid_show grid_show">
            <div class="capsule_column_grid_show_d">
                <p>基本显示</p>
                <dv-capsule-chart :config="config_1" style="width:300px;height:200px" />
            </div>
            <div class="capsule_column_grid_show_d">
                <p>单位显示</p>
                <dv-capsule-chart :config="config_2" style="width:300px;height:200px" />
            </div>
            <div class="capsule_column_grid_show_d">
                <p>更换颜色</p>
                <dv-capsule-chart :config="config_3" style="width:300px;height:200px" />
            </div>
            <div class="capsule_column_grid_show_d">
                <p>显示数值</p>
                <dv-capsule-chart :config="config_4" style="width:300px;height:200px" />
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Capsule_column',
        data() {
            return {
                config_1: {
                    data: [{
                            name: '南阳',
                            value: 167
                        },
                        {
                            name: '周口',
                            value: 67
                        },
                        {
                            name: '漯河',
                            value: 123
                        },
                        {
                            name: '郑州',
                            value: 55
                        },
                        {
                            name: '西峡',
                            value: 98
                        }
                    ]
                },
                config_2: {
                    data: [{
                            name: '南阳',
                            value: 167
                        },
                        {
                            name: '周口',
                            value: 67
                        },
                        {
                            name: '漯河',
                            value: 123
                        },
                        {
                            name: '郑州',
                            value: 55
                        },
                        {
                            name: '西峡',
                            value: 98
                        },
                    ],
                    unit: '单位'
                },
                config_3: {
                    data: [{
                            name: '南阳',
                            value: 167
                        },
                        {
                            name: '周口',
                            value: 123
                        },
                        {
                            name: '漯河',
                            value: 98
                        },
                        {
                            name: '郑州',
                            value: 75
                        },
                        {
                            name: '西峡',
                            value: 66
                        },
                    ],
                    colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
                    unit: '单位'
                },
                config_4: {
                    data: [{
                            name: '南阳',
                            value: 167
                        },
                        {
                            name: '周口',
                            value: 123
                        },
                        {
                            name: '漯河',
                            value: 98
                        },
                        {
                            name: '郑州',
                            value: 75
                        },
                        {
                            name: '西峡',
                            value: 66
                        },
                    ],
                    colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
                    unit: '单位',
                    showValue: true
                }
            }
        },
    };
</script>
<style lang='less'>
    @import '../../../styles/overall.less';
    .capsule_column_grid_show{
        background-color: @tebgc;
        width: 700px;
        grid-template-columns: 1fr 1fr;
    }
    .capsule_column_grid_show_d{
        margin: 0 auto;
        width: @tew;
        height: @teh;
    }
    .capsule_column_grid_show_d>p{
        color: white;
    }
</style>
<template>
    <div>
        <router-link to="/home" tag="button">首页</router-link>
        <dv-decoration-7 class="chart_title_text">
            <h2 style="color: white">&nbsp;&nbsp;水位图&nbsp;&nbsp;</h2>
        </dv-decoration-7>
        <div class="water_level_chart_grid_show grid_show">
            <div class="water_level_chart_d">
                <p>矩形水位图</p>
                <dv-water-level-pond :config="config_1" style="width:150px;height:200px" />
            </div>
            <div class="water_level_chart_d">
                <p>圆角水位图</p>
                <dv-water-level-pond :config="config_2" style="width:150px;height:200px" />
            </div>
            <div class="water_level_chart_d">
                <p>圆形水位图</p>
                <dv-water-level-pond :config="config_3" style="width:150px;height:200px" />
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Water_level_chart',
        data() {
            return {
                config_1: {
                    data: [66]
                },
                config_2: {
                    // data里面可以放多个值,每个值都可以让水位出现一个断层
                    data: [66, 55,40],
                    shape: 'roundRect'
                },
                config_3: {
                    data: [55,45],
                    shape: 'round'
                }
            }
        },
    };
</script>
<style lang='less' scoped>
    @import '../../../styles/overall.less';

    .water_level_chart_grid_show {
        background-color: @tebgc;
        width: 700px;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .water_level_chart_d{
        margin:0 auto;
    }
    .water_level_chart_grid_show>div>p {
        color: white;
    }
</style>
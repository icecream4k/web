<template>
    <div>
        <router-link to="/home" tag="button">首页</router-link>
        <dv-decoration-7 class="chart_title_text progress_pool_title_text">
            <h2 style="color: white">&nbsp;&nbsp;进度池&nbsp;&nbsp;</h2>
        </dv-decoration-7>
        <div class="progress_pool_grid_show grid_show">
            <div class="progress_pool_grid_show_d">
                <p>基本示例</p>
                <dv-percent-pond :config="config_1" style="width:200px;height:100px;" />
            </div>
            <div class="progress_pool_grid_show_d">
                <p>调节边框</p>
                <dv-percent-pond :config="config_2" style="width:200px;height:100px;" />
            </div>
            <div class="progress_pool_grid_show_d">
                <p>线条间隙</p>
                <dv-percent-pond :config="config_3" style="width:200px;height:100px;" />
            </div>
            <div class="progress_pool_grid_show_d">
                <p>局部渐变</p>
                <dv-percent-pond :config="config_4" style="width:200px;height:100px;" />
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Progress_pool',
        data() {
            return {
                config_1: {
                    value: 32
                },
                config_2: {
                    value: 56,
                    borderWidth: 5,
                    borderRadius: 10,
                    borderGap: 5
                },
                config_3: {
                    value: 87,
                    // lineDash第一个参数是单条间隔的宽度,第二个参数是间隔的参数
                    lineDash: [10, 1]
                },
                config_4: {
                    value: 95,
                    localGradient: true
                },
            }
        },
    };
</script>
<style lang='less'>
    @import '../../../styles/overall.less';

    .progress_pool_title_text {
        width: 1152px;
    }

    .progress_pool_grid_show {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        background-color: @tebgc;
        width: 1152px;
    }

    .progress_pool_grid_show_d {
        margin: 0 auto;
    }

    .progress_pool_grid_show_d>p {
        color: white;
    }
</style>
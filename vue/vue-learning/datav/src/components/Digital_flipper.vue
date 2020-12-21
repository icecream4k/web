<template>
    <div>
        <router-link to="/home" tag="button">首页</router-link>
        <dv-decoration-7 class="chart_title_text">
            <h2 style="color: white">&nbsp;&nbsp;数字翻牌器&nbsp;&nbsp;</h2>
        </dv-decoration-7>
        <div class="digital_flipper_gird_show gird_show">
            <div class="digital_flipper_gird_show_d">
                <p></p>
                <dv-digital-flop :config="config_1" style="width:200px;height:50px;" class="digital_flipper_d" />
            </div>
            <div class="digital_flipper_gird_show_d">
                <p></p>
                <dv-digital-flop :config="config_2" style="width:200px;height:50px;" />
            </div>
            <div class="digital_flipper_gird_show_d">
                <p></p>
                <dv-digital-flop :config="config_3" style="width:200px;height:50px;" />
            </div>
            <div class="digital_flipper_gird_show_d">
                <p></p>
                <dv-digital-flop :config="config_4" style="width:200px;height:50px;" />
            </div>
        </div>
    </div>
</template>
<script>
    var config1 = {
        number: [100],
        content: '{nt}个'
    };
    var config2 = {
        number: [999],
        content: '{nt}个'
    };
    export default {
        name: 'Digital_flipper',
        data() {
            return {
                config_1: {
                    config2
                },
                config_2: {

                },
                config_3: {

                },
                config_4: {

                }
            }
        },
    };
</script>
<style lang='less'>
    @import '../../styles/overall.less';

    .digital_flipper_gird_show {
        grid-template-columns: 1fr 1fr;
    }

    .digital_flipper_gird_show_d {}

    .digital_flipper_d {
        background-color: @tebgc;
    }
</style>
<template>
    <div>
        <router-link to="/home" tag="button">首页</router-link>
        <dv-decoration-7 class="chart_title_text">
            <h2 style="color: white">&nbsp;&nbsp;数字翻牌器&nbsp;&nbsp;</h2>
        </dv-decoration-7>
        <div class="digital_flipper_gird_show grid_show">
            <div class="digital_flipper_gird_show_d">
                <p>基本样式</p>
                <dv-digital-flop :config="basic_examples_config" style="width:200px;height:50px;" />
                <input type="button" value="切换数据" @click="basic_examples_changeData" class="digital_flipper_gird_show_d_button">
            </div>
            <div class="digital_flipper_gird_show_d">
                <p>浮点数</p>
                <dv-digital-flop :config="float_config" style="width:200px;height:50px;" />
                <input type="button" value="切换数据" @click="float_config_changeData" class="digital_flipper_gird_show_d_button">
            </div>
            <div class="digital_flipper_gird_show_d">
                <p>多数值</p>
                <dv-digital-flop :config="multiple_values_config" style="width:200px;height:50px;" />
                <input type="button" value="切换数据" @click="multiple_values_changeData" class="digital_flipper_gird_show_d_button">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Digital_flipper',
        data() {
            return {
                basic_examples_frequency: 1,
                basic_examples_config: {
                    number: [100],
                    content: `{nt}个`
                },
                basic_examples_config_1: {
                    number: [100],
                    content: `{nt}个`
                },
                basic_examples_config_2: {
                    number: [999],
                    content: `{nt}个`
                },
                // --------------------------
                float_frequency: 1,
                float_config: {
                    number: [100],
                    toFixed: 2,
                    content: '{nt}个'
                },
                float_config_1: {
                    number: [100],
                    toFixed: 2,
                    content: '{nt}个'
                },
                float_config_2: {
                    number: [999.99],
                    toFixed: 2,
                    content: '{nt}个'
                },
                // --------------------------
                multiple_values_frequency: 1,
                multiple_values_config: {
                    number: [10, 100],
                    content: '{nt}个{nt}元'
                },
                multiple_values_config_1: {
                    number: [10, 100],
                    content: '{nt}个{nt}元'
                },
                multiple_values_config_2: {
                    number: [100, 1000],
                    content: '{nt}个{nt}元'
                }
            }
        },
        methods: {
            basic_examples_changeData() {
                // 可以用解构来进行替换 [a,b] = [b,a]
                if (this.basic_examples_frequency % 2 === 0) {
                    this.basic_examples_config = this.basic_examples_config_1;
                    this.basic_examples_frequency++;
                } else {
                    this.basic_examples_config = this.basic_examples_config_2
                    this.basic_examples_frequency--;
                }
            },
            float_config_changeData() {
                if (this.float_frequency % 2 === 0) {
                    this.float_config = this.float_config_1;
                    this.float_frequency++;
                } else {
                    this.float_config = this.float_config_2;
                    this.float_frequency--;
                }
            },
            multiple_values_changeData() {
                if (this.multiple_values_frequency % 2 === 0) {
                    this.multiple_values_config = this.multiple_values_config_1;
                    this.multiple_values_frequency++;
                } else {
                    this.multiple_values_config = this.multiple_values_config_2;
                    this.multiple_values_frequency--;
                }
            }
        },
    };
</script>
<style lang='less'>
    @import '../../styles/overall.less';

    .digital_flipper_gird_show {
        width: 700px;
        background-color: @tebgc;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .digital_flipper_gird_show_d {
        margin: @mr;
    }

    .digital_flipper_gird_show_d>p {
        color: white;
    }

    .digital_flipper_gird_show_d_button {
        margin-left: 65px;
    }
</style>
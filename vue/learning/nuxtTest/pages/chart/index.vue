<template>
    <div class="index">
        <div id="lineChart" ref="lineTest"></div>
        <nuxt-link :to="{ name: 'index' }">回首页</nuxt-link>
    </div>
</template>
<script>
export default {
    name: "index",
    data() {
        return {
            option: {
                xAxis: {
                    type: "category",
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                },
                yAxis: {
                    type: "value"
                },
                series: [
                    {
                        data: [150, 230, 224, 218, 135, 147, 260],
                        type: "line"
                    }
                ]
            }
        };
    },
    methods: {
        randerChart() {
            const mychart = this.$echarts.init(this.$refs.lineTest);
            mychart.setOption(this.option);
        }
    },
    mounted() {
        this.randerChart();
    }
};
</script>
<style lang="less" scoped>
#lineChart {
    width: 500px;
    height: 500px;
}
</style>

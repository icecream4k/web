import echarts from 'echarts'
const echartsChange = {
    LNGcharts(divId, option, changeArray) {
        let myecharts = echarts.init(document.getElementById(divId), {
            useDirtyRect: true
        });
        option.title.text = changeArray[0]
        option.xAxis.data = changeArray[1]
        option.series[0].data = changeArray[2]
        option.series[1].data = changeArray[3]
        option.series[2].data = changeArray[4]
        myecharts.setOption(option);
    }
}
export default echartsChange
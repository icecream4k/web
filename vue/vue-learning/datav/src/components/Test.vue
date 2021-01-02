<template>
  <div class="RightInfor">
    <dv-charts :option="option"></dv-charts>
    <!-- <dv-active-ring-chart :config="config" style="width:300px;height:300px" /> -->
  </div>
</template>
<script>
  const axios = require("axios")
  export default {
    name: 'Test',
    data() {
      return {
        option: null,
      }
    },
    methods: {
      async getData() {
        const res = await axios.get(
          'http://bim.zhuneng.cn/express_api/admin/mock/getConstructionDocuNum'
        );
        console.log(res.data.data);
        const a = res.data.data.data.map((i) => {
          return i.name
        });
        const b = res.data.data.data.map((i) => {
          return i.num
        });


        this.option = {
          title: {
            text: '周销售额趋势'
          },
          xAxis: {
            name: '第二周',
            data: a
          },
          yAxis: {
            name: '销售额',
            data: 'value'
          },
          series: [{
            data: b,
            type: 'line',
            lineArea: {
              show: true,
              gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
            }
          }]
        }

      },


    },
    mounted() {
      this.getData();
      setInterval(() => {
        this.getData();
      }, 3000);
    },
  };
</script>
<style lang='less'>
  @import '../../styles/overall.less';

  .RightInfor {
    width: 300px;
    height: 300px;
  }
</style>
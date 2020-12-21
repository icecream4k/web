<template>
    <div>
        <router-link to="/home" tag="button">首页</router-link>
        <dv-active-ring-chart :config="config" style="width:200px;height:200px"  id="container"/>
    </div>
</template>
<script>
import Charts from "@jiaminghi/charts";

const container = document.getElementById("container");

const myChart = new Charts(container);
myChart.setOption({
    title: "My Chart",
    // ...otherConfig
});
export default {
    name: "test",
};
</script>

<template>
    <div>
        <!-- <dv-charts :option="option"></dv-charts> -->
        <dv-active-ring-chart :config="config" style="width:200px;height:200px" />
    </div>
</template>
<script>
export default {
    name: "Chart",
    data() {
        return {
            // 把数据放在data里面,然后背景设定为黑色即可
        }
    },
};
</script>
<style scoped>
</style>
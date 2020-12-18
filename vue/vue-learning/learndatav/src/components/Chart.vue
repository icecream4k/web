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
            name:'周口',
            value:55
        }
    },
};
</script>
<style scoped>
</style>
<template>
    <div>
        <h2>{{ $store.state.conter }}</h2>
        <h3>平方处理 ---> {{ $store.getters.powerCounter }}</h3>
        <h3>获取年龄小于18岁学生的name -->>{{ stuName }}</h3>
        <input type="button" value="获取" @click="getMoreName" />
    </div>
</template>
<script>
export default {
    name: "HelloVuex",
    data() {
        return {
            stuName: "点击下方按钮即可获取",
        };
    },
    methods: {
        getMoreName() {
            // this.stuName = this.$store.getters.more20stu
            this.stuName = ""; // 重置变量里面的数据
            for (let i = 0; i < this.$store.getters.more20stu.length; i++) {
                this.stuName += this.$store.getters.more20stu[i]['name'] + ' '
            }
        },
    },
};
</script>
<style scoped>
</style>
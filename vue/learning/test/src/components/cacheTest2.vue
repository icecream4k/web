<template>
    <div id="cacheTest2">
        <h2>辅助测试页</h2>
    </div>
</template>
<script>
    export default {
        name: 'cacheTest2',
        data() {
            return {
                timmerNumber2: 0,
                timer2: null, // 定时器data变量
            }
        },
        methods: {
            timerHandler2() {
                console.log('2号定时器触发', this.timmerNumber2++);
            }
        },
        mounted() {
            this.timerHandler2()
            this.timer2 = setInterval(() => {
                this.timerHandler2()
            }, 2000);
        },
        destroyed() {
            clearInterval(this.timer2)
            this.timer2 = null
        },
    };
</script>
<style lang='less' scoped>

</style>
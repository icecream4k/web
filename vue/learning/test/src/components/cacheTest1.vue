<template>
    <div id="cacheTest1">
        <h2>缓存的页面</h2>
    </div>
</template>
<script>
    export default {
        name: 'cacheTest1',
        data() {
            return {
                timmerNumber: 0,
                timer: null, // 定时器data变量
            }
        },
        methods: {
            timerHandler() {
                console.log('1号定时器触发', this.timmerNumber++);
            }
        },
        // mounted() {
        //     this.timerHandler()
        //     this.timer = setInterval(() => {
        //         this.timerHandler()
        //     }, 1000);
        // },
        activated() {
            this.timerHandler()
            this.timer = setInterval(() => {
                this.timerHandler()
            }, 1000);
        },
        deactivated() {
            clearInterval(this.timer)
        }
    };
</script>
<style lang='less' scoped>

</style>
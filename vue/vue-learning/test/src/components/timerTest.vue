<template>
    <div id="timerTert">
        <h1>时间测试</h1>
    </div>
</template>
<script>
    export default {
        name: 'timerTert',
        data() {
            return {
                timer:null,
            }
        },
        methods: {
            do() {
                console.log('嘿嘿嘿');
            }
        },
        mounted() {
            this.timer = setInterval(() => {
               this.do() 
            }, 2000);
        },
        destroyed() {
            clearInterval(this.timer);
            this.timer = null;
            console.log('计时器已停止');
        },
    };
</script>
<style lang='less' scoped>

</style>
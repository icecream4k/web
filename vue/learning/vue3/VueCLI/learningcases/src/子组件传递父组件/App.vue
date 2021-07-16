<template>
    <div>
        <h2>当前计数:{{counter}}</h2>
        <CounterOperation @add="addOne" @sub="subOne" @addN="addN" />
    </div>
</template>
<script>
    import CounterOperation from './CounterOperation.vue'
    export default {
        name: '',
        components: {
            CounterOperation
        },
        data() {
            return {
                counter: 0
            }
        },
        methods: {
            addOne() {
                this.counter++
            },
            subOne() {
                this.counter--
            },
            addN(num) {
                console.log(num);
                this.counter += parseInt(num);
            }
        },
    };
</script>
<style lang='less' scoped>

</style>
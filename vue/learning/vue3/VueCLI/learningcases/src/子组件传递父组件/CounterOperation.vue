<template>
    <div>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
        <input type="number" name="" id="" v-model="num">
        <button @click="incrementN">+n</button>
    </div>
</template>
<script>
    export default {
        name: '',
        data() {
            return {
                num: 0
            }
        },
        // 在emits里面对触发进行注册
        emits: ['add', 'sub', 'addN'],
        methods: {
            increment() {
                console.log("+1");
                this.$emit('add');
            },
            decrement() {
                console.log('-1');
                this.$emit('sub');
            },
            incrementN() {
                console.log(this.num);
                this.$emit('addN',this.num)
            }
        },
    };
</script>
<style lang='less' scoped>

</style>
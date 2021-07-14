<template>
    <div>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
    </div>
</template>
<script>
    export default {
        name: '',
        data() {
            return {

            }
        },
        // 在emits里面对触发进行注册
        emits: ['add', 'sub'],
        methods: {
            increment() {
                console.log("+1");
                this.$emit('add');
            },
            decrement() {
                console.log('-1');
                this.$emit('sub');
            },
        },
    };
</script>
<style lang='less' scoped>

</style>
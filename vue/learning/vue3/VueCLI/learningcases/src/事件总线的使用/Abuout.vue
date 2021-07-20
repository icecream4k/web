<template>
    <div>
        <button @click="btnClick">按钮点击</button>
    </div>
</template>
<script>
    import emitter from './utils/eventbus'
    export default {
        name: '',
        methods: {
            btnClick() {
                console.log('按钮点击');
                emitter.emit('why', {
                    name: 'why',
                    age: 18
                })
            }
        },
    };
</script>
<style lang='less' scoped>

</style>
<template>
    <div>

    </div>
</template>
<script>
    import emitter from './utils/eventbus'
    export default {
        name: '',
        created() {
            // 监听指定事件
            emitter.on('why', (info) => {
                console.log(info);
            })

            // 监听所有事件
            emitter.on('*', (type, info) => {
                console.log("* listenr:", type, info);
            })
        },
    };
</script>
<style lang='less' scoped>

</style>
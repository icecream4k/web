<template>
    <div class="fuchuanzi">
        <myinput />
        <mylist :thislist='zizujianlist' />
    </div>
</template>
<script>
    import myinput from './input'
    import mylist from './list'
    export default {
        name: 'fuchuanzi',
        components: {
            mylist,
            myinput
        },
        data() {
            return {
                thislist: [
                    {
                        id: 1,
                        title: '标题1'
                    },
                    {
                        id: 2,
                        title: '标题2'
                    }
                ]
            }
        },
    };
</script>
<style lang='less' scoped>
    // 只在本组件起效果

</style>
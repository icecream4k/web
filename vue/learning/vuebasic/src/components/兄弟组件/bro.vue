<template>
    <div class="bro">
        <myInput @add='add' />
        <myList :list='list' />
    </div>
</template>
<script>
    import myInput from './myInput'
    import myList from './myList'
    export default {
        name: 'bro',
        components: {
            myInput,
            myList
        },
        data() {
            return {
                list: [
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
        methods: {
            add(){}
        },
    };
</script>
<style lang='less' scoped>

</style>
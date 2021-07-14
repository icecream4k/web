<template>
    <div>
        <h2>{{title}}</h2>
        <h2>{{content}}</h2>
    </div>
</template>
<script>
    export default {
        name: '',
        data() {
            return {

            }
        },
        methods: {

        },
        // 数组写法
        // props: [
        //     'title',
        //     'content'
        // ],
        // 对象写法
        props: {
            // 如果发现title的类型不是string,终端中会去报警告
            title: String,
            content: {
                type: String,
                // 是否必须传值
                required: true,
                // 默认传值
                default: '123'
            },
        },
    };
</script>
<style lang='less' scoped>

</style>
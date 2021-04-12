<template>
    <div id="test3">
        <h3>axios全局获取内容 >>> {{msg}}</h3>
    </div>
</template>
<script>
    export default {
        name: 'test3',
        data() {
            return {
                msg: null
            }
        },
        methods: {
            async getValues() {
                // const result = this.axios.get('/test')
                const result = await this.$axios.get("/test")
                // console.log(result.data);
                this.msg = result.data;

            }
        },
        mounted() {
            this.getValues()
        },
    };
</script>
<style lang='less' scoped>

</style>
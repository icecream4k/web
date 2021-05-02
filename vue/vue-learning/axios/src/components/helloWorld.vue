<template>
    <div id="helloWorld">
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'helloWorld',
        data() {
            return {
                cate: null
            }
        },
        created() {
            axios({
                url: 'http:/111.222.333:4444'
            }).then(res => {
                console.log(res);
                this.cate = res
            })
        },
    };
</script>
<style lang='less' scoped>

</style>
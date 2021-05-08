<template>
    <div class="Interceptor">

    </div>
</template>
<script>
    import {
        request
    } from "../network/request"
    export default {
        name: 'Interceptor',
        methods: {
            showData() {
                request({
                    url: "/home/multidata"
                }).then(
                    res => console.log('使用时的res结果 : ',res)
                ).catch(
                    // rej => console.log(rej)
                )
            }
        },
        created() {
            this.showData()
        },
    };
</script>
<style lang='less'>
    .Interceptor {
        height: 100%;
        width: 100%;
        background-color: skyblue;
    }
</style>
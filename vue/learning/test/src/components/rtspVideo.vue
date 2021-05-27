<template>
    <div class="test2">
        <img :src='imgRGB' alt="" id="img" style="width: 400px;height: 400px;">
    </div>
</template>
<script>
    export default {
        name: 'test2',
        data() {
            return {
                imgRGB: null
            }
        },
        methods: {
            startWS() {
                var ws = new WebSocket("ws://127.0.0.1:8124");
                ws.onmessage = message => {
                    this.imgRGB = message.data
                };
            }
        },
        beforeMount() {
            this.startWS()
        },
        mounted() {},
    };
</script>
<style lang='less' scoped>

</style>
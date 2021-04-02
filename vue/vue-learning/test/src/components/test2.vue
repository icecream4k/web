<template>
    <div class="test2">
        <img src="" alt="" id="img" style="width: 400px;height: 400px;">
    </div>
</template>
<script>
    import $ from 'jquery'
    export default {
        name: 'test2',
        methods: {
            startWS() {
                let ws = new WebSocket("ws://127.0.0.1:8124");
                ws.onmessage = function(message) {
                    $("#img").attr("src", message.data);
                };
            }
        },
        mounted() {
            this.startWS()
        },
    };
</script>
<style lang='less' scoped>

</style>
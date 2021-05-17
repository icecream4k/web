<template>
    <div class="test2">
        <img src="" alt="" id="img" style="width: 400px;height: 400px;">
    </div>
</template>
<script>
    import $ from 'jquery'
    export default {
        name: 'test2',
        data() {
            return {

            }
        },
        methods: {
            startWS() {
                // let ws = new WebSocket("rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov");
                // ws.onmessage = function(message) {
                //     $("#img").attr("src", message.data);
                // };
                var ws = new WebSocket("http://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov");
                ws.onmessage = function(message) {
                    $("#img").attr("src", message.data);
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
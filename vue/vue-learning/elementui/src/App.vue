<template>
    <div id="app">
        <vue-particles class="vpart" color="#dedede" :particleOpacity="0.7" :particlesNumber="30" shapeType="circle" :particleSize="4" linesColor="#dedede" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="false" clickMode="push" />
        <router-view />
    </div>
</template>
<script>
    export default {
        name: 'app',
        mounted() {
            console.log(window.document.body);
            console.log(window.document.getElementById('app').clientHeight);
            console.log('网页可见区域宽：', window.document.body.clientWidth);
            console.log('网页可见区域宽：', window.document.body.clientHeight);
            console.log('网页可见区域高：(包括边线)', window.document.body.offsetWidth);
            console.log('网页可见区域高：(包括边线)', document.body.offsetHeight);
            console.log('网页正文全文宽：', document.body.scrollWidth);
            console.log('网页正文全文高：', document.body.scrollHeight);
            console.log('网页被卷去的高：', document.body.scrollTop);
            console.log('网页被卷去的左：', document.body.scrollLeft);
            console.log('网页正文部分上：', window.screenTop);
            console.log('网页正文部分左：', window.screenLeft);
            console.log('屏幕分辨率的高：', window.screen.height);
            console.log('屏幕分辨率的宽：', window.screen.width);
            console.log('屏幕可用工作区高度：', window.screen.availHeight);
            console.log('屏幕可用工作区宽度：', window.screen.availWidth);
        },
    };
</script>
<style lang="less">
    * {
        margin: 0;
        padding: 0;
    }

    #app {
        width: 100%;
        height: 100%;
        background-color: #080821;

        .vpart {
            width: 100%;
            height: 100%;
            position: absolute;
        }

        ;
    }
</style>
<template>
    <div id="app">
        <vue-particles class="vpart" color="#dedede" :particleOpacity="0.7" :particlesNumber="30" shapeType="circle" :particleSize="4" linesColor="#dedede" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push" />

        <router-view />
    </div>
</template>
<script>
</script>
<style lang="less">
    * {
        margin: 0;
        padding: 0;
    }

    #app {
        width: 100%;
        height: 100vh;
        background-color: #080821;

        .vpart {
            width: 100%;
            height: 100%;
            position: absolute;
        }

        ;
    }
</style>
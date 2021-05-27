<template>
    <div id="app">
        <div id="nav">
            <router-link to="/about">About</router-link> |
            <router-link to="/test1">hlsTest</router-link> |
            <router-link to="/rtsp">rtspDemo</router-link> |
            <router-link to="/test2">test2</router-link> |
            <router-link to="/timerTest">timerTest</router-link> |
            <router-link to="/echartsTest">echartsTest</router-link> |
            <router-link to="/v-for-button">v-for-button</router-link> |<br>
            <router-link to="/cacheTest1">cacheTest1</router-link> |
            <router-link to="/cacheTest2">cacheTest2</router-link> |
        </div>
        <keep-alive include="cacheTest1">
            <router-view />
        </keep-alive>
    </div>
</template>

<style lang="less">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
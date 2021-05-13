<template>
    <div id="app">
        <router-view />

    </div>
</template>
<script>
    export default {
        methods: {
            data() {
                return {
                    isActive: false
                }
            },
            change() {

            }
        },
    }
</script>
<style lang="less">
    * {
        margin: 0;
        padding: 0;
    }



    #app {
        width: 100vw;
        height: 100vh;
    }
</style>
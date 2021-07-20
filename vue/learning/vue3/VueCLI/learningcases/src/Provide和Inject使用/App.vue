<template>
    <div>
        <Home></Home>
    </div>
</template>
<script>
    import Home from './Home.vue'
    export default {
        name: '',
        components: {
            Home
        },
        provide: {
            name: "hl",
            age: 18
        }
    };
</script>
<style lang='less' scoped>

</style>
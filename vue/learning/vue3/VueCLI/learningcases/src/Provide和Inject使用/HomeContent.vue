<template>
    <div>
        <h1>{{name}}</h1>
        <h1>{{age}}</h1>
    </div>
</template>
<script>
    export default {
        name: '',
        inject: ['name', 'age']
    };
</script>
<style lang='less' scoped>

</style>
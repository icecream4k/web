<template>
    <div>
        <h1>{{name}}</h1>
        <h1>{{age}}</h1>
        <h1>{{length.value}}</h1>
    </div>
</template>
<script>
    export default {
        name: '',
        inject: ['name', 'age','length']
    };
</script>
<style lang='less' scoped>

</style>
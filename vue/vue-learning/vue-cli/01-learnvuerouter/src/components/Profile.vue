<template>
    <div>
        <h2>我是Profile组件</h2>
        <h2>姓名 - {{$route.query.name}}</h2>
        <h2>年龄 - {{$route.query.age}}</h2>
        <h2>身高 - {{$route.query.height}}</h2>
    </div>
</template>
<script>
   export default {
       name: 'Profile'
    };
</script>
<style scoped>

</style>
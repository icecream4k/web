<template>
    <div class="event">
        <p>{{ number }}</p>
        <input type="button" value="+1" @click="incrementBy1">
        <!-- 增加10也可以通过参数传入 -->
        <!-- $event是原生的事件对象 -->
        <input type="button" value="+10" @click="incrementBy10(10,$event)">
    </div>
</template>
<script>
    export default {
        name: 'event',
        data() {
            return {
                number:0
            }
        },
        methods: {
            incrementBy1(e){
                this.number ++;
                console.log('e >>>',e);
                console.log(e.__proto__.constructor);
                console.log(e.target);
            },
            incrementBy10(step,e){
                this.number += step;
                console.log(e);
            },
        },
    };
</script>
<style lang='less' scoped>

</style>
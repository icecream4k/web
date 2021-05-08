<template>
    <div class="myInput">
        <input type="text" v-model="title">
        <button @click="add">添加</button>
    </div>
</template>
<script>
import eventBus from './event-bus'
    export default {
        name: 'myInput',
        data() {
            return {
                title:''
            }
        },
        methods: {
            add(){
                this.$emit('add',title);
                eventBus.$emit('addItem',this.title)
            }
        },
    };
</script>
<style lang='less' scoped>

</style>
<template>
    <div class="myinput">
        <input type="text" v-model="title">
        <input type="button" value="添加" @click="add">
    </div>
</template>
<script>
    export default {
        name: 'myinput',
        data() {
            return {
                title:''
            }
        },
        methods: {
            add(){
                this.$emit('add',this.title)
            }
        },
    };
</script>
<style lang='less' scoped>

</style>
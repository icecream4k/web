<template>
    <div>
        <Home></Home>
        <button @click="addName"> + name</button>
    </div>
</template>
<script>
    import Home from './Home.vue'
    import {
        computed
    } from 'vue'
    export default {
        name: '',
        components: {
            Home
        },
        // 更优的解法 这样的写法如果有引用data里面的内容,那么可以用this来拿到data里面的内容
        provide() {
            return {
                name: "hl",
                age: 18,
                length: computed(() => this.names.length) // ref对象 真正的值在 .value属性当中  在子组件的使用位置,变成 .value就行
            }
        },
        data() {
            return {
                names: ['zhang', 'wang', 'li']
            }
        },
        methods: {
            addName() {
                this.names.push('han')
                console.log(this.names);
            }
        },
    };
</script>
<style lang='less' scoped>

</style>
<template>
    <div class="myList">
        <ul>
            <li v-for="item in list" :key="item.id">
                {{item.title}}
            </li>
        </ul>
    </div>
</template>
<script>
    import eventBus from './event-bus'
    export default {
        name: 'myList',
        props: {
            list: Array
        },
        methods: {
            handleAddTitle() {
                console.log('title>>', title);
            }
        },
        mounted() {
            eventBus.$on('addItem', this.handleAddTitle)
        },
        beforeDestroy() {
            eventBus.$off('addItem', this.handleAddTitle)
        },
    };
</script>
<style lang='less' scoped>

</style>
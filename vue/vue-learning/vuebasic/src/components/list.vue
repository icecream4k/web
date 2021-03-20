<template>
    <div class="mylist">
        <ul>
            <li v-for="item in list" :key="item.id">
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'mylist',
        props: {
            mylist: Array
        }
    };
</script>
<style lang='less' scoped>
</style>
 
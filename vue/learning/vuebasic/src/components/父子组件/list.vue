<template>
    <div class="mylist">
        <ul>
            <li v-for="item in zilist" :key="item.id">
                {{ item.id }}
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'mylist',
        props: {
            zilist: Array
        }
    };
</script>
<style lang='less' scoped>
</style>
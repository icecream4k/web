<template>
    <div class="vFor">
        <h1>遍历数组</h1>
        <ul>
            <li v-for="(item, index) in array" :key="item.id">
                索引: {{ index }} id: {{ item.id }} -- 值: {{ item.value }}
            </li>
        </ul>
        <h2>遍历对象</h2>
        <ul>
            <li v-for="(value,key,index) in object" :key='key'>
                {{index}} -- {{key}} -- {{value}}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'vFor',
        data() {
            return {
                array: [
                    {
                        id: 1,
                        value: "项目1"
                    },
                    {
                        id: 2,
                        value: "项目2"
                    },
                    {
                        id: 3,
                        value: "项目3"
                    }
                ],
                object: {
                    name: '韩',
                    hobby: '蓝球'
                }
            }
        },
    };
</script>
<style lang='less' scoped>

</style>
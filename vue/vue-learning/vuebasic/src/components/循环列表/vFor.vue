<template>
    <!-- v-if和v-for为什么不能联用 -->
    <!-- v-for的执行优先级会高于v-if,每次先渲染v-for,再判断v-if,所以会增大开销 -->
    <!-- 如果非要联合使用,可以放在父级元素上面,控制整个v-for循环的执行,或者放在v-for的子标签里面 -->
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
                array: [{
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
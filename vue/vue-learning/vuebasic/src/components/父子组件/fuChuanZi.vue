<template>
    <div class="fuChuanZi">
        <myinput @add='add' />
        <!-- : 子组件数据 = '父组件数据' -->
        <mylist :zilist='fulist' />
    </div>
</template>
<script>
    import myinput from './input'
    import mylist from './list'
    export default {
        name: 'fuChuanZi',
        components: {
            mylist,
            myinput
        },
        data() {
            return {
                fulist: [
                    {
                        id: 1,
                        title: '标题1'
                    },
                    {
                        id: 2,
                        title: '标题2'
                    }
                ]
            }
        },
        methods: {
            add(title) {
                this.fulist.push({
                    // Math.floor 向下取整
                    // Math.random 随机取0-1之间的小数
                    id: Math.floor(Math.random() * 100),
                    title: title
                })
            },
        }
    };
</script>
<style lang='less' scoped>
    // 只在本组件起效果
</style>
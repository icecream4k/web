<template>
    <div class="classAndStyle">
        <!-- <ul class="list clearfix">
            <li class="item active">项目 1</li>
            <li class="item">项目 2</li>
            <li class="item">项目 3</li>
        </ul> -->
        <ul class="list clearfix">
            <li class="item">项目 1</li>
            <li class="item" :class="oneStyle">项目 1</li>
            <li class="item" :style="styleData">项目 2</li>
            <li class="item">项目 3</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'classAndStyle',
        data() {
            return {
                isActive:true,
                oneStyle:'one',
                styleData:{
                    'font-size':'40px',
                    'font-weight': 'bold'
                }
            }
        },
    };
</script>

<style lang='less' scoped>
.one{
    font-size: 50px;
}
</style>
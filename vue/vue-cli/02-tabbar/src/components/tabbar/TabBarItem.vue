<template>
    <!-- 所有的item都展示同一个图片,同一个文字 -->
    <div class="tab-bar-item">
        <!-- 如果是动态绑定属性,使用一个div进行包裹即可 -->
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        <div :class="{ active: isActive }">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "TabBarItem",
    data() {
        return {
            isActive: true,
        };
    },
};
</script>
<style scoped>
.active {
    color: red;
}
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
}
.tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    /* 去除掉图片下方的空间 */
    vertical-align: middle;
    margin-bottom: 2px;
}
</style>
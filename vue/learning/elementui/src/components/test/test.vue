<template>
    <div class="test" id="test">
        <div class="testDiv"></div>
    </div>
</template>
<script>
export default {
    name: "test",
    data() {
        return {};
    },
};
</script>
<style lang="less">
.wh(@w: 100%, @h: 100%) {
    width: @w;
    height: @h;
}

.test {
    .wh();
    display: grid;
    place-items: center;

    .testDiv {
        width: 200px;
        height: 200px;
        background-color: skyblue;
    }
}

</style>
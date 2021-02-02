<template>
    <div class="introduce">
        <p>欢迎查看知识点记录<br>Welcome to this note</p>
        <p>点击左侧导航栏的按钮进入到对应的知识点内容区域<br>Click the navigation button on the left to enter the corresponding content</p>
    </div>
</template>
<script>
    export default {
        name: 'introduce'
    };
</script>
<style lang='less'>
    .pstyle(@f) {
        font-size: @f;
        background-image: -webkit-linear-gradient(bottom, #ffffff, #bbbbbb, #a8c1e6);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .introduce {
        place-items: center;
        padding: 20vh 3vw 0 3vw;

        p:nth-child(1) {
            .pstyle(45px);
        }

        p:nth-child(2) {
            .pstyle(25px);
        }


    }
</style>
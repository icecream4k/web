<template>
    <div class="sideNavigation" id="sideNavigation">
        <p>
            <router-link to="/Index/transitionAnimation">过渡动画</router-link>
        </p>
        <p>
            <router-link to="/Index/layout">布局</router-link>
        </p>
        <p>
            <router-link to="/Index/test">测试</router-link>
        </p>
    </div>
</template>
<script>
export default {
    name: "sideNavigation",
};
</script>
<style lang='less'>
#sideNavigation {
    padding-top: 3vh;

    p {
        font-size: 23px;
        text-align: center;
        background-image: -webkit-linear-gradient(bottom, #34e1ff, #ff3cef);
        background-clip: text;
        -webkit-text-fill-color: transparent;

        &:hover {
            transition: 0.4s;
            font-size: 25px;
            text-align: center;
            background-image: -webkit-linear-gradient(bottom, #6be9ff, #ff6bf3);
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        &:active {
            transition: 0.2s;
            font-size: 25px;
            text-align: center;
            background-image: -webkit-linear-gradient(bottom, #54a3b1, #ad58a6);
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
}
</style>
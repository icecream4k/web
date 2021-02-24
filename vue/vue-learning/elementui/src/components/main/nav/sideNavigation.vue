<template>
    <div class="sideNavigation" id="sideNavigation">
        <p>
            <router-link to="/Index/transitionAnimation">过渡动画</router-link>
        </p>
        <p>
            <router-link to="/Index/layout">布局</router-link>
        </p>
        <p>
            <router-link to="/Index/containerInstance">容器实例</router-link>
        </p>
        <p>
            <router-link to="/Index/button">按钮</router-link>
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
            color: transparent;
            transition: all 0.3s linear;

            &:hover {
                font-size: 30px;
                text-align: center;
                background-image: -webkit-linear-gradient(bottom, #6be9ff, #ff6bf3);
                background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            &:active {
                transition: 0.2s;
                font-size: 31px;
                text-align: center;
                background-image: -webkit-linear-gradient(bottom, #54a3b1, #ad58a6);
                background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
    }
</style>
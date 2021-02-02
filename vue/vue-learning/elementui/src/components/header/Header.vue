<template>
    <div class="Header">
        <div>

            <p>
                <router-link to="/index/">Element UI</router-link>
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Header'
    };
</script>
<style lang='less'>
    .Header {
        width: 100%;
        height: 25vh;
        background: -webkit-linear-gradient(bottom, #007d8d45, #7651ff45, #ff3cef45);

        // background-color:skyblue;
        div {
            position: relative;
            top: 40%;
            // bottom: 50%;
            margin: auto;

            // background-color: red;
            p {
                font-size: 55px;
                text-align: center;
                background-image: -webkit-linear-gradient(bottom, #34e1ff, #7651ff, #ff3cef);
                background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
    }
</style>
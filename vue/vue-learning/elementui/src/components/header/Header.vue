<template>
    <div class="Header">
        <div>
            <p>Element UI</p>
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
        height: 35vh;
        background: -webkit-linear-gradient(bottom, #34e1ff25, #7651ff25, #ff3cef25);

        // background-color:skyblue;
        div {
            position: relative;
            top: 40%;
            // bottom: 50%;
            margin: auto;

            // background-color: red;
            p {
                font-size: 40px;
                text-align: center;
                background-image: -webkit-linear-gradient(bottom, #34e1ff, #7651ff, #ff3cef);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
    }
</style>
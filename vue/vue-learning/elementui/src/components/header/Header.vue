<template>
    <div class="Header">
        <div>
            <p>
                <router-link to="/index/" class="text">Element UI</router-link>
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
        background: -webkit-linear-gradient(bottom, #ffffff07,  #ffffff07,  #ffffff07);

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
                background: linear-gradient(to bottom, #34e1ff, #7651ff, #ff3cef);
                background-clip: text;
                -webkit-text-fill-color: transparent;
                transition: background-position .5s;
            }
            p:hover{
                background-position: 100% 0; 
                // transition: 2s;
                // font-size: 65px;
                // text-align: center;
                // background-image: -webkit-linear-gradient(bottom, #ff3cef, #7651ff, #34e1ff);
                // background-clip: text;
                // -webkit-text-fill-color: transparent;
            }
        }
    }
</style>
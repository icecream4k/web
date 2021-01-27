<template>
    <div id="Main">
        <div class="sideNavigation">

        </div>
        <div class="primaryCoverage">

        </div>
    </div>
</template>
<script>
    export default {
        name: 'Main'
    };
</script>
<style lang='less'>
    @import "../../assets/less/Index.less";

    #Main {
        .wh();
        display: flex;
        height: 700px;
        .sideNavigation {
            .wh();
            flex: 1;
            // background-color:red;
        }

        ;

        .primaryCoverage {
            .wh();
            flex: 4;
            // background-color: red;
        }

        ;
    }
</style>
<template>
    <div id="Main">
        <div class="sideNavigation">
            <dv-border-box-4 :color="['#34e1ff', '#ff3cef']" ></dv-border-box-4>
            <router-view></router-view>
        </div>
        <div class="primaryCoverage">
            <dv-border-box-4 :color="['#34e1ff', '#ff3cef']"  :reverse="true"></dv-border-box-4>
            <router-view></router-view>
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
        .wh(@w:70vw);
        margin: 0 auto;
        display: flex;
        height: 65vh;
        .sideNavigation {
            .wh();
            flex: 1;
        };
        .primaryCoverage {
            .wh();
            flex: 4;
        }

        ;
    }
</style>
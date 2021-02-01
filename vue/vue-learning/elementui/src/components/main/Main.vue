<template>
    <div id="Main">
        <div class="sideNavigation">
            <dv-border-box-4 :color="['#34e1ff', '#ff3cef']">
                <sideNavigation />
            </dv-border-box-4>
        </div>
        <div class="primaryCoverage">
            <dv-border-box-4 :color="['#34e1ff', '#ff3cef']" :reverse="true" >
                <!-- 缓存每次更变的组件 -->
                <keep-alive>
                    <router-view/>
                </keep-alive>
            </dv-border-box-4>
        </div>
    </div>
</template>
<script>
    import sideNavigation from './nav/sideNavigation'
    export default {
        name: 'Main',
        components: {
            sideNavigation
        }
    };
</script>
<style lang='less'>
    @import "../../assets/less/Index.less";

    #Main {
        .wh(@w: 70vw);
        margin: 0 auto;
        display: flex;
        height: 63vh;

        .sideNavigation {
            .wh();
            flex: 1;
        }

        ;

        .primaryCoverage {
            .wh();
            flex: 4;
        }

        ;
    }
</style>
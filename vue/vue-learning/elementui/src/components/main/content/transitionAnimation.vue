<template>
    <div class="transitionAnimation" id="transitionAnimation">
        <!-- fade淡入淡出 -->
        <div class="fadeInAndOut">
            <el-button @click="fadeInAndOut = !fadeInAndOut">Click Me</el-button>
            <div style="display: flex; margin-top: 20px; height: 100px;">
                <transition name="el-fade-in-linear">
                    <div v-show="fadeInAndOut" class="transition-box">.el-fade-in-linear</div>
                </transition>
                <transition name="el-fade-in">
                    <div v-show="fadeInAndOut" class="transition-box">.el-fade-in</div>
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'transitionAnimation',
        data() {
            return {
                fadeInAndOut: true
            }
        },
    };
</script>
<style lang='less'>
    .wh(@w: 100%, @h: 100%) {
        width: @w;
        height: @h;
    }

    ;

    #transitionAnimation {
        .wh();
        display: grid;
        place-items: center;
        .transition-box {
            margin-bottom: 10px;
            width: 200px;
            height: 100px;
            border-radius: 4px;
            background-color: #409EFF;
            text-align: center;
            color: #fff;
            padding: 40px 20px;
            box-sizing: border-box;
            margin-right: 20px;
        }
    }
</style>
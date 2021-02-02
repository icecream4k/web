<template>
    <div class="transitionAnimation" id="transitionAnimation">
        <el-row :gutter="21">
            <el-col :span="7">
                <!-- fade淡入淡出 -->
                <div class="fade">
                    <el-button @click="fade = !fade">淡入淡出</el-button>
                    <div style="display: flex; margin-top: 20px;">
                        <transition name="el-fade-in-linear">
                            <div v-show="fade" class="transition-box">.el-fade-in-linear</div>
                        </transition>
                        <transition name="el-fade-in">
                            <div v-show="fade" class="transition-box">.el-fade-in</div>
                        </transition>
                    </div>
                </div>
            </el-col>
            <el-col :span="7">
                <!-- zoom 缩放 -->
                <div class="zoom">
                    <el-button @click="zoom = !zoom">缩放</el-button>
                    <div style="display: flex; margin-top: 20px;">
                        <transition name="el-zoom-in-center">
                            <div v-show="zoom" class="transition-box">.el-zoom-in-center</div>
                        </transition>

                        <transition name="el-zoom-in-top">
                            <div v-show="zoom" class="transition-box">.el-zoom-in-top</div>
                        </transition>

                        <transition name="el-zoom-in-bottom">
                            <div v-show="zoom" class="transition-box">.el-zoom-in-bottom</div>
                        </transition>
                    </div>
                </div>
            </el-col>
            <el-col :span="7">
                <!-- 展开折叠 -->
                <div class="collapse">
                    <el-button @click="collapse = !collapse">Click Me</el-button>

                    <div style="margin-top: 20px; height: 200px;">
                        <el-collapse-transition>
                            <div v-show="collapse">
                                <div class="transition-box">el-collapse-transition</div>
                                <div class="transition-box">el-collapse-transition</div>
                            </div>
                        </el-collapse-transition>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        name: 'transitionAnimation',
        data() {
            return {
                fade: true,
                zoom: true,
                collapse: true,
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
            width: 150;
            height: 150;
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
<template>
    <div class="layout" id="layout">
        <!-- 基础布局 -->
        <div class="Basics">
            <el-row>
                <!-- 相当于把整行的元素切分成了24份,因为el-row中只有一个el-col占了24个:span,所以相当于占满 -->
                <el-col :span="24">
                    <div class="grid-content bg-purple-dark first-span-div">
                        <p>基础布局</p>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <!-- 因为el-row中有两个el-col,每个元素如果占有12份,所以相当于两个el-col平分了这个el-row的宽度 -->
                <el-col :span="12">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
            </el-row>
            <el-row>
                <!-- 因为el-row中含有三个el-col,每个元素占有8份,所以相当于是三个el-col评分这个el-row的宽度 -->
                <el-col :span="8">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
            </el-row>
        </div>
        <br>
        <br>
        <!-- 分栏间隔 -->
        <div class="columnSpacing">
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple first-span-div">
                        <p>分栏间隔</p>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
        </div>
        <br>
        <br>
        <!-- 混合布局 -->
        <div class="mixedLayout">
            <el-row :gutter="20">
                <el-col :span="16">
                    <div class="grid-content bg-purple first-span-div">
                        <p>混合布局</p>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="16">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
        </div>
        <br>
        <br>
        <!-- 分栏偏移 -->
        <div class="columnOffset">
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple first-span-div">
                        <p>分栏偏移</p>
                    </div>
                </el-col>
                <el-col :span="6" :offset="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6" :offset="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="6" :offset="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12" :offset="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    export default {
        name: "layout",
    };
</script>
<style lang='less'>
    .wh(@w: 100%, @h: 100%) {
        width: @w;
        height: @h;
    }

    #layout {
        padding: 40px 20px 0 20px;
        .wh(90%, 85%);

        // 基础布局
        .Basics {
            .el-row {
                // 让每个演示元素之间的底间距为20px
                margin-bottom: 20px;

                .first-span-div>p {
                    font-size: 26px;
                    color: white;
                    text-align: left;
                }

                &:last-child {
                    // 最后一个元素的底部间距为0px
                    margin-bottom: 0;
                }
            }

            .bg-purple-dark {
                background: #717d8d;
            }

            .bg-purple {
                background: #808fa1;
            }

            .bg-purple-light {
                background: #cecfcf;
            }

            .grid-content {
                // 设定每个块级元素的圆角为4px
                border-radius: 4px;
                // 设定每个块级元素的最小高度为36px
                min-height: 36px;
            }

            .row-bg {
                padding: 10px 0;
                background-color: #f9fafc;
            }
        }

        // 分栏间隔
        .columnSpacing {
            .el-row {
                margin-bottom: 20px;

                .first-span-div>p {
                    font-size: 26px;
                    color: white;
                    text-align: left;
                }

                &:last-child {
                    margin-bottom: 0;
                }
            }

            .el-col {
                border-radius: 4px;
            }

            .bg-purple-dark {
                background: #99a9bf;
            }

            .bg-purple {
                background: #82bcce;
            }

            .bg-purple-light {
                background: #e5e9f2;
            }

            .grid-content {
                border-radius: 4px;
                min-height: 36px;
            }

            .row-bg {
                padding: 10px 0;
                background-color: #f9fafc;
            }
        }

        // 混合布局
        .mixedLayout {
            .first-span-div>p {
                font-size: 26px;
                color: white;
                text-align: left;
            }

            .el-row {
                margin-bottom: 20px;

                &:last-child {
                    margin-bottom: 0;
                }
            }

            .el-col {
                border-radius: 4px;
            }

            .bg-purple-dark {
                background: #99a9bf;
            }

            .bg-purple {
                background: #d3dce6;
            }

            .bg-purple-light {
                background: #e5e9f2;
            }

            .grid-content {
                border-radius: 4px;
                min-height: 36px;
            }

            .row-bg {
                padding: 10px 0;
                background-color: #f9fafc;
            }
        }

        // 分栏偏移
        .columnOffset {
            .first-span-div>p {
                font-size: 26px;
                color: white;
                text-align: left;
            }

            .el-row {
                margin-bottom: 20px;

                &:last-child {
                    margin-bottom: 0;
                }
            }

            .el-col {
                border-radius: 4px;
            }

            .bg-purple-dark {
                background: #99a9bf;
            }

            .bg-purple {
                background: #d3dce6;
            }

            .bg-purple-light {
                background: #e5e9f2;
            }

            .grid-content {
                border-radius: 4px;
                min-height: 36px;
            }

            .row-bg {
                padding: 10px 0;
                background-color: #f9fafc;
            }
        }
    }
</style>
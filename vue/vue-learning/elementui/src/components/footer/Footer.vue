<template>
    <div id="Footer">
        <div class="FooterContent">
            <div class="FooterContentLeft">
                <span>Element UI</span>
                <img src="../../assets/img/加号.png" alt="">
                <p>
                    Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库,本网页为作者的学习笔记网页,你可以查询到一些关键知识,并且如果发现了一些bug可以发邮件给我进行反馈 hanlong5716@163.com
                </p>
            </div>
            <div class="FooterContentRight">
                <p>友情链接</p>
                <div class="FooterContentRightD1">
                    <img src="../../assets/img/github.png" alt="" @click="goGithub">
                    <img src="../../assets/img/gitee-fill-round.png" alt="" @click="goGitee">
                    <img src="../../assets/img/微博.png" alt="" @click="goWeibo">
                </div>


            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Footer',
        methods: {
            goGithub() {
                window.location.href = "https://github.com/icecream4k";
            },
            goGitee() {
                window.location.href = "https://gitee.com/icecream4k";
            },
            goWeibo() {
                window.location.href = "https://weibo.com/icecram4k";
            },
        },
    };
</script>
<style lang='less' scoped>
    @import "../../assets/less/Index.less";

    #Footer {
        .wh(@h: 180px);
        position: fixed;
        bottom: 0;

        // background-color: skyblue;
        .FooterContent {
            .wh(61vw);
            margin: auto;
            // background-color: rgba(blue, 0.2);
            display: flex;

            .FooterContentLeft {
                flex: 1;
                .wh();

                span {
                    font-size: 19px;
                    font-weight: bold;
                    background-image: -webkit-linear-gradient(bottom, #34e1ff, #7651ff, #ff3cef);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                ;

                img {
                    width: 4%
                }

                ;

                p {
                    font-size: 13px;
                    background-image: -webkit-linear-gradient(bottom, #797979, #797979, #797979);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;

                    .emailA:hover {
                        color: skyblue !important
                    }

                    ;
                }
            }

            ;

            .FooterContentRight {
                flex: 1;
                .wh();

                p {
                    padding-left: 150px;
                    font-size: 19px;
                    color: #797979;
                }

                ;

                .FooterContentRightD1 {
                    padding: 25px 150px;
                    .wh();

                    img {
                        width: 7%;
                        margin-right: 3vw;
                        cursor:pointer;
                    }
                }

            }

            ;
        }
    }
</style>
<template>
    <div id="Footer">
        <div class="FooterContent">
            <div class="FooterContentLeft">
                    <span @click="pathToElement" class="showText">
                        Element UI
                    </span>
                <img src="../../assets/img/加号.png" alt="">
                <p>
                    Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库,本网页为作者的学习笔记网页,你可以查询到一些关键知识,<br>并且如果发现了一些bug可以发邮件给我进行反馈 hanlong5716@163.com
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Footer',
        methods: {
            pathToElement(){
                window.location.href = 'https://element.eleme.cn/#/zh-CN/component/installation'
            }
        },
    };
</script>
<style lang='less' scoped>
    @import "../../assets/less/Index.less";

    #Footer {
        .wh(@h: 10vh);

        .FooterContent {
            .wh(61vw);
            margin: auto;
            display: flex;

            .FooterContentLeft {
                flex: 1;
                .showText {
                    font-size: 19px;
                    font-weight: bold;
                    background-image: -webkit-linear-gradient(bottom, #34e1ff, #7651ff, #ff3cef);
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    cursor: pointer;
                }

                ;

                img {
                    width: 2%
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

        }
    }
</style>
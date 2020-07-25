<template>
    <div>
        <!-- 顶部导航导航开始 -->
        <mt-navbar v-model="active" v-if='isLogin==false'>
            <mt-tab-item id="html">
                <img src="../../../../../logo/html.png" alt slot="icon" />
            </mt-tab-item>
            <mt-tab-item id="css">
                <img src="../../../../../logo/css.png" alt slot="icon" />
            </mt-tab-item>
            <mt-tab-item id="js">
                <img src="../../../../../logo/javascript.png" alt slot="icon" />
            </mt-tab-item>
        </mt-navbar>
        <!-- 顶部导航导航结束 -->
        <!-- 中部分页栏开始 -->
        <div class="main_div">
            <mt-header title="tabcontainer demo" fixed>
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <router-link to="/button" slot="right">
                    <mt-button icon="more"></mt-button>
                </router-link>
            </mt-header>
            <div class="abcontainer_div01"></div>
            <mt-tab-container v-model="active" swipeable v-if='isLogin==false'>
                <mt-tab-container-item id="html">AAA</mt-tab-container-item>
                <mt-tab-container-item id="css">BBB</mt-tab-container-item>
                <mt-tab-container-item id="js">CCC</mt-tab-container-item>
            </mt-tab-container>
        </div>
        <!-- 中部分页栏结束 -->


        <!-- 单一文章信息开始 -->
        <div class="articleItem">
            <!-- 文章标题开始 -->
            <div class="articleItem-header">
                税后20万程序员的生活
            </div>
            <!-- 文章标题结束 -->
            <!-- 文章图文信息开始 -->
            <div class="articleItem-wrapper">
                <!-- 文章图像开始 -->
                <div class="articleImg">
                    <img src="../../assets/wenzhang.jpeg" alt="">
                </div>
                <!-- 文章图像结束 -->
                <!-- 文章的简介开始 -->
                <div class="articleDes">
                    程序员（英文Programmer）是从事程序开发、程序维护的专业人员。一般将程序员分为程序设计人员和程序编码人员，但两者的界限并不非常清楚。软件从业人员分为初级程序员、中级程序员、高级程序员（现为软件设计师）、系统分析员，系统架构师，测试工程师六大类。
                </div>
                <!-- 文章的简介结束 -->

            </div>
            <!-- 文章图文信息结束 -->
        </div>
        <!-- 单一文章信息结束 -->
        <!-- 底部选项卡 -->
        <mt-tabbar v-model="selectedTab" fixed>
            <mt-tab-item id="home">
                <img src="../../assets/shouye.png" alt slot="icon" v-if="selectedTab == 'home'"  @click=logout() />
                <img src="../../assets/disabled/shouye_disabled.png" alt slot="icon" v-else/>
                首页
            </mt-tab-item>
            <mt-tab-item id="cart">
                <img src="../../assets/gouwuche.png" alt slot="icon" v-if="selectedTab == 'cart'" @click=login() />
                <img src="../../assets/disabled/gouwuche_disabled.png" alt slot="icon" v-else />
                购物车
            </mt-tab-item>
            <mt-tab-item id="me">
                <img src="../../assets/wode.png" alt slot="icon" v-if="selectedTab == 'me'" @click=login() />
                <img src="../../assets/disabled/wode_disabled.png" alt slot="icon" v-else />
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
import Tabbar from "./Tabbar.vue";
export default {
    data(){
        return {
            active: "html",
            selectedTab: "home",
            main_test: "",
            a: "",
            isLogin: false,
        };
        
    },
    methods: {
        login() {
            this.isLogin = true;
        },
        logout() {
            this.isLogin = false;
        }
    }
};
</script>
<style>
.articleItem-wrapper{
    display: flex;
    align-items: center;
    padding-top: 11px;
    width: 100%;
}
.articleItem-header{
    display: flex;
    font-weight: 600;
    font-size: 17px;
    color: #1a1a1a;
    line-height: 22px;
}
.articleImg img{
    width: 112px;
    height: 74px;
    border-radius: 9px;
}
.articleDes{
    height: 65px;
}
.articleItem{
    padding:10px;
    border-bottom:1px solid #999;
}
.abcontainer_div01 {
    height: 80px;
}
</style>
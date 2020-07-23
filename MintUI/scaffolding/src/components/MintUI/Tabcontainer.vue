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
        <!-- 底部选项卡 -->
        <!-- <mt-tabbar v-model="selectedTab" fixed>
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
        </mt-tabbar> -->
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
.abcontainer_div01 {
    height: 80px;
}
</style>
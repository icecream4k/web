<template>
    <div>
        <mt-header title="toast demo" fixed>
            <router-link to='/' slot="left">
                <mt-button icon='back'></mt-button>
            </router-link>
            <router-link to='/button' slot="right">
                <mt-button icon='more'></mt-button>
            </router-link>
        </mt-header>
        <br />
        <br />
        <mt-button @click="simple">简捷方式提示框</mt-button>
        <br />
        <br />
        <br />
        <br />
        <mt-button @click="normal">标准方式提示框</mt-button>
    </div>
</template>
<script>
import "../../assets/font_xsta784tlga/iconfont.css";
export default {
    methods: {
        simple() {
            this.$toast("提示信息");
        },
        normal() {
            this.$toast({
                message: "提示信息",
                position: "top",
                duration: "900",
                iconClass: "iconfont icon-tishi aa"
            });
        }
    }
};
</script>
<style>
/* 给iconClass后面的选择项加一个aa，然后给aa做类选择并且修改样式也可以 */
/* .aa{
    color:red !important;
} */
.mint-toast-icon {
    color: paleturquoise;
    width: 40%;
}
.mint-toast-text {
    font-size: 20px;
}
</style>
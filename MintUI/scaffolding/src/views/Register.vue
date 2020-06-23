<template>
    <div>
        <!-- 头部区域开始 -->
        <mt-header class='register_header' title="有问题，找阿龙" fixed>
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <router-link to="/button" slot="right">
                <mt-button icon="more"></mt-button>
            </router-link>
        </mt-header>
        <!-- 头部区域结束 -->
        <div class="main_01">
            <img src="../assets/logo.png" alt />
        </div>
        <!-- 注册区域开始 -->
        <div class="main_02">
            <mt-field
                type="text"
                label="用户名"
                placeholder="最大长度为10"
                state="success"
                :attr="{maxlength:'10'}"
                
            ></mt-field>

            <mt-field
                type="password"
                label="密码"
                placeholder="请输入密码"
                state="error"
                :attr="{maxlength:'10',autocomplete:'off'}"
               
            ></mt-field>

            <mt-field
                type="password"
                label="确认密码"
                placeholder="请再次输入密码"
                state="warning"
                disableClear
              
            ></mt-field><mt-field></mt-field>
            <mt-button class="main_button" type="primary" size="large" @click="register">免费注册</mt-button>
        </div>
        <!-- 注册区域结束 -->
    </div>
</template>
<style scoped>
.main_button {
    margin-top: 40px;
}
.main_01{
    margin-top: 40px;
}
.main_02{
    margin-top: 40px;

}
.register_header{
    background-color:#35495e;
    color:white
}
</style>
<script>
export default {
    methods:{
        register(){

        }
    }
}
</script>
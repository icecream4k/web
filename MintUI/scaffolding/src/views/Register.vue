<template>
    <div>
        <!-- 头部区域开始 -->
        
        <!-- 头部区域结束 -->
        <div class="main_01">
            <img src="../../../../logo/code.png" alt />
        </div>
        <!-- 注册区域开始 -->
        <div class="main_02">
            <mt-field
                type="text"
                label="用户名"
                placeholder="最大长度为10"
                state="success"
                :attr="{maxlength:'10'}"
                v-model="username"
                @blur.native.capture="register"
            ></mt-field>

            <mt-field
                type="password"
                label="密码"
                placeholder="请输入密码"
                state="error"
                :attr="{maxlength:'12'}"
                v-model="password"
            ></mt-field>

            <mt-field
                type="password"
                label="确认密码"
                placeholder="请再次输入密码"
                state="warning"
                :attr="{maxlength:'12'}"
                disableClear
                v-model="conpassword"
            ></mt-field><mt-field></mt-field>
            <mt-button class="main_button" type="primary" size="large" @click="register">免费注册</mt-button>
        </div>
        <!-- 注册区域结束 -->
        <mt-header class='register_header' title="Test header" fixed>
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <router-link to="/button" slot="right">
                <mt-button icon="more"></mt-button>
            </router-link>
        </mt-header>
    </div>
</template>
<style scoped>
/* .main_button {
    margin-top: 40px;
} */
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
    data(){
        return{
            // verification:0,
            username:'',
            password:'',
            conpassword:'' 
        }
    },
    methods:{
        register(){
            //检测用户用户名的规范 - 用户名长度必须为6-12为之间的字幕,数字以及下划线的组合
            var usernameExp = /^[a-zA-Z0-9_]{6,12}$/
            if(!usernameExp.test(this.username)){
                this.$toast({
                    message:'用户名必须为字母,数字的组合,长度6-12位之间',
                    // position:'top',
                    duration:1000
                });
                
                return false;
            }else{
                console.log('用户名输入规则正确')
            }
            //自定义函数内部如果写上return false;
            // 则会终止自定义函数的执行,如果当前函数检测有误,
            // 下面的函数是不会执行!!!
            var passwordExp = /^[a-zA-Z0-9]{8,12}$/
            if(!passwordExp.test(this.password)){
                this.$toast({
                    message:'密码必须为字母,数字的组合,长度8-12位之间',
                    // position:'top',
                    duration:1000
                });
                
                return false;
            }else{
                console.log('密码输入规则正确')
            }
            var conpasswordExp = /^[a-zA-Z0-9]{8,12}$/
            if(conpasswordExp.test(this.conpasswordExp)&&this.conpassword==this.password){
                console.log('login....')
                // return false;
            }else{
                this.$toast({
                    message:'两次密码输入不一致',
                    duration:1000
                })
                
}
            
        }
    }
}
</script>
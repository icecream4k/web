<template>
    <div>
        <mt-field type='text' 
                label='用户名' 
                placeholder="最大长度为10" 
                state='success' 
                :attr="{maxlength:'10'}"
                v-model="username"></mt-field>

        <mt-field type='password' 
                label='密码' 
                placeholder='请输入密码' 
                state='error'
                :attr="{maxlength:'10',autocomplete:'off'}"
                v-model="password"></mt-field>
                
        <mt-field type='password' 
                label='确认密码' 
                placeholder='请再次输入密码' 
                state='warning'
                disableClear
                v-model="conpassword"></mt-field>
        <mt-button type='primary' size='large' @click="register">
                免费注册
        </mt-button>
    </div>
</template>
<script>
export default {
        data(){
                return{
                        username:'',
                        password:'',
                        conpassword:''
                }
        },
        methods:{
                register(){
                        console.log('用户名>>'+this.username)
                        console.log('密码>>'+this.password)
                        console.log('确认密码>>'+this.conpassword)
                }
        }
}
</script>
<template>
    <div>
        <mt-field type='text' 
                label='用户名' 
                placeholder="最大长度为10" 
                state='success' 
                :attr="{maxlength:'10'}"></mt-field>
        <mt-field type='password' 
                label='密码' 
                placeholder='请输入密码' 
                state='error'
                :attr="{maxlength:'10',autocomplete:'off'}"></mt-field>
        <mt-field type='password' 
                label='确认密码' 
                placeholder='请再次输入密码' 
                state='warning'></mt-field>
    </div>
</template>
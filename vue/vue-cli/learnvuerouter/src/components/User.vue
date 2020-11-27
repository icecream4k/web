<template>
    <div>
        <h2>我是用户界面</h2>
        <p>我是用户的相关嘻嘻,嘿嘿嘿</p>
        <h2>{{userid}}</h2>
        <h2>{{message}}</h2>
    </div>
</template>
<script>
export default {
    name: "user",
    data() {
        return {
            message:'aaaa'
        }
    },
    computed: {
        userID(){
            return this.$router.pararms.userid
        },
        finalMessage(){
            return this.message
        }
    }
};
</script>
<style scoped>
</style>
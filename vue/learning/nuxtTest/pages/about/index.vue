<template>
    <div class="index">
        <h1>about页面</h1>
        <h1>标题:{{ info.title }}</h1>
        <h1>内容:{{ info.desc }}</h1>
        <button @click="routerJump('/news')">跳转到news页面</button>
        <button @click="routerJump('/chart')">跳转到echarts页面</button>
        <nuxt-link :to="{ name: 'index' }">回首123页</nuxt-link>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: "index",
    data() {
        return {
            getValue: null
        };
    },
    transition: "about",
    asyncData(ctx) {
        return axios({
            methods: "get",
            url: "/tempData.js"
        })
            .then(res => {
                console.log(res);
                return { info: res.data.data };
            })
            .catch(err => {
                console.log("请求错误信息:", err.response);
                ctx.error({
                    statusCode: err.response.status,
                    message: err.response.statusText
                });
            });
    },
    head() {
        return {
            title: this.info.msg
        };
    },
    methods: {
        routerJump(url) {
            this.$router.push(url);
        }
    }
};
</script>
<style lang="less" scoped></style>

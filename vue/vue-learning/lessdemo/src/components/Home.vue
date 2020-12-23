<template>
    <div>
        <h1 class="home_title">Less</h1>
        <div class="home_d">
            <router-link to='FirstAcquaintanceLess' tag="button">初识Less</router-link>
            <router-link to="Variable" tag="button">变量</router-link>
            <router-link to="DelayedLoadingOfVariables" tag="button">变量的延迟加载</router-link>
            <router-link to="NestedRules" tag="button">嵌套规则</router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Home'
    };
</script>
<style lang='less'>
    .home_title {
        text-align: center;
        color: #1e365d;
    }

    .home_d {
        position: absolute;
        left: 50%;
        top: 15%;
        margin-top: -50px;
        margin-left: -175px;
    }
</style>
<template>
    <div>
        <div class="main">
            <p v-for="(v,k) in 100" :key='k'>{{v}}</p>
        </div>
        
        <mt-tabbar v-model="selectedTab" fixed>
            <mt-tab-item id="home">
                <img src="../../assets/shouye.png" alt slot="icon" />
                首页
            </mt-tab-item>
            <mt-tab-item id="cart">
                <img src="../../assets/gouwuche.png" alt slot="icon" />
                购物车
            </mt-tab-item>
            <mt-tab-item id="me">
                <img src="../../assets/wode.png" alt slot="icon" />
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<style scoped>
    .main{
        margin-bottom: 55px;
    }
</style>
<script>
export default {
    data(){
        return{
            selectedTab:'home'//设定默认选择的标签
        }
    }
}
</script>


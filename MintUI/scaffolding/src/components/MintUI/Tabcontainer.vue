<template>
    
    <div>
        <!-- 顶部导航导航开始 -->
        <mt-navbar v-model='active'>
            <mt-tab-item id="html">
                <img src="../../../../../logo/html.png" alt=""  slot='icon'>
            </mt-tab-item>
            <mt-tab-item id="css"> 
                <img src="../../../../../logo/css.png" alt="" slot="icon">
            </mt-tab-item>
            <mt-tab-item id="js">
                <img src="../../../../../logo/javascript.png" alt="" slot="icon">
            </mt-tab-item>
        </mt-navbar>
        <!-- 顶部导航导航结束 -->
        <mt-header title="tabcontainer demo" fixed>
            <router-link to='/' slot="left">
                <mt-button icon='back'></mt-button>
            </router-link>
            <router-link to='/button' slot="right">
                <mt-button icon='more'></mt-button>
            </router-link>
        </mt-header>
        <div class='abcontainer_div01'></div>
        <mt-tab-container v-model="active" swipeable>
            <mt-tab-container-item id="html">
                AAA
            </mt-tab-container-item>
            <mt-tab-container-item id="css">
                BBB
            </mt-tab-container-item>
            <mt-tab-container-item id="js">
                CCC
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
export default {
    data(){
        return{
            active:'html'
        }
    }
}
</script>
<style>
    .abcontainer_div01{
        height: 80px;
    }
</style>
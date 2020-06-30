<template>
    <div>
        <mt-header title="button demo" fixed>
            <router-link to='/' slot="left">
                <mt-button icon='back'></mt-button>
            </router-link>
            <router-link to='/button' slot="right">
                <mt-button icon='more'></mt-button>
            </router-link>
        </mt-header>
        <div class='navbar_div01'></div>
        <p>当前选中>>>{{active}}</p>
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
    .navbar_div01{
        height: 80px;
    }
</style>
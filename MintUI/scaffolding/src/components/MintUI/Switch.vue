<template>
    <div>
        <mt-header title="switch demo" fixed>
            <router-link to='/' slot="left">
                <mt-button icon='back'></mt-button>
            </router-link>
            <router-link to='/button' slot="right">
                <mt-button icon='more'></mt-button>
            </router-link>
        </mt-header>
        <div class='switch_div01'></div>

        <mt-switch v-model="network">
            局域网
        </mt-switch>
    </div>
</template>
<script>
export default {
    data(){
        return{
            network:true
        }
    }
}
</script>
<style>
    .switch_div01{
        height: 80px;
    }
</style>
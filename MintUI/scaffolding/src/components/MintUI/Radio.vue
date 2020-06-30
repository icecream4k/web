<template>
    <div>
        <mt-header title="radio demo" fixed>
            <router-link to='/' slot="left">
                <mt-button icon='back'></mt-button>
            </router-link>
            <router-link to='/button' slot="right">
                <mt-button icon='more'></mt-button>
            </router-link>
        </mt-header>
        <div class='checklist_div'></div>
        <p>{{sex}}</p>
        <mt-radio title='性别'
                    :options="options"
                    v-model='sex'
                    align='right'
                    ></mt-radio>
    </div>
</template>
<script>
export default {
    data(){
        return{
            sex:'',
            options:[
                {
                    label:'男',
                    value:'man'
                },
                {
                    label:'女',
                    value:'woman'
                }
            ]
        }
    }
}
</script>
<style scoped>
    .checklist_div{
    height: 80px;
}
</style>
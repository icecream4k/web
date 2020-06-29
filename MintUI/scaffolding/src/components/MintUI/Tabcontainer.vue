<template>
    <div>
        <mt-tab-container v-model="tab">
            <mt-tab-container-item>
                AAA
            </mt-tab-container-item>
            <mt-tab-container-item>
                BBB
            </mt-tab-container-item>
            <mt-tab-container-item>
                CCC
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tab:''
        }
    }
}
</script>
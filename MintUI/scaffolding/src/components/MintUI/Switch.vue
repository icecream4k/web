<template>
    <div>
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
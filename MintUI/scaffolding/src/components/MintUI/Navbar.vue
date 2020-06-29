<template>
    <div>
        <p>{{active}}</p>
        <mt-navbar fixed v-model='active'>
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
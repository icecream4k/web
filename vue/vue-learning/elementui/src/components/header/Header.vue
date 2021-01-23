<template>
    <div class="Header">
        <div class="HeaderDisplay">
            <div class="HeaderContentLeft"></div>
            <div class="HeaderContentMiddle"></div>
            <div class="HeaderContentRight"></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Header'
    };
</script>
<style lang='less'>
.Header{
    width: 100%;
    height: 100%;
    .HeaderDisplay{
        display: flex;
        .HeaderContentLeft{
            flex: 1;
            width: 100%;
            height: 100%;
            background-color: #fff;
        };
        .HeaderContentMiddle{
            flex: 1;
            width: 100%;
            height: 100%;
            background-color: #fff;
        };
        .HeaderContentRight{
            flex: 1;
            width: 100%;
            height: 100%;
            background-color: #fff;
        };
    }
}
    
</style>
<template>
    <div>
        <dv-full-screen-container class="max_div">
            <router-link to="/home" tag="button">首页</router-link
            >
        </dv-full-screen-container>
    </div>
</template>
<script>
export default {
    name: "Full_screen_container",
};
</script>
<style>
.max_div {
    background-color: skyblue;
}
</style>
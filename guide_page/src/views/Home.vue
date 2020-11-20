<template>
    <div class="home">
        <img class="home_img"
            alt="Vue logo"
            src="../assets/Front_end_development.png"
            style=""
        />
        <HelloWorld msg="Welcome to HanLong Index" />
    </div>
</template>

<style scoped>
    .home_img{
        width: 10%;
    }
</style>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "Home",
    components: {
        HelloWorld,
    },
};
</script>

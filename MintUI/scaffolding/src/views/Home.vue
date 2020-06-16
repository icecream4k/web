<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>我的第一个VUE程序</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

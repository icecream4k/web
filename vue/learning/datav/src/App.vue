<template>
  <div id="app">
      <div class="view_d">
        <router-link to=""></router-link>
        <router-view/>

      </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
.background_box{
    height: 350px;
    background-color: #282d33;
    padding: 20px;
}
div{
    border-radius: 5px;
}
.view_d{
    margin: 0 auto;
}
</style>

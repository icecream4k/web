<template>
    <div class="Example">
      <h2>实例</h2>
    </div>
</template>
<script>
    export default {
        name: 'Example',
        methods: {
          getValue(){
            console.log('haha');
          }
        },
        mounted() {
          this.getValue()
        },
    };
</script>
<style lang='less'>
  .Example{
    height: 338px;
    width: 431px;
    background-color: deepskyblue;
  }
</style>
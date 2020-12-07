<template>
  <div id="app">
      <h2>------------APP内容------------</h2>
      <h2>{{$store.state.conter}}</h2>
      <button @click="addition">+</button>
      <button @click="subtraction">-</button>
      <h2>------------Vuex内容------------</h2>
      <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
export default {
  name: 'App',
  data() {
      return {
          message:'我是app组件',
      }
  },
  components:{
      HelloVuex
  },
  methods: {
      addition(){
          this.$store.commit('increment')
      },
      subtraction(){
          this.$store.commit('decrement')
      }
  },
}
</script>

<style>

</style>

<template>
  <div id="app">
  <yr-index></yr-index>
 
  </div>
</template>

<script>
import Index from '@/components/index/Index'
export default {
  name: 'App',
  components:{yrIndex:Index}
}
</script>

<style>
@import "../src/assets/common.css";
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

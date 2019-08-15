<template>
  <div id="app">
    <keep-alive><yr-index></yr-index></keep-alive>
  </div>
</template>

<script>
import Index from '@/components/index/Index'


export default {
  name: 'App',

  components:{yrIndex:Index},
  data(){
    return {
     
    }
  },
   mounted(){
 
   },
 
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
body{padding-right:0!important;}
html,
body {
  height: 100%;
  /* padding-right:0!important; */
}
body {
  font-family: PingFang SC;
  font-size: 14px;
}
#app {
  height: 100%;
}
</style>

<template>
  <div id="app">
   <keep-alive> <yr-index ></yr-index></keep-alive>
  
  </div>
</template>

<script>

import Index from "@/components/index/Index";
import store from "./store/index"
export default {
  name: "App",

  components: { yrIndex: Index },
  data() {
    return {
       
    };
  },
   methods:{
  
   }
};


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
body {
  padding-right: 0 !important;
}
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
/* 使用伪类选择器 ::-webkit-scrollbar ,兼容chrome和safari浏览器 */
body::-webkit-scrollbar {
  width: 0 !important; /* remove scrollbar space */
  background: transparent; /* optional: just make scrollbar invisible */
}

/* 兼容IE10+ */
body {
  -ms-overflow-style: none;
}

</style>

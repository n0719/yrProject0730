<template>
  <div class="userContent">
    <keep-alive>
      <router-view name="abc"></router-view>
    </keep-alive>

    <!-- <router-view v-if="isRouterAlive" name="Recharge"></router-view> -->
  </div>
</template>
<script>
export default {
  provide() {
    return {

    };
  },
  name: "userContent",
  data() {
    return {
   
    };
  },
  mounted() {},
  methods: {
 
  }
};
</script>
<style >
.userContent {
  background: #e9f1f9;
  height: 100%;

  /* box-sizing: border-box;  
 */
}
</style>



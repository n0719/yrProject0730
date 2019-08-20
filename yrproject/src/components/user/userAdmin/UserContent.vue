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
  name: "userContent",
  // provide() {
  //   return {
  //     reload: this.reload
  //   }
  // },
  data() {
    return {
      //  isRouterAlive:true
    };
  },
  mounted() {}
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



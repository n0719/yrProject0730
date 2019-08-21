<template>
  <div class="userContent">
    <keep-alive>
      <router-view name="abc" v-if="isRouterAlive"></router-view>
    </keep-alive>

    <!-- <router-view v-if="isRouterAlive" name="Recharge"></router-view> -->
  </div>
</template>
<script>
export default {
  provide() {
    return {
      reload: this.reload
    };
  },
  name: "userContent",
  data() {
    return {
      isRouterAlive: true
    };
  },
  mounted() {},
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
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



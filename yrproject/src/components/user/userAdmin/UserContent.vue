<template>
  <div class="userContent">
    <router-view></router-view>
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
  data(){
    return {
      //  isRouterAlive:true
    }
  },
  //  methods:{
  //   reload(){
  //     this.isRouterAlive=false
  //     this.$nextTick(function(){
  //       this.isRouterAlive=true
  //     })
  //   }
  // }
};
</script>
<style >
.userContent {
  background: #e9f1f9;
  height: 100%;
  box-sizing: border-box;
}
</style>



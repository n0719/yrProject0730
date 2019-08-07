<template>
  <div>sssss</div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["regRule"])
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.regRule.Public.login.password.validation);
   
     var str = "regex:/^[a-zA-Z0-9_-]{3,16}$/i";
       var str1 = "regex:/^[a-zA-Z0-9_-]{3,20}$/i";
    // console.log($getCaption(str));
    console.log(this.getReg.getReg(str1));
  }
};
</script>
<style>
</style>


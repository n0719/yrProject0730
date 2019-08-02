<template>
  <div>
    <a @click="loginModel">登录</a>
    <a @click="userModel">用户中心</a>
     
    <transition name="fade">
      <yr-login v-if="loginSHow"></yr-login>
    </transition>
    <transition name="fade">
      <yr-user v-if="userShow">
      </yr-user>
          </transition>
     
  </div>
</template>
<script>
import { mapState } from "vuex";
import Login from "@/components/user/login/Login";
import User from "@/components/user/User";
export default {
  computed: {
    ...mapState(["umodelShow", "lmodelShow"])
  },
  name: "login",
  
  data() {
    return {
      loginSHow: "",
      userShow: "",
      
    };
  },

  methods: {
    loginModel() {
      this.$store.commit("lmodelShow", true);
      this.userShow = false;
      this.loginSHow = !this.loginShow;
    },
    userModel() {
      //  this.loginSHow=this.lmodelShow;
      //  this.userShow=!this.userShow;
      this.$store.commit("umodelShow", true);
      this.userShow = !this.userShow;
      this.loginSHow = false;
    },
   
  },

  watch: {
    umodelShow(newName, oldName) {
      if (oldName == true) {
        this.userShow = false;
      }
    },
    lmodelShow(newName, oldName) {
      if (oldName == true) {
        this.loginSHow = false;
      }
    }
  },
  components: {
    yrLogin: Login,
    yrUser: User
  }
};
</script>
<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>



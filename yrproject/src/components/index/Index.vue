<template>
  <div class="index" :style="{backgroundImage: 'url(' +indexBg+')'}">
    <div class="indexTop">
      <div class="topNav">
        <div class="logo">
          <img src="../../assets/index/indexLogo.png" alt />
        </div>
        <!-- <el-menu
          :default-active="activeIndex2"
          class="el-index"
          mode="horizontal"
          @select="handleSelect"
          background-color="transparent"
          text-color="#E6CF68"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">优惠</el-menu-item>
          <el-menu-item index="3">充值</el-menu-item>
          <el-menu-item index="4">客服</el-menu-item>
          <el-menu-item index="5">管理</el-menu-item>
          <el-menu-item index="6">登录</el-menu-item>
          <el-menu-item index="6">会员中心</el-menu-item>
        </el-menu> -->
        <div class="indexNav">
            <router-link to="/main">首页</router-link>
            <router-link to="/discount">优惠</router-link>
            <router-link to="">充值</router-link>
            <router-link to="">客服</router-link>
            <router-link to="">管理</router-link>
        </div>
        <ul class="indexLogin">
          <li>
            <a @click="loginModel">登录</a>
          </li>
          <li>
            <a @click="userModel">会员中心</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="indexMain">
      <!-- <img src="../../assets/index/indexBg.png" alt=""> -->
        <router-view name="indexView"></router-view>
    </div>
       <transition name="fade">
        <yr-login v-if="loginSHow"></yr-login>
      </transition>
      <transition name="fade">
        <yr-user v-if="userShow"></yr-user>
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
      indexBg: require("../../assets/index/indexBg.png"),
      activeIndex: "1",
      activeIndex2: "1"
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
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
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
.index {
  width: 100%;
  height: 100%;
}
.indexMain {
}
.indexTop {
  background: #364150;
  height:90px;
 display:flex;align-items: center;
}
.indexTop .topNav {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;

}
.logo{margin-right:64px;}
.index .el-menu.el-menu--horizontal{border:none;}
.indexLogin{flex:1;display: flex;justify-content: flex-end;}
.indexLogin li{float:left;padding-left:40px;}
/*  */
.indexNav{display:flex;align-items: center;}
.indexNav a{width:120px;height:42px;color:#E6CF68;text-align: center;line-height:42px;}
</style>



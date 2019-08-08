<template>
  <div
    class="index"
    :style="{backgroundImage: 'url(' +indexBg+')'}"
    style="background-image: url(/static/img/indexBg.745c671.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;"
  >
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
        </el-menu>-->
        <div class="indexNav">
          <a
            v-for="(item,index) in navA"
            :key="index"
            :class="active==index?'navABg':''"
            @click="viewToggle(index)"
          >{{item}}</a>
          <!-- <a>优惠</a>
          <a>充值</a>
          <a>客服</a>
          <a>管理</a>-->
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
      <transition name="fade">
        <yr-main v-if="active==0?true:false"></yr-main>
      </transition>
      <transition name="fade">
        <yr-discount v-if="active==1?true:false"></yr-discount>
      </transition>
      <!-- <img src="../../assets/index/indexBg.png" alt=""> -->
      <!-- <router-view name="indexView"></router-view> -->
      <transition name="fade">
        <yr-login v-if="loginSHow"></yr-login>
      </transition>
      <transition name="fade">
        <yr-user v-if="userShow"></yr-user>
      </transition>
    </div>
    <div class="indexBottom"></div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Login from "@/components/user/login/Login";
import User from "@/components/user/User";
import Main from "@/components/index/index/Main";
import Discount from "@/components/index/index/Discount";
import axios from 'axios'; // 引入axios
export default {
  computed: {
    ...mapState(["umodelShow", "lmodelShow"])
  },
  name: "login",

  data() {
    return {
      active: -1,
      loginSHow: "",
      userShow: "",
      indexBg: require("../../assets/index/indexBg.png"),
      activeIndex: "1",
      activeIndex2: "1",
      mainShow: true,
      discountShow: false,
      navA: ["首页", "优惠", "充值", "客服", "管理"]
    };
  },
  mounted() {
    this.active = 0;
    this.getRule();
  },
  methods: {
   
    getRule(){
       var that = this;
      axios.post('http://a1.w20.vip/Api/ApiDoc/requestRule', {
        versionName: 'MemberAppV001',
      })
      .then(function (response) {
        that.$store.commit("regRule", response.data.data);
        var data1=response.data.data
        let getRulesData=JSON.stringify(data1);
         that.$store.commit("getRules", getRulesData);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    loginModel() {
      this.$store.commit("lmodelShow", true);
      this.userShow = false;
      this.loginSHow = !this.loginShow;
      this.$router.push({
        path: "/myPAy"
      });
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
    },
    viewToggle(index) {
      this.active = index;
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
      }else{
         this.loginSHow = true;
      }
    }
  },
  components: {
    yrLogin: Login,
    yrUser: User,
    yrMain: Main,
    yrDiscount: Discount
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
  min-height: 1100px;
}
.indexTop {
  background: #364150;
  height: 90px;
  display: flex;
  align-items: center;
}
.indexTop .topNav {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  font-size: 18px;
}
.logo {
  margin-right: 64px;
}
.index .el-menu.el-menu--horizontal {
  border: none;
}
.indexLogin {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.indexLogin li {
  float: left;
  padding-left: 40px;
}
.indexLogin li a {
  cursor: pointer;
  color: #e6cf68;
}
.indexNav a.navABg {
  background: #6c6c57;
  color: #e6cf68;
}
/*  */
.indexNav {
  display: flex;
  align-items: center;
}
.indexNav a {
  width: 120px;
  height: 42px;
  color: #e6cf68;
  text-align: center;
  line-height: 42px;
  cursor: pointer;
}
.indexBottom {
  background: #364150;
  height: 140px;
}
</style>



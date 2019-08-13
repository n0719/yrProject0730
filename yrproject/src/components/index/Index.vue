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
            <a @click="loginModel" v-if="this.$store.state.uname=='游客'?true:false">登录</a>
            <a v-else>
              {{this.$store.state.uname}}
              <span @click="closeUser">[退出]</span>
            </a>
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
        <yr-live v-if="active==1?true:false"></yr-live>
      </transition>
      <transition name="fade">
        <yr-lottory v-if="active==2?true:false"></yr-lottory>
      </transition>
      <transition name="fade">
        <yr-egames v-if="active==3?true:false"></yr-egames>
      </transition>
      <transition name="fade">
        <yr-exports v-if="active==4?true:false"></yr-exports>
      </transition>
      <transition name="fade">
        <yr-poker v-if="active==5?true:false"></yr-poker>
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
    <el-dialog title="" :visible.sync="dialogVisible" width="30%" @click="dialogVisible = false" class="indexDialog">
      <img :src="dialogContent.image" alt="">
      <div class="dialogBottom">
        <div class="logContent mg-b-10">{{dialogContent.content}}</div>
      <div class="text-right mg-b-10">{{dialogContent.author}}</div>
      <div class="text-right">{{dialogContent.created_at}}</div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Login from "@/components/user/login/Login";
import User from "@/components/user/User";
import Main from "@/components/index/index/Main";
import Discount from "@/components/index/index/Discount";
import Live from "@/components/index/index/Live";
import Lottory from "@/components/index/index/Lottory";
import Egames from "@/components/index/index/Egames";
import Exports from "@/components/index/index/Exports";
import Poker from "@/components/index/index/Poker";
import axios from "axios"; // 引入axios
export default {
  computed: {
    ...mapState(["umodelShow", "lmodelShow"])
  },
  name: "login",
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
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
      dialogVisible: false,
      dialogContent:{},
      navA: [
        "首页",
        "真人视讯",
        "彩票游戏",
        "电子游艺",
        "体育游戏",
        "棋牌游戏",
        "优惠",
        "客服"
      ]
    };
  },
  mounted() {
    this.active = 0;
    this.getRule();
    this.getDataDictionaries();
    this.getCommon();
    this.getGeme();
    this.getDialog();
    if (localStorage.getItem("token") != null) {
    }
  },
  methods: {
    getRule() {
      var that = this;
      axios
        .post("http://a1.w20.vip/Api/ApiDoc/requestRule", {
          versionName: "MemberAppV001"
        })
        .then(function(response) {
          that.$store.commit("regRule", response.data.data);
          // var data1 = response.data.data;
          // let getRulesData = JSON.stringify(data1);
          // that.$store.commit("getRules", getRulesData);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getDialog() {
      //获取弹框内容
      var that = this;
      this.post(this.apiUrl.apiDialogs, {}).then(res => {
        if (res.code == 0) {
          console.log(res);
          that.dialogVisible = true;
          that.dialogContent = res.data;
        }
      });
    },
    loginModel() {
      this.$store.commit("lmodelShow", true);
      this.userShow = false;
      this.loginSHow = !this.loginShow;
      this.$router.push({
        path: "/myPAy"
      });
      this.noScroll();
    },
    userModel() {
  
      var that = this;

      if (localStorage.getItem("token") != null) {
        this.$store.commit("umodelShow", true);
        this.userShow = !this.userShow;
        this.loginSHow = false;
        this.noScroll();
    
      } else {
        this.$confirm("用户登录需登录后才可以访问", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            that.$store.commit("lmodelShow", true);
            that.userShow = false;
            that.loginSHow = !this.loginShow;
            that.$router.push({
              path: "/myPay"
            });
          })
          .catch(() => {});
      }
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    viewToggle(index) {
      this.active = index;
    },
    closeUser() {
      this.$confirm("确认退出当前登录用户吗？", "提示", {})
        .then(() => {
          this.$store.commit("uname", "游客");
          localStorage.removeItem("token");
         
        })
        .catch(() => {});
    },
      getDataDictionaries() {
      //获取数据字典
      this.post(this.apiUrl.apiDataDataDictionaries).then(res => {
        var data = res.data;
        this.$store.commit("dictionariesData", data);
      });
    },
    getCommon() {
      //获取游戏列表
      this.post(this.apiUrl.apiMultiple, {
        apiArr: "banners|homeGame|notice"
      }).then(res => {
        if (res.code == 0) {
          var data = res.data;
          this.$store.commit("noticeList", res.data.notice.items);
          this.$store.commit("bannerList", res.data.banners.site_banners);
          this.$store.commit("gameList", res.data.homeGame.lines);
        }
      });
    },
    getGeme() {
      //获取单线游戏列表
      this.post(this.apiUrl.apiElectronic, {
        game_line_id: 2
      }).then(res => {
        if (res.code == 0) {
          this.$store.commit("lineList", res.data);
        }
      });
    }
  },

  watch: {
    umodelShow(newName, oldName) {
      if (oldName == true) {
        this.userShow = false;
        this.canScroll();
      } else {
        this.userShow = true;
        this.canScroll();
      }
    },
    lmodelShow(newName, oldName) {
      if (oldName == true) {
        this.loginSHow = false;
        this.canScroll();
      } else {
        this.loginSHow = true;
      }
    }
  },
  components: {
    yrLogin: Login,
    yrUser: User,
    yrMain: Main,
    yrDiscount: Discount,
    yrLive: Live,
    yrLottory: Lottory,
    yrEgames: Egames,
    yrExports: Exports,
    yrPoker: Poker
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
  font-size: 15px;
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
  padding-left: 35px;
}
.indexLogin li a {
  cursor: pointer;
  color: #e6cf68;
  display: flex;
  align-items: center;
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
  width: 100px;
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
.indexLogin li a span {
  font-size: 12px;
  color: #999;
}
.indexDialog .el-dialog__body{
  color: #836426;
  padding: 0;
}
.indexDialog .dialogBottom{
  padding: 20px;
}
.indexDialog img{
  width: 100%;
}
.indexDialog .el-dialog__headerbtn{
  top: 1px;
    right: 7px;
    font-size: 25px;
}
@media screen and (max-width: 1450px) {
  .indexTop .topNav {
    font-size: 16px;
  }
  .indexNav a {
    width: 100px;
  }
}
</style>



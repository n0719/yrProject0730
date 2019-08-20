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
          <img :src="webLogo" alt />
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
            @click="viewToggle(index,item.id)"
          >{{item.name}}</a>
          <!-- <a>优惠</a>
          <a>充值</a>
          <a>客服</a>
          <a>管理</a>-->
        </div>
        <ul class="indexLogin">
          <li v-if="this.$store.state.uname=='游客'?true:false">
            <a @click="loginModel">登录</a>
            <!-- <a >
              {{this.$store.state.uname}}
            
            </a>-->
          </li>
          <li v-else class="flex-box">
            <a @click="userModel">会员中心</a>
            <span @click="closeUser">[退出]</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="indexMain">
      <keep-alive>
        <yr-main v-if="active==0?true:false"></yr-main>
      </keep-alive>
      <keep-alive>
        <yr-lottory v-if="activeName==1?true:false" :gameId="activeName"></yr-lottory>
      </keep-alive>
      <keep-alive>
        <yr-live v-if="activeName==2?true:false" :gameId="activeName"></yr-live>
      </keep-alive>
      <keep-alive>
        <yr-egames v-if="activeName==4?true:false" :gameId="activeName"></yr-egames>
      </keep-alive>
      <keep-alive>
        <yr-exports v-if="activeName==5?true:false" :gameId="activeName"></yr-exports>
      </keep-alive>
      <keep-alive>
        <yr-poker v-if="activeName==3?true:false"></yr-poker>
      </keep-alive>
      <keep-alive>
        <yr-activity v-if="activeName=='优惠活动'?true:false"></yr-activity>
      </keep-alive>
      <yr-service v-if="activeName=='在线客服'?true:false"></yr-service>
      <keep-alive>
        <yr-login v-if="loginSHow"></yr-login>
      </keep-alive>
      <keep-alive>
        <transition name="fade">
          <yr-user v-if="userShow"></yr-user>
        </transition>
      </keep-alive>
    </div>
    <div class="indexBottom"></div>
    <el-dialog
      title
      :visible.sync="dialogVisible"
      width="500px"
      @click="dialogVisible = false"
      class="indexDialog"
    >
      <img :src="dialogContent.image" alt />
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
import Service from "@/components/index/index/Service";
import Live from "@/components/index/index/Live";
import Lottory from "@/components/index/index/Lottory";
import Egames from "@/components/index/index/Egames";
import Exports from "@/components/index/index/Exports";
import Poker from "@/components/index/index/Poker";
import Activity from "@/components/index/index/Activity";
import axios from "axios"; // 引入axios
export default {
  computed: {
    ...mapState(["umodelShow", "lmodelShow", "refreshUser"])
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
      activeName: "首页",
      loginSHow: "",
      userShow: "",
      indexBg: require("../../assets/index/indexBg.png"),
      activeIndex: "1",
      activeIndex2: "1",
      mainShow: true,
      dialogVisible: false,
      dialogContent: {},
      navA: [
        {
          id: "首页",
          name: "首页"
        },
        {
          id: "优惠活动",
          name: "优惠活动"
        },
        {
          id: "在线客服",
          name: "在线客服"
        }
      ],
      webLogo: "",
      tit: ""
    };
  },
  mounted() {
    this.active = 0;
    this.getRule();
    this.getDataDictionaries();
    this.getCommon();
    this.getGeme();
    let isLogin = localStorage.getItem("token");

    if (isLogin) {
      this.getInfo();
    }
  },
  methods: {
    getRule() {
      var that = this;
      axios
        .post("http://m1.w20.vip/Api/ApiDoc/requestRule", {
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
    loginModel() {
      this.$store.commit("lmodelShow", true);
      this.userShow = false;
      this.loginSHow = !this.loginShow;

      this.noScroll();
    },
    userModel() {
      var that = this;

      this.$router.push({
        path: "/myPay"
      });
      this.getInfo();
      this.$store.commit("umodelShow", true);
      this.userShow = !this.userShow;
      this.loginSHow = false;
      this.noScroll();
      // let isLogin = localStorage.getItem("token");
      // if (isLogin) {

      // } else {
      //   this.$confirm("用户登录需登录后才可以访问", "提示", {
      //     confirmButtonText: "确定",
      //     cancelButtonText: "取消",
      //     type: "warning"
      //   })
      //     .then(() => {
      //       that.$store.commit("lmodelShow", true);
      //       that.userShow = false;
      //       that.loginSHow = !this.loginShow;
      //       that.$router.push({
      //         path: "/myPay"
      //       });
      //     })
      //     .catch(() => {});
      // }
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    viewToggle(index, name) {
      this.active = index;
      this.activeName = name;
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
      var that = this;
      //获取数据字典
      this.post(this.apiUrl.apiDataDataDictionaries).then(res => {
        var data = res.data;
        this.$store.commit("dictionariesData", data);
        that.webLogo = data.website.m_site_logo;
        let link =
          document.querySelector("link[rel*='icon']") ||
          document.createElement("link");
        link.type = "image/x-icon";
        link.rel = "shortcut icon";
        link.href = data.website.favicon;
        document.getElementsByTagName("head")[0].appendChild(link);
         window.document.title = data.website.site_title
        
      });
    },
    getInfo() {
      //获取个人数据信息
      var that = this;
      this.post(this.apiUrl.apiGetInfo).then(res => {
        var data = res.data;
        // console.log(data)
        this.$store.commit("infoData", data);
      });
    },
    getCommon() {
      var that = this;
      //获取游戏列表
      this.post(this.apiUrl.apiMultiple, {
        apiArr: "banners|homeGame|notice|dialog"
      }).then(res => {
        if (res.code == 0) {
          var data = res.data;
          this.$store.commit("noticeList", data.notice.items);
          this.$store.commit("bannerList", data.banners.site_banners);
          this.$store.commit("gameList", data.homeGame.lines);
          var gameName = res.data.homeGame.lines;
          var navInit = 1;
          if (gameName && gameName.length > 0) {
            for (var i = 0; i < gameName.length; i++) {
              var item = {
                id: gameName[i].id,
                name: gameName[i].name
              };
              that.navA.splice(navInit++, 0, item);
            }
          }
          if (res.data.dialog) {
            that.dialogVisible = true;
            that.dialogContent = res.data.dialog;
          }
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
        this.noScroll();
      }
    },
    lmodelShow(newName, oldName) {
      if (oldName == true) {
        this.loginSHow = false;
        this.canScroll();
      } else {
        this.loginSHow = true;
      }
    },
    refreshUser(newName, oldName) {
      if (newName == true) {
        this.getInfo();
        this.$store.commit("refreshUser", false);
      } else {
      }
    }
  },
  components: {
    yrLogin: Login,
    yrUser: User,
    yrMain: Main,
    yrService: Service,
    yrLive: Live,
    yrLottory: Lottory,
    yrEgames: Egames,
    yrExports: Exports,
    yrPoker: Poker,
    yrActivity: Activity
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
  min-height: 1070px;
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
  justify-content: space-between;
  padding: 0 10px;
}
.index .logo {
  margin-right: 64px;
  width: 300px;
  font-size: 0;
}
.index .logo img {
  width: 100%;
}
.index .el-menu.el-menu--horizontal {
  border: none;
}
.indexLogin {
  cursor: pointer;
  /* flex: 1;
    display: flex;
    justify-content: flex-end; */
}

.indexLogin li {
  padding-left: 15px;
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
  width: 90px;
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
.indexDialog .el-dialog__body {
  color: #836426;
  padding: 0;
}
.indexDialog .dialogBottom {
  padding: 20px;
}
.indexDialog img {
  width: 100%;
}
.indexDialog .el-dialog__headerbtn {
  top: 1px;
  right: 7px;
  font-size: 25px;
}

@media screen and (max-width: 1450px) {
  .indexTop .topNav {
    font-size: 14px;
  }
  .indexNav a {
    width: 100px;
  }
  .indexTop {
    height: 60px;
  }
}
</style>



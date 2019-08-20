<template>
  <!-- 真人视讯 -->
  <div class="liveBox">
    <img :src="list.image" alt class="topImg" />
    <div class="container">
      <el-row v-if="noticeList.length>0" class="flex-box mg-b-20">
        <div class="noticeTitle">
          <img src="../../../assets/index/notice.png" alt /> 传奇咨询
        </div>
        <el-carousel
          height="16px"
          direction="vertical"
          :autoplay="true"
          @click.native="noticeDetail"
        >
          <el-carousel-item v-for="(item,index) in noticeList" :key="index">
            <h3 class="medium">{{item.title}}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-row>
      <el-row class="middleBox" type="flex" justify="space-between">
        <el-col :span="7" v-for="item in list.child" :key="item.game_line_id" class="itemGame">
          <img :src="item.pc_image" alt class="itemImg" />
          <div class="itemTitle font-bold">
            <h2>{{item.display_name}}</h2>
            <div class="locked" @click="intoGame(item)">进入游戏</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-dialog title="额度转换" :visible.sync="dialogFormVisible" width="450px" center>
      <el-form>
        <el-form-item :label="gameName+'余额：'" :label-width="formLabelWidth">
          <el-input v-model="gameBalance" readonly></el-input>
        </el-form-item>
        <el-form-item label="主账号余额：" :label-width="formLabelWidth">
          <el-input v-model="accountBalance" readonly></el-input>
        </el-form-item>
        <el-form-item :label="'转入'+gameName+'：'" :label-width="formLabelWidth">
          <el-input v-model.number="transferNum" type="number"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="transferIn">转换并进入</el-button>
        <el-button @click="goIn">直接进入</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["gameList", "noticeList"])
  },
  props: ["gameId"],
  data() {
    return {
      list: [],
      clientUrl: "",
      dialogFormVisible: false,
      formLabelWidth: "140px",
      gameBalance: "",
      accountBalance: "",
      transferNum: "",
      gameData: "",
      gameName: "",
      gameLineId: ""
    };
  },
  mounted() {
    if (this.gameList != "") {
      for (var i = 0; i < this.gameList.length; i++) {
        if (this.gameList[i].id == this.gameId) {
          this.list = this.gameList[i];
        }
      }
    }
  },
  methods: {
    noticeDetail() {
      this.$store.commit("umodelShow", true);
      this.$router.push({
        path: "/webNotice"
      });
    },
    intoGame(item) {
      if (localStorage.getItem("token")) {
        this.gameLineId = item.game_line_id;
        this.post(this.apiUrl.apiGamePlay, {
          line_id: this.gameLineId,
          device: 1,
          game_id: "live"
        }).then(res => {
          if (res.code == 0) {
            this.clientUrl = res.data.client_url;
            this.getGameBalance();
          }
        });
      } else {
        this.$confirm("您还没有登录,无法进入游戏，前往登录账号", "提示", {})
          .then(() => {
            this.$store.commit("umodelShow", false);
            this.$store.commit("lmodelShow", true);
          })
          .catch(() => {});
      }
    },
    getGameBalance() {
      this.post(this.apiUrl.apiGameBalances, {
        line_id: this.gameLineId
      }).then(res => {
        if (res.code == 0) {
          this.dialogFormVisible = true;
          this.gameName = res.data[1].line_name;
          this.gameBalance = res.data[1].balance;
          this.accountBalance = res.data[0].balance;
        }
      });
    },
    transferIn() {
      if (this.transferNum == "" || this.transferNum == 0) {
        this.$message.error("请输入转入数量");
      } else {
        this.post(this.apiUrl.apiGameTransferOut, {
          line_id: this.gameLineId,
          value: this.transferNum
        }).then(res => {
          if (res.code == 0) {
            this.dialogFormVisible = false;
            location.href = this.clientUrl;
          }
        });
      }
    },
    goIn() {
      this.dialogFormVisible = false;
      location.href = this.clientUrl;
    }
  }
};
</script>
<style>
.liveBox .topImg {
  width: 100%;
  margin-bottom: 20px;
  height: 250px;
}
.liveBox .container {
  width: 1200px;
  margin: 0 auto;
}
.liveBox .container .el-carousel--vertical {
  display: inline-block;
  font-size: 14px;
  margin-left: 14px;
  width: 100%;
  cursor: pointer;
}
.noticeTitle {
  color: #ff9797;
  border: 1px solid #ff9797;
  width: 83px;
  text-align: center;
}
.liveBox .container .el-carousel__indicators--vertical {
  display: none;
}
.liveBox .middleBox {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 11px;
}
.liveBox .banner img {
  height: 100%;
  width: 100%;
}
.liveBox .itemGame {
  position: relative;
  font-size: 0;
  margin-bottom: 20px;
  height: 200px;
}
.liveBox .itemGame::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: 0.5s;
}
.liveBox .itemGame img {
  width: 100%;
  height: 100%;
}
.liveBox .itemTitle {
  position: absolute;
  left: 50%;
  top: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  font-size: 16px;
  color: #e6cf68;
  transition: 0.5s;
  opacity: 0;
}
.liveBox .locked {
  background-color: #e6cf68;
  color: #fff;
  font-size: 14px;
  padding: 10px 30px;
  border-radius: 4px;
  transition: 0.5s;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
}
.liveBox .itemGame:hover .itemTitle,
.liveBox .itemGame:hover:before {
  opacity: 1;
}
/*弹出框*/
.lottorliveBoxyBox .el-dialog__title,
.liveBox .el-dialog__headerbtn .el-dialog__close {
  color: #836426;
}
.liveBox .el-dialog .el-button {
  background: #e6cf68;
  color: #836426;
  width: 30%;
}
.liveBox .el-form-item {
  border-bottom: 1px solid #eee;
}
.liveBox .el-input__inner {
  border: 0;
}
.liveBox .el-form-item__label {
  text-align: left;
}
</style>
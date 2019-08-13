<template>
  <!-- 电子游艺 -->
  <div class="gamesBox">
    <img :src="list.image" alt class="topImg" />
    <div class="container">
      <el-row class="flex-box mg-b-20">
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
      <el-row class="tabTitle">
        <span class="font-bold">全部平台：</span>
        <span
          v-for="(itemLine,index) in lineList"
          :key="itemLine.game_type_id"
          class="gameTitle"
          :class="cur==index?'active':''"
          @click="chooseType(itemLine.game_type_id,index)"
        >{{itemLine.type_name}}</span>
      </el-row>
      <div class="gameComment">
        <el-row class="middleBox" type="flex" justify="space-between">
          <el-col :span="5" class="itemGame" v-for="game in itemList.child" :key="game.id">
            <img :src="game.img_mobile" alt class="itemImg" />
            <div class="itemTitle">{{game.zh_name}}</div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["gameList", "noticeList"])
  },
  data() {
    return {
      cur: 0,
      list: [],
      lineList: [],
      itemList: [],
      change: false,
      gameTypeId: ""
    };
  },
  mounted() {
    if (this.gameList != "") {
      this.list = this.gameList[3];      
    }
    this.getGeme();
  },
  methods: {
    getGeme() {
      var that = this;
      var params = {
        game_line_id: 2
      };
      if (that.gameTypeId) {
        params.game_type_id = that.gameTypeId;
      }
      this.post(this.apiUrl.apiElectronic, params).then(response => {
        if (response.code == 0) {
          if (!that.change) {
            this.lineList = response.data;
          }
          this.itemList = response.data[0];
        } else {
          this.lineList = [];
          this.itemList = [];
        }
      });
    },
    chooseType(gid, index) {
      this.change = true;
      this.cur = index;
      this.gameTypeId = gid;
      this.getGeme();
    }
  }
};
</script>
<style>
.gamesBox .topImg {
  width: 100%;
  margin-bottom: 20px;
  height: 250px;
}
.gamesBox .container {
  width: 1200px;
  margin: 0 auto;
}
.gamesBox .container .el-carousel--vertical {
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
.gamesBox .container .el-carousel__indicators--vertical {
  display: none;
}
.gamesBox .middleBox {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 11px;
}
.gamesBox .banner img {
  height: 100%;
  width: 100%;
}
.gamesBox .itemGame {
  position: relative;
  font-size: 0;
  margin-bottom: 20px;
  height: 210px;
  cursor: pointer;
}
.gamesBox .itemGame::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  transition: 0.4s;
}
.gamesBox .itemGame img {
  width: 100%;
  height: 100%;
}
.gamesBox .itemTitle {
  position: absolute;
  left: 50%;
  top: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  font-size: 18px;
  color: #fff;
  transition: 0.4s;
  width: 100%;
}
.gamesBox .itemGame:hover:before {
  background: rgba(0, 0, 0, 0.5);
}
.gamesBox .tabTitle {
  font-size: 16px;
}
.gamesBox .gameTitle {
  padding: 3px 13px;
  margin-right: 10px;
  border-radius: 6px;
  height: 28px;
  line-height: 28px;
  cursor: pointer;
}
.gamesBox .gameTitle:hover {
  background: #6c6c57;
  color: #fff;
}
.gamesBox .gameTitle.active {
  background: #6c6c57;
  color: #e6cf68;
}
.gamesBox .gameComment {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #6c6c57;
}
</style>
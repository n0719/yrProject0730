<template>
  <!-- 首页 -->
  <div class="mainBox">
    <img :src="topImg" alt class="topImg" />
    <div class="container">
      <el-row class="flex-box mg-b-20">
        <div class="noticeTitle">
          <img src="../../../assets/index/notice.png" alt /> 传奇咨询
        </div>
        <el-carousel height="16px" direction="vertical" :autoplay="true">
          <el-carousel-item v-for="item in noticeList" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-row>
      <el-row class="middleBox">
        <div v-for="(item,index) in gameList" :key="index" class="itemBox">
          <img :src="item.ad" alt class="topAd" />
          <div class="title font-bold">
            <img src="../../../assets/index/titleIcon.png" alt />
            {{item.title}}
          </div>
          <div class="gameMenu">
            <div v-for="(itemGame,itemIndex) in item.smallGame" :key="itemIndex" class="itemGame">
              <img :src="itemGame.imgs" alt class="itemImg" />
              <div class="font-bold">{{itemGame.name}}</div>
            </div>
          </div>
        </div>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      topImg: require("../../../assets/index/shufflingImg.png"),
      noticeList: [
        "真人游戏线下体验馆开业啦1！！！",
        "真人游戏线下体验馆开业啦2！！！",
        "真人游戏线下体验馆开业啦3！！！"
      ],
      gameList: [
        {
          ad: require("../../../assets/index/ad1.png"),
          title: "VG棋牌",
          smallGame: [
            {
              imgs: require("../../../assets/index/game1.png"),
              name: "血战麻将"
            },
            {
              imgs: require("../../../assets/index/game2.png"),
              name: "强装牛牛"
            },
            {
              imgs: require("../../../assets/index/game3.png"),
              name: "加倍斗地主"
            },
            {
              imgs: require("../../../assets/index/game4.png"),
              name: "竞咪楚汉德州"
            },
            {
              imgs: require("../../../assets/index/game5.png"),
              name: "推筒子"
            },
            {
              imgs: require("../../../assets/index/game6.png"),
              name: "炸金花"
            }
          ]
        },
        {
          ad: require("../../../assets/index/ad2.png"),
          title: "KY棋牌",
          smallGame: [
            {
              imgs: require("../../../assets/index/game7.png"),
              name: "百人牛牛"
            },
            {
              imgs: require("../../../assets/index/game8.png"),
              name: "斗地主"
            },
            {
              imgs: require("../../../assets/index/game9.png"),
              name: "保险楚河德州"
            }
          ]
        },
        {
          ad: require("../../../assets/index/ad3.png"),
          title: "彩票",
          smallGame: [
            {
              imgs: require("../../../assets/index/game1.png"),
              name: "血战麻将"
            },
            {
              imgs: require("../../../assets/index/game2.png"),
              name: "强装牛牛"
            },
            {
              imgs: require("../../../assets/index/game3.png"),
              name: "加倍斗地主"
            },
            {
              imgs: require("../../../assets/index/game4.png"),
              name: "竞咪楚汉德州"
            }
          ]
        },
        {
          ad: require("../../../assets/index/ad4.png"),
          title: "真人",
          smallGame: [
            {
              imgs: require("../../../assets/index/game1.png"),
              name: "血战麻将"
            },
            {
              imgs: require("../../../assets/index/game2.png"),
              name: "强装牛牛"
            },
            {
              imgs: require("../../../assets/index/game3.png"),
              name: "加倍斗地主"
            },
            {
              imgs: require("../../../assets/index/game4.png"),
              name: "竞咪楚汉德州"
            }
          ]
        },
        {
          ad: require("../../../assets/index/ad5.png"),
          title: "电子",
          smallGame: [
            {
              imgs: require("../../../assets/index/game1.png"),
              name: "血战麻将"
            },
            {
              imgs: require("../../../assets/index/game2.png"),
              name: "强装牛牛"
            },
            {
              imgs: require("../../../assets/index/game3.png"),
              name: "加倍斗地主"
            },
            {
              imgs: require("../../../assets/index/game4.png"),
              name: "竞咪楚汉德州"
            }
          ]
        },
        {
          ad: require("../../../assets/index/ad6.png"),
          title: "体育",
          smallGame: [
            {
              imgs: require("../../../assets/index/game1.png"),
              name: "血战麻将"
            },
            {
              imgs: require("../../../assets/index/game2.png"),
              name: "强装牛牛"
            },
            {
              imgs: require("../../../assets/index/game3.png"),
              name: "加倍斗地主"
            },
            {
              imgs: require("../../../assets/index/game4.png"),
              name: "竞咪楚汉德州"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style>
.mainBox .topImg {
  width: 100%;
  margin-bottom: 20px;
}
.mainBox .container {
  width: 1200px;
  margin: 0 auto;
}
.mainBox .el-carousel--vertical {
  display: inline-block;
  font-size: 12px;
  margin-left: 14px;
  width: 100%;
}
.noticeTitle {
  color: #ff9797;
  border: 1px solid #ff9797;
  width: 83px;
  text-align: center;
}
.mainBox .el-carousel__indicators--vertical {
  display: none;
}
.mainBox .itemBox {
  width: 585px;
}
.mainBox .itemBox .topAd {
  width: 100%;
  height: 200px;
}
.mainBox .title img {
  margin-right: 7px;
}
.mainBox .title {
  margin-top: 30px;
  margin-bottom: 20px;
}
.mainBox .gameMenu {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0 101px;
}
.mainBox .gameMenu .itemGame {
  text-align: center;
  margin-bottom: 30px;
  width: 95px;
  font-size: 12px;
}
.mainBox .gameMenu .itemImg {
  width: 56px;
  height: 62px;
  margin-bottom: 12px;
}
.mainBox .middleBox{
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 11px;
}
.mainBox .middleBox .itemBox:nth-child(odd){
    margin-right: 30px;
}
</style>


<template>
  <!-- 真人视讯 -->
  <div class="liveBox">
    <img :src="list.image" alt="" class="topImg">
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
      <el-row class="middleBox" type="flex" justify="space-between">
        <el-col :span="7" v-for="item in list.child" :key="item.game_line_id" class="itemGame">
                <img :src="item.h5_image" alt class="itemImg" />
                <div class="itemTitle font-bold">
                    <h2>{{item.display_name}}</h2>
                    <div class="locked">进入游戏</div>
            </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["gameList","noticeList"])
  },
  data() {
    return {
        list:[]
    };
  },
  mounted() {
    if (this.gameList!= "") {
         this.list = this.gameList[1];
    }
  },
  methods: {
    
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
.liveBox .itemGame{
    position: relative;
    font-size: 0;
    margin-bottom: 20px;
    height: 200px;
}
.liveBox .itemGame::before{
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: .5s;
}
.liveBox .itemGame img{
    width: 100%;
    height: 100%;
}
.liveBox .itemTitle{
    position: absolute;
    left: 50%;
    top: 50%;
    text-align: center;
    transform: translate(-50%,-50%);
    font-size: 16px;
    color: #e6cf68;
    transition: .5s;
     opacity: 0;
}
.liveBox .locked{
    background-color: #e6cf68;
    color: #fff;
    font-size: 14px;
    padding: 10px 30px;
    border-radius: 4px;
    transition: .5s;
    font-weight: bold;
    margin-top: 10px;
    cursor: pointer;
}
.liveBox .itemGame:hover .itemTitle,.liveBox .itemGame:hover:before{
    opacity: 1;
}
</style>
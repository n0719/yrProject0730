<template>
  <!-- 棋牌游戏 -->
  <div class="pokerBox">
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
      <el-row class="middleBox" :gutter="20">
        <el-col :span="8" v-for="item in list.child" :key="item.game_line_id" >
                <div class="itemGame">
                    <img :src="item.h5_image" alt class="itemImg" />
                <div class="itemTitle font-bold flex-box-between mg-t-10">
                    <h2>{{item.display_name}}</h2>
                    <div class="locked">进入游戏</div>
            </div>
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
          for(var i = 0;i<this.gameList.length;i++){
          if(this.gameList[i].id==5){
            this.list = this.gameList[i];
          }         
        } 
    }
  },
  methods: {
    noticeDetail(){
      this.$store.commit("umodelShow", true);
      this.$router.push({
        path: "/webNotice"
      });
    }
  }
};
</script>
<style>
.pokerBox .topImg {
  width: 100%;
  margin-bottom: 20px;
  height: 250px;
}
.pokerBox .container {
  width: 1200px;
  margin: 0 auto;
}
.pokerBox .container .el-carousel--vertical {
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
.pokerBox .container .el-carousel__indicators--vertical {
  display: none;
}
.pokerBox .middleBox {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 11px;
}
.pokerBox .banner img {
  height: 100%;
  width: 100%;
}
.pokerBox .itemGame{
    position: relative;
    font-size: 0;
    margin-bottom: 20px;
    padding: 10px;
    background: #fff;
    border-radius: 0.5rem;
    transition: .5s;
}

.pokerBox .itemGame img{
    width: 100%;
    height: 260px;
}
.pokerBox .itemTitle{
    text-align: center;
    font-size: 16px;
    color: #e6cf68;
    transition: .5s;
}
.pokerBox .locked{
    background-color: #e6cf68;
    color: #fff;
    font-size: 14px;
    padding: 10px 30px;
    border-radius: 4px;
    transition: .5s;
    font-weight: bold;
    cursor: pointer;
}
.pokerBox .itemGame:hover{
    background: #e6cf68;
}
.pokerBox .itemGame:hover .locked{
    background: #fff;
    color:#e6cf68;
}
.pokerBox .itemGame:hover .itemTitle{
    color: #fff;
}
</style>
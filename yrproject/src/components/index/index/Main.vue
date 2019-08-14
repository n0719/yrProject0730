<template>
  <!-- 首页 -->
  <div class="mainBox">
    <el-carousel trigger="click" height="520px" class="banner topImg" :autoplay="true">
      <el-carousel-item v-for="item in bannerList" :key="item">
        <img :src="item" alt />
      </el-carousel-item>
    </el-carousel>
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
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["noticeList","bannerList"])
  },
  data() {
    return {
      
    };
  },
  mounted(){

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
.mainBox .banner img {
  height: 100%;
  width: 100%;
}
</style>


<template>
  <!-- 优惠活动 -->
  <div class="activityBox">
    <el-carousel trigger="click" height="520px" class="banner topImg" :autoplay="true">
      <el-carousel-item v-for="item in bannerList" :key="item">
        <img :src="item" alt />
      </el-carousel-item>
    </el-carousel>
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
      <el-row>
        <el-collapse  accordion>
            <el-collapse-item v-for="(item,index) in activityList" :key="index" :name="index">
              <template slot="title">
                  <img :src="item.banner" alt="">
                <div class="flex-con">{{item.title}}</div>
                <div class="time">{{item.created_at}}</div>
              </template>
              <div class="contentBox">
                <div class="contentTitle text-center">
                   {{item.title}}
                </div>
                <div class="content text-left">
                  {{item.content}}
                </div>
                <div class="text-right mg-b-10">{{item.author}}</div>
                <div class="text-right">{{item.created_at}}</div>
              </div>
            </el-collapse-item>
          </el-collapse>
      </el-row>
       <!-- 分页 -->
        <el-row class="text-center">
          <el-pagination background layout="prev, pager, next"  :total="noticeTotal" :page-size="pageSize" @current-change="handleCurrentChange"></el-pagination>
        </el-row>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["noticeList", "bannerList"])
  },
  data() {
    return {
     noticePage:1,
      pageSize:10,
      noticeTotal:0,
      activityList: []
    };
  },
  mounted() {
      this.getActivity()
  },
  methods: {
      getActivity(){
      //获取游戏列表
      this.post(this.apiUrl.apiNotice, {
        limit: this.pageSize,
          page: this.noticePage,
          type: 2
      }).then(res => {
        if (res.code == 0) {
            this.activityList = res.data.items;
            this.noticeTotal = res.data.total;
          } else {
            this.activityList = [];
          }
      });
      },
    noticeDetail() {
      this.$store.commit("umodelShow", true);
      this.$router.push({
        path: "/activityBox"
      });
    },
    handleCurrentChange(curPage) {
      this.noticePage = curPage;
      this.getActivity();
    }
  }
};
</script>
<style>
.activityBox .topImg {
  width: 100%;
  margin-bottom: 20px;
}
.activityBox .container {
  width: 1200px;
  margin: 0 auto;
}
.activityBox .el-carousel--vertical {
  display: inline-block;
  font-size: 14px;
  margin-left: 14px;
  width: 100%;
  cursor: pointer;
}
.activityBox .noticeTitle {
  color: #ff9797;
  border: 1px solid #ff9797;
  width: 83px;
  text-align: center;
}
.activityBox .el-carousel__indicators--vertical {
  display: none;
}
.activityBox .banner img {
  height: 100%;
  width: 100%;
}
.activityBox .el-collapse {
  border: 0;
  padding: 0 5px;
}
.activityBox .el-collapse-item__header {
  border-bottom: 0;
  padding: 0 14px;
  color: #836426;
}
 .activityBox .el-collapse-item .el-collapse-item__header {
  background: rgba(131, 100, 38, 0.1);
}

 .activityBox .time {
  margin-right: 8px;
}
 .activityBox .el-collapse-item__content {
  padding: 20px;
}
 .activityBox .el-collapse-item__arrow.is-active {
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
.activityBox .content{
  text-indent:2em;
  margin-top: 23px;
  margin-bottom: 16px;
}
.activityBox .contentBox{
  color:#836426;
  font-size: 14px;
}
.activityBox .el-collapse-item__header{
    padding: 10px 14px 0;
    flex-wrap: wrap;
    height: auto;
}
.activityBox .el-collapse-item__header img{
    height: 146px;
    width: 100%;
}
.activityBox .el-collapse-item{
    margin-bottom: 10px;
}
.activityBox .el-pagination{
    margin: 30px 0;
}
</style>


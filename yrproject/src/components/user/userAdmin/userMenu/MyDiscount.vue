<template>
  <!-- 我的优惠 -->
  <div class="contentMain">
    <div class="contentMainDIv">
      <el-row class="myDiscount">
        <el-row class="payNav">
          <span></span>我的优惠
        </el-row>
        <el-row class="itemList">
          <el-tabs v-model="activeName" type="card" class="selfTab">
            <el-tab-pane label="全部优惠卷" name="first">
              <div class="discountList">
                <div class="discountListItem" v-for="(item,index) in discountData" :key="index">
                  <div class="discountTit">{{item.title}}</div>
                  <div class="discountImg">
                    <img :src="item.img" alt />
                  </div>
                  <div class="discountBtn">
                    <el-button class="yrBtn">立即领取</el-button>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="传奇亚洲" name="second">传奇亚洲</el-tab-pane>
            <el-tab-pane label="体育" name="third">体育</el-tab-pane>
            <el-tab-pane label="娱乐场" name="fourth">娱乐场</el-tab-pane>
            <el-tab-pane label="老虎机" name="five">老虎机</el-tab-pane>
            <el-tab-pane label="棋牌" name="six">棋牌</el-tab-pane>
            <el-tab-pane label="捕鱼" name="seven">捕鱼</el-tab-pane>
            <el-tab-pane label="彩票" name="eight">彩票</el-tab-pane>
            <el-tab-pane label="电子竞技" name="nine">电子竞技</el-tab-pane>
            <el-tab-pane label="额度转换" name="ten">额度转换</el-tab-pane>
          </el-tabs>
        </el-row>
        <el-row class="pagination">
          <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
        </el-row>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      discountData: [
        {
          id: 1,
          title: "欧冠四强快出炉",
          img: require("../../../../assets/user/discountImg1.png")
        },
        {
          id: 1,
          title: "欧冠四强快出炉",
          img: require("../../../../assets/user/discountImg1.png")
        },
        {
          id: 1,
          title: "欧冠四强快出炉",
          img: require("../../../../assets/user/discountImg1.png")
        },
        {
          id: 1,
          title: "欧冠四强快出炉",
          img: require("../../../../assets/user/discountImg1.png")
        },
        {
          id: 1,
          title: "欧冠四强快出炉",
          img: require("../../../../assets/user/discountImg1.png")
        },
        {
          id: 1,
          title: "欧冠四强快出炉",
          img: require("../../../../assets/user/discountImg1.png")
        }
      ]
    };
  }
};
</script>
<style >
.discountList {
  display: flex;
  /* justify-content: space-between; */
  flex-flow: row wrap;
}
.discountListItem {
  width: 19%;
  height: 266px;
  margin-right:1.25%;
}
.discountListItem:nth-of-type(5n){
    margin-right:0;
}

.discountListItem img {
  width: 100%;
  height: 100%;
}
.itemList {
  padding: 0 35px;
  margin-top: 13px;
  width: 100%;
}
.discountTit {
  height: 47px;
  text-align: center;
  line-height: 47px;
  border: 1px solid #eeece6;
}
.discountImg {
  height: 140px;
  border: 1px dashed #eeece6;
}
.discountBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eeece6;
  height: 51px;
}
.pagination{text-align: center;margin-top:25px;}
.myDiscount .selfTab .el-tabs__item::before{
    content:"|";
    position: absolute;
   left:98%;top:0;z-index:5;
   color:rgba(131,100,38,0.2);

  
}
.myDiscount .el-tabs--card>.el-tabs__header .el-tabs__item.is-active::before{
   content:"";
}
.myDiscount .el-tabs--card>.el-tabs__header .el-tabs__item.is-active::after{
     content:"|";
     position: absolute;
     left:-3%;top:0;z-index:6;
   /* color:rgba(131,100,38,0.2); */
   color:#EEEEEE;
}
.myDiscount .selfTab .el-tabs__item:last-of-type::before{
  content:"";
}
.myDiscount .selfTab .el-tabs__item:nth-of-type(10){
    padding-right:0!important;
}
.myDiscount .selfTab .el-tabs__item:nth-of-type(2){padding-left:0;}
.myDiscount .selfTab .el-tabs__item{width:10%;  margin-right: 0;position:relative;padding:0;text-align: center;}

</style>



<template>
  <!-- 我的优惠 -->
  <div class="contentMain">
    <div class="contentMainDIv">
      <el-row class="myDiscount">
        <el-row class="payNav">
          <span></span>我的优惠
        </el-row>
        <el-row class="itemList">
          <el-tabs
            v-model="activeName"
            type="card"
            class="selfTab"
            v-for="(item,index) in discountData"
            :key="index"
          >
            <el-tab-pane v-for="(item1,index1) in item" :key="index1" >
              <div class="discountList">
                <div class="discountListItem">
                  <div class="discountTit">{{item1.title}}</div>
                  <div class="discountImg">
                    <img alt />
                  </div>
                  <div class="discountBtn">
                    <el-button class="yrBtn">立即领取</el-button>
                  </div>
                </div>
              </div>
            </el-tab-pane>
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
import LoginVue from "../../login/Login.vue";
export default {
  data() {
    return {
      activeName: "0",
      discountData: [],

    };
  },
  mounted() {
    this.getActivitiesList();
    // table_map.member_activities.type
    // console.log(this.discountData);
    // console.log(this.$store.state.dictionariesData.table_map.member_activities);
  },
  methods: {
    getActivitiesList() {
      var n;
      // this.getaaa(1);
      // this.getaaa(2);
      // this.getaaa(3);
      // this.getaaa(4);
      // this.getaaa(5);
      // this.getaaa(6);
      // this.getaaa(7);
      console.log(this.discountData);
      
    },
    getaaa(n) {
      this.post(this.apiUrl.apiActivitiesList, {
        limit: "10",
        page: "1",
        type: n
      }).then(res => {
        if (res.data != "") {
          this.discountData .push(res.data.items);
        }
      });
    }
  }
};
</script>
<style >
.myDiscount .discountList {
  display: flex;
  /* justify-content: space-between; */
  flex-flow: row wrap;
}
.myDiscount .discountListItem {
  width: 19%;
  height: 266px;
  margin-right: 1.25%;
}
.myDiscount .discountListItem:nth-of-type(5n) {
  margin-right: 0;
}

.myDiscount .discountListItem img {
  width: 100%;
  height: 100%;
}
.myDiscount .itemList {
  padding: 0 35px;
  margin-top: 13px;
  width: 100%;
}
.myDiscount .discountTit {
  height: 47px;
  text-align: center;
  line-height: 47px;
  border: 1px solid #eeece6;
}
.myDiscount .discountImg {
  height: 140px;
  border: 1px dashed #eeece6;
}
.myDiscount .discountBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eeece6;
  height: 51px;
}
.myDiscount .pagination {
  text-align: center;
  margin-top: 25px;
}
.myDiscount .selfTab .el-tabs__item::before {
  content: "|";
  position: absolute;
  left: 98%;
  top: 0;
  z-index: 5;
  color: rgba(131, 100, 38, 0.2);
}
.myDiscount .el-tabs--card > .el-tabs__header .el-tabs__item.is-active::before {
  content: "";
}
.myDiscount .el-tabs--card > .el-tabs__header .el-tabs__item.is-active::after {
  content: "|";
  position: absolute;
  left: -3%;
  top: 0;
  z-index: 6;
  /* color:rgba(131,100,38,0.2); */
  color: #eeeeee;
}
.myDiscount .selfTab .el-tabs__item:last-of-type::before {
  content: "";
}
.myDiscount .selfTab .el-tabs__item:nth-of-type(10) {
  padding-right: 0 !important;
}
.myDiscount .selfTab .el-tabs__item:nth-of-type(2) {
  padding-left: 0;
}
.myDiscount .selfTab .el-tabs__item {
  width: 10%;
  margin-right: 0;
  position: relative;
  padding: 0;
  text-align: center;
}
</style>



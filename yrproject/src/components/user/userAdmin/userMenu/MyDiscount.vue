<template>
  <!-- 我的优惠 -->
  <div class="contentMain">
    <div class="contentMainDIv">
      <el-row class="myDiscount">
        <el-row class="payNav">
          <span></span>我的优惠
        </el-row>
        <el-row class="itemList">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane :label="dictionariesData[0]"  name="first">
              <div v-for="(item,index) in discountData" :key="index">
                {{item.title}}
              </div>
            </el-tab-pane>
            <el-tab-pane :label="dictionariesData[1]" name="second">
                <div v-for="(item,index) in discountData" :key="index">
                {{item.title}}
              </div>
            </el-tab-pane>
            <el-tab-pane :label="dictionariesData[2]" name="third">
                <div v-for="(item,index) in discountData" :key="index">
                {{item.title}}
              </div>
            </el-tab-pane>
            <el-tab-pane :label="dictionariesData[3]" name="fourth">
                <div v-for="(item,index) in discountData" :key="index">
                {{item.title}}
              </div>
            </el-tab-pane>
              <el-tab-pane :label="dictionariesData[4]" name="five">
                <div v-for="(item,index) in discountData" :key="index">
                {{item.title}}
              </div>
            </el-tab-pane>
              <el-tab-pane :label="dictionariesData[5]" name="six">
                <div v-for="(item,index) in discountData" :key="index">
                {{item.title}}
              </div>
            </el-tab-pane>
              <el-tab-pane :label="dictionariesData[6]" name="seven">
                <div v-for="(item,index) in discountData" :key="index">
                {{item.title}}
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
      activeName: "first",
      discountData: [],
      m:"",
      dictionariesData:this.$store.state.dictionariesData.table_map.member_activities.type
    };
  },
  mounted() {

    // table_map.member_activities.type
    // console.log(this.discountData);
    console.log(this.$store.state.dictionariesData.table_map.member_activities.type);
    this.m=this.$store.state.dictionariesData.table_map.member_activities.type.length;
    console.log(this.m);
    
  },
  methods: {
    getActivitiesList(n) {
      this.post(this.apiUrl.apiActivitiesList, {
        limit: "10",
        page: "1",
        type: n
      }).then(res => {
        if (res.data != "") {
          this.discountData=res.data.items;
          console.log(this.discountData);
          
        }
      });
    },
      handleClick(tab, event) {
        var n=parseInt(tab.index)+1;
        console.log(n);
        
        this.getActivitiesList(n);
         
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



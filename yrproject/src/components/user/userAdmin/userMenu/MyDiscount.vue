<template>
  <!-- 我的优惠 -->
  <div class="contentMain">
    <div class="contentMainDIv">
      <el-row class="myDiscount">
        <el-row class="payNav">
          <span></span>我的优惠
        </el-row>
        <el-row class="itemList">
          <ul class="tabTit">
            <li
              v-for="(item,index) in dictionariesData"
              :key="index"
              @click="clickTab(index)"
              :class="active==index?'liActive':''"
            >{{item.desc}}</li>
          </ul>
          <div class="tabContent">
            <div v-for="(item,index) in discountData" :key="index">
              <div class="tabContentDIv">
                <a class="divTit" :title="item.title">{{item.title}}</a>
                <img :src="item.banner" alt />
                <a class="divSubTit" :title="item.sub_title">{{item.sub_title}}</a>
                <el-button class="yrBtn"  @click="ActivitiesJoin(item.id,item.join_able)">{{btnText}}</el-button>
              </div>
            </div>
            <div v-if="discountData.length!=0?false:true" class="noContent">
              <img src="../../../../assets/noContent.png" alt />
            </div>
          </div>
        </el-row>
        <el-row class="pagination">
          <el-pagination background layout="prev, pager, next" :total="total"></el-pagination>
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
      activeName: "",
      discountData: [],
      dictionariesData: this.$store.state.dictionariesData.table_map
        .member_activities.type,
      active: 0,
      total: 1,
      btnText:"立即参与"
    };
  },
  mounted() {
    // table_map.member_activities.type
    // console.log(this.discountData);
    this.getActivitiesList(1);
    

  },
  methods: {
    getActivitiesList(n) {
      var that=this;
      this.post(this.apiUrl.apiActivitiesList, {
        limit: "10",
        page: "1",
        type: n
      }).then(res => {
        if (res.data != "") {
          this.discountData = res.data.items;
          this.total = this.discountData.length;
          let discountData=res.data.items;
          for(var i=0;i<discountData.length;i++){
            console.log(discountData[i].join_able.value);
            
            if(discountData[i].join_able.value==0){
              that.btnText=discountData[i].join_able.desc
            }
             if(discountData[i].join_able.value==1){
             that.btnText=discountData[i].join_able.desc

            }
             if(discountData[i].join_able.value==2){
             that.btnText=discountData[i].join_able.desc
            }
          }
        }
      });
    },
    clickTab(e) {
      this.getActivitiesList(e + 1);
      this.active = e;  
      console.log(this.discountData);
        
    },
    ActivitiesJoin(id, able) { 
      console.log(able.value);
      
      if (able.value == 1) {
        this.post(this.apiUrl.apiActivitiesJoin, {
          activitie_id: id
        }).then(res => {
        });
      }

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
.myDiscount .tabTit {
  display: flex;
  width: 100%;
}
.myDiscount .tabTit li {
  text-align: center;
  padding: 10px 30px 10px 30px;
  width: 12%;
  background: #eeece6;
}
.myDiscount .tabTit li.liActive {
  background: #e6cf68;
}
.myDiscount .tabContent {
  display: flex;
  margin-top: 15px;
  height: 574px;
  flex-wrap: wrap;
}
.myDiscount .tabContent > div:nth-of-type(5n) .tabContentDIv {
  margin-right: 0;
}
.myDiscount .tabContentDIv {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 180px;
  border: 1px solid #eee;
  align-items: center;
  margin-right: 40px;
  overflow: hidden;
  margin-bottom: 15px;
}

.myDiscount .tabContentDIv img {
  width: 100%;
  height: 130px;
}
.myDiscount .divTit {
  padding: 0 10px;
  height: 45px;
  overflow: hidden;
  background: #f6f5f2;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  -o-text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
  line-height: 45px;
  border: 1px solid #c6b89d;
  color: #836426;
}
.myDiscount .divSubTit {
  padding: 0 5px;
  height: 30px;
  background: #e3006e;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  -o-text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
  line-height: 30px;
  color: #fff;
}
.myDiscount .yrBtn {
  margin: 5px 0;
}
</style>



<template>
  <div class="userLeft">
    <div class="userImg">
      <img src="" alt="">
      <span>用户名:CK chen</span>
      <span>余额:50000.00</span>
      <span>等级:少尉</span>
    </div>
    <div class="userBtn">
     <el-row>
       <el-button type="warning">充值</el-button>
     </el-row>
     <el-row>
        <el-button type="warning">提现</el-button>
     </el-row>
     <el-row>
          <el-button type="warning">资金归集</el-button>
     </el-row>
    </div>
   <div class="liMenu">
       <ul v-for="(item,index) in this.liMenu" :key="index">
      <li @click="goPage(item.id)">{{item.msg}}</li>
    </ul>
   </div>
  </div>
</template>
<script>
export default {
  name: "userLeft",
  data() {
    return {
      liMenu: [
        {
          id: 1,
          msg: "我的账户"
        },
        {
          id: 2,
          msg: "银行卡管理"
        },
         {
          id: 3,
          msg: "我的优惠"
        },
         {
          id: 4,
          msg: "额度转换"
        },
         {
          id: 5,
          msg: "资金往来"
        },
         {
          id: 6,
          msg: "团队总览"
        },
         {
          id: 7,
          msg: "下级管理"
        },
         {
          id: 8,
          msg: "游戏记录"
        },
         {
          id: 9,
          msg: "网站公告"
        },
         {
          id: 10,
          msg: "返回首页"
        }
      ]
    };
  },
  methods: {
    goPage(id) {
      switch (id) {
        case id =1:
          this.$router.push({ path: "/myPay" });
          break;
        case id=2:
          this.$router.push({ path: "/bankCard" });
          break;
         case id=3:
          this.$router.push({ path: "/myDiscount" });
          break;
           case id=4:
          this.$router.push({ path: "/edTransform" });
          break;
           case id=5:
          this.$router.push({ path: "/moneyDealings" });
          break;
           case id=6:
          this.$router.push({ path: "/teamOverview" });
          break;
           case id=7:
          this.$router.push({ path: "/subordAdmin" });
          break;
           case id=8:
          this.$router.push({ path: "/gameRecords" });
          break;
           case id=9:
          this.$router.push({ path: "/webNotice" });
          break;
           case id=10:
          this.$router.push({ path: "/returnHome" });
          break; 
        default:
      }
    }
  }
};
</script>
<style>
.userLeft {
  color:#fff;
  background:#364150;
  height:100%;
}
.userImg{height:180px;display:flex;flex-direction: column;align-items: center;justify-content: space-around;}
.userBtn{text-align: center;}
.el-button{width:70%;margin-bottom:14px;background:#E6CF68;border:none;color:#836426;}
</style>



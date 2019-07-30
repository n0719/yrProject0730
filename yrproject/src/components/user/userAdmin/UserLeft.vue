<template>
  <div class="userLeft">
    <ul v-for="(item,index) in this.liMenu" :key="index">
      <li @click="goPage(item.id)">{{item.msg}}</li>
    </ul>
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
  min-height: 800px;
  border-right: 1px solid #ddd;
}
</style>



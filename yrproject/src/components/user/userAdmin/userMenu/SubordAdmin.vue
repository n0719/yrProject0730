<template>
  <!-- 团队总览 -->
  <div class="contentMain subordAdmin">
    <div class="contentMainContent">
      <el-row class="container">
        <el-row class="payNav">
          <span></span>下级管理
        </el-row>
        <el-row class="contentMainTable">
          <span class="common-color">下级管理：</span>
          <el-input v-model="playerAccount" placeholder="输入玩家账号" class="mg-r-20"></el-input>
          <el-button type="primary" class="btnColor" @click="search">查询</el-button>
          <el-table
            :data="tableData"
            stripe
            style="width: 100%"
            class="recoredTable mg-t-30"
            empty-text="暂无记录"
          >
            <el-table-column prop="uid" label="ID" width></el-table-column>
            <el-table-column prop="account" label="账号" width></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="num" label="余额"></el-table-column>
            <el-table-column prop="level" label="下级总数"></el-table-column>
            <el-table-column prop="time" label="创建时间"></el-table-column>
          </el-table>
        </el-row>
        <el-row class="ewmShare">
          <ewm-share></ewm-share>
        </el-row>
      </el-row>
    </div>
  </div>
</template>
<script>
import EwmShare from "@/components/user/userAdmin/userMenu/EwmShare";
export default {
  data() {
    return {
      playerAccount: "",
      tableData: [
        {
          uid: "65432345",
          account: "617682681938097",
          name: "王二小",
          num: "1000.00",
          level: "12",
          time: "2019/04/29 02:00:00"
        },
        {
          uid: "65432345",
          account: "617682681938097",
          name: "王二小",
          num: "1000.00",
          level: "43",
          time: "2019/04/29 02:00:00"
        },
        {
          uid: "65432345",
          account: "617682681938097",
          name: "王二小",
          num: "4000.50",
          level: "10",
          time: "2019/04/29 02:00:00"
        },
        {
          uid: "65432345",
          account: "617682681938097",
          name: "尼古拉斯·赵四",
          num: "1000.00",
          level: "3",
          time: "2019/04/29 02:00:00"
        },
        {
          uid: "65432345",
          account: "617682681938097",
          name: "殷六侠",
          num: "231.67",
          level: "28",
          time: "2019/04/29 02:00:000"
        }
      ],
      activeName: "first"
    };
  },
  methods: {
    search() {
      this.tableData = [];
    }
  },
  components: {
    EwmShare: EwmShare
  }
};
</script>
<style>
@import "../../../../assets/search.css";
.subordAdmin .el-date-editor.el-input,
.subordAdmin .el-date-editor.el-input__inner {
  width: 140px;
}
.subordAdmin .contentMain {
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
}
.subordAdmin .payNav {
  display: flex;
  padding-left: 35px;
  align-items: center;
  color: #836426;
  padding: 18px 0 0 35px;
}
.subordAdmin .payNav span {
  height: 14px;
  border-right: 4px solid #836426;
  margin-right: 5px;
}
.subordAdmin .subordAdmin .el-input {
  width: 200px;
}
.subordAdmin .container {
  height: 100%;
}
.subordAdmin .el-input__inner {
  border-color: #836426;
}
</style>



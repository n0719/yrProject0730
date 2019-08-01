<template>
  <div class="contentMain">
    <div class="contentMainDIv">
      <el-row class="container bankTab">
        <el-row class="payNav">
          <span></span>线上取款
        </el-row>
        <el-row class="getMOney">
          <el-col :span="22">用户名：Ck chen</el-col>
          <el-col :span="22">币种：人民币</el-col>
          <el-col :span="22">
            <el-button>取款</el-button>
          </el-col>
        </el-row>
        <el-row class="payNav">
          <span></span>余额
        </el-row>
        <el-row STYLE="padding:0 32px;margin-top:19px;">
                <el-table :data="tableData" stripe style="width: 100%" class="recoredTable">
                    <el-table-column prop="bankName" label="项目" width></el-table-column>
                    <el-table-column prop="cardNum" label="CB" width></el-table-column>
                    <el-table-column prop="openInfor" label="AG3"></el-table-column>
                    <el-table-column prop="bankName" label="M8CG" width></el-table-column>
                    <el-table-column prop="cardNum" label="CQ9CQ" width></el-table-column>
                    <el-table-column prop="openInfor" label="VRCQ"></el-table-column>
                    <el-table-column prop="bankName" label="KYCQ" width></el-table-column>
                    <el-table-column prop="cardNum" label="BBCQ" width></el-table-column>
                    <el-table-column prop="openInfor" label="BACQ"></el-table-column>
                    <el-table-column prop="bankName" label="PGCQ" width></el-table-column>
                    <el-table-column prop="cardNum" label="SACQ" width></el-table-column>
                    <el-table-column prop="openInfor" label="LCCQ"></el-table-column>
                    <el-table-column prop="openInfor" label="WSCQ"></el-table-column>
                  </el-table>
        </el-row>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style >
.getMOney {
  padding-left: 71px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 150px;
}
td{
    word-wrap:break-word
}
.el-table{margin-top:0;}
</style>



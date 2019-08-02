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
            <el-button class="getMoneyBtn">取款</el-button>
          </el-col>
        </el-row>
        <el-row class="payNav">
          <span></span>余额
        </el-row>
        <el-row STYLE="padding:0 32px;margin-top:19px;">
               <table>
                 <tr >
                   <td>项目</td>
                   <td v-for="(item,index) in tableData" :key="index">
                     {{item.projectName}}
                   </td>
                 </tr>
                 <tr>
                   <td>金额</td>
                   <td v-for="(item,index) in tableData" :key="index">{{item.peojectMoney}}</td>
                 </tr>
               </table>
        </el-row>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      tableData:[
        {
          id:1,
          projectName:"aaa",
          projectMoney:"100"
        },
            {
          id:2,
          projectName:"bbb",
          projectMoney:"100"
        }
      ]
    }
  }
};
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
.bankTab .getMoneyBtn{background:#E6CF68;color:#836426;}

</style>



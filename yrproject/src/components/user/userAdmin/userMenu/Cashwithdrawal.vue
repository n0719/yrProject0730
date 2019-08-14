<template>
  <div class="contentMain">
    <div class="contentMainDIv">
      <el-row class="container bankTab">
        <el-row v-if="sss">
          <el-row class="payNav">
            <span></span>线上取款
          </el-row>
          <el-row v-if="moneyState">
            <el-row class="getMOney">
              <!-- <el-col :span="22">用户名：Ck chen</el-col> -->
              <el-col :span="22">账户余额{{this.$store.state.infoData.money}}</el-col>
              <el-col :span="22">
                <el-button class="getMoneyBtn" @click="getMoney">取款</el-button>
              </el-col>
            </el-row>
            <el-row class="payNav">
              <span></span>团队余额
            </el-row>
            <el-row style="padding:0 32px;margin-top:19px;">sssssssssss</el-row>
          </el-row>
          <el-row v-else class="getMoneyModel">
            <el-row>
              <el-col :span="24" class="modelTips">自出款成功后，第一次存款起到现在所有产品的有效投注额</el-col>
            </el-row>
            <el-row class="listModel">
              <el-col :span="4" class="modelList">
                <span>{{getMoneyData.moneyLogs[0].created_at}}</span>
                <span>存款区间</span>
              </el-col>
              <el-col :span="4" class="modelList">
                <span>{{moneyTotal}}元</span>
                <span>存款</span>
              </el-col>
              <el-col :span="4" class="modelList">
                <span>{{total}}元</span>
                <span>有效投注</span>
              </el-col>
            </el-row>
            <el-row class="moneyCount">
              <el-col :span="4">
                取款次数：
                <span>{{getMoneyData.withraw_times}}次</span>
              </el-col>
              <el-col :span="10" :offset="1">此次出款稽核时间：北京时间 {{getMoneyData.lastActTime}}</el-col>
            </el-row>
            <el-row class="getMoneyTable"></el-row>
            <el-row>
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="余额变化" name="first">
                 <div v-for="(item,index) in getMoneyData.moneyLogs" :key="index">
                     {{item.type.desc}}
                     变化金额{{item.money}}
                     描述{{item.info}}
                     创建时间{{item.created_at}}
                     稽核{{item.audit}}
                 </div>
                </el-tab-pane>
                <el-tab-pane label="打码量变化" name="second">
                   
                </el-tab-pane>
              </el-tabs>
            </el-row>
            <el-row class="moneyBtn">
              <el-button class="yrBtn" @click="continueNoney">继续出款</el-button>
              <el-button class @click="resertNoney">放弃</el-button>
            </el-row>
          </el-row>
        </el-row>
        <el-row v-else>
          <el-row class="payNav">
            <span></span>填写出款信息
          </el-row>
          <el-form label-width="100px">
            <div>
              <el-label>真实姓名：</el-label>
              <el-input v-model="input" placeholder="请输入内容"></el-input>
              <el-label>电话号码：</el-label>
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
            <div>
              <el-label>选择银行：</el-label>
              <el-input v-model="input" placeholder="请输入内容"></el-input>
              <el-label>开户银行：</el-label>
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
            <div class>
              <el-label>银行卡号：</el-label>
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
            <div>
              <el-label>主账号余额：</el-label>5，563.00
            </div>
            <div>
              <el-label>*提取密码：</el-label>
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
            <div>
              <el-label>提款人：</el-label>CK CHEN
            </div>
            <div class="thirdiv">
              <el-label>*提款金额：</el-label>
              <el-input v-model="input" placeholder="请输入内容"></el-input>
              <span>-</span>
              <el-label style="width:70px;">手续费：</el-label>
              <el-input v-model="input" placeholder="请输入内容"></el-input>
              <span>=</span>
              <el-label style="width:70px;">实收金额：</el-label>
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
            <div>
              <el-label>*银行账号：</el-label>第五组--工商银行--6222082154962566215--中山市支行
            </div>
            <div class="bankBtn">
              <el-button class="yrBtn">确定输出</el-button>
            </div>
          </el-form>
        </el-row>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName:"first",
      total:0,
      moneyTotal:0,
      sss: true,
      ssss: "",
      input: "",
      tableData: [
        {
          id: 1,
          projectName: "aaa",
          projectMoney: "100"
        },
        {
          id: 2,
          projectName: "bbb",
          projectMoney: "100"
        }
      ],
      moneyState: true,
      getMoneyData: []
    };
  },
  mounted() {
    this.moneyList();
    this.getRecordList();
  },
  methods: {
    getMoney() {
      this.moneyState = false;
    },
    continueNoney() {
      this.sss = false;
    },
    resertNoney() {
      this.moneyState = true;
    },
    moneyList() {
      this.post(this.apiUrl.apiWithdrawPre, {}).then(res => {
        this.getMoneyData = res.data;
        var abc=res.data.moneyLogs;
        for(var i=0;i<abc.length;i++){
           this.moneyTotal+=parseInt(abc[i].money);
        }
      console.log(this.moneyTotal);
      
      });
    },
    getRecordList(){
      let a=this.getMoneyData.lastActTime;
      this.post(this.apiUrl.apiGameRecordList,{
        start:a
      }).then(res=>{
      
         for(var i=0;i<res.data.items.length;i++){
       
           this.total+=parseInt(res.data.items[i].bet_amount);
         }
         
      })
    },
    handleClick(){

    }
  }
};
</script>
<style >
.bankTab .getMOney {
  padding-left: 71px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 150px;
}
.bankTab td {
  word-wrap: break-word;
}
.bankTab .getMOney .el-table {
  margin-top: 0;
}
.bankTab .getMoneyBtn {
  background: #e6cf68;
  color: #836426;
}
.getMoneyModel {
  padding: 0;
}
.modelTips {
  color: #ff0000;
  margin-top: 20px;
  padding: 0 80px;
}
.listModel {
  padding: 0 80px;
}
.modelList {
  width: 160px;
  height: 71px;
  background: #e6cf68;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 24px;
  margin-right: 100px;
}
.modelList span {
  margin: 2px 0;
}
.moneyCount {
  margin-top: 21px;
  padding: 0 80px;
}
.moneyCount span {
  color: #ff0000;
}
.getMoneyTable {
  padding: 0 40px;
  margin-top: 20px;
}
.getMoneyTable table {
  width: 100%;
}
.getMoneyTable table thead td {
  border: 1px solid #846528;
  text-align: center;
  background: #e6cf68;
  color: #836426;
  border-right: none;
  border-bottom: none;
  height: 39px;
  padding: 0 5px;
}
.getMoneyTable table thead tr td:last-child {
  border-right: 1px solid #846528;
}
.getMoneyTable table thead tr:last-child td:last-child {
  border-right: none;
}
.getMoneyTable table tbody td {
  height: 50px;
  text-align: center;
  color: #836426;
  border: 1px solid #836426;
  border-top: none;
  border-bottom: none;
  border-right: none;
}
.getMoneyTable table tbody tr td:last-child {
  border-right: 1px solid #836426;
}
.getMoneyTable table tbody tr:last-child td {
  border-bottom: 1px solid #836426;
}
.getMoneyTable table tbody tr:nth-of-type(odd) {
  background: #f2efe9;
}
.moneyBtn button {
  width: 160px;
  height: 44px;
}
.moneyBtn {
  text-align: center;
  margin-top: 20px;
}
.moneyBtn button:last-child {
  background: #dddddd;
}
.moneyBtn button:last-child:hover {
  background: #dddddd;
}
.bankTab .el-form-item {
  margin: 0;
}
.bankTab .el-form {
  margin-top: 39px;
  padding-left: 77px;
  padding-right: 77px;
}
.bankTab .el-form > div {
  margin-bottom: 14px;
  height: 40px;
  color: #836426;
  display: flex;
  align-items: center;
}
.bankTab .el-form > div el-label {
  width: 100px;
}
.bankTab .el-input {
  width: initial;
  margin-right: 85px;
}
.bankTab .el-input input {
  width: 310px;
}
.bankTab .el-form div.thirdiv .el-input {
  margin-right: 0;
}
.bankTab .el-form div.thirdiv input {
  width: 120px;
  margin-right: 10px;
}
.thirdiv {
}
.thirdiv span {
  font-size: 24px;
}
.bankBtn {
  justify-content: center;
  margin-top: 40px;
}
.bankBtn button {
  width: 160px;
  height: 44px;
}
</style>



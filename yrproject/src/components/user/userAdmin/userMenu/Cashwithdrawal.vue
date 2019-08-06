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
              <el-col :span="22">用户名：Ck chen</el-col>
              <el-col :span="22">币种：人民币</el-col>
              <el-col :span="22">
                <el-button class="getMoneyBtn" @click="getMoney">取款</el-button>
              </el-col>
            </el-row>
            <el-row class="payNav">
              <span></span>余额
            </el-row>
            <el-row style="padding:0 32px;margin-top:19px;">
              <table>
                <tr>
                  <td>项目</td>
                  <td v-for="(item,index) in tableData" :key="index">{{item.projectName}}</td>
                </tr>
                <tr>
                  <td>金额</td>
                  <td v-for="(item,index) in tableData" :key="index">{{item.peojectMoney}}</td>
                </tr>
              </table>
            </el-row>
          </el-row>
          <el-row v-else class="getMoneyModel">
            <el-row>
              <el-col :span="24" class="modelTips">自出款成功后，第一次存款起到现在所有产品的有效投注额</el-col>
            </el-row>
            <el-row class="listModel">
              <el-col :span="4" class="modelList">
                <span>1,000.00</span>
                <span>存款区间</span>
              </el-col>
              <el-col :span="4" class="modelList">
                <span>1,000.00</span>
                <span>存款</span>
              </el-col>
              <el-col :span="4" class="modelList">
                <span>1,000.00</span>
                <span>有效投注</span>
              </el-col>
            </el-row>
            <el-row class="moneyCount">
              <el-col :span="4">
                取款次数：
                <span>7次</span>
              </el-col>
              <el-col :span="10" :offset="1">此次出款稽核时间：北京时间 2019.01.28. 02:05</el-col>
            </el-row>
            <el-row class="getMoneyTable">
              <table border="0" cellspacing="0" cellpadding="0">
                <thead>
                  <tr>
                    <td rowspan="2">NO</td>
                    <td rowspan="2">存款日期区间</td>
                    <td rowspan="2">存款金额</td>
                    <td rowspan="2">优惠</td>
                    <td colspan="5">实际有效投注</td>
                    <td colspan="3">优惠稽核</td>
                    <td colspan="4">常态性稽核</td>
                    <td rowspan="2">需扣除</td>
                  </tr>
                  <tr>
                    <td>视讯</td>
                    <td>电游</td>
                    <td>体育</td>
                    <td>彩票</td>
                    <td>棋牌</td>
                    <td>综合打码量</td>
                    <td>通过</td>
                    <td>需扣除优惠</td>
                    <td>常态打码量</td>
                    <td>放款打码量</td>
                    <td>通过</td>
                    <td>需扣除行政费用</td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in getMoneyData" :key="index">
                    <td>{{item.id}}</td>
                    <td>
                      <span>起：{{item.dataQj[0]}}</span>
                      <br />
                      <span>止：{{item.dataQj[1]}}</span>
                    </td>
                    <td>{{item.moneyCoubnt}}</td>
                    <td>{{item.discount}}</td>
                    <td>{{item.sxN}}</td>
                    <td>{{item.dyN}}</td>
                    <td>{{item.tyN}}</td>
                    <td>{{item.cpN}}</td>
                    <td>{{item.qpN}}</td>
                    <td>{{item.zhdml}}</td>
                    <td>
                      <img
                        v-if="item.yhjhState==false?false:true"
                        src="../../../../assets/user/moneyFail.png"
                        alt
                      />
                      <img v-else src="../../../../assets/user/moneyFail.png" alt />
                    </td>
                    <td>{{item.kcDiscount}}</td>
                    <td>{{item.ctdml}}</td>
                    <td>{{item.fkdml}}</td>
                    <td>
                      <img
                        v-if="item.ctxjhState==false?false:true"
                        src="../../../../assets/user/moneyFail.png"
                        alt
                      />
                      <img v-else src="../../../../assets/user/moneyFail.png" alt />
                    </td>
                    <td>{{item.kcMoney}}</td>
                    <td>{{item.xkc}}</td>
                    <!-- <td>{{item.}}</td> -->
                  </tr>
                </tbody>
              </table>
            </el-row>
            <el-row>
              <el-col
                :span="24"
                style="color:#ff0000;padding-left:40px;margin-top:15px;"
              >优惠稽核 +常态性稽核+手续费+ 共需扣除 ￥0.00</el-col>
            </el-row>
            <el-row class="moneyBtn">
              <el-button class="yrBtn" @click="continueNoney">继续出款</el-button>
              <el-button class>放弃</el-button>
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
              <div class="">
              <el-label>银行卡号：</el-label>
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
            <div>
            <el-label>  主账号余额：</el-label> 5，563.00
            </div>
            <div>
               <el-label>*提取密码：</el-label>
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
             <div>
              <el-label>提款人：</el-label> CK CHEN
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
            <el-label> *银行账号：</el-label> 第五组--工商银行--6222082154962566215--中山市支行
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
      sss: true,
      ssss: "",
      input:'',
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
      getMoneyData: [
        {
          id: 1,
          dataQj: ["19/04/27 02:00:00", "19/04/27 02:00:00"],
          moneyCoubnt: "0.00",
          discount: "5.23",
          sxN: "0.00",
          dyN: "0.00",
          tyN: "0.00",
          cpN: "0.00",
          qpN: "0.00",
          zhdml: "0.00",
          yhjhState: false,
          kcDiscount: "0.00",
          ctdml: "0.00",
          fkdml: "0.00",
          ctxjhState: false,
          kcMoney: "0.00",
          xkc: "0.00"
        },
        {
          id: 2,
          dataQj: ["19/04/27 02:00:00", "19/04/27 02:00:00"],
          moneyCoubnt: "0.00",
          discount: "5.23",
          sxN: "0.00",
          dyN: "0.00",
          tyN: "0.00",
          cpN: "0.00",
          qpN: "0.00",
          zhdml: "0.00",
          yhjhState: false,
          kcDiscount: "0.00",
          ctdml: "0.00",
          fkdml: "0.00",
          ctxjhState: false,
          kcMoney: "0.00",
          xkc: "0.00"
        }
      ]
    };
  },
  methods: {
    getMoney() {
      this.moneyState = false;
    },
    continueNoney() {
      this.sss = false;
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
.bankTab .el-form{margin-top:39px;padding-left:77px;padding-right:77px;}
.bankTab .el-form>div{margin-bottom:14px;height:40px;color:#836426; display: flex;align-items: center;}
.bankTab .el-form>div el-label{width:100px;}
.bankTab .el-input{width:initial;margin-right:85px;}
.bankTab .el-input input{width:310px;}
.bankTab .el-form div.thirdiv .el-input{margin-right:0;}
.bankTab .el-form div.thirdiv input{width:120px;margin-right:10px;}
.thirdiv{}
.thirdiv span{font-size:24px;}
.bankBtn{justify-content: center; margin-top:40px;}
.bankBtn button{width:160px;height:44px;}
</style>



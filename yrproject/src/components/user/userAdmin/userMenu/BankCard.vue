<template>
  <!-- 银行卡管理 -->
  <div class="contentMain">
    <div class="contentMainDIv">
      <el-row class="container bankTab">
        <el-row class="payNav">
          <span></span>选择充值方式
        </el-row>
        <el-row>
          <el-tabs v-model="activeName" class="selfTab">
            <el-tab-pane label="我的银行卡" name="first">
              <div class="first">
                <el-row class="bankTit">
                  <span>*银行卡最多绑定10张，如需修改或删除请咨询客服。</span>
                  <span>
                    <img src="../../../../assets/user/shanchu.png" @click="deleteTrr" />
                  </span>
                </el-row>

                <el-row style="padding: 0 80px;" class="raTable">
                  <!-- <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%"
                    class="recoredTable"
                    ref="test"
                     @row-click="openDetails"
                  >
                    <el-table-column width="40" :key="Math.random()"  v-if="this.systemType1 == 'OPORE'" >
                     <label class="my_protocol" v-if="checkShow1">
                        <input class="input_agreement_protocol"  type="checkbox" v-model="checkBank" />
                        <span ></span>
                      </label>
                    </el-table-column>
                    <el-table-column prop="bankName" label="银行名称" width></el-table-column>
                    <el-table-column prop="cardNum" label="卡号" width></el-table-column>
                    <el-table-column prop="openInfor" label="开户信息"></el-table-column>
                  </el-table>-->
                  <table border="0" cellspacing="0" cellpadding="0">
                    <thead>
                      <tr>
                        <td width="33%">银行名称</td>
                        <td width="33%">卡号</td>
                        <td>开户信息</td>
                      </tr>
                    </thead>
                    <tbody v-if="tableData.length!=0?true:false">
                      <tr v-for="(item,index) in tableData" :key="index">
                        <td>
                          <el-checkbox v-show="checkShow1" @change="checkSel(index)"></el-checkbox>
                          {{item.bank.desc}}
                        </td>
                        <td>{{item.bank_card}}</td>
                        <td>{{item.bank_address}}</td>
                      </tr>
                    </tbody>
                    <div v-else style="padding:20px;color:#ff0000">暂无绑定的银行卡!</div>
                  </table>
                  <el-row class="xz">
                    <el-col :span="24" class="flex-box-column" v-if="!checkShow1">
                      <img src="../../../../assets/user/xinzeng.png" @click="xzBank" alt />
                      增加绑定卡
                    </el-col>
                    <el-col :span="24" class="flex-box-center" style="align-items:flex-end;" v-else>
                      <p class="flex-box-column">
                        <img src="../../../../assets/user/quxiao.png" @click="hideCheck" alt />

                        <span>取消</span>
                      </p>
                      <p class="flex-box-column">
                        <img src="../../../../assets/user/queding.png" @click="conDelete" alt />
                        <span>确认删除</span>
                      </p>
                    </el-col>
                  </el-row>
                </el-row>
              </div>
            </el-tab-pane>
            <el-tab-pane label="添加银行卡" name="second">
              <el-row class="bankTit">*银行卡最多绑定5张，如需修改或删除请咨询客服。</el-row>
              <el-row style="padding: 0 80px;margin-top:39px;" class="flex-box-center">
                <el-form ref="ruleForm" :model="ruleForm" label-width="100px" :rules="rules">
                  <el-form-item label="真实姓名：" prop="real_name">
                    <el-input
                      name="uName"
                      v-model="ruleForm.real_name"
                      aria-required
                      placeholder="请输入真实姓名"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="选择银行：" prop="selBank">
                    <el-select v-model="selectBank" placeholder="请选择">
                      <el-option
                        v-for="item in ruleForm.selBank"
                        :key="item.id"
                        :label="item.desc"
                        :value="item.id"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="银行卡号：" prop="bankNum">
                    <el-input v-model="ruleForm.bankNum" aria-required placeholder="请输入银行卡号"></el-input>
                  </el-form-item>
                  <el-form-item label="开户省份：" prop="provinces">
                    <el-cascader
                      :options="ruleForm.provinces"
                      v-model="selectedOptions"
                      @change="handleChange"
                      :separator="' '"
                    ></el-cascader>
                  </el-form-item>
                  <!-- <el-form-item label="开户城市：" prop="city">
                    <el-input v-model="ruleForm.city" aria-required placeholder="请选择开户城市"></el-input>
                  </el-form-item>-->
                  <el-form-item label="开户支行：" prop="bankBranch">
                    <el-input v-model="ruleForm.bankBranch" aria-required placeholder="请输入开户支行"></el-input>
                  </el-form-item>
                  <el-form-item label="资金密码：" prop="moneyPassword">
                    <el-input v-model="ruleForm.moneyPassword" aria-required placeholder="请输入资金密码"></el-input>
                  </el-form-item>
                  <el-form-item class="subBtn">
                    <el-button type="default" @click="addBank(ruleForm)">提交</el-button>
                  </el-form-item>
                </el-form>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </el-row>
      </el-row>
    </div>
  </div>
</template>
<script>
import cityData from "../../../../assets/country-level2-data.js";
export default {
  mounted() {
    var aa = this.$store.state.moneyOutData;
    var bb = this.$store.state.dictionariesData;
    this.ruleForm.selBank = bb.table_map.member_withdraw_account.bank;
    this.getBankList();

    this.rules.moneyPassword[0].pattern = this.getReg.getReg(
      this.$store.state.regRule.MoneyOut.bankAccountAdd.fund_password.validation
    );
  },
  data() {
    return {
      tableDataState: true,
      selectedOptions: [],
      selectBank: [],
      activeName: "first",
      checkBank: false,
      checkShow1: false,
      checkList: ["选中且禁用", "复选框 A"],
      tableData: [],
      ruleForm: {
        real_name: "",
        selBank: "",
        bankNum: "",
        provinces: cityData,
        city: "",
        bankBranch: "",
        moneyPassword: ""
      },
      // options:[],
      rules: {
        real_name: [
          {
            required: true,
            pattern: /^[a-zA-Z0-9_-]{2,16}$/,
            message: "真实姓名不能少于2位"
          }
        ],
        selBank: [
          // {
          //   required: true,
          //   pattern: "",
          //   message: ""
          // }
        ],
        bankNum: [
          {
            required: true,
            pattern: "",
            message: "请输入16-19位银行卡号！"
          }
        ],
        provinces: [],
        city: [
          {
            required: true,
            pattern: "",
            message: "用户名需为3-16位"
          }
        ],
        bankBranch: [
          // {
          //   required: true,
          //   pattern: "",
          //   message: ""
          // }
        ],
        moneyPassword: [
          {
            required: true,
            pattern: "",
            message: "资金密码不能为空"
          }
        ]
      }
    };
  },
  methods: {
    deleteTrr() {
      //删除按钮
      this.checkShow1 = true;
    },
    xzBank() {
      //新增银行卡
      this.activeName = "second";
    },

    hideCheck() {
      //checkBox显示隐藏
      this.checkShow1 = false;
    },
    conDelete() {},
    checkSel(e) {
      console.log(e);
    },
    addBank() {
      const t = this;
      t.$refs["ruleForm"].validate(valid => {
        console.log(valid);
        if (valid == false) {
        } else {
          let address = this.selectedOptions.join("");
          this.post(this.apiUrl.apiBankAccountAdd, {
            bank: "1",
            bank_real_name: this.ruleForm.real_name,
            bank_card: this.ruleForm.bankNum,
            bank_address: address,
            fund_password: this.ruleForm.moneyPassword
          }).then(res => {
            console.log(res);
          });
        }
      });
    },
    getBankList() {
      this.post(this.apiUrl.apiBankAccountList, {}).then(res => {
        this.tableData = res.data;
      });
    },
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>
<style >
.bankTab .el-cascader,
.bankTab .el-select {
  width: 100%;
}
.bankTab .bankTit {
  color: #ff0000;
  font-size: 12px;
  padding-left: 15px;
  padding-right: 15px;
}
.bankTab .bankTit img {
  width: 14px;
  height: 14px;
  float: right;
  cursor: pointer;
}
.bankTab .el-tabs {
  margin-top: 21px;
}
.bankTab .selfTab .el-tabs__item {
  width: 50%;
}
.bankTab .selfTab {
  padding: 0 40px;
}
.bankTab .el-table {
  margin-top: 39px;
}
.bankTab .xz .el-col-24 {
  height: 380px;
}
.bankTab .xz .el-col-24 img {
  margin: 4px 15px;
}
.bankTab .raTable table {
  padding: 0 40px;
  width: 100%;
  margin-top: 39px;
}
.bankTab .raTable table td .el-checkbox {
  position: absolute;
  left: -40px;
  top: 18px;
}
.bankTab .raTable table td .el-checkbox__inner {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  text-align: center;
  line-height: 22px;
  border: 1px solid #836426;
}
.bankTab .raTable .el-checkbox__input.is-checked .el-checkbox__inner,
.bankTab .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background: #836426;
  border-color: #836426;
}
.bankTab .raTable table td .el-checkbox__inner::after {
  left: 8px;
  top: 5px;
}
.bankTab .raTable table td {
  text-align: center;
  height: 50px;
  position: relative;
}
.bankTab .raTable table thead tr {
  background: #e6cf68;
  color: #836426;
}
.bankTab .raTable table tbody tr:nth-of-type(odd) {
  background: #fff;
}
.bankTab .raTable table tbody tr:nth-of-type(even) {
  background: #f2efe9;
}
.bankTab .raTable .el-table__body,
.bankTab .el-table__footer,
.bankTab .el-table__header {
  table-layout: initial;
}
</style>



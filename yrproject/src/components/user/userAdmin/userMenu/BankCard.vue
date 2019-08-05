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
                  <span>*银行卡最多绑定5张，如需修改或删除请咨询客服。</span>
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
                        <td>银行名称</td>
                        <td>卡号</td>
                        <td>开户信息</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item,index) in tableData" :key="index">
                       
                        <td><el-checkbox v-show="checkShow1" @change="checkSel(index)"></el-checkbox>{{item.bankName}}</td>
                        <td>{{item.cardNum}}</td>
                        <td>{{item.openInfor}}</td>
                      </tr>
                    </tbody>
                  </table>
                  <el-row class="xz">
                    <el-col :span="24" class="flex-box-column" v-if="!checkShow1">
                      <img src="../../../../assets/user/xinzeng.png" @click="xzBank" alt />
                     增加绑定卡
                    </el-col>
                         <el-col :span="24" class="flex-box-center" style="align-items:flex-end;" v-else>
                  <p class="flex-box-column">    <img src="../../../../assets/user/quxiao.png" @click="hideCheck" alt />
                  
                  <span>取消</span></p>
                     <p class='flex-box-column'> <img src="../../../../assets/user/queding.png" @click="conDelete" alt />
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
                <el-form label-width="100px">
                  <el-form-item label="真实姓名：" prop>
                    <el-input type="password" name="uName" aria-required placeholder="请输入原始密码"></el-input>
                  </el-form-item>
                  <el-form-item label="选择银行：" prop>
                    <el-input type="password" name="uName" aria-required placeholder="请输入新密码"></el-input>
                  </el-form-item>
                  <el-form-item label="银行卡号：" prop>
                    <el-input type="password" name="uName" aria-required placeholder="请输入原始密码"></el-input>
                  </el-form-item>
                  <el-form-item label="开户省份：" prop>
                    <el-input type="password" name="uName" aria-required placeholder="请输入新密码"></el-input>
                  </el-form-item>
                  <el-form-item label="开户城市：" prop>
                    <el-input type="password" name="uName" aria-required placeholder="请输入原始密码"></el-input>
                  </el-form-item>
                  <el-form-item label="开户支行：" prop>
                    <el-input type="password" name="uName" aria-required placeholder="请输入新密码"></el-input>
                  </el-form-item>
                  <el-form-item label="资金密码：" prop>
                    <el-input type="password" name="uName" aria-required placeholder="请输入原始密码"></el-input>
                  </el-form-item>
                  <el-form-item class="subBtn">
                    <el-button type="default" @click="submitForm(ruleForm)">提交</el-button>
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
export default {
  data() {
    return {
      activeName: "first",
      checkBank: false,
      checkShow1: false,
          checkList: ['选中且禁用','复选框 A'],
      tableData: [
        {
          uid: 1,
          bankName: "香港银行",
          cardNum: "65489856",
          openInfor: "香港九龙湾支行"
        },
        {
          uid: 2,
          bankName: "瑞士银行",
          cardNum: "65489856",
          openInfor: "香港九龙湾支行"
        }
      ]
    };
  },
  methods: {
    deleteTrr() {//删除按钮
      this.checkShow1 = true;
    },
    xzBank() {//新增银行卡
      this.activeName = "second";
    },
 
    hideCheck(){//checkBox显示隐藏
      this.checkShow1=false;
    },
    conDelete(){

    },
    checkSel(e){
       console.log(e) 
    }
  }
};
</script>
<style >
.bankTit {
  color: #ff0000;
  font-size: 12px;
  padding-left: 15px;
  padding-right: 15px;
}
.bankTit img {
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
.selfTab {
  padding: 0 40px;
}
.bankTab .el-table {
  margin-top: 39px;
}
.xz .el-col-24 {

 
  height: 380px;
}
.xz .el-col-24 img{margin:4px 15px;}
.raTable table {
  padding: 0 40px;
  width:100%;
  margin-top:39px;
}
.raTable table td .el-checkbox{position:absolute;left:-40px;top:18px;}
.raTable table td .el-checkbox__inner{width:22px;height:22px;border-radius:50%;text-align: center;line-height:22px;border:1px solid #836426;}
.raTable .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{background:#836426;border-color:#836426;}
.raTable table td .el-checkbox__inner::after{left:8px;top:5px;}
.raTable table td{text-align: center;height:50px;position:relative;}
.raTable table thead tr{background:#E6CF68;color:#836426;}
.raTable table tbody tr:nth-of-type(odd){background:#fff;}
.raTable table tbody tr:nth-of-type(even){background:#F2EFE9;}
.raTable .el-table__body,
.el-table__footer,
.el-table__header {
  table-layout: initial;
}

</style>



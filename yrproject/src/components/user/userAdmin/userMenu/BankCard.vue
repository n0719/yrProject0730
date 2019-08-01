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
                    <img src="../../../../assets/user/shanchu.png" alt />
                  </span>
                </el-row>
                <el-row style="padding: 0 80px;">
                  <el-table :data="tableData" stripe style="width: 100%" class="recoredTable">
                    <el-table-column prop="bankName" label="银行名称" width></el-table-column>
                    <el-table-column prop="cardNum" label="卡号" width></el-table-column>
                    <el-table-column prop="openInfor" label="开户信息"></el-table-column>
                  </el-table>

                  <el-row class="xz">
                   <el-col :span="24" class="flex-box-center">
                      <img src="../../../../assets/user/xinzeng.png" @click="xzBank" alt=""><br>
                    增加绑定卡
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
      tableData: [
        {
          bankName: "香港银行",
          cardNum: "65489856",
          openInfor: "香港九龙湾支行"
        },
        {
          bankName: "瑞士银行",
          cardNum: "65489856",
          openInfor: "香港九龙湾支行"
        }
      ]
    };
  },
  methods:{
    xzBank(){
      this.activeName="second"
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
.el-table {
  margin-top: 39px;
}
.xz .el-col-24{flex-direction: column;justify-content: flex-end;height:380px;}
</style>



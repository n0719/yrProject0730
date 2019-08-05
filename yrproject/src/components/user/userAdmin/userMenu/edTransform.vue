<template>
  <!-- 额度转换 -->
  <div class="contentMain edTransform">
    <div class="contentMainContent">
      <el-row class="container">
        <el-row class="payNav">
          <span></span>团队余额
        </el-row>
        <el-row class="contentMainTable">
          <div class="teamBalance">
            <div class="teamTop flex-box-center">
              <span v-for="(item,index) in listData" v-bind:key="index">{{item.name}}</span>
            </div>
            <div class="flex-box-center">
              <span
                v-for="(item,index) in itemData"
                v-bind:key="index"
                :class="item.name=='失败'?'error':''"
              >{{item.name}}</span>
            </div>
          </div>
        </el-row>
        <el-row class="payNav">
          <span></span>额度转换
        </el-row>
        <el-row v-if="step==1">
          <el-row class="flex-box-center">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="转出：">
                <el-select v-model="form.roleOut" placeholder="请选择活动区域">
                  <el-option label="CB" value="CB"></el-option>
                  <el-option label="AG3" value="AG3"></el-option>
                  <el-option label="M8CG" value="M8CG"></el-option>
                  <el-option label="CQ9CQ" value="CQ9CQ"></el-option>
                  <el-option label="VRCQ" value="VRCQ"></el-option>
                  <el-option label="KYCQ" value="KYCQ"></el-option>
                  <el-option label="BBCQ" value="BBCQ"></el-option>
                  <el-option label="BACQ" value="BACQ"></el-option>
                  <el-option label="PGCQ" value="PGCQ"></el-option>
                  <el-option label="SACQ" value="SACQ"></el-option>
                  <el-option label="LCCQ" value="LCCQ"></el-option>
                  <el-option label="WSCQ" value="WSCQ"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="转入：">
                <el-select v-model="form.roleIn" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="金额：">
                <el-input v-model="form.num"></el-input>
              </el-form-item>
              <el-form-item class="noticeNote">
                <div>备注：</div>
                <div>
                  <div>1.转账金额必须是整数且大于1</div>
                  <div>2.取款时需要把其它平台的余额归集到主账户。</div>
                  <div>3.如果额度无法正常显示，请不要转换，否则将有可能出现额度丢失</div>
                </div>
              </el-form-item>
              <el-form-item class="flex-box-center">
                <el-button @click="onSubmit">确定</el-button>
              </el-form-item>
            </el-form>
          </el-row>
          <el-row class="preferentialBox">
            <div class="preferentialTitle">我想参与下列彩金优惠</div>
            <div class="preferentialContent">
              <el-radio
                v-model="radio"
                label="1"
                class="mg-b-20"
              >[锁定首充彩金]60%的IM体育博彩 最低充99元 最高送1,000元！18倍！</el-radio>
              <el-radio
                v-model="radio"
                label="2"
                class="mg-b-20"
              >[锁定再充彩金]20%IM体育博彩 最低充99 最高送1,000！20倍！</el-radio>
              <el-radio v-model="radio" label="3" class="mg-b-20">下回再参与。</el-radio>
              <el-row class="prompt">
                <div>温馨提示</div>
                <div class="textIndent">
                  <div>1.会员需完成已申请优惠的要求后，才能申请同一个账号的其他优惠。</div>
                  <div>2.会员所申请的彩金优惠将在充值到账之后于彩金讯息页面更新。</div>
                </div>
              </el-row>
            </div>
          </el-row>
        </el-row>
        <el-row v-else-if="step==2" class="successBox">
          <img src="../../../../assets/user/userSuccess.png" alt />
          <div>
              完成转换
          <span class="againTrans errorColor" @click="againTrans">再转一笔</span>
          </div>
        </el-row>
        <el-row v-else class="successBox">
            <img src="../../../../assets/user/userError.png" alt />
            <div>转换失败
          <span class="errorColor againTrans" @click="againTrans">重试</span></div>
          <div class="errorColor mg-t-10">失败原因：账户余额不足</div>
        </el-row>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      step: 1,
      radio: "1",
      listData: [
        { name: "项目" },
        { name: "CB" },
        { name: "AG3" },
        { name: "M8CG" },
        { name: "CQ9CQ" },
        { name: "VRCQ" },
        { name: "KYCQ" },
        { name: "BBCQ" },
        { name: "BACQ" },
        { name: "PGCQ" },
        { name: "SACQ" },
        { name: "LCCQ" },
        { name: "WSCQ" }
      ],
      itemData: [
        { name: "余额" },
        { name: "1000.00" },
        { name: "0.00" },
        { name: "0.00" },
        { name: "0.00" },
        { name: "0.00" },
        { name: "失败" },
        { name: "0.00" },
        { name: "0.00" },
        { name: "0.00" },
        { name: "0.00" },
        { name: "0.00" },
        { name: "0.00" }
      ],
      form: {
        num: "1000.00",
        roleOut: "CB",
        roleIn: "CQ9CQ",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.step = 2;
    },
    againTrans(){
        this.step = 1;
    }
  }
};
</script>
<style >
@import "../../../../assets/search.css";
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: initial;
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 140px;
  margin: 0 10px;
}
.contentMain {
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
}
.payNav {
  display: flex;
  padding-left: 35px;
  align-items: center;
  color: #836426;
  padding: 18px 0 0 35px;
}
.payNav span {
  height: 14px;
  border-right: 4px solid #836426;
  margin-right: 5px;
}
.edTransform .teamTable {
  margin-top: 20px;
  border: 1px solid #836426;
  border-top: 0;
}
.teamTable th {
  border-top: 1px solid #836426;
}
.teamTable th,
.teamTable tr,
.teamTable td {
  background: #f2efe9;
  font-size: 12px;
  color: #836426;
  text-align: center;
}
.teamTable td {
  font-size: 14px;
  border-top: 1px solid #836426;
}
.teamTable th > .cell {
  font-weight: normal;
}
.el-input__inner {
  border-color: #836426;
  color: #836426;
}
.edTransform .contentMainTable {
  padding: 13px 35px;
}
.edTransform .el-form {
  width: 450px;
}
.edTransform .el-select {
  display: block;
}
.edTransform .el-button {
  background: #e6cf68;
  color: #836426;
  border: 0;
  padding: 12px 66px;
}
.noticeNote .el-form-item__content {
  display: flex;
  align-items: flex-start;
  line-height: 24px;
}
.edTransform .el-form-item {
  margin-bottom: 14px;
}
.preferentialBox {
  width: 656px;
  margin: auto;
  margin-bottom: 50px;
}
.preferentialContent {
  padding: 50px 63px 30px;
  border: 1px solid #836426;
}
.preferentialTitle {
  border: 1px solid #836426;
  color: #836426;
  background: rgba(242, 239, 233, 1);
  text-align: center;
  padding: 12px 0;
  width: 80%;
  margin: auto;
  margin-bottom: -22px;
  z-index: 10;
  position: relative;
}
.edTransform .el-radio__input.is-checked + .el-radio__label,
.edTransform .el-radio {
  color: #836426;
}
.edTransform .el-radio__inner::after {
  background: #836426;
  width: 10px;
  height: 10px;
}
.edTransform .el-radio__input.is-checked .el-radio__inner,.edTransform .el-radio__inner{
  border-color: #836426;
  width: 22px;
  height: 22px;
  background: #fff;
}
.error {
  color: #ff0000;
}
.textIndent {
  text-indent: 2em;
}
.prompt {
  line-height: 24px;
}

.teamBalance {
  background: #f2efe9;
  border: 1px solid #836426;
}

.teamBalance span {
  flex: 1;
  padding: 13px 10px;
  text-align: center;
  line-height: 23px;
}
.teamTop {
  font-size: 12px;
  border-bottom: 1px solid #836426;
}
.successBox {
  text-align: center;
  margin: 100px auto;
  font-size: 14px;
}
.successBox img {
  margin: 32px auto;
}
.againTrans {
  text-decoration: underline;
  margin-left: 24px;
  cursor: pointer;
}
.errorColor{
    color: #ff0000;
}
</style>



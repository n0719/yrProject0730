<template>
  <!-- 我的账户 -->
  <div class="myPay">
    <div class="myPayTop">
      <el-row class="container">
        <el-row class="payNav"><span></span> <a>ss</a></el-row>
        <el-row>
          <el-col :span="6">
            <span>余额(元)</span>
            <span>1000.00</span>
          </el-col>
          <el-col :span="6">
            <span>返水\佣金(元)</span>
            <span>1000.00</span>
          </el-col>
          <el-col :span="6">
            <span>充值(元)</span>
            <span>1000.00</span>
          </el-col>
          <el-col :span="6">
            <span>提现(元)</span>
            <span>1000.00</span>
          </el-col>
        </el-row>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
.myPay {
  padding: 20px;
}
.payNav{display:flex;}
.payNav span{height:20px;border-right:1px solid #ddd;}
.myPayTop .container {
  height: 168px;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.myPayTop .container .el-row:nth-of-type(1) {
  height: 38px;
  line-height: 56px;
}
.myPayTop .container .el-row:nth-of-type(2) {
  flex: 1;
  display:flex;align-items: center;
}
.myPayTop .el-col-6 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60%;
  border-right:1px solid #ddd;
  flex-direction: column;
}
.myPayTop .el-col-6 span {
  text-align: center;
  letter-spacing: 1px;
  margin: 1px 0;
}
.myPayTop .el-col-6 span:nth-of-type(2) {
  font-size: 34px;
  color: #836426;
}
</style>



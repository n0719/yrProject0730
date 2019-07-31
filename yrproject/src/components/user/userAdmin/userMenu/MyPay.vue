<template>
  <!-- 我的账户 -->
  <div class="myPay">
    <div class="myPayTop">
      <el-row class="container">
        <el-row class="payNav"><span></span>我的账户</el-row>
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
      <div class="myPayContent">
      <el-row class="container">
        <el-row class="payNav"><span></span>我的账户</el-row>
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
  display:flex;
  flex-direction: column;
  height:100%;
  box-sizing: border-box;
}
.myPayTop{margin-bottom:20px;height:186px; background: #fff;}
.payNav{display:flex;padding-left:35px;align-items: center;color:#836426; padding:18px 0 0 35px;}
.payNav span{height:14px;border-right:4px solid #836426;margin-right:5px;}
.myPayTop .container {
  height: 168px;
  display: flex;
  flex-direction: column;
}
.myPayTop .container .el-row:nth-of-type(1) {
  /* padding:18px 0 0 35px; */
 
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
  border-right:1px solid #707070;
  flex-direction: column;
}
.myPayTop .el-col-6:nth-of-type(4){border:none;}
.myPayTop .el-col-6 span {
  text-align: center;
  letter-spacing: 1px;
  margin: 1px 0;
}
.myPayTop .el-col-6 span:nth-of-type(2) {
  font-size: 34px;
  color: #836426;
}

.myPayContent{background:#fff;flex:1;}
</style>



<template>
  <div class="login common-color">
    <div class="bounced">
      <!-- 登录 -->
      <div v-show="maskShow==0">
        <div class="bounced-header flex-box-between">
          <div>登录</div>
          <img src="../../../assets/user/guanbi.png" alt />
        </div>
        <div class="bounced-body">
          <img src="../../../assets/user/loginIcon.png" alt class="login-icon" />
          <div class="input-row flex-box common-color mg-b-10">
            <img src="../../../assets/user/iconUser.png" alt />
            <label>账号</label>
            <el-input placeholder="请输入账号" v-model="loginCount"></el-input>
          </div>
          <div class="input-row flex-box common-color mg-b-10">
            <img src="../../../assets/user/iconLocker.png" alt />
            <label>密码</label>
            <el-input placeholder="请输入密码" v-model="loginPwd" type="password"></el-input>
          </div>
          <div v-show="!pwdError" class="prompt fs12">密码错误</div>
          <el-button class="btn">登录</el-button>
          <div class="flex-box-between fs12">
            <div @click="maskShow=1" class="hoverCursor">立即注册</div>
            <div @click="maskShow=3" class="forget hoverCursor">忘记密码</div>
          </div>
        </div>
      </div>
      <!-- 注册 -->
      <div  v-show="maskShow==1">
        <div class="bounced-header flex-box-between">
          <div>
            注册
          </div>
          <img src="../../../assets/user/guanbi.png" alt />
        </div>
        <div class="bounced-body">
          <img src="../../../assets/user/loginIcon.png" alt class="login-icon" />
          <div class="flex-box common-color mg-b-10">
            <label>用户名：</label>
            <el-input class="input-row flex-con" placeholder="请输入账号" v-model="regCount"></el-input>
          </div>
          <div class="flex-box common-color mg-b-10">
            <label>密码：</label>
            <el-input class="input-row flex-con"  placeholder="请输入密码" v-model="regPwd" type="password"></el-input>
          </div>
          <div class="flex-box common-color mg-b-10">
            <label>确认密码：</label>
            <el-input class="input-row flex-con" placeholder="请重复输入密码" v-model="regRepeatPwd" type="password"></el-input>
          </div>
          <div class="flex-box common-color mg-b-10">
            <label>邀请人：</label>
            <el-input class="input-row flex-con" placeholder="请输入邀请人" v-model="inviteUser" type="text"></el-input>
          </div>
          <div class="text-left">
            <el-checkbox v-model="checkedDeal">我已阅读<span class="colorRed">《用户协议》</span></el-checkbox>
          </div>
          <el-button class="btn" @click="maskShow=2">提交</el-button>
          <div class="flex-box-between fs12">
            <div @click="maskShow=0" class="hoverCursor">返回登录</div>
          </div>
        </div>
      </div>
      <!-- 注册成功 -->
      <div v-show="maskShow==2">
          <div class="bounced-header text-right">
          <img src="../../../assets/user/guanbi.png" alt />
        </div>
        <div class="bounced-body">
          <img src="../../../assets/user/userSuccess.png" alt="" class="mg-b-30 mg-t-50">
          <div class="mg-b-10"> 申请成功！</div>
          <div class="color-black">5s后<span class="colorRed comeBack hoverCursor" @click="maskShow=0">返回登录页</span></div>
          </div>
      </div>
      <!-- 忘记密码1 -->
      <div v-show="maskShow==3">
         <div class="bounced-header flex-box-between">
          <div>
            找回密码
          </div>
          <img src="../../../assets/user/guanbi.png" alt />
        </div>
        <div class="bounced-body">
          <img src="../../../assets/user/loginIcon.png" alt class="login-icon" />
          <div class="flex-box common-color mg-b-10">
            <label>手机号码：</label>
            <div  class="input-row flex-box flex-con">
               <el-input placeholder="请输入手机号码" v-model="forgetPhone"></el-input>
               <el-button @click="getCode" class="codeBtn" :class="isVerify?'btn_default':'btn'">{{isVerify?'重新验证':'手机验证'}}</el-button>
            </div>
          </div>
          <div class="flex-box common-color mg-b-10">
            <label>验证码：</label>
             <div  class="input-row flex-box flex-con">
               <el-input placeholder="请输入验证码" v-model="forgetCode" type="number"></el-input>
               <img src="../../../assets/user/codeSuccess.png" alt="">
            </div>  
          </div>
          <div class="prompt fs12">验证码错误，请重新输入</div>
          <el-button @click="maskShow=4" class="btn">提交</el-button>
          <div class="flex-box-between fs12">
            <div @click="maskShow=0" class="hoverCursor">返回登录</div>
          </div>
        </div>
      </div>
       <!-- 忘记密码2 设置密码-->
      <div v-show="maskShow==4">
         <div class="bounced-header flex-box-between">
          <div>
            找回密码
          </div>
          <img src="../../../assets/user/guanbi.png" alt />
        </div>
        <div class="bounced-body">
          <img src="../../../assets/user/loginIcon.png" alt class="login-icon" />
          <div class="flex-box common-color mg-b-10">
            <label>新密码：</label>
            <el-input class="input-row flex-con"  placeholder="请输入新密码" v-model="regPwd" type="password"></el-input>
          </div>
          <div class="flex-box common-color mg-b-10">
            <label>确认密码：</label>
            <el-input class="input-row flex-con" placeholder="再次输入新密码" v-model="regRepeatPwd" type="password"></el-input>
          </div>
          <div class="prompt fs12">两次密码输入不相同请重新输入</div>
          <el-button @click="maskShow=5" class="btn">提交</el-button>
        </div>
      </div>
      <!-- 忘记密码3 设置成功-->
      <div v-show="maskShow==5">
          <div class="bounced-header text-right">
            <img src="../../../assets/user/guanbi.png" alt />
          </div>
        <div class="bounced-body">
          <img src="../../../assets/user/userSuccess.png" alt="" class="mg-b-30 mg-t-50">
          <div class="mg-b-10">设置成功</div>
          <div class="colorRed comeBack hoverCursor" @click="maskShow=0">去登录</div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      maskShow:0,//0登录 1注册 2注册成功 3忘记密码 4设置密码 5设置成功
      loginCount: "",
      loginPwd: "",
      regCount:"",
      regPwd:"",
      regRepeatPwd:"",
      inviteUser:"",
      forgetPhone:'',
      forgetCode:'',
      regPwd:'',
      regRepeatPwd:'',
      checkedDeal:false,
      isVerify:false,
      pwdError:true
    };
  },
  methods:{
    getCode(){
      this.isVerify = true;
    }
  }
};
</script>
<style>
.login {
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  text-align: Center;
  z-index: 5;
}
.bounced {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  min-height: 400px;
  background: #fff;
}
.bounced-header {
  background: #2b3643;
  color: #e6cf68;
  height: 50px;
  line-height: 50px;
  padding-left: 36px;
  padding-right: 24px;
  font-size: 17px;
}
.bounced-header img {
  width: 18px;
  height: 18px;
}
.bounced-body {
  padding: 50px 80px;
}
.login-icon {
  width: 180px;
  margin-bottom: 60px;
}
.input-row {
  border-bottom: 1px solid #836426;
  font-size: 14px;
  /* margin-bottom: 10px; */
}
.input-row label {
  margin-left:15px;
}
.el-input {
  width: auto;
}
.el-input input {
  padding: 0 10px;
  border: 0;
  border-radius: 0;
  color: #836426;
}
.el-input input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: rgba(131, 100, 38, 0.3);
}
.el-input input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: rgba(131, 100, 38, 0.3);
}
.el-input input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: rgba(131, 100, 38, 0.3);
}
.el-input input:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: rgba(131, 100, 38, 0.3);
}
.prompt {
  color: #ff0000;
  text-align: left;
}
.btn{
  background: #e6cf68;
  width: 100%;
  color: #333;
  border-color: #e6cf68;
  margin: 12px 0;
}
.btn:focus,
.btn:hover {
  color: #333;
  border-color: #e6cf68;
  background-color: #e6cf68;
}
.btn_default{
  background: #eee;
  color: #836426;
  border-color: #eee;
}
.btn_default:focus,
.btn_default:hover {
  color: #836426;
  border-color: #eee;
  background-color: #eee;
}
.forget {
  color: rgba(131, 100, 38, 0.5);
}
.flex-box label{
  width: 70px;
      text-align: justify;
    text-align-last: justify;
    text-justify: distribute-all-lines;
}
.hoverCursor:hover{
  cursor: pointer;
}
.colorRed{
  color: #FF0000;
}
.el-checkbox,.el-checkbox__input.is-checked+.el-checkbox__label{
  color:#999999;
}
.comeBack{
  text-decoration: underline;
}
.codeBtn{
  width: auto;
  margin: 5px 0;
}
</style>



<template>
  <div class="login common-color">
    <div class="bounced">
      <!-- 登录 -->
      <div v-if="maskShow==0">
        <div class="bounced-header">
          <div>登录</div>
          <img src="../../../assets/user/guanbi.png" alt />
        </div>
        <div class="bounced-body">
          <img src="../../../assets/user/loginIcon.png" alt class="login-icon" />
          <div class="input-row flex-box common-color">
            <img src="../../../assets/user/iconUser.png" alt />
            <label>账号</label>
            <el-input placeholder="请输入账号" v-model="loginCount"></el-input>
          </div>
          <div class="input-row flex-box common-color">
            <img src="../../../assets/user/iconLocker.png" alt />
            <label>密码</label>
            <el-input placeholder="请输入密码" v-model="loginPwd" type="password"></el-input>
          </div>
          <div class="prompt fs12">密码错误</div>
          <el-button>登录</el-button>
          <div class="flex-box-between fs12">
            <div @click="maskShow=1" class="hoverCursor">立即注册</div>
            <div class="forget">忘记密码</div>
          </div>
        </div>
      </div>
      <!-- 注册 -->
      <div  v-else-if="maskShow==1">
        <div class="bounced-header">
          <div>
            注册
          </div>
          <img src="../../../assets/user/guanbi.png" alt />
        </div>
        <div class="bounced-body">
          <img src="../../../assets/user/loginIcon.png" alt class="login-icon" />
          <div class="flex-box common-color">
            <label>用户名：</label>
            <el-input class="input-row flex-con" placeholder="请输入账号" v-model="regCount"></el-input>
          </div>
          <div class="flex-box common-color">
            <label>密码：</label>
            <el-input class="input-row flex-con"  placeholder="请输入密码" v-model="regPwd" type="password"></el-input>
          </div>
          <div class="flex-box common-color">
            <label>确认密码：</label>
            <el-input class="input-row flex-con" placeholder="请重复输入密码" v-model="regRepeatPwd" type="password"></el-input>
          </div>
          <div class="flex-box common-color">
            <label>邀请人：</label>
            <el-input class="input-row flex-con" placeholder="请输入邀请人" v-model="inviteUser" type="text"></el-input>
          </div>
          <div class="text-left">
            <el-checkbox v-model="checked">我已阅读<span class="colorRed">《用户协议》</span></el-checkbox>
          </div>
          <el-button>提交</el-button>
          <div class="flex-box-between fs12">
            <div @click="maskShow=0" class="hoverCursor">返回登录</div>
            <!-- <div class="forget">忘记密码</div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      maskShow:0,
      loginCount: "",
      loginPwd: "",
      regCount:"",
      regPwd:"",
      regRepeatPwd:"",
      inviteUser:""
    };
  },
  methods:{
    ToRegister(){
      this.maskShow='reg'
    },
    ToLogin(){
      this.showRegister=false,
      this.showLogin=true
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
  /* height: 540px; */
  background: #fff;
}
.bounced-header {
  background: #2b3643;
  color: #e6cf68;
  height: 50px;
  line-height: 50px;
  text-align: left;
  padding-left: 36px;
  padding-right: 24px;
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  margin-bottom: 10px;
}
.input-row label {
  margin-left:15px;
}
.el-input {
  width: auto;
}
.el-input input {
  /* padding: 0; */
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
.el-button {
  background: #e6cf68;
  width: 100%;
  color: #333;
  border-color: #e6cf68;
  margin: 12px 0;
}
.el-button:focus,
.el-button:hover {
  color: #333;
  border-color: #e6cf68;
  background-color: #e6cf68;
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
</style>



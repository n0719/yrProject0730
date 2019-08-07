<template>
  <div class="login common-color" @mousewheel.prevent>
    <div class="bounced userLogin">
      <!-- 登录 -->
      <div v-show="maskShow==0" class="loginBox">
        <div class="bounced-header flex-box-between">
          <div>登录</div>
          <img src="../../../assets/user/guanbi.png" @click="closeModel" alt />
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
           <div class="input-row flex-box common-color mg-b-10">
            <img src="../../../assets/user/loginCode.png" style="width:28px;position:relative;left:-3px;" alt />
            <label style="margin-left:9px;">验证码</label>
            <el-input placeholder="请输入验证码" v-model="loginCode"></el-input>
            <img class="codeImg" :src="loginImgCode" alt="">
          </div>
          <div v-show="!pwdError" class="prompt fs12">密码错误</div>
          <el-button class="btn" @click="login">登录</el-button>
          <div class="flex-box-between fs12">
            <div @click="maskStatus(1)" class="hoverCursor">立即注册</div>
            <div @click="maskStatus(3)" class="forget hoverCursor">忘记密码</div>
          </div>
        </div>
      </div>
      <!-- 注册 -->
      <div v-show="maskShow==1">
        <div class="bounced-header flex-box-between">
          <div>注册</div>
          <img src="../../../assets/user/guanbi.png" @click="closeModel" alt />
        </div>
        <div class="bounced-body">
          <img src="../../../assets/user/loginIcon.png" alt class="login-icon" />
          <div class="flex-box common-color mg-b-10">
            <label>用户名：</label>
            <el-input class="input-row flex-con" placeholder="请输入账号" v-model="regCount"></el-input>
          </div>
          <div class="flex-box common-color mg-b-10">
            <label>密码：</label>
            <el-input
              class="input-row flex-con"
              placeholder="请输入密码"
              v-model="regPwd"
              type="password"
            ></el-input>
          </div>
          <div class="flex-box common-color mg-b-10">
            <label>确认密码：</label>
            <el-input
              class="input-row flex-con"
              placeholder="请重复输入密码"
              v-model="regRepeatPwd"
              type="password"
            ></el-input>
          </div>
          <div class="flex-box common-color mg-b-10">
            <label>邀请人：</label>
            <el-input
              class="input-row flex-con"
              placeholder="请输入邀请人"
              v-model="inviteUser"
              type="text"
            ></el-input>
          </div>
          <div class="text-left">
            <el-checkbox v-model="checkedDeal">
              我已阅读
              <span class="colorRed">《用户协议》</span>
            </el-checkbox>
          </div>
          <el-button class="btn" @click="register">提交</el-button>
          <div class="flex-box-between fs12">
            <div @click="maskStatus(0)" class="hoverCursor">返回登录</div>
          </div>
        </div>
      </div>
      <!-- 注册成功 -->
      <div v-show="maskShow==2">
        <div class="bounced-header text-right">
          <img src="../../../assets/user/guanbi.png" @click="closeModel" alt />
        </div>
        <div class="bounced-body">
          <img src="../../../assets/user/userSuccess.png" alt class="mg-b-30 mg-t-50" />
          <div class="mg-b-10">申请成功！</div>
          <div class="color-black">
            {{countDown}}s后
            <span class="colorRed comeBack hoverCursor" @click="goLogin()">返回登录页</span>
          </div>
        </div>
      </div>
      <!-- 忘记密码1 -->
      <div v-show="maskShow==3">
        <div class="bounced-header flex-box-between">
          <div>找回密码</div>
          <img src="../../../assets/user/guanbi.png" @click="closeModel" alt />
        </div>
        <div class="bounced-body">
          <img src="../../../assets/user/loginIcon.png" alt class="login-icon" />
          <div class="flex-box common-color mg-b-10">
            <label>手机号码：</label>
            <div class="input-row flex-box flex-con">
              <el-input placeholder="请输入手机号码" v-model="forgetPhone"></el-input>
              <el-button
                @click="getCode"
                class="codeBtn"
                :class="isVerify?'btn_default':'btn'"
              >{{isVerify?'重新验证':'手机验证'}}</el-button>
            </div>
          </div>
          <div class="flex-box common-color mg-b-10">
            <label>验证码：</label>
            <div class="input-row flex-box flex-con">
              <el-input placeholder="请输入验证码" v-model="forgetCode" type="number"></el-input>
              <img src="../../../assets/user/codeSuccess.png" alt v-show="codeStatus==2" />
            </div>
          </div>
          <div v-show="codeStatus==1" class="prompt fs12">验证码错误，请重新输入</div>
          <el-button @click="forgetPwd" class="btn" :disabled="isDisabled">提交</el-button>
          <div class="flex-box-between fs12">
            <div @click="maskStatus(0)" class="hoverCursor">返回登录</div>
          </div>
        </div>
      </div>
      <!-- 忘记密码2 设置密码-->
      <div v-show="maskShow==4">
        <div class="bounced-header flex-box-between">
          <div>找回密码</div>
          <img src="../../../assets/user/guanbi.png" @click="closeModel" alt />
        </div>
        <div class="bounced-body">
          <img src="../../../assets/user/loginIcon.png" alt class="login-icon" />
          <div class="flex-box common-color mg-b-10">
            <label>新密码：</label>
            <el-input
              class="input-row flex-con"
              placeholder="请输入新密码"
              v-model="newPwd"
              type="password"
            ></el-input>
          </div>
          <div class="flex-box common-color mg-b-10">
            <label>确认密码：</label>
            <el-input
              class="input-row flex-con"
              placeholder="再次输入新密码"
              v-model="newRepeatPwd"
              type="password"
            ></el-input>
          </div>
          <div v-show="!setStatus" class="prompt fs12">两次密码输入不相同请重新输入</div>
          <el-button @click="setPwd" class="btn">提交</el-button>
        </div>
      </div>
      <!-- 忘记密码3 设置成功-->
      <div v-show="maskShow==5">
        <div class="bounced-header text-right">
          <img src="../../../assets/user/guanbi.png" @click="closeModel" alt />
        </div>
        <div class="bounced-body">
          <img src="../../../assets/user/userSuccess.png" alt class="mg-b-30 mg-t-50" />
          <div class="mg-b-10">设置成功</div>
          <div class="colorRed comeBack hoverCursor" @click="maskStatus(0)">去登录</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { get, post ,initReg} from '@/axios/http';
import { apiLogin,apiUrl } from "@/axios/api"; // 导入我们的api接口
export default {
  data() {
    return {
      maskShow: 0, //0登录 1注册 2注册成功 3忘记密码 4设置密码 5设置成功
      loginCount: "",
      loginPwd: "",
      loginCode:'',
      loginImgCode:"",
      regCount: "",
      regPwd: "",
      regRepeatPwd: "",
      inviteUser: "",
      forgetPhone: "",
      forgetCode: "",
      newPwd: "",
      newRepeatPwd: "",
      checkedDeal: false,
      isVerify: false,
      pwdError: true,
      codeStatus: 0,
      setStatus: true,
      countDown: "",
      isDisabled: false,
      phoneReg: /^((\d{3,4})|\d{3,4}-)?\d{7,8}(-\d+)*$/i
    };
  },
  mounted() {
    if(initReg(apiUrl.apiLogin,'username',this.loginCount)){
      console.log('验证通过');
    }
    // post(apiUrl.apiLogin, {
    //     username: "demo001",
    //     password: "a123456",
    //     verify: "35"
    //   }).then(res => {
    //     // 获取数据成功后的其他操作
    //     console.log(res);
    //   });
  },
  watch: {
    maskShow(val) {
      if (val == 2) {
        this.goLogin(true);
      }
    }
  },
  methods: {
    // initReg(url,params,val){
    //   const urls = url.split('/');
    //   const regRule = this.$store.state.regRule;
    //   console.log(this.phoneReg.test(val));
      
    //   if(!this.phoneReg.test(val)){
    //     console.log('验证未通过');       
    //     return false;
    //   }else{
    //     return true;
    //   }
      
    //   // console.log(controller);
    //    console.log(regRule[urls[0]][urls[1]]);
    // },
    getRule() {
      apiLogin({
        username: "demo001",
        password: "a123456",
        verify: "35"
      }).then(res => {
        // 获取数据成功后的其他操作
        console.log(res);
      });
      // console.log(this.$store.state.regRule);
    },
    getCode() {
      this.isVerify = true;
    },
    maskStatus(code) {
      this.maskShow = code;
      this.loginCount = "";
      this.loginPwd = "";
      this.regCount = "";
      this.regPwd = "";
      this.regRepeatPwd = "";
      this.checkedDeal = false;
      this.forgetPhone = "";
      this.forgetCode = "";
      this.codeStatus = 0;
      this.newPwd = "";
      this.newRepeatPwd = "";
    },
    closeModel() {
      this.$store.commit("lmodelShow", false);
    },
    goLogin(isGo) {
      const TIME_COUNT = 5;
      if (isGo) {
        this.countDown = TIME_COUNT;
        this.timer = setInterval(() => {
          if (this.countDown > 0 && this.countDown <= TIME_COUNT) {
            this.countDown--;
          } else {
            clearInterval(this.timer);
            this.maskStatus(0);
          }
        }, 1000);
      } else {
        clearInterval(this.timer);
        this.maskStatus(0);
      }
    },
    login() {
      if (this.loginCount == "") {
        this.$message.error("请输入账户");
      } else if (!this.phoneReg.test(this.loginCount)) {
        this.$message.error("账户输入有误");
      } else if (this.loginPwd == "") {
        this.$message.error("请输入密码");
        this.pwdError = false;
      } else {
        this.closeModel();
      }
    },
    register() {
      if (this.regCount == "") {
        this.$message.error("请输入账号");
      } else if (this.regPwd == "") {
        this.$message.error("请输入密码");
      } else if (this.regRepeatPwd == "") {
        this.$message.error("请输入确认密码");
      } else if (this.regPwd !== this.regRepeatPwd) {
        this.$message.error("两次输入密码不一致");
        this.setStatus = false;
      } else if (!this.checkedDeal) {
        this.$message.error("请勾选同意用户协议");
      } else {
        this.maskStatus(2);
      }
    },
    forgetPwd() {
      if (this.forgetPhone == "") {
        this.$message.error("请输入手机号");
      } else if (!this.phoneReg.test(this.forgetPhone)) {
        this.$message.error("手机号输入有误");
      } else if (this.forgetCode == "") {
        this.$message.error("请输入验证码");
        this.codeStatus = 1;
      } else {
        this.maskStatus(4);
      }
    },
    setPwd() {
      if (this.newPwd == "") {
        this.$message.error("请输入密码");
      } else if (this.newRepeatPwd == "") {
        this.$message.error("请输入确认密码");
      } else if (this.newPwd !== this.newRepeatPwd) {
        this.$message.error("两次输入密码不一致");
      } else {
        this.maskStatus(5);
      }
    }
  }
};
</script>
<style >
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
.login .bounced {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  min-height: 400px;
  background: #fff;
}
.login .bounced-header {
  background: #2b3643;
  color: #e6cf68;
  height: 50px;
  line-height: 50px;
  padding-left: 36px;
  padding-right: 24px;
  font-size: 17px;
}
.login .bounced-header img {
  width: 18px;
  height: 18px;
}
.login .bounced-body {
  padding: 50px 80px;
}
.login .login-icon {
  width: 180px;
  margin-bottom: 60px;
}
.login .input-row {
  border-bottom: 1px solid #836426;
  font-size: 14px;
  /* margin-bottom: 10px; */
  position:relative;
}
.login .input-row img.codeImg{width:100px;height:30px;border:1px solid #ddd;position:absolute;right:0;}
.login .input-row label {
  margin-left: 15px;
}
.login.el-input {
  width: auto;
}
.login .el-input input {
  padding: 0 10px;
  border: 0;
  border-radius: 0;
  color: #836426;
}

.userLogin .prompt {
  color: #ff0000;
  text-align: left;
}
.userLogin .btn {
  background: #e6cf68;
  width: 100%;
  color: #333;
  border-color: #e6cf68;
  margin: 12px 0;
}
.userLogin .btn:focus,
.userLogin .btn:hover {
  color: #333;
  border-color: #e6cf68;
  background-color: #e6cf68;
}
.userLogin .btn_default {
  background: #eee;
  color: #836426;
  border-color: #eee;
}
.userLogin .btn_default:focus,
.userLogin .btn_default:hover {
  color: #836426;
  border-color: #eee;
  background-color: #eee;
}
.userLogin .btn.is-disabled,
.btn.is-disabled:focus,
.btn.is-disabled:hover {
  background: #eee;
  color: #836426;
  border-color: #eee;
}
.userLogin .forget {
  color: rgba(131, 100, 38, 0.5);
}
.userLogin .flex-box label {
  width: 70px;
  text-align: justify;
  text-align-last: justify;
  text-justify: distribute-all-lines;
}
.userLogin .loginBox label {
  width: 80px;
}
.userLogin .hoverCursor:hover {
  cursor: pointer;
}
.userLogin .colorRed {
  color: #ff0000;
}
.userLogin .el-checkbox,
.userLogin .el-checkbox__input.is-checked + .el-checkbox__label {
  color: #999999;
}
.userLogin .comeBack {
  text-decoration: underline;
}
.userLogin .codeBtn {
  width: auto;
  margin: 5px 0;
}
</style>



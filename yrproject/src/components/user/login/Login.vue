<template>
  <div class="login common-color">
    <div class="bounced">
      <div class="bounced-header">
        <div>登录</div>
        <img src="../../../assets/user/guanbi.png" @click="closeModel" alt />
      </div>
      <div class="bounced-body">
          <img src="../../../assets/user/loginIcon.png" alt="" class="login-icon">
          <div class="input-row flex-box common-color">
            <img src="../../../assets/user/iconUser.png" alt="">
            <label>账号</label>
            <el-input placeholder="请输入账号" v-model="userCount"></el-input>
          </div>
          <div class="input-row flex-box common-color">
            <img src="../../../assets/user/iconLocker.png" alt="">
            <label>密码</label>
            <el-input placeholder="请输入密码" v-model="userPwd" type="password"></el-input>
          </div>
          <div class="prompt fs12">密码错误</div>
          <el-button>登录</el-button>
          <div class="flex-box-between fs12">
              <div>立即注册</div>
              <div class="forget">忘记密码</div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
     data() {
        return {
            userCount: '',
            userPwd:''
        }
    }
    ,methods:{
      closeModel(){
           this.$store.commit("lmodelShow",false);
           console.log(1)
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
  height: 540px;
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
.bounced-body{
    padding: 50px 80px;
}
.login-icon{
    width: 180px;
    margin-bottom: 60px;
}
.input-row{
    border-bottom: 1px solid #836426;
    font-size: 14px;
    margin-bottom: 10px;
}
.input-row label{
    margin: 0 15px;
}
.el-input{
    width: auto;
}
.el-input input{
    padding: 0;
    border: 0;
    color: #836426;
}
.el-input input::-webkit-input-placeholder { /* WebKit browsers */
    color:  rgba(131,100,38, 0.3);
}
.el-input input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:   rgba(131,100,38, 0.3);
}
.el-input input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    rgba(131,100,38, 0.3);
}
.el-input input:-ms-input-placeholder { /* Internet Explorer 10+ */
    color:    rgba(131,100,38, 0.3);
}
.prompt{
    color: #FF0000;
    text-align: left;
}
.el-button{
    background: #E6CF68;
    width: 100%;
    color: #333;
    border-color:#E6CF68; 
    margin: 12px 0;
}
.el-button:focus, .el-button:hover {
    color: #333;
    border-color: #E6CF68;
    background-color: #E6CF68;
}
.forget{
    color: rgba(131,100,38,0.5);
}
</style>



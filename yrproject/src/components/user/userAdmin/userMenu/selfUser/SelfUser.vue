<template>
  <div class="contentMain">
    <div class="contentMainDIv selfUser">
      <el-tabs v-model="activeName">
        <el-tab-pane label="个人资料" name="first">
          <div class="first flex-box-center">
            <el-form ref="ruleForm" :model="ruleForm" label-width="100px" :rules="rules">
              <el-upload
                class="avatar-uploader flex-box-center"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                accept="image/jpeg, image/gif, image/png, image/bmp"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
              <el-form-item label="用户名：" prop="uName">
                <el-input v-model="ruleForm.uName" name="uName" aria-required placeholder="2-6个字符"></el-input>
              </el-form-item>
              <el-form-item label="昵称：" prop="nickName">
                <el-input v-model="ruleForm.nickName" placeholder="必须真实有效"></el-input>
              </el-form-item>
              <el-form-item label="姓名：" prop="fullName">
                <el-input v-model="ruleForm.fullName" placeholder="姓名必须真实有效"></el-input>
              </el-form-item>
              <el-form-item label="手机：" prop="uTel">
                <el-input v-model="ruleForm.uTel" placeholder="输入正确的手机号码"></el-input>
                <el-button
                  class="yzBtn"
                  :style="yzTelState==false?'color:#836426':'color:#FF0000'"
                  @click="yzTelClick"
                >{{yzTelState==false?'验证手机号码':''+num+'s后重新获取'}}</el-button>
                <el-alert
                  v-show="yzTelState==false?false:true"
                  title="验证码已发送，可能会有延误，请耐心等待"
                  type="success"
                  center
                  show-icon
                ></el-alert>
              </el-form-item>

              <el-form-item>
                <el-input placeholder="请输入验证码"></el-input>
                <el-button class="yzBtn">验证</el-button>
              </el-form-item>
              <el-form-item label="邮箱：" required prop="uAddress">
                <el-input v-model="ruleForm.uAddress" placeholder="输入合法的邮箱地址"></el-input>
                <el-button
                  class="yzBtn"
                  :style="yzEmailState==false?'color:#836426':'color:#FF0000'"
                  @click="yzEmailClick"
                >{{yzEmailState==false?'验证邮箱地址':''+num+'s后重新获取'}}</el-button>
                <el-alert
                  v-show="yzEmailState==false?false:true"
                  title="验证码已发送，可能会有延误，请耐心等待"
                  type="success"
                  center
                  show-icon
                ></el-alert>
              </el-form-item>
              <el-form-item>
                <el-input placeholder="请输入验证码"></el-input>
                <el-button class="yzBtn">验证</el-button>
              </el-form-item>
              <el-form-item label="出生日期： " prop="uBirth">
                <el-date-picker
                  v-model="ruleForm.uBirth"
                  type="date"
                  placeholder="选择日期"
                  value-format="yyyy-MM-dd"
                ></el-date-picker>
              </el-form-item>
              <el-form-item class="subBtn">
                <el-button type="default">取消</el-button>
                <el-button type="default" @click="submitForm(ruleForm)">提交</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="修改登录密码" name="second">
          <div class="second flex-box-center">
            <el-form ref="logPasswordFrom" :model="logPasswordFrom" label-width="100px" :rules="logRules">
              <el-form-item label="原始密码：" prop="logOldPassword">
                <el-input
                  v-model="logPasswordFrom.logOldPassword"
                  type="password"
                  name="uName"
                  aria-required
                  placeholder="请输入原始密码"
                ></el-input>
              </el-form-item>
              <el-form-item label="新密码：" prop="logNewPassword">
                <el-input
                  v-model="logPasswordFrom.logNewPassword"
                  type="password"
                  name="uName"
                  aria-required
                  placeholder="请输入新密码"
                ></el-input>
              </el-form-item>
              <el-form-item label="确认密码：" prop="logConPassword">
                <el-input
                  v-model="logPasswordFrom.logConPassword"
                  type="password"
                  name="uName"
                  aria-required
                  placeholder="请确认新密码"
                ></el-input>
              </el-form-item>
              <el-form-item class="subBtn">
                <el-button type="default">取消</el-button>
                <el-button type="default" @click="submitForm(ruleForm)">提交</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="修改资金密码" name="third">
          <div class="third flex-box-center">
            <el-form ref="moneyPasswordFrom" :model="moneyPasswordFrom" label-width="100px" :rules="moneyRules">
              <el-form-item label="原始密码：" prop="moneyOldPassword">
                <el-input
                  v-model="moneyPasswordFrom.moneyOldPassword"
                  type="password"
                  name="uName"
                  aria-required
                  placeholder="请输入原始密码"
                ></el-input>
              </el-form-item>
              <el-form-item label="新密码：" prop="moneyNewPassword">
                <el-input
                  v-model="moneyPasswordFrom.moneyNewPassword"
                  type="password"
                  name="uName"
                  aria-required
                  placeholder="请输入新密码"
                ></el-input>
              </el-form-item>
              <el-form-item label="确认密码：" prop="moneyConPassword">
                <el-input
                  v-model="moneyPasswordFrom.moneyConPassword"
                  type="password"
                  name="uName"
                  aria-required
                  placeholder="请确认新密码"
                ></el-input>
              </el-form-item>
              <el-form-item class="subBtn">
                <el-button type="default">取消</el-button>
                <el-button type="default" @click="submitForm(ruleForm)">提交</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      yzTelState: false,
      yzEmailState: false,
      num: 20,
      ruleForm: {
        //个人资料字段
        uName: "",
        nickName: "",
        fullName: "",
        utel: "",
        uaddress: "",
        ubirth: ""
      },
      imageUrl: "",
      rules: {
        //个人资料验证
        uName: [
          {
            required: true,
            pattern: /^[(a-zA-Z0-9\u4e00-\u9fa5){1}_#]{2,6}$/,
            message: "用户名需为2-6位"
          }
        ],
        nickName: [
          {
            // required: true,
            message: ""
          }
        ],
        fullName: [
          {
            required: true,
            message: "请输入真实有效的姓名"
          }
        ],
        uTel: [
          {
            required: true,
            pattern: /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/,
            message: "请输入有效的手机号码",
            trigger: "blur"
          }
        ],
        uAddress: [
          {
            required: true, //是否必填

            message: "请输入邮箱地址", //错误提示信息
            trigger: "blur" //检验方式（blur为鼠标点击其他地方，）
          },
          {
            type: "email", //要检验的类型（number，email，date等）
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"] //（change为检验的字符变化的时候）
          }
        ],
        uBirth: [{}]
      },
      //登录密码字段
      logPasswordFrom: {
        logOldPassword: "",
        logNewPassword: "",
        logConPassword: ""
      },
      //登录密码验证
      logRules: {
        logOldPassword: [
          {
            required: true,
            message: "原始密码不能为空",
            trigger: "blur"
          }
        ],
        logNewPassword: [
          {
            required: true,
               message: "新密码不能为空",
               trigger: "blur"
          }
        ],
        logConPassword: [
          {
            required: true,
               message: "确认密码不能为空",
               trigger: "blur"
          }
        ]
      },
      //资金密码字段
      moneyPasswordFrom: {
        moneyOldPassword: "",
        moneyNewPassword: "",
        moneyConPassword: ""
      },
      //资金密码验证
      moneyRules: {
        moneyOldPassword: [
          {
            required: true,
            message: "原始密码不能为空",
            trigger: "blur"
          }
        ],
        moneyNewPassword: [
          {
            required: true,
               message: "新密码不能为空",
               trigger: "blur"
          }
        ],
        moneyConPassword: [
          {
            required: true,
               message: "确认密码不能为空",
               trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    yzTelClick() {
      var yz = this.ruleForm.uTel;
      var bb = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
      if (bb.test(yz)) {
        this.yzTelState = true;
        var that = this;
        setInterval(function() {
          that.num--;
          if (that.num == 0) {
            that.num = 20;
            that.yzTelState = false;
          }
        }, 1000);
      } else {
        //  this.yzTel="20s后重新获取";
      }
    },
    yzEmailClick() {
      var yz = this.ruleForm.uAddress;
      var yz = this.ruleForm.uAddress;
      var bb = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
      if (bb.test(yz)) {
        this.yzEmailState = true;
        var that = this;
        setInterval(function() {
          that.num--;
          if (that.num == 0) {
            that.num = 20;
            that.yzEmailState = false;
          }
        }, 1000);
      } else {
        //  this.yzTel="20s后重新获取";
      }
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      // console.log(this.imageUrl)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isGIF = file.type === "image/gif";
      const isPNG = file.type === "image/png";
      const isBMP = file.type === "image/bmp";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG && !isGIF && !isPNG && !isBMP) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return (isJPG || isBMP || isGIF || isPNG) && isLt2M;
    },
    submitForm() {
      const t = this;
      t.$refs["ruleForm"].validate(valid => {
        console.log(valid);
        if (valid == false) {
        } else {
          console.log("提交成功");
          console.log(this.ruleForm);
        }
      });
    }

    // submitForm(e) {
    //   this.$refs[e].validate(valid => {
    //     if (valid) {
    //       // alert("submit!");
    //     } else {
    //       // console.log("error submit!!");
    //       return false;
    //     }
    //   });
    // }
  }
};
</script>
<style>
.el-input__inner {
  border: 1px solid #836426;
}
.el-input.is-active .el-input__inner,
.el-input__inner:focus {
  border: 1px solid #836426;
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 360px;
}
.contentMainDIv {
  padding: 25px 35px 0 35px;
  box-sizing: border-box;
}
.selfUser .el-tabs__active-bar {
  display: none;
}
.selfUser .el-tabs__nav {
  width: 100%;
}
.selfUser .el-tabs__item {
  width: 33.3%;
  text-align: center;
  background: #eee;
  color: #836426;
  font-size: 13px;
  height: 44px;
  line-height: 44px;
  margin-right: 1px;
}
.selfUser .el-tabs__item.is-active {
  background: #e6cf68;
  color: #836426;
}
.selfUser .el-form {
  width: 360px;
  text-align: center;
}
.el-form-item {
  margin-left: -99px;
}
/* 头像上传 */
.selfUser .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  margin: 15px 0 20px 0;
}
.selfUser .avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.selfUser .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.selfUser .avatar {
  width: 76px;
  height: 76px;
  display: block;
}
.selfUser .subBtn button {
  width: 160px;
  height: 44px;
  background: #e6cf68;
  color: #836426;
  cursor: pointer;
  margin-top: 20px;
}
.el-button:focus,
.el-button:hover {
  background: #e6cf68;
  color: #836426;
  border: none;
}
.selfUser .avatar-uploader-icon {
  width: 76px;
  height: 76px;
  line-height: 76px;
  border-radius: 50%;
}
/* .avatar-uploader{display:flex;} */
/*  */
.el-form-item__content {
  display: flex;
}
.el-form-item__content {
  position: relative;
}
.yzBtn {
  position: absolute;
  right: 1px;
  top: 1px;
  z-index: 5;
  background: #e6cf68;
  border: 1px solid transparent !important;
  bottom: 1px;
  width: 125px;

  color: #836426;
  cursor: pointer;
}
.el-form-item {
  margin-bottom: 20px;
}
.el-alert {
  position: absolute;
  bottom: -25px;
  left: -16px;
  height: 30px;
  background: none;
  text-align: left;
  width: 100%;
  font-size: 12px;
}
.el-alert--success.is-light {
  background: none;
}
.el-alert.is-center {
  justify-content: flex-start;
}
.el-alert__title {
  font-size: 12px;
}
/*  */
.selfUser .second .el-form,.selfUser .third .el-form{margin-top:100px;}
</style>



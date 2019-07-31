<template>
  <div class="contentMain">
    <div class="contentMainDIv selfUser">
      <el-tabs v-model="activeName">
        <el-tab-pane label="个人资料" name="first">
          <div class="first flex-box-center">
            <el-form ref="form" :model="form" label-width="100px">
              <el-upload
                class="avatar-uploader flex-box-center"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
              <el-form-item label="用户名：">
                <el-input v-model="form.name" placeholder="2-6个字符"></el-input>
              </el-form-item>
              <el-form-item label="昵称：">
                <el-input v-model="form.name" placeholder="必须真实有效"></el-input>
              </el-form-item>
              <el-form-item label="姓名：">
                <el-input v-model="form.name" placeholder="姓名必须真实有效"></el-input>
              </el-form-item>
              <el-form-item label="手机：" >
                <el-input v-model="form.name" placeholder="输入正确的手机号码"></el-input>
              </el-form-item>
              <el-form-item label="邮箱：">
                <el-input v-model="form.name" placeholder="输入合法的邮箱地址"></el-input>
              </el-form-item>
               <el-form-item label="出生日期：">
                <el-input v-model="form.name" placeholder="年/月/日"></el-input>
              </el-form-item>
              <el-form-item >
                <el-button type="default">取消</el-button>
                 <el-button type="default">提交</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="修改登录密码" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="修改资金密码" name="third">角色管理</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      imageUrl: ""
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>
<style>
.contentMainDIv {
  padding: 40px 35px 0 35px;
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
  text-align: center
}
.el-form-item{margin-left:-90px;}
/* 头像上传 */
.selfUser .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

margin:32px 0 56px 0;
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
  width: 178px;
  height: 178px;
  display: block;
}
.selfUser button{width:160px;height:44px;background:#E6CF68;color:#836426;cursor: pointer;margin-top:38px;}
.el-button:focus, .el-button:hover{
  background:#E6CF68;color:#836426;border:none;
}
.selfUser .avatar-uploader-icon{width:76px;height:76px;line-height:76px;border-radius:50%;}
/* .avatar-uploader{display:flex;} */
/*  */
</style>



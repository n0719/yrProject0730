<template>
  <div class="contentMain">
    <div class="contentMainDIv">
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
              <el-form-item label="活动名称：">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="活动名称：">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="活动名称：">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="活动名称：">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="活动名称：">
                <el-input v-model="form.name"></el-input>
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
.el-tabs__active-bar {
  display: none;
}
.el-tabs__nav {
  width: 100%;
}
.el-tabs__item {
  width: 33.3%;
  text-align: center;
  background: #eee;
  color: #836426;
  font-size: 13px;
  height: 44px;
  line-height: 44px;
  margin-right: 1px;
}
.el-tabs__item.is-active {
  background: #e6cf68;
  color: #836426;
}
.el-form {
  width: 500px;
}
/* 头像上传 */
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-uploader-icon{width:76px;height:76px;line-height:76px;border-radius:50%;}
/* .avatar-uploader{display:flex;} */
/*  */
</style>



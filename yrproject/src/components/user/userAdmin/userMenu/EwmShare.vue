<template>
  <el-row class="contentMainBottom">
    <div>
       <p>推广链接：{{invite_url}}</p>
      <p>
        <el-button type="primary" round @click="copyUrl(invite_url)">复制链接</el-button>
        <!-- <el-button type="primary" round @click="navSubordMems">注册下级会员</el-button> -->
      </p>
     
    </div>
    <div>
      <img :src="qrcode" style="width:80px;height:80px;" alt />
    </div>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      qrcode: "", //二维码
      invite_url: "" //邀请链接
    };
  },
  mounted() {
    this.qrcode = "data:image/png;base64," + this.$store.state.infoData.qrcode;
    this.invite_url = this.$store.state.infoData.invite_url;
  },
  methods: {
    navSubordMems() {
      this.$router.push({ path: "/subordMems" });
      this.$store.commit("changeUname", "下级会员注册");
    },
    copyUrl(data) {
      let url = data;
      let oInput = document.createElement("input");
      oInput.value = url;
      document.body.appendChild(oInput);
      oInput.select(); // 选择对象;
      document.execCommand("Copy"); // 执行浏览器复制命令
      this.$message({
        message: "已成功复制到剪切板",
        type: "success"
      });
      oInput.remove();
    }
  }
};
</script>
<style >
.contentMainBottom {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 37px 30px 0;
}
.contentMainBottom .el-button.is-round {
  padding: 6px 15px;
  font-size: 12px;
  background: #e6cf68;
  color: #836426;
  border: none;
}
.contentMainBottom p {
  text-align: right;
}
.contentMainBottom p:last-child {
  letter-spacing: 2px;
}
.contentMainBottom > div:first-child {
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 10px;
}
.ewmShare {
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}
</style>



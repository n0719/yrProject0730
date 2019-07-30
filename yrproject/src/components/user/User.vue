<template>
  <div class="user">
    <div class="userBody"> 
      <div class="userMain">
        <el-row class="container">
          <el-col :span="6">
            <user-left></user-left>
          </el-col>
          <el-col :span="18">
            <el-row>
              <user-header></user-header>
            </el-row>
            <el-row>
              <user-content></user-content>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import UserHeader from "@/components/user/userAdmin/UserHeader";
import UserLeft from "@/components/user/userAdmin/UserLeft";
import UserContent from "@/components/user/userAdmin/UserContent";
export default {
  name: "yrUser",
  data() {
    return {};
  },
  components: {
    UserHeader,
    UserLeft,
    UserContent
  }
};
</script>
<style>
.user {
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
}
.userBody{displaY:flex;justify-content:center;align-items:center;height:100%;width:100%;}
.userMain {
  width:75%;
  height:82%;
}
.user .container{height:100%;}
.el-col-6,.el-col-18{height:100%;box-sizing: border-box;display:flex;flex-direction: column;}
.el-col-18 .el-row:nth-of-type(1){height:50px;}
.el-col-18 .el-row:nth-of-type(2){flex:1;}
</style>



<template>
  <div class="user">
    <div class="userBody"> 
      <div class="userMain" :class="[winWidth>1920?'aaa':'bbb',winWidth<1600?'ccc':'bbb']">
        <el-row class="container">
          <el-col :span="5">
            <user-left></user-left>
          </el-col>
          <el-col :span="19" class="row19">
            <el-row class="rowTop">
              <user-header></user-header>
            </el-row>
            <el-row class="rowBottom">
                 <user-content>
                   <router-view></router-view>
                 </user-content>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import UserHeader from "@/components/user/userAdmin/UserHeader";
import UserLeft from "@/components/user/userAdmin/UserLeft";
import UserContent from "@/components/user/userAdmin/UserContent";
export default {
        computed: {
        ...mapState(['modelShow'])},
  name: "yrUser",
  data() {
    return {
        winWidth:document.documentElement.clientWidth,
        aaa:"1465px",
        bbb:"75%",
        ccc:"90%"
    };
  },
  mounted(){

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
.aaa{width:1465px;}
.bbb{width:75%;}
.ccc{width:90%;}
.user .container{height:100%;}
.userMain .el-col-5,.el-col-19{height:100%;box-sizing: border-box;display:flex;flex-direction: column;}
.userMain .rowTop{height:50px;}
.userMain .rowBottom{flex:1;}
</style>



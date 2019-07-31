<template>
    <div class="userHeader">
       <div class="headerLeft">
  
         <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item >首页</el-breadcrumb-item>
    <el-breadcrumb-item >会员中心</el-breadcrumb-item>
  <el-breadcrumb-item>{{this.urlName}}</el-breadcrumb-item>

</el-breadcrumb>
       </div>
       <div class="headerRight">
           <img src="../../../assets/user/guanbi.png"  @click="closeModel" alt="">
       </div>
     
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState(['urlName'])},
    name:"userHeader",
    methods:{
        closeModel(){
               this.$store.commit("umodelShow",false);
            
        }
    },
   
    mounted(){
       
    }
  
}
</script>
<style>
.userHeader{
    background:#2B3643;
    height:50px;
    align-items: center;
   color:#836426;
   display: flex;
   justify-content: space-between;
   padding:0 30px;
}
.userHeader .headerLeft span{letter-spacing: 0.8px;font-size:14px;font-family: PingFang SC Regular;}
.userHeader .headerLeft span:last-child{color:#fff;}
.userHeader .headerRight img{width:18px;height:18px;}
.el-breadcrumb__inner,.el-breadcrumb__separator{color:#E6CF68;}
.el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover{color:#fff;}
</style>



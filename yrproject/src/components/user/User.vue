<template>
    <div class="user">
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
</template>
<script>
import UserHeader from '@/components/user/userAdmin/UserHeader'
import UserLeft from '@/components/user/userAdmin/UserLeft'
import UserContent from '@/components/user/userAdmin/UserContent'
export default {
    name:"yrUser",
    data(){
        return{

        }
    },
    components:{
       UserHeader,
       UserLeft,
       UserContent
    }
}
</script>
<style>

 .user{position:fixed;width:100%;top:0;bottom:0;left:0;background:rgba(0,0,0,0.5);}
 .userMain {
  width: 1400px;
  margin: 0 auto;
  border: 1px solid #ddd;
  min-height: 400px;
  margin-top:30px;
}
</style>



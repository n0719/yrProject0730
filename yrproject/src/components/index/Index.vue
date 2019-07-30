<template>
    <div>
       <a @click="loginModel">登录</a>
       <a @click="userModel">用户中心</a>
   
      <transition><yr-login v-if="loginSHow"></yr-login></transition> 
      <transition name="fade">
            <yr-user v-if="userShow"></yr-user>
      </transition>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import Login from '@/components/user/login/Login'
import User from '@/components/user/User'
export default {
    computed: {
        ...mapState(['umodelShow','lmodelShow'])
        },
    name:"login",
    data(){
        return {
            loginSHow:"",
            userShow:""
        }
    },
   
    methods:{
         loginModel(){
             this.loginSHow=true;
             this.userSHow=false;
         },
         userModel(){
            //  this.loginSHow=this.lmodelShow;
            //  this.userShow=!this.userShow;
           this.$store.commit("umodelShow",true)
           this.userShow=!this.userShow
          
         },
    },
   
    watch:{
        umodelShow(newName,oldName){
          if(oldName==true){
              this.userShow=false;
          }
        }
    },
    components:{
        yrLogin:Login,
        yrUser:User
    }
}
</script>
<style>
 

.fade-enter, .fade-leave-to {
  opacity: 0
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
</style>



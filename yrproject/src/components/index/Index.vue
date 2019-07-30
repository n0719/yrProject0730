<template>
    <div>
       <a @click="loginModel">登录</a>
       <a @click="userModel">用户中心</a>
       
       <yr-login v-if="loginSHow"></yr-login>
       <yr-user v-if="userShow"></yr-user>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import Login from '@/components/user/login/Login'
import User from '@/components/user/User'
export default {
    computed: {
        ...mapState(['modelShow'])},
    name:"login",
    data(){
        return {
            loginSHow:"",
            userShow:""
        }
    },
    mounted(){
        this.loginSHow=this.modelSHow;
        this.userShow=this.modelSHow;
    },
    methods:{
         loginModel(){
             this.loginSHow=true;
             this.userSHow=false;
         },
         userModel(){
             this.loginSHow=false;
             this.userShow=true;
         }
    },
    components:{
        yrLogin:Login,
        yrUser:User
    }
}
</script>
<style>
 

</style>



<template>
    <div class="login">
        <div class="bounced">
             <div class="bounced-header">登录</div>
         </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
 .login{position:fixed;width:100%;top:0;bottom:0;left:0;background:rgba(0,0,0,0.5);text-align:Center;z-index:5;} 
 .bounced{
     position: absolute;
     left: 50%;
     top: 50%;
     transform:translate(-50%,-50%);
     width: 450px;
     height: 540px;
     background: #fff;
 }
 .bounced-header{
     background: #2B3643;
     color: #E6CF68;
 }
</style>



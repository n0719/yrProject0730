<template>
    <div>
          <el-row class="contentMainBottom">
           <div>
              <p>
                  <el-button type="primary" round>复制链接</el-button>
                  <el-button type="primary" round>注册下级会员</el-button>
              </p>
              <p>
                  推广链接：http://cqbet.vip/r?i=mkcidl
              </p>
           </div>
           <div>
               <img src="../../../../assets/user/ewm.png" alt="">
           </div>
        </el-row>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
 .contentMainBottom{flex:1;display:flex;justify-content: flex-end;align-items: flex-end;padding:0 37px 30px 0; }
  .contentMainBottom .el-button.is-round{padding:6px 15px;font-size:12px;background:#E6CF68;color:#836426;border:none;}
  .contentMainBottom p{text-align: right;}
  .contentMainBottom p:last-child{letter-spacing: 2px;}
  .contentMainBottom>div:first-child{margin-right:10px;display: flex;flex-direction: column;justify-content: space-around;margin-bottom:10px;}

</style>



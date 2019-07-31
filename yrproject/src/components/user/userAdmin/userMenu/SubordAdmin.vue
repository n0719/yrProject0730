<template>
<!-- 下级管理 -->
     <div class="contentMain">
        <div class="contentMainDIv">
            <el-row class="ewmShare">
                <ewm-share></ewm-share>
            </el-row>
        </div>
     </div>
</template>
<script>
import EwmShare from "@/components/user/userAdmin/userMenu/EwmShare";
export default {
    data(){
        return {

        }
    },
    components:{
        EwmShare:EwmShare
    }
}
</script>
<style>


</style>



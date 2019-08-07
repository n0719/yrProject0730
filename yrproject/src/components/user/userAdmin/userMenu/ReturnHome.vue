<template>
<!-- 返回首页 -->
     <div>
         returnHome
     </div>
</template>
<script>
// import api from "@/axios/api"
export default {
    data(){
        return {
        }
    },
    mounted(){
        this.$get(`/wd/${api.api.abc}`).then(res=>{
           console.log(res)
      })
    }
}
</script>
<style >


</style>



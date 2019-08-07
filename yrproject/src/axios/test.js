 
   const getReg=function (obj) {
        var index = obj.lastIndexOf(":");
        obj = obj.substring(index + 1, obj.length).split("/").join("");
        return obj;
   }
   import store from "../store/index"
   const aaa=store.state.regRule;
  const bb=aaa.Public;
  console.log(aaa);
  
   export default {
    getReg
   }
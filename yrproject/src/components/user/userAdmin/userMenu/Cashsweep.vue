<template>
  <div class="contentMain">
    <div class="contentMainDIv">
      <el-row class="cashsweep">
        <el-row class="payNav">
          <span></span>资金归集
        </el-row>

        <el-row class="cashsweepTable">
          <el-row >
            <el-col :span="16">
              <table border="0" cellspacing="0" cellpadding="0">
                <thead>
                  <tr>
                    <td width="33%">游戏</td>
                    <td width="33%">余额</td>
                    <td width="33%">操作</td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in cashsweepData" :key="index">
                    <td>{{item.gameName}}</td>
                    <td>{{item.balance}}</td>
                    <td>
                      <el-button class="yrBtn" @click="cashsweepClick(index)" :class="item.classState==true?'yrBtnZjgj':''">资金归集</el-button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </el-col>
            <el-col :span="8" class="yjgj">
              <img :src="zjgjImg" @click="yjZjgj" alt />
            {{yjgjText}}
            </el-col>
          </el-row>
        </el-row>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cashsweepData: [
        {
          id: 1,
          gameName: "CB",
          balance: "110",
          classState:false
        },
        {
          id: 2,
          gameName: "CB",
          balance: "110",
           classState:false
        },
        {
          id: 3,
          gameName: "CB",
          balance: "110",
           classState:false
        },
        {
          id: 4,
          gameName: "CB",
          balance: "110",
           classState:false
        },
        {
          id: 5,
          gameName: "CB",
          balance: "110",
            classState:false
        },
        {
          id: 6,
          gameName: "CB",
          balance: "110",
            classState:false
        },
        {
          id: 7,
          gameName: "CB",
          balance: "110",
            classState:false
        },
        {
          id: 8,
          gameName: "CB",
          balance: "110"
        },
           {
          id: 6,
          gameName: "CB",
          balance: "110"
        },
        {
          id: 7,
          gameName: "CB",
          balance: "110"
        },
        {
          id: 8,
          gameName: "CB",
          balance: "110"
        }
      ],
      active:-1,
      yrBtnZjgj:"",
      yjgjText:"  一键归集所有资金",
      zjgjImg:require('../../../../assets/user/guiji.png')
          
  
    };
  },
  methods: {
    cashsweepClick(index) {
      this.ind=index;
     this.cashsweepData[index].balance="0"
     this.cashsweepData[index].classState=true
 
    },
    yjZjgj(){
        for(var i=0;i<this.cashsweepData.length;i++){
        this.cashsweepData[i].classState=true;
         this.cashsweepData[i].balance=0;
         this.yjgjText="已归集所有资金";
         this.zjgjImg=require('../../../../assets/user/yiguji.png')
        //    this.zjgjImg=require('../../../../assets/user/yiguji.png') //归集失败图片
        }
    }
  }
};
</script>
<style>
.cashsweepTable table {
  width: 100%;
  padding: 0 70px;
  margin-top: 30px;
}
.cashsweep {
  display: flex;
  flex-direction: column;
  height:100%;
}
.cashsweepTable .yrBtnZjgj{
    background:#CCCCCC;
}
.cashsweepTable{}
.cashsweepTable .el-row{height:100%;}
.cashsweepTable .yrBtn {
  padding: 8px 11px;
}
.cashsweepTable table td {
  text-align: center;
  height: 50px;
}
.cashsweepTable table thead tr {
  background: #e6cf68;
  color: #836426;
}
.cashsweepTable table tbody tr:nth-of-type(odd) {
  background: #fff;
}
.cashsweepTable table tbody tr:nth-of-type(even) {
  background: #f2efe9;
}
.yjgj{display:flex; flex-direction: column;justify-content: center;align-items: center;height:100%;padding-right:80px;padding-top:30px;}
.yjgj img{margin-bottom:10px;}
</style>



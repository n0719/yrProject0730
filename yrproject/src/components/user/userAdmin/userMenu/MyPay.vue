<template>
  <!-- 我的账户 -->
  <div class="contentMain myPay">
    <div class="contentMainTop ">
      <el-row class="container">
        <el-row class="payNav">
          <span></span>我的账户
        </el-row>
        <el-row>
          <el-col :span="6">
            <span>余额(元)</span>
            <span>1000.00</span>
          </el-col>
          <el-col :span="6">
            <span>返水\佣金(元)</span>
            <span>1000.00</span>
          </el-col>
          <el-col :span="6">
            <span>充值(元)</span>
            <span>1000.00</span>
          </el-col>
          <el-col :span="6">
            <span>提现(元)</span>
            <span>1000.00</span>
          </el-col>
        </el-row>
      </el-row>
    </div>
    <div class="contentMainContent">
      <el-row class="container">
        <el-row class="payNav">
          <span></span>查询
        </el-row>
        <el-row class="contentMainTable">
          <span>时间：</span>
          <el-date-picker
            v-model="dataStarrt"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
          <span>至：</span>
          <el-date-picker
            v-model="dataEnd"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
          <el-button type="primary" class="btnColor">查询</el-button>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="昨天" name="first">
              <el-table :data="tableData" stripe  style="width: 100%" class="recoredTable">
                <el-table-column prop="type" label="游戏种类"></el-table-column>
                <el-table-column prop="num" label="投注笔数"></el-table-column>
                <el-table-column prop="effectiveNum" label="有效投注"></el-table-column>
                <el-table-column prop="return" label="返回佣金"></el-table-column>
                <el-table-column prop="defeat" label="实际亏盈"></el-table-column>
                <el-table-column prop="bonus" label="优惠奖金"></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="今天" name="second">
              <el-table :data="tableData" stripe style="width: 100%" class="recoredTable">
                <el-table-column prop="type" label="游戏种类" width></el-table-column>
                <el-table-column prop="num" label="投注笔数" width></el-table-column>
                <el-table-column prop="effectiveNum" label="有效投注"></el-table-column>
                <el-table-column prop="return" label="返回佣金"></el-table-column>
                <el-table-column prop="defeat" label="实际亏盈"></el-table-column>
                <el-table-column prop="bonus" label="优惠奖金"></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="上周" name="third">
              <el-table :data="tableData" stripe style="width: 100%" class="recoredTable">
                <el-table-column prop="type" label="游戏种类" width></el-table-column>
                <el-table-column prop="num" label="投注笔数" width></el-table-column>
                <el-table-column prop="effectiveNum" label="有效投注"></el-table-column>
                <el-table-column prop="return" label="返回佣金"></el-table-column>
                <el-table-column prop="defeat" label="实际亏盈"></el-table-column>
                <el-table-column prop="bonus" label="优惠奖金"></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="上月" name="fourth">
              <el-table :data="tableData" stripe style="width: 100%" class="recoredTable">
                <el-table-column prop="type" label="游戏种类" width></el-table-column>
                <el-table-column prop="num" label="投注笔数" width></el-table-column>
                <el-table-column prop="effectiveNum" label="有效投注"></el-table-column>
                <el-table-column prop="return" label="返回佣金"></el-table-column>
                <el-table-column prop="defeat" label="实际亏盈"></el-table-column>
                <el-table-column prop="bonus" label="优惠奖金"></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="本月" name="five">
              <el-table :data="tableData" stripe style="width: 100%" class="recoredTable">
                <el-table-column prop="type" label="游戏种类" width></el-table-column>
                <el-table-column prop="num" label="投注笔数" width></el-table-column>
                <el-table-column prop="effectiveNum" label="有效投注"></el-table-column>
                <el-table-column prop="return" label="返回佣金"></el-table-column>
                <el-table-column prop="defeat" label="实际亏盈"></el-table-column>
                <el-table-column prop="bonus" label="优惠奖金"></el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-row>
         <el-row class="ewmShare">
             <ewm-share></ewm-share>
         </el-row>
      </el-row>
    </div>
  </div>
</template>
<script>
import EwmShare from "@/components/user/userAdmin/userMenu/EwmShare";
export default {
  data() {
    return {
      dataStarrt: "",
      dataEnd: "",
      tableData: [
        {
          type: "彩票游戏",
          num: "1",
          effectiveNum: "0",
          return: "0",
          defeat: "0",
          bonus: "0"
        },
        {
          type: "真人视讯",
          num: "0",
          effectiveNum: "0",
          return: "0",
          defeat: "0",
          bonus: "0"
        },
        {
          type: "老虎机",
          num: "0",
          effectiveNum: "0",
          return: "0",
          defeat: "0",
          bonus: "0"
        },
        {
          type: "棋牌",
          num: "0",
          effectiveNum: "0",
          return: "0",
          defeat: "0",
          bonus: "0"
        },
        {
          type: "体育",
          num: "0",
          effectiveNum: "0",
          return: "0",
          defeat: "0",
          bonus: "0"
        }
      ],
      activeName: "first"
    };
  },
  components:{
      EwmShare:EwmShare
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style>
@import "../../../../assets/search.css";
.mypay .container{height:100%;}
.myPay .el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 140px;
}
.contentMain {
  padding: 20px;
  /* display: flex;
  flex-direction: column; */
  height: 100%;
  /* box-sizing: border-box; */
}
.contentMain .container{width:100%;}
.myPay .contentMainTop {
  margin-bottom: 20px;
  height: 186px;
  background: #fff;
}
/* .payNav {
  display: flex;
  padding-left: 35px;
  align-items: center;
  color: #836426;
  padding: 18px 0 0 35px;
}
.payNav span {
  height: 14px;
  border-right: 4px solid #836426;
  margin-right: 5px;
} */
.myPay .contentMainTop .container {
  height: 168px;
  display: flex;
  flex-direction: column;
}
.myPay .contentMainTop .container .el-row:nth-of-type(1) {
  /* padding:18px 0 0 35px; */
}
.myPay .contentMainTop .container .el-row:nth-of-type(2) {
  flex: 1;
  display: flex;
  align-items: center;
}
.myPay .contentMainTop .el-col-6 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60%;
  border-right: 1px solid #707070;
  flex-direction: column;
}
.myPay .contentMainTop .el-col-6:nth-of-type(4) {
  border: none;
}
.myPay .contentMainTop .el-col-6 span {
  text-align: center;
  letter-spacing: 1px;
  margin: 1px 0;
}
.myPay .contentMainTop .el-col-6 span:nth-of-type(2) {
  font-size: 34px;
  color: #836426;
}
/* .myPay .ewmShare{height:100%;}
.myPay .ewmShare>div{height:100%;display:flex;justify-content: flex-end;align-items: flex-end;} */
.myPay .el-table__header , .myPay .el-table__body{width:100%!important;}
</style>




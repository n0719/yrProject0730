<template>
  <!-- 团队总览 -->
  <div class="contentMain">
    <div class="contentMainContent teamoverview">
      <el-row class="container">
        <el-row class="payNav">
          <span></span>查询
        </el-row>
        <el-row class="contentMainTable">
          <el-row class="pd-l-20">
          <span class="common-color">时间：</span>
          <el-date-picker
            v-model="dataStarrt"
            type="date"
            placeholder="年 \ 月 \ 日"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
          <span class="common-color">至：</span>
          <el-date-picker
            v-model="dataEnd"
            type="date"
            placeholder="年 \ 月 \ 日"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
          <el-button type="primary" class="btnColor">查询</el-button>
          </el-row>
          
          <el-table :data="teamData" stripe style="width: 100%" class="teamTable">
                <el-table-column prop="teamBalance" label="当前团队余额(元）" width></el-table-column>
                <el-table-column prop="teamCharge" label="团队充值(元）" width></el-table-column>
                <el-table-column prop="teamWithdrawal" label="团队提现(元）"></el-table-column>
                <el-table-column prop="teamPeople" label="总团队人数"></el-table-column>
                <el-table-column prop="firstPeople" label="首充人数"></el-table-column>
                <el-table-column prop="activePeople" label="活跃人数"></el-table-column>
                <el-table-column prop="onlinePeople" label="在线人数"></el-table-column>
                <el-table-column prop="threePeople" label="3天未登录人数"></el-table-column>
                <el-table-column prop="sevenPeople" label="7天未登录人数"></el-table-column>
              </el-table>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="昨天" name="first">
              <el-table :data="tableData" stripe style="width: 100%" class="recoredTable">
                <el-table-column prop="type" label="游戏种类" width></el-table-column>
                <el-table-column prop="num" label="投注笔数" width></el-table-column>
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

      </el-row>
    </div>

  </div>
</template>
<script>

export default {
  data() {
    return {
      dataStarrt: "",
      dataEnd: "",
      teamData:[
          {
            teamBalance: "1000",
            teamCharge: "0.00",
            teamWithdrawal: "0.00",
            teamPeople: "3(代理2/会员1)",
            firstPeople: "34",
            activePeople: "2342",
            onlinePeople: "986",
            threePeople: "34",
            sevenPeople: "21"
          }
      ],
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
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },

};
</script>
<style >
@import "../../../../assets/search.css";
.teamoverview .el-date-editor.el-input, .el-date-editor.el-input__inner{width:initial;}
.teamoverview .el-date-editor.el-input,
.teamoverview .el-date-editor.el-input__inner {
  width: 140px;
  margin: 0 10px;
}
.contentMain {
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
}
.teamoverview .payNav {
  display: flex;
  padding-left: 35px;
  align-items: center;
  color: #836426;
  padding: 18px 0 0 35px;
}
.teamoverview .payNav span {
  height: 14px;
  border-right: 4px solid #836426;
  margin-right: 5px;
}
.teamoverview .teamTable{
    margin-top: 20px;
    margin-bottom: 30px;
    border: 1px solid #836426;
    border-top:0; 
}
.teamoverview .teamTable th{
     border-top: 1px solid #836426;
}
.teamoverview .teamTable th, .teamTable tr,.teamTable td{
    background: #f2efe9;
    font-size: 12px;
    color: #836426;
    text-align: center;
}
.teamoverview .teamTable td{
    font-size: 14px;
    border-top: 1px solid #836426;
}
.teamoverview .teamTable th>.cell{
    font-weight: normal;
}
.teamoverview .el-input__inner{
    border-color: #836426;
}
</style>



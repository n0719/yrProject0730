<template>
  <!-- 我的账户 -->
  <div class="contentMain">
    <div class="contentMainContent">
      <el-row class="container">
        <el-row class="payNav">
          <span></span>游戏记录
        </el-row>
        <el-row class="contentMainTable">
          <span class="common-color">时间：</span>
          <el-date-picker
            v-model="dataStarrt"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
          <span class="common-color">至：</span>
          <el-date-picker
            v-model="dataEnd"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
          <el-button type="primary" class="btnColor">查询</el-button>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="昨天" name="first">
              <el-table :data="tableData" stripe style="width: 100%" class="recoredTable">
                <el-table-column prop="num" label="序号" width></el-table-column>
                <el-table-column prop="type" label="游戏名称" width></el-table-column>
                <el-table-column prop="effectiveNum" label="投注金额"></el-table-column>
                <el-table-column prop="return" label="盈亏金额"></el-table-column>
                <el-table-column prop="defeat" label="有效投注"></el-table-column>
                <el-table-column prop="bonus" label="游戏时间"></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="今天" name="second">
              <el-table :data="tableData" stripe style="width: 100%" class="recoredTable">
                <el-table-column prop="num" label="序号" width></el-table-column>
                <el-table-column prop="type" label="游戏名称" width></el-table-column>
                <el-table-column prop="effectiveNum" label="投注金额"></el-table-column>
                <el-table-column prop="return" label="盈亏金额"></el-table-column>
                <el-table-column prop="defeat" label="有效投注"></el-table-column>
                <el-table-column prop="bonus" label="游戏时间"></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="上周" name="third">
              <el-table :data="tableData" stripe style="width: 100%" class="recoredTable">
                <el-table-column prop="num" label="序号" width></el-table-column>
                <el-table-column prop="type" label="游戏名称" width></el-table-column>
                <el-table-column prop="effectiveNum" label="投注金额"></el-table-column>
                <el-table-column prop="return" label="盈亏金额"></el-table-column>
                <el-table-column prop="defeat" label="有效投注"></el-table-column>
                <el-table-column prop="bonus" label="游戏时间"></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="上月" name="fourth">
              <el-table :data="tableData" stripe style="width: 100%" class="recoredTable">
                <el-table-column prop="num" label="序号" width></el-table-column>
                <el-table-column prop="type" label="游戏名称" width></el-table-column>
                <el-table-column prop="effectiveNum" label="投注金额"></el-table-column>
                <el-table-column prop="return" label="盈亏金额"></el-table-column>
                <el-table-column prop="defeat" label="有效投注"></el-table-column>
                <el-table-column prop="bonus" label="游戏时间"></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="本月" name="five">
              <el-table :data="tableData" stripe style="width: 100%" class="recoredTable">
                <el-table-column prop="num" label="序号" width></el-table-column>
                <el-table-column prop="type" label="游戏名称" width></el-table-column>
                <el-table-column prop="effectiveNum" label="投注金额"></el-table-column>
                <el-table-column prop="return" label="盈亏金额"></el-table-column>
                <el-table-column prop="defeat" label="有效投注"></el-table-column>
                <el-table-column prop="bonus" label="游戏时间"></el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-row>
        <el-row class="text-center">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="50">
                </el-pagination>
        </el-row>
      </el-row>
    </div>
    <el-row class="ewmShare">
                <ewm-share></ewm-share>
            </el-row>
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
          num: "2",
          effectiveNum: "0",
          return: "0",
          defeat: "0",
          bonus: "0"
        },
        {
          type: "老虎机",
          num: "3",
          effectiveNum: "0",
          return: "0",
          defeat: "0",
          bonus: "0"
        },
        {
          type: "棋牌",
          num: "4",
          effectiveNum: "0",
          return: "0",
          defeat: "0",
          bonus: "0"
        },
        {
          type: "体育",
          num: "5",
          effectiveNum: "0",
          return: "0",
          defeat: "0",
          bonus: "0"
        },
        {
          type: "老虎机",
          num: "6",
          effectiveNum: "0",
          return: "0",
          defeat: "0",
          bonus: "0"
        },
        {
          type: "棋牌",
          num: "7",
          effectiveNum: "0",
          return: "0",
          defeat: "0",
          bonus: "0"
        },
        {
          type: "体育",
          num: "8",
          effectiveNum: "0",
          return: "0",
          defeat: "0",
          bonus: "0"
        },
        {
          type: "棋牌",
          num: "9",
          effectiveNum: "0",
          return: "0",
          defeat: "0",
          bonus: "0"
        },
        {
          type: "体育",
          num: "10",
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
    },
      components:{
        EwmShare:EwmShare
    }
  }
};
</script>
<style>
@import "../../../../assets/search.css";
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
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
.contentMainTop {
  margin-bottom: 20px;
  height: 186px;
  background: #fff;
}
.payNav {
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
}
.contentMainTop .container {
  height: 168px;
  display: flex;
  flex-direction: column;
}
.contentMainTop .container .el-row:nth-of-type(1) {
  /* padding:18px 0 0 35px; */
}
.contentMainTop .container .el-row:nth-of-type(2) {
  flex: 1;
  display: flex;
  align-items: center;
}
.contentMainTop .el-col-6 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60%;
  border-right: 1px solid #707070;
  flex-direction: column;
}
.contentMainTop .el-col-6:nth-of-type(4) {
  border: none;
}
.contentMainTop .el-col-6 span {
  text-align: center;
  letter-spacing: 1px;
  margin: 1px 0;
}
.contentMainTop .el-col-6 span:nth-of-type(2) {
  font-size: 34px;
  color: #836426;
}
.el-tabs__content{
    margin-top: 30px;
    margin-bottom: 20px;
}
</style>



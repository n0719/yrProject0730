<template>
  <!-- 资金往来 -->
  <div class="contentMain">
    <div class="contentMainContent">
      <el-row class="container">
        <el-row class="payNav">
          <span></span>资金往来
        </el-row>
        <el-row class="contentMainTable">
          <el-row class="pd-l-20">
            <span class="common-color">下级管理：</span>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <span class="common-color timeLabel">时间段：</span>
            <el-date-picker v-model="dataStarrt" type="datetime" placeholder="年/月/日  时/分/秒" class="datePicker"></el-date-picker>
            <span class="common-color">——</span>
            <el-date-picker v-model="dataEnd" type="datetime" placeholder="年/月/日  时/分/秒" class="datePicker"></el-date-picker>
            <el-button type="primary" class="btnColor">查询</el-button>
          </el-row>
          <el-table
            :data="tableData"
            stripe
            style="width: 100%"
            class="recoredTable mg-t-30"
            empty-text="暂无记录"
          >
            <el-table-column prop="oid" label="单号" width></el-table-column>
            <el-table-column prop="time" label="日期" width></el-table-column>
            <el-table-column prop="types" label="交易类别"></el-table-column>
            <el-table-column prop="total" label="交易金额"></el-table-column>
            <el-table-column prop="cashPay" label="现金交易"></el-table-column>
            <el-table-column prop="notice" label="备注"></el-table-column>
          </el-table>
        </el-row>
        <!-- 分页 -->
        <el-row class="text-center">
          <el-pagination background layout="prev, pager, next" :total="50"></el-pagination>
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
      tableData: [
        {
          oid: "65432345",
          time: "2019/04/29 02:00:00",
          types: "提现",
          total: "1000.00",
          cashPay: "0",
          notice: "——"
        },
        {
          oid: "65432345",
          time: "2019/04/29 02:00:00",
          types: "额度转换",
          total: "1000.00",
          cashPay: "0",
          notice: "——"
        },
        {
          oid: "65432345",
          time: "2019/04/29 02:00:00",
          types: "充值",
          total: "1000.00",
          cashPay: "0",
          notice: "——"
        },
        {
          oid: "65432345",
          time: "2019/04/29 02:00:00",
          types: "百家乐",
          total: "1000.00",
          cashPay: "0",
          notice: "——"
        },
        {
          oid: "65432345",
          time: "2019/04/29 02:00:00",
          types: "老虎机",
          total: "1000.00",
          cashPay: "0",
          notice: "一定捞回来"
        },
        {
          oid: "65432345",
          time: "2019/04/29 02:00:00",
          types: "电子竞技",
          total: "1000.00",
          cashPay: "0",
          notice: "——"
        }
      ],
      options: [
        {
          value: "选项1",
          label: "提现"
        },
        {
          value: "选项2",
          label: "额度转换"
        },
        {
          value: "选项3",
          label: "充值"
        },
        {
          value: "选项4",
          label: "百家乐"
        },
        {
          value: "选项5",
          label: "老虎机"
        },
        {
          value: "选项6",
          label: "电子竞技"
        }
      ],
      value: ""
    };
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
.el-tabs__content {
  margin-top: 30px;
  margin-bottom: 20px;
}
.timeLabel {
  margin-left: 78px;
}
.el-date-editor.datePicker.el-input{
    width: 200px;
}
.el-input__inner{
    border-color: #836426;
}
</style>



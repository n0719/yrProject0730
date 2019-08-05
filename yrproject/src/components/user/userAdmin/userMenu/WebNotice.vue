<template>
  <!-- 网站公告 -->
  <div class="contentMain">
    <div class="contentMainContent">
      <el-row class="container">
        <el-row class="payNav">
          <span></span>网站公告
        </el-row>
        <el-row class="contentMainTable">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item v-for="(item,index) in noticeList" :key="index" :name="index">
              <template slot="title">
                <div class="flex-con">{{item.title}}</div>
                <div class="time">{{item.time}}</div>
              </template>
              <div v-html="item.content"></div>
            </el-collapse-item>
          </el-collapse>
        </el-row>
        <!-- 分页 -->
        <el-row class="text-center">
          <el-pagination background layout="prev, pager, next" :total="21" :page-size="7"></el-pagination>
        </el-row>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: 0,
      noticeList: [
        {
          title: "充500送500啦！！！",
          time: "2019/05/05 12:12:12",
          content:
            "<p>本周充值充500送500</p><div>自2019年5月10日 00:00:00至2019年5月17日23:59:59，凡在本站充值满500元赠送现金500元，赠送的500元可在平台任何场景下使用，不限次数,不限面值大小，充多少送多少</div>"
        },
        {
          title: "停电歇业通知",
          time: "2019/05/05 12:12:12",
          content:
            "<p>本周充值充500送500</p><div>自2019年5月10日 00:00:00至2019年5月17日23:59:59，凡在本站充值满500元赠送现金500元，赠送的500元可在平台任何场景下使用，不限次数,不限面值大小，充多少送多少</div>"
        },
        {
          title: "网站维护通知",
          time: "2019/05/05 12:12:12",
          content:
            "<p>本周充值充500送500</p><div>自2019年5月10日 00:00:00至2019年5月17日23:59:59，凡在本站充值满500元赠送现金500元，赠送的500元可在平台任何场景下使用，不限次数,不限面值大小，充多少送多少</div>"
        },
        {
          title: "停电歇业通知",
          time: "2019/05/05 12:12:12",
          content:
            "<p>本周充值充500送500</p><div>自2019年5月10日 00:00:00至2019年5月17日23:59:59，凡在本站充值满500元赠送现金500元，赠送的500元可在平台任何场景下使用，不限次数,不限面值大小，充多少送多少</div>"
        },
        {
          title: "网站维护通知",
          time: "2019/05/05 12:12:12",
          content:
            "<p>本周充值充500送500</p><div>自2019年5月10日 00:00:00至2019年5月17日23:59:59，凡在本站充值满500元赠送现金500元，赠送的500元可在平台任何场景下使用，不限次数,不限面值大小，充多少送多少</div>"
        },
        {
          title: "停电歇业通知",
          time: "2019/05/05 12:12:12",
          content:
            "<p>本周充值充500送500</p><div>自2019年5月10日 00:00:00至2019年5月17日23:59:59，凡在本站充值满500元赠送现金500元，赠送的500元可在平台任何场景下使用，不限次数,不限面值大小，充多少送多少</div>"
        },
        {
          title: "网站维护通知",
          time: "2019/05/05 12:12:12",
          content:
            "<p>本周充值充500送500</p><div>自2019年5月10日 00:00:00至2019年5月17日23:59:59，凡在本站充值满500元赠送现金500元，赠送的500元可在平台任何场景下使用，不限次数,不限面值大小，充多少送多少</div>"
        }
      ]
    };
  },
  methods: {}
};
</script>
 <style>
@import "../../../../assets/search.css";
.el-collapse {
  border: 0;
  padding: 0 5px;
}
.el-collapse-item__header {
  border-bottom: 0;
  padding: 0 14px;
  color: #836426;
}
.el-collapse-item:nth-child(odd) .el-collapse-item__header {
  background: rgba(131, 100, 38, 0.1);
}
.el-collapse-item:nth-child(even) .el-collapse-item__header {
  background: rgba(249, 249, 249, 0.1);
}
.time {
  margin-right: 8px;
}
.el-collapse-item__wrap {
  border: 1px solid #836426;
  margin-bottom: 20px;
}
.el-collapse-item__content {
  padding: 20px;
}
.el-collapse-item__arrow.is-active {
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
</style>



<template>
  <div class="contentMain">
    <div class="contentMainDIv rechargeDiv">
      <el-row class="rechargeDivTop">
        <el-row class="payNav">
          <span></span>选择充值方式
        </el-row>
        <el-row class="recharge">
          <el-tabs v-model="activeName" class="selfTab">
            <el-tab-pane label="银行卡充值" name="first">
              <div class="first">
                <el-row v-if="nextModel">
                  <el-row class="payNav">选择银行卡</el-row>
                  <el-radio-group v-model="radio" @change="changeRadioBank">
                    <el-radio
                      v-for="(item,index) in bankLabel"
                      :key="index"
                      :label="index+1"
                      :class="activce == index+1 ? 'radioBorder' : ''"
                    >
                      <img :src="item.img" alt />
                    </el-radio>
                  </el-radio-group>
                </el-row>
                <el-row v-else class="flex-box-center">
                  <el-form label-width="100px">
                    <el-form-item label="收款银行：" prop>
                      <el-input name="uName" aria-required placeholder="2-6个字符"></el-input>
                    </el-form-item>
                    <el-form-item label="收款账号：" prop>
                      <el-input name="uName" aria-required placeholder="2-6个字符"></el-input>
                    </el-form-item>
                    <el-form-item label="收款人姓名：" prop>
                      <el-input name="uName" aria-required placeholder="2-6个字符"></el-input>
                    </el-form-item>
                    <el-form-item label="开户网点：" prop>
                      <el-input name="uName" aria-required placeholder="2-6个字符"></el-input>
                    </el-form-item>
                    <el-form-item label="存款姓名：" prop>
                      <el-input name="uName" aria-required placeholder="2-6个字符"></el-input>
                    </el-form-item>
                    <el-form-item label="存款时间：" prop>
                      <el-input name="uName" aria-required placeholder="2-6个字符"></el-input>
                    </el-form-item>
                    <el-form-item label="存款金额：" prop>
                      <el-input name="uName" aria-required placeholder="2-6个字符"></el-input>
                    </el-form-item>
                    <el-form-item label="支付银行：" prop>
                      <el-input name="uName" aria-required placeholder="2-6个字符"></el-input>
                    </el-form-item>
                    <el-form-item label="支付方式：" prop>
                      <el-input name="uName" aria-required placeholder="2-6个字符"></el-input>
                    </el-form-item>
                  </el-form>
                </el-row>
                <el-row>
                  <el-col :span="20" :offset="4" style="font-size:14px;color:#333;margin-top:10px;">
                    <span style="color:#ff0000;">温馨提示：</span>入款之前请核对公司入款账号，避免存入公司过期账号导致金额无法追回。
                  </el-col>
                </el-row>

                <el-row class="nextBtn">
                  <el-button
                    type="default"
                    v-bind:disabled="activce==-1?true:false"
                    @click="nextBtn"
                    v-if="nextModel"
                  >下一步</el-button>
                  <el-row v-else>
                    <el-button
                      type="default"
                      v-bind:disabled="activce==-1?true:false"
                      @click="returnModel"
                    >上一步</el-button>
                    <el-button type="default" v-bind:disabled="activce==-1?true:false">确认</el-button>
                  </el-row>
                </el-row>
              </div>
            </el-tab-pane>
            <el-tab-pane label="在线充值" name="second">
              <div class="second">
                <el-row v-if="nextModel">
                  <el-row class="payNav">请选择充值方式</el-row>

                  <el-radio-group v-model="radio1" @change="changeRadioOnline">
                    <el-radio
                      v-for="(item,index) in onlineLabel"
                      :key="index"
                      :label="index+1"
                      :class="activce == index+1 ? 'radioBorder' : ''"
                    >
                      <img :src="item.img" alt />
                    </el-radio>
                  </el-radio-group>
                </el-row>
                <el-row v-else class="flex-box-center">
                  <el-row v-if="confirmModel">
                    <el-form label-width="100px">
                      <el-form-item label="支付金额：" prop>
                        <el-input name="uName" aria-required placeholder="2-6个字符"></el-input>
                      </el-form-item>
                      <el-form-item label="转账人：" prop>
                        <el-input name="uName" aria-required placeholder="2-6个字符"></el-input>
                      </el-form-item>
                      <el-form-item label="存入时间：" prop>
                        <el-input name="uName" aria-required placeholder="2-6个字符"></el-input>
                      </el-form-item>
                      <el-form-item label="存款金额：" prop>
                        <el-input name="uName" aria-required placeholder="2-6个字符"></el-input>
                      </el-form-item>
                      <el-form-item label="附加码：" prop>
                        <el-input name="uName" aria-required placeholder="2-6个字符"></el-input>
                      </el-form-item>
                    </el-form>
                  </el-row>
                  <el-row v-else class="payEwm">
                    <img src="../../../../assets/user/wxPayEwm.png" alt />

                    <!-- <el-row>
                            <el-button type="default" @click="refresh">
                                二维码已经超时，请刷新页面重新获取！
                            </el-button>
                    </el-row>-->
                  </el-row>
                </el-row>
                <el-row>
                  <el-col :span="20" :offset="4" style="font-size:14px;color:#333;margin-top:10px;">
                    <span style="color:#ff0000;">温馨提示：</span>入款之前请核对公司入款账号，避免存入公司过期账号导致金额无法追回。
                  </el-col>
                </el-row>
                <el-row class="nextBtn" v-show="confirmModel==false?false:true">
                  <el-button
                    type="default"
                    v-bind:disabled="activce==-1?true:false"
                    @click="nextBtn"
                    v-if="nextModel"
                  >下一步</el-button>
                  <el-row v-else>
                    <el-button
                      type="default"
                      v-bind:disabled="activce==-1?true:false"
                      @click="returnModel"
                    >上一步</el-button>
                    <el-button
                      type="default"
                      v-bind:disabled="activce==-1?true:false"
                      @click="onlineConfirm"
                    >确认</el-button>
                  </el-row>

                </el-row>

                <!-- -->
              </div>
            </el-tab-pane>
            <el-tab-pane label="扫码支付" name="third">
              <div class="third">
                <el-row>
                  <el-row class="payNav">选择银行卡</el-row>
                  <el-radio-group v-model="radio" @change="changeRadioBank">
                    <el-radio
                      v-for="(item,index) in bankPay"
                      :key="index"
                      :label="index+1"
                      :class="activce == index+1 ? 'radioBorder' : ''"
                    >
                      <img :src="item.img" alt />
                    </el-radio>
                  </el-radio-group>
                </el-row>
                <el-row class="thirdInput">
                   <el-col :span="24" class="flex-box-start"><span>会员账号：</span>:ww234</el-col>
                   <el-col :span="24" class="flex-box-start"><span>转账人：</span><el-input v-model="moneyCount" placeholder="请输入内容" style="width:initial;margin-right:5px;"></el-input><span class="tips">请输入充值金额</span></el-col>
                 <el-col :span="20"  style="font-size:14px;color:#333;margin-top:10px;">
                    <span style="color:#ff0000;">温馨提示：</span>入款之前请核对公司入款账号，避免存入公司过期账号导致金额无法追回。
                  </el-col>

                  <el-col :span="24" class="thirdBtn">
                      <el-button type="default">提交</el-button>
                        <el-button type="default">复制</el-button>
                  </el-col>
                </el-row>
                
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-row>
      </el-row>
      <el-row class="rechargeDivBottom">
        <el-row class="payNav">
          <span></span>支付提示
        </el-row>
        <el-row class="tips">
          <el-col :span="24">1.网银、手机银行转账，请点击以上选项查看账户</el-col>
          <el-col :span="24">2.跨行转账请选择跨行快汇</el-col>
          <el-col :span="24">3.【扫码扫码支付】只需扫一扫二维码图片进行支付，立即到账，无需填写入款信息</el-col>
          <el-col :span="24">4.【扫码扫码支付】请您在扫码支付页面完成支付，其他页面完成支付请直接查看账户余额</el-col>
          <el-col :span="24">5.【扫码扫码支付】请您在提交订单后5分钟内完成支付，否则订单会自动取消</el-col>
          <el-col :span="24">6.需要其他帮助请点击在线客服</el-col>
        </el-row>
        <el-row class="onlineQq">
          <el-row>
            <img src="../../../../assets/user/kefu.png" alt />
            <span>在线客服</span>
          </el-row>
          <el-row>
            <img src="../../../../assets/user/QQ.png" alt />
            <span>QQ客服</span>
          </el-row>
        </el-row>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  //  inject:['reload'],
  data() {
    return {
      imgBorder: "",
      activeName: "first",
      nextModel: true,
      confirmModel: true,
      bankLabel: [
        //银行卡支付
        {
          id: 1,
          label: "中国工商银行",
          img: require("../../../../assets/user/yinhang1.png")
        },
        {
          id: 2,
          label: "中国建设银行",
          img: require("../../../../assets/user/yinhang2.png")
        },
        {
          id: 3,
          label: "中国农业银行",
          img: require("../../../../assets/user/yinhang3.png")
        },
        {
          id: 4,
          label: "厦门市商业银行",
          img: require("../../../../assets/user/yinhang4.png")
        },
        {
          id: 5,
          label: "深圳发展银行",
          img: require("../../../../assets/user/yinghang5.png")
        },
        {
          id: 6,
          label: "中国民生银行",
          img: require("../../../../assets/user/yinghang6.png")
        }
      ],
      onlineLabel: [
        //在线支付
        {
          id: 1,
          label: "微信支付",
          img: require("../../../../assets/user/weixin.png")
        },
        {
          id: 2,
          label: "支付宝支付",
          img: require("../../../../assets/user/zhifubao.png")
        }
      ],
      radio: "",
      radio1: "",
      activce: -1,
      bankPay: [
        //银联支付
        {
          id: 1,
          label: "银联支付",
          img: require("../../../../assets/user/yinlian.png")
        }
      ],
      moneyCount:""
    };
  },
  methods: {
    changeRadioBank(value) {
      //银行卡支付选择
      this.activce = value;
    },
    changeRadioOnline(value) {
      //在线支付选择
      this.activce = value;
      console.log(this.activce);
    },
    nextBtn() {
      //下一步
      this.nextModel = false;
    },
    returnModel() {
      //返回
      this.nextModel = true;
    },
    onlineConfirm() {
      //在线支付确认
      this.confirmModel = false;
    }
    // refresh(){
    //    this.reload();
    // }
  }
};
</script>
<style >
.rechargeDiv .recharge {
  margin-top: 21px;
  padding: 0 15px;
}
.rechargeDiv {
  background: none;
}

.rechargeDiv .recharge .el-tabs__header {
  margin: 0;
}

.rechargeDiv .recharge .el-radio__input {
  display: none;
}
.rechargeDiv .recharge .el-radio-group {
  margin-top: 4px;
  margin-left: 70px;
  margin-top: 20px;
}
.rechargeDiv .recharge .first .el-radio {
  width: 25%;
  text-align: center;
  padding: 10px 0 6px 0;
  border: 1px dashed #ddd;
  margin-bottom: 5px;
}
.rechargeDiv .recharge .first .radioBorder {
  border: 1px solid #ce0012;
  background: #f6eecb;
}
.rechargeDiv .recharge .second .el-radio {
  width: 226px;
  text-align: center;
  padding: 14px 0 8px 0;
  border: 1px dashed #ddd;
}
.rechargeDiv .recharge .second .radioBorder {
  border: 1px solid #ce0012;
  background: #f6eecb;
}
.rechargeDiv .recharge .third .el-radio {
  width: 226px;
  text-align: center;
  padding: 14px 0 8px 0;
  border: 1px dashed #ddd;
}
.rechargeDiv .recharge .third .radioBorder {
  border: 1px solid #ce0012;
  background: #f6eecb;
}
.rechargeDiv .rechargeDiv {
  display: flex;
  flex-direction: column;
}
.rechargeDiv .rechargeDivTop {
  /* height: 460px; */
  background: #fff;
  margin-bottom: 20px;
  padding-bottom: 20px;
}
.rechargeDiv .rechargeDivBottom {
  flex: 1;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.rechargeDiv .nextBtn {
  text-align: center;
  margin-top: 30px;
}
.rechargeDiv .nextBtn button {
  background: #e6cf68;
  color: #836426;
  width: 160px;
  height: 42px;
}
.rechargeDiv .rechargeDivBottom .payNav {
  color: #ff0000;
  margin-bottom: 19px;
}
.rechargeDiv .rechargeDivBottom .payNav span {
  border-color: #ff0000;
}
.rechargeDiv .tips .el-col-24 {
  color: #836426;
  padding: 4px 0 0 37px;
}
.rechargeDiv .onlineQq {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 37px;
  padding-bottom: 30px;
}
.rechargeDiv .onlineQq .el-row {
  display: flex;
  align-items: center;
}
.rechargeDiv .onlineQq .el-row img {
  margin-left: 29px;
}
.rechargeDiv .onlineQq .el-row span {
  margin-left: 10px;
}
/* 表单 */
.rechargeDiv .recharge .el-form {
  width: 500px;
  margin-top: 30px;
}
.rechargeDiv .recharge .el-form-item {
  margin-bottom: 10px;
}
.rechargeDiv .recharge .selfTab .first .el-tabs__item {
  width: 277px;
  margin-left: 21px;
}
.rechargeDiv .recharge .selfTab .second .el-tabs__item {
  width: 226px;
  margin-left: 21px;
}
/*  */
.rechargeDiv .payEwm {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.rechargeDiv .payEwm img {
  width: 170px;
  height: 170px;
}
.rechargeDiv .thirdInput{padding-left:70px;}
.rechargeDiv .thirdInput .el-col-24{margin-top:15px;}
.rechargeDiv .third .tips{font-size:14px;color:#836426;}
.rechargeDiv .thirdInput .thirdBtn{text-align: center;margin-top:30px;padding-right:70px;}
.rechargeDiv .thirdBtn button{background:#E6CF68;color:#836426;}
</style>



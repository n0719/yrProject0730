import { get, post } from './http';
export const apiUrl = {
  apiLogin : 'Api/Public/login', //1.登录
  apiRegister:'Api/Public/register', //2.注册-A网
  apiVerAccount:'Api/Public/verifyAccount', //3.找回密码-验证账号
  apiSendVerifyCode:'Api/Public/sendVerifyCode', //5.找回密码-发送验证码
  apiRetrievePassword:'Api/Public/retrievePassword', //4.找回密码-修改新密码
  apiVerifyImg:'Api/verifyImg',//获取验证码
  apiSelfUser:"Api/CurrUser/updateInfo",//跟新用户信息
  apiGetInfo:"Api/CurrUser/info",//获取用户信息
  apiChangePassword:"Api/CurrUser/changePassword",//更改用户密码
  apiChangeFoundPassword:"Api/CurrUser/changeFoundPassword",//更改资金密码
  apiDataDataDictionaries:"Api/Public/dict",//数据字典
  apiTeamData:"Api/Team/teamData",//团队总览
  apiBindPhone:"Api/CurrUser/bindPhone",//绑定手机号
  apiBankAccountAdd:"Api/MoneyOut/bankAccountAdd",//新增银行卡
  apiBankAccountList:"Api/MoneyOut/bankAccountList",//获取银行卡列表
  apiNotice:"Api/Public/notice",//8.公告列表(优惠公告)
  apiGameRecordList:"Api/Game/playRecordList",//55. 游戏-投注记录
  apiTeamLowerLevel:"Api/Team/lowerLevel",//45. 下级管理
  apiMoneyList:"Api/Money/moneyList",//29. 余额日志
  apiMultiple:"Api/Public/multiple",//14. 多接口合并访问 
  apiElectronic:"Api/Public/electronicGamesList",//12. 单线路-电子游戏-列表
  apiDialogs:"Api/Public/dialog",//9. 弹窗公告 
  apiSmsVerifyCode:"Api/Public/smsVerifyCode",//验证手机验证码
  apiOrderList:"Api/Money/orderList",//充值列表
  apiQrcodePaySubmit:"Api/MoneyIn/qrcodePaySubmit",//微信支付宝充值
  apiActivitiesList:"Api/CurrUser/activitiesList",//优惠活动列表
  apiPayments:"Api/MoneyIn/payments",//现有支付方式
  apiBankSubmit:"Api/MoneyIn/bankSubmit",//银行卡提交
  apiThirdPaymentSubmit:"Api/MoneyIn/thirdPaymentSubmit",//全网通支付提交
  apiNotice:"Api/Public/notice",//8. 公告列表(优惠公告) 
  apiGamePlay:"Api/Game/play",//46. 进入游戏 
  apiGameBalances:"Api/Game/balances",//47. 游戏账号-余额 
  apiGameTransferOut:"Api/Game/transferOut",//50. 转出至-单个平台 
  apiAllBack:"Api/Game/allBack",//49 资金归集
  apiBack:"Api/Game/back",//48资金归集转入主账户
  apiBalances:"Api/Game/balances",//47游戏账号余额
  apiWithdrawList:"Api/MoneyOut/withdrawList",//38提现列表
  apiWithdrawPre:"Api/MoneyOut/withdrawPre",//36提现，预提交信息
 apiWithdrawAdd:"Api/MoneyOut/withdrawAdd",//提现新增
 apiTransferOther:"Api/Game/transferOther",//51资金平台互转
 apiLineStatus:"Api/Game/lineStatus",//50. 拉取线路状态
 apiUploadAvator:"Api/CurrUser/uploadAvatar",//27上传头像
 apiUploadBaseAvator:"Api/CurrUser/uploadBase64Avatar",//28base64
 apiRequestRule:"Api/ApiDoc/requestRule",//5. 应用-接口参数规则
 apiActivitiesJoin:"Api/CurrUser/activitiesJoin",//24活动参与
 apiBankList:"Api/Public/bankList", //16Public/bankList银行卡列表
}
// export const apiLogin = p => post('Public/login', p);



// export const apiSelfUser = p => post('CurrUser/updateInfo', p);




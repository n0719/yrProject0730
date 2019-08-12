import { get, post } from './http';
export const apiUrl = {
  apiLogin : 'Public/login', //1.登录
  apiRegister:'Public/register', //2.注册-A网
  apiVerAccount:'Public/verifyAccount', //3.找回密码-验证账号
  apiSendVerifyCode:'Public/sendVerifyCode', //5.找回密码-发送验证码
  apiRetrievePassword:'Public/retrievePassword', //4.找回密码-修改新密码
  apiVerifyImg:'verifyImg',
  apiSelfUser:"CurrUser/updateInfo",//跟新用户信息
  apiGetInfo:"CurrUser/info",//获取用户信息
  apiChangePassword:"CurrUser/changePassword",//更改用户密码
  apiChangeFoundPassword:"CurrUser/changeFoundPassword",//更改资金密码
  apiDataDataDictionaries:"Public/dict",//数据字典
  apiTeamData:"Team/teamData",//团队总览
  apiLowerLevel:"Team/lowerLevel",//下级管理
  apiBindPhone:"CurrUser/bindPhone",//绑定手机号
  apiBankAccountAdd:"MoneyOut/bankAccountAdd",//新增银行卡
  apiBankAccountList:"MoneyOut/bankAccountList",//获取银行卡列表
  apiSmsVerifyCode:"Public/smsVerifyCode",//验证手机验证码
  apiOrderList:"Money/orderList",//充值列表
  apiQrcodePaySubmit:"MoneyIn/qrcodePaySubmit",//微信支付宝充值
  apiActivitiesList:"CurrUser/activitiesList"//优惠活动列表
  
}
// export const apiLogin = p => post('Public/login', p);



// export const apiSelfUser = p => post('CurrUser/updateInfo', p);




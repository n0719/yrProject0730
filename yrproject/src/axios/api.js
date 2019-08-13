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
  apiBindPhone:"CurrUser/bindPhone",//绑定手机号
  apiBankAccountAdd:"MoneyOut/bankAccountAdd",//新增银行卡
  apiBankAccountList:"MoneyOut/bankAccountList",//获取银行卡列表
  apiNotice:"Public/notice",//8.公告列表(优惠公告)
  apiGameRecordList:"Game/playRecordList",//55. 游戏-投注记录
  apiTeamLowerLevel:"Team/lowerLevel",//45. 下级管理
  apiMoneyList:"Money/moneyList",//29. 余额日志
  apiMultiple:"Public/multiple",//14. 多接口合并访问 
  apiElectronic:"Public/electronicGamesList",//12. 单线路-电子游戏-列表
  apiDialogs:"Public/dialog",//9. 弹窗公告 
}
// export const apiLogin = p => post('Public/login', p);



// export const apiSelfUser = p => post('CurrUser/updateInfo', p);




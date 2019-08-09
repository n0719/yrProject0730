import { get, post } from './http';
export const apiUrl = {
  apiLogin : 'Public/login',
  apiVerifyImg:'verifyImg',
  apiSelfUser:"CurrUser/updateInfo",//跟新用户信息
  apiGetInfo:"CurrUser/info",//获取用户信息
  apiChangePassword:"CurrUser/changePassword",//更改用户密码
  apiChangeFoundPassword:"CurrUser/changeFoundPassword",//更改资金密码
  apiDataDataDictionaries:"Public/dict",//数据字典
  apiTeamData:"Team/teamData",//团队总览
  apiLowerLevel:"Team/lowerLevel",//下级管理
  apiBindPhone:"CurrUser/bindPhone",//绑定手机号
}
// export const apiLogin = p => post('Public/login', p);



// export const apiSelfUser = p => post('CurrUser/updateInfo', p);




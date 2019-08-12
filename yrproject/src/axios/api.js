import { get, post } from './http';
export const apiUrl = {
  apiLogin : 'Public/login', //1.登录
  apiRegister:'Public/register', //2.注册-A网
  apiVerAccount:'Public/verifyAccount', //3.找回密码-验证账号
  apiSelfUser:"CurrUser/updateInfo",
  apiGetInfo:"CurrUser/info", 
  apiSendVerifyCode:'Public/sendVerifyCode', //5.找回密码-发送验证码
  apiRetrievePassword:'Public/retrievePassword', //4.找回密码-修改新密码
}
// export const apiLogin = p => post('Public/login', p);



// export const apiSelfUser = p => post('CurrUser/updateInfo', p);




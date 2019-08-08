import { get, post } from './http';
export const apiUrl = {
  apiLogin : 'Public/login',
  apiVerifyImg:'verifyImg',
  apiRegister:'Public/register',
  apiVerAccount:'Public/verifyAccount'
}
export const apiLogin = p => post('Public/login', p);




import { get, post } from './http'
export const apiUrl = {
  apiLogin : 'Public/login'
}
export const apiLogin = p => post('Public/login', p);
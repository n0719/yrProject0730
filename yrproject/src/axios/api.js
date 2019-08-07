import { get, post } from './http'

export const apiLogin = p => post('Public/login', p);
import store from '../store/index';
import { Message } from 'element-ui';


/*获取正则*/
export function initReg(url,params,val){
    const urls = url.split('/');//获取接口名
    const rule = store.state.regRule;//获取规则
    const validation = rule[urls[1]][urls[2]][params].validation;//获取正则
    const name = rule[urls[1]][urls[2]][params].name;//获取提示名称
    const description = rule[urls[1]][urls[2]][params].description;//获取提示描述
    const regRule = eval(validation.replace('regex:',''));
    if(!regRule.test(val)){
        Message.error(name+':'+description);
    }
    return regRule.test(val);
  }
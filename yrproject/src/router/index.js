import Vue from 'vue'
import Router from 'vue-router'
// 
 import Index from '@/components/index/Index'
 import User from '@/components/user/User'
//  import Login from '@/components/user/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
  
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
// 
Vue.use(Router)

 import UserContent from '@/components/user/userAdmin/UserContent'
 import UserLeft from '@/components/user/userAdmin/UserLeft'
 //
 import Index from '@/components/index/Index'
 
 import Main from '@/components/index/index/Main'
 import Discount from '@/components/index/index/Discount'
//
import MyPay from '@/components/user/userAdmin/userMenu/MyPay'
import BankCard from '@/components/user/userAdmin/userMenu/BankCard'
import EdTransform from '@/components/user/userAdmin/userMenu/EdTransform'
import GameRecords from '@/components/user/userAdmin/userMenu/GameRecords'
import MoneyDealings from '@/components/user/userAdmin/userMenu/MoneyDealings'
import ReturnHome from '@/components/user/userAdmin/userMenu/ReturnHome'
import SubordAdmin from '@/components/user/userAdmin/userMenu/SubordAdmin'
import TeamOverview from '@/components/user/userAdmin/userMenu/TeamOverview'
import WebNotice from '@/components/user/userAdmin/userMenu/WebNotice'
import Mydiscount from '@/components/user/userAdmin/userMenu/Mydiscount'
// 
import Cashsweep from '@/components/user/userAdmin/userMenu/Cashsweep'
import Cashwithdrawal from '@/components/user/userAdmin/userMenu/Cashwithdrawal'
import Recharge from '@/components/user/userAdmin/userMenu/Recharge'

//会员中心
import SelfUser from '@/components/user/userAdmin/userMenu/selfUser/SelfUser'
//下级会员注册
import SubordMems from '@/components/user/userAdmin/userMenu/subordMembs/SubordMems'
export default new Router({
  routes: [
    {
      path:'/',
      name:"index",
      component:Index
    },
   {
     path:'/main',
     name:"main",
     components:{
      indexView:Main
     }
    },
    {
      path:'/discount',
     name:"discount",
     components:{
      indexView:Discount
     }
    },
    {
      path: '/userContent',
      name: 'userContent',
      component: UserContent,
      sss:UserContent,
      children:[
        {
          path:"/myPay",
          name:"myPay",
          component:MyPay,
        },
        {
          path:"/bankCard",
          name:"bankCard",
          component:BankCard
        },
        {
          path:"/edTransform",
          name:"edTransform",
          component:EdTransform
        },
        {
          path:"/gameRecords",
          name:"gameRecords",
          component:GameRecords
        },
        {
          path:"/moneyDealings",
          name:"moneyDealings",
          component:MoneyDealings
        },
        {
          path:"/returnHome",
          name:"returnHome",
          component:ReturnHome
        },
        {
          path:"/subordAdmin",
          name:"subordAdmin",
          component:SubordAdmin
        },
        {
          path:"/teamOverview",
          name:"teamOverview",
          component:TeamOverview
        },
        {
          path:"/webNotice",
          name:"webNotice",
          component:WebNotice
        },
        {
          path:"/mydiscount",
          name:"mydiscount",
          component:Mydiscount
        },
        {
          path:"/recharge",
          name:"recharge",
          component:Recharge
        },
        {
          path:"/cashwithdrawal",
          name:"cashwithdrawal",
          component:Cashwithdrawal
        },
        {
          path:"/cashsweep",
          name:"cashsweep",
          component:Cashsweep
        },
        {
          path:"/selfUser",
          name:"selfUser",
          component:SelfUser
        },
        {
          path:"/subordMems",
          name:"subordMems",
          component:SubordMems
        },
      ],
 
    },
    {
      path:"/userLeft",
      name:"userLeft",
      component:UserLeft
    }
  ],

})

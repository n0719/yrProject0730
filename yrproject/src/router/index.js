import Vue from 'vue'
import Router from 'vue-router'
// 
Vue.use(Router)

 import UserContent from '@/components/user/userAdmin/UserContent'
 import UserLeft from '@/components/user/userAdmin/UserLeft'
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

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/myPay"
    },
    {
      path: '/userContent',
      name: 'userContent',
      component: UserContent,
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
      ],
 
    },
    {
      path:"/userLeft",
      name:"userLeft",
      component:UserLeft
    }
  ],

})

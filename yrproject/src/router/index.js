import Vue from 'vue'
import Router from 'vue-router'
// 
Vue.use(Router)

import UserContent from '@/components/user/userAdmin/UserContent'
import UserLeft from '@/components/user/userAdmin/UserLeft'
//
import Index from '@/components/index/Index'

import Main from '@/components/index/index/Main'
import Service from '@/components/index/index/Service'
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
      path: '/main',
      name: "main",
      components: {
        indexView: Main
      }
    },
    {
      path: '/service',
      name: "service",
      components: {
        indexView: Service
      }
    },
    {
      path: '/userContent',
      name: 'userContent',
      components: {
        abc: UserContent
      },
      meta: {
        requireAuth: true,
        keepAlive: true // 用户列表需要被缓存
    },
      // redirect:"/myPay",
      children: [
        {
          path: "/myPay",
          name: "myPay",
          components: {
            abc: MyPay
          },
          meta: {
            requireAuth: true,
            keepAlive: true // 用户列表需要被缓存
        }
        },
        {
          path: "/bankCard",
          name: "bankCard",
          components: {
            abc: BankCard
          },
          meta: {
            requireAuth: true,
            keepAlive: true // 用户列表需要被缓存
        }
        },
        {
          path: "/edTransform",
          name: "edTransform",
          components: {
            abc: EdTransform
          },
          meta: {
            requireAuth: true,
            keepAlive: true // 用户列表需要被缓存
        }
        },
        {
          path: "/gameRecords",
          name: "gameRecords",
          components: {
            abc: GameRecords
          },
          meta: {
            requireAuth: true,
            keepAlive: true // 用户列表需要被缓存
        }
        },
        {
          path: "/moneyDealings",
          name: "moneyDealings",
          components: {
            abc: MoneyDealings
          },
          meta: {
            requireAuth: true,
            keepAlive: true // 用户列表需要被缓存
        }
        },
        {
          path: "/returnHome",
          name: "returnHome",
          components: {
            abc: ReturnHome
          },
          meta: {
            requireAuth: true,
            keepAlive: true // 用户列表需要被缓存
        }
        },
        {
          path: "/subordAdmin",
          name: "subordAdmin",
          components: {
            abc: SubordAdmin
          },
          meta: {
            requireAuth: true,
            keepAlive: true // 用户列表需要被缓存
        }
        },
        {
          path: "/teamOverview",
          name: "teamOverview",
          components: {
            abc: TeamOverview
          },
          meta: {
            requireAuth: true,
            keepAlive: true // 用户列表需要被缓存
        }
        },
        {
          path: "/webNotice",
          name: "webNotice",
          components: {
            abc: WebNotice
          },
          meta: {
            requireAuth: true,
            keepAlive: true // 用户列表需要被缓存
        }
        },
        {
          path: "/mydiscount",
          name: "mydiscount",
          components: {
            abc: Mydiscount
          },
          meta: {
            requireAuth: true,
            keepAlive: true // 用户列表需要被缓存
        }
        },
        {
          path: "/recharge",
          name: "recharge",
          components: {
            abc: Recharge
          },   
          meta: {
            requireAuth: true,
            keepAlive: true // 用户列表需要被缓存
        }
        },
        {
          path: "/cashwithdrawal",
          name: "cashwithdrawal",
          components: {
            abc: Cashwithdrawal
          },
          meta: {
            requireAuth: true,
            keepAlive: true // 用户列表需要被缓存
        }
        },
        {
          path: "/cashsweep",
          name: "cashsweep",
          components: {
            abc: Cashsweep
          },
          meta: {
            requireAuth: true,
            keepAlive: true // 用户列表需要被缓存
        }
        },
        {
          path: "/selfUser",
          name: "selfUser",
          components: {
            abc: SelfUser
          },
          meta: {
            requireAuth: true,
            keepAlive: true // 用户列表需要被缓存
        }
        },
        {
          path: "/subordMems",
          name: "subordMems",
          components: {
            abc: SubordMems
          }
        },
      ],

    },
    {
      path: "/userLeft",
      name: "userLeft",
      component: UserLeft
    }
  ],

})

import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import LoginFan from '../views/LoginFan.vue'
import LoginEn from '../views/LoginEn.vue'
import Registered from '../views/Registered'
import RegisteredFan from '../views/RegisteredFan'
import RegisteredEn from '../views/RegisteredEn'
import Ce from '../views/Ce'
import Qr from '../views/Qr'
import QrFan from '../views/QrFan'
import QrEn from '../views/QrEn'
import Account from '../views/Account'
import AccountFan from '../views/AccountFan'
import AccountEn from '../views/AccountEn'
import SMS from '../views/SMS'
import SMSFan from '../views/SMSFan'
import SMSEn from '../views/SMSEn'
import Forget from '../views/Forget'
import ForgetFan from '../views/ForgetFan'
import ForgetEn from '../views/ForgetEn'
import Spike from '../views/Spike'
import Spike1 from '../views/Spike1'
import Spike2 from '../views/Spike2'
import Spike3 from '../views/Spike3'
import Spike4 from '../views/Spike4'
import Spike5 from '../views/Spike5'
import Company from '../views/Company'
import Commodity from '../views/Commodity'
import Commodity1 from '../views/Commodity1'
import Commodity2 from '../views/Commodity2'
import Commodity3 from '../views/Commodity3'
import Commodity4 from '../views/Commodity4'
import Commodity5 from '../views/Commodity5'
import Commodity6 from '../views/Commodity6'
import Commodity7 from '../views/Commodity7'
import Commodity8 from '../views/Commodity8'
import CodeRules from '../views/CodeRules.vue'
import Cart from '../views/Cart'
import AccountName from '../views/AccountName.vue'
import SignUp1 from '../views/SignUp1.vue'
import SignUp2 from '../views/SignUp2.vue'
import SignUp3 from '../views/SignUp3.vue'
import SignUp4 from '../views/SignUp4.vue'
import SignUp5 from '../views/SignUp5.vue'
import SignUp6 from '../views/SignUp6.vue'
import SignUp7 from '../views/SignUp7.vue'
import LoginRules1 from '../views/LoginRules1.vue'
import LoginRules2 from '../views/LoginRules2.vue'
import LoginRules3 from '../views/LoginRules3.vue'
import LoginRules4 from '../views/LoginRules4.vue'
import LoginRules5 from '../views/LoginRules5.vue'
import QuitRules from '../views/QuitRules.vue'
import SmsQuestion from '../views/SmsQuestion.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Main',
  component: Main
},
{
  path: '/Login',
  name: 'Login',
  component: Login,
  children: [{
    path: '/',
    redirect: 'Account'
  },
  {
    path: 'Account',
    name: 'Account',
    component: Account
  },
  {
    path: 'SMS',
    name: 'SMS',
    component: SMS
  },
  {
    path: 'Qr',
    name: 'Qr',
    component: Qr
  }
  ]
},
{
  path: '/LoginFan',
  name: 'LoginFan',
  component: LoginFan,
  children: [{
    path: '/',
    redirect: 'AccountFan'
  },
  {
    path: 'QrFan',
    name: 'QrFan',
    component: QrFan
  },
  {
    path: 'AccountFan',
    name: 'AccountFan',
    component: AccountFan
  },
  {
    path: 'SMSFan',
    name: 'SMSFan',
    component: SMSFan
  }
  ]
},
{
  path: '/LoginEn',
  name: 'LoginEn',
  component: LoginEn,
  children: [{
    path: '/',
    redirect: 'AccountEn'
  },
  {
    path: 'QrEn',
    name: 'QrEn',
    component: QrEn
  },
  {
    path: 'AccountEn',
    name: 'AccountEn',
    component: AccountEn
  },
  {
    path: 'SMSEn',
    name: 'SMSEn',
    component: SMSEn
  }
  ]
},
{
  path: '/Registered',
  name: 'Registered',
  component: Registered
},
{
  path: '/RegisteredEn',
  name: 'RegisteredEn',
  component: RegisteredEn
},
{
  path: '/RegisteredFan',
  name: 'RegisteredFan',
  component: RegisteredFan
},
{
  path: '/Ce',
  name: 'Ce',
  component: Ce
},
{
  path: '/Forget',
  name: 'Forget',
  component: Forget
},
{
  path: '/ForgetFan',
  name: 'ForgetFan',
  component: ForgetFan
},
{
  path: '/ForgetEn',
  name: 'ForgetEn',
  component: ForgetEn
},
{
  path: '/CodeRules',
  name: 'CodeRules',
  component: CodeRules,
  children: [
    // 简介
    {
      path: '/AccountName',
      name: 'AccountName',
      component: AccountName
    },
    // 新人指南
    // 注册
    {
      path: '/SignUp1',
      name: 'SignUp1',
      component: SignUp1
    },
    {
      path: '/SignUp2',
      name: 'SignUp2',
      component: SignUp2
    },
    {
        path: '/SignUp3',
        name: 'SignUp3',
        component: SignUp3
      },
      {
        path: '/SignUp4',
        name: 'SignUp4',
        component: SignUp4
      },
      {
        path: '/SignUp5',
        name: 'SignUp5',
        component: SignUp5
      },
      {
        path: '/SignUp6',
        name: 'SignUp6',
        component: SignUp6
      },
      {
        path: '/SignUp7',
        name: 'SignUp7',
        component: SignUp7
      },
    // 登录
    {
        path: '/LoginRules1',
        name: 'LoginRules1',
        component: LoginRules1
      },
      {
        path: '/LoginRules2',
        name: 'LoginRules2',
        component: LoginRules2
      },
      {
        path: '/LoginRules3',
        name: 'LoginRules3',
        component: LoginRules3
      },
      {
        path: '/LoginRules4',
        name: 'LoginRules4',
        component: LoginRules4
      },
      {
        path: '/LoginRules5',
        name: 'LoginRules5',
        component: LoginRules5
      },
    //   退出登录
      {
        path: '/QuitRules',
        name: 'QuitRules',
        component:QuitRules
      },
     {
       path: '/SmsQuestion',
       name: '/SmsQuestion',
       component: SmsQuestion
     }
  ]
},
{
  path: '/Spike',
  name: 'Spike',
  component: Spike,
  children: [{
    path: '/',
    redirect: 'Spike1'
  },
  {
    path: 'Spike1',
    name: 'Spike1',
    component: Spike1
  },
  {
    path: 'Spike2',
    name: 'Spike2',
    component: Spike2
  },
  {
    path: 'Spike3',
    name: 'Spike3',
    component: Spike3
  },
  {
    path: 'Spike4',
    name: 'Spike4',
    component: Spike4
  },
  {
    path: 'Spike5',
    name: 'Spike5',
    component: Spike5
  }
  ]
},
{
  path: '/Company',
  name: 'Company',
  component: Company
},
{
  path: '/Commodity',
  name: 'Commodity',
  component: Commodity,
  children: [{
    path: '/',
    redirect: 'Commodity1'
  },
  {
    path: 'Commodity1',
    name: 'Commodity1',
    component: Commodity1
  },
  {
    path: 'Commodity2',
    name: 'Commodity2',
    component: Commodity2
  },
  {
    path: 'Commodity3',
    name: 'Commodity3',
    component: Commodity3
  },
  {
    path: 'Commodity4',
    name: 'Commodity4',
    component: Commodity4
  },
  {
    path: 'Commodity5',
    name: 'Commodity5',
    component: Commodity5
  },
  {
    path: 'Commodity6',
    name: 'Commodity6',
    component: Commodity6
  },
  {
    path: 'Commodity7',
    name: 'Commodity7',
    component: Commodity7
  },
  {
    path: 'Commodity8',
    name: 'Commodity8',
    component: Commodity8
  }
  ]
},
{
  path: '/Cart',
  name: 'Cart',
  component: Cart
}
]
const router = new VueRouter({
  routes
})

export default router

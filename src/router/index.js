import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import LoginFan from "../views/LoginFan.vue"
import LoginEn from "../views/LoginEn.vue"
import Registered from "../views/Registered"
import RegisteredFan from "../views/RegisteredFan"
import RegisteredEn from "../views/RegisteredEn"
import Ce from "../views/Ce"
import Qr from "../views/Qr"
import QrFan from "../views/QrFan"
import QrEn from "../views/QrEn"
import Account from "../views/Account"
import AccountFan from "../views/AccountFan"
import AccountEn from "../views/AccountEn"
import SMS from "../views/SMS"
import SMSFan from "../views/SMSFan"
import SMSEn from "../views/SMSEn"
import Forget from "../views/Forget"
import ForgetFan from "../views/ForgetFan"
import ForgetEn from "../views/ForgetEn"
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
        component: Account,
      },
      {
        path: 'SMS',
        name: 'SMS',
        component: SMS,
      },
      {
        path: 'Qr',
        name: 'Qr',
        component: Qr,
      },
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
        component: QrFan,
      },
      {
        path: 'AccountFan',
        name: 'AccountFan',
        component: AccountFan,
      }, ,
      {
        path: 'SMSFan',
        name: 'SMSFan',
        component: SMSFan,
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
        component: QrEn,
      },
      {
        path: 'AccountEn',
        name: 'AccountEn',
        component: AccountEn,
      },
      {
        path: 'SMSEn',
        name: 'SMSEn',
        component: SMSEn,
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
]

const router = new VueRouter({
  routes
})

export default router

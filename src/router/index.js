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
import Account from "../views/Account"
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
        name: 'Account',
        component: Account,
      },
      {
        path: '/Qr',
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
      path: '/Qr',
      name: 'Qr',
      component: Qr,
    }]
  },
  {
    path: '/LoginEn',
    name: 'LoginEn',
    component: LoginEn,
    children: [{
      path: '/Qr',
      name: 'Qr',
      component: Qr,
    }]
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
  }
]

const router = new VueRouter({
  routes
})

export default router

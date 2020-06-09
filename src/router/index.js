import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import Registered from "../views/Registered"
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Registered',
    name: 'Registered',
    component: Registered
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'
import shoppingCart from './modules/shoppingCart'
import getters from './getters'
Vue.use(Vuex)

const state = {
  username: '', // 登录用户名
  cartCount: 0 // 购物车商品数量
}

export default new Vuex.Store({
  strict: true,
  state,
  mutations,
  actions,
  getters,
  modules: {
    shoppingCart
  }
})

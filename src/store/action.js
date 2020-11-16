/**
 * 商城vuex-actions
 **/
export default {
  saveUserName (context, username) {
    context.commit('saveUserName', username)
  },
  saveCartCount (context, count) {
    context.commit('saveUserName', count)
  },
  setShoppingCart ({ commit }, data) {
    commit('setShoppingCart', data)
  }
}

/**
 * 商城Vuex-mutations
 * */
export default {
  saveUserName (state, username) {
    state.username = username
  },
  saveCartCount (state, count) {
    state.cartCount = count
  },
  setShoppingCart (state, data) {
    //   设置购物车状态
    state.shoppingCart = data
  }
}

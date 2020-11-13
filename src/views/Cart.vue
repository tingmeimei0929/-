<template>
  <div>
    <header class="cart-header">
      <div class="container">
        <div class="nav-logo">
          <a href="https://www.mi.com/index.html"
             class="logo"></a>
        </div>
        <h3>我的购物车</h3>
        <p>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p>
        <div class="header-right">
          <a href="javascript:void(0)"
             @click="login">登录</a>
          <a>|</a>
          <a href="javascript:void(0)"
             @click="signUp">注册</a>
        </div>
      </div>
    </header>
    <div class="cart-main">
        <div class="container">
            <div class="content" v-if="getShoppingCart.length>0">
                <ul></ul>
            </div>
        </div>
    </div>
    <navFooter></navFooter>
  </div>
</template>

<script>
import navFooter from '../components/Footer'
// import { mapGetters, mapAction } from 'vuex'
export default {
  name: 'Cart',
  data () {
    return {

    }
  },
  components: {
    navFooter
  },
  methods: {
    login () {
      this.$router.push({
        path: '/LoginEn'
      })
    },
    signUp () {
      this.$router.push({
        path: '/RegisteredEn'
      })
    }
    // ...mapAction(['updateShoppingCart', 'deleteShoppingCart', 'checkAll']),
    // // 修改商品数量的时候调用改函数
    // handleChange (currentValue, key, productID) {
    //   // 当修改数量时，默认勾选
    //   this.updateShoppingCart({ key: key, prop: 'check', val: true })
    //   //   向后端发起更新购物车的数据库信息请求
    //   this.$axios.post('/api/user/shoppingCart/updateShoppingCart', {
    //     user_id: this.$store.getters.getUser.user_id,
    //     product_id: productID,
    //     num: currentValue
    //   }).then(res => {
    //     switch (res.data.code) {
    //       case '001':
    //         // 001代表更新成功
    //         // 更新vuex状态
    //         this.updateShoppingCart({
    //           key: key,
    //           prop: 'num',
    //           val: currentValue
    //         })
    //         // 提示更新成功信息
    //         this.notifySucceed(res.data.msg)
    //         break
    //       default:
    //         // 提示更新失败信息
    //         this.notifyError(res.data.msg)
    //     }
    //   })
    //     .catch(err => {
    //       return Promise.reject(err)
    //     })
    // },
    // checkChange (val, key) {
    //   // 更新vuex中购物车商品是否勾选的状态
    //   this.updateShoppingCart({ key: key, prop: 'check', val: val })
    // }

  }
}
</script>

<style lang="scss" scoped>
@import url("../assets/scss/cart.scss");
</style>
<style>
.el-table{
    width: 100% !important;
}
.el-table__header-wrapper thead div {
    background: #fff !important;
}
.el-checkbox__input.is-disabled .el-checkbox__inner {
    background: #fff !important;
}
</style>

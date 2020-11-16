<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['getUser', 'getNum'])
  },
  methods: {
    ...mapActions(['setShoppingCart'])
  },
  watch: {
    // 获取vuex的登录状态
    getUser: function (val) {
      if (val === '') {
        // 用户没有登录
        this.setShoppingCart([])
      } else {
        //   用户已经登录，获取该用户的购物车信息
        this.$axios.post('/api/user/shoppingCart/getShoppingCart', {
          user_id: val.user_id
        }).then(res => {
          if (res.data.code === '001') {
            //   001为成功，更新vuex购物车状态
            this.setShoppingCart(res.data.shoppingCartData)
          } else {
            //   提示失败信息
            this.notifyError(res.data.msg)
          }
        }).catch(err => {
          return Promise.reject(err)
        })
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

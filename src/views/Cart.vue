<template>
  <div>
    <header class="cart-header">
      <div class="container">
        <div class="nav-logo">
          <a href="https://www.mi.com/index.html"
             class="logo"></a>
        </div>
        <h3>我的购物车</h3>
        <div class="header-right">
          <a href="javascript:void(0)"
             @click="login">登录</a>
          <a>|</a>
          <a href="javascript:void(0)"
             @click="signUp">注册</a>
        </div>
      </div>
    </header>
    <main class="header-main">
      <div class="shopping-list"></div>
      <div class="suggest-list">
        <a>
          <div class="thumb">
            <img src="//i1.mifile.cn/a1/pms_1557977821.03156568!360x360.jpg"
                 style="width:160px; height:160px">
          </div>
          <h3 class="content-title"> 米家驱蚊智能版</h3>
          <p class="price">59元</p>
          <p class="desc">2656人好评</p>
          <button class="cart-btn">
            加入购物车
          </button>
        </a>
        <a>
          <div class="thumb">
            <img src="//i1.mifile.cn/a1/pms_1557977821.03156568!360x360.jpg"
                 style="width:160px; height:160px">
          </div>
          <h3 class="content-title"> 米家驱蚊智能版</h3>
          <p class="price">59元</p>
          <p class="desc">2656人好评</p>
          <button class="cart-btn">
            加入购物车
          </button>
        </a>
        <a>
          <div class="thumb">
            <img src="//i1.mifile.cn/a1/pms_1557977821.03156568!360x360.jpg"
                 style="width:160px; height:160px">
          </div>
          <h3 class="content-title"> 米家驱蚊智能版</h3>
          <p class="price">59元</p>
          <p class="desc">2656人好评</p>
          <button class="cart-btn">
            加入购物车
          </button>
        </a>
        <a>
          <div class="thumb">
            <img src="//i1.mifile.cn/a1/pms_1557977821.03156568!360x360.jpg"
                 style="width:160px; height:160px">
          </div>
          <h3 class="content-title"> 米家驱蚊智能版</h3>
          <p class="price">59元</p>
          <p class="desc">2656人好评</p>
          <button class="cart-btn">
            加入购物车
          </button>
        </a>
        <a>
          <div class="thumb">
            <img src="//i1.mifile.cn/a1/pms_1557977821.03156568!360x360.jpg"
                 style="width:160px; height:160px">
          </div>
          <h3 class="content-title"> 米家驱蚊智能版</h3>
          <p class="price">59元</p>
          <p class="desc">2656人好评</p>
          <button class="cart-btn">
            加入购物车
          </button>
        </a>
        <a>
          <div class="thumb">
            <img src="//i1.mifile.cn/a1/pms_1557977821.03156568!360x360.jpg"
                 style="width:160px; height:160px">
          </div>
          <h3 class="content-title"> 米家驱蚊智能版</h3>
          <p class="price">59元</p>
          <p class="desc">2656人好评</p>
          <button class="cart-btn">
            加入购物车
          </button>
        </a>
        <a>
          <div class="thumb">
            <img src="//i1.mifile.cn/a1/pms_1557977821.03156568!360x360.jpg"
                 style="width:160px; height:160px">
          </div>
          <h3 class="content-title"> 米家驱蚊智能版</h3>
          <p class="price">59元</p>
          <p class="desc">2656人好评</p>
          <button class="cart-btn">
            加入购物车
          </button>
        </a>
        <a>
          <div class="thumb">
            <img src="//i1.mifile.cn/a1/pms_1557977821.03156568!360x360.jpg"
                 style="width:160px; height:160px">
          </div>
          <h3 class="content-title"> 米家驱蚊智能版</h3>
          <p class="price">59元</p>
          <p class="desc">2656人好评</p>
          <button class="cart-btn">
            加入购物车
          </button>
        </a>
        <a>
          <div class="thumb">
            <img src="//i1.mifile.cn/a1/pms_1557977821.03156568!360x360.jpg"
                 style="width:160px; height:160px">
          </div>
          <h3 class="content-title"> 米家驱蚊智能版</h3>
          <p class="price">59元</p>
          <p class="desc">2656人好评</p>
          <button class="cart-btn">
            加入购物车
          </button>
        </a>
      </div>
    </main>
    <navFooter></navFooter>
  </div>
</template>
    
<script>
import navFooter from '../components/Footer'
export default {
  name: "Cart",
  data () {
    return {

    };
  },
  components: {
    navFooter,
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
  }
};
</script>
  
<style lang="scss" scoped>
@import url("../assets/scss/cart.scss");
</style>
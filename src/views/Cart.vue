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
    <main class="cart-main">
      <div class="container">
        <div class="shopping-list">
          <div class="list-title">
            <div class="col col-check"><span class="iconfont icon-checkbox"></span>全选</div>
            <div class="col col-img">&nbsp;</div>
            <div class="col col-name">商品名称</div>
            <div class="col col-price">单价</div>
            <div class="col col-number">数量</div>
            <div class="col col-statistics">小计</div>
            <div class="col col-operating">操作</div>
          </div>
          <div class="goods-list">
            <div class="goods-content">
              <div class="item-table">
                <div class="col col-check">
                  <span class="iconfont icon-checkbox"></span>
                </div>
                <div class="col col-img">
                  <a href="">
                    <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1584945960.00664304.jpg?thumb=1&w=160&h=160">
                  </a>
                </div>
                <div class="col col-name"><a href="">Redmi K30 Pro 8GB+128GB 天际蓝</a></div>
                <div class="col col-price">2299元</div>
                <div class="col col-number">
                  <div class="changeNum">
                    <button class="btn">-</button>
                    <input type="text"
                           class="goods-num">
                    <button class="btn">+</button>
                  </div>
                </div>
                <div class="col col-statistics">2299元<p class="pre-info"></p>
                </div>
                <div class="col col-operating">x</div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="suggest-list">
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
        </div> -->
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
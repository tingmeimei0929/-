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
          <div class="content" v-if="getShoppingCart.length>0">
              <ul>
                  <!-- 购物车表头 -->
                  <li class="header">
                      <div class="pro_check">
                          <el-checkbox v-model="isAllCheck">全选</el-checkbox>
                      </div>
                      <div class="pro_img"></div>
                      <div class="pro_name">商品名称</div>
                      <div class="pro_price">单价</div>
                      <div class="pro_num">数量</div>
                      <div class="pro_total">小计</div>
                      <div class="pro_action">操作</div>
                  </li>
                  <!-- 购物车列表 -->
                  <li class="product-list" v-for="(item,index) in getShoppingCart" :key="item.id">
                        <div class="pro_check">
                            <el-checkbox :value="item.check" @change="checkChange($event,index)"></el-checkbox>
                        </div>
                        <div class="pro_img">
                            <router-link to="{
                                path: '/goods/details',
                                query: {productID: item.productID}
                            }">
                            <img :src="$target + item.productImg">
                            </router-link>
                        </div>
                        <div class="pro_name">
                            <router-link to="{
                                path: '/goods/details',
                                query: {productID: item.productID}
                            }">
                                {[ item.productName ]}
                            </router-link>
                        </div>
                        <div class="pro_price">{{ item.price }}元</div>
                        <div class="pro_num">
                            <el-input-number size="small"
                                             :value="item.num"
                                             @change="handleChange($event, index, item.productID)"
                                             :min="1"
                                             :max="item.maxNum">
                            </el-input-number>
                        </div>
                        <div class="pro_total pro_total_in">{{ item.price * item.num }}元</div>
                        <div class="pro_action">
                            <el-dialog>
                                <p>确定删除吗？</p>
                                <div style="text-align: right; margin:10px 0 0">
                                    <el-button type="primary" size="mini" @click="deleteItem($event, item.id, item.productID)">
                                        确定
                                    </el-button>
                                </div>
                                <i class="el-icon-error" slot="reference" style="font-size: 18px;"></i>
                            </el-dialog>
                        </div>
                  </li>
              </ul>
              <div style="height: 20px; background-color: #f5f5f5"></div>
              <!-- 购物车底部导航条 -->
              <div class="cart-bar">
                  <div class="cart-bar-left">
                      <span>
                          <router-link to="/goods">继续购物</router-link>
                      </span>
                      <span class="sep">|</span>
                      <span class="cart-total">
                          共
                          <span class="cart-total-num">{{ getNum }}</span>件商品，以选择
                          <span class="cart-total-num">{{ getCheckNum }}</span>件
                      </span>
                  </div>
                  <div class="cart-bar-right">
                      <span>
                          <span class="total-price-title">合计：</span>
                          <span class="total-price">{{ getTotalPrice }}元</span>
                      </span>
                      <router-link :to="getCheckNum > 0 ? '/confirmOrder' : ''">
                            <div :class="getCheckNum > 0 ? 'btn-primary' : 'btn-primary-disabled'">
                                去结算
                            </div>
                      </router-link>
                  </div>
              </div>
          </div>
          <!-- 购物车为空的时候显示的内容 -->
          <div v-else class="cart-empty">
              <div class="empty">
                  <h2>您的购物车还是空的！</h2>
                  <p>快去购物吧！</p>
              </div>
          </div>
      </div>
    </main>
    <navGoods></navGoods>
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

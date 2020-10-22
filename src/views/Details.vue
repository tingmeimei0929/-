<template>
   <div>
       <navHeader></navHeader>
       <main>
            <navBanner></navBanner>
            <div class="context">
                <!-- 头部 -->
                <div class="page-header" :class="headerFixed?'isFixed': ''">
                    <div class="container">
                        <h2>小米10至尊纪念版</h2>
                        <div class="title-left">
                            <span class="separator">|</span>
                            <a href="#">小米10 Pro</a>
                            <span class="separator">|</span>
                            <a href="#">小米10青春版</a>
                        </div>
                        <ul>
                            <li>
                                <router-link to>概述</router-link>
                                <span class="separator">|</span>
                            </li>
                            <li>
                                <router-link to>参数</router-link>
                                <span class="separator">|</span>
                            </li>
                            <li>
                                <router-link to>相机研发揭秘</router-link>
                                <span class="separator">|</span>
                            </li>
                            <li>
                                <router-link to>F码通道</router-link>
                                <span class="separator">|</span>
                            </li>
                            <li>
                                <router-link to>咨询客服</router-link>
                                <span class="separator">|</span>
                            </li>
                            <li>
                                <router-link to>用户评价</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 内容 -->
                <div class="page-main">
                    <div class="photo-swiper">
                        <el-carousel>
                            <el-carousel-item v-for="item in photoList" :key="item">
                                <img v-lazy="item.imgSrc">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div class="text">
                        <h2>小米10至尊纪念版</h2>
                        <p><span>「购机赠小米定制T恤；最高享24期免息，低至221元起/期；加149元得199元55W立式风冷无线充」</span>120X超远变焦/120W秒充科技/120Hz刷新率+240Hz采样率/晓龙865旗舰处理器/双模5G/10倍混合光学变焦/OIS光学防抖+EIS数字防抖/2000万超清前置相机/双串蝶式石墨烯基锂离子电池/等效4500mAh大电量/120W有线秒充+50W无线秒充+10W无线反充/WiFi6/多功能NFC/外红遥控</p>
                        <h4>小米自营</h4>
                        <p class="price">5599元</p>
                        <div class="line"></div>
                        <div class="address-box">
                            <div class="product-address">
                                <i class="el-icon-location-information"></i>
                                <div class="address-info">
                                    <span>北京</span>
                                    <span>北京市</span>
                                    <span>海淀区</span>
                                    <span>清河街道</span>
                                    <a href="">修改</a>
                                     <div class="address-desc">
                                        <a href="">有现货</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 class="title">选择颜色</h3>
                        <div class="color-box select-box">
                            <ul>
                                <li class="active">
                                        <a href="">陶瓷黑</a>
                                </li>
                                <li class="active">
                                    <a href="">透明版</a>
                                </li>
                                <li class="active">
                                    <a href="">亮银版</a>
                                </li>
                            </ul>
                        </div>
                        <h3 class="title">选择版本</h3>
                        <div class="version-box select-box">
                            <ul>
                                <li class="active">
                                    <a href="">16GB+512GB</a>
                                </li>
                            </ul>
                        </div>
                        <h3 class="title">选择小米提供的意外保护<span>了解意外保护></span></h3>
                        <div class="service-box">
                            <ul>
                                <li>
                                    <el-radio v-model="radio"></el-radio>
                                    <div class="product-con">
                                        <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1596695587.15667138.png">
                                        <h2>意外保障服务<span>349元</span></h2>
                                        <p>手机意外碎屏/进水/碾压等损坏</p>
                                        <div class="agreement-box">
                                            <i class="el-icon-check"></i>
                                            我已阅读
                                            <a href="">服务条款|</a>
                                            <a href="">常见问题</a>
                                            <span>349元</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <el-radio v-model="radio" label="1"></el-radio>
                                    <div class="product-con">
                                        <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1596695587.15667138.png">
                                        <h2>碎屏保障服务<span>249元</span></h2>
                                        <p>手机意外碎屏</p>
                                        <div class="agreement-box">
                                            <i class="el-icon-check"></i>
                                            我已阅读
                                            <a href="">服务条款|</a>
                                            <a href="">常见问题</a>
                                            <span>249元</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <h3 class="title">选择小米提供的延长保修<span>了解延长保修></span></h3>
                        <div class="service-box">
                            <ul>
                                <li>
                                    <el-radio v-model="radio" label="1"></el-radio>
                                    <div class="product-con">
                                        <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1596695587.15667138.png">
                                        <h2>延长保修服务<span>159元</span></h2>
                                        <p>厂保延一年，性能故障免费维修</p>
                                        <div class="agreement-box">
                                            <i class="el-icon-check"></i>
                                            我已阅读
                                            <a href="">服务条款|</a>
                                            <a href="">常见问题</a>
                                            <span>159元</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <h3 class="title">选择小米提供的云空间服务<span>了解云空间服务></span></h3>
                        <div class="service-box">
                            <ul>
                                <li>
                                    <el-radio v-model="radio" label="1"></el-radio>
                                    <div class="product-con">
                                        <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1600176481.06844959.png">
                                        <h2>云空间年卡200G<span>159元</span></h2>
                                        <p>主商品签收后，自动激活至下单账号</p>
                                        <div class="agreement-box">
                                            <i class="el-icon-check"></i>
                                            我已阅读
                                            <a href="">服务条款|</a>
                                            <a href="">常见问题</a>
                                            <span>159元</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <el-radio v-model="radio" label="1"></el-radio>
                                    <div class="product-con">
                                        <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1600176481.06844959.png">
                                        <h2>云空间年卡50G<span>49元</span></h2>
                                        <p>主商品签收后，自动激活至下单账号</p>
                                        <div class="agreement-box">
                                            <i class="el-icon-check"></i>
                                            我已阅读
                                            <a href="">服务条款|</a>
                                            <a href="">常见问题</a>
                                            <span>49元</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <el-radio v-model="radio" label="1"></el-radio>
                                    <div class="product-con">
                                        <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1600176481.06844959.png">
                                        <h2>云空间月卡200G<span>19元</span></h2>
                                        <p>主商品签收后，自动激活至下单账号</p>
                                        <div class="agreement-box">
                                            <i class="el-icon-check"></i>
                                            我已阅读
                                            <a href="">服务条款|</a>
                                            <a href="">常见问题</a>
                                            <span>19元</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <el-radio v-model="radio" label="1"></el-radio>
                                    <div class="product-con">
                                        <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1600176481.06844959.png">
                                        <h2>云空间月卡50G<span>6元</span></h2>
                                        <p>主商品签收后，自动激活至下单账号</p>
                                        <div class="agreement-box">
                                            <i class="el-icon-check"></i>
                                            我已阅读
                                            <a href="">服务条款|</a>
                                            <a href="">常见问题</a>
                                            <span>6元</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="price-box">
                            <p class="product">小米10至尊纪念版8GB+256GB 陶瓷黑<span>5599元</span></p>
                            <p class="service">意外保障服务<span>349元</span></p>
                            <h2>总计：5948元</h2>
                        </div>
                        <div class="button-box">
                            <button class="addCart">加入购物车</button>
                            <button class="like">喜欢</button>
                        </div>
                        <div class="after-sale-info">
                            <a href="">
                                <i class="el-icon-check"></i>小米自营
                            </a>
                            <a href="">
                                <i class="el-icon-check"></i>小米发货
                            </a>
                            <a href="">
                                <i class="el-icon-check"></i>7天无理由退货
                            </a>
                            <a href="">
                                <i class="el-icon-check"></i>运费说明
                            </a>
                            <a href="">
                                <i class="el-icon-check"></i>企业信息
                            </a>
                            <a href="">
                                <i class="el-icon-check"></i>售后服务政策
                            </a>

                            <a href="">
                                <i class="el-icon-check"></i>7天价格保护
                            </a>
                        </div>
                    </div>
                </div>
            </div>
             <div class="price-description">
                    <div class="container">
                        <p>价格说明</p>
                        <div class="description">
                            <span>划线价:</span>商品展示的划横线价格为参考价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价(如厂商指导价
                        、建议零售价等)活该商品在小米商城/小米有品/天猫小米官方旗舰店曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供参考。
                        </div>
                    </div>
                </div>
        </main>
       <navFooter></navFooter>
   </div>
</template>

<script>
import navHeader from '../components/Header.vue'
import navFooter from '../components/Footer.vue'
import navBanner from '../components/Banner.vue'
export default {
  name: 'Details',
  data () {
    return {
      headerFixed: '',
      photoList: [
        { imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1597145894.51396359.jpg' },
        { imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1597145894.43258180.jpg' },
        { imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1597145894.39134342.jpg' },
        { imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1597145894.46855544.jpg' },
        { imgSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1597145894.41376114.jpg' }
      ]
    }
  },
  components: {
    navHeader,
    navFooter,
    navBanner
  },
  mounted () {
    //  handleScroll为页面滚动的监听回调
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      //   当滚动超过180时，实现吸顶效果
      if (scrollTop > 300) {
        this.headerFixed = true
      } else {
        this.headerFixed = false
      }
    }
  },
  destroyed () {
    //   同时在destroyed回调中移除监听
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
@import url("../assets/scss/navbar.scss");
@import url('../assets/scss/details.scss');
// .isFixed{
//     position: fixed;
//     top: 0;
//     z-index: 999;
// }
</style>
<style lang="scss">
.el-carousel--horizontal{
    height: 600px;
}
.el-carousel__container{
    width: 560px !important;
    height: 560px !important;
    margin-left: auto;
    margin-right: auto;

    img{
        width: 560px !important;
        height: 560px !important;
    }
}

</style>

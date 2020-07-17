<template>
  <div>
    <navHeader></navHeader>
    <main class="companyMain">
      <div class="nav"
           :class="headerFixed?'isFixed': ''">
        <div class="nav-row">
          <div class="container">
            <div class="nav-logo">
              <a href="https://www.mi.com/index.html"
                 class="logo"></a>
            </div>
            <ul class="nav-list">
              <li class="nav-title companyNav"><a href="http://www.mi.com/a/h/15391.html"></a></li>
              <li v-for="sort in sorts.defaults"
                  :key="sort"
                  class="nav-link"
                  @click="showCommdity"><a>{{ sort }}</a></li>

            </ul>
            <div class="search">
              <div class="result-list">
                <input type="text"
                       v-for="(item,index) in inputDate"
                       v-model="inputDate[index]"
                       :key="index">
                <ul v-for="(item,index) in inputDate"
                    :key="index"
                    class="searchList">
                  <li><a>{{item}}</a></li>
                </ul>
              </div>
              <button type="primary"
                      class="btn"><i class="el-icon-alichaxun"></i></button>

            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="swiper-row">
          <swiper :options="swiperOption"
                  ref="mySwiper"
                  class="swiper-container">
            <swiper-slide v-for="(item,index) in swiperInfo"
                          :key="index"
                          :style="item.icon">
              <a :href="item.href"></a>
            </swiper-slide>
            <!-- 上一页 -->
            <div class="swiper-button-prev"
                 slot="button-prev"></div>
            <!-- 下一页 -->
            <div class="swiper-button-next"
                 slot="button-next"></div>
            <!-- 分页 -->
            <div class="swiper-pagination"
                 slot="pagination"></div>
          </swiper>
          <div class="category-item">
            <div class="category-top">
              <img src="https://i1.mifile.cn/f/i/17/qiye/icon_face.png">
              <div class="top-right">
                <h2>您好，欢迎回来</h2>
                <p>登录企业账户开始采购<i class="el-icon-aliqianjinxiayige"></i></p>
              </div>
            </div>
            <div class="category-bottom">
              <h3>企业专属特权</h3>
              <ul>
                <li>
                  <img src="">
                  <div class="bottom-right">
                    <h2>专属价格</h2>
                    <p>精选货品，专属优惠</p>
                  </div>
                </li>
                <li>
                  <img src="">
                  <div class="bottom-right">
                    <h2>自主开票</h2>
                    <p>全场商品，增票开具</p>
                  </div>
                </li>
                <li>
                  <img src="">
                  <div class="bottom-right">
                    <h2>便捷支付</h2>
                    <p>对公转账，票款一致</p>
                  </div>
                </li>
                <li>
                  <img src="">
                  <div class="bottom-right">
                    <h2>专业售后</h2>
                    <p>小米直供，售后无忧</p>
                  </div>
                </li>
              </ul>
              <p class="rule">更多会员管理规则，请点击<i class="el-icon-aliqianjinxiayige"></i></p>
            </div>
          </div>
        </div>
        <div class="home-row">
          <ul class="home-img">
            <li><a href="http://www.mi.com/redminote8"><img src="//i8.mifile.cn/v1/a1/79d1c803-9579-65f9-0692-da3f22d0e6f3.jpg"></a></li>
            <li><a href="https://item.mi.com/product/10000203.html?selected=10000203"><img src="//i8.mifile.cn/v1/a1/6fbc14b8-aa4c-c49e-de33-d8efb0fcc484.jpg"></a></li>
            <li><a href="https://www.mi.com/shouhuan4/"><img src="//i8.mifile.cn/v1/a1/392b66d8-7793-295b-1181-b70030b121e8.jpg"></a></li>
            <li><a href="https://www.mi.com/shouhuan4/"><img src="//i8.mifile.cn/v1/a1/6ab7bfd2-22cc-3007-dd90-eea69497f607.png"></a></li>
          </ul>
        </div>
      </div>
      <div class="commodity">
        <div class="home-brick">
          <div class="brick-title">
            <h2>新品 ▪ 礼品卡</h2>
            <div class="all"><a href="//www.mi.com/a/h/14933.html">查看全部<i class="el-icon-aliqianjinxiayige"></i></a></div>
          </div>
           <div class="brick-box">
            　<ul class="box-main">
              <li>
                <a>
                  <div class="thumb">
                    <img src="https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg">
                  </div>
                  <p class="content-title">Redmi K30 5G</p>
                  <p class="desc">Redmi K30 5G</p>
                </a>
              </li>
              <li>
                <a>
                  <div class="thumb">
                    <img src="https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg">
                  </div>
                  <p class="content-title">Redmi K30 5G</p>
                  <p class="desc">Redmi K30 5G</p>
                </a>
              </li>
              <li>
                <a>
                  <div class="thumb">
                    <img src="https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg">
                  </div>
                  <p class="content-title">Redmi K30 5G</p>
                  <p class="desc">Redmi K30 5G</p>
                </a>
              </li>
              <li>
                <a>
                  <div class="thumb">
                    <img src="https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg">
                  </div>
                  <p class="content-title">Redmi K30 5G</p>
                  <p class="desc">Redmi K30 5G</p>
                </a>
              </li>
              <li>
                <a>
                  <div class="thumb">
                    <img src="https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg">
                  </div>
                  <p class="content-title">Redmi K30 5G</p>
                  <p class="desc">Redmi K30 5G</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="home-brick">
          <div class="brick-title">
            <h2>手机 ▪ 平板</h2>
            <div class="all"><a href="//www.mi.com/a/h/14933.html">查看全部<i class="el-icon-aliqianjinxiayige"></i></a></div>
          </div>
           <div class="brick-box">
            　<ul class="box-main">
              <li>
                <a>
                  <div class="thumb">
                    <img src="https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg">
                  </div>
                  <p class="content-title">Redmi K30 5G</p>
                  <p class="desc">Redmi K30 5G</p>
                </a>
              </li>
              <li>
                <a>
                  <div class="thumb">
                    <img src="https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg">
                  </div>
                  <p class="content-title">Redmi K30 5G</p>
                  <p class="desc">Redmi K30 5G</p>
                </a>
              </li>
              <li>
                <a>
                  <div class="thumb">
                    <img src="https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg">
                  </div>
                  <p class="content-title">Redmi K30 5G</p>
                  <p class="desc">Redmi K30 5G</p>
                </a>
              </li>
              <li>
                <a>
                  <div class="thumb">
                    <img src="https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg">
                  </div>
                  <p class="content-title">Redmi K30 5G</p>
                  <p class="desc">Redmi K30 5G</p>
                </a>
              </li>
              <li>
                <a>
                  <div class="thumb">
                    <img src="https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg">
                  </div>
                  <p class="content-title">Redmi K30 5G</p>
                  <p class="desc">Redmi K30 5G</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="home-brick">
          <div class="brick-title">
            <h2>笔记本</h2>
            <div class="all"><a href="//www.mi.com/a/h/14933.html">查看全部<i class="el-icon-aliqianjinxiayige"></i></a></div>
          </div>
           <div class="brick-box">
            　<ul class="box-main">
              <li>
                <a>
                  <div class="thumb">
                    <img src="https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg">
                  </div>
                  <p class="content-title">Redmi K30 5G</p>
                  <p class="desc">Redmi K30 5G</p>
                </a>
              </li>
              <li>
                <a>
                  <div class="thumb">
                    <img src="https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg">
                  </div>
                  <p class="content-title">Redmi K30 5G</p>
                  <p class="desc">Redmi K30 5G</p>
                </a>
              </li>
              <li>
                <a>
                  <div class="thumb">
                    <img src="https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg">
                  </div>
                  <p class="content-title">Redmi K30 5G</p>
                  <p class="desc">Redmi K30 5G</p>
                </a>
              </li>
              <li>
                <a>
                  <div class="thumb">
                    <img src="https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg">
                  </div>
                  <p class="content-title">Redmi K30 5G</p>
                  <p class="desc">Redmi K30 5G</p>
                </a>
              </li>
              <li>
                <a>
                  <div class="thumb">
                    <img src="https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg">
                  </div>
                  <p class="content-title">Redmi K30 5G</p>
                  <p class="desc">Redmi K30 5G</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="home-brick">
          <div class="brick-title">
            <h2>家电</h2>
            <div class="all"><a href="//www.mi.com/a/h/14933.html">查看全部<i class="el-icon-aliqianjinxiayige"></i></a></div>
          </div>
           <div class="brick-box">
            　<ul class="box-main">
              <li>
                <a>
                  <div class="thumb">
                    <img src="https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg">
                  </div>
                  <p class="content-title">Redmi K30 5G</p>
                  <p class="desc">Redmi K30 5G</p>
                </a>
              </li>
              <li>
                <a>
                  <div class="thumb">
                    <img src="https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg">
                  </div>
                  <p class="content-title">Redmi K30 5G</p>
                  <p class="desc">Redmi K30 5G</p>
                </a>
              </li>
              <li>
                <a>
                  <div class="thumb">
                    <img src="https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg">
                  </div>
                  <p class="content-title">Redmi K30 5G</p>
                  <p class="desc">Redmi K30 5G</p>
                </a>
              </li>
              <li>
                <a>
                  <div class="thumb">
                    <img src="https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg">
                  </div>
                  <p class="content-title">Redmi K30 5G</p>
                  <p class="desc">Redmi K30 5G</p>
                </a>
              </li>
              <li>
                <a>
                  <div class="thumb">
                    <img src="https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg">
                  </div>
                  <p class="content-title">Redmi K30 5G</p>
                  <p class="desc">Redmi K30 5G</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="home-brick">
          <div class="brick-title">
            <h2>智能 ▪ 耳机 ▪ 音箱</h2>
            <div class="all"><a href="//www.mi.com/a/h/14933.html">查看全部<i class="el-icon-aliqianjinxiayige"></i></a></div>
          </div>
           <div class="brick-box">
            　<ul class="box-main">
              <li>
                <a>
                  <div class="thumb">
                    <img src="https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg">
                  </div>
                  <p class="content-title">Redmi K30 5G</p>
                  <p class="desc">Redmi K30 5G</p>
                </a>
              </li>
              <li>
                <a>
                  <div class="thumb">
                    <img src="https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg">
                  </div>
                  <p class="content-title">Redmi K30 5G</p>
                  <p class="desc">Redmi K30 5G</p>
                </a>
              </li>
              <li>
                <a>
                  <div class="thumb">
                    <img src="https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg">
                  </div>
                  <p class="content-title">Redmi K30 5G</p>
                  <p class="desc">Redmi K30 5G</p>
                </a>
              </li>
              <li>
                <a>
                  <div class="thumb">
                    <img src="https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg">
                  </div>
                  <p class="content-title">Redmi K30 5G</p>
                  <p class="desc">Redmi K30 5G</p>
                </a>
              </li>
              <li>
                <a>
                  <div class="thumb">
                    <img src="https://i8.mifile.cn/v1/a1/acd564ad-ddb7-5139-d632-28dff91e6ec5!200x200.jpg">
                  </div>
                  <p class="content-title">Redmi K30 5G</p>
                  <p class="desc">Redmi K30 5G</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
    <navFooter></navFooter>
  </div>
</template>
    
<script>
import navHeader from '../components/Header'
import navFooter from '../components/Footer'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import '../assets/swiper/css/swiper.css'
export default {
  name: "Company",
  data () {
    return {
      sorts: {
        "defaults": ['新品 ▪ 礼品卡', '手机 ▪ 平板', '笔记本', '家店', '智能 ▪ 路由器', '耳机 ▪ 音箱', '生活 ▪ 儿童', '配件 ▪ 车品']
      },
      inputDate: ["小米10", "Redmi Note 8", "小米CC9", "黑鲨游戏手机", "小米电视", "小米笔记本", "路由器", "小爱音箱", "净水器"],
      isShow: false,
      showList: false,
      categoryList: '',
      headerFixed: '',
      swiperInfo: [
        {
          'icon': {
            backgroundImage: "url(//i8.mifile.cn/v1/a1/a34c5f94-ee51-385f-d955-5389bf70f90c!1226x460.jpg)",
            backgroundSize: "cover",
            backgroundposition: "center",
            backgroundRepeat: "no-repeat",
          },
          "href": "./Login.vue"
        },
        {
          'icon': {
            backgroundImage: "url(//i8.mifile.cn/v1/a1/a5b313f3-44e3-bdf8-066e-449cd0a9758c!1226x460.jpg)",
            backgroundSize: "cover",
            backgroundposition: "center",
            backgroundRepeat: "no-repeat",
          },
          "href": "./Login.vue"
        }
      ],
      swiperOption: {
        notNextTick: true,
        grabCursor: true,
        loop: true,
        initialSlide: 0,
        autoplay: true,
        speed: 800,

        //左右点击
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        //分页器设置 
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        },

      },
    };
  },
  components: {
    navHeader,
    navFooter,
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    handleScroll () {
      // 得倒页面滚动的距离
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

      // 当滚动超过240时，实现吸顶效果
      if (scrollTop > 240) {
        this.headerFixed = true;
      } else {
        this.headerFixed = false;
      }
    },
    showCommdity () {
      this.$router.push({
        path: '/Commodity'
      })
    }
  },
  mounted () {
    console.log('this is current swiper instance object', this.swiper);
    this.swiper.slideTo(3, 1000, false)
    this.countdown();
    // handleScroll为页面滚动的监听回调
    window.addEventListener("scroll", this.handleScroll)
  },
  destroyed () {
    // 同时在destroyed回调中移除监听
    window.removeEventListener("scroll", this.handleScroll)
  }
};
</script>
  
<style lang="scss" scoped>
@import url("../assets/scss/company.scss");
@import url("../assets/scss/navbar.scss");
.nav-link:nth-child(1) {
}
</style>
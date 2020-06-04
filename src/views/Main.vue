<template>
  <div>
    <navHeader></navHeader>
    <main class="main">
      <div class="cont">
        <div class="home-row">
          <div class="home-left">
            <ul class="home-ul .clearfix">
              <li><a href="https://www.mi.com/seckill/"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48">小米秒杀</a></li>
              <li class="li-after"><a href="https://qiye.mi.com/"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48">企业团购</a></li>
              <li class="li-after"><a href="https://www.mi.com/order/fcode"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48">F码通道</a></li>
            </ul>
            <ul class="home-ul clearfix">
              <li><a href="https://www.mi.com/mimobile/"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48">米粉卡</a></li>
              <li class="li-after"><a href="https://huanxin.mi.com/"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48">以旧换新</a></li>
              <li class="li-after"><a href="https://recharge.10046.mi.com/"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48">话费充值</a></li>
            </ul>
          </div>
          <ul class="home-right">
            <li><a href="http://www.mi.com/redminote8"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35a2239e10e392af73b6b7a737a039d6.jpg?w=632&h=340"></a></li>
            <li><a href="https://item.mi.com/product/10000203.html?selected=10000203"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fbff319c7dd00e75c9758acf248d3784.jpg?w=632&h=340"></a></li>
            <li><a href="https://www.mi.com/shouhuan4/"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&h=340"></a></li>
          </ul>
        </div>
      </div>
      <div class="container">
        <div class="flash-sale row">
          <div class="flash-title">
            <h2>小米闪购</h2>
            <!-- 上一页 -->
            <div class="swiper-button-prev btn"
                 slot="button-prev"></div>
            <!-- 下一页 -->
            <div class="swiper-button-next btn"
                 slot="button-next"></div>

          </div>
          <div class="falsh-container">
            <div class="flash-timer">
              <h3>14:00场</h3>
              <img src="../assets/image/falsh.jpg">
              <h2 class="prompt">距离结束还有</h2>
              <div class="timer">
                <div class="timeruning">{{hours}}</div>
                <div class="icon">:</div>
                <div class="timeruning">{{minute}}</div>
                <div class="icon">:</div>
                <div class="timeruning">{{seconds}}</div>
              </div>
            </div>
            <div class="falsh-swiper">
              <ul class="swiper-container"
                  v-swiper:mySwiper="swiperOptions"
                  ref="mySwiper">
                <li class="swiper-wrapper">
                  <a href="#">
                    <div class="swiper-slide"
                         v-for="(item,index) in flashList"
                         :key="item.index">
                      <div class="thumb">
                        <img :src="item.imgSrc"
                             style="width:160px; height:160px">
                      </div>
                      <h3 class="content-title">{{item.title}}</h3>
                      <p class="desc">{{item.desc}}</p>
                      <p class="price">{{item.newPrice}}<span>{{item.oldPrice}}</span></p>
                    </div>
                  </a>
                </li>

                <li class="swiper-wrapper">
                  <a>
                    <div class="swiper-slide">
                      <div class="thumb">
                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7a4cc78dcb3b77372c600aa28291ad3b.jpg?thumb=1&w=400&h=400&f=webp&q=90"
                             style="width:160px; height:160px">
                      </div>
                      <h3 class="content-title">小米曲面显示器 34英寸 黑</h3>
                      <p class="desc">超宽大环绕显示屏</p>
                      <p class="price">1999元<span>2499元</span></p>
                    </div>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <div class="home-banner row">
          <a><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3f2a7ec142ffc00b6f279549ebee0af7.jpg?thumb=1&w=2452&h=240&f=webp&q=90"></a>
        </div>
        <div class="home-brick row">
          <div class="brick-title">
            <h2>手机</h2>
            <div class="all"><a href="//www.mi.com/a/h/14933.html">查看全部<i class="el-icon-aliqianjinxiayige"></i></a></div>
          </div>
           <div class="brick-box">
            <div class="box-minor">
              <a><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=468&h=1228&f=webp&q=90"></a>
            </div>
            <div class="box-main">
              <ul class="box-list ">
                <li>
                  <a href="https://www.mi.com/mi10youth">
                    <div class="thumb">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=400&h=400&f=webp&q=90"
                           style="width:160px; height:160px">
                    </div>
                    <h3 class="content-title"> 小米10 青春版 5G</h3>
                    <p class="desc">50倍潜望式变焦 / 轻薄5G手机</p>
                    <p class="price">2099元<span></span></p>

                  </a>
                </li>
                <li>
                  <a href="https://www.mi.com/mi10youth">
                    <div class="thumb">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=400&h=400&f=webp&q=90"
                           style="width:160px; height:160px">
                    </div>
                    <h3 class="content-title"> 小米10 青春版 5G</h3>
                    <p class="desc">50倍潜望式变焦 / 轻薄5G手机</p>
                    <p class="price">2099元<span></span></p>

                  </a>
                </li>
                <li>
                  <a href="https://www.mi.com/mi10youth">
                    <div class="thumb">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=400&h=400&f=webp&q=90"
                           style="width:160px; height:160px">
                    </div>
                    <h3 class="content-title"> 小米10 青春版 5G</h3>
                    <p class="desc">50倍潜望式变焦 / 轻薄5G手机</p>
                    <p class="price">2099元<span></span></p>

                  </a>
                </li>
                <li>
                  <a href="https://www.mi.com/mi10youth">
                    <div class="thumb">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=400&h=400&f=webp&q=90"
                           style="width:160px; height:160px">
                    </div>
                    <h3 class="content-title"> 小米10 青春版 5G</h3>
                    <p class="desc">50倍潜望式变焦 / 轻薄5G手机</p>
                    <p class="price">2099元<span></span></p>

                  </a>
                </li>
              </ul>
              <ul class="box-list first-list">
                <li>
                  <a href="https://www.mi.com/mi10youth">
                    <div class="thumb">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=400&h=400&f=webp&q=90"
                           style="width:160px; height:160px">
                    </div>
                    <h3 class="content-title"> 小米10 青春版 5G</h3>
                    <p class="desc">50倍潜望式变焦 / 轻薄5G手机</p>
                    <p class="price">2099元<span></span></p>

                  </a>
                </li>
                <li>
                  <a href="https://www.mi.com/mi10youth">
                    <div class="thumb">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=400&h=400&f=webp&q=90"
                           style="width:160px; height:160px">
                    </div>
                    <h3 class="content-title"> 小米10 青春版 5G</h3>
                    <p class="desc">50倍潜望式变焦 / 轻薄5G手机</p>
                    <p class="price">2099元<span></span></p>

                  </a>
                </li>
                <li>
                  <a href="https://www.mi.com/mi10youth">
                    <div class="thumb">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=400&h=400&f=webp&q=90"
                           style="width:160px; height:160px">
                    </div>
                    <h3 class="content-title"> 小米10 青春版 5G</h3>
                    <p class="desc">50倍潜望式变焦 / 轻薄5G手机</p>
                    <p class="price">2099元<span></span></p>

                  </a>
                </li>
                <li>
                  <a href="https://www.mi.com/mi10youth">
                    <div class="thumb">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=400&h=400&f=webp&q=90"
                           style="width:160px; height:160px">
                    </div>
                    <h3 class="content-title"> 小米10 青春版 5G</h3>
                    <p class="desc">50倍潜望式变焦 / 轻薄5G手机</p>
                    <p class="price">2099元<span></span></p>

                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="home-banner row">
          <a><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/88e35cffc82cd98cd53172460067af17.jpg?thumb=1&w=2452&h=240&f=webp&q=90"></a>
        </div>
      </div>
    </main>
    <navFooter>
    </navFooter>
  </div>
</template>
    
<script>
import navHeader from '../components/Header'
import navFooter from '../components/Footer'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import '../assets/swiper/css/swiper.css'
export default {
  name: "Main",
  data () {
    return {
      isEnd: false,
      day: '',
      hours: 0,
      minute: 0,
      seconds: 0,
      swiperOptions: {
        notNextTick: true,
        loop: true,
        initialSlide: 0,
        autoplay: true,
        speed: 800,

        //左右点击
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }

      },
      flashList: '',
    }
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
  mounted () {
    console.log('Current Swiper instance object', this.mySwiper)
    this.mySwiper.slideTo(3, 1000, false)
    this.init();
    this.countdown();
  },
  methods: {
    init () {
      this.axios.get("/mock/flashSwiper.json").then((response) => {
        alert('kkk')
        console.log(response)
        let res = response.data;
        this.flashList = res.data;
        console.log(flashList)
      })
    },
    countdown () {
      const end = Date.parse(new Date('2020-6-4 16:00:00'))
      // 定义当前时间戳
      const now = Date.parse(new Date())
      // 做判断当倒计时结束时都为0
      if (now >= end) {
        this.day = '00'
        this.hours = '00'
        this.minute = '00'
        this.seconds = '00'
        return
      }
      // 用结束时间减去当前时间获得倒计时时间戳
      const timestamp = end - now;
      let day = parseInt(timestamp / 1000 / 60 / 60 / 24);
      let hours = parseInt(timestamp / 1000 / 60 / 60 % 24);
      let minute = parseInt(timestamp / 1000 / 60 % 60);
      let seconds = parseInt(timestamp / 1000 % 60);

      // 给数据赋值
      this.day = day;
      this.hours = hours > 9 ? hours : '0' + hours;
      this.minute = minute > 9 ? minute : '0' + minute;
      this.seconds = seconds > 9 ? seconds : '0' + seconds;
      // 定义this指向
      const that = this;

      // 使用定时器 然后使用递归 让每一次函数能调用自己达到倒计时的效果
      setInterval(() => {
        that, countdown()
      }, 1000);

    }
  }

}
</script>
  
<style lang="scss" scoped>
@import url("../assets/scss/main.scss");
</style>
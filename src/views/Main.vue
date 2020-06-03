<template>
  <div>
    <navHeader></navHeader>
    <main class="main">
      <div class="container">
        <div class="home-row row">
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
        <div class="flash-sale row">
          <div class="flash-title">
            <h2>小米闪购</h2>
            <div class="btn">
              <!-- 上一页 -->
              <div class="swiper-button-prev"
                   slot="button-prev"></div>
              <!-- 下一页 -->
              <div class="swiper-button-next"
                   slot="button-next"></div>
            </div>
          </div>
          <div class="falsh-container">
            <div class="flash-timer">
              <h3>14:00场</h3>
              <img src="../assets/image/falsh.jpg">
              <h2>距离结束还有</h2>
              <div class="timer"></div>
            </div>
            <div class="falsh-swiper">
              <ul class="swiper-container"
                  v-swiper:mySwiper="swiperOptions">
                <li class="swiper-wrapper"><a href="#">
                    <div class="swiper-slide"
                         v-for="item in flashList"
                         :key="item">
                      <div class="thumb">
                        <img :src="imgSrc"
                             style="width:160px; height:160px">
                      </div>
                      <h3 class="content-title">{{title}}</h3>
                      <p class="desc">{{desc}}</p>
                      <p class="price">{{newPrice}}<span>{{oldPrice}}</span></p>
                    </div>
                  </a></li>

              </ul>
            </div>
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
  name: "Main",
  data () {
    return {
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
    console.log('this is current swiper instance object', this.swiper);
    this.swiper.slideTo(3, 1000, false);
    this.init();
  },
  methods: {
    init () {
      this.axios.get("/mock/flashSwiper.json").then((response) => {
        let res = response.data;
        this.flashList = res.data;
      })
    }
  }

}
</script>
  
<style lang="scss" scoped>
@import url("../assets/scss/main.scss");
</style>
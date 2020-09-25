<template>
  <div>
    <navHeader></navHeader>
    <main class="main">
        <navBanner></navBanner>
        <div class="container">
            <!-- 轮播图 -->
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
                <!-- 左侧导航条 -->
                <ul class="category-item">
                    <li v-for="(item, index) in categoryList" :key='index'>
                    <div class="main-menu"><a>{{ item.name }}<i class="el-icon-aliqianjinxiayige"></i></a></div>
                    <div class="sub-menu">
                        <ul class="item-list">
                        <li>
                            <a href="https://www.mi.com/redmitv/98/">
                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                alt="">
                            <span class="text">Redmi 智能电视 MAX 98</span>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </li>
                </ul>
            </div>
            <!--小米秒杀分类 -->
            <div class="home-row">
                <div class="home-left">
                    <ul class="home-ul .clearfix">
                    <li @click="spikeBtn"><a href="#"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48">小米秒杀</a></li>
                    <li class="li-after"
                        @click="companyBtn"><a href="#"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48">企业团购</a></li>
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
            <!-- 主要内容 -->
            <div class="cont">
                <!-- 小米闪购 -->
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
                    <div class="flash-container">
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
                        <div class="flash-swiper">
                            <swiper :options="swiperOption" ref="mySwiper" class="swiper-container">
                                <swiper-slide v-for="item in swiperList" :key="item">
                                    <div v-for="(list,index) in item.children" :key="index">
                                        <a class="carousel">
                                            <div class="thumb">
                                                <img :src="list.imgSrc" style="width:160px;height:160px;">
                                            </div>
                                            <h3 class="content-title">{{ list.title }}</h3>
                                            <p class="desc">{{ list.desc }}</p>
                                            <p class="price">{{ list.newPrice }}元<span>{{ list.oldPrice }}元</span></p>
                                        </a>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </div>
                <!-- 展示图-->
                <div class="home-banner row">
                    <a><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3f2a7ec142ffc00b6f279549ebee0af7.jpg?thumb=1&w=2452&h=240&f=webp&q=90"></a>
                </div>
                <!-- 手机 -->
                <div class="home-brick row">
                    <div class="brick-title">
                        <h2>手机</h2>
                        <div class="all"><span href="#">查看全部<i class="el-icon-aliqianjinxiayige"></i></span></div>
                    </div>
                    <div class="brick-box">
                        <div class="box-minor">
                            <a><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=468&h=1228&f=webp&q=90"></a>
                        </div>
                        <div class="box-main">
                            <ul class="box-list ">
                                <li v-for="(item,index) in phoneList" :key="index">
                                    <a>
                                        <div class="thumb">
                                            <img :src="item.imgSrc" style="width:160px;height:160px;">
                                        </div>
                                        <h3 class="content-title">{{ item.title }}</h3>
                                        <p class="desc">{{ item.desc }}</p>
                                        <p class="price">{{ item.newPrice }}元起<span>{{ item.oldPrice }}元</span></p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- 展示图 -->
                <div class="home-banner row">
                    <a><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/88e35cffc82cd98cd53172460067af17.jpg?thumb=1&w=2452&h=240&f=webp&q=90"></a>
                </div>
            </div>
        </div>
    </main>
    <navToolBar></navToolBar>
    <navFooter>
    </navFooter>
  </div>
</template>

<script>
import navBanner from '../components/Banner'
import navHeader from '../components/Header'
import navFooter from '../components/Footer'
import navToolBar from '../components/ToolBar'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import '../assets/swiper/css/swiper.css'
export default {
  name: 'Main',
  data () {
    return {
      index: 0,
      day: 0,
      hours: 0,
      minute: 0,
      seconds: 0,
      categoryList: [
        {
          name: '手机 电话卡',
          children: [
            {
              imgSrc: '',
              title: ''
            }
          ]
        },
        {
          name: '电视 盒子',
          children: [
            {
              imgSrc: '',
              title: ''
            }
          ]
        },
        {
          name: '笔记本 显示器 平板',
          children: [
            {
              imgSrc: '',
              title: ''
            }
          ]
        },
        {
          name: '家电 插线板',
          children: [
            {
              imgSrc: '',
              title: ''
            }
          ]
        },
        {
          name: '出行 穿戴',
          children: [
            {
              imgSrc: '',
              title: ''
            }
          ]
        },
        {
          name: '智能 路由器',
          children: [
            {
              imgSrc: '',
              title: ''
            }
          ]
        },
        {
          name: '电源 配件',
          children: [
            {
              imgSrc: '',
              title: ''
            }
          ]
        },
        {
          name: '健康 儿童',
          children: [
            {
              imgSrc: '',
              title: ''
            }
          ]
        },
        {
          name: '耳机 音箱',
          children: [
            {
              imgSrc: '',
              title: ''
            }
          ]
        },
        {
          name: '生活 箱包',
          children: [
            {
              imgSrc: '',
              title: ''
            }
          ]
        }
      ],
      swiperInfo: [
        {
          icon: {
            backgroundImage: 'url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a7c2a3fec92ad95435f8ab8d8407db6c.jpg?thumb=1&w=2452&h=920&f=webp&q=90)',
            backgroundSize: 'cover',
            backgroundposition: 'center',
            backgroundRepeat: 'no-repeat'
          },
          href: 'https://www.mi.com/a/h/15490.html'
        },
        {
          icon: {
            backgroundImage: 'url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7e882fcbdcafc352dde03c741836399b.jpg?thumb=1&w=2452&h=920&f=webp&q=90)',
            backgroundSize: 'cover',
            backgroundposition: 'center',
            backgroundRepeat: 'no-repeat'
          },
          href: 'https://www.mi.com/a/h/15490.html'
        },
        {
          icon: {
            backgroundImage: 'url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/400f15aedf3b2981c462e8811e88d384.jpg?w=2452&h=920)',
            backgroundSize: 'cover',
            backgroundposition: 'center',
            backgroundRepeat: 'no-repeat'
          },
          href: 'https://www.mi.com/a/h/15490.html'
        },
        {
          icon: {
            backgroundImage: 'url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f306ce6727f8166fd97730c5876bfadc.jpg?thumb=1&w=2452&h=920&f=webp&q=90)',
            backgroundSize: 'cover',
            backgroundposition: 'center',
            backgroundRepeat: 'no-repeat'
          },
          href: 'https://www.mi.com/a/h/15490.html'
        },
        {
          icon: {
            backgroundImage: 'url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1b5bc9a947319a1d7424cb209c632b7d.jpg?thumb=1&w=2452&h=920&f=webp&q=90)',
            backgroundSize: 'cover',
            backgroundposition: 'center',
            backgroundRepeat: 'no-repeat'
          },
          href: 'https://www.mi.com/a/h/15490.html'
        }
      ],
      swiperOption: {
        notNextTick: true,
        grabCursor: true,
        loop: true,
        initialSlide: 0,
        autoplay: true,
        speed: 800,

        // 左右点击
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },

        // 分页器设置
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        }

      },
      inputDate: [{ name: '小米10', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }, { name: 'Redmi Note 8', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }, { name: '小米CC9', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }, { name: '黑鲨游戏手机', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }, { name: '小米电视', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }, { name: '小米笔记本', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }, { name: '路由器', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }, { name: '小爱音箱', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }, { name: '净水器', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }],
      timer: '',
      inputList: '',
      seq: 0,
      phoneList: [
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: '小米10 至尊版',
          desc: '120X 变焦/120W秒充/120Hz屏幕',
          newPrice: '5299'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b19bf0e7e599c1bbbce510fb0dbc8bc.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: 'Redmi K30 至尊版',
          desc: '120Hz弹出全面屏，天玑1000+旗舰处理器',
          newPrice: '1999'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/237942bfcaf2bbe82fbe966c2f584d69.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: ' 腾讯黑鲨3S ',
          desc: '骁龙865处理器，120Hz刷新率',
          newPrice: '3999'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c892a7640f58032489cbff8a948b50f9.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: 'Redmi 9A',
          desc: '5000mAh长循环大电量，6.53"超大护眼屏幕',
          newPrice: '599'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: '小米10 青春版 5G',
          desc: '50倍潜望式变焦 / 轻薄5G手机',
          newPrice: '1899',
          oldPrice: '2099'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: '小米10',
          desc: '骁龙865/1亿像素相机',
          newPrice: '3799',
          oldPrice: '3999'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d037b19b924fdf15b1cc9e671d6628fe.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: 'Redmi K30 Pro ',
          desc: '双模5G，骁龙865，弹出全面屏',
          newPrice: '2999',
          oldPrice: '3699'
        },
        {
          imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cfdbce40301133a287e9e57faa37bdf.jpg?thumb=1&w=400&h=400&f=webp&q=90',
          title: 'Redmi K30 Pro 变焦版',
          desc: '双模5G，骁龙865，弹出全面屏',
          newPrice: '3399',
          oldPrice: '3999'
        }
      ],
      swiperList: [
        {
          index: 1,
          children: [
            {
              href: '//www.mi.com/seckill/',
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581498837.11654651.jpg?thumb=1&w=400&h=400',
              title: '米家电动剃须刀 往复五刀头 黑色',
              desc: '五把刀头，三种刀型',
              newPrice: '399',
              oldPrice: '499'
            },
            {
              href: '//www.mi.com/seckill/',
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1589007010.44868979.jpg?thumb=1&w=400&h=400',
              title: 'Pinlo迷你三明治机 白色',
              desc: '小巧身材，一机多用',
              newPrice: '399',
              oldPrice: '499'
            },
            {
              href: '//www.mi.com/seckill/',
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1595587776.42591074.jpg?thumb=1&w=400&h=400',
              title: 'bebird智能可视采耳棒M9 Pro',
              desc: '智能可视采耳棒M9 Pro ',
              newPrice: '109',
              oldPrice: '169'
            },
            {
              href: '//www.mi.com/seckill/',
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1596278100.54031929.jpg?thumb=1&w=400&h=400',
              title: '阿卡亮片彩色变色龙 中号',
              desc: '阿卡亮片彩色变色龙',
              newPrice: '69.9',
              oldPrice: '49.9'
            }
          ]
        },
        {
          index: 2,
          children: [
            {
              href: '//www.mi.com/seckill/',
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1551344035.40192886.jpg?thumb=1&w=400&h=400',
              title: '小米有线耳机（K歌版） 白色',
              desc: '我的私人KTV',
              newPrice: '149',
              oldPrice: '169'
            },
            {
              href: '//www.mi.com/seckill/',
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581498837.11654651.jpg?thumb=1&w=400&h=400',
              title: '米家电动剃须刀 往复五刀头 黑色',
              desc: '五把刀头，三种刀型',
              newPrice: '399',
              oldPrice: '499'
            },
            {
              href: '//www.mi.com/seckill/',
              imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3ef708836a62d29aa71598e5d54352c.png?thumb=1&w=400&h=400&f=webp&q=90',
              title: '米家手持无线吸尘器充电挂座 白色',
              desc: '充电收纳二合一',
              newPrice: '9.9',
              oldPrice: '99'
            },
            {
              href: '//www.mi.com/seckill/',
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1552868299.27348967.jpg?thumb=1&w=400&h=400',
              title: 'Redmi全自动波轮洗衣机 1A 8kg 白色',
              desc: '一键操作，父母都爱用',
              newPrice: '799',
              oldPrice: '899'
            }
          ]
        },
        {
          index: 3,
          children: [
            {
              href: '//www.mi.com/seckill/',
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1555486031.585971.jpg?thumb=1&w=400&h=400',
              title: '小米净水器600G 白色',
              desc: '600加仑通量，流速更快',
              newPrice: '399',
              oldPrice: '499'
            },
            {
              href: '//www.mi.com/seckill/',
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581498837.11654651.jpg?thumb=1&w=400&h=400',
              title: '米家电动剃须刀 往复五刀头 黑色',
              desc: '五把刀头，三种刀型',
              newPrice: '399',
              oldPrice: '499'
            },
            {
              href: '//www.mi.com/seckill/',
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1596279772.59022925.jpg?thumb=1&w=400&h=400',
              title: '绿粉亮片龙特雷摩尔 常规号',
              desc: '绿粉亮片龙特雷摩尔',
              newPrice: '49',
              oldPrice: '79.9'
            },
            {
              href: '//www.mi.com/seckill/',
              imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581498837.11654651.jpg?thumb=1&w=400&h=400',
              title: '米家电动剃须刀 往复五刀头 黑色',
              desc: '五把刀头，三种刀型',
              newPrice: '399',
              oldPrice: '499'
            }
          ]
        }
      ]
    }
  },
  components: {
    navHeader,
    navFooter,
    navToolBar,
    Swiper,
    SwiperSlide,
    navBanner
  },
  directives: {
    swiper: directive
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted: function () {
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
    this.countdown()
    // 初始化秒杀列表
    this.init()
    // input循环定时器
    this.timer = setInterval(this.scroll, 1000)
  },
  methods: {
    countdown () {
      const end = Date.parse(new Date('2020-9-25 16:00:00'))
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
      const timestamp = end - now
      const day = parseInt(timestamp / 1000 / 60 / 60 / 24)
      const hours = parseInt(timestamp / 1000 / 60 / 60 % 24)
      const minute = parseInt(timestamp / 1000 / 60 % 60)
      const seconds = parseInt(timestamp / 1000 % 60)
      // 给数据赋值
      this.day = day
      this.hours = hours > 9 ? hours : '0' + hours
      this.minute = minute > 9 ? minute : '0' + minute
      this.seconds = seconds > 9 ? seconds : '0' + seconds
      // 定义this指向
      const that = this
      console.log(`${hours} ${minute}`)
      // 使用定时器 然后使用递归 让每一次函数能调用自己达到倒计时的效果
      setTimeout(() => {
        that.countdown()
      }, 1000)
    },
    details () {
      this.$router.push({
        path: '/Spike'
      })
    },
    spikeBtn () {
      this.$router.push({
        path: '/Spike'
      })
    },
    companyBtn () {
      this.$router.push({
        path: '/Company'
      })
    }
  },
  beforeDestroy () {
    clearTimeout(this.countdown)
    clearTimeout(this.timer)
  }

}
</script>

<style lang="scss" scoped>
@import url("../assets/scss/main.scss");
</style>

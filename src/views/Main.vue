<template>
  <div>
    <navHeader></navHeader>
    <main class="main">
      <div class="nav">
        <div class="nav-row">
          <div class="container">
            <div class="nav-logo">
              <a href="https://www.mi.com/index.html"
                 class="logo"></a>
            </div>
            <ul class="nav-list">
              <li class="nav-title"></li>
              <li v-for="sort in sorts.defaults"
                  :key="sort"
                  class="nav-link"><a>{{ sort }}</a>
                <div class="link-list">
                  <ul class="item-children">
                    <li class="item-detaile">
                      <a href="https://www.mi.com/buy?product_id=10000213">
                        <div class="item-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                               alt=""></div>
                        <div class="item-title">小米10 青春版 5G</div>
                        <div class="item-price">2099元起</div>
                      </a>
                    </li>
                    <li class="item-detaile">
                      <a href="https://www.mi.com/buy?product_id=10000213">
                        <div class="item-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=320&h=220&f=webp&q=90"
                               alt=""></div>
                        <div class="item-title">小米10 Pro</div>
                        <div class="item-price">4999元起</div>
                      </a>
                    </li>
                    <li class="item-detaile">
                      <a href="https://www.mi.com/buy?product_id=10000213">
                        <div class="item-img"><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4a76ee684e51f0ee531ef3dc7f0aeaf.png?thumb=1&w=320&h=220&f=webp&q=90"
                               alt=""></div>
                        <div class="item-title">小米10</div>
                        <div class="item-price">3999元起</div>
                      </a>
                    </li>
                    <li class="item-detaile">
                      <a href="https://www.mi.com/buy?product_id=10000213">
                        <div class="item-img"><img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png?thumb=1&w=320&h=220"
                               alt=""></div>
                        <div class="item-title">小米CC9</div>
                        <div class="item-price">1499元起</div>
                      </a>
                    </li>
                    <li class="item-detaile">
                      <a href="https://www.mi.com/buy?product_id=10000213">
                        <div class="item-img"><img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png?thumb=1&w=320&h=220"
                               alt=""></div>
                        <div class="item-title">小米CC9e</div>
                        <div class="item-price">1299元起</div>
                      </a>
                    </li>
                    <li class="item-detaile">
                      <a href="https://www.mi.com/buy?product_id=10000213">
                        <div class="item-img last-item"><img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b02f50c9dd2e01c139a06a12502755ef.png?thumb=1&w=320&h=220"
                               alt=""></div>
                        <div class="item-title">小米CC9 美图定制版</div>
                        <div class="item-price">1999元起</div>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-menu"><a href="https://www.mi.com/service/">服务</a></li>
              <li class="nav-menu"><a href="http://www.xiaomi.cn/">社区</a></li>
            </ul>
            <div class="search">
              <div class="result-list">
                  <!--  -->
                <input type="text"
                        name="slider"  v-for="(item,index) in inputDate"
                       :key="index" :placeholder="item.name" >
                <ul class="searchList">
                  <li v-for="(item,index) in inputDate"
                    :key="index"><a :href="item.href">{{item.name}}</a></li>
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

          <ul class="category-item">
            <li>
              <div class="main-menu"><a>手机 电话卡 <i class="el-icon-aliqianjinxiayige"></i></a></div>
              <div class="sub-menu">
                <ul class="item-list">
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98</span>
                    </a>
                  </li>
                </ul>
                <ul class="item-list">
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src=""
                           alt="">
                      <span class="text"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98</span>
                    </a>
                  </li>
                </ul>
                <ul class="item-list">
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98"</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98"</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98"</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98"</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98"</span>
                    </a>
                  </li>
                </ul>
                <ul class="item-list">
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98"</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98"</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98"</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98"</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98"</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98"</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div class="main-menu"><a>电视 盒子 <i class="el-icon-aliqianjinxiayige"></i></a></div>
              <div class="sub-menu">
                <ul class="item-list">
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98</span>
                    </a>
                  </li>
                </ul>
                <ul class="item-list">
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src=""
                           alt="">
                      <span class="text"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mi.com/redmitv/98/">
                      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                           alt="">
                      <span class="text">Redmi 智能电视 MAX 98</span>
                    </a>
                  </li>
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
            <li>
              <div class="main-menu"><a>笔记本 显示器 平板 <i class="el-icon-aliqianjinxiayige"></i></a></div>
            </li>
            <li>
              <div class="main-menu"><a>家电 插线板 <i class="el-icon-aliqianjinxiayige"></i></a></div>
            </li>
            <li>
              <div class="main-menu"><a>出行 穿戴<i class="el-icon-aliqianjinxiayige"></i></a></div>
            </li>
            <li>
              <div class="main-menu"><a>智能 路由器 <i class="el-icon-aliqianjinxiayige"></i></a></div>
            </li>
            <li>
              <div class="main-menu"><a>电源 配件 <i class="el-icon-aliqianjinxiayige"></i></a></div>
            </li>
            <li>
              <div class="main-menu"><a>健康 儿童 <i class="el-icon-aliqianjinxiayige"></i></a></div>
            </li>
            <li>
              <div class="main-menu"><a>耳机 音箱 <i class="el-icon-aliqianjinxiayige"></i></a></div>
            </li>
            <li>
              <div class="main-menu"><a>生活 箱包 <i class="el-icon-aliqianjinxiayige"></i></a></div>
            </li>
          </ul>
        </div>
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
        <div class="cont">
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
                        <swiper-slide>
                            <a class="swiper-slide">
                                <div class="thumb">
                                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7a4cc78dcb3b77372c600aa28291ad3b.jpg?thumb=1&w=400&h=400&f=webp&q=90"
                                        style="width:160px; height:160px">
                                </div>
                                <h3 class="content-title">小米曲面显示器 34英寸 黑</h3>
                                <p class="desc">超宽大环绕显示屏</p>
                                <p class="price">1999元<span>2499元</span></p>
                            </a>
                             <a class="swiper-slide">
                                <div class="thumb">
                                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7a4cc78dcb3b77372c600aa28291ad3b.jpg?thumb=1&w=400&h=400&f=webp&q=90"
                                        style="width:160px; height:160px">
                                </div>
                                <h3 class="content-title">小米曲面显示器</h3>
                                <p class="desc">超宽大环绕显示屏</p>
                                <p class="price">1999元<span>2499元</span></p>
                            </a>
                              <a class="swiper-slide">
                                <div class="thumb">
                                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7a4cc78dcb3b77372c600aa28291ad3b.jpg?thumb=1&w=400&h=400&f=webp&q=90"
                                        style="width:160px; height:160px">
                                </div>
                                <h3 class="content-title">小米曲面显示器 34英寸 黑</h3>
                                <p class="desc">超宽大环绕显示屏</p>
                                <p class="price">1999元<span>2499元</span></p>
                            </a>
                             <a class="swiper-slide">
                                <div class="thumb">
                                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7a4cc78dcb3b77372c600aa28291ad3b.jpg?thumb=1&w=400&h=400&f=webp&q=90"
                                        style="width:160px; height:160px">
                                </div>
                                <h3 class="content-title">小米曲面显示器</h3>
                                <p class="desc">超宽大环绕显示屏</p>
                                <p class="price">1999元<span>2499元</span></p>
                            </a>
                        </swiper-slide>
                         <swiper-slide>
                            <a class="swiper-slide">
                                <div class="thumb">
                                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7a4cc78dcb3b77372c600aa28291ad3b.jpg?thumb=1&w=400&h=400&f=webp&q=90"
                                        style="width:160px; height:160px">
                                </div>
                                <h3 class="content-title">小米曲面显示器</h3>
                                <p class="desc">超宽大环绕显示屏</p>
                                <p class="price">1999元<span>2499元</span></p>
                            </a>
                        </swiper-slide>
                         <swiper-slide>
                            <a class="swiper-slide">
                                <div class="thumb">
                                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7a4cc78dcb3b77372c600aa28291ad3b.jpg?thumb=1&w=400&h=400&f=webp&q=90"
                                        style="width:160px; height:160px">
                                </div>
                                <h3 class="content-title">34英寸 黑</h3>
                                <p class="desc">超宽大环绕显示屏</p>
                                <p class="price">1999元<span>2499元</span></p>
                            </a>
                        </swiper-slide>
                         <swiper-slide>
                            <a class="swiper-slide">
                                <div class="thumb">
                                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7a4cc78dcb3b77372c600aa28291ad3b.jpg?thumb=1&w=400&h=400&f=webp&q=90"
                                        style="width:160px; height:160px">
                                </div>
                                <h3 class="content-title">黑</h3>
                                <p class="desc">超宽大环绕显示屏</p>
                                <p class="price">1999元<span>2499元</span></p>
                            </a>
                        </swiper-slide>
                   </swiper>
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
                  <li v-for="phoneItem in phoneList"
                      :key="phoneItem">
                    <a href="phoneList.href">
                      <div class="thumb">
                        <img src="phoneList.imgSrc"
                             style="width:160px; height:160px">
                      </div>
                      <h3 class="content-title"> phoneList.title</h3>
                      <div class="desc">phoneList.desc</div>
                      <div class="price">phoneList.newPrice<span>phoneList.oldPrice</span></div>
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
      </div>
    </main>
    <navToolBar></navToolBar>
    <navFooter>
    </navFooter>
  </div>
</template>

<script>
import navHeader from '../components/Header'
import navFooter from '../components/Footer'
import navToolBar from '../components/ToolBar'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import '../assets/swiper/css/swiper.css'
export default {
  name: 'Main',
  data () {
    return {
      sorts: {
        defaults: ['小米手机', 'Redmi红米', '电视', '笔记本', '家店', '路由器', '智能硬件']
      },
      index: 0,
      day: '',
      hours: 0,
      minute: 0,
      seconds: 0,
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
      flashList: '',
      inputDate: [{ name: '小米10', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }, { name: 'Redmi Note 8', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }, { name: '小米CC9', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }, { name: '黑鲨游戏手机', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }, { name: '小米电视', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }, { name: '小米笔记本', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }, { name: '路由器', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }, { name: '小爱音箱', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }, { name: '净水器', href: '//www.mi.com/search?keyword=%E5%AE%9A%E5%88%B6T%E6%81%A4' }],
      timer: ''
    }
  },
  components: {
    navHeader,
    navFooter,
    navToolBar,
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
    // init () {
    //   this.axios.post('/api/public/flash.json').then((response) => {
    //     alert('llll')
    //     console.log(response)
    //     const res = response.data
    //     this.flashList = res.data
    //     console.log(flashList)
    //   })
    //   this.axios.post('/api/public/phone.json').then((res) => {
    //     console.log(res)
    //     const phone = res.data
    //     this.phoneList = phone.data
    //     console.log(phoneList)
    //   })
    // },
    countdown () {
      const end = Date.parse(new Date('2020-7-14 16:00:00'))
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

      // 使用定时器 然后使用递归 让每一次函数能调用自己达到倒计时的效果
      setInterval(() => {
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
@import url("../assets/scss/navbar.scss");
</style>

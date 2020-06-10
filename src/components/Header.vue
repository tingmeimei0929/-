<template>
  <header class="header">
    <div class="topbar">
      <div class="container">
        <ul class="topbar-list">
          <li><a href="https://www.mi.com/index.html">小米商城</a><span class="sep">|</span></li>
          <li><a href="https://home.miui.com/">MIUI</a></li>
          <li><span class="sep">|</span><a href="https://iot.mi.com">loT</a><span class="sep">|</span></li>
          <li><a href="https://i.mi.com">云服务</a><span class="sep">|</span></li>
          <li><a href="https://jr.mi.com/?from=micom">金融</a><span class="sep">|</span></li>
          <li><a href="https://youpin.mi.com/">有品</a><span class="sep">|</span></li>
          <li><a href="https://xiaoai.mi.com/">小爱开放平台</a><span class="sep">|</span></li>
          <li><a href="https://qiye.mi.com/">企业团购</a><span class="sep">|</span></li>
          <li><a href="https://www.mi.com/aptitude/list?id=41">资质证照</a><span class="sep">|</span></li>
          <li><a href="https://www.mi.com/aptitude/list">协议规则</a><span class="sep">|</span></li>
          <li><a href="https://www.mi.com/appdownload">下载app</a>
            <span class="sep">|</span></li>
          <li><a href="javascript:;">Select Location</a></li>
        </ul>
        <ul class="topbar-info">
          <li @click="login">登录 <span class="sep">|</span></li>
          <li @click="signUp">注册 <span class="sep">|</span></li>
          <li>消息通知</li>
          <li class="cartLi">
            <i class="el-icon-aligouwuchekong"></i>购物车<span>(0)</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav">
      <div class="container">
        <div class="nav-row">
          <div class="nav-logo">
            <a href="https://www.mi.com/index.html"
               class="logo"></a>
          </div>
          <ul class="nav-list">
            <li class="nav-title"><a href="http://www.mi.com/a/h/15391.html"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/225054e1a54fe7aa86a7e0366b88e695.gif?w=165&h=55"> <span style="display:none">全部商品分类</span></a></li>
            <li class="nav-link">
              <a href="">小米手机</a>
            </li>
            <li class="nav-link"><a href="">Redmi红米</a></li>
            <li class="nav-link"><a href="">电视</a></li>
            <li class="nav-link"><a href="">笔记本</a></li>
            <li class="nav-link"><a href="">家店</a></li>
            <li class="nav-link"><a href="">路由器</a></li>
            <li class="nav-link"><a href="">智能硬件</a></li>
            <li class="nav-menu"><a href="">服务</a></li>
            <li class="nav-menu"><a href="">社区</a></li>
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
          <div class="link-list">
            <ul class="item-children">
              <li class="item-detaile">
                <a href="https://www.mi.com/buy?product_id=10000213">
                  <div class="item-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                         alt=""></div>
                  <div class="item-title">小米10 青春版 5G</div>
                  <p class="item-price">2099元起</p>
                </a>
              </li>
              <li class="item-detaile">
                <a href="https://www.mi.com/buy?product_id=10000213">
                  <div class="item-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=320&h=220&f=webp&q=90"
                         alt=""></div>
                  <div class="item-title">小米10 Pro</div>
                  <p class="item-price">4999元起</p>
                </a>
              </li>
              <li class="item-detaile">
                <a href="https://www.mi.com/buy?product_id=10000213">
                  <div class="item-img"><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4a76ee684e51f0ee531ef3dc7f0aeaf.png?thumb=1&w=320&h=220&f=webp&q=90"
                         alt=""></div>
                  <div class="item-title">小米10</div>
                  <p class="item-price">3999元起</p>
                </a>
              </li>
              <li class="item-detaile">
                <a href="https://www.mi.com/buy?product_id=10000213">
                  <div class="item-img"><img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png?thumb=1&w=320&h=220"
                         alt=""></div>
                  <div class="item-title">小米CC9</div>
                  <p class="item-price">1499元起</p>
                </a>
              </li>
              <li class="item-detaile">
                <a href="https://www.mi.com/buy?product_id=10000213">
                  <div class="item-img"><img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png?thumb=1&w=320&h=220"
                         alt=""></div>
                  <div class="item-title">小米CC9e</div>
                  <p class="item-price">1299元起</p>
                </a>
              </li>
              <li class="item-detaile">
                <a href="https://www.mi.com/buy?product_id=10000213">
                  <div class="item-img last-item"><img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b02f50c9dd2e01c139a06a12502755ef.png?thumb=1&w=320&h=220"
                         alt=""></div>
                  <div class="item-title">小米CC9 美图定制版</div>
                  <p class="item-price">1999元起</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
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
      </div>
    </div>
  </header>
</template>
    
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import '../assets/swiper/css/swiper.css'
export default {
  name: "Header",
  data () {
    return {
      inputDate: ["小米10", "Redmi Note 8", "小米CC9", "黑鲨游戏手机", "小米电视", "小米笔记本", "路由器", "小爱音箱", "净水器"],
      swiperInfo: [
        {
          'icon': {
            backgroundImage: "url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a7c2a3fec92ad95435f8ab8d8407db6c.jpg?thumb=1&w=2452&h=920&f=webp&q=90)",
            backgroundSize: "cover",
            backgroundposition: "center",
            backgroundRepeat: "no-repeat",
          },
          "href": "https://www.mi.com/a/h/15490.html"
        },
        {
          'icon': {
            backgroundImage: "url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7e882fcbdcafc352dde03c741836399b.jpg?thumb=1&w=2452&h=920&f=webp&q=90)",
            backgroundSize: "cover",
            backgroundposition: "center",
            backgroundRepeat: "no-repeat",
          },
          "href": "https://www.mi.com/a/h/15490.html"
        },
        {
          'icon': {
            backgroundImage: "url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/400f15aedf3b2981c462e8811e88d384.jpg?w=2452&h=920)",
            backgroundSize: "cover",
            backgroundposition: "center",
            backgroundRepeat: "no-repeat",
          },
          "href": "https://www.mi.com/a/h/15490.html"
        },
        {
          'icon': {
            backgroundImage: "url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f306ce6727f8166fd97730c5876bfadc.jpg?thumb=1&w=2452&h=920&f=webp&q=90)",
            backgroundSize: "cover",
            backgroundposition: "center",
            backgroundRepeat: "no-repeat",
          },
          "href": "https://www.mi.com/a/h/15490.html"
        },
        {
          'icon': {
            backgroundImage: "url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1b5bc9a947319a1d7424cb209c632b7d.jpg?thumb=1&w=2452&h=920&f=webp&q=90)",
            backgroundSize: "cover",
            backgroundposition: "center",
            backgroundRepeat: "no-repeat",
          },
          "href": "https://www.mi.com/a/h/15490.html"
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
      isShow: false,
      showList: false,
      categoryList: ''
    }
  },
  components: {
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
    this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    login () {
      this.$router.push({
        path: '/Login'
      })
    },
    signUp () {
      this.$router.push({
        path: '/Registered'
      })
    }

  }
}
</script>
  
<style lang="scss" scoped>
@import "../assets/scss/header.scss";
</style>
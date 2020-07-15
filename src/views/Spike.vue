<template>
  <div>
    <navHeader></navHeader>
    <main class="spikeMain">
      <div class="nav">
        <div class="container">
          <div class="nav-row">
            <div class="nav-logo">
              <a href="https://www.mi.com/index.html"
                 class="logo"></a>
            </div>
            <ul class="nav-list">
              <li class="nav-title"><a href="http://www.mi.com/a/h/15391.html">全部商品分类</a></li>
              <li class="nav-link">
                <a href="#">小米手机</a>
              </li>
              <li class="nav-link"><a href="#">Redmi红米</a></li>
              <li class="nav-link"><a href="#">电视</a></li>
              <li class="nav-link"><a href="#">笔记本</a></li>
              <li class="nav-link"><a href="#">家店</a></li>
              <li class="nav-link"><a href="#">路由器</a></li>
              <li class="nav-link"><a href="#">智能硬件</a></li>
              <li class="nav-menu"><a href="https://www.mi.com/service/">服务</a></li>
              <li class="nav-menu"><a href="http://www.xiaomi.cn/">社区</a></li>
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
            <!-- <div class="link-list">
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
          </div> -->
          </div>
        </div>
      </div>
      <div class="spike-title">
        <h1>小米秒杀</h1>
        <ul class="navbar"
            :class="headerFixed?'isFixed': ''">
          <li>
            <router-link to="/Spike/Spike1">
              <em class="time">14:00</em>
              <div class="caption">
                <div class="timerTop">抢购中</div>
                <div class="timer">
                  距结束<span class="timerInter">03:45:11</span>
                  <!-- <div class="timerInter">
                    <div class="timeruning">{{hours}}</div>
                    <div class="icon">:</div>
                    <div class="timeruning">{{minute}}</div>
                    <div class="icon">:</div>
                    <div class="timeruning">{{seconds}}</div>
                  </div> -->
                </div>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/Spike/Spike2">
              <em class="time">20:00</em>
              <span class="caption">即将开始</span>
            </router-link>
          </li>
          <li>
            <router-link to="/Spike/Spike3">
              <em class="time">22:00</em>
              <span class="caption">即将开始</span>
            </router-link>
          </li>
          <li>
            <router-link to="/Spike/Spike4">
              <em class="time">00:00</em>
              <span class="caption">即将开始</span>
            </router-link>
          </li>
          <li>
            <router-link to="/Spike/Spike5">
              <em class="time">10:00</em>
              <span class="caption">明日开始</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </main>
    <navFooter></navFooter>
  </div>
</template>
    
<script>
import navHeader from '../components/Header'
import navFooter from '../components/Footer'
export default {
  name: "Spike",
  data () {
    return {
      headerFixed: '',
      inputDate: ["小米10", "Redmi Note 8", "小米CC9", "黑鲨游戏手机", "小米电视", "小米笔记本", "路由器", "小爱音箱", "净水器"],
      isShow: false,
      showList: false,
      categoryList: ''
    };
  },
  components: {
    navHeader,
    navFooter,
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
    }
  },
  mounted () {
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
@import url("../assets/scss/spike.scss");
@import url("../assets/scss/navbar.scss");
</style>
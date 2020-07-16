<template>
  <div>
    <navHeader></navHeader>
    <main class="companyMain">
      <div class="nav">
        <div class="nav-row">
          <div class="container">
            <div class="nav-logo">
              <a href="https://www.mi.com/index.html"
                 class="logo"></a>
            </div>
            <ul class="nav-list">
              <li v-for="sort in sorts.defaults"
                  :key="sort"
                  class="nav-link"><a>{{ sort }}</a></li>
              <!-- <li class="nav-title companyNav"><a href="http://www.mi.com/a/h/15391.html"></a></li> -->
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
      </div>
      <div class="container">
        <div class="silde">
          <img class="logo-company"
               src="https://i8.mifile.cn/v1/a1/a5b313f3-44e3-bdf8-066e-449cd0a9758c!1226x460.jpg"
               alt="">
        </div>

      </div>
    </main>
    <navFooter></navFooter>
  </div>
</template>
    
<script>
import navHeader from '../components/Header'
import navFooter from '../components/Footer'
export default {
  name: "Company",
  data () {
    return {
      sorts: {
        "defaults": ['', '新品 ▪ 礼品卡', '手机 ▪ 平板', '笔记本', '家店', '智能 ▪ 耳机 ▪ 音箱', '生活 ▪ 儿童', '配件 ▪ 车品']
      },
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
.nav-link:nth-child(1) {
  background: url("https://c1.mifile.cn/f/i/16/qiye2016/qiyelogo.png") 50% 50%
    no-repeat;
  text-align: left !important;
  width: 67px !important;
  height: 50px !important;
  margin: 30px 0 0 10px !important;
}
</style>
<template>
   <div>
       <navHeader></navHeader>
       <main>
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
                                name="slider"  :placeholder= inputList>
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
                <!-- 头部 -->
                <div class="page-header">
                    <div class="title">
                        <p>小米10至尊纪念版</p>
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
                            <span class="separator">|</span>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
       <navFooter></navFooter>
   </div>
</template>

<script>
import navHeader from '../components/Header.vue'
import navFooter from '../components/Footer.vue'
export default {
  name: 'Details',
  data () {
    return {

    }
  },
  components: {
    navHeader,
    navFooter
  }
}
</script>

<style lang="scss" scoped>
@import url("../assets/scss/navbar.scss");
@import url('../assets/scss/details.scss');
</style>

<template>
  <div>
    <navHeader></navHeader>
    <main class="commodityMain">
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
              <li class="nav-link">
                <router-link to="/Commodity/Commodity1">新品 ▪ 礼品卡</router-link>
              </li>
              <li class="nav-link">
                <router-link to="/Commodity/Commodity2">手机 ▪ 平板</router-link>
              </li>
              <li class="nav-link">
                <router-link to="/Commodity/Commodity3">笔记本</router-link>
              </li>
              <li class="nav-link">
                <router-link to="/Commodity/Commodity4">家店</router-link>
              </li>
              <li class="nav-link">
                <router-link to="/Commodity/Commodity5">智能 ▪ 路由器</router-link>
              </li>
              <li class="nav-link">
                <router-link to="/Commodity/Commodity6">耳机 ▪ 音箱</router-link>
              </li>
              <li class="nav-link">
                <router-link to="/Commodity/Commodity7">生活 ▪ 儿童</router-link>
              </li>
              <li class="nav-link">
                <router-link to="/Commodity/Commodity8">配件 ▪ 车品</router-link>
              </li>
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
  name: "Commodity",
  data () {
    return {
      inputDate: ["小米10", "Redmi Note 8", "小米CC9", "黑鲨游戏手机", "小米电视", "小米笔记本", "路由器", "小爱音箱", "净水器"],
      headerFixed: '',
    };
  },
  components: {
    navHeader,
    navFooter,
  },
  methods: {
    toggleCompany () {
      this.$router.push({
        path: '/Company'
      })
    },
    handleScroll () {
      // 得倒页面滚动的距离
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

      // 当滚动超过240时，实现吸顶效果
      if (scrollTop > 600) {
        this.headerFixed = true;
      } else {
        this.headerFixed = false;
      }
    },
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
@import url("../assets/scss/commodity.scss");
@import url("../assets/scss/navbar.scss");
</style>
<template>
  <div>
    <navHeader></navHeader>
    <main class="spikeMain">
    <navBanner></navBanner>
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
import navBanner from '../components/Banner.vue'
import navHeader from '../components/Header'
import navFooter from '../components/Footer'
export default {
  name: 'Spike',
  data () {
    return {
      context: '全部商品分类',
      headerFixed: '',
      inputDate: ['小米10', 'Redmi Note 8', '小米CC9', '黑鲨游戏手机', '小米电视', '小米笔记本', '路由器', '小爱音箱', '净水器'],
      isShow: false,
      showList: false,
      categoryList: ''
    }
  },
  components: {
    navHeader,
    navFooter,
    navBanner
  },
  methods: {
    handleScroll () {
      // 得倒页面滚动的距离
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

      // 当滚动超过240时，实现吸顶效果
      if (scrollTop > 240) {
        this.headerFixed = true
      } else {
        this.headerFixed = false
      }
    }
  },
  mounted () {
    // handleScroll为页面滚动的监听回调
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    // 同时在destroyed回调中移除监听
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
@import url("../assets/scss/spike.scss");
</style>

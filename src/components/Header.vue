<template>
  <header class="header">
    <div class="topbar">
      <div class="container">
       <ul class="topbar-list">
            <li v-for="(item,index) in topbarInfo" :key="item[index]"><a :href="item.href">{{ item.name }}</a><span class="sep">|</span></li>
        </ul>
        <ul class="topbar-info">
          <li @click="login">登录 <span class="sep">|</span></li>
          <li @click="signUp">注册 <span class="sep">|</span></li>
          <li>消息通知</li>
          <li class="cartLi"
              @click="cart">
            <i class="el-icon-aligouwuchekong"></i>购物车<span>(0)</span>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
      topbarInfo: [
        { href: 'https://www.mi.com/index.html', name: '小米商城' },
        { href: 'https://home.miui.com/', name: 'MIUI' },
        { href: 'https://iot.mi.com', name: 'loT' },
        { href: 'https://i.mi.com', name: '云服务' },
        { href: 'https://jr.mi.com/?from=micom', name: '金融' },
        { href: 'https://youpin.mi.com/', name: '有品' },
        { href: 'https://xiaoai.mi.com/', name: '小爱开放平台' },
        { href: 'https://qiye.mi.com/', name: '企业团购' },
        { href: 'https://www.mi.com/aptitude/list?id=41', name: '资质证照' },
        { href: 'https://www.mi.com/aptitude/list', name: '协议规则' },
        { href: 'https://www.mi.com/appdownload', name: '下载app' },
        { href: 'javascript:;', name: 'Select Location' }]
    }
  },
  methods: {
    login () {
      this.$router.push({
        path: '/LoginEn'
      })
    },
    signUp () {
      this.$router.push({
        path: '/RegisteredEn'
      })
    },
    cart () {
      this.$router.push({
        path: '/Cart'
      })
    }

  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/header.scss";
</style>

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
  </header>
</template>
    
<script>

export default {
  name: "Header",
  data () {
    return {

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
    }

  }
}
</script>
  
<style lang="scss" scoped>
@import "../assets/scss/header.scss";
</style>
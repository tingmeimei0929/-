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
          <li>登录 <span class="sep">|</span></li>
          <li>注册 <span class="sep">|</span></li>
          <li>消息通知</li>
          <li class="cartLi">
            <i class="el-icon-aligouwuchekong"></i>购物车<span>(0)</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav">
      <div class="container">
        <div class="nav-logo">
          <a href="https://www.mi.com/index.html"
             class="logo"></a>
        </div>
        <ul class="nav-list">
          <li class="nav-title"><a href="http://www.mi.com/a/h/15391.html"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/225054e1a54fe7aa86a7e0366b88e695.gif?w=165&h=55"> <span style="display:none">全部商品分类</span></a></li>
          <li class="nav-link"><a href="">小米手机</a></li>
          <li class="nav-link"><a href="">Redmi红米</a></li>
          <li class="nav-link"><a href="">电视</a></li>
          <li class="nav-link"><a href="">笔记本</a></li>
          <li class="nav-link"><a href="">家店</a></li>
          <li class="nav-link"><a href="">路由器</a></li>
          <li class="nav-link"><a href="">智能硬件</a></li>
          <li class="nav-link"><a href="">服务</a></li>
          <li class="nav-link"><a href="">社区</a></li>
        </ul>
        <div class="search">
          <input type="text">
          <button type="primary"
                  class="btn"><i class="el-icon-alichaxun"></i></button>
        </div>
      </div>
    </div>
  </header>
</template>
    
<script>
export default {
  name: "Header",
  data () {
    return {

    };
  }
};
</script>
  
<style lang="scss" scoped>
@import "../assets/scss/header.scss";
</style>
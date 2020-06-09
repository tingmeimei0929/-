<template>
  <div class="wrapper">
    <div class="layout-main">
      <div class="layout-logo">
        <a href="https://www.mi.com/index.html"
           class="logo"></a>
      </div>
      <h4 class="layout-title">注册小米账号</h4>
      <div class="layout-table">
        <div class="regbox">
          <h4 class="regbox-title">国家/地区</h4>
          <div class="regbox-select">
            <div class="select-block">
              <div class="block-main"></div>
              <div class="block-aside"></div>
            </div>
            <div class="country-list">
              <p>11</p>
              <p>11</p>
              <p>11</p>
              <p>11</p>
              <p>11</p>
              <p>11</p>

            </div>
          </div>
          <div class="small">成功注册账号后，国家/地区将不能被修改</div>

          <h4 class="regbox-title">手机号码</h4>
          <div class="regbox-select">
            <div class="select-block">
              <div class="block-main phone">
                <p>+93</p>
                <i class="el-icon-alisanjiao"></i>
              </div>
              <input type="text"
                     class="aside-phone"
                     placeholder="请输入手机号码">
            </div>
            <div class="phone-list">
              <p>11</p>
              <p>11</p>
              <p>11</p>
              <p>11</p>
              <p>11</p>
              <p>11</p>
            </div>
          </div>
          <button>立即注册</button>
        </div>
        <div class="privacy_box">
          <p>已阅读并同意：小米<a>用户协议</a>和<a>隐私政策</a></p>
        </div>
      </div>
    </div>
    <div class="layout-bottom">
      <ul>
        <li><a class="font-type">简体</a><i class="el-icon-alivertical_line"></i></li>
        <li><a>繁体</a><i class="el-icon-alivertical_line"></i></li>
        <li><a>English</a><i class="el-icon-alivertical_line"></i></li>
        <li><a class="privacy">常见问题</a></li>
      </ul>
      <p>小米公司版权所有-京ICP备10046444-<img src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png">京公网安备11010802020134-京ICP证110507号</p>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "Registered",
  data () {
    return {

    };
  }
};
</script>
  
<style lang="scss" scoped>
@import url("../assets/scss/registered.scss");
</style>
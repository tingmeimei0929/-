<template>
  <div class="container">
    <div class="top">
      <a href="https://www.mi.com/index.html"
         class="logo"></a>
    </div>
    <div class="middle">
      <div class="type">
        <div class="login-title">
          <a class="signIn">Sign in</a>
          <span></span>
          <a>Scan QR code</a>
        </div>
        <div class="login-type">
          <div class="account">
            <input type="text"
                   placeholder="Email/Phone/Mi Account"
                   name="username"
                   id="userName"
                   v-model="username">
          </div>
          <div class="account last">
            <input type="password"
                   placeholder="password"
                   name="password"
                   id="password"
                   v-model="password">
          </div>
          <button>Sign in</button>
          <div class="prompt">
            <div class="sms-link"><a>Sign in with SMS</a></div>
            <div class="other-login-type">
              <a>Create account</a>
              <span>|</span>
              <a>Forgot password?</a>
            </div>
            <fieldset>
              <legend>More options</legend>
            </fieldset>
            <div class="other-type">
              <a href="/pass/sns/login/auth?appid=100284651&&callback=https%3A%2F%2Forder.mi.com%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Findex.html%26sign%3DMjM0MWU0NjBlOTU1YzY4NGQzOTc3MDk4N2M2MjQ5Y2ZiZTMxNTFlZQ%2C%2C&sid=mi_eshop"
                 class="btn-qq"><i class="el-icon-aliQQ"></i></a>
              <a href="/pass/sns/login/auth?appid=2996826273&&callback=https%3A%2F%2Forder.mi.com%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Findex.html%26sign%3DMjM0MWU0NjBlOTU1YzY4NGQzOTc3MDk4N2M2MjQ5Y2ZiZTMxNTFlZQ%2C%2C&sid=mi_eshop"
                 class="btn-weibo"><i class="el-icon-aliweibo"></i></a>
              <a href="/pass/sns/login/auth?appid=wxxmzh&scope=snsapi_login&callback=https%3A%2F%2Forder.mi.com%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Findex.html%26sign%3DMjM0MWU0NjBlOTU1YzY4NGQzOTc3MDk4N2M2MjQ5Y2ZiZTMxNTFlZQ%2C%2C&sid=mi_eshop"
                 class="btn-zhifubao"><i class="el-icon-alizhifubao1"></i></a>
              <a href="/pass/sns/login/auth?appid=2088011127562160&&callback=https%3A%2F%2Forder.mi.com%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Findex.html%26sign%3DMjM0MWU0NjBlOTU1YzY4NGQzOTc3MDk4N2M2MjQ5Y2ZiZTMxNTFlZQ%2C%2C&sid=mi_eshop"
                 class="btn-weixin"><i class="el-icon-aliweixin2"></i></a>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <ul>
        <li><a class="font-type">简体</a><i class="el-icon-alivertical_line"></i></li>
        <li><a>繁体</a><i class="el-icon-alivertical_line"></i></li>
        <li><a>English</a><i class="el-icon-alivertical_line"></i></li>
        <li><a>常见问题</a><i class="el-icon-alivertical_line"></i></li>
        <li><a class="privacy">隐私设置</a></li>
      </ul>
      <p>小米公司版权所有-京ICP备10046444-<img src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png">京公网安备11010802020134-京ICP证110507号</p>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "Login",
  data () {
    return {
      username: '',
      password: ''
    };
  }
};
</script>
  
<style lang="scss" scoped>
@import url("../assets/scss/login.scss");
</style>
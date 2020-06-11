<template>
  <div class="container">
    <div class="top">
      <a href="https://www.mi.com/index.html"
         class="logo"></a>
    </div>
    <div class="middle">
      <div class="type">
        <div class="login-title">
          <a class="signIn">帳號登入</a>
          <span></span>
          <a>二維碼登入</a>
        </div>
        <div class="login-type">
          <div class="account">
            <input type="text"
                   placeholder="E-mail/手機號碼/小米ID"
                   name="username"
                   id="userName"
                   v-model="username">
          </div>
          <div class="account last">
            <input type="password"
                   placeholder="密碼"
                   name="password"
                   id="password"
                   v-model="password">
          </div>
          <div class="small"
               v-show="prompt">
            <i class="el-icon-alibaocuo"></i>
            <span class="errorPrompt">{{errorMsg}}</span>
          </div>
          <button>登入</button>
          <div class="prompt">
            <div class="sms-link"><a>手機短信登入/注冊</a></div>
            <div class="other-login-type">
              <a @click="signup">立即註冊</a>
              <span>|</span>
              <a>忘記密碼?</a>
            </div>
            <fieldset>
              <legend>其他登入方式</legend>
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
        <li @click="simple"><a>简体</a><i class="el-icon-alivertical_line"></i></li>
        <li @click="complex"><a class="font-type">繁体</a><i class="el-icon-alivertical_line"></i></li>
        <li @click="foreign"><a>English</a><i class="el-icon-alivertical_line"></i></li>
        <li><a href="https://static.account.xiaomi.com/html/faq/faqList.html">常見問題</a><i class="el-icon-alivertical_line"></i></li>
        <li><a class="privacy">隱私政策</a></li>
      </ul>
      <p>小米公司版權所有-京ICP備10046444-<img src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png">京公網安備11010802020134號-京ICP證110507號</p>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "LoginFan",
  data () {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    complex () {
      this.$router.push({
        path: '/LoginFan'
      })
    },
    foreign () {
      this.$router.push({
        path: '/LoginEn'
      })
    },
    simple () {
      this.$router.push({
        path: '/Login'
      })
    },
    signup () {
      this.$router.push({
        path: '/Registered'
      })
    }
  }
};
</script>
  
<style lang="scss" scoped>
@import url("../assets/scss/login.scss");
</style>
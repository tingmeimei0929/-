<template>
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
      <div class="prompt-top">
        <div class="sms-link"><a @click="smscode">手機短信登入/注冊</a></div>
        <div class="other-login-type">
          <a @click="signup">立即註冊</a>
          <span>|</span>
          <a @click="forget">忘記密碼?</a>
        </div>
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
</template>
    
<script>
export default {
  name: "AccountFan",
  data () {
    return {
      username: '',
      password: '',
      errorMsg: '请输入账号',
      prompt: false
    };
  },
  methods: {
    signup () {
      this.$router.push({
        path: '/RegisteredFan'
      })
    },
    forget () {
      this.$router.push({
        path: '/ForgetFan'
      })
    },
    smscode () {
      this.$router.push({
        path: '/LoginFan/SMSFan'
      })
    }
  }
};
</script>
  
<style lang="scss" scoped>
@import url("../assets/scss/login.scss");
</style>
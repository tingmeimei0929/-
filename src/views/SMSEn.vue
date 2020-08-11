<template>
  <div class="login-type">
    <div class="smsPush">
      <div class="number">+86</div>
      <div class="phoneInput">
        <input type="text"
               placeholder="Phone number"
               name="phoneNumber"
               id="phoneNumber">
      </div>
    </div>
    <div class="smsPush last">
      <div class="smsInput">
        <input type="text"
               placeholder="Verification code"
               name="smsnum"
               id="smsnum"
               class="inputEn">
      </div>
      <div class="smsbtn">
        <a>Get verification code</a>
      </div>
    </div>
    <div class="small"
         v-show="prompt">
      <i class="el-icon-alibaocuo"></i>
      <span class="errorPrompt">{{errorMsg}}</span>
    </div>
    <button>Sign in/Sign up</button>
    <div class="prompt">
      <div class="prompt-top">
        <div class="sms-link"><a @click="usercode">Sign in with password</a></div>
        <div class="other-login-type">
          <a>Can't receive verification code?</a>
        </div>
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
</template>

<script>
export default {
  name: 'SMSEn',
  data () {
    return {
      errorMsg: '请输入手机号',
      prompt: false
    }
  },
  methods: {
    usercode () {
      this.$router.push({
        path: '/LoginEn/AccountEn'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("../assets/scss/login.scss");
</style>

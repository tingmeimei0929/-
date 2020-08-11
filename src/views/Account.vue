<template>
  <div class="login-type">
    <div class="account">
      <input type="text"
             placeholder="邮箱/手机号码/小米ID"
             name="username"
             id="userName"
             v-model="username">
    </div>
    <div class="account last">
      <input type="password"
             placeholder="密码"
             name="password"
             id="password"
             v-model="password">
    </div>
    <div class="small"
         v-show="prompt">
      <i class="el-icon-alibaocuo"></i>
      <span class="errorPrompt">{{errorMsg}}</span>
    </div>
    <button>登录</button>
    <div class="prompt">
      <div class="prompt-top">
        <div class="sms-link"><a @click="smscode">手机短信登录/注册</a></div>
        <div class="other-login-type">
          <a @click="signup">立即注册</a>
          <span>|</span>
          <a @click="forget">忘记密码?</a>
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
  name: 'Account',
  data () {
    return {
      username: '',
      password: '',
      errorMsg: '请输入账号',
      prompt: false
    }
  },
  methods: {
    signup () {
      this.$router.push({
        path: '/Registered'
      })
    },
    forget () {
      this.$router.push({
        path: '/Forget'
      })
    },
    smscode () {
      this.$router.push({
        path: '/Login/SMS'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("../assets/scss/login.scss");
</style>

<template>
  <div class="login-type">
    <div class="smsPush">
      <div class="number">+86</div>
      <div class="phoneInput">
        <input type="text"
               placeholder="手机号码"
               name="phoneNumber"
               id="phoneNumber">
      </div>
    </div>
    <div class="smsPush last">
      <div class="smsInput">
        <input type="text"
               placeholder="短信验证码"
               name="smsnum"
               id="smsnum">
      </div>
      <div class="smsbtn">
        <a @click="countDown" :class="{disabled: !this.canClick}">{{content}}</a>
      </div>
    </div>
    <div class="small"
         v-show="prompt">
      <i class="el-icon-alibaocuo"></i>
      <span class="errorPrompt">{{errorMsg}}</span>
    </div>
    <button>立即登录/注册</button>
    <div class="prompt">
      <div class="prompt-top">
        <div class="sms-link"><a @click="usercode">用户名密码登录</a></div>
        <div class="other-login-type">
          <a @click="code">收不到验证码？</a>
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
  name: 'SMS',
  data () {
    return {
      errorMsg: '请输入手机号',
      prompt: false,
      content: '发送验证码',
      canClick: true,
      totalTime: 60 // 记录具体倒计时时间
    }
  },
  methods: {
    usercode () {
      this.$router.push({
        path: '/Login/Account'
      })
    },
    code () {
      this.$router.push({
        path: '/CodeRules'
      })
    },
    countDown () {
      if (!this.canClick) {
        return
      }
      this.canClick = false
      this.content = '重新发送(' + this.totalTime + ')'
      const clock = window.setInterval(() => {
        this.totalTime--
        this.content = '重新发送(' + this.totalTime + ')'
        if (this.totalTime < 0) {
          window.clearInterval(clock)
          this.content = '发送验证码'
          this.totalTime = 60
          this.canClick = true // 重新开启
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("../assets/scss/login.scss");
</style>

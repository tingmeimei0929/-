<template>
  <div class="wrapper">
    <div class="layout-main">
      <div class="layout-logo">
        <a href="https://www.mi.com/index.html"
           class="logo"></a>
      </div>
      <h4 class="layout-title">注册小米账号</h4>
      <el-form class="layout-table">
        <div class="regbox">
          <h4 class="regbox-title">国家/地区</h4>
          <el-form-item class="regbox-select">
              <el-select v-model="value">
                  <el-option v-for="item in options"
                             :key="item.value"
                             :label="item.label"
                             :value="item.value">
                  </el-option>
              </el-select>
            <div class="select-block">
              <div class="block-main"
                   @click.stop="showCountry"></div>
              <div class="block-aside"
                   @click="hideCountry"></div>
            </div>
            <div class="country-list"
                 v-show="country">
              <p>11</p>
              <p>11</p>
              <p>11</p>
              <p>11</p>
              <p>11</p>
              <p>11</p>

            </div>
          </el-form-item>
          <div class="small">成功注册账号后，国家/地区将不能被修改</div>

          <h4 class="regbox-title">手机号码</h4>
          <div class="regbox-select">
            <div class="select-block">
              <div class="block-main phone"
                   @click.stop="showNum">
                <p class="phone-btn">+93</p>
                <i class="el-icon-alisanjiao"></i>
              </div>
              <input type="text"
                     class="aside-phone"
                     placeholder="请输入手机号码"
                     v-model="inputArea">
            </div>
            <div class="phone-list"
                 v-show="phoneNum">
              <p>11</p>
              <p>11</p>
              <p>11</p>
              <p>11</p>
              <p>11</p>
              <p>11</p>
            </div>
          </div>
          <div class="small"
               v-show="prompt">
            <i class="el-icon-alibaocuo"></i>
            <span class="errorPrompt">{{errorMsg}}</span>
          </div>
          <button class="btn"
                  @click="register">立即注册</button>
        </div>
        <div class="privacy_box">
          <p>已阅读并同意：小米<a>用户协议</a>和<a>隐私政策</a></p>
        </div>
      </el-form>
    </div>
    <div class="layout-bottom">
      <ul>
        <li @click="simple"><a class="font-type">简体</a><i class="el-icon-alivertical_line"></i></li>
        <li @click="complex"><a>繁体</a><i class="el-icon-alivertical_line"></i></li>
        <li @click="foreign"><a>English</a><i class="el-icon-alivertical_line"></i></li>
        <li><a class="privacy">常见问题</a></li>
      </ul>
      <p>小米公司版权所有-京ICP备10046444-<img src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png">京公网安备11010802020134-京ICP证110507号</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Registered',
  data () {
    return {
      country: false,
      phoneNum: false,
      prompt: false,
      inputArea: '',
      innerText: '',
      errorMsg: '请输入手机号码'
    }
  },
  mounted () {
    document.addEventListener('click', this.handleOtherClick)
  },
  methods: {
    showCountry () {
      this.country = !this.country
    },
    showNum () {
      this.phoneNum = !this.phoneNum
    },
    hideCountry () {
      this.country = false
    },
    handleOtherClick (e) {
      console.log(e.target)
      if (e.target.className !== 'block-main') {
        this.country = false
        this.phoneNum = false
      }
    },
    register () {
      const errorPrompt = this.errorMsg
      const inputResult = this.inputArea
      if (this.inputResult === '') {
        this.prompt = true
      } else if (!/^((1[3,5,8,7,9][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(this.inputResult)) {
        this.errorMsg = '手机号格式不正确'
        this.prompt = true
      }
    },
    complex () {
      this.$router.push({
        path: '/RegisteredFan'
      })
    },
    foreign () {
      this.$router.push({
        path: '/RegisteredEn'
      })
    },
    simple () {
      this.$router.push({
        path: '/Registered'
      })
    }
  },
  destroyed () {
    document.removeEventListener('click', this.handleOtherClick)
  }
}
</script>

<style lang="scss" scoped>
@import url("../assets/scss/registered.scss");
</style>

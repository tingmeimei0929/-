<template>
   <div class="wrapper">
    <div class="layout-main">
      <div class="layout-logo">
        <a href="https://www.mi.com/index.html"
           class="logo"></a>
      </div>
      <h4 class="layout-title">Create Mi Account</h4>
      <div class="layout-table">
        <div class="regbox">
          <h4 class="regbox-title">country/Region</h4>
          <div class="regbox-select">
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
          </div>
          <div class="small">You wont't be able to change your region after you create your account.</div>

          <h4 class="regbox-title">Mobile number</h4>
          <div class="regbox-select">
            <div class="select-block">
              <div class="block-main phone"
                   @click.stop="showNum">
                <p class="phone-btn">+93</p>
                <i class="el-icon-alisanjiao"></i>
              </div>
              <input type="text"
                     class="aside-phone"
                     placeholder="Enter phone number"
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
                  @click="register">Create Mi Account</button>
        </div>
        <div class="privacy_box">
          <p>I've read and agreed to xiaomi's<a>User Agreement</a>and<a>Privacy Policy</a></p>
        </div>
      </div>
    </div>
    <div class="layout-bottom">
      <ul>
        <li @click="simple"><a>简体</a><i class="el-icon-alivertical_line"></i></li>
        <li @click="complex"><a>繁体</a><i class="el-icon-alivertical_line"></i></li>
        <li @click="foreign"><a class="font-type">English</a><i class="el-icon-alivertical_line"></i></li>
        <li><a class="privacy">FAQ</a></li>
      </ul>
      <p>Xiaomi Inc., All rights reserved - Beijing ICP - 10046444 - <img src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png"> Beijing Public Security ICP-11010802020134 - Beijing ICP licence No. - 110507</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisteredEn',
  data () {
    return {
      country: false,
      phoneNum: false,
      prompt: false,
      inputArea: '',
      innerText: '',
      errorMsg: 'Enter phone number '
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
      if (e.target.className != 'block-main') {
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
        this.errorMsg = 'The phone number you entered is invalid.'
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

<template>
    <div class="markDown-body">
        <h2>为什么收不到短信验证码</h2>
        <ol class="list-style-decimal">
            <li marker="1">已设置的<a href="#"> 安全手机</a>停用，需<a href="#">更换新的安全手机</a>。    </li>
            <li marker="2">手机短信收件箱过满或手机内存不足，需清空后重启手机。  </li>
            <li marker="3">手机信号差，请确认手机信号良好。  </li>
            <li marker="4">接受短信时手机为关机状态。  </li>
            <li marker="5">手机号码可能为海外好吗，需在手机号码前输入正确的国家码。例如：印度手机号前要添加国家码【+91】。  </li>
            <li marker="6">手机号码可能是为欠费停机状态，请及时充缴话费。  </li>
            <li marker="7">接受短信时手机为关机状态。  </li>
        </ol>
    </div>
</template>

<script>
export default {
  name: 'SmsQuestion',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import url('../assets/scss/codeRules.scss');
</style>

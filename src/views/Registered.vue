<template>
  <div class="wrapper">
    <div class="layout-main">
      <div class="layout-logo">
        <a href="https://www.mi.com/index.html"
           class="logo"></a>
      </div>
      <h4 class="layout-title">注册小米账号</h4>
      <el-form class="layout-table" :model="ruleForm" :rules="rules" ref="ruleForm">
        <div class="regbox">
            <h4 class="regbox-title">国家/地区</h4>
            <el-select v-model="value"  class="regbox-select" placeholder="中国">
                <el-option-group v-for="group in countryOptions"
                            :key="group.label"
                            :label="group.label"
                            style="padding-left: 10px;margin-bottom: 6px;line-height: 30px;color: #ef5b00 !important;">
                    <el-option v-for="item in group.options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            style="padding: 0 10px;line-height: 39px;clear: both;overflow: hidden;color: #000;border-bottom: 1px solid #e0e0e0;cursor:pointer">
                    </el-option>
                </el-option-group>
            </el-select>
            <div class="small">成功注册账号后，国家/地区将不能被修改</div>
            <h4 class="regbox-title">手机号码</h4>
            <el-form-item class="regbox-select" prop="tel">
                <el-select class="block-main">
                    <el-option-group v-for="group in phoneOptions"
                            :key="group.label"
                            :label="group.label"
                            style="padding-left: 10px;margin-bottom: 6px;line-height: 30px;color: #ef5b00 !important;">
                        <el-option v-for="item in group.options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            <span style="float:left">{{item.label}}</span>
                            <span style="float:right;color:#9d9d9d;font-size:12px">{{item.value}}</span>
                        </el-option>
                    </el-option-group>
                </el-select>
                <el-input type="text" class="aside-phone"
                        v-model="ruleForm.tel"
                        placeholder="请输入手机号码">
                </el-input>
            </el-form-item>
            <el-button class="btn"
                  @click="register">立即注册</el-button>
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
    // <!--验证手机号是否合法-->
    const checkTel = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号码'))
      } else {
        const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
        if (reg.test(value)) {
          callback()
        } else {
          callback(new Error('请输入正确的11位手机号码'))
        }
      }
    }
    return {
      ruleForm: {
        tel: ''
      },
      rules: {
        tel: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkTel, trigger: 'blur' }
        ]
      },
      countryOptions: [
        {
          label: 'A',
          options: [
            {
              value: 'Afghanistan',
              label: '阿富汗'
            },
            {
              value: 'Albania',
              label: '阿尔巴尼亚'
            },
            {
              value: 'Algeria',
              label: '阿尔及利亚'
            },
            {
              value: 'American Samoa',
              label: '美属萨摩亚'
            },
            {
              value: 'Andorra',
              label: '安道尔'
            },
            {
              value: 'Angola',
              label: '安哥拉'
            },
            {
              value: 'Anguilla',
              label: '安圭拉'
            },
            {
              value: 'Antarctica',
              label: '南极洲'
            }
          ]
        },
        {
          label: 'B',
          options: [
            {
              value: 'Bahamas',
              label: '巴哈马'
            },
            {
              value: 'Bahrain',
              label: '巴林'
            },
            {
              value: 'Bangladesh',
              label: '孟加拉国'
            },
            {
              value: 'Barbados',
              label: '巴巴多斯'
            },
            {
              value: 'Belarus',
              label: '白俄罗斯'
            },
            {
              value: 'Belgium',
              label: '比利时'
            },
            {
              value: 'Bhutan',
              label: '不丹'
            },
            {
              value: 'Bolivia',
              label: '玻利维亚'
            }
          ]
        },
        {
          label: 'C',
          options: [
            {
              value: 'China',
              label: '中国'
            },
            {
              value: 'Cambodia',
              label: '柬埔寨'
            },
            {
              value: 'Cameroon',
              label: '喀麦隆'
            },
            {
              value: 'Canada',
              label: '加拿大'
            },
            {
              value: 'Central Africa',
              label: '中非'
            }
          ]
        },
        {
          label: 'D',
          options: [
            {
              value: 'Denmark',
              label: '丹麦'
            },
            {
              value: 'Dolnik',
              label: '多尔尼克'
            },
            {
              value: 'Bukit',
              label: '布吉提'
            },
            {
              value: 'Dominica',
              label: '多米尼加'
            }
          ]
        },
        {
          label: 'E',
          options: [
            {
              value: 'Ecuador',
              label: '厄瓜尔多'
            },
            {
              value: 'Egypt',
              label: '埃及'
            },
            {
              value: 'quatorial Guinea',
              label: '赤道几内亚'
            },
            {
              value: 'Ethiopia',
              label: '埃塞俄比亚'
            },
            {
              value: 'Eritrea',
              label: '厄立特里亚'
            }
          ]
        }
      ],
      phoneOptions: [
        {
          label: 'A',
          options: [
            {
              value: '+93',
              label: '阿富汗'
            },
            {
              value: '+335',
              label: '阿尔巴尼亚'
            },
            {
              value: '+213',
              label: '阿尔及利亚'
            },
            {
              value: '+1',
              label: '美属萨摩亚'
            },
            {
              value: '+376',
              label: '安道尔'
            },
            {
              value: '+244',
              label: '安哥拉'
            },
            {
              value: '+1',
              label: '安圭拉'
            },
            {
              value: '+672',
              label: '南极洲'
            }
          ]
        },
        {
          label: 'B',
          options: [
            {
              value: '+1',
              label: '巴哈马'
            },
            {
              value: '+973',
              label: '巴林'
            },
            {
              value: '+880',
              label: '孟加拉国'
            },
            {
              value: '+1',
              label: '巴巴多斯'
            },
            {
              value: '+375',
              label: '白俄罗斯'
            },
            {
              value: '+32',
              label: '比利时'
            },
            {
              value: '+975',
              label: '不丹'
            },
            {
              value: '+591',
              label: '玻利维亚'
            }
          ]
        },
        {
          label: 'C',
          options: [
            {
              value: '+86',
              label: '中国'
            },
            {
              value: '+855',
              label: '柬埔寨'
            },
            {
              value: '+237',
              label: '喀麦隆'
            },
            {
              value: '+1',
              label: '加拿大'
            },
            {
              value: '+236',
              label: '中非'
            }
          ]
        },
        {
          label: 'D',
          options: [
            {
              value: '+45',
              label: '丹麦'
            },
            {
              value: '+1',
              label: '多尔尼克'
            },
            {
              value: '+253',
              label: '布吉提'
            },
            {
              value: '+1',
              label: '多米尼加'
            }
          ]
        },
        {
          label: 'E',
          options: [
            {
              value: '+593',
              label: '厄瓜尔多'
            },
            {
              value: '+20',
              label: '埃及'
            },
            {
              value: '+240',
              label: '赤道几内亚'
            },
            {
              value: '+251',
              label: '埃塞俄比亚'
            },
            {
              value: '+291',
              label: '厄立特里亚'
            }
          ]
        }
      ]
    }
  },
  mounted () {

  },
  methods: {
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

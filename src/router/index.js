import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件路由
import Main from '../views/Main.vue'
// 登录
import Login from '../views/loginFile/Login.vue'
import LoginFan from '../views/loginFile/LoginFan.vue'
import LoginEn from '../views/loginFile/LoginEn.vue'
import Qr from '../views/loginFile/Qr'
import QrFan from '../views/loginFile/QrFan'
import QrEn from '../views/loginFile/QrEn'
import Account from '../views/loginFile/Account'
import AccountFan from '../views/loginFile/AccountFan'
import AccountEn from '../views/loginFile/AccountEn'
import SMS from '../views/loginFile/SMS'
import SMSFan from '../views/loginFile/SMSFan'
import SMSEn from '../views/loginFile/SMSEn'
import Forget from '../views/loginFile/Forget'
import ForgetFan from '../views/loginFile/ForgetFan'
import ForgetEn from '../views/loginFile/ForgetEn'

// 注册
import Registered from '../views/Registered'
import RegisteredFan from '../views/RegisteredFan'
import RegisteredEn from '../views/RegisteredEn'
import Ce from '../views/Ce'

// 小米秒杀
import Homepage from '../views/Spike/Homepage.vue'
import Spike1 from '../views/Spike/Spike1'
import Spike2 from '../views/Spike/Spike2'
import Spike3 from '../views/Spike/Spike3'
import Spike4 from '../views/Spike/Spike4'
// 企业团购
import Company from '../views/corporateGroupBuying/Company.vue'
import NewList from '../views/corporateGroupBuying/NewList'
import newProduct from '../views/corporateGroupBuying/newProduct'
import newPhone from '../views/corporateGroupBuying/newPhone'
import newBook from '../views/corporateGroupBuying/newBook'
import newAppliances from '../views/corporateGroupBuying/newAppliances'
import newRouter from '../views/corporateGroupBuying/newRouter'
import newHeadset from '../views/corporateGroupBuying/newHeadset'
import newLife from '../views/corporateGroupBuying/newLife'
import newAccessories from '../views/corporateGroupBuying/newAccessories'
//
import Commodity from '../views/Commodity'
import Commodity1 from '../views/Commodity1'
import Commodity2 from '../views/Commodity2'
import Commodity3 from '../views/Commodity3'
import Commodity4 from '../views/Commodity4'
import Commodity5 from '../views/Commodity5'
import Commodity6 from '../views/Commodity6'
import Commodity7 from '../views/Commodity7'
import Commodity8 from '../views/Commodity8'
import CodeRules from '../views/CodeRules.vue'
import Cart from '../views/Cart'
import AccountName from '../views/AccountName.vue'
import SignUp1 from '../views/SignUp1.vue'
import SignUp2 from '../views/SignUp2.vue'
import SignUp3 from '../views/SignUp3.vue'
import SignUp4 from '../views/SignUp4.vue'
import SignUp5 from '../views/SignUp5.vue'
import SignUp6 from '../views/SignUp6.vue'
import SignUp7 from '../views/SignUp7.vue'
import LoginRules1 from '../views/LoginRules1.vue'
import LoginRules2 from '../views/LoginRules2.vue'
import LoginRules3 from '../views/LoginRules3.vue'
import LoginRules4 from '../views/LoginRules4.vue'
import LoginRules5 from '../views/LoginRules5.vue'
import QuitRules from '../views/QuitRules.vue'
import Logout1 from '../views/Logout1.vue'
import Logout2 from '../views/Logout2.vue'
import Logout3 from '../views/Logout3.vue'
import Appeal1 from '../views/Appeal1.vue'
import Appeal2 from '../views/Appeal2.vue'
import Appeal3 from '../views/Appeal3.vue'
import Appeal4 from '../views/Appeal4.vue'
import Appeal5 from '../views/Appeal5.vue'
import Appeal6 from '../views/Appeal6.vue'
import Appeal7 from '../views/Appeal7.vue'
import Appeal8 from '../views/Appeal8.vue'
import Appeal9 from '../views/Appeal9.vue'
import PasswordRules1 from '../views/PasswordRules1.vue'
import PasswordRules2 from '../views/PasswordRules2.vue'
import PasswordRules3 from '../views/PasswordRules3.vue'
import SmsQuestion1 from '../views/SmsQuestion1.vue'
import SmsQuestion2 from '../views/SmsQuestion2.vue'
import SmsQuestion3 from '../views/SmsQuestion3.vue'
import SmsQuestion4 from '../views/SmsQuestion4.vue'
import SmsQuestion5 from '../views/SmsQuestion5.vue'
import ThirdParty1 from '../views/ThirdParty1.vue'
import ThirdParty2 from '../views/ThirdParty2.vue'
import ThirdParty3 from '../views/ThirdParty3.vue'
import SecurePhone1 from '../views/SecurePhone1.vue'
import SecurePhone2 from '../views/SecurePhone2.vue'
import SecurePhone3 from '../views/SecurePhone3.vue'
import SecurePhone4 from '../views/SecurePhone4.vue'
import SecurePhone5 from '../views/SecurePhone5.vue'
import SecurePhone6 from '../views/SecurePhone6.vue'
import SecurePhone7 from '../views/SecurePhone7.vue'
import SecurePhone8 from '../views/SecurePhone8.vue'
import SecurePhone9 from '../views/SecurePhone9.vue'
import SecurityQuestion1 from '../views/SecurityQuestion1.vue'
import SecurityQuestion2 from '../views/SecurityQuestion2.vue'
import SecurityQuestion3 from '../views/SecurityQuestion3.vue'
import Lost1 from '../views/Lost1.vue'
import Lost2 from '../views/Lost2.vue'
import Details from '../views/Details.vue'
import Video from '../views/Video.vue'
import Popular from '../views/Popular.vue'
import PhoneDetails from '../views/PhoneDetails.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Main',
  component: Main,
  children: [
    {
      path: '/',
      redirect: 'Popular'
    },
    {
      path: 'Popular',
      name: 'Popular',
      component: Popular
    },
    {
      path: 'Video',
      name: 'Video',
      component: Video
    }
  ]
},
{
  path: '/Details',
  name: '/Details',
  component: Details
},
{
  path: '/PhoneDetails',
  name: '/PhoneDetails',
  component: PhoneDetails
},
// 登录
{
  path: '/Login',
  name: 'Login',
  component: Login,
  children: [{
    path: '/',
    redirect: 'Account'
  },
  {
    path: 'Account',
    name: 'Account',
    component: Account
  },
  {
    path: 'SMS',
    name: 'SMS',
    component: SMS
  },
  {
    path: 'Qr',
    name: 'Qr',
    component: Qr
  }
  ]
},
{
  path: '/LoginFan',
  name: 'LoginFan',
  component: LoginFan,
  children: [{
    path: '/',
    redirect: 'AccountFan'
  },
  {
    path: 'QrFan',
    name: 'QrFan',
    component: QrFan
  },
  {
    path: 'AccountFan',
    name: 'AccountFan',
    component: AccountFan
  },
  {
    path: 'SMSFan',
    name: 'SMSFan',
    component: SMSFan
  }
  ]
},
{
  path: '/LoginEn',
  name: 'LoginEn',
  component: LoginEn,
  children: [{
    path: '/',
    redirect: 'AccountEn'
  },
  {
    path: 'QrEn',
    name: 'QrEn',
    component: QrEn
  },
  {
    path: 'AccountEn',
    name: 'AccountEn',
    component: AccountEn
  },
  {
    path: 'SMSEn',
    name: 'SMSEn',
    component: SMSEn
  }
  ]
},
{
  path: '/Registered',
  name: 'Registered',
  component: Registered
},
{
  path: '/RegisteredEn',
  name: 'RegisteredEn',
  component: RegisteredEn
},
{
  path: '/RegisteredFan',
  name: 'RegisteredFan',
  component: RegisteredFan
},
{
  path: '/Ce',
  name: 'Ce',
  component: Ce
},
{
  path: '/Forget',
  name: 'Forget',
  component: Forget
},
{
  path: '/ForgetFan',
  name: 'ForgetFan',
  component: ForgetFan
},
{
  path: '/ForgetEn',
  name: 'ForgetEn',
  component: ForgetEn
},
{
  path: '/CodeRules',
  name: 'CodeRules',
  component: CodeRules,
  children: [
    // 简介
    {
      path: '/AccountName',
      name: 'AccountName',
      component: AccountName
    },
    // 新人指南
    // 注册
    {
      path: '/SignUp1',
      name: 'SignUp1',
      component: SignUp1
    },
    {
      path: '/SignUp2',
      name: 'SignUp2',
      component: SignUp2
    },
    {
      path: '/SignUp3',
      name: 'SignUp3',
      component: SignUp3
    },
    {
      path: '/SignUp4',
      name: 'SignUp4',
      component: SignUp4
    },
    {
      path: '/SignUp5',
      name: 'SignUp5',
      component: SignUp5
    },
    {
      path: '/SignUp6',
      name: 'SignUp6',
      component: SignUp6
    },
    {
      path: '/SignUp7',
      name: 'SignUp7',
      component: SignUp7
    },
    // 登录
    {
      path: '/LoginRules1',
      name: 'LoginRules1',
      component: LoginRules1
    },
    {
      path: '/LoginRules2',
      name: 'LoginRules2',
      component: LoginRules2
    },
    {
      path: '/LoginRules3',
      name: 'LoginRules3',
      component: LoginRules3
    },
    {
      path: '/LoginRules4',
      name: 'LoginRules4',
      component: LoginRules4
    },
    {
      path: '/LoginRules5',
      name: 'LoginRules5',
      component: LoginRules5
    },
    //   退出登录
    {
      path: '/QuitRules',
      name: 'QuitRules',
      component: QuitRules
    },
    // 注销
    {
      path: '/Logout1',
      name: 'Logout1',
      component: Logout1
    },
    {
      path: '/Logout2',
      name: 'Logout2',
      component: Logout2
    },
    {
      path: '/Logout3',
      name: 'Logout3',
      component: Logout3
    },
    // 申诉
    {
      path: '/Appeal1',
      name: 'Appeal1',
      component: Appeal1
    },
    {
      path: '/Appeal2',
      name: 'Appeal2',
      component: Appeal2
    },
    {
      path: '/Appeal3',
      name: 'Appeal3',
      component: Appeal3
    },
    {
      path: '/Appeal4',
      name: 'Appeal4',
      component: Appeal4
    },
    {
      path: '/Appeal5',
      name: 'Appeal5',
      component: Appeal5
    },
    {
      path: '/Appeal6',
      name: 'Appeal6',
      component: Appeal6
    },
    {
      path: '/Appeal7',
      name: 'Appeal7',
      component: Appeal7
    },
    {
      path: '/Appeal8',
      name: 'Appeal8',
      component: Appeal8
    },
    {
      path: '/Appeal9',
      name: 'Appeal9',
      component: Appeal9
    },
    // 常见问题
    // 密码
    {
      path: '/PasswordRules1',
      name: 'PasswordRules1',
      component: PasswordRules1
    },
    {
      path: '/PasswordRules2',
      name: 'PasswordRules2',
      component: PasswordRules2
    },
    {
      path: '/PasswordRules3',
      name: 'PasswordRules3',
      component: PasswordRules3
    },
    // 短信和邮箱验证码
    {
      path: '/SmsQuestion1',
      name: '/SmsQuestion1',
      component: SmsQuestion1
    },
    {
      path: '/SmsQuestion2',
      name: '/SmsQuestion2',
      component: SmsQuestion2
    },
    {
      path: '/SmsQuestion3',
      name: '/SmsQuestion3',
      component: SmsQuestion3
    },
    {
      path: '/SmsQuestion4',
      name: '/SmsQuestion4',
      component: SmsQuestion4
    },
    {
      path: '/SmsQuestion5',
      name: '/SmsQuestion5',
      component: SmsQuestion5
    },
    // 绑定解绑第三方账号
    {
      path: '/ThirdParty1',
      name: '/ThirdParty1',
      component: ThirdParty1
    },
    {
      path: '/ThirdParty2',
      name: '/ThirdParty2',
      component: ThirdParty2
    },
    {
      path: '/ThirdParty3',
      name: '/ThirdParty3',
      component: ThirdParty3
    },
    // 安全手机有邮箱
    {
      path: '/SecurePhone1',
      name: '/SecurePhone1',
      component: SecurePhone1
    },
    {
      path: '/SecurePhone2',
      name: '/SecurePhone2',
      component: SecurePhone2
    },
    {
      path: '/SecurePhone3',
      name: '/SecurePhone3',
      component: SecurePhone3
    },
    {
      path: '/SecurePhone4',
      name: '/SecurePhone4',
      component: SecurePhone4
    },
    {
      path: '/SecurePhone5',
      name: '/SecurePhone5',
      component: SecurePhone5
    },
    {
      path: '/SecurePhone6',
      name: '/SecurePhone6',
      component: SecurePhone6
    },
    {
      path: '/SecurePhone7',
      name: '/SecurePhone7',
      component: SecurePhone7
    },
    {
      path: '/SecurePhone8',
      name: '/SecurePhone8',
      component: SecurePhone8
    },
    {
      path: '/SecurePhone9',
      name: '/SecurePhone9',
      component: SecurePhone9
    },
    // 密保问题
    {
      path: '/SecurityQuestion1',
      name: '/SecurityQuestion1',
      component: SecurityQuestion1
    },
    {
      path: '/SecurityQuestion2',
      name: '/SecurityQuestion2',
      component: SecurityQuestion2
    },
    {
      path: '/SecurityQuestion3',
      name: '/SecurityQuestion3',
      component: SecurityQuestion3
    },
    // 丢失被盗或换机
    {
      path: '/Lost1',
      name: '/Lost1',
      component: Lost1
    },
    {
      path: '/Lost2',
      name: '/Lost2',
      component: Lost2
    }
  ]
},
// 小米秒杀
{
  path: '/Homepage',
  name: 'Homepage',
  component: Homepage,
  children: [{
    path: '/',
    redirect: 'Spike1'
  },
  {
    path: 'Spike1',
    name: 'Spike1',
    component: Spike1
  },
  {
    path: 'Spike2',
    name: 'Spike2',
    component: Spike2
  },
  {
    path: 'Spike3',
    name: 'Spike3',
    component: Spike3
  },
  {
    path: 'Spike4',
    name: 'Spike4',
    component: Spike4
  }
  ]
},
// 企业团购
{
  path: '/Company',
  name: 'Company',
  component: Company,
  children: [
    {
      path: '/',
      redirect: 'NewList'
    },
    {
      path: 'NewList',
      name: 'NewList',
      component: NewList
    },
    {
      path: 'newProduct',
      name: 'newProduct',
      component: newProduct
    },
    {
      path: 'newPhone',
      name: 'newPhone',
      component: newPhone
    },
    {
      path: 'newBook',
      name: 'newBook',
      component: newBook
    },
    {
      path: 'newAppliances',
      name: 'newAppliances',
      component: newAppliances
    },
    {
      path: 'newRouter',
      name: 'newRouter',
      component: newRouter
    },
    {
      path: 'newHeadset',
      name: 'newHeadset',
      component: newHeadset
    },
    {
      path: 'newLife',
      name: 'newLife',
      component: newLife
    },
    {
      path: 'newAccessories',
      name: 'newAccessories',
      component: newAccessories
    }
  ]
},
{
  path: '/Commodity',
  name: 'Commodity',
  component: Commodity,
  children: [{
    path: '/',
    redirect: 'Commodity1'
  },
  {
    path: 'Commodity1',
    name: 'Commodity1',
    component: Commodity1
  },
  {
    path: 'Commodity2',
    name: 'Commodity2',
    component: Commodity2
  },
  {
    path: 'Commodity3',
    name: 'Commodity3',
    component: Commodity3
  },
  {
    path: 'Commodity4',
    name: 'Commodity4',
    component: Commodity4
  },
  {
    path: 'Commodity5',
    name: 'Commodity5',
    component: Commodity5
  },
  {
    path: 'Commodity6',
    name: 'Commodity6',
    component: Commodity6
  },
  {
    path: 'Commodity7',
    name: 'Commodity7',
    component: Commodity7
  },
  {
    path: 'Commodity8',
    name: 'Commodity8',
    component: Commodity8
  }
  ]
},
{
  path: '/Cart',
  name: 'Cart',
  component: Cart
}
]
const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAxios from 'vue-axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/scss/common.scss'
import './assets/scss/iconfont.css'
import './assets/scss/main.scss'
import './assets/scss/header.scss'
import './assets/scss/footer.scss'
import './assets/scss/login.scss'
import './assets/scss/registered.scss'
import './assets/scss/forget.scss'
import './assets/scss/spike.scss'
import './assets/scss/company.scss'
import './assets/scss/navbar.scss'
import './assets/scss/commodity.scss'
import './assets/scss/cart.scss'
import './assets/scss/toolBar.scss'
import './assets/scss/codeRules.scss'
import './assets/scss/details.scss'
import './assets/scss/dialog.scss'
import '../node_modules/swiper/css/swiper.min.css'
import './assets/scss/phoneDetails.scss'

Vue.use(VueAwesomeSwiper)
Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

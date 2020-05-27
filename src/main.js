import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import VueAxios from 'vue-axios'
import "./assets/scss/common.scss"
import "./assets/scss/iconfont.css"
import VueAwesomeSwiper from 'vue-awesome-swiper'

import '../node_modules/swiper/css/swiper.min.css'



Vue.use(VueAwesomeSwiper)
Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import "@/common/stylus/index.styl"
import axios from 'axios';
import QS from 'qs'

Vue.prototype.$axios = axios;
Vue.prototype.qs = QS;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  // 使用全局组件
  components: { App },
  template: '<App/>'
})


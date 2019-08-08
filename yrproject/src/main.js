// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import "babel-polyfill"
import ElementUI from 'element-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "element-ui/lib/theme-chalk/index.css"

import getReg from "./axios/rulesData"
Vue.prototype.getReg=getReg

Vue.use(ElementUI,VueAxios,axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

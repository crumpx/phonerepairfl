// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueScrollto from 'vue-scrollto'
import './assets/js/google-places.min.js'
import './assets/css/google-places.css'

Vue.use(vueScrollto,{offset: -200})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

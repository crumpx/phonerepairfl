// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueScrollto from 'vue-scrollto'
// import * as VueGoogleMaps from 'vue2-google-maps'
import './assets/js/google-places.min.js'
import './assets/css/google-places.css'
import 'vue-awesome/icons/phone-square'
import 'vue-awesome/icons/yelp'
import 'vue-awesome/icons/google-plus'
import 'vue-awesome/icons/facebook'
import 'vue-awesome/icons/twitter'
import 'vue-awesome/icons/instagram'
import 'vue-awesome/icons/youtube'
import 'vue-awesome/icons/phone'
import 'vue-awesome/icons/envelope'
import 'vue-awesome/icons/wrench'
import 'vue-awesome/icons/bolt'
import 'vue-awesome/icons/usd'
import 'vue-awesome/icons/trophy'
import 'vue-awesome/icons/circle'
// import 'vue-awesome/icons'




import Icon from 'vue-awesome/components/Icon'

Vue.use(vueScrollto,{offset: -200})
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyBWwXv94sw9QpX5GF76Mlwf4EUb-DNxHis',
//     libraries: 'places',
//   }
// })
Vue.component('icon', Icon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

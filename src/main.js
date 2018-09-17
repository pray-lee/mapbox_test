import Vue from 'vue'
import App from './App'
import router from './router'
import mapboxgl from 'mapbox-gl'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.use(mapboxgl)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

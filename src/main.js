// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
import Mint from 'mint-ui'
import VueResource from 'vue-resource'
import 'mint-ui/lib/style.min.css'
import '@/assets/css/mui.css'
import '@/assets/css/reset.css'
import '@/assets/fonts/mui.ttf'
import mui from 'mui'

Vue.use(Mint)
Vue.use(VueResource)

Vue.config.productionTip = false
router.beforeEach(function(to, from, next) {
	// todo your work....
//	console.log(to.fullPath)
//	console.log(999999999999)
	next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
  },
  router,
  template: '<App/>',
  components: { App }
})

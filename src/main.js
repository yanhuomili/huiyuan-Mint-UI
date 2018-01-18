// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
<<<<<<< HEAD
import Vuex from 'vuex'
=======
>>>>>>> origin/master
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
<<<<<<< HEAD
Vue.use(Vuex)
=======
>>>>>>> origin/master

Vue.config.productionTip = false
router.beforeEach(function(to, from, next) {
	// todo your work....
//	console.log(to.fullPath)
//	console.log(999999999999)
	next();
})

<<<<<<< HEAD
//使用vuex来管理公共状态
const store=new Vuex.Store({
	state:{
		carGoodList:[
			{title:'珍品皮鞋',price:200,id:111},
			{title:'时尚西装',price:190,id:113},
			{title:'青春靓丽装',price:330,id:121}
		],
		dd:1111,
		ee:2222,
		ff:33333
	},
	getters:{
		goodNum:state=>{//购物车商品数量
			return state.carGoodList.length
		}
		
	},
	mutations:{
		addToCar(state,item){
			console.log(state,item)
			state.carGoodList.push(item);
		},
		delGood(state,item){
			console.log(state,item)
			state.carGoodList.pop();
		}
	},
	actions:{
		syncAdd(context,obj){
			console.log(context,obj)
			setTimeout(()=>{
				context.commit('addToCar',obj)
			},2000)
		},
		otheroperate(context,n){
			console.log('想要执行的业务逻辑'+n)
		}
	}
})





=======
>>>>>>> origin/master
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
<<<<<<< HEAD
//	eve:new Vue()
  },
  router,
  store,
=======
  },
  router,
>>>>>>> origin/master
  template: '<App/>',
  components: { App }
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import jquery from 'jquery'
import Mint from 'mint-ui'
import VueResource from 'vue-resource'
import 'mint-ui/lib/style.min.css'
import '@/assets/css/mui.css'
import '@/assets/css/reset.css'
import '@/assets/fonts/mui.ttf'

Vue.use(Mint)
Vue.use(VueResource)
Vue.use(Vuex)

Vue.config.productionTip = false
router.beforeEach(function(to, from, next) {//导航守卫
	// todo your work....
//	console.log(to.fullPath)
//	console.log(999999999999)
	next();
})

//使用vuex来管理公共状态
const store=new Vuex.Store({
	state:{
		carGoodList:[],//购物车商品数量
		dd:1111,
		ee:2222,
		ff:33333
	},
	getters:{
		goodNum:state=>{//过滤后的购物车商品数量
			return state.carGoodList.length
		}
		
	},
	mutations:{
		addToCar(state,item){//添加购物车
			var isSame=false;
			if(state.carGoodList.length>0){
				state.carGoodList.forEach((el,index)=>{
					if(el.shopName===item.shopName){
						el.list=el.list.concat(item.list)
						isSame=true;
					}
				})
			}
			if(isSame==true){
			}else{
				state.carGoodList.unshift(item);
			}
			isSame=false;
		},
		delGood(state,item){//删除商品
			console.log(state,item)
			state.carGoodList.pop();
		}
	},
	actions:{
		syncAdd(context,obj){//异步添加购物车
			setTimeout(()=>{//这个延迟方法可以看作是向后台发送数据
				context.commit('addToCar',obj);
			},2000)
		},
		otheroperate(context,n){
			console.log('想要执行的业务逻辑'+n)
		}
		
	}
})





/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
//	eve:new Vue()
  },
  router,
  store,
  template: '<App/>',
  components: { App }
})

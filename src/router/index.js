import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import footTab from '@/components/footTab'
import shouye from '@/components/shouye'
import DBmall from '@/components/DBmall'
import baiye from '@/components/baiye'
import jifen from '@/components/jifen'
import detail from '@/components/detail'
import shopCar from '@/components/shopCar'
import buy from '@/components/buy'
import comment from '@/components/comment'
import store from '@/components/store'
import jifenSearch from '@/components/jifen-search'
import superMarket from '@/components/supermarket'
import safe from '@/components/safe'
import share from '@/components/share'
import register from '@/components/register'
import qianggou from '@/components/qianggou'
import qiangjifen from '@/components/qiangjifen'
import baiyeShop from '@/components/baiyeShop'

//import jfDuihuan from '@/components/jfDuihuan'
//import xianjinDuihuan from '@/components/xianjinDuihuan'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: shouye
    },
    {
      path: '/DBmall',
      component: DBmall,
      name:'DBmall'
    },
		{
      path: '/HelloWorld',
      component: HelloWorld
    },
    {
      path: '/baiye',
      component: baiye
    },
    {
      path: '/jifen',
      component: jifen
    },
    {
      path: '/detail',
      name:'detail',
      component: detail
    },
//  {
//    path: '/jfDuihuan',
//    component: jfDuihuan
//  },
    {
      path: '/shopCar',
      name:'shopCar',
      component: shopCar
    },
    {
      path: '/buy',
      name:'buy',
      component: buy
    },
    {
      path: '/comment',
      name:'comment',
      component: comment
    },
    {
    	path:'/store',
    	name:'stoer',
    	component:store
    },
    {
    	path:'/jifenSearch',
    	name:'jifenSearch',
    	component:jifenSearch
    },
    {
    	path:'/supermarket',
    	name:'supermarket',
    	component:superMarket
    },
    {
    	path:'/safe',
    	name:'safe',
    	component:safe
    },
    {
    	path:'/share',
    	name:'share',
    	component:share
    },
    {
    	path:'/register',
    	name:'register',
    	component:register
    },
    {
    	path:'/qianggou',
    	name:'qianggou',
    	component:qianggou
    },
    {
    	path:'/qiangjifen',
    	name:'qiangjifen',
    	component:qiangjifen
    },
    {
    	path:'/baiyeShop',
    	name:'baiyeShop',
    	component:baiyeShop
    }
  ]
})

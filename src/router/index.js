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
import baiyeShopDetail from '@/components/baiyeShopDetail'
import baiyeOrder from '@/components/baiyeOrder'
import my from '@/components/my'
import setting from '@/components/setting'
import myInfo from '@/components/my-info'
import myWallet from '@/components/my-wallet'
import myJifen from '@/components/my-jifen'
import myDeal from '@/components/my-deal'
import tixian from '@/components/tixian'
import tixianDetail from '@/components/tixian-detail'
import myBankcard from '@/components/my-bankcard'
import myJifenDetail from '@/components/my-jifen-detail'
import myCollect from '@/components/my-collect'

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
      name:'DBmall',
      meta:{
      	keepAlive:true
      }
    },
		{
      path: '/HelloWorld',
      component: HelloWorld
    },
    {
      path: '/baiye',
      component: baiye,
      meta:{
      	keepAlive:true
      }
    },
    {
      path: '/jifen',
      component: jifen,
      meta:{
      	keepAlive:true
      }
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
    	component:jifenSearch,
    	meta:{
    		keepAlive:true
    	}
    },
    {
    	path:'/supermarket',
    	name:'supermarket',
    	component:superMarket,
    	meta:{
    		keepAlive:true
    	}
    },
    {
    	path:'/safe',
    	name:'safe',
    	component:safe,
    	meta:{
    		keepAlive:true
    	}
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
    },
    {
    	path:'/baiyeShopDetail',
    	name:'baiyeShopDetail',
    	component:baiyeShopDetail
    },
    {
    	path:'/baiyeOrder',
    	name:'baiyeOrder',
    	component:baiyeOrder
    },
    {
    	path:'/my',
    	name:'my',
    	component:my
    },
    {
    	path:'/setting',
    	name:'setting',
    	component:setting
    },
    {
    	path:'/myInfo',
    	name:'myInfo',
    	component:myInfo
    },
    {
    	path:'/myWallet',
    	name:'myWallet',
    	component:myWallet
    },
    {
    	path:'/myJifen',
    	name:'myJifen',
    	component:myJifen
    },
    {
    	path:'/myDeal',
    	name:'myDeal',
    	component:myDeal
    },
    {
    	path:'/tixian',
    	name:'tixian',
    	component:tixian
    },
    {
    	path:'/tixianDetail',
    	name:'tixianDetail',
    	component:tixianDetail
    },
    {
    	path:'/myBankcard',
    	name:'myBankcard',
    	component:myBankcard
    },
    {
    	path:'/myJifenDetail',
    	name:'myJifenDetail',
    	component:myJifenDetail
    },
    {
    	path:'/myCollect',
    	name:'myCollect',
    	component:myCollect
    },
  ]
})

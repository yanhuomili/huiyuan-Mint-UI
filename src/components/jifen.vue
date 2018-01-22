<template>
  <div class="jifen">
  	<!--<button @click="get" type="button" class="mui-btn mui-btn-blue mui-btn-block">按钮</button>-->
  	<!--<mt-popup class="tip col-c" @click="hideTip" ref="pop"
		  v-model="popupVisible">
		  <mt-spinner :type="3" color="#26a2ff"></mt-spinner>
		  <h4>正在加载数据...</h4>
		  
		</mt-popup>-->
 		<div class="mui-content">
 			<div class="page-head row-lr">
 				<em>
 					<img src="../assets/img/jf-t1.png"/>
 				</em>
 				<ul class="row-lr">
	 				<li :data-id="item.id" v-for="(item,index) in goodList" @click="menu(index)" :class="{'active':menuIndex==index}" >
	 					<router-link to="">{{item.title}}</router-link>
	 				</li>
	 			</ul>
	 			<p class="row-l">
	 				<em @click="search"><img src="../assets/img/jf-scale.png"/></em>
	 				<em><img src="../assets/img/jf-car.png"/></em>
	 			</p>
 			</div>
 			
 			<div class="jifen-container">
 				<div class="wrap row-lr active">
	 				<div v-for="item in goodList" class="con-item">
	 					<transition name="fold">
	 						<jifen-duihuan @jifenLoadMore="updateJifen" :banSrc="item.banner" :pIndex="item" v-if="chuan" ref="duihuan"></jifen-duihuan>
	 					</transition>
	 				</div>
	 			</div>
 			</div>
 			
			
		</div>
  </div>
</template>

<script>
//import {Toast} from 'mint-ui'
import xianjin from './xianjinDuihuan'
import jifenDuihuan from './jifenDuihuan'
import jifenSearch from './jifen-search'

import {Toast,Indicator,Popup,Spinner} from 'mint-ui'

export default {
  name: 'jifen',
  data () {
    return {
      msg: '',
      menuIndex:0,
      goodList:[
	{
	"title":"积分兑换",
	"id":1,
	 "banner":[
	 	"http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180",
      	"http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180",
      	"http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180"
	 ],
	 "goodsList":[
	 	{ 
	 		"goodsImg":"http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180",
	 		"price":5001,
	 		"discount":300,
	 		"score":200
	 	},
	 	{ 
	 		"goodsImg":"http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180",
	 		"price":5002,
	 		"discount":300,
	 		"score":200
	 	},
	 	{ 
	 		"goodsImg":"http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180",
	 		"price":5003,
	 		"discount":300,
	 		"score":200
	 	},
	 	{ 
	 		"goodsImg":"http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180",
	 		"price":5004,
	 		"discount":300,
	 		"score":200
	 	},
	 	{ 
	 		"goodsImg":"http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180",
	 		"price":5005,
	 		"discount":300,
	 		"score":200
	 	},
	 	{ 
	 		"goodsImg":"http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180",
	 		"price":5006,
	 		"discount":300,
	 		"score":200
	 	}
	 ]
	},
	{
	"title":"积分+现金",
	"id":2,
	 "banner":[
	 	"http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180",
      	"http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180",
      	"http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180"
	 ],
	 "goodsList":[
	 	{ 
	 		"goodsImg":"http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750",
	 		"price":500,
	 		"discount":300,
	 		"score":200
	 	},
	 	{ 
	 		"goodsImg":"http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750",
	 		"price":500,
	 		"discount":300,
	 		"score":200
	 	},
	 	{ 
	 		"goodsImg":"http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750",
	 		"price":500,
	 		"discount":300,
	 		"score":200
	 	},
	 	{ 
	 		"goodsImg":"http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750",
	 		"price":500,
	 		"discount":300,
	 		"score":200
	 	},
	 	{ 
	 		"goodsImg":"http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750",
	 		"price":500,
	 		"discount":300,
	 		"score":200
	 	},
	 	{ 
	 		"goodsImg":"http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750",
	 		"price":500,
	 		"discount":300,
	 		"score":200
	 	}
	 ]
	}
	],
      banner:[],
      popupVisible:true,
      tipFn:null,
      chuan:false
    }
  },
  components:{
  	'xianjin':xianjin,
  	'jifen-duihuan':jifenDuihuan
  },
  created(){
  	//加载数据提示
  	Indicator.open({text:'正在加载数据'});
  },
  mounted(){
  	var pH=$('.page-head').height();//头部的高度
  	var totalH=pH+50;
  	var len=$('.wrap .con-item').length;
  	var w=$('body').width();
  	var n;
  	$('.wrap').css({'height':'calc(100vh - '+totalH+'px)'});//商城列表展示的高度
		$('.wrap').width(len*w);
		$('.wrap .con-item').width(w);
  	$('.wrap .con-item').each(function(item,el){
  		n=item*w
			$(el).css({'left':n+'px'})
  	})
			this.chuan=true;
  	
  	//////////请求数据//////////////////
	this.$http.get('/api/jiFen').then(response=>{
		var data=response.body.data.list;
			this.goodList=data;
//			this.chuan=true;
//			this.banner=this.goodList.banner;
			setTimeout(()=>{
			Indicator.close();
			},200)
	},response=>{
	})
	
  },
  activated(){
		  	
  	
  },
  methods:{
  	tip(){
  	},
  	get(){
  		var arr=this.goodList
  		arr.forEach(function(item,index){
  		})
  	},
  	menu(index){
  		this.menuIndex=index;
  		var w=$('body').width();
  		var wpx=-(index*w)
			$('.wrap').css({'transform':'translateX('+wpx+'px)'})			
  	},
  	search(){
  		this.$router.push({name:'jifenSearch'})
  	},
  	updateJifen(obj){
  		var arr=this.goodList[this.menuIndex].goodsList;
  		for(var i=0;i<5;i++){
	  			arr.push({ 
				 		"goodsImg":"http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180",
				 		"goodPrice":91+i,
				 		"goodScore":140+i,
				 		"goodId":210+i,
				 		"shopId":43+i,
				 		"shopName":"小米手机旗舰店"+i
				 	})
	  		}
//		this.$refs.duihuan[this.menuIndex].$refs.loadmore.onBottomLoaded();
  	}
  },
  destroyed(){
  	Indicator.close();
  }
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fold-enter-active, .fold-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fold-enter,.fold-leave-active{
    /*transform: translate3d(0, -50px, 0);*/
    opacity: .2;
}
.tip{
	padding: 15px;
	text-align: center;
	background: rgba(0,0,0,0.8);
	h4{
		color: #666;
		margin: 15px 0 0;
	}
}
img{
	max-width: 100%;
	/*height: 100%;*/
}
a{
	color: #333;
}
.mui-content{
	width: 100%;
	color: #333;
}
.search{
	width: 100%;
	height: 44px;
	padding: 5px 20px;
	background: #fff;
	position: relative;
	.mui-search{
		width: 80%;
		
	}
	.search-btn{
		position: absolute;
		top: 7px;
		right: 15px;
		width: 15%;
		height: 30px;
		border-radius: 5px;
		text-align: center;
		line-height: 30px;
		background: #2fce6b;
		color: #fff;
		margin-left: 40px;
	}
	
}
.page-head{
	height: 50px;
	background: #fff;
	padding: 0 5px;
	em{
		width: 20px;
		height: 20px;
		margin-right: 15px;
	}
	ul{
		width: 55%;
		padding: 5px 0;
		margin-right: -10px;
		li{
			padding: 10px 10px;
			border-bottom: 2px solid transparent;
		}
		.active{
			border-bottom: 2px solid #D60A16;
			a{
				color: #D60A16;
			}
		}
	}
	p{
	}
}
.jifen-container{
	width: 100%;
	overflow: hidden;
	.wrap{
		position: relative;
		overflow: hidden;
		height: calc(100vh - 200px);
		transition: .5s;
		/*transform: translateX(-150px);*/
	}
	.con-item{
		/*height: calc(100vh - 103px);*/
		overflow: auto;
		height: 100%;
		/*width: 375px;*/
		position: absolute;
		top: 0;
		left: 0;
	}
	
}

</style>
<style lang="scss" type="text/css">
	.jf-banner{
		height: 150px;
		.mint-swipe-indicator.is-active{
			background: deepskyblue;
			opacity: 1;
		}
		.mint-swipe-indicator{
			width: 30px;
			height: 5px;
			border-radius: 0;
		}
	}
</style>
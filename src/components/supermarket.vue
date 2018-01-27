<template>
  <div class="supermarket modal-show">
  	<!--<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <h1 class="mui-title">百业联盟</h1>
  	</header>-->
  	<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <a class=" mui-pull-right super-car">
  	    	<img src="../assets/img/jf-car.png"/>
  	    </a>
  	    <input class="super-search" type="text" name="" id="" placeholder="请输入关键字" />
  	</header>
  	
 		<div class="mui-content baiye-content">
			<div class="by-banner">
				<mt-swipe>
		    	<mt-swipe-item>
		    		<img src="../assets/img/baiye_banner.png"/>
		    	</mt-swipe-item>
		    	<mt-swipe-item>
		    		<img src="../assets/img/baiye_banner.png"/>
		    	</mt-swipe-item>
		    	<mt-swipe-item>
		    		<img src="../assets/img/baiye_banner.png"/>
		    	</mt-swipe-item>
		    </mt-swipe>
			</div>
 		  <div class="classsify">
 		  	<ul class="row-l">
 		  		<li class="col-c" v-for="item in classifyList" :id="item.id">
 		  			<img :src="item.src"/>
 		  			<span>{{item.texts}}</span>
 		  		</li>
 		  	</ul>
 		  </div>
 		  
 		  <div class="super-classify">
 		  	<div class="super-classify-menu">
 		  		<ul>
 		  			<li @click="changeMune(index)" :class="{'active':index==showIndex}" v-for="(item,index) in superList">{{item.title}}</li>
 		  			<!--<li>食品杂货</li>
 		  			<li>新鲜水果</li>
 		  			<li>地方特色</li>
 		  			<li>面包点心</li>
 		  			<li>生活用品</li>-->
 		  		</ul>
 		  	</div>
 		  	<div class="super-classify-content">
 		  		<div class="classify-item-wrap">
 		  			<div class="classify-item" :class="{'active':index==showIndex}" v-for="(item,index) in superList">
 		  				<super-good :super-good="item.goodsList"></super-good>
 		  			</div>
 		  		</div>
 		  		
 		  	</div>
 		  </div>
 		    
 		
		  	
		  	
		  	
		  	
		  	
			
		</div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
import mui from 'mui'
import superGood from './superGood'
export default {
  name: 'test',
  components:{
  	superGood
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showIndex:0,
      superList:[],
      classifyList:[
      	{src:'../src/assets/img/icon_baiye_meishi.png',texts:'美食美食',id:1},
      	{src:'../src/assets/img/icon_baiye_shenghuochaoshi.png',texts:'生活超市',id:2},
      	{src:'../src/assets/img/icon_baiye_jiudianzhusu.png',texts:'酒店住宿',id:3},
      	{src:'../src/assets/img/icon_baiye_xiuxianyule.png',texts:'休闲娱乐',id:4},
      	{src:'../src/assets/img/icon_baiye_jiaoyupeixun.png',texts:'培训教育',id:5},
      	{src:'../src/assets/img/icon_baiye_lirenmeifa.png',texts:'丽人美发',id:6},
      	{src:'../src/assets/img/icon_baiye_lvyoujingdian.png',texts:'旅游景点',id:7},
      	{src:'../src/assets/img/icon_baiye_hunyuqinzi.png',texts:'婚育亲子',id:8},
      	{src:'../src/assets/img/icon_baiye_shenghuofuwu.png',texts:'生活服务',id:9},
      	{src:'../src/assets/img/icon_baiye_quanbufenlei.png',texts:'全部分类',id:10},
      ]
    }
  },
  mounted(){
  },
  activated(){
  	this.$http.get('mock/supermarket.json').then(res=>{
  		console.log(res.data.list)
  		
  		this.superList=res.data.list;
  		
  		this.$nextTick(()=>{//数据渲染之后马上更新dom,才能操作dom元素
		  	var li=$('.super-classify-menu li');
		  	var liW=li.get(0).offsetWidth;
		  	var len=li.length;
		  	var ul=$('.super-classify-menu ul');
		  	ul.width(len*liW);
  		})
  		
  		
  		
  	},err=>{
  		console.log(err)
  	})
  },
  methods:{
  	changeMune(index){
  		this.showIndex=index;
  		var li=$('.super-classify-menu li');
  		var len=li.length;
  		var liW=li.get(0).offsetWidth;
  		var wrap=$('.super-classify-menu');
  		var ul=$('.super-classify-menu ul');
  		var maxCsroll=ul.get(0).offsetWidth-wrap.get(0).offsetWidth;
  		
  		if(index>=1){
  			var n=index-1;
  			var pxW=n*liW;
  			var oldScroll=wrap.scrollLeft();
  			console.log(oldScroll,pxW)
  			var timer=setInterval(()=>{
  				if(oldScroll<pxW){
  					oldScroll+=5;
  					wrap.scrollLeft(oldScroll);
  					if(oldScroll>=pxW){
  						clearInterval(timer);
  					}
  				}else{
  					oldScroll-=5;
  					wrap.scrollLeft(oldScroll);
  					if(oldScroll<=pxW){
  						clearInterval(timer);
  					}
  				}
  				
  			},15)
  			
  			
  		}
  		
  	}
  },
  beforeDestroy(){
  	
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mui-bar-nav{
	background: #fff;
	.super-search{
		display: block;
		width: 70%;
		height: 30px;
		border: 0;
		margin: 7px auto 0;
		background: #f1f1f1;
	}
	.super-car{
		img{
			width: 25px;
			height: 25px;
			margin-top: 10px;
		}
	}
}


.modal-show{
	height: 100%;
	overflow: hidden;
}
.mui-content{
	font-size: 16px;
}
.banner{
	height: 140px;
}
.classsify{
	/*width: 100%;*/
	background: #fff;
	ul{
		flex-wrap: wrap;
		padding: 10px 0;
		li{
			width: 20%;
			/*padding:5px 0;*/
			margin:10px 0;
			font-size: 14px;
			img{
				width: 40px;
				height: 40px;
				border-radius:50%;
				margin-bottom: 10px;
			}
		}
	}
}

.super-classify{
	width: 100%;
	.super-classify-menu{
		width: 100%;
		height: 50px;
		overflow-x: auto;
		background: #fff;
		margin-top: 10px;
		ul{
			overflow: hidden;
			margin-top: 9px;
			li{
				padding: 5px 15px;
				float: left;
				border-bottom: 1px solid transparent;
				&.active{
					border-bottom:1px solid #D60A16 ;
				}
			}
		}
	}
	.super-classify-content{
		width: 100%;
		.classify-item{
			display: none;
			max-height: calc(100vh - 144px);
			overflow:auto;
			h1{
				height: 300px;
			}
			&.active{
				display: block;
			}
		}
	}
}

</style>
<style lang="scss" type="text/css">
	.by-banner{
		height: 120px;
		.mint-swipe-indicator.is-active{
			background: deepskyblue;
			opacity: 1;
		}
	}
</style>

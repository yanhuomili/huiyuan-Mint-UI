<template>
  <div class="jifen-search">
  	<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <a @click="searching" class="mui-pull-right">搜索</a>
  	    <h1 class="mui-title"><input type="text" v-model="searchText" placeholder="请输入搜索关键字"/></h1>
  	</header>
 		<div class="mui-content">
 			<div class="search-tip" v-if="list.length==0">
 				<div class="hot-search">
 					<h3>热门搜索</h3>
 					<ul class="hot-search-result row-l">
 						<li @click="resultFn('鞋子')">鞋子</li>
 						<li>鞋子</li>
 						<li>食用油</li>
 						<li>大米</li>
 						<li>家用电器</li>
 						<li>红酒</li>
 						<li>香水</li>
 						<li>包包</li>
 					</ul>
 				</div>
 				<div class="history-search">
 					<h3>历史搜索</h3>
 					<ul class="history-search-result row-l">
 						<li>美食</li>
 						<li>服装</li>
 						<li>旅游</li>
 						<li>热门电影</li>
 					</ul>
 				</div>
 			</div>
 			
 		   <ul class="search-nav row-lr">
 		   	<li @click="mainNavChange(index)" :class="{'active':mainActiveIndex==index}" :data-classify-id="mainnav.classifyId" v-for="(mainnav,index) in list"><router-link to="">{{mainnav.classifyTitle}}</router-link></li>
 		   </ul>
 		   
 		   <div class="search-good-list" v-if="list.length>0">
 		   	<div class="search-good-item" :class="{'active':mainActiveIndex==i}" v-for="(goodItem,i) in list">
	 		   	<dl class="search-tiem-nav">
		 		   	<dt class="row-lr">
		 		   		<h4 @click="subNavChange(index)" :class="{'active':subActiveIndex==index}" v-for="(subNav,index) in goodItem.shaixuanList">
		 		   			<span>{{subNav.shaixuanTitle}}</span>
		 		   			<ul :class="{'active':subActiveIndex==index}" style=" ">
		 		   				<li @click.stop="filtered(n.shaixuanId)" v-for="(n,num) in subNav.shaixuanSubList" style="" :data-s-id="n.shaixuanId" :class="{'active':screenIndex==num}">{{n.text}}</li>
		 		   			</ul>
		 		   		</h4>
		 		   	</dt>
		 		  </dl>
		 		  
		 		  <div class="single-model-wrap">
		 		  	<mt-loadmore topLoadingText="刷新页面"
		 		  		bottomLoadingText="正在加载数据..."
		 		  		:top-method="top"
		 		  		:bottom-method="bottom"
		 		  		ref="loadmore"
		 		  		>
		 		  		<transition-group tag="ul" name="list" class="jifen-list row-lr">
							  <li v-for="(good,index) in goodItem.goodList" :key="index" class="jifen-list-item">
										<img @click="goDetail(good.goodId)" :data-good-id="good.goodId" :src="good.goodImg" alt="积分兑换商品" />
										<h4 class="heading">{{good.goodName}}</h4>
										<p>零售价：<strong>￥{{good.goodPrice}}</strong></p>
										<p class="row-l">
											<span><b>￥{{good.goodPrice}}</b>+<b>{{good.goodJifen}}</b></span>
											<span>折扣积分</span>
										</p>
								</li>
							 </transition-group>
	 		  	    
		 		  	</mt-loadmore>
		 		  	
		 		  	
		 		  </div>
 		   	</div>
 		   </div>
 				
			
			</div>
  </div>
</template>

<script>
import {Toast,loadmore} from 'mint-ui'
export default {
  name: 'jifen-search',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      bind:true,
      mainActiveIndex:0,
      subActiveIndex:-1,
      allLoaded:false,
      classifyIndex:0,
      list:[],
      searchText:"",
      screenIndex:0,
      arrItem:{	
				"goodName":"K89真皮时尚皮鞋",
				"goodId":1,
				"goodPrice":89,
				"goodJifen":130,
				"goodImg":"http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
			},
			arrItem2:{	
				"goodName":"K89真皮时尚皮鞋",
				"goodId":1,
				"goodPrice":89,
				"goodJifen":130,
				"goodImg":"http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750"
			},

		 	goodsImg:"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
		 	
      
    }
  },
  methods:{
  	dataInit(val){
  		console.log(val)
  		this.$http.get('mock/jifenSearch.json').then(res=>{
	  		console.log(res.data.result);
	  		this.list=res.data.result;
	  		this.$nextTick(()=>{
	  			var screenH=document.documentElement.clientHeight;
	  			$('.single-model-wrap').css({'height':(screenH-130)+'px'});
	  			
	  		})
	  	},err=>{
	  		console.log(err)
	  	})
  	},
  	mainNavChange(index){
  		this.mainActiveIndex=index;
  		this.classifyIndex=index;
  		this.subActiveIndex=-1;
  	},
  	subNavChange(index){
  		var oldVal=this.subActiveIndex;
  		if(oldVal==index){
  			this.subActiveIndex=-1;
  			return;
  		}
  		this.subActiveIndex=index;
  	},
  	top(){
//		do you like
			setTimeout(()=>{
				this.$refs.loadmore[this.classifyIndex].onTopLoaded();
			},200)
  		
  	},
  	bottom(){
//		do you like
			var arr=[];
			for(var i=0;i<5;i++){
				arr.push(this.arrItem);
			}
			var newarr=this.list[this.classifyIndex].goodList.concat(arr)
			this.list[this.classifyIndex].goodList=newarr;
			console.log(this.list[this.classifyIndex].goodList,arr)
  		setTimeout(()=>{
  			this.$refs.loadmore[this.classifyIndex].onBottomLoaded();
  		},200)
  	},
  	filtered(n){
  		console.log(n)
  		//http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750
			var arr=[];
			for(var i=0;i<5;i++){
				arr.push(this.arrItem2);
			}
  		this.list[this.classifyIndex].goodList=arr;
  		this.screenIndex=n;
  		this.subActiveIndex=-1;

  	},
  	searching(){
  		var val=this.searchText;
  		this.dataInit(val)
  	},
  	goDetail(id){//跳到商品详情页面
  		this.$router.push({name:'detail',params:{id:id}})
  	},
  	resultFn(val){
  		this.searchText=val;
  		this.dataInit(val)
  	}
  	
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search-tip{
	padding: 15px;
	color: #666;
	background: #fff;
	>div{
		margin-bottom: 15px;
	}
	h3{
		font-size: 15px;
	}
	ul{
		flex-wrap: wrap;
		padding: 10px 0;
		li{
			padding: 5px 10px;
			border-radius: 5px;
			background: #f1f1f1;
			margin: 5px;
			font-size: 14px;
		}
	}
}
.mui-bar-nav{
	background: #fff;
}
.mui-title{
	input{
		width: 70%;
		height: 30px;
		margin: 0;
		border: 0;
		background: #f1f1f1;
		font-size: 15px;
	}
}
.mui-pull-right{
	height:44px ;
	line-height: 44px;
	font-size: 16px;
}
.search-nav{
	width: 100%;
	background: #fff;
	li{
		width: 33%;
		padding: 10px 0;
		text-align: center;
		border-bottom: 1px solid transparent;
		&.active{
			border-bottom: 1px solid #D60A16;
		}
	}
}
.search-good-list{
	width: 100%;
	height: calc(100vh - 86px);
	.search-good-item{
		height: 100%;
		display: none;
		&.active{
			display: block;
		}
	}
	
}
.search-tiem-nav{
	width: 100%;
	dt{
		width: 100%;
		position: relative;
		h4{
			width: 30%;
			text-align: center;
			font-size: 14px;
			font-weight: normal;
			padding: 15px;
			margin: 0 0px;
			
			span{
				position: relative;
				&:after{
					display: inline-block;
					content: "";
					width: 0;
					height: 0;
					border: 6px solid transparent;
					border-top-color:#ccc ;
					transform: translateY(3px);
					position: absolute;
					top: 0;
					right: -15px;
					transition: all .5s;
				}
			}
			&.active{
				span{
					color: #D60A16;
					&:after{
						transform: rotateZ(180deg);
						border-top-color: #D60A16;
					}
				}
			}
			ul{
				display: none; width:100%;background: #fff; position: absolute;top: 44px;left: 0;z-index: 999;
				text-align: left;
				&.active{
					display: block;
				}
				li{
					padding: 10px 15px;border-bottom: 1px solid #ccc;
					position: relative;
					&.active{
						color: #D60A16;
						&:after{
							content: "";
							width: 8px;
							height: 15px;
							border: 1px solid #D60A16;
							position: absolute;
							top: 0;
							right: 25px;
							transform: rotateZ(45deg) translateY(8px);
							border-top: 0;
							border-left: 0;
						}
						
					}
					
				}
			}
		}
	}
	dd{
		width: 100%;
		ul{
			display: none;
			&.active{
				display: block;
			}
			li{
				padding: 10px 15px;
				border-bottom: 1px solid #ccc;
				font-size: 14px;
				&.active{
					color: #D60A16;
					
				}
			}
		}
	}
}

/*每个模块的商品列表*/
.single-model-wrap{
	width: 100%;
	height: calc(100vh - 130px);
	overflow-y: scroll;
		.jifen-list{
		background: #fff;
		flex-wrap: wrap;
		.jifen-list-item{
			background: #fff;
			padding: 10px;
			width: 50%;
			margin-bottom: 15px;
			.heading{
				width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-weight: 500;
				margin-bottom: 10px;
			}
			p{
				margin: 5px 0;
				align-content: flex-end;
				strong{
					color: #D60A16;
					font-size: 18px;
				}
				b{
					color: #D60A16;
					font-size: 16px;
				}
				span{
					margin-right: 10px;
				}
				
			}
		}
	}
	
	
}

.jifen-list-item{
	transition: all .5s;
}

.list-enter-active,.list-leave-active{
	transition: all .5s ease;
}
.list-enter,.list-leave-to{
	opacity: 0;
	transform: translateY(-100px);
}

.classify-enter-active,.classify-leave-active{
	transition: all .5s; 
}
.classify-enter,.classify-leave-to{
	opacity: 0;
	transform: translateX(100%);
}

</style>
<style type="text/css">
	#app{
		padding-bottom:0;
	}
</style>
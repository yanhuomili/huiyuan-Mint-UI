<template>
  <div class="store">
  	<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <a class=" mui-icon mui-icon-more mui-pull-right"></a>
  	    <h1 class="mui-title">店铺主页</h1>
  	</header>
 		<div class="mui-content">
 		   <div class="store-head">
 		   		<!--<img src="../assets/img/good-attr-img.png"/>-->
 		   		<dl class="store-name row-lr">
 		   			<dt class="row-l">
 		   				<img src="../assets/img/shop-ico.png"/>
 		   				<span>富群仓库广州分部</span>
 		   			</dt>
 		   			<dd>收藏店铺</dd>
 		   		</dl>
 		   </div>
 		   <div class="store-content">
 		   	<ul class="classify-menu row-lr">
 		   		<li @click="changeMenu(index)" :class="{'active':menuIndex==index}" v-for="(item,index) in list">{{item.text}}</li>
 		   	</ul>
 		   	<div class="classify-content">
 		   		<div class="classify-item-wrap">
 		   			<div class="classify-item" v-for="(i,n) in list">
 		   				<transition-group tag="ul" ref="loadmore" name="list" 
 		   					v-infinite-scroll="loadMore"
  								infinite-scroll-disabled="loading"
									infinite-scroll-distance="10" 
 		   					 class="jifen-list row-lr">
							  <li v-for="(goodItem,index) in i.lt" :key="index" class="jifen-list-item">
										<img src="../assets/img/jifen-xie.png" alt="积分兑换商品" />
										<h4 class="heading">真皮时尚皮鞋，品种款式任你挑选</h4>
										<p>零售价：<strong>￥300</strong></p>
										<p class="row-l">
											<span>积分兑换：</span><b>500</b>
										</p>
								</li>
					 		</transition-group>
 		   			</div>
 		   		
 		   		</div>
 		   			
 		   	</div>
 		   </div>
 				
		  	
			
			</div>
  </div>
</template>

<script>
import {Toast,Indicator} from 'mint-ui'
export default {
  name: 'store',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      menuIndex:0,
      loading:false,
      num:0,
      list:[{
      	lt:[1,2,3,4,5],
      	text:'全部商品'
      },{
      	lt:[1,2,3,4,5,6,7],
      	text:'店铺详情'
      },
      ]
    }
  },
  mounted(){
  	var totalH=296;
  	var len=$('.classify-item-wrap .classify-item').length;
  	var w=$('body').width();
  	var n;
  	$('.classify-item-wrap').css({'height':'calc(100vh - '+totalH+'px)'});//商城列表展示的高度
		$('.classify-item-wrap').width(len*w);
		$('.classify-item').width(w);
  	$('.classify-item').each(function(item,el){
  		n=item*w
  		console.log(w)
			$(el).css({'left':n+'px'})
  	})
  },
  deactivated(){
  	Indicator.close();
  },
  methods:{
  	changeMenu(index){
  		this.menuIndex=index;
  		var w=$('body').width();
  		var n=-(index*w);
  		this.num=index;
  		$('.classify-item-wrap').css({'transform':'translateX('+n+'px)'})
  	},
  	loadMore(){
  		this.loading=true;
  		var arr=[5,5,5,5,5];
  		Indicator.open({
  			text:'加载数据...'
  		})
  		setTimeout(()=>{
  			this.list[this.num].lt=this.list[this.num].lt.concat(arr);
  			console.log(this.list[0].lt)
				this.loading=false;
  			Indicator.close();
  		},1000)
  		
  	}
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.store-head{
	width: 100%;
	height: 200px;
	position: relative;
	background: rgba(0,0,0,0.5);
	>img{
		width: 100%;
		height: 100%;
	}
	dl{
		width: 100%;
		padding: 10px 15px;
		position: absolute;
		bottom: 0;
		left: 0;
		color:#fff;
		dt{
			img{
				width: 40px;
				height: 40px;
				margin-right: 20px;
				
			}
		}
		dd{
			width: 90px;
			height: 30px;
			line-height: 30px;
			text-align: center;
			border: 1px solid #fff;
			border-radius: 30px;
			font-size: 14px;
		}
	}
}

.classify-menu{
	width: 100%;
	height: 50px;
	li{
		width: 50%;
		height: 100%;
		line-height: 50px;
		text-align: center;
		border-bottom: 1px solid transparent;
		&.active{
			border-bottom:1px solid #D60A16 ;
			color: #D60A16;
		}
	}
}
.classify-content{
	width: 100%;
	overflow: hidden;
	.classify-item-wrap{
		position: relative;
		overflow: hidden;
		height: calc(100vh - 350px);
		transition: .5s;
	}
	.classify-item{
		overflow: auto;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		
		.jifen-list{
			padding: 15px 0;
			box-sizing: border-box;
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
	
}

</style>
<style type="text/css">
	#app{
		padding-bottom: 0 !important;
	}
</style>

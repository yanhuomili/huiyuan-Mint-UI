<template>
  <div class="my-collect">
  	<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <h1 class="mui-title">我的收藏</h1>
  	</header>
 		<div class="mui-content">
			<ul class="collect-menu row-lr">
				<li @click="changeMenu(index)" :class="{'active':index==menuIndex}" v-for="(item,index) in 2">商品</li>
				<!--<li>店铺</li>-->
			</ul>
			<div class="collect-wrap">
				<div class="collect-item-wrap row-lr">
					<div class="collect-item">
						<div class="collect-shop-list">
							<dl class="row-lr" v-for="item in 10">
								<dt>
									<img src="../assets/img/dbmall_classify_maoyizhenzhishan.png"/>
								</dt>
								<dd>
									<h4>潮流时尚服装店潮流时尚服装店潮流时尚服装店</h4>
									<p>零售价：<b>￥500</b></p>
									<p class="row-l"><b>￥500</b>+<b>200</b><span>折扣积分</span></p>
								</dd>
							</dl>
						</div>
						
					</div>
					<div class="collect-item good-content">
		 		  		<div class="dl-list">
		 		  			<dl @click="gotoDetail(index)" class="row-lr" v-for="(item,index) in 10">
		 		  				<dt>
		 		  					<img src="../assets/img/baiyeshangpin_img.png"/>
		 		  				</dt>
		 		  				<dd>
		 		  					<h4 class="dd-heading">
		 		  						好再来蛋糕店
		 		  					</h4>
		 		  					<div class="star">
		 		  						<em v-for="item in 5"><img src="../assets/img/icon_evaluate_red.png"/></em>
		 		  					</div>
		 		  					<p>111人消费</p>
		 		  					<p class="row-lr"><span>江夏</span><span>距离1.1km</span></p>
		 		  				</dd>
		 		  			</dl>
		 		  		</div>
							
					</div>
				</div>
			</div>
				
			
		</div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: 'my-collect',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      menuIndex:0
    }
  },
  components:{
  },
  mounted(){
  },
  activated(){
  	this.init();
  	
  },
  methods:{
  	init(){
  		var item=$('.collect-item-wrap .collect-item');
  		var bodyW=$('body').width();
  		var len=item.length;
  		var boxW=len*bodyW;
  		console.log(len,bodyW,boxW)
  		$('.collect-item-wrap').width(boxW);
  	},
  	changeMenu(index){
  		this.menuIndex=index;
  		var bodyW=$('body').width();
  		var w=-(bodyW*index);
  		$('.collect-item-wrap').css({'transition':'.5s','transform':'translateX('+w+'px)'});
  	}
  },
  computed:{
  },
  watch:{
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.my-deal{
}
.mui-bar-nav{
	box-shadow: none;
	border-bottom: 1px solid #ccc;
}
.collect-menu{
	width: 100%;
	height: 50px;
	background: #fff;
	li{
		width: 50%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		border-bottom: 1px solid transparent;
		&.active{
			border-color: #D60A16;
			color: #D60A16;
		}
	}
}
.collect-wrap{
	width: 100%;
	position: relative;
	overflow: hidden;
	height: calc(100vh - 94px);
	.collect-item-wrap{
		height: 100%;
		/*transform: translateX(-150px);*/
	}
	.collect-item{
		width: 50%;
		height: 100%;
		float: left;
		overflow-y: auto;
		/*position: absolute;
		top: 0;
		left: 0;*/
	}
}

.good-content{
		.dl-list{
			dl{
				align-items: flex-start;
				background: #fff;
				padding: 10px;
				border-bottom: 1px solid #ccc;
				dt{
					width: 30%;
					margin-right: 3%;
				}
				dd{
					width: 65%;
					.dd-heading{
						margin: 5px 0;
						/*font-weight: normal;*/
						font-size: 16px;
					}
					.star{
						margin:8px 0;
						em{
							display: inline-block;
							width: 15px;
							height: 15px;
							margin-right:10px; 
						}
					}
					p{
						margin: 8px 0;
					}
					.p-bot{
						width: 100%;
						padding: 5px 0;
						border-top: 1px solid #ccc;
						
						/*display: -webkit-box;
						 -webkit-box-orient: vertical;
						 -webkit-line-clamp: 1;
						 overflow: hidden;*/
						 em{
						 	display: inline-block;
						 	width: 20px;
							height: 20px;
							border-radius: 50%;
							margin-right: 15px;
						 }
						span{
							flex: 1;
							overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						}
					}
				}
			}
		}
	}
	
	.collect-shop-list{
		width: 100%;
		background: #fff;
		dl{
			width: 100%;
			padding: 10px 15px;
			border-bottom: 1px solid #eee;
			dt{
				width: 90px;
				height: 90px;
				margin-right: 10px;
			}
			dd{
				flex: 1;
				h4{
					font-size: 15px;
					font-weight: normal;
					line-height: 1.5;
				}
				p{
					font-size: 15px;
					margin: 5px 0;
					b{
						color: #D60A16;
					}
					span{
						font-size: 14px;
						color: #999;
					}
				}
			}
		}
	}
</style>

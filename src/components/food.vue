<template>
  <div class="food">
  	<div class="page-top row-lr">
  		<em><img src="../assets/img/sao.png"/></em>
  		<p class="row-c"><span>广州</span><b><img src="../assets/img/arrows_right.png"/></b></p>
  		<i><img src="../assets/img/news.png"/></i>
  	</div>
  	<!--轮播图-->
  	<mt-swipe @change="fn" ref="myswiper" :auto="0" class="banner-swiper" :speed="200">
  		<mt-swipe-item>
  			<img src="../assets/img/banner_homepage_one.png"/>
  		</mt-swipe-item>
  		<mt-swipe-item>
  			<img src="../assets/img/banner_homepage_one.png"/>
  		</mt-swipe-item>
  		<mt-swipe-item>
  			<img src="../assets/img/banner_homepage_one.png"/>
  		</mt-swipe-item>
  	</mt-swipe>
  	<!--商城大分类-->
  	<ul class="row-lr lg-list">
  		<li class="col-c">
  			<img src="../assets/img/icon_homepage_dbmall.png" alt="" />
  			<span>DBMALL</span>
  		</li>
  		<li class="col-c">
  			<img src="../assets/img/icon_homepage_shenghuochaoshi.png" alt="" />
  			<span>生活超市</span>
  		</li>
  		<li class="col-c">
  			<img src="../assets/img/icon_homepage_baoxianpingtai.png" alt="" />
  			<span>保险平台</span>
  		</li>
  		<li class="col-c">
  			<img src="../assets/img/icon_homepage_qitabaiye.png" alt="" />
  			<span>其他百业</span>
  		</li>
  	</ul>
  	<!--活动专区-->
  	<ul class="row-l imgs">
  		<li><img src="../assets/img/团购.png"/></li>
  		<li><img src="../assets/img/抢积分.png"/></li>
  		<li><img src="../assets/img/抢购.png"/></li>
  		<li><img src="../assets/img/注册有奖.png"/></li>
  	</ul>
  	
  	<!--商品推荐-->
   	<div class="goods-list">
   		<!--热门兑换商品-->
   		<div class="goods-list-item">
   			<mt-cell class="item-top" is-link title="热门兑换商品">
				  <img slot="icon" src="../assets/img/icon_homepage_duihuan.png" width="24px" height="24px">
				</mt-cell>
   			<ul class="item-ul row-lr">
   				<li v-for="i in 4">
   					<img src="../assets/img/dbmall_home_img.png"/>
   					<div class="li-body">
   						<h4>
   							所发生的方式的父级时代峰峻上岛咖啡水电费适得府君书
   						</h4>
   						<span class="price">&yen;500</span>
   						<p class="jifen">兑换积分：<strong>500</strong></p>
   					</div>
   				</li>
   			</ul>
   		</div>
   		<!--热门折扣商品-->
   		<div class="goods-list-item">
   			<mt-cell class="item-top" is-link title="热门折扣商品">
				  <img slot="icon" src="../assets/img/icon_homepage_zhekou.png" width="24px" height="24px">
				</mt-cell>
   			<ul class="item-ul row-lr">
   				<li v-for="i in 4">
   					<img src="../assets/img/dbmall_home_img.png"/>
   					<div class="li-body">
   						<h4>
   							所发生的方式的父级时代峰峻上岛咖啡水电费适得府君书
   						</h4>
   						<span class="price">&yen;500</span>
   						<p class="jifen">兑换积分：<strong>500</strong></p>
   					</div>
   				</li>
   			</ul>
   		</div>
   		<!--附近实惠-->
   		<div class="goods-list-item">
   			<mt-cell class="item-top" is-link title="热门折扣商品">
				  <img slot="icon" src="../assets/img/icon_homepage_zhekou.png" width="24px" height="24px">
				</mt-cell>
				<div class="list-dl">
					<dl class="row-lr shihui" v-for="item in 4">
	   				<dt>
	   					<img src="../assets/img/baiyeshangpin_img.png"/>
	   				</dt>
	   				<dd>
	   					<h3 class="row-lr">
	   						<span class="shop">淼鑫猪肚鸡</span>
	   						<i>1.1km</i>
	   					</h3>
	   					<p>滋补养颜2-3人套餐</p>
	   					<div class="row-lr price-box">
	   						<span class="dinner-price">&yen;<strong>58</strong></span>
	   						<span>
	   							已售45855
	   						</span>
	   					</div>
	   					<div class="row-lr">
	   						<span>赠送<b>108积分</b></span>
	   						<span>可用积分：<b>20</b></span>
	   					</div>
	   				</dd>
	   			</dl>
				</div>
   			
   		</div>
   		
   	</div>
   	<button type="button" class="mui-btn mui-btn-danger">按钮</button>
   	<span class="mui-badge mui-badge-success">1</span>
   	<ul class="mui-table-view">
   	        <li class="mui-table-view-cell">
   	            <a class="mui-navigate-right">
   	                Item 1<span class="mui-badge mui-btn-blue">1</span>
   	            </a>
   	        </li>
   	        <li class="mui-table-view-cell">
   	            <a class="mui-navigate-right">
   	                 Item 2
   	            </a>
   	        </li>
   	        <li class="mui-table-view-cell">
   	            <a class="mui-navigate-right">
   	                 Item 3
   	            </a>
   	        </li>
   	    </ul>
		 	<ul class="mui-table-view">
		 	    <li class="mui-table-view-cell mui-media">
		 	        <a href="javascript:;">
		 	            <div class="mui-media-body">
		 	                幸福
		 	                <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
		 	            </div>
		 	        </a>
		 	    </li>
		 	    <li class="mui-table-view-cell mui-media">
		 	        <a href="javascript:;">
		 	            <div class="mui-media-body">
		 	                木屋
		 	                <p class="mui-ellipsis">想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
		 	            </div>
		 	        </a>
		 	    </li>
		 	    <li class="mui-table-view-cell mui-media">
		 	        <a href="javascript:;">
		 	            <div class="mui-media-body">
		 	                CBD
		 	                <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
		 	            </div>
		 	        </a>
		 	    </li>
		 	</ul>
		 	
		 	<!--<foot-tab></foot-tab>-->
  </div>
</template>

<script>
import { Swipe, SwipeItem, Cell} from 'mint-ui';
import footTab from './footTab'
export default {
  name: 'food',
  components:{
  	'foot-tab':footTab
  },
  data () {
    return {
      msg: '',
      index:0
      
    }
  },
  mounted(){
  	console.log(this.$refs.myswiper)
  },
  methods:{
  	fn(){
  		console.log(this.$refs.myswiper.index)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.food{
	background: #f8f8f8;
}
.page-top{
	background: #ff3e7a;
	padding: 0 10px;
	box-sizing: border-box;
	width: 100%;
	height: 44px;
	color: #fff;
	em{
		width: 30px;
		height: 30px;
	}
	b{
		width: 10px;
		height: 20px;
		transform: rotateZ(90deg);
		margin-left: 10px;
	}
	i{
		width: 30px;
		height: 30px;
	}
}
.mint-swipe-indicator.is-active{
	opacity: 1 !important;
}
.mint-swipe{
	height: 120px;
	background: #fff;
}
.mint-swipe-indicator{
	width: 30px !important;
	height: 5px;
	background: #666 ;
	opacity: .7 ;
	border-radius: 0 ;
}
.lg-list{
	background: #fff;
	width: 100%;
	padding: 15px;
	box-sizing: border-box;
	font-size: 16px;
	img{
		width: 60px;
		height: 60px;
		border-radius:50%;
		margin-bottom: 10px;
		
	}
}
.imgs{
	flex-wrap: wrap;
	margin: 15px 0;
	li{
		width: 50%;
		box-sizing: border-box;
		img{
			display: block;
		}
	}
	li:nth-child(odd){
		border-right: 1px solid #eee;
	}
	li:nth-child(1){
		border-bottom: 1px solid #eee;
	}
	li:nth-child(2){
		border-bottom: 1px solid #eee;
	}
}

.goods-list{
	width: 100%;
	.goods-list-item{
		overflow: hidden;
	}
	.item-top{
		img{
			width:30px;
			height: 30px;
			
		}
		.mint-cell-text{
			font-size: 20px;
			font-weight: 550;
			margin-left: 5px;
		}
		.mint-cell-wrapper{
			background-image: none;
		}
		.mint-cell-allow-right::after{
			width: 10px;
			height: 10px;
		}
	}
	.item-ul{
		padding: 10px;
		box-sizing: border-box;
		flex-wrap: wrap;
		li{
			width:48%;
			margin-bottom: 15px;
			background: #fff;
			padding-bottom: 10px;
			box-sizing: border-box;
			img{
				width: 100%;
			}
			.li-body{
				padding-left:5px;
				box-sizing: border-box;
				h4{
					width: 100%;
					overflow: hidden;
					white-space: nowrap;/*显示一行*/
					text-overflow: ellipsis;
					margin: 0;
					font-weight: normal;
					font-weight: 600;
					color: #333;
					margin-top: 5px;
				}
				.price{
					color: #666;
					display: inline-block;
					margin: 10px 0;
				}
				.jifen{
					color: #666;
					margin: 0;
					strong{
						font-weight: normal;
						color: #d60a16;
					}
				}
			}
		}
	}
	.shihui{
		padding:10px;
		margin: 10px 0;
		box-sizing: border-box;
		align-items: flex-start;
		background: #fff;
		dt{
			width: 100px;
			margin-right: 15px;
			
		}
		dd{
			flex: 1;
			margin: 0;
			h3{
				margin: 0;
				font-weight:normal;
				.shop{
					font-size: 20px;
				}
				i{
					font-style: normal;
					font-size: 16px;
				}
			}
			p{
				margin: 10px 0;
				font-size: 16px;
				color: #666;
			}
			.price-box{
				margin: 10px 0;
			}
			div{
				font-size: 16px;
				.dinner-price{
					color: #fa0c26;
				}
				b{
					font-weight: normal;
					color: #D60A16;
				}
			}
		}
	}
}





</style>

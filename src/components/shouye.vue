<template>
  <div class="shouye">
  	<div class="page-top row-lr">
  		<em><img src="../assets/img/kuang.png"/></em>
  		<p class="row-c"><span>广州</span><b><img src="../assets/img/down.png"/></b></p>
  		<i><img src="../assets/img/kuang.png"/></i>
  	</div>
  	<!--轮播图-->
  	<div id="sy-banner">
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
  	</div>
  	<transition name="custom-classes-transition" 
  		enter-active-class="animated jello"
  		leave-active-class="animated bounceOutRight">
  		
  	<!--商城大分类-->
  	<ul v-if="showt" class="row-lr lg-list">
  		<li @click="db" class="col-c">
  			<img src="../assets/img/icon_homepage_dbmall.png" alt="" />
  			<span>DBMALL</span>
  		</li>
  		<li @click="supermarket" class="col-c">
  			<img src="../assets/img/icon_homepage_shenghuochaoshi.png" alt="" />
  			<span>生活超市</span>
  		</li>
  		<li @click="safe" class="col-c">
  			<img src="../assets/img/icon_homepage_baoxianpingtai.png" alt="" />
  			<span>保险平台</span>
  		</li>
  		<li class="col-c">
  			<img src="../assets/img/icon_homepage_qitabaiye.png" alt="" />
  			<span>其他百业</span>
  		</li>
  	</ul>
  	</transition>
  	<!--活动专区-->
  	<ul class="row-l imgs">
  		<li><router-link to="/share"><img src="../assets/img/团购.png"/></router-link></li>
  		<li><router-link to="/qiangjifen"><img src="../assets/img/抢积分.png"/></router-link></li>
  		<li><router-link to="/qianggou"><img src="../assets/img/抢购.png"/></router-link></li>
  		<li><router-link to="/register"><img src="../assets/img/注册有奖.png"/></router-link></li>
  	</ul>
  	
  	<!--商品推荐-->
   	<div class="goods-list">
   		<!--热门兑换商品-->
   		<div class="goods-list-item">
   			<mt-cell class="item-top" is-link title="热门兑换商品">
				  <img slot="icon" src="../assets/img/icon_homepage_duihuan.png" width="20px" height="20px">
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
				  <img slot="icon" src="../assets/img/icon_homepage_zhekou.png" width="20px" height="20px">
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
				  <img slot="icon" src="../assets/img/icon_homepage_zhekou.png" width="20px" height="20px">
				</mt-cell>
				<transition-group tag="div" name="list" class="list-dl">
				<!--<div class="list-dl">-->
					<dl class="row-lr shihui" v-for="(item,index) in zhekouList" :key="index">
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
				<!--</div>-->
   			</transition-group>
   		</div>
   		
   	</div>

  </div>
</template>

<script>
import { Swipe, SwipeItem, Cell} from 'mint-ui';
export default {
  name: 'shouye',
  components:{
  },
  data () {
    return {
      msg: '',
      index:0,
      showt:true,
      zhekouList:[1,2,3,4]
      
    }
  },
  mounted(){
//	console.log(mui)
  },
  methods:{
  	fn(){
  		console.log(this.$refs.myswiper.index)
  	},
  	db(){
  		this.$router.push('/DBmall')
  	},
  	supermarket(){
  		this.$router.push('/supermarket')
  	},
  	safe(){
  		this.$router.push('/safe')
  	},
  	toggle(){
  		this.showt=!this.showt;
  	},
  	add(){
  		var arr=[1,2,3,4];
  		this.zhekouList=this.zhekouList.concat(arr);
  	},
  	del(index){
  		this.zhekouList.splice(index,1)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fold-enter-active, .fold-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fold-enter,.fold-leave-active{
    transform: translate3d(0, -50px, 0);
    opacity: .2;
}

.list-enter-active,.list-leave-active{
	transition: all .3s linear; 
	position: absolute;
}
.list-enter,.list-leave-to{
	transform: translateX(-100px);
	opacity: 0;
}

dl{
	transition: all .3s linear;
}


.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.page-top{
	padding: 0 10px;
	box-sizing: border-box;
	width: 100%;
	height: 44px;
	color: #333 !important;
	background: #fff;
	em{
		width: 20px;
		height: 20px;
	}
	b{
		width: 20px;
		margin-left: 5px;
	}
	i{
		width: 20px;
		height: 20px;
	}
	span{
		/*color: #333;*/
	}
}
	
	/*.mint-swipe-indicator.is-active{
		opacity: 1 !important;
	}
	.mint-swipe-indicator is-active{
		background: #fff !important;
	}
	.mint-swipe{
		height: 120px;
		background: #fff;
	}
	.mint-swipe-indicators{
		bottom: 3px;
	}
	.mint-swipe-indicator{
		width: 30px !important;
		height: 5px;
		background: #666 ;
		opacity: .7 ;
		border-radius: 0 ;
	}*/
	
	
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
<style lang="scss" type="text/css">
#sy-banner{
		.mint-swipe-indicator.is-active{
		background: #fff;
		opacity: 1;
	}
	.mint-swipe{
		height: 120px;
		background: #fff;
	}
	.mint-swipe-indicators{
		bottom: 3px;
	}
	.mint-swipe-indicator{
		width: 30px !important;
		height: 5px;
		background: #666 ;
		opacity: .7 ;
		border-radius: 0 ;
	}
}	

.mint-cell:first-child .mint-cell-wrapper{
	background-image: none !important;
}
</style>
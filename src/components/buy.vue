<template>
  <div class="buy">
  	<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <h1 class="mui-title">确认订单</h1>
  	</header>
 		<div class="mui-content">
 			<div class="buy-top">
	 		  <div class="user-address row-lr">
	 		  	<em><img src="../assets/img/line-item_dizhi.png"/></em>
	 		  	<div class="user-info">
	 		  		<div class="user-name row-lr">
	 		  			<span>收件人：吴某某</span>
	 		  			<span>15634574125</span>
	 		  		</div>
	 		  		<div class="address-detail">
	 		  			广州市白云区云城西路M8创意园苹果大厦
	 		  			广州市白云区云城西路M8创意园苹果大厦
	 		  		</div>
	 		  	</div>
	 		  	<em><img src="../assets/img/arrows_right.png"/></em>
	 		  </div>
	 		  <div class="line"></div>
	 		</div>  
	 		
	 		
	 		<div class="store-box">
				<div v-for="store in 1" class="store-item">
					<div class="store-name row-l">
						<!--<em class="storeActive"></em>-->
						<h4>华为手机旗舰店</h4>
					</div>
					<div class="good-list">
						<div v-for="good in 1" class="good-item-box">
							<dl class="good-item row-l">
								<!--<dt class="storeActive"></dt>-->
								<dd class="row-l">
									<img src="../assets/img/good-attr-img.png"/>
									<div class="good-info">
										<p class="title">华为手机青春版华为手机青春版华为手机青春版华为</p>
										<div class="attr row-l">
											<span>白色</span>
											<span>34</span>
										</div>
										<div class="row-lr dd-bot">
											<b class="good-price">￥999</b>
											<p class="row-l"><b>￥300</b>+<b>￥200</b>折扣积分</p>
										</div>
									</div>
								</dd>
							</dl>
							<div class="good-num row-lr same">
								<span>购买数量<br /></span>
								<p class="row-l"><em>减</em><span>200</span><em>加</em></p>
							</div>
							<div class="user-jifen row-lr same">
								<span>使用折扣积分<br /></span>
								<p class="row-l"><em>减</em><span>200</span><em>加</em></p>
							</div>
							<div class="msg row-lr same">
								<span>卖家留言</span>
								<input type="text" name="" id="" value="" placeholder="请留言" />
							</div>
							<div class="xiaoji row-lr">
								<span>小计：</span>
								<div class="row-l">
									<span class="good-total">共1件商品</span>
									<p>现金:<b>￥300</b></p>
									<p>折扣积分:<b>200</b></p>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
			
			<dl class="submit-order row-r">
				<dt class="col-c">
					<p>合计:<b>￥300</b></p>
					<p>折扣积分:<b>200</b></p>
				</dt>
				<dd class="order-btn">提交订单</dd>
			</dl>
			
 		</div>	
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: 'test',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
  },
  methods:{
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.line{
	width: 100%;
	height: 6px;
	background: url(../assets/img/dizhixiantiao.png) no-repeat center center; 
	background-size: 100% 100%;
}
.user-address{
	padding: 5px 15px;
	background: #fff;
	font-size: 14px;
	em{
		display: inline-block;
		width: 12px;
		height: 16px;
	}
	.user-info{
		flex: 1;
		padding: 5px 10px;
		
	}
	.user-name{
		margin-bottom: 5px;
	}
}

.store-box{
	.store-item{
		margin-bottom: 10px;
		.storeActive{
			background:url(../assets/img/store-active.png) no-repeat center center;
			background-size: 100% 100%;
			border: 0 !important;
		}
		.store-name{
			padding: 15px;
			background: #fff;
			h4{
				font-weight: normal;
				position: relative;
				font-size: 17px;
			}
		}
	}
	.good-list{
		.good-item-box{
			background: #f8f8f8;
			.same{
				padding: 15px;
				font-size: 15px;
				border-bottom:1px solid #eee;
				background: #fff;
				input{
					width: 250px;
					margin: 0;
					padding: 0;
					border: 0;
					font-size: 15px;
					color: #999;
				}
				p{
					em{
						display: inline-block;
						width: 30px;
						height: 30px;
						line-height: 30px;
						text-align: center;
						border: 1px solid #ccc;
						font-style: normal;
					}
					span{
						display: inline-block;
						width: 40px;
						height: 30px;
						line-height: 30px;
						text-align: center;
						border-top: 1px solid #ccc;
						border-bottom: 1px solid #ccc;
					}
				}
				
				
			}
			.xiaoji{
				padding: 10px 15px; 
				background: #fff;
				font-size: 15px;
				b{
					color: #D60A16;
				}
				.good-total{
					margin-right: 10px;
				}
				p{
					color: #333;
					margin-left: 10px;
				}
			}
			.good-item{
				padding: 15px;
			}
			dt{
				width: 20px;
				height: 20px;
				border: 1px solid #ccc;
				border-radius: 50%;
				margin-right: 15px;
			}
			dd{
				flex: 1;
				align-items: flex-start;
				img{
					width: 100px;
					height: 100px;
					margin-right: 15px;
				}
				.good-info{
					.title{
						font-size: 15px;
						color: #333;
						/*margin-bottom: 5px;*/
					}
					.attr{
						color: #666;
						font-size: 15px;
						margin: 5px 0;
						span{
							margin-right: 15px;
						}
					}
					.dd-bot{
						b{
							color: #D60A16;
							&:nth-child(2){
								margin-right:5px ;
							}
						}
						p{
							em{
								display: inline-block;
								width: 30px;
								height: 30px;
								line-height: 30px;
								text-align: center;
								border: 1px solid #ccc;
								font-style: normal;
							}
							span{
								display: inline-block;
								width: 40px;
								height: 30px;
								line-height: 30px;
								text-align: center;
								border-top: 1px solid #ccc;
								border-bottom: 1px solid #ccc;
							}
						}
					}
				}
			}
		}
		.good-item-bot{
			padding: 15px;
			background: #fff;
			font-size: 15px;
			color: #666;
			.zk-jifen{
				margin-right: 40px;
				p{
					em{
						display: inline-block;
						width: 30px;
						height: 30px;
						line-height: 30px;
						text-align: center;
						border: 1px solid #ccc;
						font-style: normal;
					}
					span{
						display: inline-block;
						width: 40px;
						height: 30px;
						line-height: 30px;
						text-align: center;
						border-top: 1px solid #ccc;
						border-bottom: 1px solid #ccc;
					}
				}
				
			}
			.xianjin{
				b{
					color: #D60A16;
				}
			}
		}
	}
}

.submit-order{
	width: 100%;
	height: 50px;
	background: #fff;
	font-size: 16px;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 999;
	b{
		color: #D60A16;
	}
	dt{
		align-items: flex-start;
		margin-right: 10px;
	}
	.order-btn{
		width: 90px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		background: #fa0527;
		color: #fff;
	}
}
</style>

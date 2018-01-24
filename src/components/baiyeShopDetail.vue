<template>
  <div class="baiyeShopDetail modal-show">
  	<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <a class="mui-pull-right collect-btn">
  	    	<img src="../assets/img/icon_shoucang_normal.png"/>
  	    </a>
  	    <a class="mui-pull-right share-btn">
  	    	<img src="../assets/img/icon_share.png"/>
  	    </a>
  	    <h1 class="mui-title">淼鑫猪肚鸡</h1>
  	</header>
  	
 		<div class="mui-content baiye-content">
 			<div class="foodInfo">
 				<div class="by-banner">
					<img src="../assets/img/img.png"/>
				</div>
				<div class="infoDetail text-center">
					<h3>滋补杨洋2-3人套餐</h3>
					<p class="row-c"><span>￥108</span><em>门市价：￥150</em></p>
					<p>可用积分：200 消费后赠送108积分</p>
				</div>
				<dl class="pos row-lr">
					<dt class="row-l">
						<img src="../assets/img/line-item_dizhi.png"/>
						<p>
							广州市白云区云城西路M8创意园A栋401c
						</p>
					</dt>
					<dd class="row-c">
						<img src="../assets/img/icon_phone.png"/>
					</dd>
				</dl>
 			</div>
			<dl class="action">
				<dt>购买须知</dt>
				<dd>
					<ul>
						<li>
							<p>有效期：</p>
							<span>2017.12-2018.2(周末、法定节假日通用)</span>
						</li>
						<li>
							<p>使用时间：</p>
							<span>10:00-20:00</span>
						</li>
						<li>
							<p>使用规则：</p>
							<span>无需预约，消费高峰时可能需要等位</span>
							<span>每张内消费劵建议2至3人使用</span>
							<span>不提供餐巾纸巾</span>
							<span>店内无包厢</span>
							<span>仅限食堂，不提供餐前外带，餐毕未吃完可打包，打包费请咨询商家</span>
							<span>无需预约，消费高峰时可能需要等位</span>
							<span>每张内消费劵建议2至3人使用</span>
							<span>不提供餐巾纸巾</span>
							<span>店内无包厢</span>
							<span>仅限食堂，不提供餐前外带，餐毕未吃完可打包，打包费请咨询商家</span>
							<span>无需预约，消费高峰时可能需要等位</span>
							<span>每张内消费劵建议2至3人使用</span>
							<span>不提供餐巾纸巾</span>
							<span>店内无包厢</span>
							<span>仅限食堂，不提供餐前外带，餐毕未吃完可打包，打包费请咨询商家</span>
						</li>
					</ul>
				</dd>
			</dl>
			
			<dl class="pingjia">
				<dt @click="goComment" class="row-lr">
					<p>评价(20)</p>
					<p class="row-l">
						<span class="row-l">
							<img src="../assets/img/icon_evaluate_red.png"/>
							<img src="../assets/img/icon_evaluate_red.png"/>
							<img src="../assets/img/icon_evaluate_red.png"/>
							<img src="../assets/img/icon_evaluate_red.png"/>
							<img src="../assets/img/icon_evaluate_red.png"/>
						</span>
						<i>4.2</i>
					</p>
				</dt>
				<dd class="comment-list">
					<dl class="comment-list-item" v-for="item in 3">
 		   			<dt class="row-lr">
 		   				<div class="dt-left row-l">
 		   					<span class="user">1****6</span>
	 		   				<p class="row-l">
	 		   					<em><img src="../assets/img/icon_evaluate_red.png"/></em>
	 		   					<em><img src="../assets/img/icon_evaluate_red.png"/></em>
	 		   					<em><img src="../assets/img/icon_evaluate_red.png"/></em>
	 		   					<em><img src="../assets/img/icon_evaluate_red.png"/></em>
	 		   					<em><img src="../assets/img/icon_evaluate_red.png"/></em>
	 		   				</p>
 		   				</div>
 		   				<span	class="date">2017-10-12</span>
 		   			</dt>
 		   			<dd>
 		   				考你问我的饭是否您水电费访问北京
 		   				考你问我的饭是否您水电费访问北京
 		   				考你问我的饭是否您水电费访问北京
 		   				考你问我的饭是否您水电费访问北京
 		   			</dd>
 		   		</dl>
				</dd>
			</dl>
			
			
			<dl class="shopoInfo">
				<dt>图文详情</dt>
				<dd>
					<img src="../assets/img/shopdetail-1_03.png"/>
					<img src="../assets/img/shopdetail-1_05.png"/>
					<img src="../assets/img/shopdetail-1_06.png"/>
					<img src="../assets/img/shopdetail-1_03.png"/>
					<img src="../assets/img/shopdetail-1_05.png"/>
					<img src="../assets/img/shopdetail-1_06.png"/>
				</dd>
			</dl>
 		  
 		  <div class="buy"><router-link to="/baiyeOrder">立即购买</router-link></div>
		</div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
import mui from 'mui'
export default {
  name: 'baiyeShopDetail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  mounted(){
  },
  deactivated(){
  },
  methods:{
  	goComment(){
  		this.$router.push('/comment')
  	}
  },
  beforeDestroy(){
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mui-bar-nav{
	a{
		img{
			width: 20px;
			height: 20px;
		}
	}
	.share-btn{
		margin: 8px 15px;
	}
	.collect-btn{
		margin: 8px 0 0;
	}
}
.modal-show{
	height: 100%;
	overflow: hidden;
}
.mui-content{
	font-size: 16px;
}

.foodInfo{
	margin-bottom: 10px;
	.by-banner{
		height: 180px;
		.mint-swipe-indicator.is-active{
			background: deepskyblue;
			opacity: 1;
		}
	}
	.infoDetail{
		text-align: center;
		background: #fff;
		padding: 15px 0;
		margin-bottom: 10px;
		h3{
			font-weight: normal;
			font-size: 18px;
		}
		p{
			margin: 10px 0;
		}
		em{
			font-style: normal;
		}
		span{
			font-size: 18px;
			color: #D60A16;
			margin-right: 10px;
		}
	}
	.pos{
		width: 100%;
		padding: 10px;
		background: #fff;
		margin: 10px 0;
		dt{
			flex: 1;
			img{
				width: 15px;
				height: 20px;
				margin-right: 15px;
			}
			p{
				flex: 1;
			}
		}
		dd{
			width: 80px;
			border-left: 1px solid #ccc;
			img{
				width: 30px;
				height: 30px;
			}
		}
	}
}
.action{
	width: 100%;
	background: #fff;
	margin: 10px 0;
	dt{
		padding: 10px;
		border-bottom: 1px solid #ccc;
		font-size: 16px;
	}
	dd{
		ul{
			width: 100%;
			padding: 15px;
			li{
				p{
					color: #D60A16;
					margin: 5px 0;
					font-size: 15px;
				}
				span{
					display: block;
					color: #666;
					line-height: 1.5;
					position: relative;
					font-size:14px; 
					padding-left: 10px;
					&:after{
						content: "";
						width: 2px;
						height: 2px;
						background: #666;
						position: absolute;
						top: 10px;
						left: 0;
						
					}
				}
			}
		}
		
	}
}
.jingxuan{
	.mui-ellipsis{
	white-space: initial;
}
.mui-media-object{
	max-width: 100px;
	height:100px;
}
.mui-table-view{
	margin:0 !important; 
	&:before{
		height: 0;
	}
}
.mui-table-view-cell{
	&:after{
		left: 0;
	}
}
.mui-media-body{
	white-space: initial;
	padding-right:15px ;
	position:relative; 
	&:after{
		content: "";
		width: 10px;
		height: 10px;
		border: 2px solid transparent;
		border-right-color: #ccc;
		border-bottom-color: #ccc;
		position: absolute;
		top: 50%;
		right: 5px;
		transform: translateY(-50%) rotateZ(-45deg);
	}
	h4{
		font-size: 15px;
		font-weight: normal;
		line-height: 1.5;
		color: #333;
		padding: 5px;
		margin-bottom: 10px;
	}
	p{
		margin: 5px;
	}
	
}
em,b,i,s{
	font-weight: normal;
	font-style:normal;
}

.cur-price{
	color: #D60A16;
	font-size: 15px;
	margin-right: 5px;
	font-weight: bold;
}
.rest{
	color: #D60A16;
}
}
.pingjia{
	background: #fff;
	margin: 10px 0;
	>dt{
		padding: 10px 35px 10px 15px;
		border-bottom: 1px solid #ccc;
		position: relative;
		&:after{
			content: "";
			width: 10px;
			height: 10px;
			border: 2px solid transparent;
			border-right-color: #ccc;
			border-bottom-color: #ccc;
			position: absolute;
			top: 50%;
			right: 15px;
			transform: translateY(-50%) rotateZ(-45deg);
		}
		p{
			font-size: 18px;
			color: #333;
		}
		span{
			img{
				width: 15px;
				height: 15px;
				margin: 0 2px;
			}
		}
		i{
			font-style: normal;
			margin-left: 5px;
			color: #D60A16;
		}
	}
	.comment-list{
		width: 100%;
		.comment-list-item{
			width: 100%;
			padding: 15px;
			border-bottom:1px solid #ccc;
			background: #fff;
			&:last-child{
				border-bottom: 0;
			}
			dt{
				margin-bottom: 15px;
				.dt-left{
					.user{
						margin-right: 10px;
					}
					p{
						em{
							display: inline-block;
							width: 15px;
							height: 15px;
							margin-right: 5px;
						}
					}
				}
				.date{
					font-size: 14px;
					color: #999;
				}
			}
			dd{
				width: 100%;
				line-height: 1.5;
				font-size: 15px;
				color: #333;
			}
		}
	}
}
.shopoInfo{
	width: 100%;
	color: #333;
	background: #fff;
	margin: 10px 0;
	dt{
		padding: 10px 15px;
		border-bottom:1px solid #ccc ;
		font-size: 18px;
	}
	dd{
		padding: 10px;
		font-size: 15px;
		color: #666;
		text-align: center;
		img{
			display: block;
			max-width: 100%;
			
		}
	}
}
.buy{
	width: 80%;
	margin: 15px auto;
	height: 60px;
	line-height: 60px;
	text-align: center;
	font-size: 18px;
	
	background: #D60A16;
	a{
		display: block;
		color: #fff;
	}
}

</style>
<style lang="scss" type="text/css">
	
</style>

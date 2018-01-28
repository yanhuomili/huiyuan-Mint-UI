<template>
  <div class="baiyeShop modal-show">
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
				<div class="shopName">
					<h4>淼鑫猪肚鸡</h4>
					<p>
						<img src="../assets/img/icon_evaluate_red.png"/>
						<img src="../assets/img/icon_evaluate_red.png"/>
						<img src="../assets/img/icon_evaluate_red.png"/>
						<img src="../assets/img/icon_evaluate_red.png"/>
						<img src="../assets/img/icon_evaluate_red.png"/>
					</p>
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
				<dt>店铺活动</dt>
				<dd>
					<h5>春节期间，本店一律八折起</h5>
					<p>活动时间：2月15-2-30</p>
				</dd>
			</dl>
			<div class="jingxuan">
				<ul class="mui-table-view">
				    <li class="mui-table-view-cell mui-media" v-for="item in 3">
				        <a href="javascript:;">
				            <img class="mui-media-object mui-pull-left" src="../assets/img/baiyeshangpin_img.png">
				            <div class="mui-media-body">
				                <h4>2-3人滋补养颜套餐</h4>
				                <div class="mui-ellipsis">
				                	<p class="row-lr">
				                		<span class="sell">可用积分：20</span>
				                		<span class="rest">已售13</span>
				                	</p>
				                	<p class="row-lr">
				                		<span><b class="cur-price">￥200</b></span>
				                		<i>消费后赠送108积分</i>
				                	</p>
				                </div>
				            </div>
				        </a>
				    </li>
				</ul>
			</div>
			
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
				<dt>商家信息</dt>
				<dd>
					营业时间：周一至周日 9:00-18:00
				</dd>
			</dl>
 		  
 		  <div class="good-list">
 		  	<h2>附件同类商家</h2>
 		  	<div class="good-content">
 		  		<div class="dl-list">
 		  			<dl @click="gotoDetail(index)" class="row-lr" v-for="(item,index) in 5">
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
</template>

<script>
import {Toast} from 'mint-ui'
import mui from 'mui'
export default {
  name: 'baiyeShop',
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
  	gotoDetail(id){
  		this.$router.push('/baiyeShopDetail');
  	},
  	goComment(){
  		this.$router.push('/comment');
  	}
  },
  beforeDestroy(){
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.baiyeShop{
	
}
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
	.shopName{
		padding: 10px;
		background: #fff;
		border-bottom: 1px solid #ccc;
		h4{
			font-size: 18px;
			margin-bottom: 10px;
		}
		p{
			img{
				width: 15px;
				height: 15px;
				margin-right: 5px;
			}
		}
	}
	.pos{
		width: 100%;
		padding: 10px;
		background: #fff;
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
	dt{
		padding: 10px;
		border-bottom: 1px solid #ccc;
		font-size: 16px;
	}
	dd{
		padding: 10px;
		position: relative;
		h5{
			font-size: 16px;
			color: #333;
		}
		p{
			font-size: 14px;
			color: #666;
			margin-top: 5px;
		}
		&:after{
			content: "";
			width: 10px;
			height: 10px;
			border: 2px solid transparent;
			border-bottom-color: #ccc;
			border-right-color: #ccc;
			position: absolute;
			top: 50%;
			right: 25px;
			transform: translateY(-50%) rotateZ(-45deg);
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
		padding: 10px 15px;
		font-size: 15px;
		color: #666;
	}
}



.good-list{
	margin-top: 15px;
	position: relative;
	background: #fff;
	h2{
		font-size: 18px;
		margin: 0;
		padding: 10px 15px;
		font-weight: normal;
		border-bottom: 1px solid #ccc;
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
}
</style>
<style lang="scss" type="text/css">
	
</style>

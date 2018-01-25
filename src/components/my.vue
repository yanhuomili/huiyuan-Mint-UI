<template>
  <div class="my">
  	<header class="mui-bar mui-bar-nav">
  	    <a class=" mui-pull-left">
  	    	<img src="../assets/img/set.png"/>
  	    </a>
  	    <a class=" mui-pull-right">
  	    	<img src="../assets/img/my-news.png"/>
  	    </a>
  	    <h1 class="mui-title">我的</h1>
  	</header>
 		<div class="mui-content">
			<div class="my-head row-l">
				<img src="../assets/img/my-head.png" alt="" />
				<span class="user-name">请点击登录</span>
			</div>
			<dl class="same-dl score">
				<dt class="row-lr">
					<p>我的积分</p>
				</dt>
				<dd class="row-lr">
					<p class="col-c">
						<span>5000</span>
						<i>折扣积分</i>
					</p>
					<p class="col-c">
						<span>5000</span>
						<i>折扣积分</i>
					</p>
				</dd>
			</dl>
			<dl class="same-dl my-order shop-order">
				<dt class="row-lr">
					<p>商城订单</p>
					<p class="all-order">全部订单</p>
				</dt>
				<dd class="row-lr">
					<p class="col-c">
						<span>
							<img src="../assets/img/dfk.png"/>
							<em class="mui-badge mui-badge-danger">2</em>
						</span>
						<i>待付款</i>
					</p>
					<p class="col-c">
						<span>
							<img src="../assets/img/dfk.png"/>
						</span>
						<i>待发货</i>
					</p>
					<p class="col-c">
						<span>
							<img src="../assets/img/dfk.png"/>
						</span>
						<i>待收货</i>
					</p>
					<p class="col-c">
						<span>
							<img src="../assets/img/dfk.png"/>
							<em class="mui-badge mui-badge-danger">1</em>
						</span>
						<i>待评价</i>
					</p>
					<p class="col-c">
						<span>
							<img src="../assets/img/dfk.png"/>
						</span>
						<i>退款/售后</i>
					</p>
				</dd>
			</dl>
			<dl class="same-dl my-order baiye-order">
				<dt class="row-lr">
					<p>百业联盟订单</p>
					<p class="all-order">全部订单</p>
				</dt>
				<dd class="row-lr">
					<p class="col-c">
						<span>
							<img src="../assets/img/dfk.png"/>
							<em class="mui-badge mui-badge-danger">2</em>
						</span>
						<i>待付款</i>
					</p>
					<p class="col-c">
						<span>
							<img src="../assets/img/dsy.png"/>
						</span>
						<i>待使用</i>
					</p>
					<p class="col-c">
						<span>
							<img src="../assets/img/dpj.png"/>
						</span>
						<i>待评价</i>
					</p>
					<p class="col-c">
						<span>
							<img src="../assets/img/sh.png"/>
							<em class="mui-badge mui-badge-danger">1</em>
						</span>
						<i>退款</i>
					</p>
				</dd>
			</dl>
			
			<dl class="same-dl guide-list">
				<dt class="row-lr">
					<p class="row-l">
						<img src="../assets/img/gwc.png"/>
						<span>购物车</span>
					</p>
				</dt>
				<dt class="row-lr">
					<p class="row-l">
						<img src="../assets/img/qb.png"/>
						<span>购物车</span>
					</p>
				</dt>
				<dt class="row-lr">
					<p class="row-l">
						<img src="../assets/img/fx.png"/>
						<span>购物车</span>
					</p>
				</dt>
				<dt class="row-lr">
					<p class="row-l">
						<img src="../assets/img/sc.png"/>
						<span>购物车</span>
					</p>
				</dt>
				
			</dl>
			
			
			
		</div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: 'my',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  components:{
  },
  mounted(){
  },
  methods:{
  },
  computed:{
  },
  watch:{
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.my{
	padding-bottom:50px ;
}
.mui-bar-nav{
	box-shadow: none;
	border-bottom: 1px solid #ccc;
	a{
		margin-top:7px;
		img{
			width: 25px;
			height: 25px;
		}
	}
}
.my-head{
	padding: 15px;
	position:relative;
	&:after{
		content: "";
		width: 15px;
		height: 15px;
		border: 1px solid transparent ;
		border-right-color:#333 ;
		border-bottom-color:#333 ;
		position: absolute;
		top: 50%;
		right: 20px;
		z-index: 999;
		transform: translateY(-50%) rotateZ(-45deg);
	}
	img{
		width: 60px;
		height: 60px;
		border-radius: 50%;
		margin-right: 20px;
	}
	span{
		font-size: 16px;
	}
}
.same-dl{
	width: 100%;
	background: #fff;
	margin: 10px 0;
	dt{
		padding: 15px 25px 15px 15px;
		border-bottom: 1px solid #ccc;
		color: #333;
		position: relative;
		&:after{
			content: "";
			width: 10px;
			height: 10px;
			border: 1px solid transparent;
			border-right-color:#333 ;
			border-bottom-color:#333 ;
			position: absolute;
			top: 50%;
			right: 15px;
			transform: translateY(-50%) rotateZ(-45deg);
		}
		p{
			font-size: 18px;
			color: #333;
		}
	}
	dd{
		padding: 0 15px;
	}
}
.score{
	dd{
		padding: 15px;
		p{
			width: 50%;
			span{
				font-size: 17px;
				margin-bottom: 5px;
				color: #333;
			}
			&:last-child{
				border-left: 1px solid #eee;
			}
		}
	}
}
.my-order{
	.all-order{
		font-size: 15px;
		color: #666;
	}
	dd{
		padding: 20px 15px;
		p{
			width: 20%;
			color: #333;
			span{
				position:relative;
				display: inline-block;
				img{
					width: 25px;
					height: 25px;
				}
				em{
					position: absolute;
					top: -10px;
					right: -10px;
				}
			}
			
		}
	}
}
.baiye-order{
	dd{
			p{
			width: 25%;
		}
	}

}
.guide-list{
	dt{
		p{
			img{
				width: 25px;
				height: 25px;
				margin-right: 10px;
			}
		}
	}
}
</style>

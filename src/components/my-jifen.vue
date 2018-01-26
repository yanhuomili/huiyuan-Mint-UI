<template>
  <div class="my-jifen">
  	<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <h1 class="mui-title">我的积分</h1>
  	</header>
 		<div class="mui-content">
			<dl class="same-dl score">
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
			
			<dl class="same-dl guide-list">
				<router-link to="/myJifenDetail">
					<dt class="row-lr">
							<p class="row-l">
								<span>积分明细</span>
							</p>
					</dt>
				</router-link>
				<router-link to="">
					<dt class="row-lr">
						<p class="row-l">
							<span>积分领取</span>
						</p>
					</dt>
				</router-link>
			</dl>
			
		</div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: 'my-jifen',
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
			font-size: 16px;
			img{
				width: 25px;
				height: 25px;
				margin-right: 10px;
			}
		}
	}
}
</style>

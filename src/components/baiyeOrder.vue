<template>
  <div class="baiyeOrder modal-show">
  	<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <h1 class="mui-title">确认订单</h1>
  	</header>
	<div class="mui-content baiye-content">
		<ul class="mui-table-view">
		    <li class="mui-table-view-cell mui-media">
		        <a href="javascript:;">
		            <img class="mui-media-object mui-pull-left" src="../assets/img/baiyeshangpin_img.png">
		            <div class="mui-media-body">
		                <h4>2-3人滋补养颜套餐</h4>
		                <div class="mui-ellipsis">
		                	<p class="row-lr">
		                		<span class="sell">可用积分：20</span>
		                		<span class="rest">消费后赠送108积分</span>
		                	</p>
		                	<p class="row-lr">
		                		<span class="price">￥108</span>
		                	</p>
		                </div>
		            </div>
		        </a>
		    </li>
		    <dl class="row-lr">
		    	<dt>购买数量</dt>
		    	<dd>
		    		<p class="row-l">
		    			<img src="../assets/img/red.png"/><span>2</span><img src="../assets/img/add.png"/>
		    		</p>
		    		
		    	</dd>
		    </dl>
		    <dl class="row-lr">
		    	<dt>使用积分折扣</dt>
		    	<dd>
		    		<p class="row-l">
		    			<img src="../assets/img/red.png"/><span>20</span><img src="../assets/img/add.png"/>
		    		</p>
		    	</dd>
		    </dl>
		    <dl class="row-lr">
		    	<dt>小计：</dt>
		    	<dd>
		    		<span>现金：<b>￥88</b></span>
		    		<span>折扣积分：<b>20</b></span>
		    		
		    	</dd>
		    </dl>
		</ul>
		<button class="mui-btn mui-btn-danger mui-btn-block baiye-submit">提交订单</button>
		
	</div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
import mui from 'mui'
export default {
  name: 'baiyeOrder',
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
  },
  beforeDestroy(){
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mui-bar-nav{
	box-shadow: none;
	border-bottom: 1px solid #eee;
}

.mui-media-object{
	max-width: 80px;
	height:80px;
}
.mui-table-view{
	&:before{
		height: 0;
	}
	dl{
		width: 100%;
		padding: 15px ;
		border-bottom: 1px solid #ccc;
		dd{
			>span{
				font-size: 15px;
				margin-left: 5px;
				b{
					color: #D60A16;
				}
			}
			p{
				border: 1px solid #eee;
				img{
					width: 25px;
					height: 25px;
				}
				span{
					width: 50px;
					height: 20px;
					line-height: 20px;
					text-align: center;
				}
			}
			
		}
	}
}
.mui-table-view-cell{
	&:after{
		left: 0;
	}
}
.mui-media-body{
	white-space: initial;
	h4{
		font-size: 15px;
		font-weight: normal;
		line-height: 1.5;
		color: #333;
		padding: 5px;
	}
	p{
		margin: 5px 0;
		.price{
			color: #D60A16;
		}
	}
	
}
em,b,i,s{
	font-weight: normal;
	font-style:normal;
}
.baiye-submit{
	margin: 50px 0;
}
</style>
<style lang="scss" type="text/css">
	
</style>

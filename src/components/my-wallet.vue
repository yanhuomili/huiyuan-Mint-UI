<template>
  <div class="my-wallet">
  	<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <h1 class="mui-title">我的钱包</h1>
  	</header>
 		<div class="mui-content">
			<div class="wallet col-c">
				<img src="../assets/img/my-wallet_icon_balance.png"/>
				<p>￥0.00</p>
			</div>
			
			<dl class="same-dl guide-list">
				<router-link to="/myBankcard">
					<dt class="row-lr">
						<p class="row-l">
							<span>我的银行卡</span>
						</p>
					</dt>
				</router-link>
				<router-link to="/tixian">
					<dt class="row-lr">
						<p class="row-l">
							<span>提现</span>
						</p>
					</dt>
				</router-link>
				<router-link to="/myDeal">
					<dt class="row-lr">
						<p class="row-l">
							<span>交易细明</span>
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
  name: 'my-wallet',
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
.my-wallet{
	background: #f1f1f1;
}
.wallet{
	padding: 20px 15px;
	p{
		font-size: 16px;
		color: #333;
		margin-top: 5px;
	}
	
	img{
		width: 40px;
		height: 50px;
	}
}
.mui-bar-nav{
	box-shadow: none;
	border-bottom: 1px solid #ccc;
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
.guide-list{
	dt{
		p{
			font-size: 15px;
		}
	}
}
</style>

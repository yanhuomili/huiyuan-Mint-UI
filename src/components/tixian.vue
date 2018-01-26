<template>
  <div class="tixian">
  	<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <h1 class="mui-title">提现</h1>
  	</header>
 		<div class="mui-content">
			<dl>
				<dt class="row-lr">
					<p>到账银行卡</p>
					<p>中国银行(9300)</p>
				</dt>
				<dd>
					<span>提现金额</span>
					<b class="row-l">
						<em>￥</em>
						<input type="text" v-model="num" class="mui-input-clear" id="" placeholder="请输入提款金额" />
					</b>
					<i>当前零钱余额500元</i>
					<div @click="sure" :class="className" class="mui-btn mui-btn-danger  mui-block tixian-btn">提现</div>
				</dd>
			</dl>
			
				
			
		</div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: 'tixian',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num:0,
      className:'mui-btn-grey'
    }
  },
  components:{
  },
  mounted(){
  },
  methods:{
  	sure(){
  		if(this.num>0){
  			this.$router.push('/tixianDetail');
  			console.log(888)
  		}
  	}
  },
  computed:{
  },
  watch:{
  	num:{
  		handler(val){
  			if(val>0){
  				this.className="mui-btn-danger"
  			}else{
  				this.className="mui-btn-grey"
  			}
  		}
  	}
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tixian{
}
.mui-bar-nav{
	box-shadow: none;
	border-bottom: 1px solid #ccc;
}
dl{
	width: 100%;
	padding: 15px;
	dt{
		background: #fff;
		padding: 15px;
		border-bottom: 1px solid #eee;
		p{
			font-size: 16px;
			color: #333;
		}
	}
	dd{
		background: #fff;
		padding: 5px 15px;
		span{
			font-size: 16px;
		}
		b{
			padding: 5px 0;
			border-bottom: 1px solid #eee;
			margin: 10px 0;
			font-size: 18px;
			input{
				border: none;
				padding: 0;
				margin: 0;
				height: 50px;
				font-size: 18px;
				font-weight: normal;
			}
		}
		i{
			color: #999;
			font-size: 16px;
		}
		.tixian-btn{
			margin: 20px 0;
			font-size: 18px;
		}
	}
}
</style>

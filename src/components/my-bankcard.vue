<template>
  <div class="my-bankcard">
  	<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <h1 class="mui-title">我的银行卡</h1>
  	</header>
 		<div class="mui-content">
			<dl class="">
				<dt class="row-l">
					<img src="../assets/img/icon_yinhangka.png"/>
					<div class="col-c">
						<h4>中国银行</h4>
						<span class="user-name">张三</span>
						<i>***** ***** ****** 1719</i>
					</div>
				</dt>
				<dd class="row-lr">
					<p class="row-l"><em></em>设为默认</p>
					<p>删除</p>
				</dd>
			</dl>
			
			<router-link to="" class="add-card">
				添加银行卡
			</router-link>
				
			
		</div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: 'my-bankcard',
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
.my-bankcard{
}
.add-card{
	display: block;
	width: 100%;
	text-align: center;
	padding: 15px 0;
	background: #fff;
	border-bottom:1px solid #ccc ;
}
.mui-bar-nav{
	box-shadow: none;
	border-bottom: 1px solid #ccc;
}
dl{
	width: 100%;
	margin: 10px 0;
	background: #fff;
	dt{
		img{
			width: 35px;
			height: 35px;
			border-radius: 50%;
			margin-right: 10px;
		}
		padding: 10px 15px;
		div{
			align-items: flex-start;
		}
		h4{
			font-weight: normal;
			font-size: 16px;
		}
		.user-name{
			margin: 5px;
			font-size: 14px;
		}
		
	}
	dd{
		padding: 10px 15px;
		border-top: 1px solid #eee;
		em{
			display: inline-block;
			width: 15px;
			height: 15px;
			border-radius: 50%;
			border: 1px solid #ccc;
			margin-right: 5px;
		}
	}
}
</style>

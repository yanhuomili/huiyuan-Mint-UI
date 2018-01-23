<template>
  <div class="qiangjifen">
  	<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <h1 class="mui-title">抢积分</h1>
  	</header>
 		<div class="mui-content">
 			<div class="ban">
 				<img src="../assets/img/qiangjifen_banner.png"/>
 			</div>
 			<div class="list-wrap">
 				<div class="jifen-list-item mui-row" v-for="item in 3">
	 				<div class="mui-col-xs-8 row-l">
	 					<h3>200</h3>
	 					<span>积分</span>
	 				</div>
	 				<div class="mui-col-xs-4 col-c">
	 					<span>剩余200个</span>
	 					<buttton class="mui-btn mui-btn-danger">立即抢</buttton>
	 					<div class="box col-c">
	 						<div class="top"></div>
	 						<em></em>
	 						<em></em>
	 						<em></em>
	 						<em></em>
	 						<div class="bot"></div>
	 					</div>
	 				</div>
	 			</div>
 			</div>
 			
 			
		</div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: 'qiangjifen',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tt:0
    }
  },
  components:{
  },
  props:['ttProps'],
  mounted(){
//	console.log(this.eve)
  	this.tt=this.ttProps;
  },
  methods:{
  	add(){
//		this.ttProps=this.ttProps+1;
  		console.log(this.ttProps)
  		this.$emit('add',6666666666)
  	}
  },
  computed:{
  	aa(){
  		return this.ttProps;
  	}
  },
  watch:{
//	ttt(){
//		this.tt=this.ttProps;
//	}
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ban{
	margin-bottom: 10px;
}
.register-banner{
	img{
		display: block;
		width: 100%;
		height: calc(100vh - 44px);
	}
}
.register-btn{
	padding: 20px 50px;
	position: absolute;
	top: 60%;
	left: 50%;
	transform: translateX(-50%);
	font-size: 20px;
}
.jifen-list-item{
	width: 100%;
	height: 80px;
	padding: 0 10px;
	margin-bottom:15px;
	>*{
		height: 100%;
		background: #fff;
		&.mui-col-xs-4{
			padding:10px 0;
			border-left: 2px solid #eee;
			position: relative;
			.box{
				width: 16px;
				height: 80px;
				position:absolute;
				top:0;
				left:-9px;
				.top,.bot{
					width: 16px;
					height: 16px;
					background: #f1f1f1;
					border-radius: 50%;
				}
				.top{
					margin-top: -8px;
				}
				.bot{
					margin-bottom: -8px;
				}
				em{
					width: 8px;
					height: 8px;
					border-radius:50% ;
					background: #f1f1f1;
				}
				
				
				
			}
			span{
				font-size: 14px;
			}
		}
	}
	h3{
		font-size: 36px;
		color: #D60A16;
		margin: 0 20px 0 25px;
		+ span{
			font-size: 20px;
		}
	}
}
.mui-btn{
	border-radius: 20px;
}
</style>

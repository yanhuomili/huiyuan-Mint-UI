<template>
  <div class="tixian-detail">
  	<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <h1 class="mui-title">提现详情</h1>
  	</header>
 		<div class="mui-content">
			<div class="tip col-c">
				<img src="../assets/img/tixian.png"/>
				<span>提现申请已提交</span>
			</div>
			<div class="info">
				<p class="row-lr"><span>预计到账时间</span><i>2017-12-30</i></p>
				<p class="row-lr"><span>银行卡</span><i>中国银行 尾号9245</i></p>
				<p class="row-lr"><span>提现金额</span><i>￥200</i></p>
			</div>
			<div class="mui-btn mui-btn-danger mui-block finish">完成</div>
		</div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: 'tixian-detail',
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
.tixian{
}
.mui-bar-nav{
	box-shadow: none;
	border-bottom: 1px solid #ccc;
}
.tip{
	width: 100%;
	padding: 20px;
	img{
		width: 80px;
		height: 80px;
		margin-bottom: 15px;
	}
}
.info{
	padding: 15px;
	font-size: 15px;
	background: #fff;
	p{
		margin: 5px;
	}
	span{
		color: #666;
	}
	i{
		color: #333;
	}
}
.finish{
	width: 90%;
	padding: 15px 10px;
	margin: 15px auto;
	font-size: 16px;
}
</style>

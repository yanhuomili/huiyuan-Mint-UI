<template>
  <div class="register">
  	<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <h1 class="mui-title">注册有奖</h1>
  	</header>
 		<div class="mui-content">
			<div class="register-banner">
				<img src="../assets/img/zhuceyoujiang_img.png"/>
				<div class="register-btn mui-btn mui-btn-danger">立即注册</div>
			</div>
		</div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: 'register',
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


</style>

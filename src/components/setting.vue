<template>
  <div class="setting">
  	<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <h1 class="mui-title">设置</h1>
  	</header>
 		<div class="mui-content">
			
			
			<dl class="same-dl guide-list">
				<dt class="row-lr">
					<p class="row-l">
						<span>意见反馈</span>
					</p>
				</dt>
				<dt class="row-lr">
					<p class="row-l">
						<span>服务协议</span>
					</p>
				</dt>
				<dt class="row-lr">
					<p class="row-l">
						<span>会员章程</span>
					</p>
				</dt>
				<dt class="row-lr">
					<p class="row-l">
						<span>关于我们</span>
					</p>
				</dt>
				
			</dl>
			
			
			
		</div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'

export default {
  name: 'setting',
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
.guide-list{
	dt{
		p{
			font-size: 16px;
		}
	}
}
</style>

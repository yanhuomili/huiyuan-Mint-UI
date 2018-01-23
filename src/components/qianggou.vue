<template>
  <div class="qinggou">
  	<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <h1 class="mui-title">抢购</h1>
  	</header>
 		<div class="mui-content">
			<ul class="mui-table-view">
			    <li class="mui-table-view-cell mui-media" v-for="item in 3">
			        <a href="javascript:;">
			            <img class="mui-media-object mui-pull-left" src="../assets/img/qianggou_img.png">
			            <div class="mui-media-body">
			                <h4>英伦风尚体系品牌服装店英伦风尚体系品牌服装店</h4>
			                <div class="mui-ellipsis">
			                	<p class="row-lr">
			                		<span class="sell">已抢1100件</span>
			                		<span class="rest">剩余13件</span>
			                	</p>
			                	<p class="row-lr">
			                		<span><b class="cur-price">￥200</b><s class="">￥350</s></span>
			                		<button class="mui-btn mui-btn-danger">立即抢购</button>
			                	</p>
			                </div>
			            </div>
			        </a>
			    </li>
			</ul>
		</div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: 'qianggou',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  components:{
  },
  props:['ttProps'],
  mounted(){
  },
  methods:{
  },
  computed:{
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
.mui-bar-nav{
box-shadow: none;
border-bottom: 1px solid #eee;	
}
.mui-ellipsis{
	white-space: initial;
}
.mui-media-object{
	max-width: 100px;
	height:100px;
}
.mui-table-view{
	margin:0 !important; 
	&:before{
		height: 0;
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
	}
	p{
		margin: 5px;
	}
	
}
em,b,i,s{
	font-weight: normal;
	font-style:normal;
}

.cur-price{
	color: #D60A16;
	font-size: 15px;
	margin-right: 5px;
	font-weight: bold;
}
.rest{
	color: #D60A16;
}
</style>

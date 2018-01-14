<template>
  <div class="comment">
  	<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <h1 class="mui-title">商品评价</h1>
  	</header>
 		<div class="mui-content">
 		   <div class="comment-list">
 		   		<dl class="comment-list-item" v-for="item in 10">
 		   			<dt class="row-lr">
 		   				<div class="dt-left row-l">
 		   					<span class="user">1****6</span>
	 		   				<p class="row-l">
	 		   					<em></em>
	 		   				</p>
 		   				</div>
 		   				<span	class="date">2017-10-12</span>
 		   			</dt>
 		   			<dd>
 		   				考你问我的饭是否您水电费访问北京
 		   				考你问我的饭是否您水电费访问北京
 		   				考你问我的饭是否您水电费访问北京
 		   				考你问我的饭是否您水电费访问北京
 		   			</dd>
 		   		</dl>
 		   </div>
 				
		  	
			
			</div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: 'comment',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
  },
  methods:{
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.comment-list{
	width: 100%;
	.comment-list-item{
		width: 100%;
		padding: 15px;
		border-bottom:1px solid #ccc;
		background: #fff;
		dt{
			margin-bottom: 15px;
			.dt-left{
				.user{
					margin-right: 10px;
				}
				p{
					em{
						display: inline-block;
						width: 15px;
						height: 15px;
						background: pink;
						margin-right: 5px;
					}
				}
			}
			.date{
				font-size: 14px;
				color: #999;
			}
		}
		dd{
			width: 100%;
			line-height: 1.5;
			font-size: 15px;
			color: #666;
		}
	}
}


</style>

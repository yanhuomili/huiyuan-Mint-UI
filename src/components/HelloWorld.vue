<template>
  <div class="hello">
  	<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <h1 class="mui-title">你好世界</h1>
  	</header>
  	<div class="mui-content">
  	    <h3>你好世界</h3>
  	</div>
 		
  	
		<!--<test></test>-->
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
import Test from './test'
export default {
  name: 'HelloWorld',
  components:{
  	Test
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
//	mui('.anniu')[0].text('sdf');
  },
  methods:{
  	toast(index,ev){
  		
  		console.log(index,ev)
		Toast({
			message:'数据加载中。。。',
			duration:2000
			
		})
		
  	}
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
dl{
	dt{
		background: #0000FF;
	}
	dd{
		h4{
			color: #D60A16;
		}
		p{
			color: pink;
			
		}
	}
}



</style>

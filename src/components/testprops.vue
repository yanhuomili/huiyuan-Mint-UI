<template>
  <div class="test">
  	<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <h1 class="mui-title">测试页面</h1>
  	</header>
 		<div class="mui-content" style="border: 3px solid #ccc;">
 			<!--<input type="text" name="" id="" v-model="ttProps" value="" />-->
 		   <p>{{ttProps}}</p>
 				<div @click="add" class="mui-btn mui-btn-danger">add</div>
		  	
			
			</div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: 'testprops',
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



</style>

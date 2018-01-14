<template>
  <div v-if="showFoot" class="footTab ">
		<nav id="foot-tab" class="mui-bar mui-bar-tab">
		    <a @click="bb('',$event)" to="/" class="mui-tab-item mui-active">
		        <span class="mui-icon mui-icon-home"></span>
		        <span class="mui-tab-label">首页</span>
		    </a>
		    <a @click="bb('jifen',$event)" to="/jifen" class="mui-tab-item">
		        <span class="mui-icon mui-icon-phone"></span>
		        <span class="mui-tab-label">积分商城</span>
		    </a>
		    <a @click="bb('baiye',$event)" to="/baiye" class="mui-tab-item">
		        <span class="mui-icon mui-icon-email"></span>
		        <span class="mui-tab-label">百业联盟</span>
		    </a>
		    <a @click="bb('',$event)" class="mui-tab-item">
		        <span class="mui-icon mui-icon-gear"></span>
		        <span class="mui-tab-label">我的</span>
		    </a>
		</nav>
    
  </div>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui';
export default {
  name: 'footTab',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected:'shouye',
      showFoot:true,
      urlList:[
      	{
      		id:'shouye',
      		url:'',
      		title:'首页',
      		src:'../src/assets/img/icon_jifenshangcheng_default.png'
      	},
      	{
      		id:'baiye',
      		url:'baiye',
      		title:'联盟',
      		src:'../src/assets/img/icon_baiyelianmeng_default.png'
      		
      	},
      	{
      		id:'test',
      		url:'test',
      		title:'测试',
      		src:'../src/assets/img/icon_wode_default.png'
      		
      	}
      ]
    }
  },
  mounted(){
  	var fh=$('#foot-tab').height();
  },
  computed:{
  },
  methods:{
		bb(val,ev){
			this.$router.push('/'+val	)
		},
		hideFooter(){
			this.showFoot=false;
		},
		showFooter(){
			this.showFoot=true;
		}
		
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.footTab{
		overflow: hidden;
	}
</style>

<template>
  <div v-if="showFoot" class="footTab ">
		<nav id="foot-tab" class="mui-bar mui-bar-tab row-lr">
		    <!--<a @click="bb('',$event)" to="/" class="mui-tab-item mui-active">
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
		    </a>-->
		    
		    <router-link to="/" class="col-c">
		    	<p class="col-c" style="color: #D60A16;" v-if="tabAddclass['/']">
			    	<i><img src="../assets/img/icon_shouye_selected.png"/></i>
			    	<span>首页</span>
			    </p>
		    	<p class="col-c" v-else="tabAddclass['/']">
			    	<i><img src="../assets/img/icon_shouye_default.png"/></i>
			    	<span>首页</span>
			    </p>
			    
		    </router-link>
		    <router-link to="/jifen" class="col-c">
		    	<p class="col-c" style="color: #D60A16;" v-if="tabAddclass['/jifen']">
			    	<i><img src="../assets/img/icon_jifenshangcheng_selected.png"/></i>
			    	<span>积分商城</span>
			    </p>
			    <p class="col-c" v-else="tabAddclass['/jifen']">	
			    	<i><img src="../assets/img/icon_jifenshangcheng_default.png"/></i>
			    	<span>积分商城</span>
			    </p>
		    </router-link>
		    <router-link to="/baiye" class="col-c">
		    	<p class="col-c" style="color: #D60A16;" v-if="tabAddclass['/baiye']">
			    	<i><img src="../assets/img/icon_baiyelianmeng_selected.png"/></i>
			    	<span>百业联盟</span>
			    </p>
			    <p class="col-c" v-else="tabAddclass['/baiye']">
			    	<i><img src="../assets/img/icon_baiyelianmeng_default.png"/></i>
			    	<span>百业联盟</span>
			    </p>
		    </router-link>
		    <router-link to="/my" class="col-c">
		    	<p class="col-c" style="color: #D60A16;" v-if="tabAddclass['/my']">
			    	<i><img src="../assets/img/icon_wode_selected.png"/></i>
			    	<span>我的</span>
			    </p>	
			    <p class="col-c" v-else="tabAddclass['/baiye']">
			    	<i><img src="../assets/img/icon_wode_default.png"/></i>
			    	<span>我的</span>
			    </p>
		    </router-link>
		</nav>
    
  </div>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui';
import {mapState} from 'vuex'
export default {
  name: 'footTab',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected:'shouye',
      showFoot:true,
      urlList:[]
    }
  },
  mounted(){
  	var fh=$('#foot-tab').height();
  	console.log(this.$route.path)
  	var str=this.$route.path;
		this.$store.commit('changeTab',str);
  	
  },
  computed:{
  	...mapState({
			tabAddclass:'tabAddclass',//this.	goodListFormStore==this.$store.state.goodListFormStore
			
		  }),
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
		
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.footTab{
		overflow: hidden;
		position: relative;
		nav{
			width: 100%;
			overflow: hidden;
			a{
				width: 25%;
				text-align: center;
				font-size: 14px;
				i{
					display: inline-block;
					width: 20px;
					height: 20px;
					margin-bottom:3px ;
				}
			}
		}
	}
	
</style>

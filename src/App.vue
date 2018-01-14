<template>
  <div id="app">
  		<transition name="fade">
  			<keep-alive>
  				<router-view></router-view>
  			</keep-alive>
  			
  		</transition>
    	<foot-tab ref="foot"></foot-tab>
  </div>
</template>

<script>
import footTab from './components/footTab'
import router from './router'
router.beforeEach(function(to, from, next) {
	var p=to.fullPath;
	if(router.app.$root.$children[0]!=undefined){
		if(p=="/"){
			showFooter:true;
			router.app.$children[0].$refs.foot.showFooter()
		}else if(p=="/jifen"){
			showFooter:true;
			router.app.$children[0].$refs.foot.showFooter()
		}else if(p=="/baiye"){
			showFooter:true;
			router.app.$children[0].$refs.foot.showFooter()
		}else{
			showFooter:false;
			router.app.$children[0].$refs.foot.hideFooter()
		}
//		console.log(router.app.$children[0].$refs.foot.showFooter())
	}
	
	next();
})
export default {
  name: 'app',
  data(){
  	return {
		showFooter:true
  	}
  },
  components:{
  	'foot-tab':footTab
  },
  created(){
  },
  mounted(){
  },
  methods:{
  	
  }
}
</script>

<style scoped="" lang="scss">
.fade-enter-active, .fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter,.fade-leave-active{
    /*transform: translate3d(0, -50px, 0);*/
    opacity: .3;
}

</style>

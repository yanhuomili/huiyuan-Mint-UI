<template>
  <div class="safe">
  	<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <h1 class="mui-title">保险平台</h1>
  	</header>
 		<div class="mui-content">
 			<div class="safe-ban">
 				<img src="../assets/img/baoxianpingtai_banner_one.png"/>
 			</div>
 			<div class="safe-classify">
 				<div class="safe-classify-memu">
 					<ul class="row-lr">
 						<li @click="safeChangeMenu(index)" v-for="(item,index) in list" :class="{'active':index==menuIndex}">{{item.title}}</li>
 						<!--<li>汽车保险</li>
 						<li>意外保险</li>-->
 					</ul>
 				</div>
 				<div class="safe-classify-content">
 					<div class="content-item" v-for="(item,index) in list" :class="{'active':index==menuIndex}">
 						<!--<safe-children></safe-children>-->
 						<safe-children :safe-obj="item" @loadmoreInfo="updateSafe"></safe-children>
 					</div>
 				</div>
 			</div>
 		</div>
 		
  </div>
</template>

<script>
import {Toast,Indicator} from 'mint-ui'
import safeChildren from './safeChildren'
export default {
  name: 'safe',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      menuIndex:0,
      list:[]
    }
  },
  components:{
  	safeChildren
  },
  mounted(){
  },
  mounted(){
  	console.log('activated')
  	this.$http.get('mock/safedata.json').then(res=>{
  		console.log(res.data.list);
		this.list=res.data.list;
  	},err=>{
  		console.log(err)
  	})
  },
  methods:{
  	safeChangeMenu(index){
  		this.menuIndex=index;
  		console.log(this.menuIndex)
  	},
  	updateSafe(){
  		console.log(this.menuIndex);
			var obj=this.list[this.menuIndex].safeList[0];		
			for(var i=0;i<5;i++){
				this.list[this.menuIndex].safeList.push(obj)
			}
  	}
  },
  computed:{
  },
  watch:{
  }
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.safe-ban{
	width: 100%;
	height: 150px;
	overflow: hidden;
	img{
		display: block;
	}
}
.safe-classify{
	.safe-classify-memu{
		margin: 5px 0;
		ul{
			padding: 0 15px;
			height: 50px;
			background: #fff;
			li{
				padding: 0 5px;
				height: 100%;
				line-height: 50px;
				border-bottom: 2px solid transparent;
				&.active{
					border-color: #D60A16;
				}
			}
		}
	}
	.safe-classify-content{
		width: 100%;
		height: calc(100vh - 254px);
		.content-item{
			width: 100%;
			height: 100%;
			display: none;
			&.active{
				display: block;
			}
		}
	}
}


</style>

<template>
  <div class="safeChildren">
  	<ul class="mui-table-view"
  		v-infinite-scroll="loadm"
     infinite-scroll-disabled="loading"
     infinite-scroll-distance="15"
     infinite-scroll-immediate-check="false"
  		>
  	    <li class="mui-table-view-cell mui-media" v-for="item in safeObj.safeList">
  	        <a href="javascript:;">
  	            <img class="mui-media-object mui-pull-left" :src="item.safeImg">
  	            <div class="mui-media-body">
  	                <span>{{item.safeTitle}}</span>
  	                <p class="mui-ellipsis">
  	                	<span>{{item.safeText}}</span>
  	                	<span class="price">￥{{item.safePrice}}</span>
  	                </p>
  	            </div>
  	        </a>
  	    </li>
  	    
  	</ul>
  </div>
</template>

<script>
import {Toast,InfiniteScroll,Indicator} from 'mint-ui'
export default {
  name: 'safeChildren',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      loading:false,
      pageNum:[0,0,0]
      
    }
  },
  props:['safeObj'],
  components:{
  },
  mounted(){
  },
  deactivated(){
  	Indicator.close();
  },
  methods:{
  	loadm(){
  		this.loading=true;
  		Indicator.open('加载中...')
  		setTimeout(()=>{
  			console.log(55);
  			this.$emit('loadmoreInfo')
//				this.loading=false;
  		},1000)
		
  	}
  },
  computed:{
  },
  watch:{
  	safeObj:{
  		handler(){
  			console.log('handler')
  			this.loading=false;
  			Indicator.close();
  		},
  		deep:true
  	}
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.safeChildren{
	height: 100%;
	overflow-y: scroll;
}
.mui-table-view{
	&:before{
		height: 0;
	}
}
.mui-media-object{
	max-width: 80px !important;
	width: 80px !important;
	height: 80px !important;
}
.mui-table-view-cell{
	&:after{
		left: 0;
	}
	.mui-ellipsis{
		width: 100%;
		white-space: initial;
		font-size: 14px;
			*{
				display: block;
			}
			.price{
				color: #D60A16;
			}
	}
}
.mui-media-body{
	>span{
		display: block;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
}

</style>

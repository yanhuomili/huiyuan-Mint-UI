<template>
  <div class="DBmall">
  	<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <a class="mui-pull-right car">
  	    	<img src="../assets/img/jf-car.png"/>
  	    </a>
  	    <input class="db-search" type="text" name="" id="" placeholder="请输入关键字" />
  	    
  	</header>
 		<div class="mui-content">
 		   <div class="db-nav row-lr">
	 		   	<div class="menu-wrap ">
		 		   		<ul class="db-nav-menu" v-if="dbList.length">
		 		   			<li @click="changeMenu(index)" v-for="(item,index) in dbList" :class="{'active':index==showIndex}">{{item.title}}</li>
		 		   		</ul>
	 		   	</div>
 		   		<div class="sub-menu">
 		   			<img src="../assets/img/dbmall_home_icon_classify.png"/>
 		   		</div>
 		   		
 		   </div>
 		   <div class="db-content">
 		   		<div class="db-wrap" v-if="dbList.length">
	 		   		<div class="db-item" :class="{'active':index==showIndex}" v-for="(item,index) in dbList">
	 		   			<good-list @dbLoadMore="dbupdateFn" :pIndex="item" ref="updateDb"></good-list>
	 		   		</div>
 		   		</div>
 		   		
 		   </div>
 				
		  	
			
			</div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
import goodList from './jifenDuihuan.vue'
export default {
  name: 'DBmall',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showIndex:0,
      dbList:[],
      obj:{
						"title":"积分兑换",
						"id":1,
						 "banner":[
						 	"http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180",
					      	"http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180",
					      	"http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180"
						 ],
						 "goodsList":[
						 	{ 
						 		"goodsImg":"http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180",
						 		"goodPrice":601,
						 		"goodScore":300,
						 		"goodId":200,
						 		"shopId":123,
						 		"shopName":"华为手机旗舰店1"
						 	},
						 	{ 
						 		"goodsImg":"http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180",
						 		"goodPrice":501,
						 		"goodScore":123,
						 		"goodId":150,
						 		"shopId":13,
						 		"shopName":"华为手机旗舰店2"
						 	},
						 	{ 
						 		"goodsImg":"http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180",
						 		"goodPrice":331,
						 		"goodScore":3,
						 		"goodId":180,
						 		"shopId":14,
						 		"shopName":"华为手机旗舰店3"
						 	},
						 	{ 
						 		"goodsImg":"http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180",
						 		"goodPrice":241,
						 		"goodScore":19,
						 		"goodId":169,
						 		"shopId":17,
						 		"shopName":"华为手机旗舰店4"
						 	},
						 	{ 
						 		"goodsImg":"http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180",
						 		"goodPrice":31,
						 		"goodScore":53,
						 		"goodId":270,
						 		"shopId":23,
						 		"shopName":"华为手机旗舰店5"
						 	}
						 ]
				}
    }
  },
  components:{
  	'good-list':goodList
  },
  mounted(){
  	
  },
  update(){
  	console.log(123)
  },
  activated(){
  	console.log('activated')
  	if(this.dbList.length>0){
  		
		  	
  	}
  	
  	this.$http.get('/api/dbmall').then(res=>{
  		console.log(res.body.data.list);
			this.dbList=res.body.data.list;
			this.$nextTick(()=>{
  			var menuLi=$('.menu-wrap ul li');
		  	var len=menuLi.length;
		  	var w=menuLi.get(0).offsetWidth+0.5;
		  	console.log(menuLi.get(0))
		  	var ulw=len*w;
		  	console.log(len,w,ulw)
		  	$('.menu-wrap ul').width(ulw);
  		})
			
			
  	},err=>{
  		console.log(err)
  	})
  	
  },
  methods:{
  	changeMenu(index){
  		this.showIndex=index;
  	},
  	dbupdateFn(obj){
  		console.log(obj);
  		var arr=this.dbList[this.showIndex].goodsList;
  		for(var i=0;i<5;i++){
	  			arr.push({ 
				 		"goodsImg":"http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180",
				 		"goodPrice":91+i,
				 		"goodScore":140+i,
				 		"goodId":210+i,
				 		"shopId":43+i,
				 		"shopName":"小米手机旗舰店"+i
				 	})
	  		}
  		
//		console.log(this.$refs.updateDb[this.showIndex].$refs)
//			this.$refs.updateDb[this.showIndex].$refs.loadmore.onBottomLoaded();
  		 
  	}
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/  
::-webkit-scrollbar  
{  
    width: 5px;  
    height: 5px;  
    background-color: #f3f3f3;  
}  
  
/*定义滚动条轨道 内阴影+圆角*/  
::-webkit-scrollbar-track  
{  
    -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0);  
    border-radius: 10px;  
    background-color: #F5F5F5;  
}  
  
/*定义滑块 内阴影+圆角*/  
::-webkit-scrollbar-thumb  
{  
    border-radius: 10px;  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
    background-color: #f8f8f8;  
} 
.mui-bar-nav{
	box-shadow: none;
	border-bottom: 1px solid #eee;
}
	.mui-bar{
		background: #fff;
	}
	.car{
		img{
			width: 25px;
			height: 25px;
			margin-top: 7px;
		}
	}
	.db-search{
		width: 70%;
		height: 30px;
		display: block;
		margin: 7px auto 0;
		border: none;
		background: #f1f1f1;
		font-size: 15px;
	}
	.db-nav{
		width: 100%;
		height: 50px;
		overflow: hidden;
		background: #fff;
		
		.menu-wrap{
			overflow-x: auto;
			width: 88%;
			border-right: 1px solid #ccc;
			ul{
				margin: 5px;
				overflow: hidden;
				li{
					padding: 5px 15px;
					float: left;
					&.active{
						border-bottom: 1px solid #D60A16;
						color: #D60A16;
					}
				}
				
			}
		}
		.sub-menu{
			width: 13%;
			img{
				width: 20px;
				height: 20px;
				display: block;
				margin: 0 auto;
			}
		}
	}
	
	.db-content{
		width: 100%;
		height: calc(100vh - 94px);
		overflow-x: hidden;
		.db-wrap{
			width: 100%;
			height: 100%;
		}
		.db-item{
			width: 100%;
			height: 100%;
			overflow-y: auto;
			display: none;
			&.active{
				display: block;
			}
		}
	}
</style>

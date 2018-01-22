<template>
  <div class="jifenduihuan">
		<div class="jifen-list-box">
			<mt-loadmore id="loadmore" topLoadingText="刷新页面" bottomLoadingText="数据加载中..." :top-method="topLoad" :bottom-method="bottomLoad" :bottom-all-loaded="stopNum" ref="loadmore"> 
					<div class="jf-banner" v-if="banSrc">
							<mt-swipe :auto="0">
				    	<mt-swipe-item v-for="ban in banSrc" :key="ban">
				    		<img :src="ban"/>
				    	</mt-swipe-item>
				    </mt-swipe>
					</div>
					<slot name="tuijanBan">
					</slot>
					
					<transition-group tag="ul" name="list" class="jifen-list row-lr">
					  <li v-for="(goodItem,index) in pIndex.goodsList" :key="index" class="jifen-list-item">
								<img @click="goDetail(goodItem.goodId,goodItem.shopName)" :src="goodItem.goodsImg" :data="goodItem.goodId" alt="积分兑换商品" />
								<h4 class="heading">真皮时尚皮鞋，品种款式任你挑选</h4>
								<p>零售价：<strong>￥{{goodItem.goodPrice}}</strong></p>
								<p class="row-l">
									<span><b>￥{{goodItem.goodPrice}}</b>+<b>{{goodItem.goodScore}}</b></span>
									<span>折扣积分</span>
								</p>
						</li>
					 </transition-group>
			</mt-loadmore>
		</div>
		
  	
  </div>
</template>

<script>
import {Toast,Loadmore} from 'mint-ui'
export default {
  name: 'test',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      bannerSrc:[],
      goodOptin:{ 
		 		"goodsImg":"http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180",
		 		"goodPrice":91,
		 		"goodScore":140,
		 		"goodId":210,
		 		"shopId":43,
		 		"shopName":"小米手机旗舰店1"
		 	},
		 	stopNum:false,
		 	stopIndex:0
    }
  },
  props:[
		'pIndex',
		'banSrc'
  ],
  mounted(){
		this.bannerSrc=this.$props.banSrc;
  },
  methods:{
  	toast(index,ev){
  	},
  	add(){//添加轮播图片
  		var arr=this.$props.banSrc.unshift("http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180");
  	},
  	topLoad(){//下拉刷新
  		setTimeout(()=>{
  			this.$refs.loadmore.onTopLoaded();
  		},200)
  	},
  	bottomLoad(){//上拉加载更多
  		var obj={
			 		"goodsImg":"http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180",
			 		"goodPrice":99,
			 		"goodScore":145,
			 		"goodId":216,
			 		"shopId":49,
			 		"shopName":"小米手机旗舰店9"
			 	}
		this.$emit('jifenLoadMore',obj);
			this.$emit('dbLoadMore',obj);
  		
  		setTimeout(()=>{
//			var arr=this.pIndex.goodsList;
//	  		for(var i=0;i<4;i++){
//	  			arr.push({ 
//				 		"goodsImg":"http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180",
//				 		"goodPrice":91+i,
//				 		"goodScore":140+i,
//				 		"goodId":210+i,
//				 		"shopId":43+i,
//				 		"shopName":"小米手机旗舰店"+i
//				 	})
//	  		}
//			this.$refs.loadmore.onBottomLoaded();
  			
  			
  			this.stopIndex=this.stopIndex+1;
				if(this.stopIndex==4){
					this.stopNum=true;
					Toast({
						message:'没有更多了...',
						duration:2000
					})
					
				}
  			
  		},200)
  	},
  	goDetail(id,shopName){//跳到详情页面
  		console.log(id,shopName)
  		this.$router.push({
  			name:'detail',
  			params:{
  				id:id
  			}
  		});
  	},
  	del(index){
  		this.pIndex.goodsList.splice(index,1)
  		console.log(this.pIndex.goodsList)
  	}
  	
 },
 watch:{
 	pIndex:{
 		handler(cur){
			this.$refs.loadmore.onBottomLoaded();
 			console.log(666666)
 		},
 		deep:true
 	}
 }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.jifen-list-item{
	transition: all .5s;
}

.list-enter-active,.list-leave-active{
	transition: all .5s ease;
}
.list-enter,.list-leave-to{
	opacity: 0;
	transform: translateY(-100px);
}



.jifenduihuan{
	/*width: 100%;*/
}
.jifen-list-box{
	width: 100%;
	/*margin: 15px 0;*/
	.jifen-list{
		background: #fff;
		flex-wrap: wrap;
		.jifen-list-item{
			background: #fff;
			padding: 10px;
			width: 50%;
			margin-bottom: 15px;
			.heading{
				width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-weight: 500;
				margin-bottom: 10px;
			}
			p{
				margin: 5px 0;
				align-content: flex-end;
				strong{
					color: #D60A16;
					font-size: 18px;
				}
				b{
					color: #D60A16;
					font-size: 16px;
				}
				span{
					margin-right: 10px;
				}
				
			}
		}
	}
}


</style>
<style type="text/css" lang="scss">
.jifen-list-box{
	.mint-spinner-fading-circle-circle:before{
		background: #0062cc !important;
	}
}
	
</style>
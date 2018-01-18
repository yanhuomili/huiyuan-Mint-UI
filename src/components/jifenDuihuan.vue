<template>
  <div class="jifenduihuan">
  	
  	<!--<div class="jf-banner">
			<mt-swipe :auto="0">
	    	<mt-swipe-item v-for="ban in banSrc">
	    		<img :src="ban"/>
	    	</mt-swipe-item>
	    </mt-swipe>
		</div>
		<button @click="add" type="button" class="mui-btn mui-btn-blue mui-btn-block">添加</button>-->
		
		
		<div class="jifen-list-box">
			<mt-loadmore id="loadmore" topLoadingText="刷新页面" bottomLoadingText="数据加载中..." :top-method="top" :bottom-method="bottom" :bottom-all-loaded="stopNum" ref="loadmore"> 
					<div class="jf-banner">
							<mt-swipe :auto="0">
				    	<mt-swipe-item v-for="ban in banSrc" :key="ban">
				    		<img :src="ban"/>
				    	</mt-swipe-item>
				    </mt-swipe>
					</div>
					
					<!--<router-link :to="{name:'detail',params:{user:'lili',id:456}}">跳到详情页</router-link>-->
					<!--<button @click="add" type="button" class="mui-btn mui-btn-blue mui-btn-block">添加</button>-->
					
					
					<transition-group tag="ul" name="list" class="jifen-list row-lr">
					 <!--<ul class="jifen-list row-lr">-->
					  <li v-for="(goodItem,index) in pIndex.goodsList" :key="index" class="jifen-list-item">
					  	<!--<router-link to="">-->
								<img @click="goDetail" :src="goodItem.goodsImg" alt="积分兑换商品" />
								<h4 class="heading">真皮时尚皮鞋，品种款式任你挑选</h4>
								<p>零售价：<strong>￥{{goodItem.price}}</strong></p>
								<p class="row-l">
									<span><b>￥{{goodItem.discount}}</b>+<b>{{goodItem.score}}</b></span>
									<span>折扣积分</span>
								</p>
								<!--<span @click="del(index)" class="del-good" style="padding: 5px 8px;background: deepskyblue;color: #fff;">删除</span>-->
							<!--</router-link>-->
						</li>
					 <!--</ul>-->
					 </transition-group>
			</mt-loadmore>
			
			
			
			<!--<ul class="jifen-list row-lr">
				<li v-for="goodItem in pIndex.goodsList" class="jifen-list-item">
					<img :src="goodItem.goodsImg" alt="积分兑换商品" />
					<h4 class="heading">真皮时尚皮鞋，品种款式任你挑选</h4>
					<p>零售价：<strong>￥{{goodItem.price}}</strong></p>
					<p class="row-l">
						<span><b>￥{{goodItem.discount}}</b>+<b>{{goodItem.score}}</b></span>
						<span>折扣积分</span>
					</p>
				</li>
			</ul>-->
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
		 		"goodsImg":"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
		 		"price":500,
		 		"discount":300,
		 		"score":200
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
  	top(){//下拉刷新
  		setTimeout(()=>{
  			this.$refs.loadmore.onTopLoaded();
  		},200)
  	},
  	bottom(){//上拉加载更多
  		setTimeout(()=>{
  			var arr=this.pIndex.goodsList;
	  		for(var i=0;i<4;i++){
	  			arr.push(this.goodOptin)
	  		}
  			this.$refs.loadmore.onBottomLoaded();
  			
  			
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
  	goDetail(){//跳到详情页面
  		this.$router.push({
  			name:'detail',
  			params:{
  				user:'lihaohua',
  				id:123
  			}
  		});
  	},
  	del(index){
  		this.pIndex.goodsList.splice(index,1)
  		console.log(this.pIndex.goodsList)
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
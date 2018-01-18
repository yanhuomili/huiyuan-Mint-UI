<template>
  <div class="detail" ref="detail">
  	<!--<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <h1 class="mui-title">商品详情</h1>
  	</header>-->
  	<div class="detail-header row-lr">
  		<em class="mui-icon mui-icon-back mui-action-back"><!--<img src="../assets/img/back.png"/>--></em>
  		<ul>
  			<li class="active"><router-link to="">商品</router-link></li>
  			<li @click="showImg"><router-link to="">详情</router-link></li>
  			<li @click="showComment"><router-link to="">评价</router-link></li>
  		</ul>
  		<p class="row-l">
  			<b @click="gotoCar"><img src="../assets/img/jf-car.png"/></b>
  			<b><img src="../assets/img/option.png"/></b>
  		</p>
  	</div>
 		<div class="mui-content detail-content" v-if="good!=null">
 			<mt-loadmore class="detail-loadmore" topLoadingText="正在刷新" :top-method="top" :bottom-method="bottom" :bottom-all-loaded="tuwenShow" ref="loadmore">
 				<!--详情轮播-->
 		    <div class="detail-banner">
					<mt-swipe :auto="0">
			    	<mt-swipe-item v-for="item in 3" :key="item">
			    		<img src="../assets/img/detail-ban.png"/>
			    	</mt-swipe-item>
			    </mt-swipe>
				</div>
				<!--商品介绍-->
				<div class="good-box">
					<h3 class="good-title">{{good.goodTitle}}----{{a}}</h3>
					<div class="good-price">价格：<b>￥{{good.goodPrice}}</b></div>
					<div class="good-jifen">兑换积分：<b>￥{{good.goodScore}}</b></div>
					<ul class="good-xiaoshou row-lr">
						<li>快递：{{good.goodDeliver}}</li>
						<li>销量：{{good.goodSellNum}}</li>
						<li>{{good.goodAddress}}</li>
					</ul>
				</div>
				
 				<ul class="mui-table-view good-attr">
		        <li @click="addCar(3)" class="mui-table-view-cell">
		            <a class="mui-navigate-right">
		              		请选择商品属性
		            </a>
		        </li>
		    </ul>
		  	<ul class="mui-table-view">
		        <li class="mui-table-view-cell">
		            <a class="mui-navigate-right">
		              	商品评价(0)
		            </a>
		        </li>
		    </ul>
				
				<div class="goto-shop row-lr">
					<p class="row-l">
						<img src="../assets/img/shop-ico.png"/>
						<span class="shop-name">富群仓库超市</span>
					</p>
					<router-link to="/store">进入店铺</router-link>
				</div>
				
				<div class="drop-up">
					继续拖动，查看图文详情
				</div>
				<transition name="fade">
					<div v-if="tuwenShow" class="tuwen">
						<div class="comment-box">
							<h4>宝贝评价({{good.commentNum}})</h4>
							<dl>
								<dt class="row-l">
									<img src="../assets/img/icon_baiye_hunyuqinzi.png"/>
									<span class="user">{{good.commentName}}</span>
									<p class="row-l">
										<em><img src="../assets/img/icon_baiyelianmeng_default.png"/></em>
										<em><img src="../assets/img/icon_baiyelianmeng_default.png"/></em>
									</p>
								</dt>
								<dd>
									<span class="time">{{good.commentTime}}</span>
									<span>{{good.commentText}}</span>
								</dd>
							</dl>
							<div @click="allComment" class="see-all">查看全部评价</div>
						</div>
						<div class="img-detail-box">
							<h4>图文详情</h4>
							<div class="img-box">
								<img v-for="item in good.tuwenList" :src="item"/>
							</div>
							
						</div>
					</div>
				</transition>
			</mt-loadmore>	
		</div>
		<div class="detail-bot row-lr">
			<ul class="row-lr">
				<li class="row-c"><img src="../assets/img/jf-car.png"/></li>
				<li class="row-c"><img src="../assets/img/jf-car.png"/></li>
				<li class="row-c"><img src="../assets/img/jf-car.png"/></li>
			</ul>
			<div @click="addCar(3)" class="add-car">加入购物车</div>
			<div @click="buying" class="change-now">马上兑换</div>
		</div>
		
		<div v-if="showAttrBox" class="gray-wrap">
			<div class="good-attr-box">
				<div class="top">
						<dl class="row-l">
							<dt><img src="../assets/img/good-attr-img.png"/></dt>
							<dd class="col-u">
								<b class="good-price">￥{{good.goodPrice}}</b>
								<span class="goog-kucun">库存{{good.goodStock}}件</span>
								<div class="selected row-l">
									已选：
									<span v-for="a in hasSelect">{{a}}</span>
									<!--<span>L</span>-->
								</div>
							</dd>
						</dl>
				</div>
				<div class="mid">
					<div class="mid-item" v-for="(item,index) in good.attrSelect">
						<h4>{{item.title}}</h4>
						<ul class="row-l">
							<li @click="selecting(index,n)" v-for="(it,n) in item.options" :class="{'active':it.isSelect==1}">{{it.text}}</li>
							<!--<li>白色</li>-->
						</ul>
					</div>
				</div>
				<div class="bot row-lr">
					<span>购买数量</span>
					<p class="row-l"><em @click="reduceNum"></em><span>{{buyNum}}</span><em @click="addNum"></em></p>
				</div>
				<button @click="sureAddCar" type="button" class="mui-btn mui-btn-danger mui-btn-block attr-sure">确定</button>
				<div @click="attrHide" class="attr-close"><img src="../assets/img/attr-close.png"/></div>
			</div>
		</div>
		
		
		
		
		
  </div>
</template>

<script>
import {Toast,Loadmore} from 'mint-ui'

//import router from './router'
export default {
  name: 'detail',
  data () {
    return {
    	good:null,
      msg: '',
      id:'',
      tuwenShow:false,
      showAttrBox:false,
      options:true,
      a:999,
      attrSelect:[
      	{'title':'颜色分类','options':[{'isSelect':1,'text':'黑色'},{'isSelect':0,'text':'白色'}]},
      	{'title':'尺码','options':[{'isSelect':1,'text':'S'},{'isSelect':0,'text':'M'},{'isSelect':0,'text':'L'},{'isSelect':0,'text':'XL'}]},

      ],
      buyNum:1
    }
  },
  created(){
  	console.log('created')
  },
  mounted(){
  	

  	
  	
//		console.log(this.$route)
  	this.options=this.$route.params.id;
  },
  computed:{
  	hasSelect(){
			var arr=[];
			this.good.attrSelect.forEach(function(el){
				el.options.forEach(function(el){
					if(el.isSelect==1){
						arr.push(el.text)
					}
				})
			})
			return arr;
		}
  },
  methods:{
  	top(){//下拉刷新方法
  		console.log(12);
  		setTimeout(()=>{
  			this.$refs.loadmore.onTopLoaded();
  		},1000)
  		
  	},
  	bottom(){//上拉加载更多方法
  		setTimeout(()=>{
  			this.tuwenShow=true;
  			this.$refs.loadmore.onBottomLoaded();
  		},1000)
  		console.log(35)
  	},
  	showComment(){//点击导航评价滚动到相应的位置
  		this.tuwenShow=true;
  		this.$nextTick(()=>{
  			console.log($('.detail-content').get(0).scrollHeight,document.body.clientHeight)
	  		var top=$('.drop-up').get(0).getBoundingClientRect().top;
	  		var oldTop=$('.detail-content').scrollTop();
	  		var tt=top+oldTop
	//		var n=0;
	  		var time;
	  		time=setInterval(()=>{
	  			if(top>0){
	  				if(oldTop>=tt-30){
		  				clearInterval(time);
		  			}
						$('.detail-content').scrollTop(oldTop+=30);
	  			}else{
	  				if(oldTop<=tt+50){
		  				clearInterval(time);
		  			}
	  				$('.detail-content').scrollTop(oldTop-=30);
	  			}
	  		},17)
	  	})
  	},
		showImg(){//点击导航详情滚动到相应的位置
			this.tuwenShow=true;
			this.$nextTick(()=>{
		  	var	top=$('.img-detail-box').get(0).getBoundingClientRect().top;
				var oldTop=$('.detail-content').scrollTop();
				var tt=top+oldTop
				var time;
				time=setInterval(()=>{
					if(top>0){
						if(oldTop>=tt-100){
			  				clearInterval(time);
			  			}
							$('.detail-content').scrollTop(oldTop+=30);
					}else{
						if(oldTop<=tt){
			  				clearInterval(time);
			  			}
						$('.detail-content').scrollTop(oldTop-=30);
					}
				},17)
			})
		},
		addCar(id){//显示商品属性面板
			console.log(id)
			this.showAttrBox=true;
		},
		reduceNum(){//减少商品数量
			console.log(this.buyNum)
			if(this.buyNum==1){
				return;
			}
			this.buyNum--
		},
		addNum(){//添加商品数量
			this.buyNum++;
		},
		sureAddCar(){
			console.log('已经加入购物车');
			this.showAttrBox=false;
		},
		attrHide(){//隐藏商品属性面板
			this.showAttrBox=false;
		},
		selecting(index,n){//选择商品属性
			console.log(index)
			this.good.attrSelect[index].options.forEach((el)=>{
				el.isSelect=0
			})
			this.good.attrSelect[index].options[n].isSelect=1;
			
		},
		gotoCar(){//前往购物车
			this.$router.push({name:'shopCar'})
		},
		buying(){//立即购买
			this.$router.push('/buy')
		},
		allComment(){//查看全部评论
			this.$router.push({name:'comment'})
		}
  },
  beforeRouteEnter (to, from, next) {
         // 在渲染该组件的对应路由被 confirm 前调用
         // 不！能！获取组件实例 `this`
         // 因为当钩子执行前，组件实例还没被创建
       	console.log(to)
       	//把当前的组件传递进去，跳到目标页面之后就可以获取目标页面的实例。
        next(detail=>{
        	detail.$http.get('/api/jifenDetail').then(res=>{
						console.log(res.body.data.good);
						detail.good=res.body.data.good;
						console.log(detail.good);
					},err=>{
						console.log(err)
					})
        	
        	
        	console.log(detail.a);
        	detail.a=to.params.id;
        	
        });
  },
  beforeRouteUpdate (to,from,next){
  	console.log(123456)
  },
  beforeRouteLeave (to,from,next){
//	console.log(this.a)
//	this.a=to.params.id;
  	next();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mui-content{
	padding:50px 0 0;
	height: calc(100vh - 50px);
	overflow: auto;
}
a{
	color: #333;
}
.detail-banner{
	width: 100%;
	height: 350px;
}
.detail-header{
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	width: 100%;
	height: 50px;
	background: #fff;
	padding-left:10px;
	ul{
		margin-right: -20px;
		li{
			display: inline-block;
			padding: 0 5px;
			border-bottom: 2px solid transparent;
			&.active{
				border-bottom: 2px solid #D60A16;
				a{
					color: #D60A16;
				}
			}
		}
		
	}
	em{
		display: flex;
		width: 20px;
		height: 20px;
	}
	b{
		display: flex;
		width: 30px;
		height: 25px;
		margin-left: 10px;
	}
}
.good-box{
	padding: 10px 15px;
	margin-bottom: 10px;
	background: #fff;
	h3{
		font-weight: normal;
		font-size: 18px;
		line-height: 1.5;
	}
	>div{
		color: #666;
		margin-bottom:15px ;
		b{
			color: #D60A16;
		}
	}
	ul{
		color: #999;
		font-size: 15px;
	}
}
.good-attr{
	margin: 10px 0;
}
.goto-shop{
	padding: 10px 15px;
	background: #fff;
	margin: 10px 0;
	p{
		margin:0;
		img{
			width: 40px;
			height: 40px;
			margin-right: 20px;
		}
		span{
			font-size: 18px;
			color: #333;
		}
	}
	a{
		padding: 5px 8px;
		border: 1px solid #D60A16;
		color:#D60A16;
		border-radius: 20px;
		font-size: 15px;
	}
}
.drop-up{
	width: 100%;
	height: 50px;
	line-height: 50px;
	text-align: center;
	color: #5f5f5f;
}

/*图文详情*/
.tuwen{
	font-size: 15px;
}
.comment-box{
	width: 100%;
	color: #333;
	padding: 15px;
	background: #fff;
	margin-bottom: 10px;
	h4{
		margin: 0;
		font-size: 16px;
		margin-bottom: 15px;
		font-weight: normal;
	}
	dl{
		
		dt{
			img{
				width: 20px;
				height: 20px;
				margin-right: 10px;
				height: auto;
			}
			.user{
				font-size: 15px;
				margin-right:15px;
			}
			em{
				display: inline-block;
				width: 15px;
				height: 15px;
				margin-right: 5px;
			}
		}
		dd{
			margin-top: 20px;
			font-size: 14px;
			.time{
				margin-right: 15px;
			}
		}
	}
	.see-all{
			width: 160px;
			height: 40px;
			line-height: 40px;
			text-align: center;
			border: 1px solid #D60A16;
			border-radius: 40px;
			margin: 20px auto ;
		}
}
.img-detail-box{
	h4{
		width: 120px;
		padding:0 20px;
		height: 60px;
		line-height: 60px;
		text-align: center;
		font-weight: normal;
		margin: 0 auto;
		position: relative;
		&:before{
			content: "";
			width: 50px;
			height: 1px;
			background: #ccc;
			position: absolute;
			top: 49%;
			left: 100%;
		}
		&:after{
			content: "";
			width: 50px;
			height: 1px;
			background: #ccc;
			position: absolute;
			top: 49%;
			right: 100%;
		}
	}
	.img-box{
		img{
			display: block;
		}
	}
	
}








.detail-bot{
	width: 100%;
	height: 50px;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 999;
	background: #fff;
	text-align: center;
	color: #fff;
	>div{
		width: 30%;
		height: 100%;
		line-height: 50px;
	}
	.add-car{
		background: #ff6602;
	}
	.change-now{
		background: #D60A16;
	}
	ul{
		width:40%;
		height: 100%;
		align-items: stretch;
		li{
			flex: 1;
			border-right: 1px solid #ccc;
			&:last-child{
				border-radius: 0;
			}
			img{
				width: 20px;
				height: 20px;
			}
		}
	}
}

/*商品属性选择*/
.gray-wrap{
	width: 100%;
	height: calc(100vh - 50px);
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(0,0,0,0.5);
	z-index: 999;
	.good-attr-box{
		width: 100%;
		background: #fff;
		position: absolute;
		bottom: 0;
		left: 0;
		padding: 15px 0 0;
		.top{
			padding: 0 15px;
			dl{
				align-items: flex-start;
			}
			dt{
				width: 110px;
				height: 110px;
				margin-right: 15px;
			}
			dd{
				justify-content: flex-start;
				align-items: flex-start;
				b{
					color: #D60A16;
				}
				.goog-kucun{
					margin: 8px 0;
				}
				.selected{
					span{
						margin-right: 15px;
						
					}
				}
			}
		}
		.mid{
			width: 100%;
			max-height: 200px;
			overflow: auto;
			padding: 10px 15px;
			.mid-item{
				padding: 15px 0;
				border-bottom: 1px solid #ccc;
			}
			h4{
				font-size: 16px;
				margin-bottom: 10px;
				font-weight: 700;
			}
			ul{
				flex-wrap: wrap;
				li{
					margin-right: 10px;
					padding: 5px 10px;
					border-radius:5px ;
					background: #f8f8f8;
					
					&.active{
						background: #fa0527;
						color: #fff;
					}
					
				}
			}
		}
		.bot{
			width: 100%;
			padding: 15px;
			border-bottom: 1px solid #ccc;
			margin-bottom: 15px;
			em{
				font-style: normal;
				&:nth-of-type(1){
					background: #e9e9e9 url(../assets/img/red.png) no-repeat center center;
					background-size: 15px 15px;
				}
				&:nth-of-type(2){
					background:#e9e9e9 url(../assets/img/add.png) no-repeat center center;
					background-size: 15px 15px;
				}
			}
			
			p{
				em{
					display: inline-block;
					width: 30px;
					height: 30px;
					line-height: 30px;
					text-align: center;
					border: 1px solid #ccc;
				}
				span{
					display: inline-block;
					width: 40px;
					height: 30px;
					line-height: 30px;
					text-align: center;
					border-top: 1px solid #ccc;
					border-bottom: 1px solid #ccc;
				}
			}
		}
		.attr-sure{
			margin-bottom: 0;
			border-radius: 0;
			background: #fa0527;
		}
		.attr-close{
			position: absolute;
			width: 30px;
			height: 30px;
			top: 15px;
			right: 15px;
		}
	}
}




.mui-table-view:before{
	height: 0 !important;
}
.mui-table-view:after{
	height: 0;
}
</style>

<style type="text/css" lang="scss">
.detail-banner{
	/*height: 150px;*/
	.mint-swipe-indicator.is-active{
		background: #e21585;
		opacity: 1;
	}
	
}


</style>
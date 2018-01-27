<template>
  <div class="baiye modal-show mui-content">
  	<!--<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <h1 class="mui-title">百业联盟</h1>
  	</header>-->
  	<div class="search">
  		<div class="mui-input-row mui-search">
  	    <input type="search" class="mui-input-clear" placeholder="">
  		</div>
  		<div class="search-btn">搜索</div>
  	</div>
  	
  	
 		<div class="mui-content baiye-content">
			<div class="by-banner">
				<mt-swipe>
		    	<mt-swipe-item>
		    		<img src="../assets/img/baiye_banner.png"/>
		    	</mt-swipe-item>
		    	<mt-swipe-item>
		    		<img src="../assets/img/baiye_banner.png"/>
		    	</mt-swipe-item>
		    	<mt-swipe-item>
		    		<img src="../assets/img/baiye_banner.png"/>
		    	</mt-swipe-item>
		    </mt-swipe>
			</div>
 		  <div class="classsify">
 		  	<ul class="row-l">
 		  		<li class="col-c" v-for="item in classifyList" :id="item.id">
 		  			<img :src="item.src"/>
 		  			<span>{{item.texts}}</span>
 		  		</li>
 		  	</ul>
 		  </div>
 		  
 		  <div class="good-list" v-if="allData.length>0">
 		  	<div :class="{'top-menu-box':bind,'fixed-box':fixedMenu==1}">
	 		  	<ul class="top-menu row-lr">
	 		  		<li v-for="(i,index) in allData" @click="showMenu(index,$event)" ref="showMenu" class="row-c">
	 		  			<span>{{i.btnText}}</span>
	 		  			<em :class="{'emActive':itemShow==index}"></em>
	 		  		</li>
	 		  	</ul>
	 		  	<div class="item-list">
		 		  	<div :class="{'item':bind,'itemShow':itemShow==i}" v-for="(item,i) in allData">
			 		  	<dl class="row-lr show-dl">
			 		  		<dt>
			 		  			<h4>全部</h4>
			 		  			<ul class="dt-ul">
			 		  				<li v-for="(it,index) in item.firstClassify" @click="select1(index)" :class="{'active':index==showIndex}">{{it.fcTitle}}</li>
			 		  			</ul>
			 		  		</dt>
			 		  		<dd>
			 		  			<h4>全部</h4>
			 		  			<div class="second-ul-list">
			 		  				<ul v-for="(ite,index) in item.firstClassify" :class="{'dd-ul':bind,'showUl':index==showIndex}">
				 		  				<li v-for="(it,i) in ite.sceondClassify" @click="selected(i)" :class="{'active':i==selectIndex}">{{it.secondTitle}}</li>
				 		  			</ul>
			 		  			</div> 		  			
			 		  		</dd>
			 		  	</dl>
		 		  	</div>
	 		  	</div>
 		  	</div>
 		  	
 		  	<div class="good-content">
 		  		<div class="dl-list">
 		  			<router-link to="/baiyeShop">
	 		  			<dl class="row-lr" v-for="item in 5">
	 		  				<dt>
	 		  					<img src="../assets/img/baiyeshangpin_img.png"/>
	 		  				</dt>
	 		  				<dd>
	 		  					<h4 class="dd-heading">
	 		  						好再来蛋糕店
	 		  					</h4>
	 		  					<div class="star">
	 		  						<em v-for="item in 5"></em>
	 		  					</div>
	 		  					<p>111人消费</p>
	 		  					<p class="row-lr"><span>江夏</span><span>距离1.1km</span></p>
	 		  					<p class="p-bot row-l">
	 		  						<em><img src="../assets/img/icon_phone.png"/></em><span>好再来千层蛋糕8英寸只需60元好再来千层蛋糕8英寸只需60元</span>
	 		  					</p>
	 		  				</dd>
	 		  			</dl>
	 		  		</router-link>
 		  		</div>
 		  	</div>
 		  </div>
 		    
 		
		  	
		  	
		  	
		  	
		  	
			
		</div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
import mui from 'mui'
export default {
  name: 'test',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showIndex:1,
      selectIndex:0,
      itemShow:-1,
      bind:true,
      mask:null,
      allData:[],
      fixedMenu:-1,
      classifyList:[
      	{src:'../src/assets/img/icon_baiye_meishi.png',texts:'美食美食',id:1},
      	{src:'../src/assets/img/icon_baiye_shenghuochaoshi.png',texts:'生活超市',id:2},
      	{src:'../src/assets/img/icon_baiye_jiudianzhusu.png',texts:'酒店住宿',id:3},
      	{src:'../src/assets/img/icon_baiye_xiuxianyule.png',texts:'休闲娱乐',id:4},
      	{src:'../src/assets/img/icon_baiye_jiaoyupeixun.png',texts:'培训教育',id:5},
      	{src:'../src/assets/img/icon_baiye_lirenmeifa.png',texts:'丽人美发',id:6},
      	{src:'../src/assets/img/icon_baiye_lvyoujingdian.png',texts:'旅游景点',id:7},
      	{src:'../src/assets/img/icon_baiye_hunyuqinzi.png',texts:'婚育亲子',id:8},
      	{src:'../src/assets/img/icon_baiye_shenghuofuwu.png',texts:'生活服务',id:9},
      	{src:'../src/assets/img/icon_baiye_quanbufenlei.png',texts:'全部分类',id:10},
      ]
    }
  },
  activated(){
//	遮罩层显示出来
		this.mask = mui.createMask(()=>{
			this.itemShow='-1';
			$('body').css({'height':'100%','overflow':'auto'})
		})
		console.log('遮罩层显示出来');
		console.log('我又想隐藏遮罩层');
		//获取数据
		this.$http.get('mock/baiye.json').then(response => {
        var all=response.data.all;
        this.allData=all;
        console.log('baiye')
    }, response => {
        console.log("error");
    });
    window.addEventListener('scroll',this.scrollFn);
  },
  deactivated(){
  	console.log(132)
  	window.removeEventListener('scroll',this.scrollFn)
  },
  mounted(){
  	console.log('百业联盟页面添加注释')
  },
  methods:{
  	scrollFn(){
  		var t=$('.baiye-content .good-list')[0].getBoundingClientRect().top;
			if(t<=45){
       		this.fixedMenu=1;
			}else{
	       		this.fixedMenu=-1;
			}
  	},
  	showMenu(index,ev){
  		var oddIndex=this.itemShow;
  		var newIndex=index;
  		if(oddIndex==newIndex){
  			this.itemShow=-1;
			this.mask.close();
			this.mask.close();
  			$('body').css({'height':'100%','overflow':'auto'})
  			return;
  		}
			this.itemShow=index;
			this.mask.show()
			$('body').css({'height':'100%','overflow':'hidden'})
  		var target=ev.target
  		var parent=$(target).parents('ul').next();
  		var top=parent[0].getBoundingClientRect().top;
  		$('.mui-backdrop').css({'top':top+'px','z-index':11})
  	},
  	select1(index){
  		this.showIndex=index;
  	},
  	selected(i){
  		this.selectIndex=i;
  		this.itemShow=-1;
			this.mask.close();
  		$('body').css({'height':'100%','overflow':'auto'})
  	},
  	toast(index,ev){
  		
//		Toast({
//			message:'数据加载中。。。',
//			duration:2000
//			
//		})
  	}
  },
  beforeDestroy(){
  	window.removeEventListener('scroll',this.scrollFn);
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search{
	width: 100%;
	height: 44px;
	padding: 5px 20px;
	background: #fff;
	position: relative;
	.mui-search{
		width: 80%;
		
	}
	.search-btn{
		position: absolute;
		top: 7px;
		right: 15px;
		width: 15%;
		height: 30px;
		border-radius: 5px;
		text-align: center;
		line-height: 30px;
		background: #2fce6b;
		color: #fff;
		margin-left: 40px;
	}
	
}
.modal-show{
	height: 100%;
	overflow: hidden;
}
.mui-content{
	font-size: 16px;
}
.banner{
	height: 140px;
}
.classsify{
	/*width: 100%;*/
	background: #fff;
	ul{
		flex-wrap: wrap;
		padding: 10px 0;
		li{
			width: 20%;
			/*padding:5px 0;*/
			margin:10px 0;
			font-size: 14px;
			img{
				width: 40px;
				height: 40px;
				border-radius:50%;
				margin-bottom: 10px;
			}
		}
	}
}
.good-list{
	margin-top: 15px;
	position: relative;
	.top-menu-box{
		width: 100%;
		position: relative;
		
	}
	.fixed-box{
		position: fixed !important;
		top: 0;
		left: 0;
		z-index: 15;
	}
	.top-menu{
		padding: 10px;
		border-bottom:1px solid #ccc;
		background:#fff;
		li{
			padding: 0 25px;
			position: relative;
			span{
				
			}
			em{
				display: inline-block;
				width: 0;
				height: 0;
				border: 5px solid transparent;
				border-top-color: #555;
				position: absolute;
				top: 40%;
				right: 8px;
				transition: .6s;
				
			}
			.emActive{
				transition: .6s;
				transform: rotateZ(180deg);
				transform-origin: 5px 2.5px; 
				
			}
		}
	}
	.item-list{
		overflow: hidden;
		.item{
			overflow: hidden;
			display: none;
		}
		.itemShow{
			display: block;
		}
	}
	.show-dl{
		width: 100%;
		align-items: flex-start;
		position: absolute;
		top: 42px;
		left: 0;
		z-index: 12;
		dt{
			background: #fff;
		}
		dd{
			background: #f1f1f1;
			/*max-height: 300px;
			overflow-y: auto;*/
			.second-ul-list{
				ul{
					display: none;
				}
				.showUl{
					display:block;
				}
			}
		}
		
		dt,dd{
			width: 50%;
			
			h4{
				width: 100%;
				padding: 10px 15px;
				font-weight: normal;
				margin: 0;
			}
			ul{
				width: 100%;
				max-height: 300px;
				overflow-y: auto;
				li{
					padding: 8px 15px;
				}
			}
			.dt-ul{
				background: #fff;
				.active{
					background: #f1f1f1;
					color: #D60A16;
				}
			}
			.dd-ul{
				.active{
					color: #D60A16;
				}
			}
		}
		
	}
	.good-content{
		.dl-list{
			dl{
				align-items: flex-start;
				background: #fff;
				padding: 10px;
				margin-bottom:10px ;
				dt{
					width: 30%;
					margin-right: 3%;
				}
				dd{
					width: 65%;
					.dd-heading{
						margin: 5px 0;
						/*font-weight: normal;*/
						font-size: 16px;
					}
					.star{
						margin:8px 0;
						em{
							display: inline-block;
							width: 15px;
							height: 15px;
							background: pink;
							margin-right:10px; 
						}
					}
					p{
						margin: 8px 0;
					}
					.p-bot{
						width: 100%;
						padding: 5px 0;
						border-top: 1px solid #ccc;
						
						/*display: -webkit-box;
						 -webkit-box-orient: vertical;
						 -webkit-line-clamp: 1;
						 overflow: hidden;*/
						 em{
						 	display: inline-block;
						 	width: 20px;
							height: 20px;
							border-radius: 50%;
							margin-right: 15px;
						 }
						span{
							flex: 1;
							overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						}
					}
				}
			}
		}
	}
}
</style>
<style lang="scss" type="text/css">
	.by-banner{
		height: 120px;
		.mint-swipe-indicator.is-active{
			background: deepskyblue;
			opacity: 1;
		}
	}
</style>

<template>
  <div class="shopCar">
  	<header class="mui-bar mui-bar-nav car-head">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <a class="mui-pull-right car-operate">编辑</a>
  	    <h1 class="mui-title">购物车</h1>
  	</header>
 		<div class="mui-content" id="carBox">
			<div class="store-box">
				<div class="tip-box"></div>
				<div v-for="(store,index1) in fromstorelist" class="store-item">
					<div class="store-name row-l">
						<em @click="storeAllCheck(store)" :class="{'storeActive':store.checked}"></em>
						<h4>{{store.shopName}}</h4>
					</div>
					<div class="good-list">
						<div v-for="(good,index2) in store.list" class="good-item-box">
							<dl class="good-item row-l">
								<dt @click="singleCheck(store,index2)" :class="{'storeActive':good.checked}"></dt>
								<dd class="row-l">
									<img src="../assets/img/good-attr-img.png"/>
									<div class="good-info">
										<p class="title">{{good.goodTitle}}</p>
										<div class="attr row-l">
											<span v-for="size in good.goodSize">{{size}}</span>
										</div>
										<div class="row-lr dd-bot">
											<b class="good-price" :data="good.goodId">￥{{good.goodPrice}}</b>
											<p class="row-l"><em @click="reduceNum(index1,index2)"></em><span>{{good.goodNum}}</span><em @click="addNum(index1,index2)"></em></p>
										</div>
									</div>
								</dd>
							</dl>
							<div class="row-c good-item-bot">
								<div class="row-l zk-jifen">
									<span>折扣积分：</span>
									<p class="row-l"><em></em><span>{{good.goodScore}}</span><em></em></p>
								</div>
								<div class="xianjin">现金：<b>￥{{good.goodPrice}}</b></div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
			<div class="car-bot">
				<dl class="row-lr">
					<dt class="row-l">
						<em @click="selectAll(quanxuan)" :class="{'allSelect':quanxuan}"></em>
						<span>全选</span>
					</dt>
					<dd class="row-lr">
						<div class="car-bot-zk">折扣积分：<b>￥500</b></div>
						<div class="heji col-c">
							<p>合计：<b>￥{{totalPrice}}</b></p>
							<p>兑换积分：<b>500</b></p>
						</div>
						<div class="jiesuan">结算({{account}})</div>
					</dd>
				</dl>
			</div>
			
			
		</div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
import tProps from './testprops.vue'
import {mapState} from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
export default {
  name: 'shopCar',
  components:{
  	tProps
  },
  data () {
    return {
    	testNum:123,
      msg: 'Welcome to Your Vue.js App',
      list:[],
      totalPrice:0,
      quanxuan:false,
      account:0,
      fromstorelist:[]
      
    }
  },
  created(){
			console.log()
  },
	mounted(){
		let data=this.$store.state.carGoodList;
		data.forEach((el)=>{
				this.$set(el,'checked',false);
					el.list.forEach((el)=>{
						this.$set(el,'checked',false);
					})
			})
		this.fromstorelist=data;
		console.log('activated')
		$('#carBox').get(0).addEventListener('scroll',this.scrollFn)
		
	  
		
	},
  computed:{
  	numbers(){
  		return 999
  	},
  	ii(){
			return 888
		},
  	...mapState({
			goodListFormStore:'carGoodList',//this.	goodListFormStore==this.$store.state.goodListFormStore
			
		  }),
		...mapGetters({
		  // 映射 `this.doneCount` 为 `store.getters.doneTodosCount`
		  goodNum: 'goodNum'
		})
  },
  methods:{
  	...mapActions({
  		yy:'otheroperate'
  	}),
  	syncAdd(){
//		this.$store.dispath('syncAdd');
  		this.$store.dispatch('syncAdd',{title:'异步青春',price:10010,id:10086})
  	},
  	...mapMutations({
  		aff:'addToCar'
  	}),
  	receive(num){
  		this.testNum=this.testNum+1;
  		console.log(this.testNum+num)
  	},
  	changee(){
  		this.testNum=this.testNum+1;
  		console.log(this.testNum)
  	},
  	delGood(n){
  		this.$store.commit('delGood',{title:'青春靓丽装',price:11111111,id:222222222})
  	},
  	addToCar(n){
  		this.$store.commit('addToCar',{title:'青春靓丽装',price:99999,id:88888})
  	},
  	reduceNum(n1,n2){//减少商品数量
			console.log(n1,n2);
			if(this.fromstorelist[n1].list[n2].goodNumber==1){
				return;
			}
				this.fromstorelist[n1].list[n2].goodNumber--;
			this.allPrice();
				
		},
		addNum(n1,n2){//添加商品数量
			console.log(n1,n2)
			this.fromstorelist[n1].list[n2].goodNumber++;
			this.allPrice();
			
		},
		storeAllCheck(store){//选择店铺
			if(typeof store.checked==="undefined"){
				this.$set(store,'checked',true);
			}else{
				store.checked=!store.checked;
			}
			console.log(store)
			if(store.checked==true){
				store.list.forEach((el)=>{
					this.$set(el,'checked',true);
				})
			}else{
				store.list.forEach((el)=>{
					this.$set(el,'checked',false);
				})
			}
			this.storeNum();
			this.allPrice();
			this.acc();
		},
		singleCheck(store,n2){//单个选择商品
			console.log(store)
			let len=store.list.length;
			let n=0;
			if(typeof store.list[n2].checked==="undefined"){
				this.$set(store.list[n2],'checked',true);
			}else{
				store.list[n2].checked=!store.list[n2].checked;
			}	
			store.list.forEach((el)=>{
				if(el.checked){
					n++;
				}
			})
			if(len==n){
				if(typeof store.checked==="undefined"){
					this.$set(store,'checked',true);
				}else{
					store.checked=true;
				}
			}else{
				store.checked=false;
			}
			console.log(len,n);
			this.storeNum();
			this.allPrice();
			this.acc();
		},
		storeSelect(){
			
		},
		allPrice(){//计算总价格方法
//			this.totalPrice=0;
			let singlePrice=0;
			this.fromstorelist.forEach((el,index)=>{
				el.list.forEach((el,index)=>{
					if(el.checked===true){
						singlePrice+=el.goodNum*el.goodPrice
					}
				})
			})
			this.totalPrice=singlePrice;
		},
		selectAll(){//全选功能
			this.quanxuan=!this.quanxuan;
			if(this.quanxuan==true){
				this.fromstorelist.forEach((el)=>{
					el.checked=true;
					
					el.list.forEach((el)=>{
						el.checked=true;
					})
				})	
			}else{
				this.fromstorelist.forEach((el)=>{
					el.checked=false;
					
					el.list.forEach((el)=>{
						el.checked=false;
					})
				})	
			}
			this.allPrice();
			this.acc();
		},
		storeNum(){
			let storeN=this.fromstorelist.length;
			let n=0;
			this.fromstorelist.forEach((el)=>{
				if(el.checked==true){
					n++;
				}
			})
			if(storeN==n){
				this.quanxuan=true;
			}else{
				this.quanxuan=false;
			}
		},
		acc(){
			let accNum=0;
			this.fromstorelist.forEach((el)=>{
				el.list.forEach((el)=>{
					if(el.checked==true){
						accNum++;
					}
				})
			})
			this.account=accNum;
		},
		scrollFn(){
			var boxH=$('.mui-content').get(0).scrollHeight;
			var boxScrollH=$('.mui-content').scrollTop();
			var boxClientH=$('.mui-content').get(0).offsetHeight;
			console.log(boxH,boxScrollH,boxClientH)
			if(boxScrollH+boxClientH==boxH){
				console.log(123)
				$('.tip-box').animate({'bottom':'-50px','opacity':1},300,function(el){
					$('.tip-box').animate({'opacity':0},1500,function(){
						$('.tip-box').animate({'bottom':'-100px'})
					})
				})
				this.bot=true;
			}else{
				this.bot=false;
				$('.tip-box').animate({'bottom':'-100px'},200)
			}
		}
		
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mui-content{
	height: calc(100vh - 50px);
	overflow: auto;
	
}

.car-head{
	h1{
		font-size: 18px;
	}
	.car-operate{
		padding: 10px;
		font-size: 16px;
	}
}
/*购物车商店*/
.store-box{
	position: relative;
	overflow: hidden;
	.tip-box{
		width: 100%;
		height: 100px;
		position: absolute;
		bottom: -100px;
		left: 50%;
		z-index: 1000;
		transform: translateX(-50%);
		background: rgba(55,104,215,0.5);
		opacity: .2;
		border-radius:50% ;
	}
	.store-item{
		margin-bottom: 10px;
		.storeActive{
			background:url(../assets/img/store-active.png) no-repeat center center;
			background-size: 100% 100%;
			border: 0 !important;
		}
		.store-name{
			padding: 15px;
			background: #fff;
			em{
				display: inline-block;
				width: 20px;
				height: 20px;
				border: 1px solid #ccc;
				border-radius: 50%;
				margin-right: 15px;
			}
			h4{
				font-weight: normal;
				position: relative;
				font-size: 17px;
				&:after{
					content: "";
					position: absolute;
					top:3px;
					right: -15px;
					width: 10px;
					height: 10px;
					border-top: 1px solid #ccc;
					border-right: 1px solid #ccc;
					transform: rotateZ(45deg);
				}
			}
		}
	}
	.good-list{
		.good-item-box{
			background: #f8f8f8;
			.good-item{
				padding: 15px;
			}
			dt{
				width: 20px;
				height: 20px;
				border: 1px solid #ccc;
				border-radius: 50%;
				margin-right: 15px;
			}
			dd{
				flex: 1;
				align-items: flex-start;
				img{
					width: 100px;
					height: 100px;
					margin-right: 15px;
				}
				.good-info{
					flex: 1;
					.title{
						font-size: 15px;
						color: #333;
						/*margin-bottom: 5px;*/
					}
					.attr{
						color: #666;
						font-size: 15px;
						margin: 5px 0;
						span{
							margin-right: 15px;
						}
					}
					.dd-bot{
						b{
							color: #D60A16;
						}
						p{
							em{
								display: inline-block;
								width: 30px;
								height: 30px;
								line-height: 30px;
								text-align: center;
								border: 1px solid #ccc;
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
				}
			}
		}
		.good-item-bot{
			padding: 15px;
			background: #fff;
			font-size: 15px;
			color: #666;
			.zk-jifen{
				margin-right: 40px;
				p{
					em{
						display: inline-block;
						width: 30px;
						height: 30px;
						line-height: 30px;
						text-align: center;
						border: 1px solid #ccc;
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
			.xianjin{
				b{
					color: #D60A16;
				}
			}
		}
	}
}
.car-bot{
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 999;
	height: 50px;
	font-size: 16px;
	padding-left:15px ;
	background: #fff;
	b{
		color: #D60A16;
	}
	dt{
		em{
			display: inline-block;
			width: 20px;
			height: 20px;
			border: 1px solid #ccc;
			border-radius: 50%;
			margin-right: 5px;
			&.allSelect{
				background:url(../assets/img/store-active.png) no-repeat center center;
				background-size: 100% 100%;
				border: 0 !important;
			}
		}
	}
	dd{
		align-items: flex-end;
		.car-bot-zk{
			font-size: 14px;
			flex: 1;
		}
		.heji{
			width:100px;
			margin: 0 2px;
			align-items: flex-start;
			font-size: 14px;
		}
		.jiesuan{
			width: 80px;
			height: 50px;
			font-size: 15px;
			line-height: 50px;
			text-align: center;
			background: #fa0527;
			color: #fff;
		}
	}
}

</style>

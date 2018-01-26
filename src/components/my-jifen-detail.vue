<template>
  <div class="my-jifen-detail">
  	<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <h1 class="mui-title">我的积分</h1>
  	</header>
 		<div class="mui-content">
			<div class="detail-wrap">
				<ul class="row-lr">
					<li @click="changeMenu(index)" :class="{'active':index==menuIndex}" v-for="(item,index) in 2">收入</li>
					<!--<li>支出</li>-->
				</ul>
					<transition-group tag="div" class="dl-list" name="slided">
						<div v-if="index==menuIndex" class="dl-list-item" v-for="(item,index) in 2" :key="index">
							<dl v-for="(dlItem,i) in 2" :key="i">
								<dt>
										<p class="row-lr">
											<span>订单编号：201712311400{{index}}</span>
											<i>08-11-{{index}}</i>
										</p>
										<p class="row-lr">
											<span>商家：淼鑫猪肚鸡</span>
										</p>	
										<p class="row-lr">
											<span>类型：购买折扣商家</span>
											<i>折扣积分：-200{{index}}</i>
										</p>
								</dt>
							</dl>
							<!--<div @click="change" class="mui-btn">点击</div>
							<transition-group name="slided">
								<h3 v-if="n==index" v-for="(item,index) in 2" :key="index">{{index}}99999999999999</h3>
							</transition-group>-->
						</div>
					</transition-group>
			</div>
		</div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: 'my-jifen-detail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      menuIndex:0,
      n:0
    }
  },
  components:{
  },
  mounted(){
  },
  methods:{
  	changeMenu(index){
  		this.menuIndex=index;
  	},
  	change(){
  		this.n=!this.n;
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
.slided-enter-active,.slided-leave-active{
	transition: all .5s;
}
.slided-enter,.slided-leave-to{
	opacity: 0;
	transform: translateX(100%);
}

.my-jifen-detail{
}
.mui-bar-nav{
	box-shadow: none;
	border-bottom: 1px solid #ccc;
}
.detail-wrap{
	background: #fff;
	
	.dl-list{
		width: 100%;
		height: calc(100vh -  86px);
		position: relative;
		overflow: hidden;
	}
	.dl-list-item{
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: #fff;
		/*display: none;
		&.active{
			display: block;
		}*/
	}
}
ul{
	li{
		width: 50%;
		padding: 10px ;
		border-bottom: 1px solid transparent;
		text-align: center;
		&.active{
			border-bottom-color: #D60A16;
			color: #D60A16;
		}
	}
}
dl{
	width: 100%;
	dt{
		width: 100%;
		padding: 5px 15px;
		border-bottom: 1px solid #ccc;
		p{
			margin: 5px;
		}
	}
}
</style>

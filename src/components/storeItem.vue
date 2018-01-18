<template>
  <div class="storeItem">
  	<transition-group tag="ul" name="list" 
			v-infinite-scroll="loadMore"
				infinite-scroll-disabled="loading"
					infinite-scroll-distance="10" 
			 class="jifen-list row-lr">
			  <li v-for="(goodItem,index) in list" :key="index" class="jifen-list-item">
						<img src="../assets/img/jifen-xie.png" alt="积分兑换商品" />
						<h4 class="heading">真皮时尚皮鞋，品种款式任你挑选</h4>
						<p>零售价：<strong>￥300</strong></p>
						<p class="row-l">
							<span>积分兑换：</span><b>500</b>
						</p>
				</li>
	 		</transition-group>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: 'storeItem',
  props:['list'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
  },
  methods:{
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

		
		.jifen-list{
			/*height: 100%;*/
			padding: 15px 0;
			box-sizing: border-box;
			background: #fff;
			flex-wrap: wrap;
			.jifen-list-item{
				/*height: 100%;*/
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


</style>

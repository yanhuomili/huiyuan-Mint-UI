<template>
  <div class="superGood">
  	<ul class="row-lr">
  		<li v-for="item in superGood">
  			<router-link to="">
  				<dl>
  					<dt>
  						<img :src="item.goodsImg"/>
  					</dt>
  					<dd>
  						<h3>{{item.shopName}}</h3>
  						<span class="price">￥{{item.goodPrice}}</span>
  					</dd>
  				</dl>
  			</router-link>
  		</li>
  	</ul>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: 'superGood',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  props:['superGood'],
  mounted(){
  },
  activated(){
//	console.log(this.superGood)
  },
  methods:{
  },
  computed:{
  },
  watch:{
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.superGood{
	ul{
		width:100%;
		padding: 10px;
		box-sizing: border-box;
		flex-wrap: wrap;
		li{
			width: 48%;
			float: left;
			
		}
		a{
			width: 100%;
			padding: 15px 0;
			box-sizing: border-box;
		}
		dl{
			width: 100%;
			box-sizing: border-box;
			background: #fff;
			margin-bottom: 10px;
			dt{
				img{
					width: 100%;
				}
			}
			dd{
				padding: 5px;
				box-sizing: border-box;
				h3{
					width: 100%;
					padding: 10px 0;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-size: 16px;
				}
				span{
					font-size: 14px;
					color: #D60A16;
				}
			}
		}
	}
}


</style>

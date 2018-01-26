<template>
  <div class="my-deal">
  	<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <h1 class="mui-title">交易明细</h1>
  	</header>
 		<div class="mui-content">
			<div class="deal-list">
				<dl class="row-lr">
					<dt class="col-c">
						<span>提现</span>
						<span>2017-12-30 15:00</span>
					</dt>
					<dd>-100</dd>
				</dl>
				<dl class="row-lr">
					<dt class="col-c">
						<span>提现</span>
						<span>2017-12-30 15:00</span>
					</dt>
					<dd>-100</dd>
				</dl>
				<dl class="row-lr">
					<dt class="col-c">
						<span>提现</span>
						<span>2017-12-30 15:00</span>
					</dt>
					<dd>-100</dd>
				</dl>
			</div>
			
				
			
		</div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: 'my-deal',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  components:{
  },
  mounted(){
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
.my-deal{
}
.mui-bar-nav{
	box-shadow: none;
	border-bottom: 1px solid #ccc;
}
.deal-list{
	width: 100%;
	background: #fff;
	margin: 10px 0;
	dl{
		width: 100%;
		padding: 15px;
		border-bottom: 1px solid #eee;
		dt{
			height: 100%;
			align-items: flex-start;
			span{
				color: #666;
				margin: 5px;
			}
		}
		dd{
			height: 100%;
		}
	}
}
</style>

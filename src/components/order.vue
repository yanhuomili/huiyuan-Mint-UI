<template>
  <div class="order">
    <h2>订单</h2>
    <mt-cell v-for="(item,index) in 10"
		 	is-link
		 	title="标题说明"
		 	:value="index"
		 	></mt-cell>
  </div>
</template>

<script>
import {Cell} from 'mint-ui'
export default {
  name: 'order',
  data () {
    return {
      msg: '',
      index:123
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

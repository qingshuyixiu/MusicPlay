<template>
  <div class="awaitpayment">
    <order-shop-list :id='2'></order-shop-list>
  </div>
</template>
<script>
import OrderShopList from '@/components/OrderShopList.vue'
export default {
  components:{
    OrderShopList
  }
}
</script>
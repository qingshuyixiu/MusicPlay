<template>
  <div class="awaitpayment">
    <order-shop-list @update="update" :now_money="now_money" :id='0'></order-shop-list>
  </div>
</template>
<script>
import OrderShopList from '@/components/OrderShopList.vue'
export default {
  data() {
    return {
      now_money:''
    }
  },
  components:{
    OrderShopList
  },
  methods: {
    update(){
      this.$emit('update');
    }
  },
  created() {
     this.$axios.get('/api/user').then(d=>{
       console.log(d);
       this.now_money=d.data.data.now_money;
     })
  },
}
</script>

<style lang="less">
</style>
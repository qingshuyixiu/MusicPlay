<template>
  <div class="promotionitem">
     <van-swipe class="my-swipe" indicator-color="#fc4141" :autoplay="3000">
      <van-swipe-item v-for="item in banner" :key="item.id">
        <img :src="item.img" alt="" />
      </van-swipe-item>
    </van-swipe>
    <van-divider
      :style="{ color: '#282828', borderColor: '#282828', padding: '0 16px' }"
    >
    促销单品
    </van-divider>
    <promotion-shop :benefit='benefit'></promotion-shop>
  </div>
</template>
<script>
 import PromotionShop from '@/components/PromotionShop.vue'
export default {
  data() {
    return {
      banner:[],
      benefit:[]
    }
  },
  components:{
    PromotionShop
  },
  created() {
    this.$axios.get("/api/groom/list/4").then((d) => {
      console.log(d);
      this.banner = d.data.data.banner;
      this.benefit=d.data.data.list.map((data)=>{
        data = {
            ot_price: data.price,
            store_name: data.store_name,
            sales: data.sales,
            price: data.ot_price,
            image: data.image,
            id: data.id,
            stock:data.stock,
            unit_name:data.unit_name
          };
          return data;
      })
    });
  },
}
</script>
<style lang="less">
.promotionitem{
  .my-swipe {
    width: 100%;
    height: 141px;
    img {
      width: 100%;
      height: 100%;
    }
  }
   .van-divider {
    font-size: 16px;
  }
}
</style>
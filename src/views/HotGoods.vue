<template>
  <div class="hotgoods">
    <van-swipe class="my-swipe" indicator-color="#fc4141" :autoplay="3000">
      <van-swipe-item v-for="item in banner" :key="item.id">
        <img :src="item.img" alt="" />
      </van-swipe-item>
    </van-swipe>
    <van-divider
      :style="{ color: '#282828', borderColor: '#282828', padding: '0 16px' }"
    >
      {{id==1?'精品推荐':id==2?'热门榜单':'首发新品'}}
    </van-divider>
    <shop-list :bastList="bastList"></shop-list>
  </div>
</template>
<script>
import ShopList from "@/components/ShopList.vue";
export default {
  props:['id'],
  data() {
    return {
      banner: [],
      bastList:[]
    };
  },
  components: {
    ShopList,
  },
  created() {
    this.$axios.get("/api/groom/list/"+this.id).then((d) => {
      console.log(d);
      this.banner = d.data.data.banner;
      this.bastList=d.data.data.list.map((data)=>{
        data = {
            ot_price: data.price,
            store_name: data.store_name,
            sales: data.sales,
            price: data.vip_price,
            image: data.image,
            id: data.id,
          };
          return data;
      })
    });
  },
};
</script>
<style lang="less">
.hotgoods {
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
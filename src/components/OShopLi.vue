<template>
  <div class="oshopli">
    <div class="main" v-for="ite in item.cartInfo" :key="ite.id">
        <div class="pic" @click="goshop(ite.productInfo)">
          <img :src="ite.productInfo.image" alt="" />
        </div>
        <div class="text" @click="godetails">
          <div class="lefttitle">
            {{ ite.productInfo.store_name }}
          </div>
          <div class="rightmoney">
            <div class="top">￥{{ite.productInfo.give_integral}}</div>
            <div class="bottom">x{{ ite.cart_num }}</div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  props:["item"],
  methods: {
    godetails(){//进入详情
      this.$router.push('/orderdetails/'+this.item.order_id)
    },
    goshop(e){//进入商品页
      this.$router.push('/commoditydetails/'+e.id)
    }
  },
  created() {
    console.log(this.item)//order_id
  },
}
</script>
<style lang="less" scoped>
.oshopli{
      .main {
      width: 345px;
      height: 60px;
      margin-top: 11px;
      padding: 0 15px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .pic {
        width: 60px;
        height: 60px;
        img {
          width: 60px;
          height: auto;
        }
      }
      .text {
        width: 243px;
        height: 38.4px;
        display: flex;
        justify-content: space-between;
        .lefttitle {
          font-size: 14px;
          width: 153px;
          height: 38.4px;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
        }
        .rightmoney {
          font-size: 14px;
          text-align: right;
          color: #999;
        }
      }
    }
}
</style>
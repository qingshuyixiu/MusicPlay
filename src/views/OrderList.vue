<template>
  <div class="orderlist">
    <div class="header">
      <div class="pictext">
        <div class="text">
          <div class="name">订单信息</div>
          <div>累计订单:{{message.order_count}} 总消费:￥{{message.sum_price}}</div>
        </div>
        <div class="pic">
          <img :src="pic" alt="" />
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="navbox">
        <router-link tag="div" :to="`/orderlist/${active=0}`" class="item">
          <div class="name">待付款</div>
          <div class="num">{{message.unpaid_count}}</div>
        </router-link>
        <router-link tag="div" :to="`/orderlist/${active=1}`" class="item">
          <div class="name">待发货</div>
          <div class="num">{{message.unshipped_count}}</div>
        </router-link>
        <router-link tag="div" :to="`/orderlist/${active=2}`" class="item">
          <div class="name">待收货</div>
          <div class="num">{{message.received_count}}</div>
        </router-link>
        <router-link tag="div" :to="`/orderlist/${active=3}`" class="item">
          <div class="name">待评价</div>
          <div class="num">{{message.evaluated_count}}</div>
        </router-link>
        <router-link tag="div" :to="`/orderlist/${active=4}`" class="item">
          <div class="name">已完成</div>
          <div class="num">{{message.complete_count}}</div>
        </router-link>
      </div>
    </div>
    <div class="listbuy">
      <router-view @update="update"></router-view>
    </div>
  </div>
</template>
<script>
import pic from "@/assets/orderTime.png";
export default {
  data() {
    return {
      pic: pic,
      active: 0,
      message:{}
    };
  },
  methods: {
    update(){
      this.$axios.get('api/order/data').then(d=>{
        console.log(d);
        this.message=d.data.data
      })
    }
  },
  created() {
    this.$axios.get('api/order/data').then(d=>{
      console.log(d);
      this.message=d.data.data
    })
  },
};
</script>
<style lang="less">
.orderlist {
  width: 100%;
  height:auto;
  // background-color: #eee;
  .header {
    width: 100%;
    height: 130px;
    background-color: #e93323;
    padding: 0 15px;
    box-sizing: border-box;
    .pictext {
      height: 95px;
      font-size: 13px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .text {
        .name {
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 10px;
        }
      }
      .pic {
        width: 61px;
        height: 54.5px;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
  .nav {
    width: 345px;
    // height: 70px;
    margin: 0 auto;
    margin-top: -36.5px;
    .navbox {
      width: 100%;
      height: 70px;
      background-color: #fafafa;
      border-radius: 5px;
      font-size: 13px;
      display: flex;
      //  align-items: center;
      text-align: center;
      justify-content: space-evenly;
      .item {
        height: 100%;
        box-sizing: border-box;
        padding: 14.5px 0 10px 0;

        .num {
          margin-top: 5px;
        }
      }
      .router-link-exact-active {
        border-bottom: 2px solid #e93323;
        color: #282828;
      }
    }
  }
}
</style>
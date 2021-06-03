<template>
  <div class="orderpage">
    <div class="orderbox">
      <div class="iconbox">
        <van-icon v-if="pay_type=='yue'" name="success" />
        <van-icon v-if="pay_type!='yue'" name="cross" />
      </div>
      <div class="text">
        {{pay_type=='yue'?'订单支付成功':'订单支付失败'}}
      </div>
      <div class="content">
        <div class="contenttext nomar">
          <div class="left">订单编号</div>
          <div class="right">{{order_id}}</div>
        </div>
         <div class="contenttext">
          <div class="left">下单时间</div>
          <div class="right">{{add_time_y+' '+add_time_h}}</div>
        </div>
         <div class="contenttext">
          <div class="left">支付方式</div>
          <div class="right">{{pay_type=='yue'?'余额支付':'微信支付'}}</div>
        </div>
         <div class="contenttext">
          <div class="left">支付金额</div>
          <div class="right">{{pay_price}}</div>
        </div>
      </div>
      <div class="btn">
        <van-button type="primary" 
        round
        block size="large" color="#e93323"
        :to="`/orderdetails/${order_id}`">查看订单</van-button>
        <van-button type="primary"
        round
        class="goindex"
        block size="large"
        color="white"
        @click="goindex">返回首页</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['id'],
  data() {
    return {
      order_id:'',
      add_time_h:'',//下单时间
      add_time_y:'',//下单日期
      pay_type:'',//支付方式
      pay_price:''//价格
    }
  },
  methods: {
    goindex(){
      this.$router.push('/')
    }
  },
  created() {
    this.$axios.get('api/order/detail/'+this.id).then(d=>{
      console.log(d);
      this.order_id=d.data.data.order_id;
      this.add_time_y=d.data.data.add_time_y;
      this.add_time_h=d.data.data.add_time_h;
      this.pay_type=d.data.data.pay_type;
      this.pay_price=d.data.data.pay_price;
    })
  },
}
</script>
<style lang="less">
.orderpage{
  width: 100%;
  height: 100vh;
  background-color: #eee;
  // padding-top: 95px;
  border: 1px solid #eee;
  box-sizing: border-box;
  .orderbox{
    width: 345px;
    height: 357px;
    background-color: white;
    margin: 0 auto;
    border-radius: 5px;
    border: 1px solid white;
    margin-top: 97.5px;
    box-sizing: border-box;
    .iconbox{
      width: 70px;
      height: 70px;
      margin: 0 auto;
      margin-top: -38px;
      border-radius: 50%;
      background-color: #e93323;
      display: flex;
      justify-content: center;
      align-items: center;
      .van-icon{
        width: 50px;
        height: 50px;
        &::before{
          font-size: 50px;
          color: white;
        }
      }
      
    }
    .text{
        font-size: 16px;
        text-align: center;
        margin: 12.5px 0 18.5px 0;
        font-weight: 700;
      }
    .content{
      width: 315px;
      height: 143.8px;
      box-sizing: border-box;
      margin: 0 auto;
      margin-bottom: 23.5px;
      padding: 17.5px 0;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      .nomar{
        margin: 0 !important;
      }
      .contenttext{
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        .right{
          color: #666;
        }
      }
    }
    .btn{
      width: 100%;
      
      .van-button{
        width: 315px;
        height: 43px;
        margin: 0 auto;
        margin: 0 15px 10px 15px;
      }
      .goindex{
        border-color: #e93323 !important;
        .van-button__content{
          color: #e93323;
          
        }
        
      }
    }
  }
}
</style>
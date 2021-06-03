<template>
  <div class="orderdetails">
    <div class="header">
      <div class="pic">
        <img :src="data.status_pic" alt="" />
      </div>
      <div class="text">
        <div class="bigtext">{{ status._msg }}</div>
        <div class="time">{{ data._pay_time }}</div>
      </div>
    </div>
    <div class="nav">
      <van-steps :active="active" active-color="#e93323">
        <van-step>待付款</van-step>
        <van-step>待发货</van-step>
        <van-step>待收货</van-step>
        <van-step>待评价</van-step>
        <van-step>已完成</van-step>
      </van-steps>
      <div class="silt">
        <div class="name">
          <span>{{ data.real_name }}</span>
          <span class="phone">{{ data.user_phone }}</span>
        </div>
        <div class="silttext">{{ data.user_address }}</div>
      </div>
      <div class="line">
        <img :src="Line" alt="" />
      </div>
    </div>
    <div class="shoplist">
      <van-cell :title="`共${cartInfo.length}件商品`" :border="false" />
      <van-card
        v-for="item in cartInfo"
        :key="item.id"
        :num="item.cart_num"
        :price="item.productInfo.attrInfo.price"
        :desc="item.productInfo.attrInfo.suk"
        :title="item.productInfo.store_name"
        :thumb="item.productInfo.image"
      />
    </div>
    <div class="message">
      <div class="text">
        <div class="left">订单编号：</div>
        <div class="right">{{ data.order_id }}</div>
      </div>
      <div class="text">
        <div class="left">下单时间：</div>
        <div class="right">{{ data._add_time }}</div>
      </div>
      <div class="text">
        <div class="left">订单类型：</div>
        <div class="right">普通订单</div>
      </div>
      <div class="text">
        <div class="left">支付状态：</div>
        <div class="right">已支付</div>
      </div>
      <div class="text">
        <div class="left">支付方式：</div>
        <div class="right">{{ status._payType }}</div>
      </div>
    </div>
    <div class="money">
      <div class="text">
        <div class="left">支付金额:</div>
        <div class="right">￥{{ data.total_price }}</div>
      </div>
      <div class="texts">
        <div class="left">运费:</div>
        <div class="right">￥{{ data.total_postage }}</div>
      </div>
      <van-cell>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <div class="moneys">
            实付款：<span>￥{{ data.pay_price }}</span>
          </div>
        </template>
      </van-cell>
    </div>
    <div class="box"></div>
    <div class="bottom" v-if="this.active == 1">
      <van-button round type="info" class="cancel" color="white"
        >申请退款</van-button
      >
    </div>
    <div class="bottom" v-if="this.active == 0">
      <van-button
        @click="cancle(data.order_id)"
        type="primary"
        round
        color="white"
        class="cancel"
        >取消订单</van-button
      >
      <van-button
        @click="buy(data.order_id)"
        type="primary"
        round
        color="#e93233"
        >立即付款</van-button
      >
    </div>
    <div class="selectmoney">
      <van-popup
        v-model="show"
        round
        position="bottom"
        closeable
        :style="{ height: '30%' }"
      >
        <div class="text">请选择付款方式</div>
        <div class="balance">
          <div class="balancemoney"
          @click="yue(id)"
          >
            <div class="left">
              <svg
                t="1622019141143"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2385"
                width="24"
                height="24"
              >
                <path
                  d="M768 250.311111l-11.377778 5.688889c-68.266667 59.733333-156.444444 91.022222-244.622222 91.022222-91.022222 0-176.355556-31.288889-244.622222-91.022222L256 250.311111C119.466667 335.644444 25.6 483.555556 25.6 625.777778c0 219.022222 219.022222 398.222222 486.4 398.222222 267.377778 0 486.4-179.2 486.4-398.222222 0-142.222222-93.866667-290.133333-230.4-375.466667z m-113.777778 438.044445c17.066667 0 28.444444 14.222222 28.444445 28.444444 0 17.066667-14.222222 28.444444-28.444445 28.444444h-113.777778v62.577778c0 17.066667-14.222222 28.444444-28.444444 28.444445-17.066667 0-28.444444-14.222222-28.444444-28.444445v-62.577778h-113.777778c-17.066667 0-28.444444-14.222222-28.444445-28.444444 0-17.066667 14.222222-28.444444 28.444445-28.444444h113.777778v-68.266667h-113.777778c-17.066667 0-28.444444-14.222222-28.444445-28.444445 0-17.066667 14.222222-28.444444 28.444445-28.444444h68.266666l-48.355555-45.511111c-11.377778-11.377778-11.377778-31.288889 0-42.666667 11.377778-11.377778 31.288889-11.377778 42.666667 0l82.488888 76.8 79.644445-76.8c11.377778-11.377778 31.288889-11.377778 42.666667 0 11.377778 11.377778 11.377778 31.288889 0 42.666667l-48.355556 45.511111H654.222222c17.066667 0 28.444444 14.222222 28.444445 28.444444 0 17.066667-14.222222 28.444444-28.444445 28.444445h-113.777778v68.266667h113.777778z"
                  fill="#FE9C01"
                  p-id="2386"
                ></path>
                <path
                  d="M733.866667 230.4s2.844444 0 0 0C674.133333 281.6 597.333333 312.888889 512 312.888889s-162.133333-31.288889-224.711111-82.488889c-51.2-42.666667-71.111111-85.333333-42.666667-125.155556 22.755556-34.133333 110.933333-25.6 153.6-19.911111 14.222222 2.844444 25.6-5.688889 31.288889-19.911111C446.577778 25.6 477.866667 0 512 0s65.422222 25.6 82.488889 65.422222c5.688889 14.222222 17.066667 22.755556 31.288889 19.911111 42.666667-5.688889 130.844444-14.222222 153.6 19.911111 25.6 39.822222 5.688889 82.488889-45.511111 125.155556z"
                  fill="#FE9C01"
                  p-id="2387"
                ></path>
                <path
                  d="M290.133333 230.4c-51.2-42.666667-71.111111-85.333333-42.666666-125.155556 19.911111-34.133333 108.088889-25.6 150.755555-19.911111 14.222222 2.844444 25.6-5.688889 31.288889-19.911111C446.577778 25.6 477.866667 0 512 0s65.422222 25.6 82.488889 65.422222c5.688889 14.222222 17.066667 22.755556 31.288889 19.911111 42.666667-5.688889 130.844444-14.222222 153.6 19.911111 25.6 39.822222 5.688889 82.488889-42.666667 125.155556"
                  fill="#FE9C01"
                  p-id="2388"
                ></path>
              </svg>
              余额支付
            </div>
            <div class="right">
              <p>可用余额:￥{{now_money}}</p>
            </div>
          </div>
        </div>
        <div class="wx">
          <div class="wxmoney"
          @click="wx(id)"
          >
            <div class="left">
              <svg
                t="1622018946625"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1344"
                width="28"
                height="28"
              >
                <path
                  d="M557.74 507.65a21.17 21.17 0 1 0 21.17 21.17 21.24 21.24 0 0 0-21.17-21.17zM376.45 375.5a24.69 24.69 0 1 0 12.24 21.32 24.76 24.76 0 0 0-12.24-21.32zM512.08 421.47a24.64 24.64 0 1 0-12.25-46 24.22 24.22 0 0 0-12.4 21.32 24.65 24.65 0 0 0 24.65 24.68zM674 507.65a21.17 21.17 0 1 0 21.17 21.17A21.24 21.24 0 0 0 674 507.65z"
                  fill="#07B906"
                  p-id="1345"
                ></path>
                <path
                  d="M512 72C269.17 72 72 269.17 72 512s197.17 440 440 440 440-197.17 440-440S754.83 72 512 72z m-79.16 548.3c-21.16 0-42.18-3.63-61.68-8.77-1.67 0-3.63-1.66-3.63-1.66L320.05 638c-12.25 7.11-21.17 1.66-17.54-12.25 0 0 12.25-51.1 10.58-51.1-45.81-29.95-66.83-68.65-66.83-121.43C249.89 363.41 327.16 293 432.84 293c96.93 0 176 59.72 190.07 139.1h-8.77c-96.92 0-176 67-176 149.54a133.09 133.09 0 0 0 5.29 38.71z m283.36 68.8l14.06 28.27c7.11 12.25 1.66 17.54-10.58 10.59 0 0-35.08-21.17-36.9-19.36-15.87 5.3-51.1 10.59-68.64 10.59-89.82 0-163.75-61.69-163.75-137.29S524.32 444.45 614 444.45s163.75 61.69 163.75 137.29c-0.01 44-22.84 80.75-61.55 107.36z"
                  fill="#07B906"
                  p-id="1346"
                ></path>
              </svg>
              微信支付
            </div>
            <div class="right">
              <p>微信快捷支付</p>
            </div>
          </div>
        </div>
      </van-popup>
    </div>
  </div>
</template>
<script>
import Line from "@/assets/line.jpg";
export default {
  props: ["id"],
  data() {
    return {
      data: {},
      active: 5,
      status: {},
      Line,
      cartInfo: {},
      show: false,
      now_money:'',
      paytype:''
    };
  },
  methods: {
    yue(e){
      this.show=false;
       this.paytype='yue';
        this.$axios.post('/api/order/pay',{
        from: "weixinh5",
        paytype: this.paytype,
        uni:e,
      }).then(d=>{
        console.log(d);
        this.$toast({
          message:'支付成功',
          onClose:()=>{
             this.$router.push('/orderlist')
          }
        })
      })
    },
    wx(e){
      this.show=false;
      this.paytype='weixin'
      this.$axios.post('/api/order/pay',{
        from: "weixinh5",
        paytype: this.paytype,
        uni:e,
      }).then(d=>{
        console.log(d);
        this.$toast({
          message:'支付失败'
        })
      })
    },
    buy(e) {
      console.log(e);
      this.show = true;
    },
    cancle(e) {
      console.log(e);
      this.$dialog
        .confirm({
          title: "提示",
          message: "确认取消该订单?",
          theme: "round-button",
        })
        .then(() => {
          // on confirm
          console.log(e);
          this.$axios
            .post("/api/order/cancel", {
              id: e,
            })
            .then((d) => {
              console.log(d);
              this.$toast({
                message: d.data.msg,
                onClose: () => {
                  console.log(123);
                  this.$router.push("/orderlist");
                },
              });
            });
        });
    },
  },
  created() {
    this.$axios.get("/api/order/detail/" + this.id).then((d) => {
      console.log(d);
      this.data = d.data.data;
      this.status = d.data.data._status;
      this.cartInfo = d.data.data.cartInfo;
      this.active = d.data.data._status._type;
    });
      this.$axios.get('/api/user').then(d=>{
       console.log(d);
       this.now_money=d.data.data.now_money;
     })
  },
};
</script>

<style lang="less">
.orderdetails {
  width: 100%;
  height: 100%;
  background-color: #eee;
  .header {
    width: 100%;
    height: 75px;
    box-sizing: border-box;
    padding: 0 15px;
    background-color: #e93323;
    display: flex;
    align-items: center;
    .pic {
      width: 50px;
      height: 50px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text {
      margin-left: 13.5px;
      color: white;
      .bigtext {
        font-size: 15px;
        font-weight: 700;
        margin-bottom: 3.5px;
      }
      .time {
        font-size: 12px;
      }
    }
  }
  .nav {
    .van-steps--horizontal {
      padding: 12.5px 32.5px 0 32.5px;
      .van-step__title {
        font-size: 13px;
      }
      .van-step__title--active {
        font-weight: 700;
      }
    }
    .silt {
      width: 100%;
      height: 69.3px;
      box-sizing: border-box;
      padding: 12.5px 15px 15px 15px;
      background-color: white;
      .name {
        font-size: 15px;
        .phone {
          margin-left: 20px;
        }
      }
      .silttext {
        font-size: 13px;
        margin-top: 5px;
        color: #868686;
      }
    }
    .line {
      width: 100%;
      height: 1.5px;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  .shoplist {
    margin-top: 10px;
    .van-cell {
      width: 100%;
      height: 43px;
      box-sizing: border-box;
      padding: 0 15px;
      font-size: 15px;
      line-height: 43px;
      border-bottom: 1px solid #eee;
    }
    .van-card {
      margin: 0;
      background-color: white;
      border-bottom: 1px solid #eee;
      .van-card__bottom {
        .van-card__price {
          color: red;
        }
      }
    }
  }
  .message {
    width: 100%;
    height: 167.8px;
    padding: 15px;
    margin-top: 6px;
    box-sizing: border-box;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    .text {
      display: flex;
      font-size: 14px;
      justify-content: space-between;
      height: 21px;
      width: 100%;
      .right {
        color: #868686;
      }
    }
  }
  .money {
    width: 100%;
    height: 129.2px;
    box-sizing: border-box;
    padding: 15px;
    margin-top: 6px;
    background-color: white;
    .text,
    .texts {
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      .right {
        color: #868686;
      }
    }
    .texts {
      margin-top: 10px;
    }
    .van-cell {
      padding: 0;
      padding-top: 15px;
      margin-top: 15px;
      border-top: 1px solid #eee;
      box-sizing: border-box;
      .moneys {
        display: flex;
        justify-content: flex-end;
        span {
          color: #e93323;
          font-weight: 700;
        }
      }
    }
  }
  .box {
    width: 100%;
    height: 50px;
    margin-top: 6px;
  }
  .bottom {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: white;
    padding: 0 15px;
    box-sizing: border-box;
    position: fixed;
    left: 0;
    bottom: 0;

    .van-button {
      width: 88px;
      height: 30px;
      margin: 0 6px;
      //  border: 1px solid #aaa !important;
      // .van-button__content{
      //   .van-button__text{
      //     color: #aaa;

      //   }
      // }
    }
    .cancel {
      color: #999 !important;
      border: 1px solid #999 !important;
    }
  }
  .selectmoney{
     .text {
        font-size: 16px;
        height: 61.5px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        text-align: center;
        border-bottom: 1px solid #eee;
      }
       .balance{
      width: 100%;
      height: 60px;
      background-color: white;
      .balancemoney{
        width: 342.5px;
        height: 44px;
        margin: 0 auto;
        margin-top: 10px;
        box-sizing: border-box;
        border: 1px solid #eee;
        border-radius: 3px;
        display: flex;
        .left,.right{
          flex: 1;
        }
        
        .left{
          font-size: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
         svg{
            margin-right: 8px;
          }
        }
        .right{
          font-size: 13px;
          color: #aaa;
          text-align: center;
          p{
            border-left: 1px solid #eee;
          }
        }
      }
      .active{
          border-color: #e93323;
      }
    }
    
    .wx{
      width: 100%;
      height: 60px;
      background-color: white;
      .wxmoney{
        width: 342.5px;
        height: 44px;
        margin: 0 auto;
        box-sizing: border-box;
        border: 1px solid #eee;
        border-radius: 3px;
        display: flex;
        .left,.right{
          flex: 1;
        }
        .left{
          font-size: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
          svg{
            margin-right: 5px;
          }
        }
        .right{
          font-size: 13px;
          color: #aaa;
          text-align: center;
          p{
            border-left: 1px solid #eee;
          }
        }
      }
      .active{
          border-color: #e93323;
      }
    }
  }
}
</style>
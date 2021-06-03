<template>
  <div class="ordershoplist">
    <div v-if="data.length != 0">
      <div class="box" v-for="item in data" :key="item.id">
        <div class="title">
          <div class="left">{{ item._add_time }}</div>
          <div class="right">{{ item._status._title }}</div>
        </div>
        <o-shop-li :item="item"></o-shop-li>
        <div class="textmoney">
          共{{ item.total_num }}件商品，总金额
          <span>￥{{ item.pay_price }}</span>
        </div>
        <div class="btns">
          <div v-if="id == 0">
            <van-button
              @click="cancle(item.order_id)"
              type="primary"
              round
              color="white"
              class="cancel"
              >取消订单</van-button
            >
            <van-button type="primary" round color="#e93233" @click="buy"
              >立即付款</van-button
            >
            <van-popup
              v-model="show"
              round
              position="bottom"
              closeable
              :style="{ height: '30%' }"
            >
              <div class="text">请选择付款方式</div>
              <div class="balance">
                <div
                  @click="yue(item.order_id)"
                  class="balancemoney"
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
                    <p>可用余额:￥{{ now_money }}</p>
                  </div>
                </div>
              </div>
              <div class="wx">
                <div
                  @click="wx(item.order_id)"
                  class="wxmoney"
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
          <div v-if="id == 1">
            <van-button
              type="primary"
              round
              color="#e93233"
              :to="`/orderdetails/${item.order_id}`"
              >查看详情</van-button
            >
          </div>
        </div>
      </div>
    </div>

    <div class="noorder" v-if="data.length == 0">
      <div class="pic">
        <img :src="noOrder" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import OShopLi from "@/components/OShopLi.vue";
import noOrder from "@/assets/noOrder.png";
export default {
  props: ["id","now_money"],
  data() {
    return {
      data: [],
      noOrder,
      show: false,
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
             this.req();
             this.$emit("update");
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
    cancle(e) {
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
              this.$toast({
                message: d.data.msg,
                onClose: () => {
                  console.log(123);
                  this.req();
                  this.$emit("update");
                },
              });
            });
        })
        .catch(() => {
          // on cancel
          console.log(777);
        });
    },
    req() {
      if (this.id == 0) {
        this.$axios
          .get("/api/order/list", {
            params: {
              page: 1,
              limit: 20,
              type: 0,
            },
          })
          .then((d) => {
            console.log(d);
            this.data = d.data.data;
          });
      } else if (this.id == 1) {
        this.$axios
          .get("/api/order/list", {
            params: {
              page: 1,
              limit: 20,
              type: 1,
            },
          })
          .then((d) => {
            console.log(d);
            this.data = d.data.data;
          });
      } else if (this.id == 2) {
        this.$axios
          .get("/api/order/list", {
            params: {
              page: 1,
              limit: 20,
              type: 2,
            },
          })
          .then((d) => {
            console.log(d);
            this.data = d.data.data;
          });
      } else if (this.id == 3) {
        this.$axios
          .get("/api/order/list", {
            params: {
              page: 1,
              limit: 20,
              type: 3,
            },
          })
          .then((d) => {
            console.log(d);
            this.data = d.data.data;
          });
      } else if (this.id == 4) {
        this.$axios
          .get("/api/order/list", {
            params: {
              page: 1,
              limit: 20,
              type: 4,
            },
          })
          .then((d) => {
            console.log(d);
            this.data = d.data.data;
          });
      }
    },
    buy() {
      this.show = true;
    },
  },
  components: {
    OShopLi,
  },
  created() {
    console.log(this.id);
    if (this.id == 0) {
      this.$axios
        .get("/api/order/list", {
          params: {
            page: 1,
            limit: 20,
            type: 0,
          },
        })
        .then((d) => {
          console.log(d);
          this.data = d.data.data;
        });
    } else if (this.id == 1) {
      this.$axios
        .get("/api/order/list", {
          params: {
            page: 1,
            limit: 20,
            type: 1,
          },
        })
        .then((d) => {
          console.log(d);
          this.data = d.data.data;
        });
    } else if (this.id == 2) {
      this.$axios
        .get("/api/order/list", {
          params: {
            page: 1,
            limit: 20,
            type: 2,
          },
        })
        .then((d) => {
          console.log(d);
          this.data = d.data.data;
        });
    } else if (this.id == 3) {
      this.$axios
        .get("/api/order/list", {
          params: {
            page: 1,
            limit: 20,
            type: 3,
          },
        })
        .then((d) => {
          console.log(d);
          this.data = d.data.data;
        });
    } else if (this.id == 4) {
      this.$axios
        .get("/api/order/list", {
          params: {
            page: 1,
            limit: 20,
            type: 4,
          },
        })
        .then((d) => {
          console.log(d);
          this.data = d.data.data;
        });
    }
  },
};
</script>
<style lang="less">
.ordershoplist {
  width: 345px;
  // height: 215px;
  // height: 100%;
  background-color: white;
  margin: 0 auto;
  margin-top: 10px;
  .box {
    margin-bottom: 10px;
    background-color: #fafafa;
    .title {
      width: 100%;
      height: 42px;
      padding: 0 15px;
      box-sizing: border-box;
      display: flex;
      font-size: 14px;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      .left {
        font-size: 15px;
      }
      .right {
        color: #e93233;
      }
    }

    .textmoney {
      font-size: 13px;
      margin: 13.5px 0 0 15px;
      padding: 0 15px 15px 0;
      box-sizing: border-box;
      text-align: right;
      border-bottom: 1px solid #eee;
      span {
        color: #e93233;
        font-weight: 700;
      }
    }
    .btns {
      width: 345px;
      height: 53.5px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .van-button {
        width: 88px;
        height: 30px;
        margin: 0 10px;
      }
      .cancel {
        color: #999 !important;
        border: 1px solid #999 !important;
      }
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
  .noorder {
    width: 100%;
    height: 190px;
    margin-top: 8.5px;
    .pic {
      width: 200px;
      height: 150px;
      margin: 0 auto;
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }
  }
}
</style>
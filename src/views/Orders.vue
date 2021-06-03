<template>
  <div class="orders">
    <div class="addr">
      <van-cell is-link @click="changeasilt">
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <div class="name">
            <span class="username">{{ name }}</span>
            <span class="userphone">{{ tel }}</span>
            <div class="dizi">
              <span class="def" v-if="isDefault">[默认]</span>
              <span class="dztext">{{
                address
              }}</span>
            </div>
          </div>
          <!-- <span class="custom-title">单元格</span> -->
        </template>
      </van-cell>  
        <van-popup closeable v-model="show"
        round position="bottom" :style="{ height: '70%' }">
          <van-address-list
            v-model="chosenAddressId"
            :list="list"
            default-tag-text="默认"
            @select='select'
          />
        </van-popup>
    </div>
    <div class="buyshop">
      <van-cell :title="`共${cartInfo.length}件商品`" />
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
    <div class="else">
      <van-cell title="快递费用" :value="priceGroup.storePostage==0?'免运费':'￥'+priceGroup.storePostage" />
      <van-cell>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span class="custom-title">备注信息</span>
          <div class="remark">
            <textarea type="text" placeholder="请添加备注(150字以内)"></textarea>
          </div>
        </template>
      </van-cell>
    </div>
    <div class="payment">
      <van-cell title="支付方式" :border="false" />
      <div class="balance">
        <div @click="balancesel" :class="
        !selmoney?'active balancemoney':'balancemoney'">
          <div class="left">
           <svg t="1622019141143" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2385" width="24" height="24"><path d="M768 250.311111l-11.377778 5.688889c-68.266667 59.733333-156.444444 91.022222-244.622222 91.022222-91.022222 0-176.355556-31.288889-244.622222-91.022222L256 250.311111C119.466667 335.644444 25.6 483.555556 25.6 625.777778c0 219.022222 219.022222 398.222222 486.4 398.222222 267.377778 0 486.4-179.2 486.4-398.222222 0-142.222222-93.866667-290.133333-230.4-375.466667z m-113.777778 438.044445c17.066667 0 28.444444 14.222222 28.444445 28.444444 0 17.066667-14.222222 28.444444-28.444445 28.444444h-113.777778v62.577778c0 17.066667-14.222222 28.444444-28.444444 28.444445-17.066667 0-28.444444-14.222222-28.444444-28.444445v-62.577778h-113.777778c-17.066667 0-28.444444-14.222222-28.444445-28.444444 0-17.066667 14.222222-28.444444 28.444445-28.444444h113.777778v-68.266667h-113.777778c-17.066667 0-28.444444-14.222222-28.444445-28.444445 0-17.066667 14.222222-28.444444 28.444445-28.444444h68.266666l-48.355555-45.511111c-11.377778-11.377778-11.377778-31.288889 0-42.666667 11.377778-11.377778 31.288889-11.377778 42.666667 0l82.488888 76.8 79.644445-76.8c11.377778-11.377778 31.288889-11.377778 42.666667 0 11.377778 11.377778 11.377778 31.288889 0 42.666667l-48.355556 45.511111H654.222222c17.066667 0 28.444444 14.222222 28.444445 28.444444 0 17.066667-14.222222 28.444444-28.444445 28.444445h-113.777778v68.266667h113.777778z" fill="#FE9C01" p-id="2386"></path><path d="M733.866667 230.4s2.844444 0 0 0C674.133333 281.6 597.333333 312.888889 512 312.888889s-162.133333-31.288889-224.711111-82.488889c-51.2-42.666667-71.111111-85.333333-42.666667-125.155556 22.755556-34.133333 110.933333-25.6 153.6-19.911111 14.222222 2.844444 25.6-5.688889 31.288889-19.911111C446.577778 25.6 477.866667 0 512 0s65.422222 25.6 82.488889 65.422222c5.688889 14.222222 17.066667 22.755556 31.288889 19.911111 42.666667-5.688889 130.844444-14.222222 153.6 19.911111 25.6 39.822222 5.688889 82.488889-45.511111 125.155556z" fill="#FE9C01" p-id="2387"></path><path d="M290.133333 230.4c-51.2-42.666667-71.111111-85.333333-42.666666-125.155556 19.911111-34.133333 108.088889-25.6 150.755555-19.911111 14.222222 2.844444 25.6-5.688889 31.288889-19.911111C446.577778 25.6 477.866667 0 512 0s65.422222 25.6 82.488889 65.422222c5.688889 14.222222 17.066667 22.755556 31.288889 19.911111 42.666667-5.688889 130.844444-14.222222 153.6 19.911111 25.6 39.822222 5.688889 82.488889-42.666667 125.155556" fill="#FE9C01" p-id="2388"></path></svg>
            余额支付
          </div>
          <div class="right">
            <p>可用余额:￥{{userInfo.now_money}}</p>
          </div>
        </div>
      </div>
      <div class="wx">
        <div @click="wxsel" :class="selmoney?
        'active wxmoney':'wxmoney'">
          <div class="left">
           <svg t="1622018946625" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1344" width="28" height="28"><path d="M557.74 507.65a21.17 21.17 0 1 0 21.17 21.17 21.24 21.24 0 0 0-21.17-21.17zM376.45 375.5a24.69 24.69 0 1 0 12.24 21.32 24.76 24.76 0 0 0-12.24-21.32zM512.08 421.47a24.64 24.64 0 1 0-12.25-46 24.22 24.22 0 0 0-12.4 21.32 24.65 24.65 0 0 0 24.65 24.68zM674 507.65a21.17 21.17 0 1 0 21.17 21.17A21.24 21.24 0 0 0 674 507.65z" fill="#07B906" p-id="1345"></path><path d="M512 72C269.17 72 72 269.17 72 512s197.17 440 440 440 440-197.17 440-440S754.83 72 512 72z m-79.16 548.3c-21.16 0-42.18-3.63-61.68-8.77-1.67 0-3.63-1.66-3.63-1.66L320.05 638c-12.25 7.11-21.17 1.66-17.54-12.25 0 0 12.25-51.1 10.58-51.1-45.81-29.95-66.83-68.65-66.83-121.43C249.89 363.41 327.16 293 432.84 293c96.93 0 176 59.72 190.07 139.1h-8.77c-96.92 0-176 67-176 149.54a133.09 133.09 0 0 0 5.29 38.71z m283.36 68.8l14.06 28.27c7.11 12.25 1.66 17.54-10.58 10.59 0 0-35.08-21.17-36.9-19.36-15.87 5.3-51.1 10.59-68.64 10.59-89.82 0-163.75-61.69-163.75-137.29S524.32 444.45 614 444.45s163.75 61.69 163.75 137.29c-0.01 44-22.84 80.75-61.55 107.36z" fill="#07B906" p-id="1346"></path></svg>
            微信支付
          </div>
          <div class="right">
            <p>微信快捷支付</p>
          </div>
        </div>
      </div>
    </div>
    <div class="totalprice">
    <van-cell title="商品总价" :value="`￥${priceGroup.totalPrice}`" />
    <van-cell title="运费" v-if="priceGroup.storePostage!=0" :value="`￥${priceGroup.storePostage}`" />
    </div>
    <div class="buybox">
      <div class="buy">
        <div class="left">
          <span>合计:<span class="text">￥{{money}}</span></span>
        </div>
        <div class="right">
          <van-button type="primary" round  size="normal" @click="buy">立即结算</van-button>
        </div>
      </div>
    </div>
     <!-- <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
      /> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      chosenAddressId:1,
      list:[],
      addressInfo: {},
      cartInfo:[],
      priceGroup:{},
      userInfo:{},
      show:false,
      address:'',//地址
      name:'',//名字
      tel:'',//电话
      isDefault:0,
      money:0,
      selmoney:false,
      orderKey:'',
      payType:'yue'
    };
  },
  methods: {
    balancesel(){//余额支付
    if(this.selmoney){
      this.selmoney=false;
      this.payType='yue'
    }
    
    },
    wxsel(){//微信支付
    if(!this.selmoney){
      this.selmoney=true;
      this.payType='weixin'
    }
    },
    buy(){
      this.$axios({
        method:'post',
        url:'/api/order/create/'+this.orderKey,
        headers: { "Authori-zation": "Bearer " + this.tokens },
        data:{
          addressId:this.chosenAddressId,
          bargainid:0,
          combinationId:0,
          couponId:0,
          from:"weixinh5",
          mark:'',
          payType: this.payType,
          phone:'',
          pinkId:0,
          real_name:'',
          seckill_id:'',
          shipping_type:1,
          store_id:0,
          useIntegral:0
        }
      }).then(d=>{
        console.log(d);
        this.$toast({
          message:'结算中,请稍后...',
          onClose: () => {
            this.$router.push('/orderpage/'+d.data.data.result.orderId)
          }
        })
      })
    },
    select(item){
      console.log(item);
      this.address=item.address;
      this.name=item.name;
      this.tel=item.tel;
      this.isDefault=item.isDefault;
      this.show=false;
    },
    changeasilt(){
      this.show=true;
      this.$axios.get('api/address/list',{
        headers: { "Authori-zation": "Bearer " + this.tokens }
      }).then(d=>{
        console.log(d);
        this.list=d.data.data.map(item=>{
          console.log(item);
          let list={
          id:item.id,
          name:item.real_name,
          tel:item.phone,
          address:item.province+item.city+item.district+item.detail,
          isDefault:item.is_default
        }
        return list;
        })
      })
    }
  },
  created() {
    console.log(this.id);
    this.$axios({
      method: "post",
      url: "api/order/confirm",
      headers: { "Authori-zation": "Bearer " + this.tokens },
      data: {
        cartId: this.id,
      },
    }).then((d) => {
      console.log(d.data.data);
      this.addressInfo = d.data.data.addressInfo;
      this.cartInfo=d.data.data.cartInfo;
      this.priceGroup=d.data.data.priceGroup;
      this.userInfo=d.data.data.userInfo;
      this.chosenAddressId=d.data.data.addressInfo.id;
      this.address=d.data.data.addressInfo.province+
      d.data.data.addressInfo.city+d.data.data.addressInfo.district+
      d.data.data.addressInfo.detail;
      this.name=d.data.data.addressInfo.real_name;
      this.tel=d.data.data.addressInfo.phone;
      this.isDefault=d.data.data.addressInfo.is_default;
      this.money=Number(d.data.data.priceGroup.totalPrice)+Number(d.data.data.priceGroup.storePostage)
      this.orderKey=d.data.data.orderKey;
    });
  },
  computed: {
    ...mapGetters(["tokens"]),
  },
};
</script>
<style lang="less">
.orders {
  width: 100%;
  height: 100%;
  background-color: #eee;
  .addr {
    margin-bottom: 5px;
    .van-popup{
      .van-address-item{
        .van-cell{
           &>.van-icon{
             display: none;
           }
        }
       
      }
    }
    .name {
      .username,
      .userphone {
        font-size: 15px;
        font-weight: 700;
      }
      .userphone {
        margin-left: 25px;
      }
    }
    .dizi {
      font-size: 13px;
      color: #666;
      margin-top: 5px;
      .def {
        color: red;
        margin-right: 6px;
      }
    }
    .van-cell {
      align-items: center;
    }
  }
  .buyshop{
    margin-bottom: 5px;
    .van-card{
      margin: 0;
      background-color: white;
      border-bottom: 1px solid #eee;
      .van-card__bottom{
        .van-card__price{
          color: red;
        }
      }
    }
  }
  .else{
    margin-bottom: 5px;
    .van-cell__title{
      font-size: 15px;
    }
    .remark{
      textarea{
        width: 317px;
        height: 45px;
        padding: 12.5px 14px;
        border: none;
        background: #f9f9f9;
        resize:none; 
      }
       textarea::-webkit-input-placeholder{
            color: #ccc;
        }
    }
  }
  .payment{
    margin-bottom: 5px;
    .van-cell__title{
      font-size: 15px;
    }
    .balance{
      width: 100%;
      height: 60px;
      background-color: white;
      .balancemoney{
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
  .totalprice{
    margin-bottom: 5px;
  }
  .buybox{
    width: 100%;
    height: 50px;
    background-color: white;
    position: relative;
    left: 0;
    bottom: 0;
    .buy{
      width: 100%;
      height: 50px;
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 9;
      background-color: white;
      display: flex;
      font-size: 15px;
      justify-content: space-between;
      .left{
        line-height: 50px;
        margin-left: 15px;
        .text{
          color: red;
        }
      }
      .right{
        display: flex;
        justify-content: center;
        align-items: center;
        .van-button{
          width: 120px;
          height: 35px;
          line-height: 35px;
          background-color: #e93323;
          border-color: #e93323;
        }
      }
      .left,.right{
        flex: 1;
      }

    }
  }
}
</style>


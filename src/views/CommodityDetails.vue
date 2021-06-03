<template>
  <div class="commodity">
    <div class="commoditytab">
      <van-tabs v-model="activename" scrollspy sticky>
        <van-tab name="商品" title="商品">
          <van-swipe class="my-swipe" indicator-color="#e93323">
            <van-swipe-item v-for="(ban, index) in banner" :key="index">
              <van-image :src="ban" />
            </van-swipe-item>
          </van-swipe>
          <div class="shopcommod">
            <div class="money">
              <div class="text">
                ￥<span class="price">{{ storeInfo.price }}</span>
                <span class="vipprice">￥{{ storeInfo.vip_price }}</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAVCAYAAAA5BNxZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphNmVhODdiZC0zYWY5LTEzNDYtYjYyYy1hZGE1MDVmMDUxMTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MURGMzA2REQyMDNEMTFFOTkxOUVDOTNCMjU4MDcwQjQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MURGMzA2REMyMDNEMTFFOTkxOUVDOTNCMjU4MDcwQjQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODk2ZWFjMGYtNDI3MC0yZDRlLThiYTItYjE4OTA2YzRiOWVlIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MDg3NDQyZTItM2M1ZC1iNDRkLTljYmUt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"
                  alt=""
                />
              </div>
            </div>
            <div class="introduce">
              {{ storeInfo.store_name }}
            </div>
            <div class="label">
              <span>原价￥{{ storeInfo.ot_price }}</span>
              <span>库存{{ storeInfo.stock }}</span>
              <span>销量{{ storeInfo.fsales }}</span>
            </div>
          </div>
          <div class="select">
            <van-cell v-if="flag" @click="show = true" is-link>
              <template #title>
                <span class="text">已选择: </span>
                <span class="selectshop"></span>
              </template>
            </van-cell>
            <!-- <van-sku
              v-model="show"
              :sku="sku"
              :goods="goods"
              :goods-id="goodsId"
              ref="clic"
            /> -->
            <van-sku
              v-model="show"
              :sku="sku"
              :goods="goods"
              :goods-id="goodsId"
              ref="clic"
            />
          </div>
        </van-tab>
        <van-tab name="评价" title="评价">
          <div class="appraise">
            <van-cell is-link>
              <span class="userappraise">用户评价(0)</span>
              <div>
                <span class="goodtext">0%</span>
                <span class="good">好评率</span>
              </div>
            </van-cell>
          </div>
        </van-tab>
        <van-tab name="推荐" title="推荐">
          <van-divider
            :style="{
              color: '#fc4141',
              borderColor: '#282828',
              padding: '0 16px',
            }"
          >
            优品推荐
          </van-divider>
          <van-swipe class="listswipe" indicator-color="#e93323">
            <van-swipe-item v-for="(item, i) in list" :key="i">
              <list :item="item"></list>
            </van-swipe-item>
          </van-swipe>
        </van-tab>
        <van-tab name="详情" title="详情">
          <div class="introduces">产品介绍</div>
          <div class="conter" v-html="storeInfo.description"></div>
        </van-tab>
      </van-tabs>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        :badge="badge == 0 ? '' : badge"
        @click="car"
      />

      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="addCar"
      />
      <van-goods-action-button @click="buynow" type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>
<script>
import List from "@/components/List.vue";
import { mapGetters } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      activename: "商品",
      banner: [],
      badge: 0, //购物车商品数量提示
      storeInfo: {},
      list: [],
      show: false,
      flag: true,
      sku: {
        //初始化demo数据
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          //   {
          //     k: "颜色", //属性名称
          //     k_id: "1", //属性的ID值 唯一 在当前产品里面唯一
          //     v: [
          //       //颜色属性可用值列表
          //       {
          //         id: "30349", //属性ID
          //         name: "红色", //属性名
          //         //属性图片，默认只有第一行属性有
          //         imgUrl: "https://b.yzcdn.cn/vant/sku/shoes-1.png",
          //       },
          //       {
          //         id: "1215",
          //         name: "白色",
          //         imgUrl: "https://b.yzcdn.cn/vant/sku/shoes-1.png",
          //       },
          //       {
          //         id: "1216",
          //         name: "棕色",
          //         imgUrl: "https://b.yzcdn.cn/vant/sku/shoes-1.png",
          //       },
          //     ],
          //     k_s: "s1", //属性的k_s值 对应list里面组合键名
          //   },
          //   {
          //     k: "尺寸",
          //     k_id: "2",
          //     v: [
          //       {
          //         id: "1193",
          //         name: "30码",
          //       },
          //       {
          //         id: "1194",
          //         name: "40码",
          //       },
          //     ],
          //     k_s: "s2",
          //     count: 2,
          //   },
        ],
        // // 所有 sku 的组合列表，如下是：白色1、白色2、天蓝色1、天蓝色2
        list: [
          //   {
          //     id: 2300,
          //     price: 500,
          //     s1: "1216",
          //     s2: "1193",
          //     stock_num: 100,
          //     goods_id: 123123,
          //   },
          //   {
          //     id: 2259,
          //     price: 120, //价格
          //     s1: "1215", //对应属性列表里面 k_s 等于s1的属性id值
          //     s2: "1193",
          //     stock_num: 20, //库存
          //     goods_id: 946755, //产品ID
          //   },
          //   {
          //     id: 2260,
          //     price: 110,
          //     s1: "1215",
          //     s2: "1194",
          //     stock_num: 2,
          //     goods_id: 946755,
          //   },
          //   {
          //     id: 2257,
          //     price: 130,
          //     s1: "30349",
          //     s2: "1193",
          //     stock_num: 40,
          //     goods_id: 946755,
          //   },
          //   {
          //     id: 2258,
          //     price: 100,
          //     s1: "30349",
          //     s2: "1194",
          //     stock_num: 50,
          //     goods_id: 946755,
          //   },
        ],
        price: "500.00",
        stock_num: 227, // 商品总库存
        none_sku: false, // 是否无规格商品
        hide_stock: false, // 是否隐藏剩余库存
      },
      goods: {},
      goodsId: 1,
      uniqueId:''
    };
  },
  computed: {
    ...mapGetters(["tokens"]),
  },
  methods: {
    buynow() {
      console.log(222);
      if (!this.show) {
        this.show = true;
        return;
      } else {
        console.log(this.tokens);
        if (!this.tokens) {
          this.$toast({
            message: "请登录",
            onClose: () => {
              this.$router.push("/login");
            },
          });
        }
        if (this.$refs.clic.getSkuData().selectedSkuComb) {
          this.uniqueId=this.$refs.clic.getSkuData().selectedSkuComb.id
        }
          console.log(this.$refs.clic.getSkuData());
          this.$axios({
            method: "post",
            url: "/api/cart/add",
            headers: { "Authori-zation": "Bearer " + this.tokens },
            data: {
              cartNum: this.$refs.clic.getSkuData().selectedNum,
              new: 1,
              productId: this.id,
              uniqueId:this.uniqueId,
            },
          }).then(d=>{
            console.log(d);
            if(d.data.status==400){
              this.$toast({
                message:d.data.msg
              })
              return
            }
            this.$router.push('/orders/'+d.data.data.cartId);
          })
        
      }
    },
    car() {
      this.$router.push("/cart");
    },
    addCar() {
      if (!this.show) {
        this.show = true;
        return;
      } else {
        console.log(this.tokens);
        if (!this.tokens) {
          this.$toast({
            message: "请登录",
            onClose: () => {
              this.$router.push("/login");
            },
          });
        }
        // console.log(this.$refs.clic.getSkuData().selectedSkuComb);

        if (this.$refs.clic.getSkuData().selectedSkuComb==undefined) {
          this.$axios({
            method: "post",
            url: "/api/cart/add",
            headers: { "Authori-zation": "Bearer " + this.tokens },
            data: {
              cartNum: this.$refs.clic.getSkuData().selectedNum,
              new: 0,
              productId: this.id,
              uniqueId: "",
            },
          }).then((d) => {
            console.log(d);
            // console.log(this.$toast,d);//410000
            if (d.data.status != 200) {
              this.$toast({
                message: d.data.msg,
                // onClose: () => {
                //   this.$router.push("/login");
                // },
              });
            } else {
              this.show = false;
              this.$toast({
                message: "添加成功",
                onClose: () => {
                  this.$axios({
                    method: "get",
                    url: "/api/cart/list",
                    headers: { "Authori-zation": "Bearer " + this.tokens },
                  }).then((d) => {
                    console.log(d);
                    console.log(this.badge);
                    this.badge = d.data.data.valid.length;
                    console.log(this.badge);
                  });
                },
              });
            }
          });
          return;
        }
        if (this.$refs.clic.getSkuData().selectedSkuComb) {
          console.log(123);
          this.$axios({
            method: "post",
            url: "/api/cart/add",
            headers: { "Authori-zation": "Bearer " + this.tokens },
            data: {
              cartNum: this.$refs.clic.getSkuData().selectedNum,
              new: 0,
              productId: this.$refs.clic.getSkuData().selectedSkuComb.goods_id,
              uniqueId: this.$refs.clic.getSkuData().selectedSkuComb.id,
            },
          }).then((d) => {
            console.log(d);
            // console.log(this.$toast,d);//410000
            if (d.data.status != 200) {
              this.$toast({
                message: d.data.msg,
                onClose: () => {
                  this.$router.push("/login");
                },
              });
            } else {
              this.show = false;
              this.$toast({
                message: "添加成功",
                onClose: () => {
                  this.$axios({
                    method: "get",
                    url: "/api/cart/list",
                    headers: { "Authori-zation": "Bearer " + this.tokens },
                  }).then((d) => {
                    console.log(d);
                    console.log(this.badge);
                    this.badge = d.data.data.valid.length;
                    console.log(this.badge);
                  });
                },
              });
            }
          });
        }
        this.show = false;
      }
    },
  },
  components: {
    List,
  },
  created() {
    this.$axios.get("/api/product/detail/" + this.id).then((d) => {
      console.log(d);
      this.banner = d.data.data.storeInfo.slider_image;
      this.storeInfo = d.data.data.storeInfo;
      this.list[0] = d.data.data.good_list.slice(0, 6);
      this.list[1] = d.data.data.good_list.slice(6, 12);
      this.list[2] = d.data.data.good_list.slice(12, 18);
      console.log(this.list);
      // console.log(this.banner);
      // this.goods=d.data.data.storeInfo;
      //sku 数据转换
      let id = 1;
      let idobj = {};
      let ssk = 1;
      let arrs = d.data.data.productAttr;
      let listValue = d.data.data.productValue;
      this.sku.stock_num = this.storeInfo.stock;
      this.sku.price = this.storeInfo.price;
      if (listValue.length == 0) {
        this.flag = false;
        console.log("1111");
        return;
      }
      this.sku.list = [];
      //获取产品属性里面第一个值默认图片
      this.goods.picture = listValue[Object.keys(listValue)[0]].image;
      //循环产品属性 组装购物车 属性tree
      this.sku.tree = arrs.map((atr, ads) => {
        let va = atr.attr_value.map((at, index) => {
          id++;
          idobj[at.attr] = id;
          let attrs = {
            id: id,
            name: at.attr,
          };
          if (ads < 1) {
            attrs.imgUrl = listValue[Object.keys(listValue)[index]].image;
          }
          return attrs;
        });
        var ks = "s" + ssk;
        ssk++;
        return {
          k: atr.attr_name,
          k_id: atr.attr_name,
          v: va,
          k_s: ks,
        };
      });
      //循环产品属性组合,组装sku 列表
      for (let key in listValue) {
        let v = listValue[key];
        let keys = key.split(",");
        this.sku.list.push({
          id: v.unique,
          price: v.price * 100, //价格
          s1: idobj[keys[0]],
          s2: idobj[keys[1]],
          stock_num: v.stock, //库存
          goods_id: v.product_id,
          imgUrl: v.image,
        });
      }
      this.detail = d.data.data;
    });
    this.$axios({
      method: "get",
      url: "/api/cart/list",
      headers: { "Authori-zation": "Bearer " + this.tokens },
    }).then((d) => {
      console.log(d);
      if (d.data.data && d.data.data.valid) {
        this.badge = d.data.data.valid.length;
      }
    });
  },
  watch: {
    id() {
      console.log(this.id);
      window.location.reload();
    },
  },
};
</script>

<style lang="less" >
.commodity {
  background-color: #eee;
  .commoditytab {
    .my-swipe {
      width: 100%;
      height: 375px;
      .van-image {
        width: 100%;
        height: 375px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .shopcommod {
      width: 100%;
      height: auto;
      background-color: #fff;
      .money {
        display: flex;
        margin: 0 15px;
        padding-top: 12px;
        .text {
          color: #fc4141;
          .price {
            font-size: 24px;
            font-weight: 700;
          }
          .vipprice {
            color: #232323;
            font-size: 14px;
            font-weight: 700;
            margin-left: 6px;
          }
          img {
            height: 10.5px;
            margin-left: 3.5px;
          }
        }
      }
      .introduce {
        font-size: 16px;
        font-weight: 700;
        margin: 5px 15px 0 15px;
      }
      .label {
        display: flex;
        margin: 11px 15px 0 15px;
        padding-bottom: 12.5px;
        justify-content: space-between;
        span {
          font-size: 12px;
          color: #82848f;
        }
      }
    }
    .select {
      margin-top: 10px;
      .text {
        font-size: 13px;
        color: #82848f;
      }
      .selectshop {
        font-size: 14px;
      }
    }
    .appraise {
      margin-top: 10px;
      .van-cell__value {
        display: flex;
        justify-content: space-between;
        .userappraise {
          font-size: 14px;
          color: #282828;
        }
        .goodtext {
          color: #fc4141;
          font-size: 14px;
        }
        .good {
          font-size: 14px;
          color: gray;
        }
      }
    }
    .listswipe {
      width: 100%;
      height: auto;
    }
    .van-divider {
      background-color: #fff;
      margin: 0;
      margin-top: 10px;
      height: 44px;
      font-size: 15px;
    }
    .introduces {
      width: 100%;
      height: 44px;
      background-color: #fff;
      margin-top: 10px;
      font-size: 16px;
      text-align: center;
      line-height: 44px;
    }
    .conter {
      width: 100%;
      height: auto;
      font-size: 14px;
      background-color: #fff;
      overflow: hidden;
      img {
        display: block;
        width: 375px !important;
      }
      .mui-inline-block {
        width: 100% !important;
        img {
          display: block !important;
          width: 100% !important;
        }
      }
      p {
        font-size: 20px;
        img {
          display: block !important;
        }
      }
    }
  }
  .van-goods-action {
    z-index: 99999;
  }
}
</style>
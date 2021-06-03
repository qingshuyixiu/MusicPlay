<template>
  <div class="cart">
    <div class="topmessage">
      <div><van-icon name="passed" />100%正品保证</div>
      <div><van-icon name="passed" />所有商品精挑细选</div>
      <div><van-icon name="passed" />售后无忧</div>
    </div>
    <div class="admin">
      <div class="text">
        购物数量 <span>{{ this.valid.length }}</span>
      </div>
      <div class="btn" v-show="!valid.length<=0">
        <van-button type="default" @click="admin">{{shopadmin==false?'管理':'取消'}}</van-button>
      </div>
    </div>
    <div class="list" v-if="valid.length>0">
      <!-- <van-checkbox-group v-model="checked" ref="checkboxGroup"> -->
      <car-list
        @num="num"
        v-for="item in valid"
        :key="item.id"
        :item="item"
        :checks="checked"
        @chec="chec"
        @addtotal="addtotal"
        @subtotal="subtotal"
        @addplus='addplus'
        @subminus='subminus'
        ref="chack"
      ></car-list>
      <!-- </van-checkbox-group> -->
    </div>
    <div class="nolist" v-if="valid.length<=0">
      <div class="nolistpic">
        <van-image
        :src="NoList"
      />
      </div>
       <van-divider
            :style="{
              color: '#000',
              borderColor: '#282828',
              padding: '0 16px',
            }"
          >
            为你推荐
          </van-divider>
        <div>
          <shop-list :bastList="hotlist"></shop-list>
        </div>
    </div>
    <van-submit-bar v-show="!valid.length<=0"  @submit='submit' v-if="!shopadmin" class="put" :price="totalMoney*100" button-text="提交订单">
      <van-checkbox v-model="checked" @click="click" checked-color="#ee0a24"
        >全选</van-checkbox
      >
    </van-submit-bar>
    <van-submit-bar v-show="!valid.length<=0" @submit='del' v-if="shopadmin" class="del"  button-text="删除">
      <van-checkbox v-model="checked" @click="click" checked-color="#ee0a24"
        >全选</van-checkbox
      >
    </van-submit-bar>
  </div>
</template>

<script>
import CarList from "@/components/CarList.vue";
import { mapGetters } from "vuex";
import NoList from "@/assets/noCart.png"
import ShopList from "@/components/ShopList.vue";
export default {
  data() {
    return {
      valid: [],
      checked: false,
      count: 0,
      temp:false,
      totalMoney:0,
      unit:0,
      shopadmin:false,
      delId:[],
      NoList:NoList,
      hotlist:[],
      buyid:[]
    };
  },
  methods: {
    hot(){//热门商品
       this.$axios.get('/api/product/hot',{
         headers: { "Authori-zation": "Bearer " + this.tokens },
         params:{
           page: 1,
           limit: 20
         }
       }).then(d=>{
         console.log(d.data.data);
         this.hotlist=d.data.data;
       })
    },
    del(){
       for (let i = 0; i < this.$refs.chack.length; i++) {
         if(this.$refs.chack[i].temp){
           console.log(this.$refs.chack[i].item.id);
           this.delId.push(this.$refs.chack[i].item.id);
           console.log(this.delId);
         }
       }
       if(this.delId.length>0){
        //  console.log(112233);
         this.$axios({
            method:'post',
            url:'/api/cart/del',
            headers: { "Authori-zation": "Bearer " + this.tokens },
            data:{ids:this.delId}
         }).then((d)=>{
           if(d.data.status==200){
            this.list();
            this.totalMoney=0;
           }
         })
       }
       this.buyid=[];
      console.log("删除");
    },
    list(){//购物车商品
        this.$axios({
      method: "get",
      url: "/api/cart/list",
      headers: { "Authori-zation": "Bearer " + this.tokens },
    }).then((d) => {
      console.log(d);
      this.valid = d.data.data.valid;
      console.log(this.valid);
      if(this.valid.length<=0){
        this.checked=false;
        this.hot()
      }
    });
    },
    submit(){//提交订单
    if(this.buyid.length<=0){
      this.$toast({
        message:'请选择商品'
      })
      return;
    }
      console.log('妙啊');
      let buy=this.buyid.toString();//转成字符串
      this.$router.push('/orders/'+buy)
    },
    admin(){
      this.shopadmin=!this.shopadmin;
    },
    addplus(e){
      if(e.temp){
        this.totalMoney=Number((Number(this.totalMoney)+Number(e.e)).toFixed(2));
      }
      // console.log(this.totalMoney*100);
    },
    subminus(e){
       if(e.temp){
        this.totalMoney=Number((Number(this.totalMoney)-Number(e.e)).toFixed(2));
      }
        console.log(this.totalMoney);
    },
    addtotal(e){
      console.log(e);
      if(e.temp){//选中
      let price=e.price;
      let num=e.number;
      this.buyid.push(e.id);
      console.log(this.buyid);
      this.unit=price*num;//单价
      //console.log(price,num);
      // console.log((price*num).toFixed(2));
       this.totalMoney=Number((Number(this.totalMoney)+this.unit).toFixed(2));   
      }
     
      console.log(this.totalMoney);
    },
    subtotal(e){
      if(!e.temp&&this.totalMoney!=0){//没有选中
        let price=e.price;
      let num=e.number;
      let index=this.buyid.indexOf(e.id)
      this.buyid.splice(index,1);
      console.log(this.buyid);
      this.unit=price*num;//单价
      this.totalMoney=Number((Number(this.totalMoney)-price*num).toFixed(2));
      
      }
      console.log(this.totalMoney);
      
    },
    chec() {
       this.count=0;//每次循环前清零
       for (let i = 0; i < this.$refs.chack.length; i++) {
      //  console.log( this.$refs.chack[i].temp);
       if(this.$refs.chack[i].temp){
        //  this.temp=true;
         this.count++;
        //  console.log(this.count);
         if(this.count>this.valid.length){
           this.count=this.valid.length;
         }
       }else{
        //  this.temp=false;
         this.count--;
         if(this.count<0){
           this.count=0;
         }
       }
      }
      // console.log(this.count);
      if(this.count>=this.valid.length){
        this.temp=true;
      }else{
        this.temp=false;
      }
      this.checked=this.temp;
    },
    click() {
      this.temp=!this.temp;
      this.checked=this.temp;
      
      this.totalMoney=0;//每次点击全选都清空价格后再重新计算
      
      console.log(this.temp);
     if(this.$refs.chack){
       for (let i = 0; i < this.$refs.chack.length; i++) {
        this.$refs.chack[i].check();
      }
     }
      
    },
    num(num) {
      console.log(num);
      this.$axios({
        method: "post",
        url: "/api/cart/num",
        headers: { "Authori-zation": "Bearer " + this.tokens },
        data: {
          id: num.id,
          number: num.newnum,
        },
      });
    },
  },
  components: {
    CarList,
    ShopList
  },
  computed: {
    ...mapGetters(["tokens"]),
  },
  watch: {
    // checked(){
    //   console.log(this.$refs.chack);
    //   // this.$refs.chack.check();
    // }
  },
  created() {
    this.$axios({
      method: "get",
      url: "/api/cart/list",
      headers: { "Authori-zation": "Bearer " + this.tokens },
    }).then((d) => {
      console.log(d);
      this.valid = d.data.data.valid;
      if(this.valid.length<=0){
        this.hot();
      }
      console.log(this.valid);
    });
  },
};
</script>
<style lang="less" scoped>
.cart {
  width: 100%;
  background-color: #f5f5f5;
  position: absolute;
  .topmessage {
    width: 100%;
    height: 38px;
    color: #8c8c8c;
    background-color: #f5f5f5;
    position: fixed;
    left: 0;
    top: 0;
    padding: 0 15px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    font-size: 12px;
    line-height: 38px;
    z-index: 5;
  }
  .admin {
    width: 100%;
    height: 40px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    left: 0;
    top: 38px;
    padding: 0 15px;
    box-sizing: border-box;
    background-color: white;
    z-index: 5;
    .text {
      font-size: 14px;
      line-height: 40px;
      span {
        color: #fc4141;
      }
    }
    .btn {
      .van-button {
        width: 53px;
        height: 21px;
        font-size: 13px;
        padding: 0;
        border: 1px solid #282828;
      }
    }
  }
  .list {
    margin-top: 85.5px;
    margin-bottom: 110px;
  }
  .nolist{
    background-color: white;
    margin-bottom: 40px;
    .nolistpic{
      width: 207px;
      margin: 0 auto;
      margin-top: 85px;
     
    }
    .van-divider{
      margin: 0;
      margin-top: 30px;
      margin-bottom: 20px;
    }
  }
  .put {
    position: fixed;
    left: 0;
    bottom: 50px;
  }
  .del{
    position: fixed;
    left: 0;
    bottom: 50px;
    .van-submit-bar__bar{
      justify-content: space-between;
      .van-button{
        width: 150px;
      }
    }
  }
}
</style>
<template>
  <div class="carlist">
    <van-checkbox @click="click" v-model="checked" checked-color="#ee0a24"></van-checkbox>
    <div class="right">
      <div class="pic">
        <img :src="item.productInfo.image" alt="" />
      </div>
      <div class="text">
        <div class="text1">{{ item.productInfo.store_name }}</div>
        <div class="text2">属性:{{ item.productInfo.attrInfo.suk }}</div>
        <div class="money">
          ￥{{ item.productInfo.price }}
          <div class="step">
            <van-stepper
              v-model="value"
              input-width="22px"
              button-size="22px"
              theme="round"
              @plus="plus(item.productInfo.price)"
              @minus='minus((item.productInfo.price))'
              @change='chang'
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item","checks"],
  data() {
    return {
      checked: false,
      value: 1,
      newValue:0,
      temp:false,
      flag:false
    };
  },
  methods: {
    click(){//点击触发
     this.temp=!this.temp;
     this.checked=this.temp;
     if(this.checked){
       this.flag=true,
       this.$emit('addtotal',{
         number:this.value,
         price:this.item.productInfo.price,
         temp:this.temp,
          id:this.item.id
         })
     }else{
       this.flag=false,
       this.$emit('subtotal',{
         number:this.value,
         price:this.item.productInfo.price,
         temp:this.temp,
          id:this.item.id
         })
     }
     this.$emit('chec');
    },
    check(){//全选触发
      console.log(this.checks);
     if(this.checks){
       this.temp=true;
       //this.checked=true;
     }else{
       this.temp=false
       //this.checked=false;
     }
     this.checked=this.temp;
       if(this.checked){
       this.$emit('addtotal',{
         number:this.value,
         price:this.item.productInfo.price,
         temp:this.temp,
          id:this.item.id
         })
     }else{
       this.$emit('subtotal',{
         number:this.value,
         price:this.item.productInfo.price,
         temp:this.temp,
         id:this.item.id
         })
     }
    },
    chang(e){
      // console.log(e);
      this.newValue=e;
      this.value=this.newValue;
    },
    plus(e){
     this.$emit('addplus',{
       e:e,
       temp:this.temp
     })
    // console.log(e);
    },
    minus(e){
      this.$emit('subminus',{
       e:e,
       temp:this.temp
     })
    }
  },
  watch:{
   newValue(newnum){
    //  console.log(oldnum);
      this.$emit('num',{
        'newnum':newnum,
        'id':this.item.id
        });

   },
  
 
  },
  created() {
    this.value=this.item.cart_num
    console.log(this.item);
  },
};
</script>
<style lang="less" scoped>
.carlist {
  background-color: white;
  width: 100%;
  height: 105px;
  padding: 12.5px 15px;
  box-sizing: border-box;
  margin-bottom: 7.5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .right {
    width: 313.5px;
    display: flex;
    justify-content: space-between;
    .pic {
      width: 80px;
      height: 80px;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .text {
      font-size: 14px;
      width: 222px;
      .text1 {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .text2 {
        font-size: 12px;
        color: #868686;
        margin-top: 8px;
      }
      .money {
        margin-top: 13px;
        font-size: 16px;
      }
      .step {
        // display: flex;
        float: right;
        width: 92px;
        height: 22px;
        .van-stepper {
          height: 100%;
        }
      }
    }
  }
}
</style>
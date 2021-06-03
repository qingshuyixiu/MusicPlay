<template>
  <div class="classify">
    <div class="top"></div>
    <van-search
  shape="round"
  placeholder="请输入搜索关键词"
  @click="gosearch"
/>
  <div class="conter">
    <van-tabs  scrollspy sticky>
      <van-tab v-for="items in data" :key="items.id" :title="items.cate_name">
       <div class="linebox">
         <van-divider />
         <h5>{{items.cate_name}}</h5>
         <van-divider />
         </div>
        <van-grid column-num="3" :border='false' class="classshop">
          <van-grid-item @click="to(value.id,value.cate_name)" v-for="value in items.children" :key="value.id" :icon="value.pic" :text="value.cate_name" />
        </van-grid>
      </van-tab>
    </van-tabs>
  </div>
 
  </div>
</template>
<script>
export default {
  data() {
    return {
      data:[]
    }
  },
  methods: {
    gosearch(){
      this.$router.push('/search')
    },
    to(id,title){
      this.$router.push({
        path: '/goodslist',
        query:{
          id:id,
          title:title
        }
      })
    }
  },
  created() {
    this.$axios.get('/api/category').then(d=>{
      console.log(d);
      this.data=d.data.data
    });
  },
}
</script>
<style lang="less">
.classify{

  .van-search{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 48px;
    z-index: 9;
    padding: 9px 11px 9px 11px;
  }
  .conter{

    box-sizing: border-box;
    margin: 48px 0 0 90px;
  .van-sticky{
    position: fixed;
    left: 0;
    top: 48px;
    width: 90px;
    height: 569.2px;
    background-color: #f7f7f7;
    box-sizing: border-box;
    .van-tabs__wrap {
      width: 100%;
      height: auto;
      overflow: auto;
        .van-tabs__nav{
        width: 100%;
        // height: 100%;
        flex-wrap: wrap;
        align-content: flex-start;
        padding: 0;
        background-color: #f7f7f7;
        .van-tab{
          width: 100%;
          height: 40px;
          font-size: 13px;
        }
        .van-tab--active{
          background-color: white;
          border-left: 2px solid red;
          color: red;
          font-weight: 700;
        }
        .van-tabs__line{
          display: none;
        }
      }
    }
    
  }
  .van-tab__pane{
    height: auto;
    padding-top: 25px;
    .linebox{
      display: flex;
      justify-content: center;
      margin-top: 10px;
      .van-divider{
        width: 50px;
        border-color: #000;
      }
        h5{
      margin: 0;
      font-size: 14px;
      height: 45px;
      text-align: center;
      padding: 0 15px 0 15px;
      line-height: 45px;
    }
    }
  
    .classshop{
    width: 271.2px;
    margin: 0 auto;
    .van-grid-item{
      width: 88.5px;
      height: auto;
      .van-grid-item__content{
        height: 100%;
        padding: 0;
        margin-top: 13px;
        .van-icon {
          width: 60px;
          height: 60px;
          img{
            width: 100%;
            height: 100%;
          }
          
        }
        span{
            display: block;
            width: 60px;
            height: 28px;
            margin: 0;
            text-align: center;
            line-height: 28px;
          }
      }
    }
  }
  }
  }
  
  
}
</style>
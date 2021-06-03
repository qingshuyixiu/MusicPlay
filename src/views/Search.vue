<template>
  <div class="searchs">
    <van-search
      shape="round"
      placeholder="请输入搜索关键词"
      show-action
      v-model="keyword"
      @search="onSearch"
    >
      <template #action>
        <div class="btn" @click="onSearch">搜索</div>
      </template>
    </van-search>
    <div class="title" color="#fff">热门搜索</div>
    <div class="list">
      <van-button
        size="small"
        type="default"
        @click="hotsearch(item)"
        v-for="(item, index) in hotSearch"
        :key="index"
        >{{ item }}</van-button
      >
    </div>
    <div class="no" v-show="show" >没有更多搜索结果</div>
    <shop-list v-if="bastList.length > 0" :bastList="bastList"></shop-list>
    <van-divider
    v-if="hotlist.length > 0"
      :style="{
        color: '#000',
        borderColor: '#282828',
        padding: '0 16px',
      }"
    >
      为你推荐
    </van-divider>
    <shop-list v-if="hotlist.length > 0" :bastList="hotlist"></shop-list>
  </div>
</template>
<script>
import ShopList from "@/components/ShopList.vue";
export default {
  data() {
    return {
      hotSearch: [],
      keyword: "",
      bastList: [],
      hotlist: [],
      show:false
    };
  },
  components: {
    ShopList,
  },
  methods: {
    hotsearch(val){
      this.keyword=val;
      this.search();
    },
    hot() {
      //热门商品
      this.$axios
        .get("/api/product/hot", {
          params: {
            page: 1,
            limit: 20,
          },
        })
        .then((d) => {
          console.log(d.data.data);
          this.hotlist = d.data.data;
        });
    },
    onSearch() {
      if (this.keyword == "") {
        return;
      }
      this.search();
    },
    search() {
      this.hotlist=[];
      this.$axios
        .get("/api/products", {
          params: {
            page: 1,
            limit: 20,
            keyword: this.keyword,
          },
        })
        .then((d) => {
          console.log(d);
          this.bastList = d.data.data.map((da) => {
            da = {
              ot_price: da.price,
              store_name: da.store_name,
              sales: da.sales,
              price: da.vip_price,
              image: da.image,
              id: da.id,
            };
            return da;
          });
          if(this.bastList.length<=0){
          console.log(666);
          this.hotlist=[];
          this.show=true;
          this.hot();
        }else{
          console.log(777);
          this.show=false;
          console.log(this.bastList);
          // this.bastList=[];
        }
        });
        
    },
  },
  created() {
    this.$axios.get("/api/search/keyword").then((d) => {
      console.log(d);
      this.hotSearch = d.data.data;
    });
  },
};
</script>
<style lang="less">
.searchs {
  overflow: hidden;
  // height: 150.7px;
  .van-search {
    padding: 0;
    margin-top: 10px;
    padding-left: 15px;
    .van-search__content {
      width: 299px;
      height: 33px;
    }
    .van-search__action {
      width: 60px;
      height: 33px;
      text-align: center;
      font-size: 16px;
      padding: 0;
    }
  }
  .title {
    font-size: 14px;
    margin: 25px 15px 12.5px 15px;
    color: #999;
  }
  .list {
    width: 100%;
    height: 40px;
    display: flex;
    padding-left: 5px;
    .van-button {
      margin: 0 0 10px 10px;
      padding: 0 10.5px 0 10.5px;
      border: 1px solid #aaa;
      height: 28px;
      outline: none;
      background-color: #fff;
    }
  }
  .no{
    text-align: center;
  }

}
</style>
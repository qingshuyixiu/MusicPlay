<template>
  <div class="index">

    <van-skeleton title avatar :row="10" :loading="loading">
          <div class="top">
      <van-image :src="logo" />
      <van-search
        placeholder="请输入搜索关键词"
        shape="round"
        @click="jumpSearch"
      />
    </div>
    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banner" :key="index"
        ><img :src="item.pic" alt=""
      /></van-swipe-item>
    </van-swipe>
    <!-- nav -->
    <div class="nav">
      <a href="#" v-for="(item, index) in menus" :key="index">
        <div class="pic">
          <img :src="item.pic" alt="" />
        </div>
        <div>{{ item.name }}</div>
      </a>
    </div>
    <!-- 新闻 -->
    <div class="news">
      <div class="pic">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAAcCAYAAACj6tvkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphNmVhODdiZC0zYWY5LTEzNDYtYjYyYy1hZGE1MDVmMDUxMTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzVEMDQxOUYxRjhDMTFFOUIwQkJCMEMyMkY3MzdBQUQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzVEMDQxOUUxRjhDMTFFOUIwQkJCMEMyMkY3MzdBQUQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODk2ZWFjMGYtNDI3MC0yZDRlLThiYTItYjE4OTA2YzRiOWVlIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MDg3NDQyZTItM2M1ZC1iNDRkLTljYmUt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"
          alt=""
        />
      </div>
      <van-swipe
        style="height: 37.5px"
        :width="240"
        :autoplay="3000"
        vertical
        :show-indicators="false"
      >
        <van-swipe-item v-for="item in roll" :key="item.id">
          {{ item.info }}<van-icon class="righticon" name="arrow" size="20" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 快速选择 -->
    <div class="wrapper">
      <van-cell-group>
        <van-cell
          class="title"
          title="快速选择"
          value="更多"
          is-link
          :label="fastInfo"
          to='/classify'
          :clickable='false'
        />
      </van-cell-group>
      <div class="product">
        <van-grid class="list" :border="false">
          <van-grid-item
            v-for="item in fastList"
            :key="item.id"
             @click="to(item.id,item.cate_name)" 
          >
            <div class="item">
              <img :src="item.pic" alt="" />
              <p>{{ item.cate_name }}</p>
            </div>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <!-- 精品推荐 -->
    <div class="wrapper-jp">
      <van-cell-group>
        <van-cell
          class="title"
          title="精品推荐"
          value="更多"
          is-link
          :label="`${bastInfo}`"
          :clickable='false'
          :to="`/hotgoods/${1}`"
        />
      </van-cell-group>
      <van-swipe  class="my-swipe" indicator-color="#fc4141" :autoplay="3000">
        <van-swipe-item
          v-for="item in bastBanner"
          :key="item.id"
          @click="skip"
        >
          <img :src="item.img" alt="" />
        </van-swipe-item>
      </van-swipe>
     <shop-list :bastList='bastList'></shop-list><!--自定义商品组件-->
    </div>
    <!-- 热门榜单 -->
    <div class="hotlist">
      <div class="hotbg">
        <van-cell class="title" value="更多" is-link :to="`/hotgoods/${2}`">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title">热门榜单</span>
            <em type="danger">根据销量、搜索、好评等综合得出</em>
          </template>
        </van-cell>
        <van-grid class="list" :column-num="3">
          <van-grid-item v-for="item in likeInfo" :to="`/commoditydetails/${item.id}`" :key="item.id">
            <div class="item">
              <img :src="item.image" alt="" />
              <p>{{ item.store_name }}</p>
              <span>￥{{ item.vip_price }}</span>
            </div>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <!-- 首发新品 -->
    <div class="new">
      <div class="title">
        <van-cell
          title="首发新品"
          :clickable="false"
          :label="firstInfo"
          value="更多"
          :to="`/hotgoods/${3}`"
          is-link
        ></van-cell>
      </div>
      <div class="newshop">
        <van-grid class="list">
          <van-grid-item
            v-for="item in firstList"
            :key="item.id"
            :to="`/commoditydetails/${item.id}`"
          >
            <div class="item">
              <img :src="item.image" alt="" />
              <p>{{ item.store_name }}</p>
              <span>￥{{ item.vip_price }}</span>
            </div>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <!-- 促销单品 -->
    <div class="promotiontitle">
      <van-cell
        title="促销单品"
        :clickable="false"
        :label="salesInfo"
        value="更多"
        to="/promotionitem"
        is-link
      ></van-cell>
    </div>
    <promotion-shop :benefit="benefit"></promotion-shop>
    </van-skeleton>
  </div>
</template>
<script>
 import ShopList from '@/components/ShopList.vue'
 import PromotionShop from '@/components/PromotionShop.vue'
export default {
  data() {
    return {
      logo: "",
      indexData: {},
      fastList:[],
      banner:[],
      menus:[],
      roll:[],
      info:{},
      fastInfo:'',
      bastInfo:'',
      bastBanner:[],
      bastList:[],
      likeInfo:[],
      firstInfo:'',
      firstList:[],
      salesInfo:'',
      benefit:[],
      loading: true,
    };
  },
  components:{
    ShopList,PromotionShop
  },
  created() {
    this.$axios.get("/api/index").then((d) => {
      console.log(d);
      this.indexData = d.data.data;
      this.fastList=d.data.data.info.fastList;
      this.logo = this.indexData.logoUrl;
      this.banner=this.indexData.banner;
      this.menus=this.indexData.menus;
      this.roll=this.indexData.roll;
      this.info=this.indexData.info;
      this.fastInfo=this.info.fastInfo;
      this.bastInfo=this.info.bastInfo;
      this.bastBanner=this.info.bastBanner;
      this.bastList=this.info.bastList;
      this.likeInfo=this.indexData.likeInfo;
      this.firstInfo=this.info.firstInfo;
      this.firstList=this.info.firstList;
      this.salesInfo=this.info.salesInfo;
      this.benefit=this.indexData.benefit;
      //console.log(this.indexData.info.fastInfo);
      this.loading=false
    });
  },
  methods: {
    jumpSearch() {
      this.$router.push("/search");
    },
    to(id,title){
      this.$router.push({
        path: '/goodslist',
        query:{
          id:id,
          title:title
        }
      })
    },
    skip(){
      console.log(123);
      this.$router.push('/hotgoods/1')
    }
  },
};
</script>
<style lang="less" scoped>
.index {
  .top {
    // width: 100%;
    height: 49px;
    display: flex;
    align-items: center;
    justify-content: center;
    .van-image {
      // display: block;
      width: 63.5px;
      height: 22.5px;
      margin-right: 12.5px;
    }
    .van-search {
      width: 250px;
      // height: 32px;
      padding: 0 14px;
    }
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
  }
  .van-swipe-item {
    width: 375px;
    height: 187.5px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .nav {
    width: 100%;
    height: 186.6px;
    padding-top: 13px;
    display: flex;
    flex-wrap: wrap;
    font-size: 13px;
    box-sizing: border-box;
    a {
      display: block;
      width: 25%;
      height: 69.3px;
      text-align: center;
      color: #333;
      margin-bottom: 17.5px;
      .pic {
        width: 45px;
        height: 45px;
        margin: 0 24.4px 7.5px 24.4px;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .news {
    width: 100%;
    height: 37.5px;
    padding: 0 15px 0 15px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    .van-swipe {
      width: 240px;
      .van-swipe-item {
        line-height: 37.5px;
        width: 240px;
      }
    }
    .righticon {
      line-height: 37.5px;
      float: right;
    }

    .pic {
      width: 75px;
      height: 14px;
      display: block;
      padding-right: 11.5px;
      border-right: 1px solid #ddd;
      box-sizing: content-box;
      img {
        width: 62.4px;
        height: 100%;
      }
    }
  }
  .wrapper {
    width: 100%;
    height: 216px;
    .van-cell-group {
      .title {
        width: 345.2px;
        height: 56.5px;
        padding: 17px 0 0 0;
        margin: 0 15px 0 15px;
        box-sizing: border-box;
        .van-cell__title {
          width: 256px;
          height: 38.5px;
          span {
            font-size: 15px;
            font-weight: 700;
          }
          .van-cell__label {
            margin-top: 1px;
          }
        }
        .van-cell__value {
          font-size: 13px;
          width: 10px;
          line-height: 38.5px;
          color: #333;
        }
        .van-icon {
          line-height: 38.5px;
          color: #333;
        }
      }
      &::after {
        border-bottom: none;
      }
    }
    .product{
      width: 100%;
      height: 145px;
      padding: 0 15px 18.5px 15px;
      margin: 0;
      margin-top: 19px;
      box-sizing: border-box;
      .list {
        width: 348px;
        height: 156px;
        flex-wrap: nowrap;
        align-items: flex-start;
        overflow-x: auto;
        // box-sizing: border-box;
        // padding: 0 11px 0 11px;
        .van-grid-item__content {
          align-items: center;
          padding: 0;
          .item {
            width:90px;
            height: 122px;
            margin-right: 10px;
            img {
              width: 90px;
              height: 90px;
            }
            p {
              display: block;
              width: 90px;
              height: 29px;
              box-sizing: border-box;
              text-align: center;
              line-height: 29px;
              font-size: 12px;
              margin: 0;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              border-left: 1px solid #ddd;
              border-right: 1px solid #ddd;
              border-bottom: 2px solid red;
            }
            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 14px;
              color: red;
              font-weight: 700;
            }
          }
        }
       
        
      }
    }
  }
  .wrapper-jp {
    width: 100%;
    .my-swipe {
      margin: 14px 15px 0 15px;
      height: 160px;
      .van-swipe-item {
        width: 100%;
        height: 100%;
      }
      img {
        width: 345px;
        height: 135px;
      }
    }
    .van-cell-group {
      .title {
        width: 345.2px;
        height: 56.5px;
        padding: 17px 0 0 0;
        margin: 0 15px 0 15px;
        .van-cell__title {
          width: 244.5px;
          height: 38.5px;
          box-sizing: border-box;
          span {
            font-size: 15px;
            font-weight: 700;
          }
          .van-cell__label {
            margin-top: 1px;
          }
        }
        .van-cell__value {
          font-size: 13px;
          width: 10px;
          line-height: 38.5px;
          color: #333;
        }
        .van-icon {
          line-height: 38.5px;
          color: #333;
        }
      }
      &::after {
        border-bottom: none;
      }
    }

  }
  .hotlist {
    width: 100%;
    height: 208.5px;
    .hotbg {
      width: 100%;
      height: 99.18px;
      background: url("../assets/index-bg.png") no-repeat center center/100%
        100%;
      padding: 0 15px 0 15px;
      box-sizing: border-box;
      .title {
        width: 345.2px;
        height: 43.5px;
        align-items: center;
        background-color: transparent;
        padding: 0;
        color: white;
        .van-cell__title {
          width: 287.5px;
          flex: auto;
          font-size: 12px;
          span {
            margin-right: 10px;
            font-weight: 700;
            font-size: 15px;
          }
        }
        .van-cell__value {
          flex: auto;
          color: white;
          font-size: 13px;
        }
        .van-icon {
          &::before {
            color: white;
          }
        }
      }
      .list {
        width: 348px;
        height: 156px;
        box-sizing: border-box;
        // padding: 0 11px 0 11px;
        border-radius: 10px;
        .van-grid-item__content {
          align-items: center;
          padding: 0;
          box-sizing: border-box;
          padding: 0;
          .item {
            width: 100px;
            height: 140.6px;
            img {
              width: 100px;
              height: 100px;
            }
            p {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 16px;
              margin: 0;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 14px;
              color: red;
              font-weight: 700;
            }
          }
        }
        .van-grid-item__content--center{
          padding: 0;
        }
      }
    }
  }
  .new {
    width: 100%;
    height: 248.5px;

    .title {
      width: 345.2px;
      height: 56.5px;
      padding: 17px 0 0 0;
      margin: 0 15px 0 15px;
      box-sizing: border-box;
      .van-cell {
        padding: 0;
        .van-cell__title {
          width: 256px;
          // height: 38.5px;
          span {
            font-size: 15px;
            font-weight: 700;
          }
          .van-cell__label {
            margin-top: 1px;
          }
        }
        .van-cell__value {
          font-size: 13px;
          width: 10px;
          line-height: 38.5px;
          color: #333;
        }
        .van-icon {
          line-height: 38.5px;
          color: #333;
        }
      }
    }
    &::after {
      border-bottom: none;
    }
    .newshop {
      width: 100%;
      height: 174.5px;
      padding: 0 15px 0 15px;
      margin: 17.5px 0 21px 0;
      box-sizing: border-box;
      .list {
        width: 348px;
        height: 156px;
        flex-wrap: nowrap;
        overflow-x: auto;
        // box-sizing: border-box;
        // padding: 0 11px 0 11px;
        .van-grid-item__content {
          align-items: center;
          padding: 0;
          .item {
            width: 100px;
            height: 140.6px;
            margin-right: 10px;
            img {
              width: 100px;
              height: 100px;
            }
            p {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 16px;
              margin: 0;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 14px;
              color: red;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
  .promotiontitle {
    width: 345.2px;
    height: 56.5px;
    padding: 17px 0 0 0;
    margin: 0 15px 0 15px;
    box-sizing: border-box;
    .van-cell {
      padding: 0;
      .van-cell__title {
        width: 256px;
        // height: 38.5px;
        span {
          font-size: 15px;
          font-weight: 700;
        }
        .van-cell__label {
          margin-top: 1px;
        }
      }
      .van-cell__value {
        font-size: 13px;
        width: 10px;
        line-height: 38.5px;
        color: #333;
      }
      .van-icon {
        line-height: 38.5px;
        color: #333;
      }
    }
  }

}
</style>
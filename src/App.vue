<template>
  <div id="app">
    <van-tabbar
      active-color="#fc4141"
      inactive-color="#282828"
      route
      v-if="!$route.meta.hideNav"
    >
      <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/classify">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="contact" to="/my">我的</van-tabbar-item>
    </van-tabbar>
    <div
      class="home"
      ref="touchhome"
      style="position: fixed; right: 15px; top: 520px; z-index: 2000"
    >
      <div class="homeCon" v-if="show">
        <router-link class="box" tag="div" to="/"
          ><van-icon name="wap-home-o"
        /></router-link>
        <router-link class="box" tag="div" to="/cart"
          ><van-icon name="shopping-cart-o"
        /></router-link>
        <router-link class="box" tag="div" to="/my"
          ><van-icon name="user-o"
        /></router-link>
      </div>
      <div
        class="picclick"
        @click.stop="open"
        @touchstart.stop="touchstart"
        @touchmove.stop.prevent="touchmov"
      >
        <img :src="pic" alt="" />
      </div>
    </div>
    <router-view />
    <div class="ban" v-if="!$route.meta.hideNav"></div>
  </div>
</template>
<script>
import Open from "@/assets/open.gif";
import Close from "@/assets/close.gif";
export default {
  data() {
    return {
      pic: Open,
      show: false,
      offsetTop: 0,
      y: 0,
    };
  },
  methods: {
    touchstart(e) {
      this.offsetTop = this.$refs.touchhome.offsetTop;
      this.y = e.changedTouches[0].clientY;
    },
    touchmov(e) {
      //  console.log(this.offsetTop+(e.changedTouches[0].clientY-this.y));
      if (
        this.offsetTop + (e.changedTouches[0].clientY - this.y) > 55 &&
        this.offsetTop + (e.changedTouches[0].clientY - this.y) < 520
      ) {
        document.querySelector(".home").style.top =
          this.offsetTop + (e.changedTouches[0].clientY - this.y) + "px";
      }
    },
    open() {
      this.show = !this.show;
      if (this.show) {
        this.pic = Close;
      } else {
        this.pic = Open;
      }
    },
  },
};
</script>
<style lang="less">
.ban {
  height: 50px;
  width: 100%;
}
.home {
  // width: 215px;
  height: 60px;

  display: flex;

  .homeCon {
    width: 150px;
    height: 43px;
    display: flex;
    align-items: center;
    background-color: #f44939 !important;
    color: white;
    border-radius: 43px;
    .box {
      margin: 0 13px;
      .van-icon {
        width: 24px;
        height: 24px;
        font-size: 24px !important;
        //  &::before{
        //    font-size: 24px !important;
        //  }
      }
    }

  }
  .picclick {
    width: 43.1px;
    height: 60px;
    margin: 0 11px;

    img {
      border-radius: 50%;
      overflow: hidden;
      width: 43px;
      height: 43px;
      transform: rotate(90deg);
    }
  }
}
</style>

<template>
  <div class="list">
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="(value, index) in item" :key="index"
      :to="`/commoditydetails/${value.id}`"
      >
        <van-image class="pic" :src="value.image" />
        <p class="text">{{ value.store_name }}</p>
        <span class="pritext">￥{{ value.price }}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
export default {
  props:['item'],
}
</script>
<style lang="less">
.list{
  padding-bottom: 20px;
  background-color: #fff;
  .van-grid{
    width: 345px;
    margin: 0 auto;
      .van-grid-item {
        width: 107.5px;
        height: 145.5px;
        margin-bottom: 10px;
.van-grid-item__content{
        padding: 0;
        .pic {
          width: 107.5px;
          height: 107.5px;
          border-radius: 5px;
          overflow: hidden;
        }
        .text {
          font-size: 13px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin: 0;
          width: 107.5px;
          margin-top: 6px;
        }
        .pritext{
          font-size: 13px;
          color: #fc4141;
        }
      }
}
  }

}
</style>
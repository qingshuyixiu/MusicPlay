<template>
  <div class="promotionshop">
    <div class="promotionGood">
      <van-cell v-for="item in benefit" :to="`/commoditydetails/${item.id}`"  :key="item.id">
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <div class="pic">
            <img :src="item.image" />
          </div>
          <div class="text">
            <p>{{ item.store_name }}</p>
            <div>
              <p>促销价:￥{{ item.ot_price }}</p>
            </div>
            <span class="price">日常价:￥{{ item.price }}</span>
            <span class="num">仅剩:{{ item.stock }}{{ item.unit_name }}</span>
          </div>
        </template>
      </van-cell>
    </div>
  </div>
</template>
<script>
export default {
  props:['benefit']
}
</script>
<style lang="less">
  .promotionshop {
    .promotionGood {
      width: 100%;
      // height: 375px;
      .van-cell {
        padding: 0 16px 0 16px;
        .van-cell__title {
          height: 125px;
          width: 345.2px;
          display: flex;
          justify-content: space-between;
          align-content: center;
          flex-wrap: wrap;

          .pic {
            width: 94px;
            height: 94px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .text {
            width: 236px;
            height: 86px;
            p {
              margin: 0;
            }
            & > :nth-child(1) {
              display: block;
              font-size: 16px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            & > :nth-child(2) {
              display: flex;
              margin: 17px 0 10px 0;
              color: white;
              p {
                padding: 0 9px 0 9px;
                background-image: linear-gradient(90deg, #ff6248 0, #ff3e1e);
                border-radius: 15px 0 15px 0;
                font-size: 12px;
              }
            }
            .price {
              font-size: 12px;
              text-decoration: line-through;
              color: #999;
            }
            .num {
              font-size: 12px;
              color: #999;
              float: right;
            }
          }
        }
      }
    }
  }
</style>
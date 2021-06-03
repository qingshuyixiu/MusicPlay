<template>
  <div class="goodslist">
    <div class="search">
      <van-search
        shape="round"
        background="#e93323"
        placeholder="搜索商品信息"
      />
    </div>
    <div class="nav">
      <div class="active" @click.stop="go">{{ $route.query.title }}</div>
      <div :class="index > 0 ? 'active' : 'text'" @click.stop="price">
        价格
        <img :src="pic[index]" alt="" />
      </div>
      <div :class="ind > 0 ? 'active' : 'text'" @click.stop="salesvol">
        销量
        <img :src="pic[ind]" alt="" />
      </div>
      <div :class="cliflag ? 'active' : 'text'" @click.stop="news">新品</div>
    </div>
    <shop-list v-if="data.length>0"  :bastList="data"></shop-list>
     <div class="nolist" v-if="data.length<=0">
      <div class="nolistpic">
        <van-image
        :src="Nogood"
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
  </div>
</template>
<script>
import ShopList from "@/components/ShopList.vue";
import Nogood from "@/assets/noGood.png"
export default {
  data() {
    return {
      pic: [
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAATCAYAAABPwleqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxMGM0NTk3Mi0xZWRjLTc5NDktYmM5My01MmI5MGUwMjczMTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjEwRUYxQTkyMTE2MTFFOTk4QUVDRTRFNDMyRTZFNkUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjEwRUYxQTgyMTE2MTFFOTk4QUVDRTRFNDMyRTZFNkUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODJmOGJjOWEtNjNhNi1hZDRkLTk0NTMtYWQxYTg4NTU5YTFhIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEwYzQ1OTcyLTFlZGMtNzk0OS1iYzkzLTUyYjkwZTAyNzMxOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjUxYEEAAAD9SURBVHjaYpw5cyYDDiANxHOAOAmIn2NTwIRDIz8QbwdiDyDeCeUTpZkLiLcBsS6UD6K3QMXxamYD4hVAbIUmbgPEy4GYFZdmRiCeB8S+OLziB8TzoeowNE8A4mgG/AAk34euuRKI8xiIAwVAXAFisABxJhC3MZAGQOo/skBDVpmBdPAXpPkhA5kApFkeiJnJtdkLiKeRoTkLFNrTgbiGRI2g2JkOi6pWIJ5MpMaJQNyBnkjygXgpAY0g+UJsKew/NPttxqFxExAnQtVhzRi/gDgCiI+jiR8F4kgg/k0oS34DYk8gvgzlg2hvqDhRhcFHqAE7gNgdyscAAAEGAGMOLKKfpm4VAAAAAElFTkSuQmCC",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAATCAYAAABPwleqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxMGM0NTk3Mi0xZWRjLTc5NDktYmM5My01MmI5MGUwMjczMTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzIyRUYyOEEyMTBFMTFFOTgxNTBERkEyQkU2RTI3NkUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzIyRUYyODkyMTBFMTFFOTgxNTBERkEyQkU2RTI3NkUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODJmOGJjOWEtNjNhNi1hZDRkLTk0NTMtYWQxYTg4NTU5YTFhIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEwYzQ1OTcyLTFlZGMtNzk0OS1iYzkzLTUyYjkwZTAyNzMxOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pn93ow0AAAEASURBVHjaYnxprMyAA0gD8RwgTgLi59gUMOHQyA/E24HYA4h3QvlEaeYC4m1ArAvlg+gtUHG8mtmAeAUQW6GJ2wDxciBmxaWZEYjnAbEvDq/4AfF8qDoMzROAOJoBPwDJ96FrrgTiPAbiQAEQV4AYLECcCcRtDKQBkPqPLNCQVWYgHfxl2ZBW9pCBTACyWR6ImcmyGUh4AfE0MjRngUJ7OhDXkKgRFDvTYVHVCsSTidQ4EYg70BNJPhAvJaARJF+ILYX9h2a/zTg0bgLiRKg6rBnjFxBHAPFxNPGjQBwJxL8JZclvQOwJxJehfBDtDRUnqjD4CDVgBxC7Q/kYACDAAJfhLaK8zH0rAAAAAElFTkSuQmCC",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAATCAYAAABPwleqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxMGM0NTk3Mi0xZWRjLTc5NDktYmM5My01MmI5MGUwMjczMTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTFCNkQ5Q0IyMTBFMTFFOTk4NDBDMUY1MDFFRUREREYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTFCNkQ5Q0EyMTBFMTFFOTk4NDBDMUY1MDFFRUREREYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODJmOGJjOWEtNjNhNi1hZDRkLTk0NTMtYWQxYTg4NTU5YTFhIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEwYzQ1OTcyLTFlZGMtNzk0OS1iYzkzLTUyYjkwZTAyNzMxOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjqHv5oAAAD/SURBVHjaYpw5cyYDDiANxHOAOAmIn2NTwIRDIz8QbwdiDyDeCeUTpZkLiLcBsS6UD6K3QMXxamYD4hVAbIUmbgPEy4GYFZdmRiCeB8S+OLziB8TzoeowNE8A4mgG/AAk34euuRKI8xiIAwVAXAFisABxJhC3MZAGQOo/skBDVpmBdPAXpPkhA5mA8aWxsjyQZibXZi8gnkaG5ixQaE8H4hoSNYJiZzosqlqBeDKRGicCcQd6IskH4qUENILkC7GlsP/Q7LcZh8ZNQJwIVYc1Y/wC4gggPo4mfhSII4H4N6Es+Q2IPYH4MpQPor2h4kQVBh+hBuwAYncoHwMABBgABy8t3vXX4OYAAAAASUVORK5CYII=",
      ],
      index: 0,
      ind: 0,
      cliflag: false,
      data: [],
      priceOrder: "", //价格升降序
      salesOrder: "",//销量升降序
      new:0,//新品
      hotlist:[],
      Nogood
    };
  },
  components: {
    ShopList,
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
    go() {
      this.$router.go(-1);
    },
    price() {//价格升降序
      this.index++;
      this.ind = 0;
      if (this.index == 1) {
        this.priceOrder = "asc";
        this.$axios.get("/api/products", {
            params: {
              sid: this.$route.query.id,
              title: this.$route.query.title,
              priceOrder:this.priceOrder
            },
          })
          .then((d) => {
            console.log(d);
            this.data = d.data.data.map((data) => {
              data = {
                ot_price: data.price,
                store_name: data.store_name,
                sales: data.sales,
                price: data.vip_price,
                image: data.image,
                id: data.id,
              };
              return data;
            });
            console.log(this.data);
          });
      } else if (this.index == 2) {
        this.priceOrder = "desc";
         this.$axios.get("/api/products", {
            params: {
              sid: this.$route.query.id,
              title: this.$route.query.title,
              priceOrder:this.priceOrder
            },
          })
          .then((d) => {
            console.log(d);
            this.data = d.data.data.map((data) => {
              data = {
                ot_price: data.price,
                store_name: data.store_name,
                sales: data.sales,
                price: data.vip_price,
                image: data.image,
                id: data.id,
              };
              return data;
            });
            console.log(this.data);
          });
      } else if (this.index > 2) {
        this.index = 0;
        this.priceOrder = "";
         this.$axios.get("/api/products", {
            params: {
              sid: this.$route.query.id,
              title: this.$route.query.title,
              priceOrder:this.priceOrder
            },
          })
          .then((d) => {
            console.log(d);
            this.data = d.data.data.map((data) => {
              data = {
                ot_price: data.price,
                store_name: data.store_name,
                sales: data.sales,
                price: data.vip_price,
                image: data.image,
                id: data.id,
              };
              return data;
            });
            console.log(this.data);
          });
      }
    },
    salesvol() {//销量升降序
      this.ind++;
      this.index = 0;
      if(this.ind==1){
        this.salesOrder='asc';
        this.$axios.get("/api/products", {
            params: {
              sid: this.$route.query.id,
              title: this.$route.query.title,
              salesOrder:this.salesOrder
            },
          })
          .then((d) => {
            console.log(d);
            this.data = d.data.data.map((data) => {
              data = {
                ot_price: data.price,
                store_name: data.store_name,
                sales: data.sales,
                price: data.vip_price,
                image: data.image,
                id: data.id,
              };
              return data;
            });
            console.log(this.data);
          });
      }else if(this.ind==2){
         this.salesOrder='desc';
          this.$axios.get("/api/products", {
            params: {
              sid: this.$route.query.id,
              title: this.$route.query.title,
              salesOrder:this.salesOrder
            },
          })
          .then((d) => {
            console.log(d);
            this.data = d.data.data.map((data) => {
              data = {
                ot_price: data.price,
                store_name: data.store_name,
                sales: data.sales,
                price: data.vip_price,
                image: data.image,
                id: data.id,
              };
              return data;
            });
            console.log(this.data);
          });
      }else if (this.ind > 2) {
        this.ind = 0;
         this.salesOrder='';
         this.$axios.get("/api/products", {
            params: {
              sid: this.$route.query.id,
              title: this.$route.query.title,
              salesOrder:this.salesOrder
            },
          })
          .then((d) => {
            console.log(d);
            this.data = d.data.data.map((data) => {
              data = {
                ot_price: data.price,
                store_name: data.store_name,
                sales: data.sales,
                price: data.vip_price,
                image: data.image,
                id: data.id,
              };
              return data;
            });
            console.log(this.data);
          });
      }
    },
    news() {//新品
      if (this.cliflag) {
        this.cliflag = false;
        this.new=0;
        this.$axios.get("/api/products", {
            params: {
              sid: this.$route.query.id,
              title: this.$route.query.title,
              news:this.new,
              priceOrder:this.priceOrder,
              salesOrder:this.salesOrder
            },
          })
          .then((d) => {
            console.log(d);
            this.data = d.data.data.map((data) => {
              data = {
                ot_price: data.price,
                store_name: data.store_name,
                sales: data.sales,
                price: data.vip_price,
                image: data.image,
                id: data.id,
              };
              return data;
            });
            console.log(this.data);
          });
        
      } else {
        this.cliflag = true;
        this.new=1;
        this.$axios.get("/api/products", {
            params: {
              sid: this.$route.query.id,
              title: this.$route.query.title,
              news:this.new,
              priceOrder:this.priceOrder,
              salesOrder:this.salesOrder
            },
          })
          .then((d) => {
            console.log(d);
            this.data = d.data.data.map((data) => {
              data = {
                ot_price: data.price,
                store_name: data.store_name,
                sales: data.sales,
                price: data.vip_price,
                image: data.image,
                id: data.id,
              };
              return data;
            });
            console.log(this.data);
          });
      }
    },
  },
  created() {
    // console.log(this.$route.query);
    this.$axios
      .get("/api/products", {
        params: {
          sid: this.$route.query.id,
          title: this.$route.query.title,
        },
      })
      .then((d) => {
        console.log(d);
        if(d.data.data.length>0){
            this.data = d.data.data.map((data) => {
            data = {
              ot_price: data.price,
              store_name: data.store_name,
              sales: data.sales,
              price: data.vip_price,
              image: data.image,
              id: data.id,
            };
            return data;
          });
        }else{
          this.hot()
        }
        
        console.log(this.data);
      });
  },
};
</script>
<style lang="less">
.goodslist {
  .nav {
    width: 100%;
    height: 43px;
    display: flex;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    .text {
      flex: 1;
      text-align: center;
      line-height: 43px;
      font-size: 14px;
      img {
        width: 7.5px;
        height: auto;
      }
    }
    .active {
      color: #e93323;
      flex: 1;
      text-align: center;
      line-height: 43px;
      font-size: 14px;
      img {
        width: 7.5px;
        height: auto;
      }
    }
    
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
}
</style>
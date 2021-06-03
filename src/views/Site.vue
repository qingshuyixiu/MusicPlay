<template>
  <div class="site">
    <div class="sitelist">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        add-button-text="添加新地址"
        @edit='edit'
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
       chosenAddressId: '1',
      list: [
        // {
        //   id: '1',
        //   name: '张三',
        //   tel: '13000000000',
        //   address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
        //   isDefault: false,
        // },
        // {
        //   id: '2',
        //   name: '张三',
        //   tel: '13000000000',
        //   address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
        //   isDefault: false,
        // },
      ],
      
    }
  },
  computed: {
    ...mapGetters(["tokens"]),
  },
  methods: {
    edit(e){//修改地址
      console.log(e.id);
      this.$router.push('/addsite')
    }
  },
  created() {
    this.$axios.get('api/address/list',{
       headers: { "Authori-zation": "Bearer " + this.tokens },
         params:{
           page: 1,
           limit: 20
         }
    }).then(d=>{
      console.log(d);
      this.list=d.data.data.map((da)=>{
        console.log(da);
        let list={
          id:da.id,
          name:da.real_name,
          tel:da.phone,
          address:da.province+da.city+da.district+da.detail,
          isDefault:da.is_default
        }
        return list;
      })
    })
  },
}
</script>

<style lang="less">
.site{
  width: 100%;
  height: 100vh;
  background-color: #eee;
  position: relative;
  .btn{
    // position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 53px;
    display: flex;
    justify-content: center;
    align-items: center;
    .addsite{
    width: 180px;
    height: 38px;
    margin: 0 auto;
  }
  }
}
</style>
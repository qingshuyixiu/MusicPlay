(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2edebc8c"],{"01b2":function(t,i,a){"use strict";a("4a3f")},1091:function(t,i,a){"use strict";a("2d5f")},"2d5f":function(t,i,a){},"31f9":function(t,i,a){t.exports=a.p+"img/noOrder.90017ce2.png"},"350a":function(t,i,a){"use strict";var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"ordershoplist"},[0!=t.data.length?a("div",t._l(t.data,(function(i){return a("div",{key:i.id,staticClass:"box"},[a("div",{staticClass:"title"},[a("div",{staticClass:"left"},[t._v(t._s(i._add_time))]),a("div",{staticClass:"right"},[t._v(t._s(i._status._title))])]),a("o-shop-li",{attrs:{item:i}}),a("div",{staticClass:"textmoney"},[t._v(" 共"+t._s(i.total_num)+"件商品，总金额 "),a("span",[t._v("￥"+t._s(i.pay_price))])]),a("div",{staticClass:"btns"},[0==t.id?a("div",[a("van-button",{staticClass:"cancel",attrs:{type:"primary",round:"",color:"white"},on:{click:function(a){return t.cancle(i.order_id)}}},[t._v("取消订单")]),a("van-button",{attrs:{type:"primary",round:"",color:"#e93233"},on:{click:t.buy}},[t._v("立即付款")]),a("van-popup",{style:{height:"30%"},attrs:{round:"",position:"bottom",closeable:""},model:{value:t.show,callback:function(i){t.show=i},expression:"show"}},[a("div",{staticClass:"text"},[t._v("请选择付款方式")]),a("div",{staticClass:"balance"},[a("div",{staticClass:"balancemoney",on:{click:function(a){return t.yue(i.order_id)}}},[a("div",{staticClass:"left"},[a("svg",{staticClass:"icon",attrs:{t:"1622019141143",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2385",width:"24",height:"24"}},[a("path",{attrs:{d:"M768 250.311111l-11.377778 5.688889c-68.266667 59.733333-156.444444 91.022222-244.622222 91.022222-91.022222 0-176.355556-31.288889-244.622222-91.022222L256 250.311111C119.466667 335.644444 25.6 483.555556 25.6 625.777778c0 219.022222 219.022222 398.222222 486.4 398.222222 267.377778 0 486.4-179.2 486.4-398.222222 0-142.222222-93.866667-290.133333-230.4-375.466667z m-113.777778 438.044445c17.066667 0 28.444444 14.222222 28.444445 28.444444 0 17.066667-14.222222 28.444444-28.444445 28.444444h-113.777778v62.577778c0 17.066667-14.222222 28.444444-28.444444 28.444445-17.066667 0-28.444444-14.222222-28.444444-28.444445v-62.577778h-113.777778c-17.066667 0-28.444444-14.222222-28.444445-28.444444 0-17.066667 14.222222-28.444444 28.444445-28.444444h113.777778v-68.266667h-113.777778c-17.066667 0-28.444444-14.222222-28.444445-28.444445 0-17.066667 14.222222-28.444444 28.444445-28.444444h68.266666l-48.355555-45.511111c-11.377778-11.377778-11.377778-31.288889 0-42.666667 11.377778-11.377778 31.288889-11.377778 42.666667 0l82.488888 76.8 79.644445-76.8c11.377778-11.377778 31.288889-11.377778 42.666667 0 11.377778 11.377778 11.377778 31.288889 0 42.666667l-48.355556 45.511111H654.222222c17.066667 0 28.444444 14.222222 28.444445 28.444444 0 17.066667-14.222222 28.444444-28.444445 28.444445h-113.777778v68.266667h113.777778z",fill:"#FE9C01","p-id":"2386"}}),a("path",{attrs:{d:"M733.866667 230.4s2.844444 0 0 0C674.133333 281.6 597.333333 312.888889 512 312.888889s-162.133333-31.288889-224.711111-82.488889c-51.2-42.666667-71.111111-85.333333-42.666667-125.155556 22.755556-34.133333 110.933333-25.6 153.6-19.911111 14.222222 2.844444 25.6-5.688889 31.288889-19.911111C446.577778 25.6 477.866667 0 512 0s65.422222 25.6 82.488889 65.422222c5.688889 14.222222 17.066667 22.755556 31.288889 19.911111 42.666667-5.688889 130.844444-14.222222 153.6 19.911111 25.6 39.822222 5.688889 82.488889-45.511111 125.155556z",fill:"#FE9C01","p-id":"2387"}}),a("path",{attrs:{d:"M290.133333 230.4c-51.2-42.666667-71.111111-85.333333-42.666666-125.155556 19.911111-34.133333 108.088889-25.6 150.755555-19.911111 14.222222 2.844444 25.6-5.688889 31.288889-19.911111C446.577778 25.6 477.866667 0 512 0s65.422222 25.6 82.488889 65.422222c5.688889 14.222222 17.066667 22.755556 31.288889 19.911111 42.666667-5.688889 130.844444-14.222222 153.6 19.911111 25.6 39.822222 5.688889 82.488889-42.666667 125.155556",fill:"#FE9C01","p-id":"2388"}})]),t._v(" 余额支付 ")]),a("div",{staticClass:"right"},[a("p",[t._v("可用余额:￥"+t._s(t.now_money))])])])]),a("div",{staticClass:"wx"},[a("div",{staticClass:"wxmoney",on:{click:function(a){return t.wx(i.order_id)}}},[a("div",{staticClass:"left"},[a("svg",{staticClass:"icon",attrs:{t:"1622018946625",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1344",width:"28",height:"28"}},[a("path",{attrs:{d:"M557.74 507.65a21.17 21.17 0 1 0 21.17 21.17 21.24 21.24 0 0 0-21.17-21.17zM376.45 375.5a24.69 24.69 0 1 0 12.24 21.32 24.76 24.76 0 0 0-12.24-21.32zM512.08 421.47a24.64 24.64 0 1 0-12.25-46 24.22 24.22 0 0 0-12.4 21.32 24.65 24.65 0 0 0 24.65 24.68zM674 507.65a21.17 21.17 0 1 0 21.17 21.17A21.24 21.24 0 0 0 674 507.65z",fill:"#07B906","p-id":"1345"}}),a("path",{attrs:{d:"M512 72C269.17 72 72 269.17 72 512s197.17 440 440 440 440-197.17 440-440S754.83 72 512 72z m-79.16 548.3c-21.16 0-42.18-3.63-61.68-8.77-1.67 0-3.63-1.66-3.63-1.66L320.05 638c-12.25 7.11-21.17 1.66-17.54-12.25 0 0 12.25-51.1 10.58-51.1-45.81-29.95-66.83-68.65-66.83-121.43C249.89 363.41 327.16 293 432.84 293c96.93 0 176 59.72 190.07 139.1h-8.77c-96.92 0-176 67-176 149.54a133.09 133.09 0 0 0 5.29 38.71z m283.36 68.8l14.06 28.27c7.11 12.25 1.66 17.54-10.58 10.59 0 0-35.08-21.17-36.9-19.36-15.87 5.3-51.1 10.59-68.64 10.59-89.82 0-163.75-61.69-163.75-137.29S524.32 444.45 614 444.45s163.75 61.69 163.75 137.29c-0.01 44-22.84 80.75-61.55 107.36z",fill:"#07B906","p-id":"1346"}})]),t._v(" 微信支付 ")]),a("div",{staticClass:"right"},[a("p",[t._v("微信快捷支付")])])])])])],1):t._e(),1==t.id?a("div",[a("van-button",{attrs:{type:"primary",round:"",color:"#e93233",to:"/orderdetails/"+i.order_id}},[t._v("查看详情")])],1):t._e()])],1)})),0):t._e(),0==t.data.length?a("div",{staticClass:"noorder"},[a("div",{staticClass:"pic"},[a("img",{attrs:{src:t.noOrder,alt:""}})])]):t._e()])},e=[],n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"oshopli"},t._l(t.item.cartInfo,(function(i){return a("div",{key:i.id,staticClass:"main"},[a("div",{staticClass:"pic",on:{click:function(a){return t.goshop(i.productInfo)}}},[a("img",{attrs:{src:i.productInfo.image,alt:""}})]),a("div",{staticClass:"text",on:{click:t.godetails}},[a("div",{staticClass:"lefttitle"},[t._v(" "+t._s(i.productInfo.store_name)+" ")]),a("div",{staticClass:"rightmoney"},[a("div",{staticClass:"top"},[t._v("￥"+t._s(i.productInfo.give_integral))]),a("div",{staticClass:"bottom"},[t._v("x"+t._s(i.cart_num))])])])])})),0)},o=[],r={props:["item"],methods:{godetails:function(){this.$router.push("/orderdetails/"+this.item.order_id)},goshop:function(t){this.$router.push("/commoditydetails/"+t.id)}},created:function(){}},c=r,d=(a("1091"),a("2877")),l=Object(d["a"])(c,n,o,!1,null,"18056c68",null),p=l.exports,h=a("31f9"),u=a.n(h),v={props:["id","now_money"],data:function(){return{data:[],noOrder:u.a,show:!1,paytype:""}},methods:{yue:function(t){var i=this;this.show=!1,this.paytype="yue",this.$axios.post("/api/order/pay",{from:"weixinh5",paytype:this.paytype,uni:t}).then((function(t){i.$toast({message:"支付成功",onClose:function(){i.req(),i.$emit("update")}})}))},wx:function(t){var i=this;this.show=!1,this.paytype="weixin",this.$axios.post("/api/order/pay",{from:"weixinh5",paytype:this.paytype,uni:t}).then((function(t){i.$toast({message:"支付失败"})}))},cancle:function(t){var i=this;this.$dialog.confirm({title:"提示",message:"确认取消该订单?",theme:"round-button"}).then((function(){i.$axios.post("/api/order/cancel",{id:t}).then((function(t){i.$toast({message:t.data.msg,onClose:function(){i.req(),i.$emit("update")}})}))})).catch((function(){}))},req:function(){var t=this;0==this.id?this.$axios.get("/api/order/list",{params:{page:1,limit:20,type:0}}).then((function(i){t.data=i.data.data})):1==this.id?this.$axios.get("/api/order/list",{params:{page:1,limit:20,type:1}}).then((function(i){t.data=i.data.data})):2==this.id?this.$axios.get("/api/order/list",{params:{page:1,limit:20,type:2}}).then((function(i){t.data=i.data.data})):3==this.id?this.$axios.get("/api/order/list",{params:{page:1,limit:20,type:3}}).then((function(i){t.data=i.data.data})):4==this.id&&this.$axios.get("/api/order/list",{params:{page:1,limit:20,type:4}}).then((function(i){t.data=i.data.data}))},buy:function(){this.show=!0}},components:{OShopLi:p},created:function(){var t=this;0==this.id?this.$axios.get("/api/order/list",{params:{page:1,limit:20,type:0}}).then((function(i){t.data=i.data.data})):1==this.id?this.$axios.get("/api/order/list",{params:{page:1,limit:20,type:1}}).then((function(i){t.data=i.data.data})):2==this.id?this.$axios.get("/api/order/list",{params:{page:1,limit:20,type:2}}).then((function(i){t.data=i.data.data})):3==this.id?this.$axios.get("/api/order/list",{params:{page:1,limit:20,type:3}}).then((function(i){t.data=i.data.data})):4==this.id&&this.$axios.get("/api/order/list",{params:{page:1,limit:20,type:4}}).then((function(i){t.data=i.data.data}))}},f=v,m=(a("01b2"),Object(d["a"])(f,s,e,!1,null,null,null));i["a"]=m.exports},"4a3f":function(t,i,a){},"4ae5":function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"awaitpayment"},[a("order-shop-list",{attrs:{id:1}})],1)},e=[],n=a("350a"),o={components:{OrderShopList:n["a"]}},r=o,c=a("2877"),d=Object(c["a"])(r,s,e,!1,null,null,null);i["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2edebc8c.22558168.js.map
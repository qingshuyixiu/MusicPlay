(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a37dedf"],{"35aa":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"orderdetails"},[a("div",{staticClass:"header"},[a("div",{staticClass:"pic"},[a("img",{attrs:{src:t.data.status_pic,alt:""}})]),a("div",{staticClass:"text"},[a("div",{staticClass:"bigtext"},[t._v(t._s(t.status._msg))]),a("div",{staticClass:"time"},[t._v(t._s(t.data._pay_time))])])]),a("div",{staticClass:"nav"},[a("van-steps",{attrs:{active:t.active,"active-color":"#e93323"}},[a("van-step",[t._v("待付款")]),a("van-step",[t._v("待发货")]),a("van-step",[t._v("待收货")]),a("van-step",[t._v("待评价")]),a("van-step",[t._v("已完成")])],1),a("div",{staticClass:"silt"},[a("div",{staticClass:"name"},[a("span",[t._v(t._s(t.data.real_name))]),a("span",{staticClass:"phone"},[t._v(t._s(t.data.user_phone))])]),a("div",{staticClass:"silttext"},[t._v(t._s(t.data.user_address))])]),a("div",{staticClass:"line"},[a("img",{attrs:{src:t.Line,alt:""}})])],1),a("div",{staticClass:"shoplist"},[a("van-cell",{attrs:{title:"共"+t.cartInfo.length+"件商品",border:!1}}),t._l(t.cartInfo,(function(t){return a("van-card",{key:t.id,attrs:{num:t.cart_num,price:t.productInfo.attrInfo.price,desc:t.productInfo.attrInfo.suk,title:t.productInfo.store_name,thumb:t.productInfo.image}})}))],2),a("div",{staticClass:"message"},[a("div",{staticClass:"text"},[a("div",{staticClass:"left"},[t._v("订单编号：")]),a("div",{staticClass:"right"},[t._v(t._s(t.data.order_id))])]),a("div",{staticClass:"text"},[a("div",{staticClass:"left"},[t._v("下单时间：")]),a("div",{staticClass:"right"},[t._v(t._s(t.data._add_time))])]),t._m(0),t._m(1),a("div",{staticClass:"text"},[a("div",{staticClass:"left"},[t._v("支付方式：")]),a("div",{staticClass:"right"},[t._v(t._s(t.status._payType))])])]),a("div",{staticClass:"money"},[a("div",{staticClass:"text"},[a("div",{staticClass:"left"},[t._v("支付金额:")]),a("div",{staticClass:"right"},[t._v("￥"+t._s(t.data.total_price))])]),a("div",{staticClass:"texts"},[a("div",{staticClass:"left"},[t._v("运费:")]),a("div",{staticClass:"right"},[t._v("￥"+t._s(t.data.total_postage))])]),a("van-cell",{scopedSlots:t._u([{key:"title",fn:function(){return[a("div",{staticClass:"moneys"},[t._v(" 实付款："),a("span",[t._v("￥"+t._s(t.data.pay_price))])])]},proxy:!0}])})],1),a("div",{staticClass:"box"}),1==this.active?a("div",{staticClass:"bottom"},[a("van-button",{staticClass:"cancel",attrs:{round:"",type:"info",color:"white"}},[t._v("申请退款")])],1):t._e(),0==this.active?a("div",{staticClass:"bottom"},[a("van-button",{staticClass:"cancel",attrs:{type:"primary",round:"",color:"white"},on:{click:function(s){return t.cancle(t.data.order_id)}}},[t._v("取消订单")]),a("van-button",{attrs:{type:"primary",round:"",color:"#e93233"},on:{click:function(s){return t.buy(t.data.order_id)}}},[t._v("立即付款")])],1):t._e(),a("div",{staticClass:"selectmoney"},[a("van-popup",{style:{height:"30%"},attrs:{round:"",position:"bottom",closeable:""},model:{value:t.show,callback:function(s){t.show=s},expression:"show"}},[a("div",{staticClass:"text"},[t._v("请选择付款方式")]),a("div",{staticClass:"balance"},[a("div",{staticClass:"balancemoney",on:{click:function(s){return t.yue(t.id)}}},[a("div",{staticClass:"left"},[a("svg",{staticClass:"icon",attrs:{t:"1622019141143",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2385",width:"24",height:"24"}},[a("path",{attrs:{d:"M768 250.311111l-11.377778 5.688889c-68.266667 59.733333-156.444444 91.022222-244.622222 91.022222-91.022222 0-176.355556-31.288889-244.622222-91.022222L256 250.311111C119.466667 335.644444 25.6 483.555556 25.6 625.777778c0 219.022222 219.022222 398.222222 486.4 398.222222 267.377778 0 486.4-179.2 486.4-398.222222 0-142.222222-93.866667-290.133333-230.4-375.466667z m-113.777778 438.044445c17.066667 0 28.444444 14.222222 28.444445 28.444444 0 17.066667-14.222222 28.444444-28.444445 28.444444h-113.777778v62.577778c0 17.066667-14.222222 28.444444-28.444444 28.444445-17.066667 0-28.444444-14.222222-28.444444-28.444445v-62.577778h-113.777778c-17.066667 0-28.444444-14.222222-28.444445-28.444444 0-17.066667 14.222222-28.444444 28.444445-28.444444h113.777778v-68.266667h-113.777778c-17.066667 0-28.444444-14.222222-28.444445-28.444445 0-17.066667 14.222222-28.444444 28.444445-28.444444h68.266666l-48.355555-45.511111c-11.377778-11.377778-11.377778-31.288889 0-42.666667 11.377778-11.377778 31.288889-11.377778 42.666667 0l82.488888 76.8 79.644445-76.8c11.377778-11.377778 31.288889-11.377778 42.666667 0 11.377778 11.377778 11.377778 31.288889 0 42.666667l-48.355556 45.511111H654.222222c17.066667 0 28.444444 14.222222 28.444445 28.444444 0 17.066667-14.222222 28.444444-28.444445 28.444445h-113.777778v68.266667h113.777778z",fill:"#FE9C01","p-id":"2386"}}),a("path",{attrs:{d:"M733.866667 230.4s2.844444 0 0 0C674.133333 281.6 597.333333 312.888889 512 312.888889s-162.133333-31.288889-224.711111-82.488889c-51.2-42.666667-71.111111-85.333333-42.666667-125.155556 22.755556-34.133333 110.933333-25.6 153.6-19.911111 14.222222 2.844444 25.6-5.688889 31.288889-19.911111C446.577778 25.6 477.866667 0 512 0s65.422222 25.6 82.488889 65.422222c5.688889 14.222222 17.066667 22.755556 31.288889 19.911111 42.666667-5.688889 130.844444-14.222222 153.6 19.911111 25.6 39.822222 5.688889 82.488889-45.511111 125.155556z",fill:"#FE9C01","p-id":"2387"}}),a("path",{attrs:{d:"M290.133333 230.4c-51.2-42.666667-71.111111-85.333333-42.666666-125.155556 19.911111-34.133333 108.088889-25.6 150.755555-19.911111 14.222222 2.844444 25.6-5.688889 31.288889-19.911111C446.577778 25.6 477.866667 0 512 0s65.422222 25.6 82.488889 65.422222c5.688889 14.222222 17.066667 22.755556 31.288889 19.911111 42.666667-5.688889 130.844444-14.222222 153.6 19.911111 25.6 39.822222 5.688889 82.488889-42.666667 125.155556",fill:"#FE9C01","p-id":"2388"}})]),t._v(" 余额支付 ")]),a("div",{staticClass:"right"},[a("p",[t._v("可用余额:￥"+t._s(t.now_money))])])])]),a("div",{staticClass:"wx"},[a("div",{staticClass:"wxmoney",on:{click:function(s){return t.wx(t.id)}}},[a("div",{staticClass:"left"},[a("svg",{staticClass:"icon",attrs:{t:"1622018946625",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1344",width:"28",height:"28"}},[a("path",{attrs:{d:"M557.74 507.65a21.17 21.17 0 1 0 21.17 21.17 21.24 21.24 0 0 0-21.17-21.17zM376.45 375.5a24.69 24.69 0 1 0 12.24 21.32 24.76 24.76 0 0 0-12.24-21.32zM512.08 421.47a24.64 24.64 0 1 0-12.25-46 24.22 24.22 0 0 0-12.4 21.32 24.65 24.65 0 0 0 24.65 24.68zM674 507.65a21.17 21.17 0 1 0 21.17 21.17A21.24 21.24 0 0 0 674 507.65z",fill:"#07B906","p-id":"1345"}}),a("path",{attrs:{d:"M512 72C269.17 72 72 269.17 72 512s197.17 440 440 440 440-197.17 440-440S754.83 72 512 72z m-79.16 548.3c-21.16 0-42.18-3.63-61.68-8.77-1.67 0-3.63-1.66-3.63-1.66L320.05 638c-12.25 7.11-21.17 1.66-17.54-12.25 0 0 12.25-51.1 10.58-51.1-45.81-29.95-66.83-68.65-66.83-121.43C249.89 363.41 327.16 293 432.84 293c96.93 0 176 59.72 190.07 139.1h-8.77c-96.92 0-176 67-176 149.54a133.09 133.09 0 0 0 5.29 38.71z m283.36 68.8l14.06 28.27c7.11 12.25 1.66 17.54-10.58 10.59 0 0-35.08-21.17-36.9-19.36-15.87 5.3-51.1 10.59-68.64 10.59-89.82 0-163.75-61.69-163.75-137.29S524.32 444.45 614 444.45s163.75 61.69 163.75 137.29c-0.01 44-22.84 80.75-61.55 107.36z",fill:"#07B906","p-id":"1346"}})]),t._v(" 微信支付 ")]),a("div",{staticClass:"right"},[a("p",[t._v("微信快捷支付")])])])])])],1)])},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"text"},[a("div",{staticClass:"left"},[t._v("订单类型：")]),a("div",{staticClass:"right"},[t._v("普通订单")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"text"},[a("div",{staticClass:"left"},[t._v("支付状态：")]),a("div",{staticClass:"right"},[t._v("已支付")])])}],c=a("f8b9"),n=a.n(c),o={props:["id"],data:function(){return{data:{},active:5,status:{},Line:n.a,cartInfo:{},show:!1,now_money:"",paytype:""}},methods:{yue:function(t){var s=this;this.show=!1,this.paytype="yue",this.$axios.post("/api/order/pay",{from:"weixinh5",paytype:this.paytype,uni:t}).then((function(t){s.$toast({message:"支付成功",onClose:function(){s.$router.push("/orderlist")}})}))},wx:function(t){var s=this;this.show=!1,this.paytype="weixin",this.$axios.post("/api/order/pay",{from:"weixinh5",paytype:this.paytype,uni:t}).then((function(t){s.$toast({message:"支付失败"})}))},buy:function(t){this.show=!0},cancle:function(t){var s=this;this.$dialog.confirm({title:"提示",message:"确认取消该订单?",theme:"round-button"}).then((function(){s.$axios.post("/api/order/cancel",{id:t}).then((function(t){s.$toast({message:t.data.msg,onClose:function(){s.$router.push("/orderlist")}})}))}))}},created:function(){var t=this;this.$axios.get("/api/order/detail/"+this.id).then((function(s){t.data=s.data.data,t.status=s.data.data._status,t.cartInfo=s.data.data.cartInfo,t.active=s.data.data._status._type})),this.$axios.get("/api/user").then((function(s){t.now_money=s.data.data.now_money}))}},l=o,d=(a("b1bd"),a("2877")),r=Object(d["a"])(l,i,e,!1,null,null,null);s["default"]=r.exports},"553d":function(t,s,a){},b1bd:function(t,s,a){"use strict";a("553d")},f8b9:function(t,s,a){t.exports=a.p+"img/line.05bf1c84.jpg"}}]);
//# sourceMappingURL=chunk-2a37dedf.3e3ce7de.js.map
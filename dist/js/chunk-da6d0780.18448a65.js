(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da6d0780"],{"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),o=n("2d00"),a=i("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2481:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"promotionitem"},[n("van-swipe",{staticClass:"my-swipe",attrs:{"indicator-color":"#fc4141",autoplay:3e3}},t._l(t.banner,(function(t){return n("van-swipe-item",{key:t.id},[n("img",{attrs:{src:t.img,alt:""}})])})),1),n("van-divider",{style:{color:"#282828",borderColor:"#282828",padding:"0 16px"}},[t._v(" 促销单品 ")]),n("promotion-shop",{attrs:{benefit:t.benefit}})],1)},i=[],o=(n("d81d"),n("b9ee")),a={data:function(){return{banner:[],benefit:[]}},components:{PromotionShop:o["a"]},created:function(){var t=this;this.$axios.get("/api/groom/list/4").then((function(e){t.banner=e.data.data.banner,t.benefit=e.data.data.list.map((function(t){return t={ot_price:t.price,store_name:t.store_name,sales:t.sales,price:t.ot_price,image:t.image,id:t.id,stock:t.stock,unit_name:t.unit_name},t}))}))}},c=a,s=(n("8c5b"),n("2877")),u=Object(s["a"])(c,r,i,!1,null,null,null);e["default"]=u.exports},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),o=n("b622"),a=o("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"8c5b":function(t,e,n){"use strict";n("de0f")},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),a=n("50c4"),c=n("65f0"),s=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,f=4==t,d=6==t,p=7==t,l=5==t||d;return function(b,v,m,h){for(var y,w,g=o(b),_=i(g),x=r(v,m,3),k=a(_.length),A=0,C=h||c,E=e?C(b,k):n||p?C(b,0):void 0;k>A;A++)if((l||A in _)&&(y=_[A],w=x(y,A,g),t))if(e)E[A]=w;else if(w)switch(t){case 3:return!0;case 5:return y;case 6:return A;case 2:s.call(E,y)}else switch(t){case 4:return!1;case 7:s.call(E,y)}return d?-1:u||f?f:E}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},d81d:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").map,o=n("1dde"),a=o("map");r({target:"Array",proto:!0,forced:!a},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},de0f:function(t,e,n){},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=chunk-da6d0780.18448a65.js.map
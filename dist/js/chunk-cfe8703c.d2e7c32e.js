(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cfe8703c"],{"0cb2":function(t,a,e){var n=e("7b0b"),o=Math.floor,s="".replace,i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,r=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,a,e,c,l,u){var d=e+t.length,f=c.length,v=r;return void 0!==l&&(l=n(l),v=i),s.call(u,v,(function(n,s){var i;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,e);case"'":return a.slice(d);case"<":i=l[s.slice(1,-1)];break;default:var r=+s;if(0===r)return n;if(r>f){var u=o(r/10);return 0===u?n:u<=f?void 0===c[u-1]?s.charAt(1):c[u-1]+s.charAt(1):n}i=c[r-1]}return void 0===i?"":i}))}},"1bcb":function(t,a,e){},"4fde":function(t,a,e){"use strict";e("1bcb")},5319:function(t,a,e){"use strict";var n=e("d784"),o=e("825a"),s=e("50c4"),i=e("a691"),r=e("1d80"),c=e("8aa5"),l=e("0cb2"),u=e("14c3"),d=Math.max,f=Math.min,v=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,a,e,n){var p=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=n.REPLACE_KEEPS_$0,g=p?"$":"$0";return[function(e,n){var o=r(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,o,n):a.call(String(o),e,n)},function(t,n){if(!p&&m||"string"===typeof n&&-1===n.indexOf(g)){var r=e(a,t,this,n);if(r.done)return r.value}var h=o(t),b=String(this),k="function"===typeof n;k||(n=String(n));var y=h.global;if(y){var w=h.unicode;h.lastIndex=0}var $=[];while(1){var _=u(h,b);if(null===_)break;if($.push(_),!y)break;var x=String(_[0]);""===x&&(h.lastIndex=c(b,s(h.lastIndex),w))}for(var S="",E=0,C=0;C<$.length;C++){_=$[C];for(var I=String(_[0]),L=d(f(i(_.index),b.length),0),T=[],A=1;A<_.length;A++)T.push(v(_[A]));var O=_.groups;if(k){var P=[I].concat(T,L,b);void 0!==O&&P.push(O);var j=String(n.apply(void 0,P))}else j=l(I,b,L,T,O,n);L>=E&&(S+=b.slice(E,L)+j,E=L+I.length)}return S+b.slice(E)}]}))},a55b:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"login"},[t._m(0),e("div",{staticClass:"loginform"},[e("van-tabs",[e("van-tab",{attrs:{title:"账号登录",name:"a"}},[e("van-form",{on:{submit:t.dologin}},[e("van-field",{attrs:{"left-icon":"graphic",name:"account",placeholder:"请输入手机号码",rules:[{required:!0,message:"请输入手机号码"}]},model:{value:t.account,callback:function(a){t.account=a},expression:"account"}}),e("van-field",{attrs:{"left-icon":"lock",type:"password",name:"password",placeholder:"填写登录密码",rules:[{required:!0,message:"填写登录密码"}]},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}}),e("div",{staticStyle:{margin:"16px"}},[e("van-button",{attrs:{color:"linear-gradient(90deg,#f35447 0,#ff8e3c)",round:"",block:"",type:"info","native-type":"submit"}},[t._v("登录")])],1),e("div",{staticClass:"tip"},[t._v("没有账号?"),e("span",[t._v("立即注册")])])],1)],1),e("van-tab",{attrs:{title:"快速登录",name:"b"}},[e("van-form",{on:{submit:t.doSmsLogin}},[e("van-field",{attrs:{"left-icon":"graphic",name:"用户名",placeholder:"请输入手机号码"},model:{value:t.mobile,callback:function(a){t.mobile=a},expression:"mobile"}}),e("van-field",{attrs:{"left-icon":"lock",type:"password",name:"密码",placeholder:"填写验证码"},scopedSlots:t._u([{key:"button",fn:function(){return[e("van-button",{attrs:{size:"small",disabled:t.countdown<60,type:"warning"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.getSms(a)}}},[t._v(t._s(t.countdown>=60?"获取验证码":t.countdown+"秒"))])]},proxy:!0}]),model:{value:t.sms,callback:function(a){t.sms=a},expression:"sms"}}),e("div",{staticStyle:{margin:"16px"}},[e("van-button",{attrs:{color:"linear-gradient(90deg,#f35447 0,#ff8e3c)",round:"",block:"",type:"info","native-type":"submit"}},[t._v("登录")])],1),e("div",{staticClass:"tip"},[t._v("没有账号?"),e("span",[t._v("立即注册")])])],1)],1)],1)],1),e("div",{staticClass:"bottom"})])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"top"},[e("div",{staticClass:"toppic"})])}],s=e("5530"),i=(e("ac1f"),e("5319"),e("2f62")),r={data:function(){return{account:"",password:"",mobile:"",sms:"",smskey:"",countdown:60}},created:function(){var t=this;this.axios.get("/api/verify_code").then((function(a){t.smskey=a.data.data.key}))},methods:Object(s["a"])(Object(s["a"])({dologin:function(t){var a=this;this.$axios.post("/api/login",t).then((function(t){200==t.data.status?(a.saveToken(t.data.data.token),a.getLoginInfo(t.data.data.token),a.$toast({message:t.data.msg,onClose:function(){a.$router.replace("/my")}})):a.$toast(t.data.msg)}))},doSmsLogin:function(){var t=this;this.$axios.post("/api/login/mobile",{phone:this.mobile,captcha:this.sms}).then((function(a){if(200===a.data.status){var e=a.data.data.token;t.saveToken(e),t.getLoginInfo(),t.$toast({message:"登录成功",icon:"passed",onClose:function(){t.$router.push("/my")}})}else t.$toast(a.data.msg)}))},getSms:function(){var t=this,a=this.mobile;this.axios.post("api/register/verify",{key:this.smskey,phone:a,type:"login"}).then((function(a){if(a=a.data,200==a.status){var e=setInterval((function(){if(t.countdown<=0)return clearInterval(e),void(t.countdown=60);t.countdown--}),1e3);t.$toast("验证码发送成功!")}else t.$toast(a.msg)}))}},Object(i["d"])(["saveToken"])),Object(i["b"])(["getLoginInfo"]))},c=r,l=(e("4fde"),e("2877")),u=Object(l["a"])(c,n,o,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-cfe8703c.d2e7c32e.js.map
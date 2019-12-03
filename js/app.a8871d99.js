(function(e){function r(r){for(var n,u,c=r[0],i=r[1],s=r[2],l=0,f=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(r);while(f.length)f.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],n=!0,u=1;u<t.length;u++){var i=t[u];0!==o[i]&&(n=!1)}n&&(a.splice(r--,1),e=c(c.s=t[0]))}return e}var n={},o={app:0},a=[];function u(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6c0ce925"}[e]+".js"}function c(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var r=[],t=o[e];if(0!==t)if(t)r.push(t[2]);else{var n=new Promise((function(r,n){t=o[e]=[r,n]}));r.push(t[2]=n);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=u(e);var s=new Error;a=function(r){i.onerror=i.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,t[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(r)},c.m=e,c.c=n,c.d=function(e,r,t){c.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,r){if(1&r&&(e=c(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)c.d(t,n,function(r){return e[r]}.bind(null,n));return t},c.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(r,"a",r),r},c.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=r,i=i.slice();for(var l=0;l<i.length;l++)r(i[l]);var p=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,r,t){e.exports=t("56d7")},"034f":function(e,r,t){"use strict";var n=t("85ec"),o=t.n(n);o.a},3409:function(e,r,t){},5265:function(e,r,t){"use strict";var n=t("3409"),o=t.n(n);o.a},"56d7":function(e,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],u=(t("034f"),t("2877")),c={},i=Object(u["a"])(c,o,a,!1,null,null,null),s=i.exports,l=(t("d3b7"),t("8c4f")),p=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("p",{staticClass:"error"},[e._v(e._s(e.error))]),t("p",{staticClass:"decode-result"},[e._v("Last result: "),t("b",[e._v(e._s(e.result))])]),t("qrcode-stream",{on:{decode:e.onDecode,init:e.onInit}})],1)},f=[],d=(t("b0c0"),t("96cf"),t("9a3e")),m={components:{QrcodeStream:d["QrcodeStream"]},data:function(){return{result:"",error:""}},methods:{onDecode:function(e){this.result=e},onInit:function(e){return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,regeneratorRuntime.awrap(e);case 3:r.next=8;break;case 5:r.prev=5,r.t0=r["catch"](0),"NotAllowedError"===r.t0.name?this.error="ERROR: you need to grant camera access permisson":"NotFoundError"===r.t0.name?this.error="ERROR: no camera on this device":"NotSupportedError"===r.t0.name?this.error="ERROR: secure context required (HTTPS, localhost)":"NotReadableError"===r.t0.name?this.error="ERROR: is the camera already in use?":"OverconstrainedError"===r.t0.name?this.error="ERROR: installed cameras are not suitable":"StreamApiNotSupportedError"===r.t0.name&&(this.error="ERROR: Stream API is not supported in this browser");case 8:case"end":return r.stop()}}),null,this,[[0,5]])}}},h=m,v=(t("5265"),Object(u["a"])(h,p,f,!1,null,"6c295be0",null)),b=v.exports;n["a"].use(l["a"]);var y=[{path:"/",name:"home",component:b},{path:"/about",name:"about",component:function(){return t.e("about").then(t.bind(null,"f820"))}}],w=new l["a"]({routes:y}),g=w,R=t("2f62");n["a"].use(R["a"]);var O=new R["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].use(d["default"]),n["a"].config.productionTip=!1,new n["a"]({router:g,store:O,render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,r,t){}});
//# sourceMappingURL=app.a8871d99.js.map
(function(e){function t(t){for(var n,s,c=t[0],i=t[1],l=t[2],d=0,p=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,c=1;c<a.length;c++){var i=a[c];0!==r[i]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},o=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"06bd":function(e,t,a){},"11bb":function(e,t,a){},"11bf":function(e,t,a){"use strict";a("ac74")},"33c6":function(e,t,a){"use strict";a("11bb")},"4b5f":function(e,t,a){},6376:function(e,t,a){"use strict";a("4b5f")},ac74:function(e,t,a){},ba46:function(e,t,a){"use strict";a("06bd")},cd49:function(e,t,a){"use strict";a.r(t),a.d(t,"observer",(function(){return Te}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var n,r=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[e._v("NPM Packages")]),a("v-spacer"),a("v-btn",{attrs:{href:"https://jsdelivr.com",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[e._v("Original")]),a("v-icon",[e._v("mdi-open-in-new")])],1)],1),a("v-main",[a("Body")],1),a("Footer")],1)},s=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("div",{staticClass:"body"},[a("div",{staticClass:"content"},[a("h1",{staticClass:"text-center"},[e._v("Welcome site!")]),a("Search"),a("Table")],1)])])},i=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-form",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Search package",autofocus:""},on:{keyup:e.searchPackages}})],1)],1)],1)],1)},u=[];a("d3b7"),a("4de4"),a("b0c0"),a("ac1f"),a("841c"),a("498a");(function(e){e["GET"]="get",e["POST"]="post"})(n||(n={}));var d="https://data.jsdelivr.com/v1",p=10,v=r["a"].extend({name:"Search",methods:{splitPages:function(e,t){return e.reduce((function(e,a,n){var r=Math.floor(n/t);return e[r]||(e[r]=[]),e[r].push(a),e}),[])},filterName:function(e){return this.$store.state.packages.filter((function(t){return t.name&&-1!==t.name.toLowerCase().trim().search(e)}))},searchPackages:function(e){var t=e.target.value.toLowerCase().trim(),a=this.filterName(t),n=this.splitPages(a,p);this.$store.commit("foundPackages",{pages:t?n:[],searchWord:t})}}}),f=v,g=a("2877"),h=a("6544"),b=a.n(h),m=a("62ad"),_=a("a523"),x=a("4bd4"),k=a("0fd9"),y=a("8654"),w=Object(g["a"])(f,l,u,!1,null,"14b002e2",null),C=w.exports;b()(w,{VCol:m["a"],VContainer:_["a"],VForm:x["a"],VRow:k["a"],VTextField:y["a"]});var P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Dialog"),a("div",{staticClass:"table"},[a("v-simple-table",{attrs:{height:"50vh"},scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v("Name")]),a("th",{staticClass:"text-left"},[e._v("Hits")])])]),a("tbody",e._l(e.listsPackage,(function(t){return a("tr",{key:t.hits,on:{click:function(a){return e.openDialog(t)}}},[a("td",[e._v(e._s(t.name))]),a("td",[e._v(e._s(t.hits))])])})),0)]},proxy:!0}])}),e.searchWord&&e.pageCount?a("div",{staticClass:"text-center pt-2"},[a("v-pagination",{attrs:{length:e.pageCount},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1):e._e()],1)],1)},j=[],O=a("1da1"),V=(a("96cf"),a("99af"),a("7db0"),{baseURL:d,urls:[],addUrl:function(e,t,a){this.urls.push({name:e,method:a,path:"".concat(this.baseURL,"/").concat(t)})}}),T=V,$=function(e){e.addUrl("allPackages","stats/packages",n.GET),e.addUrl("package","package/npm",n.GET)},S=(a("b64b"),a("159b"),a("a15b"),function(e){var t=[];return e&&Object.keys(e).length?(Object.keys(e).forEach((function(a){a in e&&t.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]))})),"?".concat(t.join("&"))):""}),D=function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t,a,n){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t).concat(n||"").concat(S(a)));case 2:return r=e.sent,e.next=5,r.json();case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),E=function(e,t,a,r){switch(e){case n.GET:return D(t.path,a,r);default:return Promise.resolve("nothing")}},R={get:function(e,t,a){var r=T.urls.find((function(t){return e===t.name}));return r?E(n.GET,r,t,a):Promise.resolve("nothing")}};$(T);var W=R,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{width:"500",height:"300px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5 grey lighten-2"},[e._v(" Detail information "),a("div",{staticClass:"icon-close"},[a("v-card-actions",[a("v-btn",{attrs:{icon:"",text:"",color:"black"},on:{click:e.closeDialog}},[a("v-icon",[e._v("mdi-close-circle-outline")])],1)],1)],1)]),e.loading?a("div",{staticClass:"loading text-center"},[a("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}})],1):e._e(),e.loading?e._e():a("div",{staticClass:"content"},[a("v-card-text",{staticClass:"text-h7"},[e.latest?a("div",[a("strong",[e._v("Latest:")]),e._v(" "+e._s(e.latest))]):e._e(),e.alpha?a("div",[a("strong",[e._v("Alpha:")]),e._v(" "+e._s(e.alpha))]):e._e(),e.beta?a("div",[a("strong",[e._v("Beta:")]),e._v(" "+e._s(e.beta))]):e._e(),e.canary?a("div",[a("strong",[e._v("Canary:")]),e._v(" "+e._s(e.canary))]):e._e(),e.rc?a("div",[a("strong",[e._v("Rc:")]),e._v(" "+e._s(e.rc))]):e._e(),e.versions.length?a("strong",[e._v("Versions:")]):e._e(),e._l(e.versions,(function(t){return a("div",{key:t},[a("b",[e._v(e._s(t))])])}))],2)],1)],1)],1)],1)},F=[],M=function(e){console.error(e)},U=r["a"].extend({name:"Dialog",data:function(){return{dialog:!1,latest:"",alpha:"",beta:"",canary:"",rc:"",versions:[],loading:!1}},methods:{closeDialog:function(){this.dialog=!1},getPackage:function(e){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,e){a.next=3;break}return a.abrupt("return",Promise.resolve("nothing"));case 3:return t.dialog=!0,t.loading=!0,a.next=7,W.get("package",{},"/".concat(e));case 7:n=a.sent,n&&(t.latest=n.tags.latest,t.alpha=null===n||void 0===n?void 0:n.tags.alpha,t.beta=n.tags.beta,t.canary=n.tags.canary,t.rc=n.tags.rc),t.versions=(null===n||void 0===n?void 0:n.versions)||[],t.loading=!1,a.next=16;break;case 13:a.prev=13,a.t0=a["catch"](0),M(a.t0.message);case 16:case"end":return a.stop()}}),a,null,[[0,13]])})))()}},created:function(){var e=this;Te.$on("sendDialog",(function(t){e.getPackage(t.name)}))}}),A=U,G=(a("11bf"),a("8336")),L=a("b0af"),I=a("99d9"),N=a("169a"),H=a("132d"),J=a("490a"),z=Object(g["a"])(A,B,F,!1,null,"c7f68852",null),Y=z.exports;b()(z,{VBtn:G["a"],VCard:L["a"],VCardActions:I["a"],VCardText:I["b"],VCardTitle:I["c"],VDialog:N["a"],VIcon:H["a"],VProgressCircular:J["a"]});var q=r["a"].extend({name:"Table",components:{Dialog:Y},data:function(){return{page:1}},methods:{openDialog:function(e){Te.$emit("sendDialog",e)}},computed:{searchWord:function(){return this.$store.state.searchWord},pageCount:function(){var e=this.$store.state,t=e.searchWord,a=e.pages;return t&&!a.length?0:a.length},currentPage:function(){var e=this.page-1;return this.$store.state.pages[e]},listsPackage:function(){var e,t,a=this.$store.state,n=a.searchWord,r=a.packages,o=[{name:"not found :(",hits:"",type:""}];return!n||null!==(e=this.currentPage)&&void 0!==e&&e.length?null!==(t=this.currentPage)&&void 0!==t&&t.length?this.currentPage:r:o}},created:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,W.get("allPackages");case 3:a=t.sent,e.$store.commit("newPackages",a),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),M(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}),K=q,Q=(a("33c6"),a("891e")),X=a("1f4f"),Z=Object(g["a"])(K,P,j,!1,null,"0782e179",null),ee=Z.exports;b()(Z,{VPagination:Q["a"],VSimpleTable:X["a"]});var te=r["a"].extend({name:"Body",components:{Search:C,Table:ee}}),ae=te,ne=(a("ba46"),Object(g["a"])(ae,c,i,!1,null,"407d1030",null)),re=ne.exports;b()(ne,{VContainer:_["a"]});var oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-footer",{attrs:{dark:"",padless:""}},[a("v-card",{staticClass:"indigo lighten-1 white--text text-center footer--text",attrs:{tile:""}},[a("v-card-text",{staticClass:"white--text"},[e._v(" "+e._s((new Date).getFullYear())+" — "),a("strong",[e._v("Капбасов Аруан")])])],1)],1)},se=[],ce={name:"Footer"},ie=ce,le=(a("6376"),a("553a")),ue=Object(g["a"])(ie,oe,se,!1,null,"b3a5b9a0",null),de=ue.exports;b()(ue,{VCard:L["a"],VCardText:I["b"],VFooter:le["a"]});var pe=r["a"].extend({name:"App",components:{Footer:de,Body:re}}),ve=pe,fe=a("7496"),ge=a("40dc"),he=a("f6c4"),be=a("2fa4"),me=Object(g["a"])(ve,o,s,!1,null,null,null),_e=me.exports;b()(me,{VApp:fe["a"],VAppBar:ge["a"],VBtn:G["a"],VIcon:H["a"],VMain:he["a"],VSpacer:be["a"]});var xe=a("8c4f");r["a"].use(xe["a"]);var ke=[{path:"/",name:"Home",component:re}],ye=new xe["a"]({mode:"history",base:"/",routes:ke}),we=ye,Ce=a("2909"),Pe=a("2f62");r["a"].use(Pe["a"]);var je=new Pe["a"].Store({state:{packages:[],pages:[],searchWord:""},mutations:{newPackages:function(e,t){e.packages=Object(Ce["a"])(t)},foundPackages:function(e,t){e.pages=Object(Ce["a"])(t.pages),e.searchWord=t.searchWord}},actions:{},modules:{}}),Oe=a("f309");r["a"].use(Oe["a"]);var Ve=new Oe["a"]({});r["a"].config.productionTip=!1;var Te=new r["a"];new r["a"]({router:we,store:je,vuetify:Ve,render:function(e){return e(_e)}}).$mount("#app")}});
//# sourceMappingURL=app.bf8b7924.js.map
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([9],{24:function(t,e,n){"use strict";var r=i(n(2)),s=i(n(25));function i(t){return t&&t.__esModule?t:{default:t}}n(0).default;new r.default(s.default).$mount()},25:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(27),s=n.n(r),i=n(31),a=!1;var o=function(t){a||n(26)},u=n(1)(s.a,i.a,o,null,null);u.options.__file="D:\\HBuilderXProject\\MyShopping\\pages\\home\\message.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] message.vue: functional components are not supported with templates, they should use render functions."),e.default=u.exports},26:function(t,e){},27:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,s=n(28),i=(r=s)&&r.__esModule?r:{default:r};function a(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function r(s,i){try{var a=e[s](i),o=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(o).then(function(t){r("next",t)},function(t){r("throw",t)});t(o)}("next")})}}var o=n(0).default;e.default={data:function(){return{title:"tabbar",scrollLeft:0,isClickChange:!1,currentTab:0,tabs:[{name:"朋友私信",id:"fm"},{name:"系统通知",id:"sm"}],newsitems:[]}},onShow:function(){console.log("onShow")},onLoad:function(){console.log("message111111"),this.newsitems=this.randomfn()},onUnload:function(){this.scrollLeft=0,this.isClickChange=!1,this.currentTab=0},onPullDownRefresh:function(){setTimeout(function(){o.stopPullDownRefresh()},3e3)},methods:{bindChange:function(){var t=a(i.default.mark(function t(e){var n,r,s,a,u,c,l,f,h;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.target.current,!this.isClickChange){t.next=5;break}return this.currentTab=n,this.isClickChange=!1,t.abrupt("return");case 5:return t.next=7,this.getWidth("tab-bar");case 7:r=t.sent,s=r.scrollLeft,a=0,u=0;case 11:if(!(u<n)){t.next=19;break}return t.next=14,this.getWidth(this.tabs[u].id);case 14:c=t.sent,a+=c.width;case 16:u++,t.next=11;break;case 19:return l=o.getSystemInfoSync().windowWidth,t.next=22,this.getWidth(this.tabs[n].id);case 22:f=t.sent,h=f.width,a+h-s>l&&(this.scrollLeft=a+h-l),a<s&&(this.scrollLeft=a),this.isClickChange=!1,this.currentTab=n;case 28:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),getWidth:function(t){return new Promise(function(e,n){o.createSelectorQuery().select("#"+t).fields({size:!0,scrollOffset:!0},function(n){"tab-bar"===t&&console.log("id=",t,"数据:",n),e(n)}).exec()})},swichNav:function(){var t=a(i.default.mark(function t(e){var n,r;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.currentTab!==e.target.dataset.current){t.next=4;break}return t.abrupt("return",!1);case 4:return t.next=6,this.getWidth("tab-bar");case 6:n=t.sent,r=n.scrollLeft,this.scrollLeft=r,this.isClickChange=!0,this.currentTab=e.target.dataset.current;case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),loadMore:function(t){for(var e=this.newsitems[t][this.newsitems[t].length-1].label,n=this.newsitems[t][this.newsitems[t].length-1].name,r=1;r<=10;r++)this.newsitems[t].push({name:n,label:r+e})},randomfn:function(){for(var t=[],e=0,n=this.tabs.length;e<n;e++){for(var r=[],s=1;s<=20;s++)r.push({name:this.tabs[e].name,label:s});t.push(r)}return t}}}},31:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"index"},[n("scroll-view",{staticClass:"swiper-tab",attrs:{id:"tab-bar","scroll-x":"","scroll-left":t.scrollLeft}},t._l(t.tabs,function(e,r){return n("block",{key:e.id},[n("view",{class:["swiper-tab-list",t.currentTab==r?"on":""],attrs:{id:e.id,"data-current":r,eventid:"0-"+r},on:{tap:t.swichNav}},[t._v(t._s(e.name))])])})),t._v(" "),n("swiper",{staticClass:"swiper-box",attrs:{current:t.currentTab,duration:"300",eventid:"2"},on:{change:t.bindChange}},t._l(t.newsitems,function(e,r){return n("block",{key:r},[n("swiper-item",{attrs:{mpcomid:"0-"+r}},[n("scroll-view",{staticClass:"index-bd",attrs:{"scroll-y":"",eventid:"1-"+r},on:{scrolltolower:function(e){t.loadMore(r)}}},t._l(e,function(e,r){return n("block",{key:r},[n("view",{staticClass:"tab-list"},[t._v(t._s(e.name)+"-"+t._s(e.label))])])}))],1)],1)}))],1)};r._withStripped=!0;var s={render:r,staticRenderFns:[]};e.a=s}},[24]);
//# sourceMappingURL=../../.sourcemap/pages/home/message.js.map
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([10],{52:function(t,e,n){"use strict";var i=l(n(1)),a=l(n(53));function l(t){return t&&t.__esModule?t:{default:t}}new i.default(a.default).$mount()},53:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(55),a=n.n(i),l=n(56);var o=function(t){n(54)},s=n(0)(a.a,l.a,o,null,null);e.default=s.exports},54:function(t,e){},55:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{title:"map",latitude:39.909,longitude:116.39742,covers:[{latitude:39.909,longitude:116.39742,iconPath:"../../../static/location.png"},{latitude:39.9,longitude:116.39,iconPath:"../../../static/location.png"}],pxds:[{points:[{latitude:39.909,longitude:116.39742},{latitude:39.9,longitude:116.39}],color:"#000000AA",width:2,dottedLine:!1}],testSrc:"",openOff:"关闭",timer:null,top:"30upx"}},onLoad:function(){},onUnload:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},methods:{getCaputure:function(){var t,e=getCurrentPages();t=e[e.length-1].$getAppWebview(),this.drowCaputure(t)},drowCaputure:function(t){var e=this,n=null;n=new plus.nativeObj.Bitmap("test"),t.draw(n,function(){console.log("成功"),console.log(),e.testSrc=n.toBase64Data()},function(t){console.log("失败"+JSON.stringify(t))})},switchChange:function(e){console.log("switch1 发生 change 事件，携带值为"+e.detail.value),e.detail.value?(this.openOff="打开",this.timer=setInterval(function(){t.vibrateLong({success:function(){console.log("success")}}),clearInterval()},1e3)):(this.openOff="关闭",this.timer&&(clearInterval(this.timer),this.timer=null))},switch2Change:function(t){console.log("switch2 发生 change 事件，携带值为"+t.detail.value)}},mounted:function(){var t=!0,e=!1,n=void 0;try{for(var i,a=[{a:1},{b:2}][Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var l=i.value;console.log(JSON.stringify(l))}}catch(t){e=!0,n=t}finally{try{!t&&a.return&&a.return()}finally{if(e)throw n}}}}}).call(e,n(2).default)},56:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("page-head",{attrs:{title:t.title,mpcomid:"bNF-0"}}),t._v(" "),n("view",{staticClass:"page-body"},[n("view",{staticClass:"page-section page-section-gap"},[n("map",{attrs:{id:"map",latitude:t.latitude,longitude:t.longitude,polyline:t.pxds,markers:t.covers}})],1)]),t._v(" "),n("view",{staticClass:"uni-list"},[n("view",{staticClass:"uni-list-cell uni-list-cell-pd"},[n("view",{staticClass:"uni-list-cell-db",domProps:{textContent:t._s(t.openOff)}}),t._v(" "),n("switch",{attrs:{eventid:"8yG-0"},on:{change:t.switchChange}})])]),t._v(" "),n("button",{attrs:{eventid:"eAH-1"},on:{click:t.getCaputure}},[t._v("截屏")]),t._v(" "),n("image",{attrs:{src:t.testSrc}})],1)},staticRenderFns:[]};e.a=i}},[52]);
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([12],{37:function(t,e,i){"use strict";var s=l(i(2)),n=l(i(38));function l(t){return t&&t.__esModule?t:{default:t}}i(0).default;new s.default(n.default).$mount()},38:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(40),n=i.n(s),l=i(41),a=!1;var r=function(t){a||i(39)},c=i(1)(n.a,l.a,r,null,null);c.options.__file="D:\\HBuilderXProject\\MyShopping\\pages\\home\\lookme\\selfInfo.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] selfInfo.vue: functional components are not supported with templates, they should use render functions."),e.default=c.exports},39:function(t,e){},40:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(0).default;e.default={data:function(){return{imgSrc:"../../../static/shuijiao.jpg"}},methods:{onClickChangePhoto:function(){var t=this;s.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){console.log(JSON.stringify(e.tempFilePaths)),t.imgSrc=e.tempFilePaths[0]}})},onClickPreImg:function(){s.previewImage({urls:[this.imgSrc]})}}}},41:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticStyle:{height:"100%","background-color":"rgb(240,239,245)"}},[i("view",{staticClass:"uni-list"},[i("view",{staticClass:"uni-list-cell"},[i("view",{staticClass:"uni-list-cell-navigate"},[i("text",{attrs:{eventid:"0"},on:{click:t.onClickChangePhoto}},[t._v("头像")]),t._v(" "),i("image",{staticStyle:{width:"80upx",height:"80upx","border-radius":"50%"},attrs:{src:t.imgSrc,eventid:"1"},on:{click:t.onClickPreImg}})])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)]),t._v(" "),i("view",{staticStyle:{"margin-left":"20upx","margin-top":"25upx"}},[t._v("根据你设置的目标公司和职位定制专属智能试卷")])])};s._withStripped=!0;var n={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"uni-list-cell"},[e("view",{staticClass:"uni-list-cell-navigate"},[e("text",[this._v("牛客ID")]),this._v(" "),e("text",{staticStyle:{color:"#777777","margin-right":"20upx"}},[this._v("293704")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"uni-list-cell"},[e("view",{staticClass:"uni-list-cell-navigate uni-navigate-right"},[e("text",[this._v("昵称")]),this._v(" "),e("text",{staticStyle:{color:"#777777","margin-right":"20upx"}},[this._v("Running Snail")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"uni-list-cell"},[e("view",{staticClass:"uni-list-cell-navigate uni-navigate-right"},[e("text",[this._v("学校")]),this._v(" "),e("text",{staticStyle:{color:"#777777","margin-right":"20upx"}},[this._v("郑州大学")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"uni-list-cell"},[e("view",{staticClass:"uni-list-cell-navigate uni-navigate-right"},[e("text",[this._v("想去的公司")]),this._v(" "),e("text",{staticStyle:{color:"#777777","margin-right":"20upx"}},[this._v("BAT")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"uni-list-cell"},[e("view",{staticClass:"uni-list-cell-navigate uni-navigate-right"},[e("text",[this._v("从事的工作")]),this._v(" "),e("text",{staticStyle:{color:"#777777","margin-right":"20upx"}},[this._v("移动开发工程师")])])])}]};e.a=n}},[37]);
//# sourceMappingURL=../../../.sourcemap/pages/home/lookme/selfInfo.js.map
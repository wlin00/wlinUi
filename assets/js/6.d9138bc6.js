(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{377:function(t,n,e){},378:function(t,n,e){},379:function(t,n,e){},380:function(t,n,e){},381:function(t,n,e){},394:function(t,n,e){"use strict";var i={name:"WlinContent"},s=(e(401),e(64)),l=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)}),[],!1,null,"292e0ceb",null);n.a=l.exports},395:function(t,n,e){"use strict";var i={name:"WlinSider",methods:{hide:function(){this.visibal=!this.visibal}},data:function(){return{visibal:!0}}},s=(e(402),e(64)),l=Object(s.a)(i,(function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"hide"}},[this.visibal?n("div",{staticClass:"sider"},[this._t("default"),this._v(" "),n("button",{on:{click:this.hide}},[this._v("关闭")])],2):this._e()])}),[],!1,null,"960c4e64",null);n.a=l.exports},396:function(t,n,e){"use strict";var i={name:"WlinFooter"},s=(e(403),e(64)),l=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"c06718e6",null);n.a=l.exports},397:function(t,n,e){"use strict";var i={name:"WlinHeader"},s=(e(404),e(64)),l=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"407d1545",null);n.a=l.exports},398:function(t,n,e){"use strict";e(9),e(96),e(65);var i={name:"WlinLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;console.log(this.$children),this.$children.forEach((function(n){console.log(n.$options.name),"WlinSider"===n.$options.name&&(t.layoutClass.hasSider=!0)}))}},s=(e(405),e(64)),l=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"3f199f6c",null);n.a=l.exports},401:function(t,n,e){"use strict";e(377)},402:function(t,n,e){"use strict";e(378)},403:function(t,n,e){"use strict";e(379)},404:function(t,n,e){"use strict";e(380)},405:function(t,n,e){"use strict";e(381)},520:function(t,n,e){},521:function(t,n,e){},598:function(t,n,e){"use strict";e(520)},599:function(t,n,e){"use strict";e(521)},641:function(t,n,e){"use strict";e.r(n);e(365),e(31),e(95);var i=e(398),s=e(397),l=e(396),a=e(394),o=e(395),c=(e(367),e(368),window.Prism),r={components:{WlinLayout:i.a,WlinHeader:s.a,WlinFooter:l.a,WlinContent:a.a,WlinSider:o.a},computed:{computeContent:function(){return c.highlight(this.content,c.languages.html,"html")}},data:function(){return{content:'\n         <wlin-layout style="color: white; margin-bottom:50px;">\n          <wlin-header style="height: 50px; background:lightskyblue;">\n            header\n          </wlin-header>\n          <wlin-content style="height: 100px; background:deepskyblue;">\n            content\n          </wlin-content>\n          <wlin-footer style="height: 50px; background:lightskyblue;">\n            footer\n          </wlin-footer>\n        </wlin-layout>\n    '.replace(/^ {8}/gm,"").trim()}}},u=(e(598),e(599),e(64)),h=Object(u.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{"padding-top":"16px"}},[e("h2",[t._v("简单模式")]),t._v(" "),t._m(0),t._v(" "),e("wlin-layout",{staticStyle:{color:"white","margin-bottom":"50px"}},[e("wlin-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n      header\n    ")]),t._v(" "),e("wlin-content",{staticStyle:{height:"100px",background:"deepskyblue"}},[t._v("\n      content\n    ")]),t._v(" "),e("wlin-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n      footer\n    ")])],1),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"demo-code"},[e("pre",{staticClass:"language-html wlin-pre",domProps:{innerHTML:t._s(t.computeContent)}})])],1)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("预览")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("代码")])])}],!1,null,"d8a7f6a4",null);n.default=h.exports}}]);
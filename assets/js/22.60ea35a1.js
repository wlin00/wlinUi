(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{363:function(t,n,s){"use strict";var o=s(11),e=s(4),a=s(3),i=s(123),l=s(17),c=s(10),r=s(191),d=s(32),f=s(67),u=s(192),v=s(2),p=s(66).f,g=s(33).f,m=s(13).f,h=s(370),C=s(372).trim,_=e.Number,w=_.prototype,b=e.TypeError,y=a("".slice),N=a("".charCodeAt),E=function(t){var n=u(t,"number");return"bigint"==typeof n?n:S(n)},S=function(t){var n,s,o,e,a,i,l,c,r=u(t,"number");if(f(r))throw b("Cannot convert a Symbol value to a number");if("string"==typeof r&&r.length>2)if(r=C(r),43===(n=N(r,0))||45===n){if(88===(s=N(r,2))||120===s)return NaN}else if(48===n){switch(N(r,1)){case 66:case 98:o=2,e=49;break;case 79:case 111:o=8,e=55;break;default:return+r}for(i=(a=y(r,2)).length,l=0;l<i;l++)if((c=N(a,l))<48||c>e)return NaN;return parseInt(a,o)}return+r};if(i("Number",!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var x,I=function(t){var n=arguments.length<1?0:_(E(t)),s=this;return d(w,s)&&v((function(){h(s)}))?r(Object(n),s,I):n},R=o?p(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),O=0;R.length>O;O++)c(_,x=R[O])&&!c(I,x)&&m(I,x,g(_,x));I.prototype=w,w.constructor=I,l(e,"Number",I,{constructor:!0})}},370:function(t,n,s){var o=s(3);t.exports=o(1..valueOf)},375:function(t,n,s){},376:function(t,n,s){},392:function(t,n,s){"use strict";var o=s(51),e=(s(124),s(9),s(96),s(190),s(363),s(194),function(t){var n=Object.keys(t),s=!0;return n.forEach((function(t){["span","offset"].includes(t)||(s=!1)})),s}),a={name:"wlinCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},phone:{type:Object,validator:e},ipad:{type:Object,validator:e},pc:{type:Object,validator:e}},data:function(){return{gutter:0}},computed:{colClass:function(){var t=this.span,n=this.offset,s=this.phone,e=this.ipad,a=this.pc,i=[],l=[],c=[];return s&&(i=["col-phone-".concat(s.span),"offset-phone-".concat(s.offset)]),e&&(l=["col-ipad-".concat(e.span),"offset-ipad-".concat(e.offset)]),a&&(c=["col-pc-".concat(a.span),"offset-pc-".concat(a.offset)]),[t&&"col_".concat(t),n&&"offset_".concat(n)].concat(Object(o.a)(i),Object(o.a)(l),Object(o.a)(c))},colStyle:function(){var t=this.gutter;return{paddingLeft:t?this.gutter/2+"px":0,paddingRight:t?this.gutter/2+"px":0}}}},i=(s(399),s(64)),l=Object(i.a)(a,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[n("div",{staticStyle:{border:"1px solid green",height:"100px"}},[this._t("default")],2)])}),[],!1,null,"571ef941",null);n.a=l.exports},393:function(t,n,s){"use strict";s(363),s(190),s(9),s(96);var o={name:"wlinRow",props:{gutter:{type:[Number,String]},align:{type:String,default:"center",validator:function(t){return["center","left","right"].includes(t)}}},mounted:function(t){var n=this;console.log(this.$children),this.$children.forEach((function(t){t.gutter=n.gutter}))},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:t?-t/2+"px":0,marginRight:t?-t/2+"px":0}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}}},e=(s(400),s(64)),a=Object(e.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"16adaa78",null);n.a=a.exports},399:function(t,n,s){"use strict";s(375)},400:function(t,n,s){"use strict";s(376)},511:function(t,n,s){},512:function(t,n,s){},589:function(t,n,s){"use strict";s(511)},590:function(t,n,s){"use strict";s(512)},636:function(t,n,s){"use strict";s.r(n);s(365),s(31),s(95);var o=s(393),e=s(392),a=(s(367),s(368),window.Prism),i={components:{WlinRow:o.a,WlinCol:e.a},computed:{computeStyle:function(){return a.highlight(this.style,a.languages.css,"css")},computeContent:function(){return a.highlight(this.content,a.languages.html,"html")}},data:function(){return{style:"* {\n   box-sizing: border-box;\n }\n .demoRow{\n   margin: 10px 0;\n }\n .demoCol {\n   height: 50px;\n   border: 1px solid #ccc;\n   background: #eee;\n   display: flex;\n   justify-content: center;\n   align-items: center;\n }",content:'\n         <g-row class="demoRow" gutter="10">\n           <g-col span="8">\n             <div class="demoCol">8</div>\n           </g-col>\n           <g-col span="8" offset="8">\n             <div class="demoCol">8</div>\n           </g-col>\n         </g-row>\n         <g-row class="demoRow" gutter="10">\n           <g-col span="6" offset="6">\n             <div class="demoCol">6</div>\n           </g-col>\n           <g-col span="6" offset="6">\n             <div class="demoCol">6</div>\n           </g-col>\n         </g-row>\n         <g-row class="demoRow" gutter="10">\n           <g-col span="4">\n             <div class="demoCol">4</div>\n           </g-col>\n           <g-col span="4" offset="4">\n             <div class="demoCol">4</div>\n           </g-col>\n           <g-col span="4" offset="8">\n             <div class="demoCol">4</div>\n           </g-col>\n         </g-row>\n         <g-row class="demoRow" gutter="10">\n           <g-col span="2">\n             <div class="demoCol">2</div>\n           </g-col>\n           <g-col span="2" offset="2">\n             <div class="demoCol">2</div>\n           </g-col>\n           <g-col span="2">\n             <div class="demoCol">2</div>\n           </g-col>\n           <g-col span="2" offset="2">\n             <div class="demoCol">2</div>\n           </g-col>\n           <g-col span="2">\n             <div class="demoCol">2</div>\n           </g-col>\n           <g-col span="2" offset="2">\n             <div class="demoCol">2</div>\n           </g-col>\n           <g-col span="2">\n             <div class="demoCol">2</div>\n           </g-col>\n           <g-col span="2" offset="2">\n             <div class="demoCol">2</div>\n           </g-col>\n         </g-row>\n     '.replace(/^ {8}/gm,"").trim()}}},l=(s(589),s(590),s(64)),c=Object(l.a)(i,(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticStyle:{"padding-top":"16px"}},[s("h2",[t._v("设置空隙")]),t._v(" "),t._m(0),t._v(" "),s("wlin-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[s("wlin-col",{attrs:{span:"8"}},[s("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),s("wlin-col",{attrs:{span:"8",offset:"8"}},[s("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),s("wlin-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[s("wlin-col",{attrs:{span:"6",offset:"6"}},[s("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),s("wlin-col",{attrs:{span:"6",offset:"6"}},[s("div",{staticClass:"demoCol"},[t._v("6")])])],1),t._v(" "),s("wlin-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[s("wlin-col",{attrs:{span:"4"}},[s("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),s("wlin-col",{attrs:{span:"4",offset:"4"}},[s("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),s("wlin-col",{attrs:{span:"4",offset:"8"}},[s("div",{staticClass:"demoCol"},[t._v("4")])])],1),t._v(" "),s("wlin-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[s("wlin-col",{attrs:{span:"2"}},[s("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),s("wlin-col",{attrs:{span:"2",offset:"2"}},[s("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),s("wlin-col",{attrs:{span:"2"}},[s("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),s("wlin-col",{attrs:{span:"2",offset:"2"}},[s("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),s("wlin-col",{attrs:{span:"2"}},[s("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),s("wlin-col",{attrs:{span:"2",offset:"2"}},[s("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),s("wlin-col",{attrs:{span:"2"}},[s("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),s("wlin-col",{attrs:{span:"2",offset:"2"}},[s("div",{staticClass:"demoCol"},[t._v("2")])])],1),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"demo-code"},[s("pre",{staticClass:"language-html wlin-pre",domProps:{innerHTML:t._s(t.computeStyle)}})]),t._v(" "),s("div",{staticClass:"demo-code",staticStyle:{"margin-top":"16px"}},[s("pre",{staticClass:"language-html wlin-pre",domProps:{innerHTML:t._s(t.computeContent)}})])],1)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("预览")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("代码")])])}],!1,null,"5ed5c8e8",null);n.default=c.exports}}]);